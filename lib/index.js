"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsxgraph_1 = require("./jsxgraph");
var JSXGraph = new jsxgraph_1.TSX.JSXGraph();
// let p0 = b.point(-3, 0)
/*

{

    // // complex numbers
    // let x = new JSXGraph.Complex(0, 7)
    // let y = new JSXGraph.Complex(0, 5)
    // let z = x.mult(y)
    // console.assert(z.real == -35, `expected -35, received ${z.real}`)
    // console.assert(z.imaginary == 0, `expected 0, received ${z.imaginary}`)
    // console.assert(z.toString() == '-35 + 0i')

    // z = x.add(y)
    // console.log(z.absval)
    // let b = new JSXGraph.Complex(2, 2)
    // let c = b.conj()
}


*/
// let c = JSXGraph.initBoard('html12', { axis: true })
// let p1 = c.point(-1, 1,{color:'blue'})
// let p2 = c.point(1,1,{name:'Tom'})
// // let p2 = c.point(-2, 2)
// // let t = c.transform(()=>p1.Y(),6,'translate')
// // let l = c.line(
// //
{
    // from  https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Browser_event_and_coordinates
    var b = JSXGraph.initBoard('html00');
    b.text(-4.5, 3.3, 'Version ' + JSXGraph.version);
    b.text(-4.5, 2.6, new Date().toLocaleTimeString());
    var p = b.point([0, 0], { name: 'label' });
    var t_1 = b.text(-4, 1, '', { fontSize: 15 });
    var c = b.checkbox(-4, 0, 'Checkbox');
    var bt = b.button(-4, -1, 'Button', function () { return alert('hi'); });
    var event_1 = function (e) {
        var eType = e.type.toString();
        if ('code' in e)
            eType += ' ' + e.code.toString();
        t_1.setText(eType);
        // console.log(e)
    };
    var up = function (e, i) {
        if (e === void 0) { e = 'noE'; }
        t_1.setText(e.type.toString());
    };
    b.on('down', event_1);
    b.on('up', event_1);
    b.on('keydown', event_1); // ONLY keydown works
}
{
    // https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Oscillator
    //     var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 10, 10, -10], keepaspectratio: true, axis: true, grid: false}),
    //     line = board.create('line', [[0,8], [0,-10]], {visible: false, straightFirst: false, straightLast: false}),
    //     point = board.create('glider', [-8, -7, line], {name: 'Weight'}),
    //     isInDragMode = false,
    //     springHangup = board.create('point', [0, 9], {color: 'black', name: 'Spring', fixed: true}),
    //     i, numberOfSpringRings = 10, springRings = [];
    // for(i=0; i<numberOfSpringRings; i++) {
    //     springRings[i] = board.create('point', [0.5-i%2, function(i) { return function() { return springHangup.Y()-(i+1)*Math.abs((springHangup.Y() - point.Y())/(numberOfSpringRings+1))}; }(i)], {withLabel: false, color: 'black', size: 1});
    //     if(i>0)
    //         board.create('segment', [springRings[i-1], springRings[i]], {color: 'black', strokeWidth: 1});
    // }
    // board.create('segment', [springHangup, springRings[0]], {color: 'black', strokeWidth: 1});
    // board.create('segment', [springRings[numberOfSpringRings-1], point], {color: 'black', strokeWidth: 1});
    // function startAnimation(startY) {
    //     point.moveAlong(function() {
    //         var f = function(t, x) {
    //                 var c = 0.1, k = 0.5, m = 1;
    //                 return [x[1], -c / m * x[1] - k / m * x[0]];
    //             },
    //             area = [0, 200],
    //             numberOfEvaluations = (area[1] - area[0]) * 100,
    //             data = JXG.Math.Numerics.rungeKutta('heun', [startY, 0], area, numberOfEvaluations, f),
    //             duration = 20 * 1e3;
    //         return function(t) {
    //             if (t >= duration)
    //                 return NaN;
    //             return [0, data[Math.floor(t / duration * numberOfEvaluations)][0]];
    //         }
    //     }());
    // }
    // function hook() {
    //     if(!isInDragMode) {
    //         if(board.mode === board.BOARD_MODE_DRAG) {
    //             board.stopAllAnimation();
    //             isInDragMode = true;
    //         }
    //     }
    //     if(isInDragMode) {'Point
    //         if(board.mode !== board.BOARD_MODE_DRAG) {
    //             isInDragMode = false;
    //             startAnimation(point.Y());
    //         }
    //     }
    // }
    // board.addHook(hook);
    // startAnimation(-5);
}
{
    var b = JSXGraph.initBoard('html01', { boundingbox: [-10, 10, 10, -10] });
    b.text(-9, 9, 'Points, Polygons, Groups', { fontSize: 12 });
    var p1_1 = b.point([0.0, 3.0]);
    var p2_1 = b.point([2.0, 3.0]);
    var p3_1 = b.point([4.0, 7.0]);
    var p4 = b.point([-1.0, 7.0]);
    var poly = b.polygon([p1_1, p2_1, p3_1, p4], { hasInnerPoints: true });
    var pol = void 0, g = void 0;
    var col = 'blue';
    var fill = 'red';
    var p = [];
    p.push(b.point([-2, -1], { strokeWidth: 5, strokeColor: col, fillColor: fill, face: 'cross' }));
    p.push(b.point([2, -1], { strokeWidth: 5, strokeColor: col, fillColor: fill, showInfobox: false }));
    p.push(b.point([2, 1], { strokeWidth: 5, strokeColor: col, fillColor: fill }));
    p.push(b.point([-2, 1], { strokeWidth: 5, strokeColor: col, fillColor: fill }));
    pol = b.polygon(p, { hasInnerPoints: true });
    g = b.group(p);
    var d1_1 = b.point([-8, -8]);
    var d2_1 = b.point([-3, -3]);
    var d3 = b.point([function () { return d1_1.X(); }, function () { return d2_1.Y(); }], { strokeColor: 'blue' });
    var d4 = b.point([function () { return d2_1.X(); }, function () { return d1_1.Y(); }], { strokeColor: 'blue' });
    b.polygon([d1_1, d3, d2_1, d4], { hasInnerPoints: true });
    d3.isDraggable = true;
    d4.isDraggable = true;
    // let f1 = b.point(5, -9)
    // let f2 = b.point(9, -5)
    // let pm = b.midpoint(f1, f2, { visible: false })
    // let circ = b.circle(pm, f1, { visible: false })
    // let f3 = b.glider(circ, 5, -5, { color: 'green' })
    // let t = b.transform.rotate(Math.PI, pm)
    // let f4 = b.transform.point(f3, t, '', { color: 'blue' })
    // b.polygon([f1, f3, f2, f4], { hasInnerPoints: false })
}
{
    var b = JSXGraph.initBoard('html02', { boundingbox: [-10, 10, 10, -10] });
    b.text(-4.5, 4.5, 'Intersections', { fontSize: 15 });
    // Create an intersection point of circle and line
    var p1_2 = b.point([4.0, 4.0]);
    var c1_1 = b.circle(p1_2, 3.0);
    var p2_2 = b.point([1.0, 1.0]);
    var p3_2 = b.point([5.0, 3.0]);
    var l1_1 = b.line(p2_2, p3_2);
    var i_1 = b.intersection(c1_1, l1_1);
    // and a line that doesn't always intersect
    var p4 = b.point([7, -9]); // outside
    var l2 = b.line(p2_2, p4);
    var i2 = b.intersection(c1_1, l2, { name: 'intpoint' });
}
{
    var board = JSXGraph.initBoard('html03');
    board.text(-4.5, 4.5, 'Euclid 1st Prop', { fontSize: 15 });
    // problems
    var a = board.point([-2, 0], { name: 'A' });
    var b = board.point([2, 0], { name: 'B' });
    board.segment(a, b);
    // solution
    var c1_2 = board.circle(a, b);
    var c2 = board.circle(b, a);
    var c = board.intersection(c1_2, c2);
    board.segment(a, c);
    board.segment(b, c);
}
{
    var board = JSXGraph.initBoard('html04');
    board.text(-4.5, 4.5, 'Euclid 2nd Prop', { fontSize: 15 });
    // board.setDefaultAttributes({name:''})
    // problems
    var a = board.point([2, 2]);
    var b = board.point([0, 0]);
    var c = board.point([-2, 0]);
    board.segment(b, c);
    // solution
    var c0 = board.circle(b, c);
    // create the equlaterial triangle from Prop 1
    var c1_3 = board.circle(a, b, { visible: false });
    var c2 = board.circle(b, a, { visible: false });
    var d = board.intersection(c1_3, c2);
    // draw line b-d and create the intersection point e
    var l1_2 = board.line(b, d);
    var e = board.intersection(l1_2, c0);
    var c3 = board.circle(d, e);
    // extend the line from D-A to F
    var l2 = board.line(d, a);
    var f = board.intersection(l2, c3);
    board.segment(a, f, { color: 'red' });
}
{
    var B = JSXGraph.initBoard('html05', { boundingbox: [-1, 10, 11, -2], axis: true, showCopyright: false, showNavigation: false });
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var y = [8.4, 1, 0.1, 9, 3.3, 3.3, 4.5, 8, 9, 4];
    var curve = B.create('curve', [x, y], { curveType: 'plot' });
    var graph1 = B.functiongraph(function (x) { return 4 * Math.sin(x) + 4; }, 0, 4 * Math.PI, { name: 'sin(x)', withLabel: true, strokeColor: 'red' });
    var graph2 = B.functiongraph(function (x) { return Math.pow(x - 4, 2) - 2; }, 0, 10, { name: 'x^2 - 2', withLabel: true, strokeColor: 'green' });
}
{
    var B = JSXGraph.initBoard('html06', { boundingbox: [-20, 20, 20, -20], axis: true });
    B.print('This is a test', 5, true);
    B.print('This is a second test');
    https: //www.cgsd.org/site/handlers/filedownload.ashx?moduleinstanceid=36&dataid=167&FileName=163-SMP-SEAA-C03L03.pdf
     var line = B.conic.line(2.5, 2, -30);
    var line2 = B.conic.line(-1, 1, 5);
}
{
    var brd = JSXGraph.initBoard('html07', { boundingbox: [-2, 5, 5, -2] });
    var urlImg = "src/uccellino.jpg";
    var p0_1 = brd.point([0, 0], { name: 'offset', strokeWidth: 8, strokeOpacity: 0.3 });
    var p1_3 = brd.point([3, 0], { name: 'rotate+scale', strokeWidth: 8, opacity: 0.3 });
    var im = brd.image(urlImg, [0, 0], [3, 3]);
    var li = brd.segment(p0_1, p1_3, { dash: 2 }); // Just for illustration
    // Translate image and point "rotate+scale" by dragging point "offset"
    var tOff = brd.transform.translate(function () { return p0_1.X(); }, function () { return p0_1.Y(); });
    // // Rotate image around point "offset" by dragging point "rot+scale"
    var tRot = brd.transform.rotate(function () { return Math.atan2(p1_3.Y() - p0_1.Y(), p1_3.X() - p0_1.X()); }, p0_1);
    // Scale image by dragging point "rot+scale"
    // We do this by moving the image back to the origin (inverse of transformation tOff),
    // then scale the image (because scaling "starts from (0,0))
    // Finally, we move the image back to point "Offset"
    // The scaling factor is divided by three, because the original image size is (3,3).
    var tOffInv = brd.transform.translate(function () { return -p0_1.X(); }, function () { return -p0_1.Y(); });
    var tScale = brd.transform.scale(function () { return p0_1.distance(p1_3) / 3; }, function () { return p0_1.distance(p1_3) / 3; });
    brd.print('number', 123, 456);
    brd.print('string', 'hello world');
    brd.print('array', [1, 2, 3]);
    // offset the bird towards p0 (the bird starts somewhere else)
    tOffInv.bindTo(im);
    tOffInv.bindTo(p1_3);
    tOff.bindTo(im);
    tRot.bindTo(im);
    tScale.bindTo(im);
    // brd.update();
}
{
    var brd = JSXGraph.initBoard('html08', { boundingbox: [-2, 100, 220, -70], grid: false, axis: true });
    brd.suspendUpdate();
    var deg = brd.slider([10, 90], [100, 90], [1, 1, 10], { name: 'degree', snapWidth: 1 });
    var s_1 = brd.slider([10, 70], [100, 70], [0, 1, 3], { name: 'scale' });
    var pointlist = [];
    for (var i_2 = 0; i_2 < 30; i_2++) {
        pointlist.push(brd.point([function () { return 200 * Math.random(); }, function () { return s_1.Value() * 30 * Math.random() + 20; }], { name: '', strokeWidth: 4, strokeColor: "#0000a0" }));
    }
    brd.unsuspendUpdate();
    // regression = JXG.Math.Numerics.regressionPolynomial(deg,pointlist);
    var regression = function (x) { return -.5 * (x ^ 2) + .4 * x + 16; };
    var reg = brd.functiongraph(regression, 0, 200, { strokeColor: 'green' });
    // t = brd.create('text',[20,-40,
    //             function(){ return "r(x) = " + regression.getTerm();}
    //             ],
    //             {strokeColor:'black',fontSize:'14px'});
}
{
    var x_1 = 0;
    var y_1 = 0;
    var dx_1 = .3;
    var dy_1 = .5;
    var maxX_1 = 9.5;
    var maxY_1 = 9.5;
    var counter = 10;
    var B_1 = JSXGraph.initBoard('html09', { boundingbox: [-maxX_1, maxY_1, maxX_1, -maxY_1], grid: true, axis: false });
    B_1.print('Bounce!');
    var p_1 = B_1.point([0, 0]);
    var c = B_1.circle(p_1, 1); // circle is attached to point
    //// better way is to use a transform, but we use the SIMPLEST way, just setPositionDirectly()
    // let t = B.transform.translate(() => x, () => y)
    // t.bindTo(p);
    var move = function () {
        if (x_1 > maxX_1 || x_1 < -maxX_1) {
            dx_1 = -dx_1;
        }
        if (y_1 > maxY_1 || y_1 < -maxY_1) {
            dy_1 = -dy_1;
        }
        x_1 += dx_1;
        y_1 += dy_1;
        p_1.setPositionDirectly(x_1, y_1);
        B_1.update();
    };
    var id = setInterval(move, 10);
}
{
    var B = JSXGraph.initBoard('html10', { boundingbox: [-10, 10, 10, -10] });
    B.print('arrow is a vector-like segment');
    B.print('axis creates secondary axis lines');
    // Create an arrow providing two points.
    var p1_4 = B.point([8.5, 4.0]);
    var p2_3 = B.point([2.0, 2.0]);
    var l1_3 = B.arrow(p1_4, p2_3);
    var l2 = B.arrow([0, 0], p2_3);
    var l3 = B.arrowparallel(p1_4, p2_3, [0, 0]);
    // an axis can't be dragged
    var p3_3 = B.point([-8, -2]);
    var p4 = B.point([-8, 2]);
    var a1 = B.axis(p3_3, p4);
    var a2 = B.axis([-3, -2], [-1, -2]); // this hides the points
}
{
    var b = JSXGraph.initBoard('html11');
    b.text(-4.5, 4.6, 'Version ' + JSXGraph.version);
    b.text(-4.5, 4, new Date().toLocaleTimeString());
    var text1_1 = b.text(-1, 1, "Hello World", { fontSize: 28, strokeColor: 'green' });
    // and update after 2 second
    setInterval(function () {
        text1_1.setText('Time Out!!');
        text1_1.setAttribute({ 'strokeColor': 'red' });
        text1_1.setCoords(-5, 0);
    }, 2000);
    var t = b.text(-1, -1, 'hello', { strokeColor: 'string' });
    t = t.setText('new');
    var tSize = t.crudeSizeEstimate();
    t = t.setText('new2');
    // console.assert(typeof t == 'object', 'setText returns an object')
    // console.assert(tSize < t.crudeSizeEstimate(), 'crude size increased',)
    // console.log('bounds', t.bounds())
    var input = b.input(-3, 3, 'sin(x)*x', 'f(x)=', { cssStyle: 'width: 100px' });
    b.text(-3, 2, '<button onclick="alert(`pressed`)">Update graph</button>');
}
{
    var b = JSXGraph.initBoard('html12', { boundingbox: [-10, 10, 10, -10], axis: true });
    b.print('Transforms');
    var A_1 = b.point([3, 1], { name: 'A' });
    var p1_5 = b.point([-1, 1], { name: 'blue', color: 'blue' });
    var p2_4 = b.point([-2, 1], { name: 'fixed', fixed: true });
    b.text(-4.5, -4.5, 'Move point A around');
    // tOff.bindTo(p1);
    var trans = b.transform.translate(1, 1);
    var p3_4 = b.transform.point(A_1, trans, { name: 'Trans' });
    var rotat = b.transform.rotate(function () { return (A_1.Y()) / 2; }, p1_5);
    var p4 = b.transform.point(p3_4, rotat, { name: 'Rot' });
    var l1_4 = b.line(p3_4, p4);
    var scale = b.transform.scale(2, 0.5);
    var p5_1 = b.transform.point(p4, scale, { name: 'Scale' });
    var l2 = b.line(p4, p5_1);
    b.text(0, 0, function () { return 'XY' + p5_1.X().toString() + p5_1.Y().toString(); });
}
{
    var board = JSXGraph.initBoard('html13', { boundingbox: [-10, 10, 10, -10], axis: true });
    board.print('orthogonal projection');
    var a = board.point([0.0, 4.0], { name: 'A' });
    var b = board.point([6.0, 1.0], { name: 'B' });
    var l1_5 = board.line(a, b);
    var outer = board.point([1, 1], { name: 'outer' });
    var pp1 = board.orthogonalprojection(outer, l1_5, { name: 'projection' });
}
{
    var b = JSXGraph.initBoard('html14');
    b.text(-4.5, -4.5, 'Move point D around');
    // Create a glider with user defined coordinates. If the coordinates are not on
    // the circle (like in this case) the point will be projected onto the circle.
    var p1_6 = b.point([2.0, 3.0], { name: 'D' });
    var p2_5 = b.point([0.0, 0.0]);
    var c1_4 = b.circle(p1_6, p2_5);
    var c2 = b.circle(b.point([-2, 2]), 2);
    var p3_5 = b.point([-2, -2]);
    var l3 = b.line(p3_5, b.point([3, 3]));
    var c3 = b.circle(p3_5, l3);
    var c4 = b.circle(p2_5, function () { return p3_5.Y(); });
    var p5 = b.point([2, -2], { name: 'P5' });
    var c5 = b.circle(p5, c1_4);
    b.circle([-2, -2], [-1, -1]);
}
{
    var b = JSXGraph.initBoard('html15', { boundingbox: [-1, 5, 5, -1], axis: true });
    var f = [4, 2, -1, 3, 6, 7, 2];
    var chart = b.chart(f, {
        chartStyle: 'bar',
        width: 0.8,
        labels: f,
        colorArray: ['#8E1B77', '#BE1679', '#DC1765', '#DA2130', '#DB311B', '#DF4917', '#E36317', '#E87F1A',
            '#F1B112', '#FCF302', '#C1E212'],
        label: { fontSize: 30, display: 'internal', anchorX: 'left', rotate: 90 }
    });
}
{
    // Glider inherits from Point !!!
    var b = JSXGraph.initBoard('html16', { boundingbox: [-5, 5, 5, -5], axis: true });
    // Create a glider with default coordinates (1,0,0). Same premises as above.
    var p1_7 = b.point([2.0, 2.0]);
    var c1_5 = b.circle(p1_7, 2.0);
    var g2 = b.glider(2.0, 1.5, c1_5);
    g2.startAnimation(1, 20, 120);
    // // Create a slider
    var s = b.slider([-4, 2], [-1, 2], [1, 5, 10], { name: 'n' });
    s.startAnimation(1, 20, 60);
    var s2 = b.slider([-4, -2], [-1, -2], [1, 5, 10], { name: 'n' });
}
{
    var b_1 = JSXGraph.initBoard('html17', { boundingbox: [-1, 5, 5, -1], axis: true });
    b_1.print('bisector lines against two lines');
    var p1_8 = b_1.point([6.0, 4.0]);
    var p2_6 = b_1.point([3.0, 2.0]);
    var p3_6 = b_1.point([1.0, 7.0]);
    var p4 = b_1.point([3.0, 0.0]);
    var l1_6 = b_1.line(p1_8, p2_6);
    var l2 = b_1.line(p3_6, p4);
    var bi1 = b_1.bisectorlines(l1_6, l2);
    var but = b_1.button(0, 3, 'click me', function () { return b_1.print('pushed'); });
}
{
    var b = JSXGraph.initBoard('html18', { boundingbox: [-15, 10, 10, -15], axis: true });
    var view = b.view3D();
    // should be b.view3D(xy, wh, bounds, attributes)
}
{
    var B = JSXGraph.initBoard('html19');
    B.print('circumcircle from 3 points');
    // B.print('circumcenter from same three points')
    // note that circumcircle creates draggable points, even if specified as [0,1]
    B.circumcircle([-1, 0], [3, 1], [1, 0]);
    B.circumcenter([-1, 0], [3, 1], [1, 0]);
    B.circumcircleArc([-1, 0], [3, 1], [1, 0]);
    B.circumcircleSector([-1, 0], [3, 1], [1, 0]);
}
{
    var Brd = JSXGraph.initBoard('html20');
    Brd.print('Conic');
    // Create a conic section through the points A, B, C, D, and E.
    var A = Brd.point([1, 5], { name: 'A' });
    var B = Brd.point([1, 2], { name: 'B' });
    var C = Brd.point([2, 0], { name: 'C' });
    var D = Brd.point([0, 0], { name: 'D' });
    var E = Brd.point([-1, 5], { name: 'E' });
    // try out with points, numbers, functions
    var conic = Brd.conic.fivePoints([1, function () { return Math.PI; }], B, C, D, E);
    // Parameters: A, C, F, B/2, D/2, E/2
    var conic2 = Brd.conic.sixNumbers(1, 2, -4, 0, 0, 0);
}
{
    var B = JSXGraph.initBoard('html21', { axis: true });
    B.print('comb and hatch');
    // B.addAxis()
    B.setAttribute({ axis: true });
    // this needs {axis:true, not just .addAxis()}
    B.print(B.defaultAxes.x, B.defaultAxes.y);
    // Create a simple horizontal comb with invisible endpoints
    B.comb([1, 0], [3, 0]);
    var p1_9 = B.glider(-4, 0, B.defaultAxes.x);
    var p2_7 = B.glider(-1, 0, B.defaultAxes.y);
    var c1_6 = B.comb(p1_9, p2_7, { width: 1.5, frequency: 0.4, angle: Math.PI / 4 });
    // // Create a tape measure
    B.print('Tapemeasure');
    var point1 = B.point([0, -3]);
    var point2 = B.point([1, -3]);
    var point3 = B.point([3, -3]);
    var tape = B.tapemeasure([1, -2], [4, -2], { name: 'measure' });
    B.print('Hatch');
    var seg = B.segment([-4, -4], [0, -4]);
    B.hatch(seg, 5);
}
{
    var B = JSXGraph.initBoard('html22', { axis: true });
    B.print('tangent');
    // Create a tangent providing a glider on a function graph
    var c1_7 = B.curve(function (t) { return t; }, function (t) { return t * t * t; });
    var g1 = B.glider(0.6, 1.2, c1_7);
    var t1 = B.tangent(g1);
}
{
    var B = JSXGraph.initBoard('html23', { boundingbox: [-5, 18, 18, -5] });
    B.print('intersection');
    B.print('union');
    B.print('difference');
    var c1_8 = B.circle([0, 1.5], 3);
    var c2 = B.circle([1, -1.5], 3);
    var clip = B.curveIntersection(c1_8, c2, { fillColor: 'yellow', fillOpacity: 0.6 });
    // ////////////////
    var c3 = B.circle([7, 1.5], 3);
    var c4 = B.circle([8, -1.5], 3);
    var clip2 = B.curveUnion(c3, c4, { fillColor: 'pink', fillOpacity: 0.6 });
    // ////////////////
    var c5 = B.circle([14, 1.5], 3);
    var c6 = B.circle([15, -1.5], 3);
    var clip3 = B.curveDifference(c5, c6, { strokeWidth: 2, fillColor: 'lightblue', fillOpacity: 0.4 });
    ///////////////
    var f = B.functiongraph(function (x) { return Math.cos(x) + 10; });
    var ineq = B.inequality(f, { inverse: true, fillOpacity: 0.1 });
    var circ = B.circle([8, 10], 5);
    B.curveIntersection(ineq, circ, { fillColor: 'yellow', fillOpacity: 0.6 });
}
{
    var B_2 = JSXGraph.initBoard('html24');
    B_2.print('Testing XSS');
    var test = ['a', 'b', '<a href="?">', '../dir'];
    var i_3 = 0;
    test.forEach(function (s) {
        i_3 += 1;
        B_2.print(s);
        B_2.button(1, 4 - i_3, s, function () { return alert(s); });
    });
}
{
    var B = JSXGraph.initBoard('html25', { boundingbox: [-10, 10, 10, -10] });
    B.print('Ellipse, Parabola, Ellipse-Arc');
    // Create a parabola by a point C and a line l.
    var pb1 = B.point([-8, 9]);
    var pb2 = B.point([-8, 1]);
    var li = B.segment(pb1, pb2);
    var foci = B.point([-6, 5]);
    B.parabola(foci, li);
    B.parabola([-4, 5], [[-6, 9], [-6, 1]]);
    /////////////////////// ellipse
    // Create an Ellipse by three points
    var f1 = B.point([-8, -3]);
    var f2 = B.point([-8, -7]);
    var p = B.point([-6, -2]);
    var el = B.conic.threePoints(f1, f2, p);
    // Create an Ellipse by two points and radius (looks like parabols if radius too short)
    var f3 = B.point([-1, -3]);
    var f4 = B.point([-1, -7]);
    var radius = 7;
    B.ellipse(f3, f4, radius);
    // Create an Ellipse arc by three points and two angles
    var f5 = B.point([6, -3]);
    var f6 = B.point([6, -7]);
    var p2_8 = B.point([8, -2]);
    var arc = B.conic.ellipseArc(f5, f6, p2_8, Math.PI / 2, -Math.PI / 2);
}
{
    var B = JSXGraph.initBoard('html26', { boundingbox: [-10, 10, 10, -10] });
    B.print('Circle with Point and Line');
    var x = -8;
    var y = -5;
    var pb1 = B.point([x, y]);
    var pb2 = B.point([x, y - 4]);
    var seg1 = B.segment(pb1, pb2);
    x += 1;
    y += 1;
    B.circle(pb1, pb2);
    x += 1;
    y += 1;
    // point and line
    var test = B.point([x + 2, y + 3]);
    var circle99 = B.circle(test, seg1, { strokeColor: 'red' });
    x += 1;
    y += 1;
    // point and embedded line
    var test2 = B.point([x + 2, y + 3]);
    B.circle([x, y], B.segment([x, y], [x + 2, y + 3]), { strokeColor: 'green' });
    x += 1;
    y += 1;
    // point and immediate line
    B.circle([x, y], [[x, y], [x + 2, y + 3]], { strokeColor: 'orange' });
    x += 1;
    y += 1;
    // immediatepoint and radius
    B.circle([x, y], 4); // blue
    x += 1;
    y += 1;
    // point and function
    B.circle([x, y], function () { return 4; }, { strokeColor: 'pink' });
    x += 5;
    y += 1;
    // point and circle (takes the radius of the circle)
    var c1_9 = B.circle([x, y], [x + 2, y + 3]);
    var p5 = B.point([2, -2], { name: 'P5' });
    var cirq = B.circle(p5, c1_9, {});
    B.print('cirq area', cirq.Area());
    B.print('cirq radius', cirq.Radius());
    B.print('cirq perimeter', cirq.Perimeter());
}
{
    var B = JSXGraph.initBoard('html26');
    // B.setBoundingBox(-10, 10, 10, -10)
    B.addGrid();
    B.removeGrids();
    B.setBoundingBox(-5, 5, 5, -5);
    B.addAxis();
    B.axis([1, 0], [1, 1], { strokeColor: 'red' });
    B.axis([0, 1], [1, 1], { strokeColor: 'red' });
    // B.setBoundingBox(-20,10,10,-10)
}
{
    var JSX = JSXGraph.initBoard('html27');
    var bbox = JSX.getBoundingBox();
    JSX.text(-4, 4, "Before: [".concat(bbox[0], ",").concat(bbox[1], "]"));
    JSX.setBoundingBox(-10, 10, 10, -10);
    var bbox2 = JSX.getBoundingBox();
    JSX.text(-4, 3, "After: [".concat(bbox2[0], ",").concat(bbox2[1], "]"));
    JSX.print('Change Bounding Box');
    JSX.print('Hyperbola');
    var h1 = JSX.point([-4, -3]);
    var h2 = JSX.point([-4, -7]);
    var h3 = JSX.point([-2, -2]);
    JSX.hyperbola(h1, h2, h3); // three points
    var h4 = JSX.point([4, -3]);
    var h5 = JSX.point([4, -7]);
    JSX.hyperbola([4, -3], h5, 3); // points and number
}
{
    var JSX = JSXGraph.initBoard('html28');
    JSX.print('multiple signatures for Midpoint');
    JSX.midpoint(JSX.point([-4, 1]), JSX.point([-1, 1]));
    var seg = JSX.segment([1, 1], [4, 1]);
    JSX.midpoint(seg);
    JSX.print('Create trace curve');
    // let c1 = JSX.circle([0, -3], [2, -3])
    // let p1 = JSX.point(-4, -2)
    // let g1 = JSX.glider(c1, 2, -2)
    // let s1 = JSX.segment(g1, p1)
    // let p2 = JSX.midpoint(s1)
    // let curve = JSX.tracecurve(g1, p2)
    var c1_10 = JSX.create('circle', [[0, -3], [2, -3]]), p1_10 = JSX.point([-4, -2]), g1 = JSX.glider(2, -2, c1_10), s1 = JSX.segment(g1, p1_10), p2_9 = JSX.midpoint(s1), curve = JSX.tracecurve(g1, p2_9);
}
{
    var B = JSXGraph.initBoard('html29');
    // Create a normal to a circle.
    var p1_11 = B.point([1.0, 1.0]);
    var p2_10 = B.point([3.0, 2.0]);
    var c1_11 = B.circle(p1_11, p2_10);
    var norm1 = B.normal(c1_11, p2_10);
    var c2 = B.circle(p1_11, [3, 3], { strokeColor: 'red' });
    var pnt = B.point([3, 3]);
    var norm2 = B.normal(c2, pnt, { strokeColor: 'red' });
    var glider = B.glider(c2);
    var tangent = B.normal(glider);
}
{
    var B = JSXGraph.initBoard('html30');
    B.print('autoposition off for B');
    // let p1 = B.point( [-2, 1], {id: 'A'});
    var pov = [2, 3];
    var p0_2 = B.point(pov, { name: 'Drag me' });
    var p1_12 = B.point([-2, function () { return p0_2.X(); }], { name: 'B', label: { autoPosition: false, offset: [-20, -20] } });
    var p2_11 = B.point([-0.85, 1]);
    var p3_7 = B.point([-1, 1.2], { name: 'C', label: { autoPosition: true, offset: [10, 10] } });
    var c = B.circle(p1_12, p2_11);
    var l = B.line(p1_12, p2_11);
}
{
    var B = JSXGraph.initBoard('html31');
    B.setBoundingBox(-8, 8, 8, -8);
    B.addAxis();
    B.print('implicit curve');
    var a_1 = B.slider([-3, 6], [3, 6], [-3, 1, 3], { name: 'a' });
    var f = function (x, y) { return Math.pow(x, 2) - 2 * x * y - 2 * x + (a_1.Value() + 1) * Math.pow(y, 2) + (4 * a_1.Value() + 2) * y + 4 * a_1.Value() - 3; };
    var c = B.implicitcurve(f, {
        strokeWidth: 3,
        strokeColor: 'red',
        strokeOpacity: 0.8,
        resolution_outer: 20,
        resolution_inner: 20
    });
    var d = B.implicitcurve('abs(x * y) - 3', {
        strokeWidth: 3,
        strokeColor: 'blue',
        strokeOpacity: 0.8
    });
}
{
    var B = JSXGraph.initBoard('html32', { boundingbox: [-0.5, 4, 4, -0.5] });
    B.print('Incenter and Incircle');
    var p = [2.0, 1.0];
    var p1_13 = B.point([0.0, 2.0]);
    var p2_12 = B.point(p);
    var p3_8 = B.point([3.0, 3.0]);
    B.segment(p1_13, p2_12);
    B.segment(p2_12, p3_8);
    B.segment(p3_8, p1_13);
    B.segment(p1_13, [1, 0], { strokeColor: 'green' });
    B.segment([1, 0], p3_8, { strokeColor: 'green' });
    B.segment(p3_8, p1_13, { strokeColor: 'green' });
    var incent = B.incenter(p1_13, p2_12, p3_8);
    var icirc = B.incircle(p1_13, [1, 0], p3_8, { strokeColor: 'green' });
}
{
    var B = JSXGraph.initBoard('html33', { boundingbox: [-8, 8, 8, -8] });
    B.print('Vectorfield');
    // Defining functions
    var fx = function (x, y) { return Math.sin(y); };
    var fy = function (x, y) { return Math.cos(x); };
    var field = B.vectorfield([fx, fy], // Defining function
    [-6, 12, 6], // Horizontal mesh
    [-5, 12, 5]);
}
{
    var B = JSXGraph.initBoard('html34', { boundingbox: [-8, 8, 8, -8] });
    B.print('MajorArc and MinorArc');
    B.print('MajorSector and MinorSector');
    var p = [3.0, 0.5];
    var p1_14 = B.point([5.0, 2.0], { name: 'p1' });
    var p2_13 = B.point(p);
    var p3_9 = B.point([6.5, 1.0]);
    B.majorArc(p1_14, p, p3_9); // p is constant
    p2_13.setPositionDirectly(p2_13.X() - 3, p2_13.Y() - 3);
    B.minorArc(p1_14, p2_13, p3_9);
    var p4 = B.point([-6, 6]);
    B.majorSector(p4, p, p3_9); // p is constant
    B.minorSector(p4, p2_13, p3_9);
}
{
    var B = JSXGraph.initBoard('html35');
    B.print('parallelogram');
    var p1_15 = B.point([-3, -4]);
    var p2_14 = B.point([3, -1]);
    var p3_10 = B.point([-2, 0]);
    var par = B.parallelogram(p1_15, p2_14, p3_10, {
        hasInnerPoints: true,
        parallelpoint: {
            size: 6,
            face: '<<>>'
        }
    });
}
{
    var B = JSXGraph.initBoard('html36');
    B.print('Transform Fields and Methods');
    var p0_3 = B.point([2, 3], { name: 'A' });
    var t = B.transform.translate(function () { return p0_3.X(); }, function () { return p0_3.Y(); });
    var p1_16 = B.transform.point(p0_3, t, { strokeColor: 'blue' });
    // console.log(t)
    B.print('t.matrix: ');
    B.print(t.elValue.matrix[0]); //  1,0,0
    B.print(t.elValue.matrix[1]); //  2,1,0
    B.print(t.elValue.matrix[2]); //  3,0,1
    var p2_15 = B.point([-4, -4], { name: '-4,-4' });
    t.applyOnce(p2_15); // blech.  should be p2.applyOnce(t)
    var p3_11 = B.point([-4, -2], { name: '-4,-2' });
    // let generic = B.transform.generic([1,0,0],[2,1,0],[3,0,1])
    // generic.applyOnce(p3)  // didn't work
    // console.log(generic)
}
{
    var board = JSXGraph.initBoard('html37', { boundingbox: [-10, 10, 10, -10] });
    var i_4 = board.MatrixMath.identity(3, 3);
    board.print('Matrix Math');
    board.print();
    // console.log('3x3', i)   // [ [1,0,0],[0,1,0],[0,0,1]
    board.print(i_4);
    var j1 = [[1, 2, 3], [4, 5, 6]]; // 2x3  times  3x2 should be[[58,64],[139,154]]
    var j2 = [[7, 8], [9, 10], [11, 12]];
    var j3 = board.MatrixMath.matMatMult(j1, j2);
    board.print(j3);
    board.print('');
    var j4 = board.MatrixMath.matrix(3, 2, 1);
    board.print(j4);
    var a = [2, 3, 4];
    var b = [5, 6, 7];
    var c = board.MatrixMath.crossProduct(a, b);
    board.print(c); // should be [-3,6,-3]
    var frustrum = board.MatrixMath.frustum(-10, 10, 10, -10, -10, 10);
    // console.log(frustrum)
    var dot0 = [2, -3];
    var dot1 = [5, 1];
    board.print('Dot product is ', board.MatrixMath.innerProduct(dot0, dot1));
    var inverse = [[2, 4, -2,], [4, 9, -3,], [-2, -3, 7]];
    board.print('Inverse (Gauss)', board.MatrixMath.inverse(inverse));
    var m = [[2, 1], [1, 3]];
    var v = [4, 5];
    board.print('matVecMult', board.MatrixMath.matVecMult(m, v));
    board.print('projection', board.MatrixMath.projection(10, 1, 1, 100));
    board.print('vector', board.MatrixMath.vector(4, 1));
    board.print('transpose', board.MatrixMath.transpose([[1, 3, 5], [2, 4, 6]]));
}
{
    var board_1 = JSXGraph.initBoard('html38');
    board_1.setBoundingBox(-12, 12, 12, -12);
    board_1.addAxis();
    var pointAddrs_1 = [];
    pointAddrs_1.push([-1, -4]);
    pointAddrs_1.push([-1, 4]);
    pointAddrs_1.push([4, 4]);
    pointAddrs_1.push([4, 2.5]);
    pointAddrs_1.push([1, 2.5]);
    pointAddrs_1.push([1, 1]);
    pointAddrs_1.push([3, 1]);
    pointAddrs_1.push([3, -.5]);
    pointAddrs_1.push([1, -.5]);
    pointAddrs_1.push([1, -4]);
    var connectDots = function (p) {
        // connect each dot with the previous one (assumes two dots or more!)
        for (var i_5 = 1; i_5 < p.length; i_5++) { // starts at 1, not 0
            board_1.segment(p[i_5 - 1], p[i_5]);
        }
        board_1.segment(p[p.length - 1], p[0]); // connect the LAST dot to the FIRST one
    };
    // draw the dots
    var dots_1 = pointAddrs_1.map(function (p) { return board_1.point(p); });
    connectDots(dots_1);
    // let's try translation
    // x1 = x + e
    // y1 = y + f
    var xSlide_1 = board_1.slider([-11.5, 11.5], [-4.5, 11.5], [-5, 0, 5], { name: 'x' });
    var ySlide_1 = board_1.slider([-11.5, 10.0], [-4.5, 10.0], [-5, 0, 5], { name: 'y' });
    var rSlide_1 = board_1.slider([-11.5, 8.5], [-4.5, 8.5], [-5, 0, 5], { name: 'r' });
    var sxSlide_1 = board_1.slider([-11.5, 7.0], [-4.5, 7.0], [0, 1, 5], { name: 'sx' });
    var sySlide_1 = board_1.slider([-11.5, 5.5], [-4.5, 5.5], [0, 1, 5], { name: 'sy' });
    var move = function () {
        for (var i_6 = 0; i_6 < pointAddrs_1.length; i_6++) {
            var position = pointAddrs_1[i_6];
            // scaling should be from 0,0 or item will move away
            // uniform scaling if sx == sy
            // scale
            // x1 = a * x
            // y1 = d * y
            position = [position[0] * sxSlide_1.Value(), position[1] * sySlide_1.Value()];
            // must rotate before tanslate
            // (if tranlate -> right and then rotate 90 then will be above so rotate first )
            // rotation
            // x1 = cos(r) * x - sin(r) * y
            // y1 = sin(r) * x + cos(r) * y
            position =
                [position[0] * Math.cos(rSlide_1.Value()) - position[1] * Math.sin(rSlide_1.Value()),
                    position[0] * Math.sin(rSlide_1.Value()) + position[1] * Math.cos(rSlide_1.Value())];
            // translation - just add the value from the slider
            // x1 = x + e
            // y1 = y + f
            position = [position[0] + xSlide_1.Value(), position[1] + ySlide_1.Value()];
            dots_1[i_6].setPositionDirectly(position[0], position[1]);
        }
    };
    var id = setInterval(move, 10);
}
{
    var board = JSXGraph.initBoard('html39');
    board.print('Slopetriangle');
    // // Create a slopetriangle on a tangent
    var f = board.functiongraph(function (x) { return 3 * Math.sin(x); }), g = board.glider(1, 2, f), t = board.tangent(g);
    var st_1 = board.slopetriangle(t);
    board.text(0, 4, function () { return 'Slope: ' + st_1.Value().toFixed(2); });
    // Create a on a line and a point on that line
    var p1_17 = board.point([-3, 3]), p2_16 = board.point([1, -3]), li = board.line(p1_17, p2_16), p = board.glider(0, 0, li);
    var st2 = board.slopetriangle(li, p);
}
{
    var board = JSXGraph.initBoard('html40');
    board.print('Point3D, Line3D, Curve3D');
    board.print(' as VIEW methods');
    var bound = [-5, 5];
    var view = board.view3D(-6, -3, 8, 8, bound, bound, bound);
    var p_2 = view.point3D([1, 2, 2], { name: 'A', size: 5 });
    var q = view.point3D(function () { return [p_2.X(), p_2.Y(), p_2.Z() - 3]; }, { name: 'B', size: 5, fixed: true });
    var l1_7 = view.line3D([1, 3, 3], [-3, -3, -3], { point1: { visible: true }, point2: { visible: true } });
    var l2 = view.line3D(q, l1_7.point1);
    // Line by point, direction, range
    // var l3 = view.line3D(p, [0, 0, 1], [-2, 4]);
    var c1_12 = view.curve3D(function (x) { return Math.sin(x); }, function (y) { return 3 * Math.cos(y); }, function (z) { return z; }, [-5, 5]);
}
{
    var board = JSXGraph.initBoard('html41');
    board.setBoundingBox(-8, 8, 8, -8);
    board.print('functiongraph');
    var box = [-5, 5];
    var view = board.view3D(-6, -3, 8, 8, box, box, box, {
        xPlaneRear: { visible: false },
        yPlaneRear: { visible: false },
    });
    // Function F to be plotted
    var F = function (x, y) { return Math.sin(x * y / 4); };
    // 3D surface
    var c = view.functiongraph3D(F, box, // () => [-s.Value()*5, s.Value() * 5],
    box, // () => [-s.Value()*5, s.Value() * 5],
    {
        strokeWidth: 0.5,
        stepsU: 70,
        stepsV: 70
    });
}
{
    var board = JSXGraph.initBoard('html42');
    board.setBoundingBox(-8, 8, 8, -8);
    board.print('Parametric Surface');
    var box = [-5, 5];
    var view = board.view3D(-6, -3, 8, 8, box, box, box, {
        xPlaneRear: { visible: false },
        yPlaneRear: { visible: false },
    });
    // Sphere
    var c = view.parametricsurface3D(function (u, v) { return 2 * Math.sin(u) * Math.cos(v); }, function (u, v) { return 2 * Math.sin(u) * Math.sin(v); }, function (u, v) { return 2 * Math.cos(u); }, [0, 2 * Math.PI], [0, Math.PI], {
        strokeColor: '#ff0000',
        stepsU: 30,
        stepsV: 30
    });
}
{
    var board = JSXGraph.initBoard('html43');
    board.print('Three triangle centers lie on a line');
    // https://numbas.mathcentre.ac.uk/question/68491/create-a-jsxgraph-diagram-using-jessiecode-three-triangle-centres-lie-on-a-line/
    var A = board.point([-2, -2], { name: 'A' });
    var B = board.point([2, -2], { name: 'B' });
    var C = board.point([1, 2], { name: 'C' });
    var circumcenter = board.circumcenter(A, B, C, { name: "circumcenter" });
    board.circumcircle(A, B, C, { strokeOpacity: 0.3 });
    var side_a = board.segment(B, C, { visible: false });
    var side_b = board.segment(A, C, { visible: false });
    var side_c = board.segment(B, A, { visible: false });
    board.polygon([A, B, C]);
    var M_a = board.midpoint(B, C, { visible: false });
    var M_b = board.midpoint(A, C, { visible: false });
    var M_c = board.midpoint(B, A, { visible: false });
    var median_a = board.line(A, M_a, { dash: 4, color: "gray", strokeOpacity: 0.3 });
    var median_b = board.line(B, M_b, { dash: 4, color: "gray", strokeOpacity: 0.3 });
    var median_c = board.line(C, M_c, { dash: 4, color: "gray", strokeOpacity: 0.3 });
    var centroid = board.intersection(median_a, median_b, { name: "centroid" });
    var p_a = board.perpendicular(side_a, A, { dash: 1, color: "gray", strokeOpacity: 0.3 });
    var p_b = board.perpendicular(side_b, B, { dash: 1, color: "gray", strokeOpacity: 0.3 });
    var p_c = board.perpendicular(side_c, C, { dash: 1, color: "gray", strokeOpacity: 0.3 });
    var orthocenter = board.intersection(p_a, p_b, { name: "orthocenter" });
    var euler_line = board.line(orthocenter, centroid);
}
{
    var brd2 = JSXGraph.initBoard('html44', {
        boundingbox: [-5, 8, 3, -3],
        axis: true,
        showFullscreen: true,
        showCopyright: false,
        keepAspectRatio: true,
        showNavigation: false,
    });
    brd2.print('demo from Google Group');
    var s_2 = brd2.slider([1, 7], [4, 7], [0, 0, 50], {
        name: 'P'
    });
    var x = 4;
    var y = 3;
    var y2 = 5;
    var w1 = 4;
    var xd_1 = w1 / 2;
    var h_1 = 0.8 * y2;
    var wt_1 = 50;
    var dn = function () { return xd_1 - s_2.Value() * h_1 / wt_1; };
    var sq = [];
    sq[0] = brd2.point([dn, 0]);
    sq[1] = brd2.point([dn, y], { visible: true });
    var qr_1 = Math.asin(0.5);
    var Fr_1 = 40;
    var rot1 = brd2.transform.rotate(function () { return (xd_1 >= s_2.Value() * h_1 / wt_1 && s_2.Value() < Fr_1) ? qr_1 : 0; });
    sq[2] = brd2.transform.point(sq[1], rot1);
    var pp1_1 = brd2.segment(sq[0], sq[2]);
    brd2.update();
}
{
    var board = JSXGraph.initBoard('html45', { axis: true });
    // just wanted to see how to draw on the CanvasRenderer.  but
    // doesn't co-exist with JSXGraph SVG.  Need an example.
    var ctx = board.getCanvasCTX();
    var w = board.canvasWidth;
    var h = board.canvasHeight;
    for (var i_7 = 0; i_7 < 16; i_7++) {
        for (var j_1 = 0; j_1 < 16; j_1++) {
            ctx.fillStyle = "rgb(\n                0\n                ".concat(Math.floor(16 * i_7), "\n                ").concat(Math.floor(16 * j_1), "\n                )");
            ctx.fillRect(j_1 * w / 16, i_7 * h / 16, w / 16, h / 16);
        }
    }
}
{
    var board = JSXGraph.initBoard('html46', {
        boundingbox: [-4, 6.5, 4, -2],
        keepAspectRatio: true
    });
    board.print('from:  The Center of Mobile ');
    board.print('Learning with Digital Technology');
    var c1_13 = board.slider([-3, 4.5], [0, 4.5], [0, 0.6, 1]);
    var c2_1 = board.slider([-3, 4], [0, 4], [0, 0, 1]);
    var f1_1 = board.slider([-3, 3.5], [0, 3.5], [1, 7, 100]);
    var f2_1 = board.slider([-3, 3], [0, 3], [1, 17, 100]);
    var cb = board.curve(function (t) { return Math.cos(t) + c1_13.Value() * Math.cos(f1_1.Value() * t) + c2_1.Value() * Math.cos(f2_1.Value() * t); }, function (t) { return Math.sin(t) + c1_13.Value() * Math.sin(f1_1.Value() * t) + c2_1.Value() * Math.sin(f2_1.Value() * t); }, 0, 2.02 * Math.PI, { strokeWidth: 4, strokeColor: 'blue', shadow: true });
    var cw = board.create('curve', [
        function (t) { return Math.cos(t) + c1_13.Value() * Math.cos(f1_1.Value() * t) + c2_1.Value() * Math.cos(f2_1.Value() * t); },
        function (t) { return Math.sin(t) + c1_13.Value() * Math.sin(f1_1.Value() * t) + c2_1.Value() * Math.sin(f2_1.Value() * t); },
        0, 2.02 * Math.PI
    ], { strokeWidth: 2, strokeColor: 'white' });
    board.print('width,height', board.canvasWidth, board.canvasHeight);
    // // Export to SVG
    // var toSVG = function(board) {
    //     var svgRoot = board.renderer.svgRoot,
    //         svg;
    //     svgRoot.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //     svgRoot.setAttribute("width", board.canvasWidth);
    //     svgRoot.setAttribute("height", board.canvasHeight);
    //     svg = new XMLSerializer().serializeToString(svgRoot);
    //     document.getElementById('svgout').value = svg.replace(/>/g, '>\n');
    // }
}
{
    var board = JSXGraph.initBoard('html48', { boundingbox: [-5, 10, 5, -1] });
    board.print('cardinal spline and derivative');
    //create a cardinal spline out of an array of JXG points with adjustable tension
    //create array of points
    var p1_18 = board.point([0, 0]);
    var p2_17 = board.point([1, 4]);
    var p3_12 = board.point([4, 5]);
    var p4 = board.point([2, 3]);
    var p5 = board.point([3, 0]);
    var p = [p1_18, p2_17, p3_12, p4, p5];
    // // tension
    var tau_1 = board.slider([-4, 8], [2, 8], [0.001, 0.5, 1], { name: 'tau' });
    // this works
    var cardinal = board.NumericsMath.CardinalSpline(p, function () { return tau_1.Value(); }); //returns [fn, fn, fn#Points-3]
    var c = board.curve(cardinal[0], cardinal[1], -5, 5, { strokeWidth: 3 });
    // this doesn't work
    // let c = board.cardinalspline(p,()=>tau.Value(),'uniform')
    var t = board.transform.translate(-2, -2);
    var c2 = board.transform.curve(c, t, { strokeColor: 'green' });
    // for fun, test creating a circle from a circle and transform
    // note that the transform circle also changes size with the original ciricle (as it should)
    var cl1 = board.circle([-3, 3], [-2, 2], { strokeColor: 'black', center: { visible: true } });
    var cl2 = board.transform.circle(cl1, t, { strokeColor: 'black' });
}
{
    var b = JSXGraph.initBoard('html49'); // messes everything that follows
    b.print('angles');
    b.angle(b.point([-3, -4]), b.point([-3, -2]), b.point([-1, -2.5]), { type: 'sector', radius: 2, useKatex: true });
    b.angle(b.point([-3, 0]), b.point([-3, 2]), b.point([-1, 2.5]), { type: 'square', radius: 2, useKatex: true });
    // Create an angle out of two lines and two directions
    var p1_19 = b.point([-1, 4]), p2_18 = b.point([4, 1]), q1 = b.point([-2, -3]), q2 = b.point([4, 3]), li1 = b.line(p1_19, p2_18, { strokeColor: 'black', lastArrow: true }), li2 = b.line(q1, q2, { lastArrow: true }), a1 = b.angle(li1, li2, [5.5, 0], [4, 3], { radius: 1 }), a2 = b.angle(li1, li2, 1, -1, { radius: 2 });
}
{
    var board = JSXGraph.initBoard('html50', { boundingbox: [-10, 10, 10, -10] });
    board.print('mirrorelement');
    // point of reflection
    var mirr = board.point([-1, -1], { color: '#aaaaaa' });
    var p1_20 = board.point([-3, -1], { name: "A" });
    var q1 = board.mirrorelement(p1_20, mirr, { name: "A'" });
    var l1_8 = board.conic.line(1, -5, 1);
    var l2 = board.mirrorelement(l1_8, mirr);
    var cu1 = board.curve([-3, -3, -2.5, -3, -3, -2.5], [-3, -2, -2, -2, -2.5, -2.5], -5, 5, { strokeWidth: 3 });
    var cu2 = board.mirrorelement(cu1, mirr, { strokeColor: 'red', strokeWidth: 3 });
    var pol1 = board.polygon([[-6, -2], [-4, -4], [-5, -0.5]]);
    var pol2 = board.mirrorelement(pol1, mirr);
    var c1_14 = board.circle([-6, -6], [-6, -5]);
    var c2 = board.mirrorelement(c1_14, mirr);
    var a1 = board.arc([1, 1], [0, 1], [1, 0], { strokeColor: 'red' });
    var a2 = board.mirrorelement(a1, mirr, { strokeColor: 'red' });
    var s1 = board.sector([-3.5, -3], [-3.5, -2], [-3.5, -4], {
        anglePoint: { visible: true }, center: { visible: true }, radiusPoint: { visible: true },
        fillColor: 'yellow', strokeColor: 'black'
    });
    var s2 = board.mirrorelement(s1, mirr, { fillColor: 'yellow', strokeColor: 'black', fillOpacity: 0.5 });
    var an1 = board.angle([-4, 3.9], [-3, 4], [-3, 3]);
    var an2 = board.mirrorelement(an1, mirr);
}
{
    var board = JSXGraph.initBoard('html51');
    board.print('Parallel');
    // Create a parallel
    var p1_21 = board.point([0.0, 2.0]);
    var p2_19 = board.point([2.0, 1.0]);
    var l1_9 = board.line(p1_21, p2_19);
    var pl1 = board.parallel(l1_9, [1, 3]);
    var p3_13 = board.point([1.0, 4.0]);
    var pl2 = board.parallel(p1_21, p2_19, p3_13, { straightFirst: false, straightLast: false });
}
{
    var board = JSXGraph.initBoard('html52');
    board.print('Polar Line');
    // Create the polar line of a point with respect to a conic
    var p1_22 = board.point([-1, 2]);
    var p2_20 = board.point([1, 4]);
    var p3_14 = board.point([-1, -2]);
    var p4 = board.point([0, 0]);
    var p5 = board.point([4, -2]);
    var c1_15 = board.conic.fivePoints(p1_22, p2_20, p3_14, p4, p5);
    var p6 = board.point([-1, 1]);
    var l1_10 = board.polarLine(c1_15, p6);
}
{
    var board = JSXGraph.initBoard('html53');
    board.print('Pole Point');
    // Create the pole point of a line with respect to a conic
    var p1_23 = board.point([-1, 2]);
    var p2_21 = board.point([1, 4]);
    var p3_15 = board.point([-1, -2]);
    var p4 = board.point([0, 0]);
    var p5 = board.point([4, -2]);
    var c1_16 = board.conic.fivePoints(p1_23, p2_21, p3_15, p4, p5);
    var p6 = board.point([-1, 4]);
    var p7 = board.point([2, -2]);
    var l1_11 = board.line(p6, p7);
    var p8 = board.polePoint(c1_16, l1_11);
}
{
    var board = JSXGraph.initBoard('html54');
    board.print('Reflex and Non-Reflex Angle');
    // Create a non-reflex angle out of three free points
    var p1_24 = board.point([4.0, 0]), p2_22 = board.point([0.0, -0.5]), p3_16 = board.point([-0.5, 4.0]);
    var a_2 = board.reflexAngle(p1_24, p2_22, p3_16, { radius: 2 });
    // let a = board.reflexAngle(p1, p2, p3, { radius: 2 })
    board.text(3, 3, function () { return (a_2.Value().toFixed(2)); });
    var p4 = board.point([0.5, 0]);
    var b_2 = board.nonReflexAngle(p1_24, p4, p3_16, { radius: 2 });
    board.text(4.5, 4.5, function () { return b_2.Value().toFixed(2); });
}
{
    var board = JSXGraph.initBoard('html54', { axis: true });
    board.print('Derivative and Integral');
    board.print('d(x^2) is 2x');
    board.print;
    var fxy = function (x, y) { return Math.pow(x, 2); };
    var cu = board.functiongraph(fxy);
    var d = board.derivative(cu, { dash: 2 });
    var i1 = board.integral([0, 2], d);
    var z1 = board.functiongraph(function (t) { return (Math.cos(t) * t) - 3; });
    var z2 = board.integral([-2.0, 2.0], z1, { fillColor: 'pink' });
}
{
    var board = JSXGraph.initBoard('html55');
    board.print('Mirrorpoint');
    board.setBoundingBox(-10, 10, 10, -10);
    var ap1 = board.point([3.0, 3.0]);
    var ap2 = board.point([6.0, 1.0]);
    var mp1 = board.mirrorpoint(ap1, ap2);
    ///////////////////////
    // Create an intersection point of circle and line
    var p1 = board.point([2.0, 2.0]);
    var c1 = board.circle(p1, 4.0);
    var p2 = board.point([2.0, 2.0]);
    var p3 = board.point([2.0, 2.0]);
    var l1 = board.line(p2, p3);
    var i = board.intersection(c1, l1);
    var j = board.otherIntersection(c1, l1, i);
}
{
    var JSX = JSXGraph.initBoard('html56');
    JSX.print('point');
    JSX.point([3, 2], { strokeColor: 'blue', strokeWidth: 5, strokeOpacity: .5 });
    var q = [3, 3];
    JSX.point(q, { showInfobox: false });
    var p1_25 = JSX.point([-1, 0]);
    var p2_23 = JSX.point([1, 0]);
    JSX.line(p1_25, p2_23);
    var c1_17 = JSX.circle(p1_25, p2_23);
    var c2 = JSX.circle(p2_23, p1_25);
    JSX.intersection(c1_17, c2, { color: 'red' });
    JSX.intersection(c2, c1_17, { color: 'blue' });
}
/////////////// last ///////////////////
{
    // this sets default for board (names, labels, everything)
    // without it, can only use brd2.text() for katex
    // useKatex can only be set ONCE.  unsetting it has no effect
    window.JXG.Options.text.useKatex = true;
    var brd2 = JSXGraph.initBoard('htmlLAST');
    brd2.print('testing Katex');
    brd2.text(-4, 2, '\\pm\\sqrt{a^2 + b^2}', { useKatex: true });
    brd2.text(-4, 1, '\\pm\\sqrt{a^2 + b^2}', { useKatex: false });
    var pq = brd2.arrow([0, 0], [1, 1], {
        withLabel: true,
        name: '(\\vec{pq})',
        label: { position: 'top', parse: false },
        lastArrow: { type: 4, size: 8 },
    });
}
//# sourceMappingURL=index.js.map