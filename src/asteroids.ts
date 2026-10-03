// Asteroids game.  grotesquely inefficient, more for fun of writing 
import { TSXBoard, Point, Polygon, Image, Group, Rotate } from "../lib/tsxgraph.js"    // note: we need the '.js'


let TSX = new TSXBoard('jxgbox')
TSX.addAxis()
let dim = 130    // keep adjusting this during development
TSX.setBoundingBox([-dim, dim, dim, -dim])

let gameCircle = 150  // outside view screen
TSX.Circle([0, 0], gameCircle)   // for reference, this is outside the board everywhere


/** random real number from a range */
function randomFromInterval(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

/** centroid of a polygon's pointAddrs */
function centroid(pointAddrs: number[][]): number[] {
    let sumOf = [0, 0]
    pointAddrs.forEach((addr: number[]) => { sumOf[0] += addr[0]; sumOf[1] += addr[1] });
    return [sumOf[0] / pointAddrs.length, sumOf[1] / pointAddrs.length]
}

/** midpoint pointAddr between two pointAddrs */
function midPoint(a: number[], b: number[]): number[] {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
}

/** nicer random velocity, prevents asteroids from just hanging near zero */
function randomVelocity(): number {
    let sign = Math.random() < 0.5 ? -1 : 1
    return sign * randomFromInterval(.1, .2)
}

/** nicer random velocity, prevents asteroids from just hanging near zero */
function randomAngular(): number {
    let sign = Math.random() < 0.5 ? -1 : 1
    return sign * randomFromInterval(.01, .03)
}

function outsideGame(x: number, y: number): boolean {
    return (x * x + y * y) > (gameCircle * gameCircle)
}

let listOfThings: Thing[] = [];       // every update runs through this list looking for collisions  n^2 !!
let listOfAsteroids: Asteroid[] = []  // finite number so can reuse 
// let listOfAliens: Alien[] = []        // traditional game only has one

class Thing {
    thingID = Symbol()      // so we can find parents and children 
    parent: Symbol | null = null

    thingType: 'asteroid' | 'chunk' | 'fragment'


    opacity: number = 1     // opacity 0 stuff doesn't collide
    radius: number          // collision boundary
    centroid: number[]      // offset from [0,0] so can reset object

    pointAddrs: number[][] = []     // point addresses relative to the origin (or centroid if specified)
    points: Point[] = []            // actual points, to apply translation, rotation, scaling to 
    polygon: Polygon                // the shape, so we can apply attributes

    // where we are now
    position: number[] = [0, 0]
    rotation: number = 0  // current rotation in radians
    scaleX: number = 1
    scaleY: number = 1

    // where we are going
    velocity: number = randomVelocity()  // user units per second 
    angular: number = randomAngular()    // radians per second
    direction: number[] = [0,0]          // will be set by asteroid 


    /** build from array of points, collision-radiuswith optional center for rotation */
    constructor(
        thingType: 'asteroid' | 'chunk' | 'fragment',
        pointAddrs: number[][],
        radius: number,
        centroid: number[],
        parent: Symbol | null = null) {  // array of xy coords
        this.pointAddrs = pointAddrs.map((xy) => [xy[0], xy[1]])    // keep a cloned copy

        this.centroid = centroid
        this.thingType = thingType
        this.points = this.pointAddrs.map((p) => TSX.Point(p, { visible: false }))   // turn xy coords into points
        this.opacity = this.thingType == 'asteroid' ? 1 : 0
        this.polygon = TSX.Polygon(this.points, { opacity: this.opacity, borders: { opacity: this.opacity } })


        this.radius = radius
        listOfThings.push(this)     // add to listOfThings so it receives updates
    }

    updatePosition() {
        // update the position
        for (let i = 0; i < this.pointAddrs.length; i++) {

            // keep updating asteroids, even if invisible, so we can reset
            if (this.thingType !== 'asteroid' && this.opacity == 0) continue;       // don't bother with stuff that we can't see

            this.position[0] += this.velocity * this.direction[0]
            this.position[1] += this.velocity * this.direction[1]
            this.rotation += this.angular


            // now translate and rotate to a new position
            // starting position corrected by centroid distance from origin
            let position = [this.pointAddrs[i][0] - this.centroid[0], this.pointAddrs[i][1] - this.centroid[1]]  // starting position around origin

            // uniform scaling if sx == sy
            position = [position[0] * this.scaleX, position[1] * this.scaleY]

            // must rotate before tanslate
            position =
                [position[0] * Math.cos(this.rotation) - position[1] * Math.sin(this.rotation),
                position[0] * Math.sin(this.rotation) + position[1] * Math.cos(this.rotation)]

            // translation - just add the value
            position = [position[0] + this.position[0], position[1] + this.position[1]]

            this.points[i].moveTo([position[0], position[1]])  // finally move this point
        }
    }

    setOpacity(n: number) {
        this.polygon.setAttribute({ opacity: n })
        this.polygon.setAttribute({ borders: { opacity: n } })
    }
}



/** the class that controls asteroids.  It represents a flock of things*/
class Asteroid {
    asteroidID: Symbol       // symbol of whole asteroid, look in listOfThings to find chunks and fragments
    asteroid: Thing           // the big piece, so we can reset it

    constructor() {
        // we create a circle with five points
        let radius = 15
        let nPoints = 6

        let points: number[][] = []
        for (let i = 0; i < nPoints; i++) {
            let slice = 2 * Math.PI / nPoints * i
            let thisPoint = [(radius) * Math.sin(slice), (radius) * Math.cos(slice)]
            thisPoint[0] += randomFromInterval(-radius / 3, radius / 3)
            thisPoint[1] += randomFromInterval(-radius / 3, radius / 3)
            points.push(thisPoint)
        }
        this.asteroid = new Thing('asteroid', points, radius, [0, 0])  // starts as visible
        this.asteroidID = this.asteroid.thingID

        // now create triangular chunks (after breakup) based on same model
        let chunks: Thing[] = []
        for (let i = 0; i < nPoints - 1; i++) {   // one less because we use point and point+1
            let nearCenter = [randomFromInterval(-radius / 5, radius / 5), randomFromInterval(-radius / 5, radius / 5)]
            // use radius/3.5 so easier to separate when astroid breaks up, or get immediate collisions between chunks
            chunks.push(new Thing('chunk', [points[i], points[i + 1], nearCenter], radius / 3.5, centroid([points[i], points[i + 1], nearCenter]), this.asteroidID))
        }

        // and part that connects last to first
        let nearCenter = [randomFromInterval(-radius / 5, radius / 5), randomFromInterval(-radius / 5, radius / 5)]
        chunks.push(new Thing('chunk', [points[nPoints - 1], points[0], nearCenter], radius / 3.5, centroid([points[nPoints - 1], points[0], nearCenter]), this.asteroidID))


        // now create six triangle fragments, from when chunks break up.
        chunks.forEach((chunk) => {
            let CT = centroid(chunk.pointAddrs)   // we know exactly three pointAddrs in each chunk
            let a = chunk.pointAddrs[0]
            let b = chunk.pointAddrs[1]
            let c = chunk.pointAddrs[2]
            let ab = midPoint(a, b)
            let bc = midPoint(b, c)
            let ac = midPoint(a, c)
            let sixF = [[a, CT, ab], [ab, CT, b], [b, CT, bc], [bc, CT, c], [c, CT, ac]]

            sixF.forEach((fragPts) => {
                let c = centroid(fragPts)
                new Thing('fragment', fragPts, radius / 6, c, chunk.thingID)  // radius is smaller than  it should be
            })
        })
        // we have now created 1 whole, nPoints chuncks, and 6 x nPoints fragments
        this.resetAndReLaunch()
    }

    testOutside(){
        let x = this.asteroid.position[0]
        let y = this.asteroid.position[1]

        if(x*x + y*y > gameCircle*gameCircle ){
            this.resetAndReLaunch()
        }
    }

    // imagine a circle outside the 100x100 board (say at radius 150 'cus root of 2 is 141)
    resetAndReLaunch() {

        let startOnCircle = randomFromInterval(0, 2 * Math.PI)  // somewhere on the 150 circle
        let endOnCircle = startOnCircle + Math.PI + randomFromInterval(-1, 1)  // sloppy randomness
        let startFrom = [gameCircle * Math.sin(startOnCircle), gameCircle * Math.cos(startOnCircle)]
        let finishAt = [gameCircle * Math.sin(endOnCircle), gameCircle * Math.cos(endOnCircle)]

        this.asteroid.opacity = 1
        this.asteroid.position = startFrom
        this.asteroid.direction = [(finishAt[0]-startFrom[0])/gameCircle,(finishAt[1]-startFrom[1])/gameCircle]

        console.log(this.asteroid.position,this.asteroid.direction)
        // TSX.Segment(startFrom, finishAt)
    }

}

class Ship {
    ship: Image
    flame: Polygon
    group: Group
    position = TSX.Point([0, 0], { visible: false })     // always starts there
    angular = 0.5 * Math.PI  // ship points up initially
    velocity = [0, 0]

    rotation = TSX.Point([20, 0], { visible: false })
    flameOpacity = 0  // initially off
    radius = 7   // collide radius



    constructor() {
        let polyPoints = [[-5, -15], [5, -15], [0, -5]].map((addr) => TSX.Point(addr, { visible: false }))
        this.flame = TSX.Polygon(polyPoints, { borders: { visible: false }, fillColor: 'red', opacity: () => this.flameOpacity })

        this.ship = TSX.Image('icons/rocket.png', [-7, -7], [15, 15])


        this.group = TSX.Group([this.position, this.rotation, this.flame])
        this.group.addPoints(polyPoints)  // add the flame

        this.group.addPoint(this.ship)  // actually an image
        this.group.setRotationCenter(this.position)
        this.group.setRotationPoints(this.rotation);

        TSX.Circle(this.position, this.radius)

    }

    rotate(clockwise: boolean) {
        this.angular += clockwise ? -.2 : .2
        this.rotation.moveTo([Math.sin(this.angular) * 20 + this.position.X(), Math.cos(this.angular) * 20 + this.position.Y()])
    }

    accelerate() {
        let burst = .4 // tune until right
        this.velocity = [this.velocity[0] + burst * -Math.cos(this.angular), this.velocity[1] + burst * Math.sin(this.angular)]
        this.flameOpacity = 1
    }

    updatePosition() {
        const x = this.position.X()
        const y = this.position.Y()
        let newX = x + this.velocity[0]
        let newY = y + this.velocity[1]
        // keep ship on screen
        if (newX > dim) newX = -dim
        if (newX < -dim) newX = dim
        if (newY > dim) newY = -dim
        if (newY < -dim) newY = dim

        if (this.flameOpacity > 0)
            this.flameOpacity -= .2
        this.position.setPosition(TSX.COORDS_BY_USER, [newX, newY])
    }

}
type Bullet = {
    point: Point,
    active: boolean,
    angular: number,
    // velocity is constant
}

class Bullets {
    bulletList: Bullet[] = []    // list of bullets, inactive can be reused

    addBullet(): Bullet {
        let newBullet = {
            point: TSX.Point([0, 0], { visible: false }),
            active: false,
            angular: 1
        }
        this.bulletList.push(newBullet)
        return newBullet
    }


    fireFrom(ship: Ship) {
        // first get a bullet that is inactive
        let foundBullet = this.bulletList.find((b) => !b.active)  // get an inactive element
        // foundBullet might be undefined, fireBullet is definitely a Bullet
        let fireBullet: Bullet = (foundBullet === undefined) ? this.addBullet() : foundBullet

        fireBullet.active = true
        fireBullet.point.setPosition(TSX.COORDS_BY_USER, [ship.position.X(), ship.position.Y()])
        fireBullet.point.setAttribute({ visible: true })
        fireBullet.angular = ship.angular
    }

    updatePosition() {
        const velocity = 5     // tune until right   
        this.bulletList.forEach((b) => {
            if (b.active) {
                const x = b.point.X()
                const y = b.point.Y()
                const dx = velocity * -Math.cos(b.angular)
                const dy = velocity * Math.sin(b.angular)
                b.point.setPosition(TSX.COORDS_BY_USER, [x + dx, y + dy])

                // test if outside game circle AFTER move
                if (outsideGame(x + dx, y + dy)) {
                    b.active = false
                }
            }
        })
    }

}





// test logic
{
    // build game assets
    let ship = new Ship()
    for (let i = 0; i < 2; i++) {
        listOfAsteroids.push(new Asteroid())
    }
    let bullets = new Bullets()


    let runGame = () => {

        TSX.suspendUpdate()

        listOfThings.forEach((thing) => thing.updatePosition())
        ship.updatePosition()
        bullets.updatePosition()
        listOfAsteroids.forEach((a)=>a.testOutside())


        TSX.unsuspendUpdate()
        window.setTimeout(runGame, 50)  // reschedule 50 ms AFTER redraw
    }


    TSX.on('keydown', (e: any) => {  // use keyup so they must hammer
        if ('code' in e) {
            if (e.code == 'ArrowLeft') ship.rotate(true)
            if (e.code == 'ArrowRight') ship.rotate(false)
            if (e.code == 'ArrowUp') ship.accelerate()
            // if (e.code == 'ArrowDown') console.log('down');
            if (e.code == 'Space' && !e.repeat) bullets.fireFrom(ship)
                ;
            // ignore everything else
        }
    });

    window.setTimeout(runGame, 50)  // start game loop

}






