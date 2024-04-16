
import { TXG } from "jsxgraph-wrapper-typescript";

// easier to call the orbit function from here than from JS.
orbit()



function orbit() {
    (window as any).JXG.Options.text.useKatex = true;

    let TSX = TXG.TSXGraph.initBoard('jxgbox');
    TSX.setBoundingBox(-1, 5, 5, -1)


    {
        // top left, a model of uniform circular motion

        let origin = TSX.point([0, 0], { name: '' })

        // use ()=> to lock the axis points to the origin, even if the origin moved
        let xAxisPt = TSX.point([() => origin.X(), () => origin.Y() + 4], { name: 'y', opacity: 0 })
        let yAxisPt = TSX.point([() => origin.X() + 4, () => origin.Y()], { name: 'x', opacity: 0 })
        let xAxis = TSX.segment(origin, xAxisPt, { opacity: .3, strokeColor: 'gray' })
        let yAxis = TSX.segment(origin, yAxisPt, { opacity: .3, strokeColor: 'gray' })

        let arc = TSX.arc(origin, yAxisPt, xAxisPt)
        let glider = TSX.glider(3, 3, arc, { strokeColor: 'blue', name: '' })  // point on the arc

        let radius = TSX.segment(origin, glider, { lastArrow: true, touchLastPoint: true })
        let minorArc = TSX.minorArc(origin, TSX.midpoint(yAxis, { name: '', opacity: 0 }), TSX.midpoint(radius, { name: '', opacity: 0 }), { firstArrow: true, lastArrow: true })

        let arcRad = TSX.intersection(minorArc,radius,{opacity:0,name: '\\vec{r}',label:{offset:[-30,10],fontSize:20}})
        let axisRad = TSX.intersection(minorArc,yAxis,{name:'ω',opacity:0,label:{offset:[0,40],fontSize:20}})


        // we want a tangent line at the glider point.  Easy to use 'perpendicularSegment, but no control over length
        let gliderCircle = TSX.circle(glider, 2, { opacity: 0 })  // radius of two
        let gliderPerp = TSX.perpendicularSegment(radius, glider, { opacity: 0 })
        let perpEnd = TSX.intersection(gliderPerp, gliderCircle, { opacity: 0})
        let gliderEnd = TSX.segment(glider, perpEnd,
            {
                withLabel: true,
                name: '\\vec{V}_T=r \\omega',
                label: { position: 'top', fontSize:20 },
                strokeWidth:3,
                lastArrow: { type: 2, size: 8 }
            }
        )

    }

    let G = 6.67 * Math.pow(10, -11);

    let earthMass = 5.97 * 1e24  // kg
    let moonMass = 7.34 * 1e22
    let moonDistance = 3.6 // * 1e5  center-to-center km



    // {
    //     let earth = TSX.point([2, 0], { strokeColor: 'blue', strokeWidth: 5, name: 'Earth' })
    //     let orbit = TSX.circle(earth, moonDistance, { scaleXY: 1e5 })

    //     let moon = TSX.point([() => earth.X(), () => earth.Y() + moonDistance], { name: 'moon', scaleXY: 1e6 })


    //     // // We need the tangent velocity vt.  We know the period of the moon's orbit is about 27.3 days
    //     let period = 27.3 * 24 * 60 * 60  // 2358720 seconds
    // vt = rw  where w is 2PI/T  (travels 2PI around earth in 27 days)

    // angular velocity is a vector rw -sin(wti) + cos(wtj)


    // TSX.print('angV', angularVelocity.toString())



    // let tanVelocity = angularVelocity * V2.distance(earth, moon)
    // TSX.print('tanvelocity', tanVelocity.toString())

    // or al

    // let tanVelocityVector = TSX.point([])
    // let tanVector = TSX.segment(moon,) moonDistance * angularVelocity // km

    // let tanVector = TSX.segment([])

    // TSX.print('tanV', tanVelocity)


}


// from https://burtleburtle.net/bob/js/orbit.html

// let InitialVelocity = TSX.per ularSegment(
// [()=>moon.X(),()=>moon.Y()]) arrowparallel(moon,4)

// let pq = TSX.arrow([0, 0], [1, 1], {
//

// angular distance is the measure between two lines,  analog to distance (d)
// synomymous with the angle itself, but suggests separation
// v = d2-d2 / dt

// angular velocity (omega) is analog to linear velocity (v)
// omega = a2-a1 / dt



/*
        start();

        function start() {
            canvas.cosmos = new Cosmos(obj, canvas);
            canvas.cosmos.prepare();
            canvas.cosmos.display();
        }

        function move() {
            if (!canvas.stopped) {
                if (canvas.restart) {
                    start();
                    canvas.stopped = false;
                }
                else {
                    canvas.cosmos.move();
                    canvas.cosmos.display();
                }
            }
        }

        function captureMouseEvent(ev) {
            canvas.newMouseX = ev.clientX - canvas.cosmos.eye.centerX;
            canvas.newMouseY = ev.clientY - canvas.cosmos.eye.centerY;
            canvas.shiftKey = ev.shiftKey;
        }

        function startDrag(ev) {
            captureMouseEvent(ev);
            canvas.mouseDown = true;
            canvas.oldMouseX = canvas.newMouseX;
            canvas.oldMouseY = canvas.newMouseY;
        }

        function drag(ev) {
            if (canvas.mouseDown) {
                captureMouseEvent(ev);
                if (canvas.oldMouseX != canvas.newMouseX || canvas.oldMouseY != canvas.newMouseY) {
                    canvas.mouseDrag = true;
                }
            }
        }

        function stopDrag(ev) {
            captureMouseEvent(ev);
            canvas.mouseDown = false;
            if (!canvas.mouseDrag)
                canvas.stopped = !canvas.stopped;
            canvas.mouseDrag = false;
        }
    }

function isInteger(value) {
    return (value | 0) === value;
}

// ::: Point: a 3-dimensional point
// 3d point manipulation,in Javascript
var Point = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Point.prototype.add = function (p) {
    this.x += p.x;
    this.y += p.y;
    this.z += p.z;
    return this;
}

Point.prototype.sub = function (p) {
    this.x -= p.x;
    this.y -= p.y;
    this.z -= p.z;
    return this;
}

Point.prototype.scale = function (c) {
    this.x *= c;
    this.y *= c;
    this.z *= c;
    return this;
}

Point.prototype.zero = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    return this;
}

Point.prototype.set = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Point.prototype.dot = function (p) {
    return this.x * p.x + this.y * p.y + this.z * p.z;
}

Point.prototype.copy = function (p) {
    this.x = p.x;
    this.y = p.y;
    this.z = p.z;
}

Point.prototype.addCP = function (c, p) {
    this.x += c * p.x;
    this.y += c * p.y;
    this.z += c * p.z;
}

Point.prototype.toString = function () {
    return "{" + this.x + "," + this.y + "," + this.z + "}";
}


// ::: Eye: the ability to look at points from a particular perspective
// 3d imaging, in Javascript
var Eye = function (
    distance, // double: distance to back off from center
    spin, // Point: rotate about x, rotate about y rotate about z
    zoom) // double:
{
    if (Number(distance) !== distance) alert("distance should be a number");
    if (Number(zoom) !== zoom) alert("zoom should be a number");
    this.distance = distance; // double, step straight back distance "dist", applied after spin
    this.spin = spin;  // point, how much to spin around x,y,z axes
    this.zoom = zoom; // double, how big to draw things

    this.m = [new Point(1.0, 0.0, 0.0), new Point(0.0, 1.0, 0.0), new Point(0.0, 0.0, 1.0)];
    this.before = new Point(0.0, 0.0, 0.0);

    this.after = new Point(0.0, 0.0, -distance);

    if (!(spin instanceof Point)) alert("spin should be of type Point");
    if (Number(spin.x) !== spin.x) alert("spin.x should be a number");
    if (Number(spin.y) !== spin.y) alert("spin.y should be a number");
    if (Number(spin.z) !== spin.z) alert("spin.z should be a number");
    this.rotateY(spin.y);  // rotate right
    this.rotateX(spin.x);  // rotate down
    this.rotateZ(spin.z);  // rotate clockwise
}

Eye.prototype.setCenter = function (p) // a point
{
    this.before.copy(p);
}

Eye.prototype.shiftPixels = function (right, down) {
    this.after.x += right * this.after.z;
    this.after.y += down * this.after.z;
}

Eye.prototype.adjustZoom = function (ratio) {
    this.zoom *= ratio;
}

// apply a rotation r: m = r times m-transpose
Eye.prototype.rotate = function (r) // r is a Number[3][3]
{
    var m = this.m;
    var x = new Point(m[0].x * r[0][0] + m[1].x * r[0][1] + m[2].x * r[0][2],
        m[0].y * r[0][0] + m[1].y * r[0][1] + m[2].y * r[0][2],
        m[0].z * r[0][0] + m[1].z * r[0][1] + m[2].z * r[0][2]);
    var y = new Point(m[0].x * r[1][0] + m[1].x * r[1][1] + m[2].x * r[1][2],
        m[0].y * r[1][0] + m[1].y * r[1][1] + m[2].y * r[1][2],
        m[0].z * r[1][0] + m[1].z * r[1][1] + m[2].z * r[1][2]);
    var z = new Point(m[0].x * r[2][0] + m[1].x * r[2][1] + m[2].x * r[2][2],
        m[0].y * r[2][0] + m[1].y * r[2][1] + m[2].y * r[2][2],
        m[0].z * r[2][0] + m[1].z * r[2][1] + m[2].z * r[2][2]);
    m[0] = x;
    m[1] = y;
    m[2] = z;
}

// rotate down (around x axis)
Eye.prototype.rotateX = function (x) {
    var sinx = Math.sin(x);
    var cosx = Math.cos(x);
    var d = [[1.0, 0.0, 0.0], [0.0, cosx, sinx], [0.0, -sinx, cosx]];
    this.rotate(d);
}

// rotate right (around y axis)
Eye.prototype.rotateY = function (y) {
    var siny = Math.sin(y);
    var cosy = Math.cos(y);
    var r = [[cosy, 0.0, siny], [0.0, 1.0, 0.0], [-siny, 0.0, cosy]];
    this.rotate(r);
}

// rotate clockwise (around z axis)
Eye.prototype.rotateZ = function (z) {
    var sinz = Math.sin(z);
    var cosz = Math.cos(z);
    var r = [[cosz, sinz, 0.0], [-sinz, cosz, 0.0], [0.0, 0.0, 1.0]];
    this.rotate(r);
}

// show point from the eye's coordinates
Eye.prototype.map = function (p) {
    var a = new Point(p.x, p.y, p.z);
    a.sub(this.before);
    var b = new Point(a.dot(this.m[0]), a.dot(this.m[1]), a.dot(this.m[2]))
    b.sub(this.after);
    return b;
}

// map a point (after mapping to eye's coordinates) to the x-axis of the display
Eye.prototype.mapX = function (p) {
    return this.centerX + Math.round(this.zoom * p.x / p.z);
}

// map a point (after mapping to eye's coordinates) to the y-axis of the display
Eye.prototype.mapY = function (p) {
    return this.centerY + Math.round(this.zoom * p.y / p.z);
}

Eye.prototype.mapRadius = function (r, p) {
    return p.z > 0.0 ? this.zoom * r / p.z : 0.0;
}

Eye.prototype.setDimensions = function (x, y) {
    this.maxX = x;
    this.centerX = x / 2;
    this.maxY = y;
    this.centerY = y / 2;

    // for 3d spins, assume the user is looking at things the size of a sphere that fits on the screen
    this.rotateScale = 1.0 / (x > y ? y : x);
}



// ::: Moon: one of the bodies in an n-body simulation
var Moon = function (
    name,  // string
    p,  // a point, the position
    v,  // a point, the velocity
    mass,  // double
    color,  // string, like "#000000" or "black"
    radius)  // double
{
    this.name = name;

    if (!(p instanceof Point)) alert("p should be of type Point in moon " + name);
    if (Number(p.x) !== p.x) alert("p.x should be a number in moon " + name);
    if (Number(p.y) !== p.y) alert("p.y should be a number in moon " + name);
    if (Number(p.z) !== p.z) alert("p.z should be a number in moon " + name);
    this.p = p;

    if (!(v instanceof Point)) alert("v should be of type Point in moon " + name);
    if (Number(v.x) !== v.x) alert("v.x should be a number in moon " + name);
    if (Number(v.y) !== v.y) alert("v.y should be a number in moon " + name);
    if (Number(v.z) !== v.z) alert("v.z should be a number in moon " + name);
    this.v = v;

    if (Number(mass) !== mass) alert("mass should be a number in moon " + name);
    this.mass = mass;

    this.color = color;

    if (Number(radius) !== radius) alert("radius should be a number in moon " + name);
    this.radius = radius;

    // some extra fields need to be allocated even though they aren't inputs
    this.a = new Point(0.0, 0.0, 0.0);
    this.peye = new Point(0.0, 0.0, 0.0);
}


Moon.prototype.setPoints = function (points) {
    this.points = points;
    var history = 2 * points + 2;
    this.history = history;

    // oa and ov are circular buffers with history distinct points.
    // Rather than having oa of length points and doing oa[head+x % points], I make oa twice as
    // long as I need to, make sure points-1 <= head < 2*points-1, and refer to plain oa[head-x].
    // I could have arranged to do oa[head+x], but oa means "old accelerations", I'm looking at the
    // past, so subtraction seems more natural.
    // That also means head gets incremented with each step, which again seems natural.
    // It's 2*history rather than history because cosmos.prepare() needs history distinct points.
    this.oa = new Array(2 * history);
    this.ov = new Array(2 * history);
    for (var i = 0; i < 2 * points + 2; i++) {
        this.oa[i] = new Point(0.0, 0.0, 0.0);
        this.oa[i + history] = this.oa[i];
        this.ov[i] = new Point(0.0, 0.0, 0.0);
        this.ov[i + history] = this.ov[i];
    }
    this.head = history;
}


// attract this moon to the other, and the other moon to this one
Moon.prototype.attract = function (other) // other moon
{
    var diff = new Point(this.p.x, this.p.y, this.p.z);
    diff.sub(other.p);
    var scale = diff.dot(diff);
    var dist = Math.sqrt(scale);
    scale = 1.0 / (scale * dist);
    this.a.addCP(-other.mass * scale, diff);
    other.a.addCP(this.mass * scale, diff);
}

Moon.prototype.recordStep = function () {
    this.steps++;
    this.head++;
    if (this.head == 2 * this.history)
        this.head -= this.history;
    this.ov[this.head].copy(this.v);
    this.oa[this.head].copy(this.a);
}




// ::: Cosmos: a whole n-body simulation, with many moons
// Initialize it with the object passed in from the webpage
var Cosmos = function (obj, canvas) {
    this.canvas = canvas;
    canvas.oldMouseX = 0;
    canvas.oldMouseY = 0;
    canvas.newMouseX = 0;
    canvas.newMouseY = 0;
    canvas.mouseDown = false;
    canvas.mouseDrag = false;
    canvas.shiftKey = false;

    this.background = ("background" in obj) ? obj.background : "black"; // color of background

    if (!("moons" in obj)) alert("orbit simulation requires at least one moon");
    if (!Array.isArray(obj.moons)) alert("moon needs to be an array");
    var nMoons = obj.moons.length;
    for (var iMoon = 0; iMoon < nMoons; iMoon++)
        if (!(obj.moons[iMoon] instanceof Moon)) alert("moon[" + iMoon + "] is not of type Moon");

    // make a deep copy of the obj moons, in case we want to restart from the original later
    this.moons = [];
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = obj.moons[iMoon];
        this.moons.push(new Moon(
            moon.name,
            new Point(moon.p.x, moon.p.y, moon.p.z),
            new Point(moon.v.x, moon.v.y, moon.v.z),
            moon.mass,
            moon.color,
            moon.radius));
    }
    this.displayMoons = this.moons.slice();

    // Sort moons by weight
    for (var i = 1; i < nMoons; i++) {
        for (var j = i + 1; --j > 0 && this.moons[j].mass < this.moons[j - 1].mass;) {
            var temp = this.moons[j];
            this.moons[j] = this.moons[j - 1];
            this.moons[j - 1] = temp;
        }
    }
    // Remember which moon is the first with nonzero weight
    for (this.firstMass = 0; this.firstMass < nMoons && this.moons[this.firstMass].mass == 0; this.firstMass++)
        ;

    this.work = ("work" in obj) ? obj.work : 20; // how much work to do between displays
    if (!isInteger(this.work)) alert("work needs to be an integer, not " + this.work);

    this.increment = ("increment" in obj) ? obj.increment : 1.0;  // how much to increment time per display
    if (Number(this.increment) !== this.increment) alert("increment needs to be a number, not " + this.increment);
    this.inc = this.increment / this.work;

    this.scalemass = ("scalemass" in obj) ? obj.scalemass : 1.0;  // how much to scale mass by
    if (Number(this.scalemass) !== this.scalemass) alert("scalemass needs to be a number, not " + this.scalemass);

    this.framerate = ("framerate" in obj) ? obj.framerate : 20.0;  // milliseconds between frames
    if (Number(this.framerate) !== this.framerate) alert("framerate needs to be a number, not " + this.scalemass);
    if (this.framerate < 0) alert("framerate needs to be positive, not " + this.scalemass);

    // adjust mass and velocity so that the time increment is 1
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = this.moons[iMoon];
        moon.mass *= this.scalemass * this.inc * this.inc;
        moon.v.scale(this.inc);
    }

    this.refresh = ("refresh" in obj) ? obj.refresh : 50; // milliseconds between displays
    if (!isInteger(this.refresh)) alert("refresh needs to be an integer, not " + this.refresh);

    this.trail = ("trail" in obj) ? obj.trail : false; // whether to draw trails
    if (typeof this.trail !== "boolean") alert("trail is a boolean, needs to be true or false, not " + this.trail);

    this.fade = ("fade" in obj) ? obj.fade : 0; // how quickly to fade trails, smaller is faster
    if (!isInteger(this.fade)) alert("fade needs to be an integer, not " + this.fade);

    this.dejitter = ("dejitter" in obj) ? obj.dejitter : false; // whether to use a self-smoothing method
    if (typeof this.dejitter !== "boolean")
        alert("dejitter is a boolean, needs to be true or false, not " + this.dejitter);

    this.displayCount = 0;

    // perspective
    if ("eye" in obj) {
        // make a deep copy of the eye
        var eye = obj.eye;
        this.eye = new Eye(eye.distance, new Point(eye.spin.x, eye.spin.y, eye.spin.z), eye.zoom);
    }
    else {
        this.eye = new Eye(100.0, new Point(0.0, 0.0, 0.0), 100.0);
    }
    if (!(this.eye instanceof Eye)) alert("eye needs to be of type Eye");

    var points = ("points" in obj) ? obj.points : 8; // use a multistep function using the last "points" points
    if (!isInteger(points)) alert("points needs to be an integer in 1..15, not " + points);
    if (points < 1 || points > 15) alert("point needs to be an integer in 1..15, not " + points);
    for (var iMoon = 0; iMoon < nMoons; iMoon++)
        this.moons[iMoon].setPoints(points);
    this.points = points;

    this.energy = ("energy" in obj) ? obj.energy : false; // whether to report total energy
    if (typeof this.energy !== "boolean") alert("energy is a boolean, needs to be true or false, not " + this.energy);

    this.stop = ("stop" in obj) ? obj.stop : false; // whether to start out with simulation stopped
    if (typeof this.stop !== "boolean") alert("stop is a boolean, needs to be true or false, not " + this.stop);
    canvas.stopped = this.stop; // whether simulation is currently stopped
    canvas.restart = false;

    this.autocenter = ("autocenter" in obj) ? obj.autocenter : true; // if true, use center of mass as center
    if (typeof this.autocenter !== "boolean") alert("autocenter should be a boolean, not " + this.autocenter);

    if (this.autocenter) {
        var p = new Point(0.0, 0.0, 0.0);
        var v = new Point(0.0, 0.0, 0.0);
        var mass = 0.0;

        // find the weighted average position and velocity
        for (var iMoon = 0; iMoon < nMoons; iMoon++) {
            var moon = this.moons[iMoon];
            mass += moon.mass;
            p.addCP(moon.mass, moon.p);
            v.addCP(moon.mass, moon.v);
        }

        if (mass > 0) {
            p.scale(1.0 / mass);
            v.scale(1.0 / mass);

            // adjust all the moons so the weighted average position and velocity are both zero
            for (var iMoon = 0; iMoon < nMoons; iMoon++) {
                var moon = this.moons[iMoon];
                mass += moon.mass;
                moon.p.sub(p);
                moon.v.sub(v);
            }
        }
    }

    // stop after lifetime time, <=0.0 means do not stop
    this.lifetime = ("lifetime" in obj) ? obj.lifetime : 0.0;
    if (Number(this.lifetime) !== this.lifetime) alert("lifetime needs to be a number, not " + this.lifetime);

    if ("follow" in obj) {
        for (var i = 0; i < nMoons; i++) {
            if (this.moons[i].name == obj.follow)
                this.follow = this.moons[i];
        }
        if (!("follow" in this)) alert("follow must be the name of a moon, not " + obj.follow);
    }

    this.noPerspective = ("noPerspective" in obj) ? obj.noPerspective : false; // view from infinite distance
    if (typeof this.noPerspective !== "boolean") alert("noPerspective should be a boolean, not " + this.noPerspective);

    this.t = 0.0;   // current time in the simulation
    this.iter = 0;  // like t, but incremented by 1 each time
}


// Multistep time-reversible linear polynomial interpolation formulas using 1..15 previous accelerations.
// See https://burtleburtle.net/bob/math/multistep.html.
// Step1 is also known as the Leapfrog method, or Verlet method.  I usually use Step8.
//
// It is assumed that masses and velocities have been scaled such that the timestep is 1.0,
// otherwise we'd need to multiply accelerations by the timestep squared.
//
// A problem with time-reversible methods using n accelerations is they build up jitter that repeats
// every n positions.  The smooth functions are averages of two neighboring step functions.  Those
// are not time reversible, and they need about twice the math, but they're still about as good as the
// time reversible methods, and they dampen the jitter.  Alternating between step() and smooth() causes
// random changes in direction though, and is not advised.

Cosmos.prototype.step1 = function (moon) {
    var head = moon.head;
    moon.v.copy(moon.ov[head]);
    moon.v.add(moon.oa[head]);
    moon.p.add(moon.v);
}

Cosmos.prototype.step2 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;

    v.copy(oa[head]);
    v.add(oa[head - 1]);

    v.add(moon.ov[head - 1]);
    moon.p.add(v);
}

Cosmos.prototype.smooth2 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var ov = moon.ov;
    var head = moon.head;

    v.copy(oa[head]);
    v.scale(2);
    v.add(moon.ov[head]);
    v.add(oa[head - 1]);
    v.add(ov[head - 1]);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step3 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;

    v.copy(oa[head]);
    v.add(oa[head - 2]);
    v.scale(5.0 / 4.0);
    v.addCP(2.0 / 4.0, oa[head - 1]);

    v.add(moon.ov[head - 2]);
    moon.p.add(v);
}

Cosmos.prototype.smooth3 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    v.copy(a);
    v.add(oa[head - 2]);
    v.scale(5.0 / 4.0);
    v.addCP(2.0 / 4.0, oa[head - 1]);
    v.add(moon.ov[head - 2]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 1]);
    v2.add(moon.ov[head - 1]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step4 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 3]);
    v.copy(temp);
    v.scale(7.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 2]);
    v.addCP(5.0, temp);
    v.scale(1.0 / 6.0);

    v.add(moon.ov[head - 3]);
    moon.p.add(v);
}

Cosmos.prototype.smooth4 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 3]);
    v.copy(temp);
    v.scale(7.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 2]);
    v.addCP(5.0, temp);
    v.scale(1.0 / 6.0);
    v.add(moon.ov[head - 3]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 2]);
    v2.scale(5.0 / 4.0);
    v2.addCP(2.0 / 4.0, oa[head - 1]);
    v2.add(moon.ov[head - 2]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step5 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 4]);
    v.copy(temp);
    v.scale(67.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 3]);
    v.addCP(-8.0, temp);
    v.addCP(122.0, oa[head - 2]);
    v.scale(1.0 / 48.0);

    v.add(moon.ov[head - 4]);
    moon.p.add(v);
}

Cosmos.prototype.smooth5 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 4]);
    v.copy(temp);
    v.scale(67.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 3]);
    v.addCP(-8.0, temp);
    v.addCP(122.0, oa[head - 2]);
    v.scale(1.0 / 48.0);
    v.add(moon.ov[head - 4]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 3]);
    v2.scale(7.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 2]);
    v2.addCP(5.0, temp);
    v2.scale(1.0 / 6.0);
    v2.add(moon.ov[head - 3]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step6 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 5]);
    v.copy(temp);
    v.scale(317.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 4]);
    v.addCP(69.0, temp);
    temp.copy(oa[head - 2]);
    temp.add(oa[head - 3]);
    v.addCP(334.0, temp);
    v.scale(1.0 / 240.0);

    v.add(moon.ov[head - 5]);
    moon.p.add(v);
}

Cosmos.prototype.smooth6 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 5]);
    v.copy(temp);
    v.scale(317.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 4]);
    v.addCP(69.0, temp);
    temp.copy(oa[head - 2]);
    temp.add(oa[head - 3]);
    v.addCP(334.0, temp);
    v.scale(1.0 / 240.0);
    v.add(moon.ov[head - 5]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 4]);
    v2.scale(67.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 3]);
    v2.addCP(-8.0, temp);
    v2.addCP(122.0, oa[head - 2]);
    v2.scale(1.0 / 48.0);
    v2.add(moon.ov[head - 4]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step7 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 6]);
    v.copy(temp);
    v.scale(13207.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 5]);
    v.addCP(-8934.0, temp);
    temp.copy(oa[head - 2]);
    temp.add(oa[head - 4]);
    v.addCP(42873.0, temp);
    v.addCP(-33812.0, oa[head - 3]);
    v.scale(1.0 / 8640.0);

    v.add(moon.ov[head - 6]);
    moon.p.add(v);
}

Cosmos.prototype.smooth7 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 6]);
    v.copy(temp);
    v.scale(13207.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 5]);
    v.addCP(-8934.0, temp);
    temp.copy(oa[head - 2]);
    temp.add(oa[head - 4]);
    v.addCP(42873.0, temp);
    v.addCP(-33812.0, oa[head - 3]);
    v.scale(1.0 / 8640.0);
    v.add(moon.ov[head - 6]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 5]);
    v2.scale(317.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 4]);
    v2.addCP(69.0, temp);
    temp.copy(oa[head - 2]);
    temp.add(oa[head - 3]);
    v2.addCP(334.0, temp);
    v2.scale(1.0 / 240.0);
    v2.add(moon.ov[head - 5]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}


Cosmos.prototype.step8 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 7]);
    v.copy(temp);
    v.scale(22081.0);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 1]);
    v.addCP(-7337.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 2]);
    v.addCP(45765.0, temp);
    temp.copy(oa[head - 4]);
    temp.add(oa[head - 3]);
    v.addCP(-29.0, temp);
    v.scale(1.0 / 15120.0);

    v.add(moon.ov[head - 7]);
    moon.p.add(v);
}

Cosmos.prototype.smooth8 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 6]);
    v.copy(temp);
    v.scale(13207.0);
    temp.copy(oa[head - 1]);
    temp.add(oa[head - 5]);
    v.addCP(-8934.0, temp);
    temp.copy(oa[head - 2]);
    temp.add(oa[head - 4]);
    v.addCP(42873.0, temp);
    v.addCP(-33812.0, oa[head - 3]);
    v.scale(1.0 / 8640.0);
    v.add(moon.ov[head - 6]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 7]);
    v2.scale(22081.0);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 1]);
    v2.addCP(-7337.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 2]);
    v2.addCP(45765.0, temp);
    temp.copy(oa[head - 4]);
    temp.add(oa[head - 3]);
    v2.addCP(-29.0, temp);
    v2.scale(1.0 / 15120.0);
    v2.add(moon.ov[head - 7]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step9 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 8]);
    v.copy(temp);
    v.scale(666151.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 1]);
    v.addCP(-841748.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 2]);
    v.addCP(3606748.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 3]);
    v.addCP(-5111276.0, temp);
    v.addCP(6989050.0, oa[head - 4]);
    v.scale(1.0 / 403200.0);

    v.add(moon.ov[head - 8]);
    moon.p.add(v);
}

Cosmos.prototype.smooth9 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 8]);
    v.copy(temp);
    v.scale(666151.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 1]);
    v.addCP(-841748.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 2]);
    v.addCP(3606748.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 3]);
    v.addCP(-5111276.0, temp);
    v.addCP(6989050.0, oa[head - 4]);
    v.scale(1.0 / 403200.0);
    v.add(moon.ov[head - 8]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 7]);
    v2.scale(22081.0);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 1]);
    v2.addCP(-7337.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 2]);
    v2.addCP(45765.0, temp);
    temp.copy(oa[head - 4]);
    temp.add(oa[head - 3]);
    v2.addCP(-29.0, temp);
    v2.scale(1.0 / 15120.0);
    v2.add(moon.ov[head - 7]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step10 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 9]);
    v.copy(temp);
    v.scale(1153247.0);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 1]);
    v.addCP(-1055189.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 2]);
    v.addCP(4412680.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 3]);
    v.addCP(-3621776.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 4]);
    v.addCP(2739838.0, temp);
    v.scale(1.0 / 725760.0);

    v.add(moon.ov[head - 9]);
    moon.p.add(v);
}

Cosmos.prototype.smooth10 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 9]);
    v.copy(temp);
    v.scale(1153247.0);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 1]);
    v.addCP(-1055189.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 2]);
    v.addCP(4412680.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 3]);
    v.addCP(-3621776.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 4]);
    v.addCP(2739838.0, temp);
    v.scale(1.0 / 725760.0);
    v.add(moon.ov[head - 9]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 8]);
    v2.scale(666151.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 1]);
    v2.addCP(-841748.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 2]);
    v2.addCP(3606748.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 3]);
    v2.addCP(-5111276.0, temp);
    v2.addCP(6989050.0, oa[head - 4]);
    v2.scale(1.0 / 403200.0);
    v2.add(moon.ov[head - 8]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step11 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 10]);
    v.copy(temp);
    v.scale(25671198.0);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 1]);
    v.addCP(-48082866.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 2]);
    v.addCP(214734403.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 3]);
    v.addCP(-426775928.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 4]);
    v.addCP(713681566.0, temp);
    v.addCP(-798789548.0, oa[head - 5]);
    v.scale(1.0 / 14515200.0);

    v.add(moon.ov[head - 10]);
    moon.p.add(v);
}

Cosmos.prototype.smooth11 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 10]);
    v.copy(temp);
    v.scale(25671198.0);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 1]);
    v.addCP(-48082866.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 2]);
    v.addCP(214734403.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 3]);
    v.addCP(-426775928.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 4]);
    v.addCP(713681566.0, temp);
    v.addCP(-798789548.0, oa[head - 5]);
    v.scale(1.0 / 14515200.0);
    v.add(moon.ov[head - 10]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 9]);
    v2.scale(1153247.0);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 1]);
    v2.addCP(-1055189.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 2]);
    v2.addCP(4412680.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 3]);
    v2.addCP(-3621776.0, temp);
    temp.copy(oa[head - 5]);
    temp.add(oa[head - 4]);
    v2.addCP(2739838.0, temp);
    v2.scale(1.0 / 725760.0);
    v2.add(moon.ov[head - 9]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step12 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 11]);
    v.copy(temp);
    v.scale(136462207.0);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 1]);
    v.addCP(-207556851.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 2]);
    v.addCP(867125681.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 3]);
    v.addCP(-1296919125.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 4]);
    v.addCP(1550731494.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 5]);
    v.addCP(-570841806.0, temp);
    v.scale(1.0 / 79833600.0);

    v.add(moon.ov[head - 11]);
    moon.p.add(v);
}

Cosmos.prototype.smooth12 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 11]);
    v.copy(temp);
    v.scale(136462207.0);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 1]);
    v.addCP(-207556851.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 2]);
    v.addCP(867125681.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 3]);
    v.addCP(-1296919125.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 4]);
    v.addCP(1550731494.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 5]);
    v.addCP(-570841806.0, temp);
    v.scale(1.0 / 79833600.0);
    v.add(moon.ov[head - 11]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 10]);
    v2.scale(25671198.0);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 1]);
    v2.addCP(-48082866.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 2]);
    v2.addCP(214734403.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 3]);
    v2.addCP(-426775928.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 4]);
    v2.addCP(713681566.0, temp);
    v2.addCP(-798789548.0, oa[head - 5]);
    v2.scale(1.0 / 14515200.0);
    v2.add(moon.ov[head - 10]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step13 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 12]);
    v.copy(temp);
    v.scale(378058032343.0);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 1]);
    v.addCP(-945040569456.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 2]);
    v.addCP(4583977840758.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 3]);
    v.addCP(-11577417859120.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 4]);
    v.addCP(23470490529945.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 5]);
    v.addCP(-34487534887776.0, temp);
    v.addCP(39770282562612.0, oa[head - 6]);
    v.scale(1.0 / 201180672000.0);

    v.add(moon.ov[head - 12]);
    moon.p.add(v);
}

Cosmos.prototype.smooth13 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 12]);
    v.copy(temp);
    v.scale(378058032343.0);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 1]);
    v.addCP(-945040569456.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 2]);
    v.addCP(4583977840758.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 3]);
    v.addCP(-11577417859120.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 4]);
    v.addCP(23470490529945.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 5]);
    v.addCP(-34487534887776.0, temp);
    v.addCP(39770282562612.0, oa[head - 6]);
    v.scale(1.0 / 201180672000.0);
    v.add(moon.ov[head - 12]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 11]);
    v2.scale(136462207.0);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 1]);
    v2.addCP(-207556851.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 2]);
    v2.addCP(867125681.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 3]);
    v2.addCP(-1296919125.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 4]);
    v2.addCP(1550731494.0, temp);
    temp.copy(oa[head - 6]);
    temp.add(oa[head - 5]);
    v2.addCP(-570841806.0, temp);
    v2.scale(1.0 / 79833600.0);
    v2.add(moon.ov[head - 11]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step14 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 13]);
    v.copy(temp);
    v.scale(681136420843.0);
    temp.copy(oa[head - 12]);
    temp.add(oa[head - 1]);
    v.addCP(-1460925809093.0, temp);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 2]);
    v.addCP(6596939334222.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 3]);
    v.addCP(-13816376923762.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 4]);
    v.addCP(22389594250325.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 5]);
    v.addCP(-21489156636931.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 6]);
    v.addCP(9714138099396.0, temp);
    v.scale(1.0 / 373621248000.0);

    v.add(moon.ov[head - 13]);
    moon.p.add(v);
}

Cosmos.prototype.smooth14 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 13]);
    v.copy(temp);
    v.scale(681136420843.0);
    temp.copy(oa[head - 12]);
    temp.add(oa[head - 1]);
    v.addCP(-1460925809093.0, temp);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 2]);
    v.addCP(6596939334222.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 3]);
    v.addCP(-13816376923762.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 4]);
    v.addCP(22389594250325.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 5]);
    v.addCP(-21489156636931.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 6]);
    v.addCP(9714138099396.0, temp);
    v.scale(1.0 / 373621248000.0);
    v.add(moon.ov[head - 13]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 12]);
    v2.scale(378058032343.0);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 1]);
    v2.addCP(-945040569456.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 2]);
    v2.addCP(4583977840758.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 3]);
    v2.addCP(-11577417859120.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 4]);
    v2.addCP(23470490529945.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 5]);
    v2.addCP(-34487534887776.0, temp);
    v2.addCP(39770282562612.0, oa[head - 6]);
    v2.scale(1.0 / 201180672000.0);
    v2.add(moon.ov[head - 12]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step15 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];
    var temp = new Point(a.x, a.y, a.z);

    temp.add(oa[head - 14]);
    v.copy(temp);
    v.scale(4153203447599.0);
    temp.copy(oa[head - 13]);
    temp.add(oa[head - 1]);
    v.addCP(-13042376982862.0, temp);
    temp.copy(oa[head - 12]);
    temp.add(oa[head - 2]);
    v.addCP(69424491332981.0, temp);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 3]);
    v.addCP(-211439794724972.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 4]);
    v.addCP(507593493132679.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 5]);
    v.addCP(-917407311608978.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 6]);
    v.addCP(1310265250135509.0, temp);
    v.addCP(-1467709724631912.0, oa[head - 7]);
    v.scale(1.0 / 2092278988800.0);

    v.add(moon.ov[head - 14]);
    moon.p.add(v);
}

Cosmos.prototype.smooth15 = function (moon) {
    var v = moon.v;
    var oa = moon.oa;
    var head = moon.head;
    var a = oa[head];

    var temp = new Point(a.x, a.y, a.z);
    temp.add(oa[head - 14]);
    v.copy(temp);
    v.scale(4153203447599.0);
    temp.copy(oa[head - 13]);
    temp.add(oa[head - 1]);
    v.addCP(-13042376982862.0, temp);
    temp.copy(oa[head - 12]);
    temp.add(oa[head - 2]);
    v.addCP(69424491332981.0, temp);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 3]);
    v.addCP(-211439794724972.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 4]);
    v.addCP(507593493132679.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 5]);
    v.addCP(-917407311608978.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 6]);
    v.addCP(1310265250135509.0, temp);
    v.addCP(-1467709724631912.0, oa[head - 7]);
    v.scale(1.0 / 2092278988800.0);
    v.add(moon.ov[head - 14]);

    var v2 = new Point(a.x, a.y, a.z);
    v2.add(oa[head - 13]);
    v2.scale(681136420843.0);
    temp.copy(oa[head - 12]);
    temp.add(oa[head - 1]);
    v2.addCP(-1460925809093.0, temp);
    temp.copy(oa[head - 11]);
    temp.add(oa[head - 2]);
    v2.addCP(6596939334222.0, temp);
    temp.copy(oa[head - 10]);
    temp.add(oa[head - 3]);
    v2.addCP(-13816376923762.0, temp);
    temp.copy(oa[head - 9]);
    temp.add(oa[head - 4]);
    v2.addCP(22389594250325.0, temp);
    temp.copy(oa[head - 8]);
    temp.add(oa[head - 5]);
    v2.addCP(-21489156636931.0, temp);
    temp.copy(oa[head - 7]);
    temp.add(oa[head - 6]);
    v2.addCP(9714138099396.0, temp);
    v2.scale(1.0 / 373621248000.0);
    v2.add(moon.ov[head - 13]);

    v.add(v2);
    v.scale(0.5);

    moon.p.add(v);
}

Cosmos.prototype.step = [
    null,
    Cosmos.prototype.step1,
    Cosmos.prototype.step2,
    Cosmos.prototype.step3,
    Cosmos.prototype.step4,
    Cosmos.prototype.step5,
    Cosmos.prototype.step6,
    Cosmos.prototype.step7,
    Cosmos.prototype.step8,
    Cosmos.prototype.step9,
    Cosmos.prototype.step10,
    Cosmos.prototype.step11,
    Cosmos.prototype.step12,
    Cosmos.prototype.step13,
    Cosmos.prototype.step14,
    Cosmos.prototype.step15];

Cosmos.prototype.smooth = [
    null,
    Cosmos.prototype.step1,
    Cosmos.prototype.smooth2,
    Cosmos.prototype.smooth3,
    Cosmos.prototype.smooth4,
    Cosmos.prototype.smooth5,
    Cosmos.prototype.smooth6,
    Cosmos.prototype.smooth7,
    Cosmos.prototype.smooth8,
    Cosmos.prototype.smooth9,
    Cosmos.prototype.smooth10,
    Cosmos.prototype.smooth11,
    Cosmos.prototype.smooth12,
    Cosmos.prototype.smooth13,
    Cosmos.prototype.smooth14,
    Cosmos.prototype.smooth15];


Cosmos.prototype.measureAccelerations = function () {
    var nMoons = this.moons.length;
    var firstMass = this.firstMass;

    // start with no acceleration
    for (var iMoon = 0; iMoon < nMoons; iMoon++)
        this.moons[iMoon].a.zero();

    // moons without mass only interact with moons with mass
    for (var iMoon = 0; iMoon < firstMass; iMoon++) {
        var moon = this.moons[iMoon];
        for (var iOther = firstMass; iOther < nMoons; iOther++)
            moon.attract(this.moons[iOther]);
    }

    // moons with mass interact with each other, equally
    for (var iMoon = firstMass; iMoon < nMoons; iMoon++) {
        var moon = this.moons[iMoon];
        for (var iOther = iMoon + 1; iOther < nMoons; iOther++)
            moon.attract(this.moons[iOther]);
    }
}


Cosmos.prototype.recordStep = function () {
    var nMoons = this.moons.length;
    for (var iMoon = 0; iMoon < nMoons; iMoon++)
        this.moons[iMoon].recordStep();
}


Cosmos.prototype.updateEye = function () {
    // Center on the moon we are following.
    if (this.follow != null) {
        this.eye.setCenter(this.follow.p);
    }

    // Know the positions to display the moons.
    var nMoons = this.moons.length;
    var eye = this.eye;
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = this.moons[iMoon];
        moon.peye = eye.map(moon.p);
    }

    // Sort displayMoons by distance, so they overlap correctly.
    // Use bubblesort because the sort order doesn't change much from display to display.
    nMoons = this.displayMoons.length;
    for (var i = 1; i < nMoons; i++) {
        for (var j = i + 1; --j > 0 && this.displayMoons[j].peye.z > this.displayMoons[j - 1].peye.z;) {
            var temp = this.displayMoons[j];
            this.displayMoons[j] = this.displayMoons[j - 1];
            this.displayMoons[j - 1] = temp;
        }
    }
}


Cosmos.prototype.multistep = function () {
    var nMoons = this.moons.length;
    var points = this.points;

    if (this.smooth) {
        // Although each smooth function is good, and each step function is good,
        // trying to dejitter a step function by switching to a smooth function changes the velocity significantly.
        for (var iMoon = 0; iMoon < nMoons; iMoon++) {
            this.smooth[points](this.moons[iMoon]);
        }
    }
    else {
        for (var iMoon = 0; iMoon < nMoons; iMoon++) {
            this.step[points](this.moons[iMoon]);
        }
    }

    this.measureAccelerations();
    this.recordStep();
}


// move the simulation time this.t forward by amount this.work
Cosmos.prototype.move = function () {
    if (this.lifetime > 0 && this.t > this.lifetime)
        return false;

    for (var iTick = 0; iTick < this.work; iTick++) {
        this.t += this.inc;
        this.iter += 1;

        if (this.lifetime <= 0 || this.t < this.lifetime)
            this.multistep();
        else {
            this.canvas.restart = true;
            this.canvas.stopped = true;
        }
    }
}


// prepare to run: generate the history that the multistep function needs
// Suppose iter=0 and _points=1 (using leapfrog).  Let P, V, A be reverse direction and p, v, a be forward.
// The goal is to start at the start, but have a history going back before the start:
//    v_0 = v_given - (1/2)a_0 (v_0 for leapfrog is really p_0 - p_-1, thus the -(1/2)a_0)
//    p_0 = p_-1 + v_0 = p_given
// To do that, run leapfrog in reverse, starting with
//    A_0 = a_0 = (derived from p_given)
//    V_0 = -v_given - (1/2)a_0
//    P_0 = p_0 = p_given
// and run leapfrog once
//    V_1 = V_0 + A_0 = (-v_given - (1/2)a_0) + a_0 = -v_given + (1/2)a_0
//    P_1 = P_0 + V_0
// then repair the positions so we go forward in time again
//    a_0 = A_0
//    v_0 = -V_1 = v_given - (1/2)a_0
//    p_0 = p_given
// If the multistep uses n steps not just 1,
//    scale down the time to 2^^-Iters of its original size,
//    still reverse everything,
//    still use leapfrog but for n steps instead of 1, giving you n tiny steps in reverse
//    Iters times: take n more steps, then double the timestep and take every other remembered step,
//    now it is taking full timesteps but into the past,
//    reverse everything and it's taking full timesteps forward and with an adequate past.
Cosmos.prototype.prepare = function () {
    var iters = 0;
    var big = (1 << iters) * 1.0;

    // scale down to 2^^-iters, and reverse direction
    var nMoons = this.moons.length;
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = this.moons[iMoon];
        moon.mass /= big * big;
        moon.v.scale(-1.0 / big);
    }

    // measure the initial accelerations before we have taken any steps
    this.measureAccelerations();

    // subtract accel/2 from velocity: leapfrog wants ov[head] to be between steps not exactly on steps
    var head = this.moons[0].head;
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = this.moons[iMoon];
        moon.oa[head].copy(moon.a);
        moon.ov[head].copy(moon.v);
        var dv = new Point(moon.a.x, moon.a.y, moon.a.z);
        dv.scale(-0.5);
        moon.ov[head].add(dv);
    }

    // take points steps backwards with the inaccurate leapfrog method, so this.points+1 points total now
    var points = this.points;
    for (var iStep = 0; iStep < points; iStep++) {
        for (var iMoon = 0; iMoon < nMoons; iMoon++) {
            this.step[1](this.moons[iMoon]);
        }
        this.measureAccelerations();
        this.recordStep();
    }

    // Use the accurate multistep method to produce this.points more points, for 2*this.points+2 total points,
    // then remember just every other point and double the timestep.
    // Do this iters times to scale up to the correct time increment (but in the reverse direction).
    for (var iIter = 0; iIter < iters; iIter++) {
        for (var iStep = 0; iStep < points + 1; iStep++)
            this.multistep();

        head = this.moons[0].head;
        for (var iMoon = 0; iMoon < nMoons; iMoon++) {
            var moon = this.moons[iMoon];
            for (var iHist = 0; iHist < points + 1; iHist++) {
                var iNew = head - iHist;
                var iOld = head - iHist - iHist;
                var newV = moon.ov[iNew];
                newV.copy(moon.ov[iOld]);
                newV.add(moon.ov[iOld - 1]);
                var newA = moon.oa[iNew];
                newA.copy(moon.oa[iOld]);
                newA.scale(4.0);
            }
            moon.mass *= 4.0;
            moon.v.copy(moon.ov[head]);
            moon.a.copy(moon.oa[head]);
        }
    }

    // Now reverse time, leaving us at the original starting point
    // and with this.points+1 of history, and the correct time increment
    head = this.moons[0].head;
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = this.moons[iMoon];

        // reverse old velocities, shifted by one
        for (var iHist = 0; iHist < points / 2; iHist++) {
            var va = moon.ov[head - iHist];
            var vb = moon.ov[head - points + 1 + iHist];
            var temp = new Point(va.x, va.y, va.z);
            va.copy(vb);
            vb.copy(temp);
        }

        // reverse old accelerations
        for (var iHist = 0; iHist < (points + 1) / 2; iHist++) {
            var aa = moon.oa[head - iHist];
            var ab = moon.oa[head - points + iHist];
            var temp = new Point(aa.x, aa.y, aa.z);
            aa.copy(ab);
            ab.copy(temp);
        }

        // adjust the position, and reverse the velocities
        for (var iHist = 0; iHist < points; iHist++) {
            moon.ov[head - iHist].scale(-1.0);
            moon.p.add(moon.ov[head - iHist]);
        }
        moon.v.copy(moon.ov[head]);
        moon.a.copy(moon.oa[head]);

        // adjust where the moon is displayed
        moon.peye.copy(this.eye.map(moon.p));
    }
}


Cosmos.prototype.display = function () {
    // calculate the positions of the moons as seen from the eye
    this.updateEye();
    var canvas = this.canvas;
    var ctx = canvas.getContext("2d");

    var redraw = !this.trail || this.t == 0.0;
    this.displayCount++;

    var oldX = canvas.oldMouseX;
    var oldY = canvas.oldMouseY;
    var newX = canvas.newMouseX;
    var newY = canvas.newMouseY;
    var deltaX = newX - oldX;
    var deltaY = newY - oldY;
    if (deltaX != 0 || deltaY != 0) {
        // changing perspective makes old trails meaningless
        redraw = true;

        // adjust for the position of the canvas on the webpage
        var bound = canvas.getBoundingClientRect();
        oldX -= bound.left;
        newX -= bound.left;
        oldY -= bound.top;
        newY -= bound.top;

        // rotate
        if (canvas.shiftKey) {
            // zoom and rotate clockwise
            var oldDistSq = oldX * oldX + oldY * oldY;
            var newDistSq = newX * newX + newY * newY;
            if (oldDistSq >= 1 && newDistSq >= 1) {
                var zoom = Math.sqrt(newDistSq / oldDistSq);
                this.eye.adjustZoom(zoom);

                var rotate = Math.asin((oldY * newX - oldX * newY) / (zoom * oldDistSq));
                this.eye.rotateZ(rotate);
            }
        }
        else {
            // do a 3d spin about the center of gravity
            var rotate = Math.atan2(deltaX, deltaY);

            this.eye.rotateZ(-rotate);  // setup for 3d rotation

            var deltaSq = deltaX * deltaX + deltaY * deltaY;
            var spin = (deltaSq <= 100) ? Math.sqrt(deltaSq) : deltaSq / 10;
            this.eye.rotateX(spin * this.eye.rotateScale);  // rotate down

            this.eye.rotateZ(rotate);  // recover from setup
        }
    }
    canvas.oldMouseX += deltaX;
    canvas.oldMouseY += deltaY;

    if (redraw) {
        ctx.fillStyle = this.background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
    }
    else if (this.fade > 0 && (this.displayCount % this.fade) == 0) {
        ctx.fillStyle = this.background;
        ctx.globalAlpha = 0.125;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }

    var nMoons = this.displayMoons.length;
    var twoPi = 2 * Math.PI;
    var eye = this.eye;
    eye.setDimensions(this.canvas.width, this.canvas.height);
    for (var iMoon = 0; iMoon < nMoons; iMoon++) {
        var moon = this.displayMoons[iMoon];
        var peye = moon.peye;
        if (peye.z > 0.0) {
            var x = eye.mapX(peye);
            var y = eye.mapY(peye);
            var radius = eye.mapRadius(moon.radius, peye);
            if (x >= -radius && y >= -radius && x - radius <= canvas.width && y - radius <= canvas.height) {
                ctx.fillStyle = moon.color;
                ctx.beginPath();
                if (radius < 0.5)
                    ctx.fillRect(x, y, 1, 1);
                else if (radius < 1.0)
                    ctx.fillRect(x, y, 1, 2);
                else
                    ctx.arc(x, y, radius, 0, twoPi);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
*/