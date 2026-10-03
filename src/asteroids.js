// Asteroids game.  grotesquely inefficient, more for fun of writing 
import { jsPDF } from 'jspdf';
import { TSXBoard } from "../lib/tsxgraph.js"; // note: we need the '.js'
let TSX = new TSXBoard('jxgbox');
TSX.addAxis();
TSX.setBoundingBox([-130, 130, 130, -130]);
// TSX.setBoundingBox([-30, 30, 30, -30])
/** random real number from a range */
function randomFromInterval(min, max) {
    return Math.random() * (max - min) + min;
}
/** centroid of a polygon's pointAddrs */
function centroid(pointAddrs) {
    let sumOf = [0, 0];
    pointAddrs.forEach((addr) => { sumOf[0] += addr[0]; sumOf[1] += addr[1]; });
    return [sumOf[0] / pointAddrs.length, sumOf[1] / pointAddrs.length];
}
/** midpoint pointAddr between two pointAddrs */
function midPoint(a, b) {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}
/** nicer random velocity, prevents asteroids from just hanging near zero */
function randomVelocity() {
    let sign = Math.random() < 0.5 ? -1 : 1;
    return sign * randomFromInterval(.1, .2);
}
/** nicer random velocity, prevents asteroids from just hanging near zero */
function randomAngular() {
    let sign = Math.random() < 0.5 ? -1 : 1;
    return sign * randomFromInterval(.01, .03);
}
TSX.Circle([0, 0], 150); // for reference, this is outside the board everywhere
let listOfThings = []; // every update runs through this list looking for collisions  n^2 !!
let listOfAsteroids = []; // finite number so can reuse 
// let listOfBullets: Bullet[] = []      // bullets are not Things, just points
// let listOfAliens: Alien[] = []        // traditional game only has one
class Thing {
    thingID = Symbol(); // not sure if this is useful yet
    opacity = 1; // opacity 0 stuff doesn't collide
    radius; // collision boundary
    centroid; // offset from [0,0] so can reset object
    pointAddrs = []; // point addresses relative to the origin (or centroid if specified)
    points = []; // actual points, to apply translation, rotation, scaling to 
    polygon; // the shape, so we can apply attributes
    // where we are now
    position = [0, 0];
    rotation = 0; // current rotation in radians
    scaleX = 1;
    scaleY = 1;
    // where we are going
    velocity = randomVelocity(); // user units per second 
    angular = randomAngular(); // radians per second
    direction = randomFromInterval(-Math.PI, Math.PI);
    /** build from array of points, collision-radiuswith optional center for rotation */
    constructor(pointAddrs, radius, centroid = [0, 0]) {
        this.pointAddrs = pointAddrs.map((xy) => [xy[0], xy[1]]); // keep a cloned copy
        this.centroid = centroid;
        this.points = this.pointAddrs.map((p) => TSX.Point(p, { visible: false })); // turn xy coords into points
        this.polygon = TSX.Polygon(this.points);
        this.radius = radius;
        TSX.Circle([() => this.position[0], () => this.position[1]], radius); // just for reference
        listOfThings.push(this); // add to listOfThings so it receives updates
    }
    updatePosition() {
        // update the position
        for (let i = 0; i < this.pointAddrs.length; i++) {
            if (this.opacity == 0)
                continue; // don't bother with stuff that we can't see
            this.position[0] += this.velocity * Math.sin(this.direction);
            this.position[1] += this.velocity * Math.cos(this.direction);
            this.rotation += this.angular;
            // now translate and rotate to a new position
            // starting position corrected by centroid distance from origin
            let position = [this.pointAddrs[i][0] - this.centroid[0], this.pointAddrs[i][1] - this.centroid[1]]; // starting position around origin
            // uniform scaling if sx == sy
            position = [position[0] * this.scaleX, position[1] * this.scaleY];
            // must rotate before tanslate
            position =
                [position[0] * Math.cos(this.rotation) - position[1] * Math.sin(this.rotation),
                    position[0] * Math.sin(this.rotation) + position[1] * Math.cos(this.rotation)];
            // translation - just add the value
            position = [position[0] + this.position[0], position[1] + this.position[1]];
            this.points[i].moveTo([position[0], position[1]]); // finally move this point
        }
    }
    setOpacity(n) {
        this.polygon.setAttribute({ opacity: n });
        this.polygon.setAttribute({ borders: { opacity: n } });
    }
}
/** the class that controls asteroids.  It represents a flock of things*/
class Asteroid {
    whole;
    chunks = [];
    fragments = [];
    constructor() {
        // we create a circle with five points
        let radius = 15;
        let nPoints = 6;
        let points = [];
        for (let i = 0; i < nPoints; i++) {
            let slice = 2 * Math.PI / nPoints * i;
            let thisPoint = [(radius) * Math.sin(slice), (radius) * Math.cos(slice)];
            thisPoint[0] += randomFromInterval(-radius / 3, radius / 3);
            thisPoint[1] += randomFromInterval(-radius / 3, radius / 3);
            points.push(thisPoint);
        }
        this.whole = new Thing(points, radius);
        this.whole.opacity = 1;
        // now create triangular chunks (after breakup) based on same model
        for (let i = 0; i < nPoints - 1; i++) { // one less because we use point and point+1
            let nearCenter = [randomFromInterval(-radius / 5, radius / 5), randomFromInterval(-radius / 5, radius / 5)];
            // use radius/3.5 so easier to separate when astroid breaks up, or get immediate collisions between chunks
            let part = new Thing([points[i], points[i + 1], nearCenter], radius / 3.5, centroid([points[i], points[i + 1], nearCenter]));
            part.opacity = 0;
            this.chunks.push(part);
        }
        // and part that connects last to first
        let nearCenter = [randomFromInterval(-radius / 5, radius / 5), randomFromInterval(-radius / 5, radius / 5)];
        let part = new Thing([points[nPoints - 1], points[0], nearCenter], radius / 3.5, centroid([points[nPoints - 1], points[0], nearCenter]));
        part.opacity = 0;
        this.chunks.push(part);
        // now create six triangle fragments, from when chunks break up.
        this.chunks.forEach((chunk) => {
            let CT = centroid(chunk.pointAddrs); // we know exactly three pointAddrs in each chunk
            let a = chunk.pointAddrs[0];
            let b = chunk.pointAddrs[1];
            let c = chunk.pointAddrs[2];
            let ab = midPoint(a, b);
            let bc = midPoint(b, c);
            let ac = midPoint(a, c);
            let sixF = [[a, CT, ab], [ab, CT, b], [b, CT, bc], [bc, CT, c], [c, CT, ac]];
            sixF.forEach((fragPts) => {
                let c = centroid(fragPts);
                let frag = new Thing(fragPts, radius / 6, c); // radius is smaller than  it should be
                frag.opacity = 0;
                this.fragments.push(frag);
            });
        });
        // we have now created 1 whole, nPoints chuncks, and 6 x nPoints fragments
    }
    // imagine a circle outside the 100x100 board (say at radius 150 'cus root of 2 is 141)
    resetAndReLaunch() {
        let startAngle = randomFromInterval(0, 2 * Math.PI); // somewhere on the 150 circle
        let endAngle = startAngle + Math.PI + randomFromInterval(-1, 1); // sloppy randomness
        let startFrom = [150 * Math.sin(startAngle), 150 * Math.cos(startAngle)];
        let finishAt = [150 * Math.sin(endAngle), 150 * Math.cos(endAngle)];
        TSX.Segment(startFrom, finishAt);
    }
}
let game = new Asteroid();
// game.resetAndLaunch()
let counter = 100;
let runGame = () => {
    TSX.suspendUpdate();
    listOfThings.forEach((thing) => thing.updatePosition());
    TSX.unsuspendUpdate();
    if (counter-- < 0) {
        let width = 500;
        let height = 500;
        const doc = new jsPDF(width > height ? 'l' : 'p', 'pt', [width, height]);
        const element = document.getElementById('svg');
        // await doc. .svg(element, { x:0, y:0, width, height })
        // save the created pdf
        doc.save('myPDF.pdf');
    }
};
// button hides after being pushed
let oneTime = TSX.Button([-4, 4], 'start', () => { setInterval(runGame, 50); oneTime.setAttribute({ opacity: 0 }); });
// let rotation = 0
// let thrust = 0
// let urlImg = "http://jsxgraph.uni-bayreuth.de/distrib/images/uccellino.jpg";
// let p0 = TSX.Point([0, 0], { size: 8, name: 'drag', opacity: 0.3 });
// // let p1 = TSX.Point([2, 0], { size: 8, name: 'rotate', opacity: 0.3 });
// let rocket = TSX.Image('icons/rocket.png', [-.25, -.25], [.5, .5],{rotate:()=>rotation*Math.PI})  // centered on [0,0] for rotation
// // let rocket = TSX.Image('icons/rocket.png', [()=>p0.X(),()=>p0.Y()], [.5, .5])  // centered on [0,0] for rotation
// // Rotate image and scale around po by dragging point p1
// // let tRot = TSX.Rotate(() => Math.atan2(p1.Y(), p1.X()), orig)
// let tRot = TSX.Rotate(() => rotation, [0,0])
// let tTrans = TSX.Translate(() => p0.X(), () => p0.Y())
// let exhaust1 = TSX.Point([()=>p0.X()+(.2*Math.sin(rotation)), ()=>p0.Y()-(thrust*Math.cos(rotation))], { visible: true })
// let exhaust2 = TSX.Point([()=>p0.X()-(.2*Math.sin(rotation)), ()=>p0.Y()-(thrust*Math.cos(rotation))], { visible: true })
// TSX.Polygon([p0,exhaust1,exhaust2],{fillColor:'red'})
// // let trans = TSX.Translate(0, 0)
// // let rotat = TSX.Rotate(() => Math.sin(rotation), [0,0])
// // let p3 = TSX.TransformPoint(p0, [trans, rotat])
// // tRot.bindTo([rocket])
// tTrans.bindTo([rocket]);
// await p0.moveToES6([2, 2], 1000)
// rotation = 1
// thrust = 1
// await p0.moveToES6([-2, 2], 1000)
// rotation = 2
// thrust = 2
// await p0.moveToES6([-2, -2], 2000)
// // build an exhaust polygon
/*
 
 
let rocketImg = TSX.Image('icons/rocket.png', [-.25, -.25], [.5, .5])  // centered on [0,0] for rotation
 
let rocket = TSX.Point([0, 0], { visible: false });
let scale = TSX.Point([1, 1], { visible: false })  // if we ever have to scale then just move this
 
// an invisible point at rotation radians.  rocket always points to it
let rotation = .3
let rotate = TSX.Point([() =>Math.sin(rotation), () => Math.cos(rotation)], { visible: false })
 
let thrust = .2 // value between 0 and 1
let exhaust1 = TSX.Point([-.2, ()=>-thrust], { visible: false })
let exhaust2 = TSX.Point([+.2, ()=>-thrust], { visible: false })
TSX.Polygon([rocket, exhaust1, exhaust2], {fillColor:'red'})
 
 
let g = TSX.Group([rocket, rotate, scale, exhaust1, exhaust2])
g.setRotationCenter(rocket)
 
g.addPoint(rocketImg)  // adding an image as if it were a point
// g.addPoint(exhaust1)
// g.addPoint(exhaust2)
 
g.setRotationPoints(rotate);
 
g.setScaleCenter(rocket)
g.setScalePoints(scale);
 
 
await rocket.moveToES6([2, 2], 1000)
rotation = 2
await rocket.moveToES6([-2, 2], 1000)
rotation = 2
thrust = 1
await rocket.moveToES6([-2, -2], 2000)
scale.moveToES6([3, 3], 1000) // test scaling
 
// TSX.update()
// setInterval(runGame, 10);
 
 
/*
 
let shipPosition = []
let rocket = TSX.Image('icons/rocket.png', [-.25, -.25], [.5, .5])  // centered on [0,0] for rotation
 
TSX.Image('icons/asteroid-2.png', [2, 3], [1, 1])
 
let thrust = .5 // value between 0 and 1
let rotation = 0
 
let rocketPivot = TSX.Point([0, 0], { visible:false });
let scale = TSX.Point([2, -2], { size: 5, color: 'orange', name: 'scale' })
let rotate = TSX.Point([()=>Math.sin(rotation),Math.cos(rotation)], { size: 5, color: 'red', name: 'rotate' })
 
 
let exhaust1 = TSX.Point([-.2,-thrust],{visible:false})
let exhaust2 = TSX.Point([.2,-thrust] ,{visible:false})
TSX.Polygon([rocketPivot,exhaust1,exhaust2] )
 
let g = TSX.Group([rocketPivot, rotate, scale])
g.addPoint(rocket)  // adding an image
 
g.setRotationCenter(rocketPivot)    // the three points of the thruster
g.addPoint(exhaust1)
g.addPoint(exhaust2)
 
// g.setRotationPoints([[()=>rotate.X(),()=>rotate.Y()]]);
g.setRotationPoints([[()=>Math.sin(rotation),Math.cos(rotation)]]);
 
rotation += 2
await rocketPivot.moveToES6([4,4],2000)
rotation += 2
await rocketPivot.moveTo([3,-3],2000)
rotation += 2
 

TSX.on('keydown', (e: any) => {
    if ('key' in e) {
        if (e.key == "g") { showingGrid = !showingGrid; TSX.setAttribute({ axis: showingGrid }) }


        // if (e.code == 'ArrowLeft') shipRotation += 0.1
        // if (e.code == 'ArrowRight') shipRotation -= 0.1
        // if (e.code == 'ArrowUp') shipThruster = Math.min(3, shipThruster + .1)
        // if (e.code == 'ArrowDown') shipThruster = Math.max(0, shipThruster - .1)
        // // ignore everything else
    }
});

/*
KEY_CODES = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  70: 'f',
  71: 'g',
  72: 'h',
  77: 'm',
  80: 'p'
}

*/ 
