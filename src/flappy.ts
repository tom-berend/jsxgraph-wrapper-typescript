
import { TSXBoard, Polygon } from "../lib/tsxgraph.js"    // note: we need the '.js'
let TSX = new TSXBoard('jxgbox')

TSX.setBoundingBox([0, 10, 10, 0])   // shift board for easier calculations

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let pipeSeparation = 4

class Pipe {
    xLocn: number
    gap: number
    topPipe: Polygon
    bottomPipe: Polygon

    constructor(xLocn: number) {
        this.xLocn = xLocn
        this.gap = randomIntFromInterval(2, 7)  // gap is never fully top or bottom
        this.topPipe = TSX.Polygon([
            [() => this.xLocn - .25, 10],
            [() => this.xLocn + .25, 10],
            [() => this.xLocn + .25, () => this.gap],
            [() => this.xLocn - .25, () => this.gap],
        ], { vertices: { visible: false } })
        this.bottomPipe = TSX.Polygon([
            [() => this.xLocn - .25, 0],
            [() => this.xLocn + .25, 0],
            [() => this.xLocn + .25, () => this.gap - 1],
            [() => this.xLocn - .25, () => this.gap - 1],
        ], { vertices: { visible: false } })
    }
}

let pipes = [0, 1, 2, 3].map((i) => new Pipe(12 + (pipeSeparation * i))) // initial at 12, 14,

let bird = TSX.Point([3, 5], { visible: false })  // control the point that image is attached to
TSX.Image('icons/alien-5.png', [() => bird.X(), () => bird.Y()], [.5, .5])
let birdUpwards = 0;

let gameOver = false;
let gameOverDelay: number
let gameOverRadius = 1
let gameOverBoink = TSX.Circle([() => bird.X() + .25, () => bird.Y() + .25], () => gameOverRadius, { opacity: 0, strokeColor: 'red', fillColor: 'orange' })

let setGameOver = () => {
    gameOver = true
    gameOverDelay = 20
    gameOverRadius = .1
}

let movePipe = () => {
    if (gameOver) {
        if (gameOverDelay > 0) {
            gameOverDelay -= 1
            gameOverRadius += .03
            gameOverBoink.setAttribute({ opacity: gameOverDelay / 20 })
        } else {
            // restart game
            gameOver = false
            gameOverBoink.setAttribute({ opacity: 0 })
            pipes.map((p, i) => p.xLocn = 12 + (pipeSeparation * i))
            birdUpwards = 0
            bird.moveTo([3, 5], 500)
        }

    } else {
        // move the pipes
        pipes.map((p) => {
            p.xLocn -= .1
            if (p.xLocn < 0) {
                p.gap = randomIntFromInterval(2, 7)
                p.xLocn += pipeSeparation * 4
            }
        })

        // check the bird  // always at x=3
        birdUpwards -= .01
        bird.moveTo([3, bird.Y() + birdUpwards])
        if (bird.Y() < 0) {     // bird hit the ground
            setGameOver()
        }

        // make sure we get through each pipe
        let passing = pipes.find((p) => p.xLocn > 3.0 && p.xLocn < 3.5)  // bird bottom left is 3
        if (passing) {
            if (bird.Y() < passing.gap - 1 || bird.Y() > passing.gap)
                setGameOver()
        }
    }
    TSX.update()
}

TSX.on('keydown', (e: any) => {
    if ('code' in e) {
        if (e.code == 'ArrowUp') birdUpwards += .05
        if (e.code == 'ArrowDown') birdUpwards -= .05
        // ignore everything else
    }
});

let timerId = setInterval(movePipe, 90)



