// lunar lander

import { TSXBoard, Point } from "../lib/tsxgraph.js"    // note: we need the '.js'
let TSX = new TSXBoard('jxgbox')

// define and initialize the game variables
let shipVelocity = [3, 1]  // units per second
let shipPosition = [-70, 180]
let shipRotation = -Math.PI / 2
let shipThruster = 0   //  values from 0 to 1
let gravity = .01  // units per second per second

let terrain: Point[] = [];
let shipModel: any = []
let shipPoints: Point[] = []

let gameOver = false
let shockwaveSize = 10

TSX.on('keydown', (e: any) => {
    if ('code' in e) {
        //  only allow left/right if going up/down, etc
        if (e.code == 'ArrowLeft') shipRotation += 0.1
        if (e.code == 'ArrowRight') shipRotation -= 0.1
        if (e.code == 'ArrowUp') shipThruster = Math.min(3, shipThruster + .1)
        if (e.code == 'ArrowDown') shipThruster = Math.max(0, shipThruster - .1)
        // ignore everything else
    }
});


// make the terrain - two mountain ranges with a landing pad between
let makeTerrain = () => {
    let mountains = [-300, 10]    // left mountains start at -300,  right mountains start at 10

    for (let k = 0; k < mountains.length; k++) {
        let xStart = mountains[k]        // 300 to -10, then 10 to 300
        let xWidth = 290
        let nPoints = 20
        let maxHeight = 130;

        // first create a rough landscape that starts and ends with y=0
        let roughPoints: Point[] = [];
        let step = xWidth / nPoints
        let x = xStart + step

        for (let i = 0; i < nPoints - 2; i++) {
            roughPoints.push(TSX.Point([x, (Math.random() + .2) * maxHeight], { opacity: 0 }))
            x += step
        }

        // create a more detailed terrain by going through each segment of roughPoints and interpolate more points
        terrain.push(TSX.Point([xStart, 0], { opacity: 0 }))    // initial point to start the polygon properly

        nPoints = 5 // adjust to make attractive
        for (let i = 0; i < roughPoints.length - 1; i++) {   // don't look at LAST element because we compare n and n+1
            let x = roughPoints[i].X()  // startX
            let slope = (roughPoints[i + 1].Y() - roughPoints[i].Y()) / nPoints   // points slope with rough segment
            let scale = Math.abs((roughPoints[i + 1].Y() - roughPoints[i].Y())) / 4  // biggest variation is 25%

            for (let j = 0; j < nPoints; j++) {
                terrain.push(TSX.Point([x, roughPoints[i].Y() + ((Math.random() - .5) * scale) + (j * slope)], { opacity: 0 }))
                x += step / nPoints
            }
        }
        terrain.push(TSX.Point([x + step, 0], { opacity: 0 }))    // final point to close off polygon properly
    }
}


// create the moon lander model and then build a ship
let createShip = () => {

    // build the model geometry
    let thruster = shipModel.push([0, 0], [-.8, -2], [.8, -2])
    let body = shipModel.push([-2.5, -1], [-2.5, .8], [2.5, .8], [2.5, -1])
    let pod = shipModel.push([0, 1.5], [1, 2])   // two circles
    let leftLeg = shipModel.push([-.7, -.5], [-1.5, -2.4], [-2, -2.4], [-1, -2.4])
    let rightLeg = shipModel.push([.7, -.5], [1.5, -2.4], [2, -2.4], [1, -2.4])

    // create a point for each vertex of the model
    for (let i = 0; i < shipModel.length; i++) {
        shipPoints.push(TSX.Point(shipModel[i], { opacity: 0 }))
    }

    // build the model using the vertex points
    TSX.Polygon(shipPoints.slice(0, thruster), { fillColor: 'red', opacity: .7 })  // thruster
    TSX.Polygon(shipPoints.slice(body - 4, body), { fillColor: 'gold', opacity: 1 })  // body

    TSX.Circle(shipPoints[pod - 2], 1.5, { fillColor: 'lightblue' })   // pod (two circles)
    TSX.Circle(shipPoints[pod - 1], .5, { fillColor: 'white' })
    TSX.Segment(shipPoints[leftLeg - 4], shipPoints[leftLeg - 3])  // leftLeg
    TSX.Segment(shipPoints[leftLeg - 2], shipPoints[leftLeg - 1], { strokeWidth: 4 })
    TSX.Segment(shipPoints[rightLeg - 4], shipPoints[rightLeg - 3])  // rightLeg
    TSX.Segment(shipPoints[rightLeg - 2], shipPoints[rightLeg - 1], { strokeWidth: 4 })
}


let move = () => {
    for (let i = 0; i < shipPoints.length; i++) {
        let position = [shipModel[i][0], shipModel[i][1]]   // make a copy!! don't update original

        // scale ONLY the thruster
        if (i <= 2)
            position = [position[0] * shipThruster * 4, position[1] * shipThruster * 4]

        // must rotate before tanslate
        // x1 = cos(r) * x - sin(r) * y
        // y1 = sin(r) * x + cos(r) * y
        position =
            [position[0] * Math.cos(shipRotation) - position[1] * Math.sin(shipRotation),
            position[0] * Math.sin(shipRotation) + position[1] * Math.cos(shipRotation)]

        // translation - just add the value
        position = [position[0] + shipPosition[0], position[1] + shipPosition[1]]

        shipPoints[i].setPositionDirectly(TSX.COORDS_BY_USER,position)
    }
    TSX.update()
}


let testForCrash = (() => {
    for (let i = 0; i < terrain.length; i++) {
        // check distance, but also Y is above rock (can power-dive into mountain too fast to catch)
        if (terrain[i].Dist(shipPoints[0]) < 3 ||  // we are close enough to target
            (Math.abs(terrain[i].X() - shipPoints[0].X()) < 3 && (terrain[i].Y() > shipPoints[0].Y())) ||
            shipPoints[0].Y() < 1) {        // could happen at landing pad, where terrain[i]s are far apart

            gameOver = true;
            shockwaveSize = .5
            shockwave.setAttribute({ opacity: 1 })
            shipThruster = 0  // turn off thruster
            move()
            break
        }
    }
})


let testForLanding = () => {
    if (!gameOver) {
        if (Math.abs(shipPosition[0]) < 7  // if any bigger then can be in walls
            && shipPosition[1] < 5      // can't go below zero or crash
            && Math.abs(shipVelocity[0]) < 2
            && Math.abs(shipVelocity[1]) < 2) {

            gameOver = true;

            shipPosition[1] = 3     // plant the pads
            shipVelocity = [0, 0]
            shipRotation = 0  // straighten the ship
            shipThruster = 0
            move()

            TSX.Text([-1, 9], 'Well Done!', { fontSize: 40 })
        }
    }
}

let rescaleWindow = () => {

    // move and rescale the window
    let distance = Math.sqrt(Math.pow(shipPosition[0], 2) + Math.pow(shipPosition[1], 2))  // pythagoras
    if (distance < 50)
        TSX.setBoundingBox([-25, 50, 25, 0])
    // indicator.setAttribute(visible:false)
    else if (distance < 100)
        TSX.setBoundingBox([-50, 100, 50, 0])
    else if (distance < 200)
        TSX.setBoundingBox([-100 + shipPosition[0], 200, 100 + shipPosition[0], 0])
    else
        TSX.setBoundingBox([-200 + shipPosition[0], 400, 200 + shipPosition[0], 0])
}





makeTerrain()
TSX.Polygon(terrain)
// let indicator = TSX.text([-20, 49], () => `X:${shipPosition[0].toFixed(2)} Y:${shipPosition[1].toFixed(2)} dX:${shipVelocity[0].toFixed(2)} dY:${shipVelocity[1].toFixed(2)}`)

// TSX.setBoundingBox(-30, 40, 15, -5)
// TSX.addAxis()
// TSX.circle([0, 0], 3)

let ship = createShip()
let shockwave = TSX.Circle(shipPoints[0], () => shockwaveSize, { strokeColor: 'red', strokeWidth: 5, opacity: 0 })
move()    // quick move to position the ship

let runGame = () => {


    if (!gameOver) {
        testForLanding()
        testForCrash()
    }


    if (!gameOver) {   // only run if not crashed or landed
        rescaleWindow()

        shipVelocity[0] += shipThruster * .01 * -Math.sin(shipRotation)
        shipVelocity[1] += shipThruster * .01 * Math.cos(shipRotation) - gravity
        shipPosition[0] += shipVelocity[0] / 10
        shipPosition[1] += shipVelocity[1] / 10

    }
    // shockwave gets reset and becomes visible on crash
    if (shockwaveSize < 10) {
        shockwaveSize += .1

        shockwave.setAttribute({ strokeWidth: 10 - shockwaveSize, opacity: 10 - shockwaveSize })
    }
    move()
}

setInterval(runGame, 10);
