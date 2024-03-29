import { TXG } from './tsxgraph'



{
    // from  https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Browser_event_and_coordinates
    const b = TXG.TSXGraph.initBoard ('html00')

    b.text(-4.5, 2.6, new Date().toLocaleTimeString())

    let p = b.point([0, 0], { name: 'label' })
    let t = b.text(-4, 1, '', { fontSize: 15 })
    let c = b.checkbox(-4, 0, 'Checkbox')
    let bt = b.button(-4, -1, 'Button', () => alert('hi'))



    let event = (e: any) => {
        let eType = e.type.toString()
        if ('code' in e)
            eType += ' ' + e.code.toString()
        t.setText(eType)
        // console.log(e)
    }

    let up = (e: any = 'noE', i?: any) => {
        t.setText(e.type.toString())

    }

    b.on('down', event);
    b.on('up', event);
    b.on('keydown', event);    // ONLY keydown works

}


{
    // https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Oscillator

    //     var board = JXG.TSXGraph.initBoard('jxgbox', {boundingbox: [-10, 10, 10, -10], keepaspectratio: true, axis: true, grid: false}),
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
    const b = TXG.TSXGraph.initBoard('html01', { boundingbox: [-10, 10, 10, -10] })

    b.text(-9, 9, 'Points, Polygons, Groups', { fontSize: 12 })
    let p1 = b.point([0.0, 3.0])
    let p2 = b.point([2.0, 3.0])
    let p3 = b.point([4.0, 7.0])
    let p4 = b.point([-1.0, 7.0])



    let poly = b.polygon([p1, p2, p3, p4], { hasInnerPoints: true })

    let pol, g;
    let col = 'blue';
    let fill = 'red';
    let p = []

    p.push(b.point([-2, -1], { strokeWidth: 5, strokeColor: col, fillColor: fill, face: 'cross' }));
    p.push(b.point([2, -1], { strokeWidth: 5, strokeColor: col, fillColor: fill, showInfobox: false }));
    p.push(b.point([2, 1], { strokeWidth: 5, strokeColor: col, fillColor: fill }));
    p.push(b.point([-2, 1], { strokeWidth: 5, strokeColor: col, fillColor: fill }));

    pol = b.polygon(p, { hasInnerPoints: true })
    g = b.group(p)


    let d1 = b.point([-8, -8])
    let d2 = b.point([-3, -3])
    let d3 = b.point([() => d1.X(), () => d2.Y()], { strokeColor: 'blue' })
    let d4 = b.point([() => d2.X(), () => d1.Y()], { strokeColor: 'blue' })
    b.polygon([d1, d3, d2, d4], { hasInnerPoints: true });

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
    const b = TXG.TSXGraph.initBoard('html02', { boundingbox: [-10, 10, 10, -10] })
    b.text(-4.5, 4.5, 'Intersections', { fontSize: 15 })

    // Create an intersection point of circle and line
    let p1 = b.point([4.0, 4.0]);
    let c1 = b.circle(p1, 3.0);

    let p2 = b.point([1.0, 1.0]);
    let p3 = b.point([5.0, 3.0]);
    let l1 = b.line(p2, p3);

    let i = b.intersection(c1, l1);

    // and a line that doesn't always intersect
    let p4 = b.point([7, -9]) // outside
    let l2 = b.line(p2, p4)
    let i2 = b.intersection(c1, l2, { name: 'intpoint' });


}

{

    const board = TXG.TSXGraph.initBoard('html03',)
    board.text(-4.5, 4.5, 'Euclid 1st Prop', { fontSize: 15 })
    // problems
    let a = board.point([-2, 0], { name: 'A' })
    let b = board.point([2, 0], { name: 'B' })
    board.segment(a, b)

    // solution
    let c1 = board.circle(a, b)
    let c2 = board.circle(b, a)

    let c = board.intersection(c1, c2)
    board.segment(a, c)
    board.segment(b, c)

}


{

    const board = TXG.TSXGraph.initBoard('html04',)
    board.text(-4.5, 4.5, 'Euclid 2nd Prop', { fontSize: 15 })

    // board.setDefaultAttributes({name:''})

    // problems
    let a = board.point([2, 2])
    let b = board.point([0, 0])
    let c = board.point([-2, 0])
    board.segment(b, c)

    // solution
    let c0 = board.circle(b, c)

    // create the equlaterial triangle from Prop 1
    let c1 = board.circle(a, b, { visible: false })
    let c2 = board.circle(b, a, { visible: false })
    let d = board.intersection(c1, c2)

    // draw line b-d and create the intersection point e
    let l1 = board.line(b, d)
    let e = board.intersection(l1, c0)

    let c3 = board.circle(d, e)

    // extend the line from D-A to F
    let l2 = board.line(d, a,)
    let f = board.intersection(l2, c3)
    board.segment(a, f, { color: 'red' })

}


{
    let B = TXG.TSXGraph.initBoard('html05', { boundingbox: [-1, 10, 11, -2], axis: true, showCopyright: false, showNavigation: false });
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let y = [8.4, 1, 0.1, 9, 3.3, 3.3, 4.5, 8, 9, 4];
    let curve = B.create('curve', [x, y], { curveType: 'plot' });

    let graph1 = B.functiongraph((x: number) => 4 * Math.sin(x) + 4, 0, 4 * Math.PI, { name: 'sin(x)', withLabel: true, strokeColor: 'red' });
    let graph2 = B.functiongraph((x: number) => Math.pow(x - 4, 2) - 2, 0, 10, { name: 'x^2 - 2', withLabel: true, strokeColor: 'green' });

}

{
    let B = TXG.TSXGraph.initBoard('html06', { boundingbox: [-20, 20, 20, -20], axis: true });

    B.print('This is a test', 5, true)
    B.print('This is a second test')

    https://www.cgsd.org/site/handlers/filedownload.ashx?moduleinstanceid=36&dataid=167&FileName=163-SMP-SEAA-C03L03.pdf
    let line = B.conic.line(2.5, 2, -30)
    let line2 = B.conic.line(-1, 1, 5)

}

{


    let brd = TXG.TSXGraph.initBoard('html07', { boundingbox: [-2, 5, 5, -2] });
    let urlImg = "src/uccellino.jpg";

    let p0 = brd.point([0, 0], { name: 'offset', strokeWidth: 8, strokeOpacity: 0.3 });

    let p1 = brd.point([3, 0], { name: 'rotate+scale', strokeWidth: 8, opacity: 0.3 });
    let im = brd.image(urlImg, [0, 0], [3, 3]);
    let li = brd.segment(p0, p1, { dash: 2 });           // Just for illustration

    // Translate image and point "rotate+scale" by dragging point "offset"
    let tOff = brd.transform.translate(function () { return p0.X() }, function () { return p0.Y() });

    // // Rotate image around point "offset" by dragging point "rot+scale"
    let tRot = brd.transform.rotate(() => Math.atan2(p1.Y() - p0.Y(), p1.X() - p0.X()), p0);

    // Scale image by dragging point "rot+scale"
    // We do this by moving the image back to the origin (inverse of transformation tOff),
    // then scale the image (because scaling "starts from (0,0))
    // Finally, we move the image back to point "Offset"
    // The scaling factor is divided by three, because the original image size is (3,3).

    let tOffInv = brd.transform.translate(() => -p0.X(), () => -p0.Y());
    let tScale = brd.transform.scale(() => p0.distance(p1) / 3, () => p0.distance(p1) / 3);

    brd.print('number', 123, 456)
    brd.print('string', 'hello world')
    brd.print('array', [1, 2, 3])

    // offset the bird towards p0 (the bird starts somewhere else)
    tOffInv.bindTo(im);
    tOffInv.bindTo(p1)

    tOff.bindTo(im);
    tRot.bindTo(im);
    tScale.bindTo(im);

    // brd.update();
}


{
    let brd = TXG.TSXGraph.initBoard('html08', { boundingbox: [-2, 100, 220, -70], grid: false, axis: true });
    brd.suspendUpdate();

    let deg = brd.slider([10, 90], [100, 90], [1, 1, 10], { name: 'degree', snapWidth: 1 });
    let s = brd.slider([10, 70], [100, 70], [0, 1, 3], { name: 'scale' });
    let pointlist: TXG.Point[] = [];
    for (let i = 0; i < 30; i++) {
        pointlist.push(brd.point([() => 200 * Math.random(), () => s.Value() * 30 * Math.random() + 20], { name: '', strokeWidth: 4, strokeColor: "#0000a0" }));
    }
    brd.unsuspendUpdate();


    // regression = JXG.Math.Numerics.regressionPolynomial(deg,pointlist);
    let regression = (x: number): number => -.5 * (x ^ 2) + .4 * x + 16

    let reg = brd.functiongraph(regression, 0, 200, { strokeColor: 'green' });
    // t = brd.create('text',[20,-40,
    //             function(){ return "r(x) = " + regression.getTerm();}
    //             ],
    //             {strokeColor:'black',fontSize:'14px'});


}



{

    let x = 0
    let y = 0
    let dx = .3
    let dy = .5
    let maxX = 9.5
    let maxY = 9.5
    let counter = 10

    let B = TXG.TSXGraph.initBoard('html09', { boundingbox: [-maxX, maxY, maxX, -maxY], grid: true });

    B.print('Bounce!')

    let p = B.point([0, 0])
    let c = B.circle(p, 1)  // circle is attached to point

    //// better way is to use a transform, but we use the SIMPLEST way, just setPositionDirectly()
    // let t = B.transform.translate(() => x, () => y)
    // t.bindTo(p);

    let move = () => {
        if (x > maxX || x < -maxX) {
            dx = -dx
        }
        if (y > maxY || y < -maxY) {
            dy = -dy
        }

        x += dx
        y += dy
        p.setPositionDirectly(x, y)

        B.update()
    }

    let id = setInterval(move, 10);
}


{
    const B = TXG.TSXGraph.initBoard('html10', { boundingbox: [-10, 10, 10, -10] })


    B.print('arrow is a vector-like segment')
    B.print('axis creates secondary axis lines')
    // Create an arrow providing two points.
    let p1 = B.point([8.5, 4.0])
    let p2 = B.point([2.0, 2.0])
    let l1 = B.arrow(p1, p2)
    let l2 = B.arrow([0, 0], p2)

    let l3 = B.arrowparallel(p1, p2, [0, 0])


    // an axis can't be dragged
    let p3 = B.point([-8, -2])
    let p4 = B.point([-8, 2])
    let a1 = B.axis(p3, p4)
    let a2 = B.axis([-3, -2], [-1, -2])   // this hides the points
}



{
    const b = TXG.TSXGraph.initBoard('html11')


    b.text(-4.5, 4, new Date().toLocaleTimeString())

    let text1 = b.text(-1, 1, "Hello World", { fontSize: 28, strokeColor: 'green' });
    // and update after 2 second
    setInterval(() => {
        text1.setText('Time Out!!')
        text1.setAttribute({ 'strokeColor': 'red' })

        text1.setCoords(-5, 0)
    }, 2000)

    let t = b.text(-1, -1, 'hello', { strokeColor: 'string' })
    t = t.setText('new')
    let tSize = t.crudeSizeEstimate()
    t = t.setText('new2')
    // console.assert(typeof t == 'object', 'setText returns an object')
    // console.assert(tSize < t.crudeSizeEstimate(), 'crude size increased',)
    // console.log('bounds', t.bounds())

    let input = b.input(-3, 3, 'sin(x)*x', 'f(x)=', { cssStyle: 'width: 100px' })
    b.text(-3, 2, '<button onclick="alert(`pressed`)">Update graph</button>')


}




{
    const b = TXG.TSXGraph.initBoard('html12', { boundingbox: [-10, 10, 10, -10], axis: true });

    b.print('Transforms')

    let A = b.point([3, 1], { name: 'A' })
    let p1 = b.point([-1, 1], { name: 'blue', color: 'blue' })
    let p2 = b.point([-2, 1], { name: 'fixed', fixed: true })



    b.text(-4.5, -4.5, 'Move point A around')
    // tOff.bindTo(p1);
    let trans = b.transform.translate(1, 1)
    let p3 = b.transform.point(A, trans, { name: 'Trans' })

    let rotat = b.transform.rotate(() => (A.Y()) / 2, p1)
    let p4 = b.transform.point(p3, rotat, { name: 'Rot' })
    let l1 = b.line(p3, p4);

    let scale = b.transform.scale(2, 0.5)
    let p5 = b.transform.point(p4, scale, { name: 'Scale' })
    let l2 = b.line(p4, p5);

    b.text(0, 0, () => 'XY' + p5.X().toString() + p5.Y().toString())


}


{
    const board = TXG.TSXGraph.initBoard('html13', { boundingbox: [-10, 10, 10, -10], axis: true })
    board.print('orthogonal projection')

    let a = board.point([0.0, 4.0], { name: 'A' })
    let b = board.point([6.0, 1.0], { name: 'B' })
    let l1 = board.line(a, b);
    let outer = board.point([1, 1], { name: 'outer' });

    var pp1 = board.orthogonalprojection(outer, l1, { name: 'projection' });
}



{
    const b = TXG.TSXGraph.initBoard('html14')
    b.text(-4.5, -4.5, 'Move point D around')

    // Create a glider with user defined coordinates. If the coordinates are not on
    // the circle (like in this case) the point will be projected onto the circle.
    let p1 = b.point([2.0, 3.0], { name: 'D' });
    let p2 = b.point([0.0, 0.0]);
    let c1 = b.circle(p1, p2);

    let c2 = b.circle(b.point([-2, 2]), 2)

    let p3 = b.point([-2, -2])
    let l3 = b.line(p3, b.point([3, 3]))
    let c3 = b.circle(p3, l3)
    let c4 = b.circle(p2, () => p3.Y())

    let p5 = b.point([2, -2], { name: 'P5' })
    let c5 = b.circle(p5, c1)

    b.circle([-2, -2], [-1, -1])

}

{
    const b = TXG.TSXGraph.initBoard('html15', { boundingbox: [-1, 5, 5, -1], axis: true })

    let f = [4, 2, -1, 3, 6, 7, 2];
    let chart = b.chart(f,
        {
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
    const b = TXG.TSXGraph.initBoard('html16', { boundingbox: [-5, 5, 5, -5], axis: true })


    // Create a glider with default coordinates (1,0,0). Same premises as above.
    let p1 = b.point([2.0, 2.0])
    let c1 = b.circle(p1, 2.0)
    let g2 = b.glider(2.0, 1.5, c1)
    g2.startAnimation(1, 20, 120);


    // // Create a slider
    let s = b.slider([-4, 2], [-1, 2], [1, 5, 10], { name: 'n' });
    s.startAnimation(1, 20, 60);

    let s2 = b.slider([-4, -2], [-1, -2], [1, 5, 10], { name: 'n' });

}


{
    const b = TXG.TSXGraph.initBoard('html17', { boundingbox: [-1, 5, 5, -1], axis: true })

    b.print('bisector lines against two lines')
    let p1 = b.point([6.0, 4.0])
    let p2 = b.point([3.0, 2.0])
    let p3 = b.point([1.0, 7.0])
    let p4 = b.point([3.0, 0.0])
    let l1 = b.line(p1, p2)
    let l2 = b.line(p3, p4)

    let bi1 = b.bisectorlines(l1, l2);

    let but = b.button(0, 3, 'click me', () => b.print('pushed'))
}


{

    const b = TXG.TSXGraph.initBoard('html18', { boundingbox: [-15, 10, 10, -15], axis: true })
    let view = b.view3D()

    // should be b.view3D(xy, wh, bounds, attributes)
}

{
    const B = TXG.TSXGraph.initBoard('html19')

    B.print('circumcircle from 3 points')
    // B.print('circumcenter from same three points')

    // note that circumcircle creates draggable points, even if specified as [0,1]
    B.circumcircle([-1, 0], [3, 1], [1, 0])
    B.circumcenter([-1, 0], [3, 1], [1, 0])
    B.circumcircleArc([-1, 0], [3, 1], [1, 0])
    B.circumcircleSector([-1, 0], [3, 1], [1, 0])

}

{
    const Brd = TXG.TSXGraph.initBoard('html20')

    Brd.print('Conic')

    // Create a conic section through the points A, B, C, D, and E.
    let A = Brd.point([1, 5], { name: 'A' })
    let B = Brd.point([1, 2], { name: 'B' })
    let C = Brd.point([2, 0], { name: 'C' })
    let D = Brd.point([0, 0], { name: 'D' })
    let E = Brd.point([-1, 5], { name: 'E' })

    // try out with points, numbers, functions
    let conic = Brd.conic.fivePoints([1, () => Math.PI], B, C, D, E);

    // Parameters: A, C, F, B/2, D/2, E/2
    let conic2 = Brd.conic.sixNumbers(1, 2, -4, 0, 0, 0);

}

{
    const B = TXG.TSXGraph.initBoard('html21', { axis: true })

    B.print('comb and hatch')
    // B.addAxis()
    B.setAttribute({ axis: true })

    // this needs {axis:true, not just .addAxis()}

    B.print(B.defaultAxes.x, B.defaultAxes.y)


    // Create a simple horizontal comb with invisible endpoints
    B.comb([1, 0], [3, 0]);


    let p1 = B.glider(-4, 0, B.defaultAxes.x);
    let p2 = B.glider(-1, 0, B.defaultAxes.y);
    let c1 = B.comb(p1, p2, { width: 1.5, frequency: 0.4, angle: Math.PI / 4 });



    // // Create a tape measure
    B.print('Tapemeasure')
    let point1 = B.point([0, -3]);
    let point2 = B.point([1, -3]);
    let point3 = B.point([3, -3]);
    let tape = B.tapemeasure([1, -2], [4, -2], { name: 'measure' });

    B.print('Hatch')
    let seg = B.segment([-4, -4], [0, -4])
    B.hatch(seg, 5)
}

{
    const B = TXG.TSXGraph.initBoard('html22', { axis: true })

    B.print('tangent')
    // Create a tangent providing a glider on a function graph
    let c1 = B.curve(function (t: number) { return t }, function (t: number) { return t * t * t; });
    let g1 = B.glider(0.6, 1.2, c1);
    let t1 = B.tangent(g1);
}


{

    const B = TXG.TSXGraph.initBoard('html23', { boundingbox: [-5, 18, 18, -5] })

    B.print('intersection')
    B.print('union')
    B.print('difference')

    let c1 = B.circle([0, 1.5], 3);
    let c2 = B.circle([1, -1.5], 3);

    let clip = B.curveIntersection(c1, c2, { fillColor: 'yellow', fillOpacity: 0.6 });


    // ////////////////

    let c3 = B.circle([7, 1.5], 3);
    let c4 = B.circle([8, -1.5], 3);

    let clip2 = B.curveUnion(c3, c4, { fillColor: 'pink', fillOpacity: 0.6 });

    // ////////////////

    let c5 = B.circle([14, 1.5], 3);
    let c6 = B.circle([15, -1.5], 3);

    let clip3 = B.curveDifference(c5, c6, { strokeWidth: 2, fillColor: 'lightblue', fillOpacity: 0.4 });

    ///////////////

    let f = B.functiongraph((x: number) => Math.cos(x) + 10);
    let ineq = B.inequality(f, { inverse: true, fillOpacity: 0.1 });
    let circ = B.circle([8, 10], 5);
    B.curveIntersection(ineq, circ, { fillColor: 'yellow', fillOpacity: 0.6 });

}


{
    const B = TXG.TSXGraph.initBoard('html24')

    B.print('Testing XSS')

    let test = ['a', 'b', '<a href="?">', '../dir']
    let i = 0
    test.forEach((s) => {
        i += 1
        B.print(s);
        B.button(1, 4 - i, s, () => alert(s));
    })


}
{
    const B = TXG.TSXGraph.initBoard('html25', { boundingbox: [-10, 10, 10, -10] })
    B.print('Ellipse, Parabola, Ellipse-Arc')

    // Create a parabola by a point C and a line l.
    let pb1 = B.point([-8, 9])
    let pb2 = B.point([-8, 1])
    let li = B.segment(pb1, pb2)
    let foci = B.point([-6, 5]);
    B.parabola(foci, li);

    B.parabola([-4, 5], [[-6, 9], [-6, 1]])

    /////////////////////// ellipse

    // Create an Ellipse by three points
    let f1 = B.point([-8, -3])
    let f2 = B.point([-8, -7])
    let p = B.point([-6, -2])
    let el = B.conic.threePoints(f1, f2, p);

    // Create an Ellipse by two points and radius (looks like parabols if radius too short)
    let f3 = B.point([-1, -3])
    let f4 = B.point([-1, -7])
    let radius = 7
    B.ellipse(f3, f4, radius);

    // Create an Ellipse arc by three points and two angles
    let f5 = B.point([6, -3])
    let f6 = B.point([6, -7])
    let p2 = B.point([8, -2])
    let arc = B.conic.ellipseArc(f5, f6, p2, Math.PI / 2, -Math.PI / 2);

}

{
    const B = TXG.TSXGraph.initBoard('html26', { boundingbox: [-10, 10, 10, -10] })
    B.print('Circle with Point and Line')

    let x = -8
    let y = -5

    let pb1 = B.point([x, y])
    let pb2 = B.point([x, y - 4])
    let seg1 = B.segment(pb1, pb2)

    x += 1
    y += 1


    B.circle(pb1, pb2)

    x += 1
    y += 1

    // point and line
    let test = B.point([x + 2, y + 3])
    let circle99 = B.circle(test, seg1, { strokeColor: 'red' })

    x += 1
    y += 1

    // point and embedded line
    let test2 = B.point([x + 2, y + 3])
    B.circle([x, y], B.segment([x, y], [x + 2, y + 3]), { strokeColor: 'green' })

    x += 1
    y += 1

    // point and immediate line
    B.circle([x, y], [[x, y], [x + 2, y + 3]], { strokeColor: 'orange' })

    x += 1
    y += 1

    // immediatepoint and radius
    B.circle([x, y], 4)  // blue

    x += 1
    y += 1

    // point and function
    B.circle([x, y], () => 4, { strokeColor: 'pink' })

    x += 5
    y += 1

    // point and circle (takes the radius of the circle)
    let c1 = B.circle([x, y], [x + 2, y + 3])
    let p5 = B.point([2, -2], { name: 'P5' })
    let cirq = B.circle(p5, c1, {})
    B.print('cirq area', cirq.Area())
    B.print('cirq radius', cirq.Radius())
    B.print('cirq perimeter', cirq.Perimeter())


}

{
    const B = TXG.TSXGraph.initBoard('html26')
    // B.setBoundingBox(-10, 10, 10, -10)
    B.addGrid()
    B.removeGrids()
    B.setBoundingBox(-5, 5, 5, -5)
    B.addAxis()
    B.axis([1, 0], [1, 1], { strokeColor: 'red' })
    B.axis([0, 1], [1, 1], { strokeColor: 'red' })
    // B.setBoundingBox(-20,10,10,-10)


}

{
    const JSX = TXG.TSXGraph.initBoard('html27')

    let bbox = JSX.getBoundingBox()
    JSX.text(-4, 4, `Before: [${bbox[0]},${bbox[1]}]`)

    JSX.setBoundingBox(-10, 10, 10, -10)

    let bbox2 = JSX.getBoundingBox()
    JSX.text(-4, 3, `After: [${bbox2[0]},${bbox2[1]}]`)


    JSX.print('Change Bounding Box')
    JSX.print('Hyperbola')

    let h1 = JSX.point([-4, -3])
    let h2 = JSX.point([-4, -7])
    let h3 = JSX.point([-2, -2])


    JSX.hyperbola(h1, h2, h3) // three points


    let h4 = JSX.point([4, -3])
    let h5 = JSX.point([4, -7])
    JSX.hyperbola([4, -3], h5, 3)  // points and number

}

{
    const JSX = TXG.TSXGraph.initBoard('html28')

    JSX.print('multiple signatures for Midpoint')
    JSX.midpoint(JSX.point([-4, 1]), JSX.point([-1, 1]))
    let seg = JSX.segment([1, 1], [4, 1])
    JSX.midpoint(seg)

    JSX.print('Create trace curve')

    // let c1 = JSX.circle([0, -3], [2, -3])
    // let p1 = JSX.point(-4, -2)
    // let g1 = JSX.glider(c1, 2, -2)
    // let s1 = JSX.segment(g1, p1)
    // let p2 = JSX.midpoint(s1)

    // let curve = JSX.tracecurve(g1, p2)

    let c1 = JSX.create('circle', [[0, -3], [2, -3]]),
        p1 = JSX.point([-4, -2]),
        g1 = JSX.glider(2, -2, c1),
        s1 = JSX.segment(g1, p1),
        p2 = JSX.midpoint(s1),
        curve = JSX.tracecurve(g1, p2);

}

{
    const B = TXG.TSXGraph.initBoard('html29')

    // Create a normal to a circle.
    let p1 = B.point([1.0, 1.0]);
    let p2 = B.point([3.0, 2.0]);
    let c1 = B.circle(p1, p2);
    let norm1 = B.normal(c1, p2);

    let c2 = B.circle(p1, [3, 3], { strokeColor: 'red' });
    let pnt = B.point([3, 3])
    let norm2 = B.normal(c2, pnt, { strokeColor: 'red' })

    let glider = B.glider(c2)
    let tangent = B.normal(glider)

}



{
    const B = TXG.TSXGraph.initBoard('html30')
    B.print('autoposition off for B')

    // let p1 = B.point( [-2, 1], {id: 'A'});
    let pov = [2, 3]

    let p0 = B.point(pov, { name: 'Drag me' })
    let p1 = B.point([-2, () => p0.X()], { name: 'B', label: { autoPosition: false, offset: [-20, -20] } });
    let p2 = B.point([-0.85, 1],);
    let p3 = B.point([-1, 1.2], { name: 'C', label: { autoPosition: true, offset: [10, 10] } });
    let c = B.circle(p1, p2);
    let l = B.line(p1, p2);

}
{
    const B = TXG.TSXGraph.initBoard('html31')
    B.setBoundingBox(-8, 8, 8, -8)
    B.addAxis()

    B.print('implicit curve')

    let a = B.slider([-3, 6], [3, 6], [-3, 1, 3], { name: 'a' })
    let f = (x: number, y: number) => x ** 2 - 2 * x * y - 2 * x + (a.Value() + 1) * y ** 2 + (4 * a.Value() + 2) * y + 4 * a.Value() - 3;

    let c = B.implicitcurve(f, {
        strokeWidth: 3,
        strokeColor: 'red',
        strokeOpacity: 0.8,
        resolution_outer: 20,
        resolution_inner: 20
    });

    let d = B.implicitcurve('abs(x * y) - 3', {
        strokeWidth: 3,
        strokeColor: 'blue',
        strokeOpacity: 0.8
    });

}
{
    const B = TXG.TSXGraph.initBoard('html32', { boundingbox: [-0.5, 4, 4, -0.5] })
    B.print('Incenter and Incircle')

    let p = [2.0, 1.0]
    let p1 = B.point([0.0, 2.0]);
    let p2 = B.point(p);
    let p3 = B.point([3.0, 3.0]);
    B.segment(p1, p2)
    B.segment(p2, p3)
    B.segment(p3, p1)


    B.segment(p1, [1, 0], { strokeColor: 'green' })
    B.segment([1, 0], p3, { strokeColor: 'green' })
    B.segment(p3, p1, { strokeColor: 'green' })

    let incent = B.incenter(p1, p2, p3,)
    let icirc = B.incircle(p1, [1, 0], p3, { strokeColor: 'green' });

}

{
    const B = TXG.TSXGraph.initBoard('html33', { boundingbox: [-8, 8, 8, -8] })
    B.print('Vectorfield')

    // Defining functions
    let fx = (x: number, y: number) => Math.sin(y);
    let fy = (x: number, y: number) => Math.cos(x);

    let field = B.vectorfield(
        [fx, fy],    // Defining function
        [-6, 12, 6], // Horizontal mesh
        [-5, 12, 5], // Vertical mesh
    );
}

{
    const B = TXG.TSXGraph.initBoard('html34', { boundingbox: [-8, 8, 8, -8] })
    B.print('MajorArc and MinorArc')
    B.print('MajorSector and MinorSector')

    let p = [3.0, 0.5]
    let p1 = B.point([5.0, 2.0], { name: 'p1' });
    let p2 = B.point(p);
    let p3 = B.point([6.5, 1.0]);

    B.majorArc(p1, p, p3)  // p is constant
    p2.setPositionDirectly(p2.X() - 3, p2.Y() - 3)
    B.minorArc(p1, p2, p3)

    let p4 = B.point([-6, 6])
    B.majorSector(p4, p, p3)  // p is constant
    B.minorSector(p4, p2, p3)
}

{
    const B = TXG.TSXGraph.initBoard('html35')
    B.print('parallelogram')

    let p1 = B.point([-3, -4]);
    let p2 = B.point([3, -1]);
    let p3 = B.point([-2, 0]);
    let par = B.parallelogram(p1, p2, p3, {
        hasInnerPoints: true,
        parallelpoint: {
            size: 6,
            face: '<<>>'
        }
    });

}

{

    const B = TXG.TSXGraph.initBoard('html36')
    B.print('Transform Fields and Methods')

    let p0 = B.point([2, 3], { name: 'A' })
    let t = B.transform.translate(() => p0.X(), () => p0.Y())
    let p1 = B.transform.point(p0, t, { strokeColor: 'blue' });
    // console.log(t)
    B.print('t.matrix: ')
    B.print((t.elValue as any).matrix[0])  //  1,0,0
    B.print((t.elValue as any).matrix[1])  //  2,1,0
    B.print((t.elValue as any).matrix[2])  //  3,0,1

    let p2 = B.point([-4, -4], { name: '-4,-4' })
    t.applyOnce(p2)  // blech.  should be p2.applyOnce(t)

    let p3 = B.point([-4, -2], { name: '-4,-2' })
    // let generic = B.transform.generic([1,0,0],[2,1,0],[3,0,1])
    // generic.applyOnce(p3)  // didn't work
    // console.log(generic)


}
{


    const board = TXG.TSXGraph.initBoard('html37', { boundingbox: [-10, 10, 10, -10] });

    let i = board.MatrixMath.identity(3, 3)
    board.print('Matrix Math')
    board.print()

    // console.log('3x3', i)   // [ [1,0,0],[0,1,0],[0,0,1]
    board.print(i)

    let j1 = [[1, 2, 3], [4, 5, 6]]     // 2x3  times  3x2 should be[[58,64],[139,154]]
    let j2 = [[7, 8], [9, 10], [11, 12]]
    let j3 = board.MatrixMath.matMatMult(j1, j2)
    board.print(j3)
    board.print('')

    let j4 = board.MatrixMath.matrix(3, 2, 1)
    board.print(j4)

    let a = [2, 3, 4]
    let b = [5, 6, 7]
    let c = board.MatrixMath.crossProduct(a, b)
    board.print(c)  // should be [-3,6,-3]

    let frustrum = board.MatrixMath.frustum(-10, 10, 10, -10, -10, 10)
    // console.log(frustrum)

    let dot0 = [2, -3]
    let dot1 = [5, 1]
    board.print('Dot product is ', board.MatrixMath.innerProduct(dot0, dot1))

    let inverse = [[2, 4, -2,], [4, 9, -3,], [-2, -3, 7]]
    board.print('Inverse (Gauss)', board.MatrixMath.inverse(inverse))

    let m = [[2, 1], [1, 3]]
    let v = [4, 5]
    board.print('matVecMult', board.MatrixMath.matVecMult(m, v))

    board.print('projection', board.MatrixMath.projection(10, 1, 1, 100))

    board.print('vector', board.MatrixMath.vector(4, 1))

    board.print('transpose', board.MatrixMath.transpose([[1, 3, 5], [2, 4, 6]]))


}

{
    const board = TXG.TSXGraph.initBoard('html38',);
    board.setBoundingBox(-12, 12, 12, -12)
    board.addAxis()


    let pointAddrs: [number, number][] = []
    pointAddrs.push([-1, -4])
    pointAddrs.push([-1, 4])
    pointAddrs.push([4, 4])
    pointAddrs.push([4, 2.5])
    pointAddrs.push([1, 2.5])
    pointAddrs.push([1, 1])
    pointAddrs.push([3, 1])
    pointAddrs.push([3, -.5])
    pointAddrs.push([1, -.5])
    pointAddrs.push([1, -4])

    let connectDots = (p: any[]) => {  // pass in the array we want
        // connect each dot with the previous one (assumes two dots or more!)
        for (let i = 1; i < p.length; i++) {   // starts at 1, not 0
            board.segment(p[i - 1], p[i])
        }
        board.segment(p[p.length - 1], p[0])   // connect the LAST dot to the FIRST one
    }


    // draw the dots
    let dots = pointAddrs.map((p) => board.point(p))
    connectDots(dots)

    // let's try translation
    // x1 = x + e
    // y1 = y + f

    let xSlide = board.slider([-11.5, 11.5], [-4.5, 11.5], [-5, 0, 5], { name: 'x' })
    let ySlide = board.slider([-11.5, 10.0], [-4.5, 10.0], [-5, 0, 5], { name: 'y' })
    let rSlide = board.slider([-11.5, 8.5], [-4.5, 8.5], [-5, 0, 5], { name: 'r' })
    let sxSlide = board.slider([-11.5, 7.0], [-4.5, 7.0], [0, 1, 5], { name: 'sx' })
    let sySlide = board.slider([-11.5, 5.5], [-4.5, 5.5], [0, 1, 5], { name: 'sy' })

    let move = () => {

        for (let i = 0; i < pointAddrs.length; i++) {
            let position = pointAddrs[i]

            // scaling should be from 0,0 or item will move away
            // uniform scaling if sx == sy

            // scale
            // x1 = a * x
            // y1 = d * y
            position = [position[0] * sxSlide.Value(), position[1] * sySlide.Value()]

            // must rotate before tanslate
            // (if tranlate -> right and then rotate 90 then will be above so rotate first )

            // rotation
            // x1 = cos(r) * x - sin(r) * y
            // y1 = sin(r) * x + cos(r) * y
            position =
                [position[0] * Math.cos(rSlide.Value()) - position[1] * Math.sin(rSlide.Value()),
                position[0] * Math.sin(rSlide.Value()) + position[1] * Math.cos(rSlide.Value())]

            // translation - just add the value from the slider
            // x1 = x + e
            // y1 = y + f
            position = [position[0] + xSlide.Value(), position[1] + ySlide.Value()]

            dots[i].setPositionDirectly(position[0], position[1])

        }
    }

    let id = setInterval(move, 10);
}

{
    const board = TXG.TSXGraph.initBoard('html39',);
    board.print('Slopetriangle')

    // // Create a slopetriangle on a tangent
    let f = board.functiongraph((x: number) => 3 * Math.sin(x)),
        g = board.glider(1, 2, f),
        t = board.tangent(g)

    let st = board.slopetriangle(t)
    board.text(0, 4, () => 'Slope: ' + st.Value().toFixed(2))

    // Create a on a line and a point on that line
    let p1 = board.point([-3, 3]),
        p2 = board.point([1, -3]),
        li = board.line(p1, p2),
        p = board.glider(0, 0, li)

    let st2 = board.slopetriangle(li, p);


}

{
    const board = TXG.TSXGraph.initBoard('html40',);
    board.print('Point3D, Line3D, Curve3D')
    board.print(' as VIEW methods')

    let bound = [-5, 5];
    let view = board.view3D(-6, -3, 8, 8, bound, bound, bound)

    let p = view.point3D([1, 2, 2], { name: 'A', size: 5 });
    let q = view.point3D(() => [p.X(), p.Y(), p.Z() - 3], { name: 'B', size: 5, fixed: true });


    let l1 = view.line3D([1, 3, 3], [-3, -3, -3], { point1: { visible: true }, point2: { visible: true } });
    let l2 = view.line3D(q, l1.point1);

    // Line by point, direction, range
    // var l3 = view.line3D(p, [0, 0, 1], [-2, 4]);

    let c1 = view.curve3D((x: number) => Math.sin(x), (y: number) => 3 * Math.cos(y), (z: number) => z, [-5, 5])

}
{


    const board = TXG.TSXGraph.initBoard('html41');
    board.setBoundingBox(-8, 8, 8, -8)
    board.print('functiongraph')

    let box = [-5, 5];
    let view = board.view3D(-6, -3, 8, 8, box, box, box,
        {
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false },
        });

    // Function F to be plotted
    let F = (x: number, y: number) => Math.sin(x * y / 4);

    // 3D surface
    let c = view.functiongraph3D(
        F,
        box, // () => [-s.Value()*5, s.Value() * 5],
        box, // () => [-s.Value()*5, s.Value() * 5],
        {
            strokeWidth: 0.5,
            stepsU: 70,
            stepsV: 70
        })

}

{
    const board = TXG.TSXGraph.initBoard('html42');
    board.setBoundingBox(-8, 8, 8, -8)
    board.print('Parametric Surface')



    let box = [-5, 5];
    let view = board.view3D(-6, -3, 8, 8, box, box, box,
        {
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false },
        });

    // Sphere
    let c = view.parametricsurface3D(
        (u: number, v: number) => 2 * Math.sin(u) * Math.cos(v),
        (u: number, v: number) => 2 * Math.sin(u) * Math.sin(v),
        (u: number, v: number) => 2 * Math.cos(u),
        [0, 2 * Math.PI],
        [0, Math.PI],
        {
            strokeColor: '#ff0000',
            stepsU: 30,
            stepsV: 30
        });
}

{
    const board = TXG.TSXGraph.initBoard('html43');
    board.print('Three triangle centers lie on a line')
    // https://numbas.mathcentre.ac.uk/question/68491/create-a-jsxgraph-diagram-using-jessiecode-three-triangle-centres-lie-on-a-line/

    let A = board.point([-2, -2], { name: 'A' });
    let B = board.point([2, -2], { name: 'B' });
    let C = board.point([1, 2], { name: 'C' });

    let circumcenter = board.circumcenter(A, B, C, { name: "circumcenter" })
    board.circumcircle(A, B, C, { strokeOpacity: 0.3 })

    let side_a = board.segment(B, C, { visible: false })
    let side_b = board.segment(A, C, { visible: false })
    let side_c = board.segment(B, A, { visible: false })

    board.polygon([A, B, C])

    let M_a = board.midpoint(B, C, { visible: false })
    let M_b = board.midpoint(A, C, { visible: false })
    let M_c = board.midpoint(B, A, { visible: false })

    let median_a = board.line(A, M_a, { dash: 4, color: "gray", strokeOpacity: 0.3 })
    let median_b = board.line(B, M_b, { dash: 4, color: "gray", strokeOpacity: 0.3 })
    let median_c = board.line(C, M_c, { dash: 4, color: "gray", strokeOpacity: 0.3 })

    let centroid = board.intersection(median_a, median_b, { name: "centroid" })

    let p_a = board.perpendicular(side_a, A, { dash: 1, color: "gray", strokeOpacity: 0.3 })
    let p_b = board.perpendicular(side_b, B, { dash: 1, color: "gray", strokeOpacity: 0.3 })
    let p_c = board.perpendicular(side_c, C, { dash: 1, color: "gray", strokeOpacity: 0.3 })

    let orthocenter = board.intersection(p_a, p_b, { name: "orthocenter" })

    let euler_line = board.line(orthocenter, centroid);

}
{
    const brd2 = TXG.TSXGraph.initBoard('html44', {
        boundingbox: [-5, 8, 3, -3],
        axis: true,
        showFullscreen: true,
        showCopyright: false,
        keepAspectRatio: true,
        showNavigation: false,

    });
    brd2.print('demo from Google Group')

    let s = brd2.slider(
        [1, 7],
        [4, 7],
        [0, 0, 50]
        , {
            name: 'P'
        });

    let x = 4;
    let y = 3;
    let y2 = 5;
    let w1 = 4;
    let xd = w1 / 2;
    let h = 0.8 * y2;
    let wt = 50;

    let dn = () => xd - s.Value() * h / wt
    var sq = [];

    sq[0] = brd2.point([dn, 0]);
    sq[1] = brd2.point([dn, y], { visible: true });

    let qr = Math.asin(0.5);
    let Fr = 40;

    let rot1 = brd2.transform.rotate(() => (xd >= s.Value() * h / wt && s.Value() < Fr) ? qr : 0)

    sq[2] = brd2.transform.point(sq[1], rot1);
    let pp1 = brd2.segment(sq[0], sq[2]);


    brd2.update();
}
{
    const board = TXG.TSXGraph.initBoard('html45', { axis: true });

    // just wanted to see how to draw on the CanvasRenderer.  but
    // doesn't co-exist with JSXGraph SVG.  Need an example.

    let ctx = board.getCanvasCTX()
    let w = board.canvasWidth
    let h = board.canvasHeight

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            ctx.fillStyle = `rgb(
                0
                ${Math.floor(16 * i)}
                ${Math.floor(16 * j)}
                )`;
            ctx.fillRect(j * w / 16, i * h / 16, w / 16, h / 16);
        }
    }
}


{

    const board = TXG.TSXGraph.initBoard('html46', {
        boundingbox: [-4, 6.5, 4, -2],
        keepAspectRatio: true
    });

    board.print('from:  The Center of Mobile ')
    board.print('Learning with Digital Technology')

    let c1 = board.slider([-3, 4.5], [0, 4.5], [0, 0.6, 1]);
    let c2 = board.slider([-3, 4], [0, 4], [0, 0, 1]);
    let f1 = board.slider([-3, 3.5], [0, 3.5], [1, 7, 100]);
    let f2 = board.slider([-3, 3], [0, 3], [1, 17, 100]);

    let cb = board.curve(
        (t: number) => Math.cos(t) + c1.Value() * Math.cos(f1.Value() * t) + c2.Value() * Math.cos(f2.Value() * t),
        (t: number) => Math.sin(t) + c1.Value() * Math.sin(f1.Value() * t) + c2.Value() * Math.sin(f2.Value() * t),
        0, 2.02 * Math.PI,
        { strokeWidth: 4, strokeColor: 'blue', shadow: true });

    let cw = board.create('curve', [
        (t: number) => Math.cos(t) + c1.Value() * Math.cos(f1.Value() * t) + c2.Value() * Math.cos(f2.Value() * t),
        (t: number) => Math.sin(t) + c1.Value() * Math.sin(f1.Value() * t) + c2.Value() * Math.sin(f2.Value() * t),
        0, 2.02 * Math.PI
    ], { strokeWidth: 2, strokeColor: 'white' });

    board.print('width,height', board.canvasWidth, board.canvasHeight)
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
    const board = TXG.TSXGraph.initBoard('html48', { boundingbox: [-5, 10, 5, -1] })
    board.print('cardinal spline and derivative')

    //create a cardinal spline out of an array of JXG points with adjustable tension
    //create array of points
    let p1 = board.point([0, 0])
    let p2 = board.point([1, 4])
    let p3 = board.point([4, 5])
    let p4 = board.point([2, 3])
    let p5 = board.point([3, 0])
    let p = [p1, p2, p3, p4, p5]



    // // tension
    let tau = board.slider([-4, 8], [2, 8], [0.001, 0.5, 1], { name: 'tau' });



    // this works
    let cardinal = board.NumericsMath.CardinalSpline(p, () => tau.Value())  //returns [fn, fn, fn#Points-3]
    let c = board.curve(cardinal[0], cardinal[1], -5, 5, { strokeWidth: 3 })
    // this doesn't work
    // let c = board.cardinalspline(p,()=>tau.Value(),'uniform')

    let t = board.transform.translate(-2, -2);
    let c2 = board.transform.curve(c, t, { strokeColor: 'green' });

    // for fun, test creating a circle from a circle and transform
    // note that the transform circle also changes size with the original ciricle (as it should)
    let cl1 = board.circle([-3, 3], [-2, 2], { strokeColor: 'black', center: { visible: true } });
    let cl2 = board.transform.circle(cl1, t, { strokeColor: 'black' });



}
{
    const b = TXG.TSXGraph.initBoard('html49');  // messes everything that follows
    b.print('angles')

    b.angle(b.point([-3, -4]), b.point([-3, -2]), b.point([-1, -2.5]), { type: 'sector', radius: 2, useKatex: true })
    b.angle(b.point([-3, 0]), b.point([-3, 2]), b.point([-1, 2.5]), { type: 'square', radius: 2, useKatex: true })

    // Create an angle out of two lines and two directions
    let p1 = b.point([-1, 4]),
        p2 = b.point([4, 1]),
        q1 = b.point([-2, -3]),
        q2 = b.point([4, 3]),

        li1 = b.line(p1, p2, { strokeColor: 'black', lastArrow: true }),
        li2 = b.line(q1, q2, { lastArrow: true }),

        a1 = b.angle(li1, li2, [5.5, 0], [4, 3], { radius: 1 }),
        a2 = b.angle(li1, li2, 1, -1, { radius: 2 });

}

{
    const board = TXG.TSXGraph.initBoard('html50', { boundingbox: [-10, 10, 10, -10] })
    board.print('mirrorelement')

    // point of reflection
    let mirr = board.point([-1, -1], { color: '#aaaaaa' });

    let p1 = board.point([-3, -1], { name: "A" });
    let q1 = board.mirrorelement(p1, mirr, { name: "A'" });

    let l1 = board.conic.line(1, -5, 1);
    let l2 = board.mirrorelement(l1, mirr)

    let cu1 = board.curve([-3, -3, -2.5, -3, -3, -2.5], [-3, -2, -2, -2, -2.5, -2.5], -5, 5, { strokeWidth: 3 });
    let cu2 = board.mirrorelement(cu1, mirr, { strokeColor: 'red', strokeWidth: 3 });

    let pol1 = board.polygon([[-6, -2], [-4, -4], [-5, -0.5]]);
    let pol2 = board.mirrorelement(pol1, mirr);

    let c1 = board.circle([-6, -6], [-6, -5]);
    let c2 = board.mirrorelement(c1, mirr);

    let a1 = board.arc([1, 1], [0, 1], [1, 0], { strokeColor: 'red' });
    let a2 = board.mirrorelement(a1, mirr, { strokeColor: 'red' });

    let s1 = board.sector([-3.5, -3], [-3.5, -2], [-3.5, -4], {
        anglePoint: { visible: true }, center: { visible: true }, radiusPoint: { visible: true },
        fillColor: 'yellow', strokeColor: 'black'
    });
    let s2 = board.mirrorelement(s1, mirr, { fillColor: 'yellow', strokeColor: 'black', fillOpacity: 0.5 });

    let an1 = board.angle([-4, 3.9], [-3, 4], [-3, 3]);
    let an2 = board.mirrorelement(an1, mirr);



}

{
    const board = TXG.TSXGraph.initBoard('html51')
    board.print('Parallel')
    // Create a parallel
    let p1 = board.point([0.0, 2.0]);
    let p2 = board.point([2.0, 1.0]);
    let l1 = board.line(p1, p2);
    let pl1 = board.parallel(l1, [1, 3]);

    let p3 = board.point([1.0, 4.0]);
    let pl2 = board.parallel(p1, p2, p3, { straightFirst: false, straightLast: false });


}
{
    const board = TXG.TSXGraph.initBoard('html52')
    board.print('Polar Line')

    // Create the polar line of a point with respect to a conic
    let p1 = board.point([-1, 2]);
    let p2 = board.point([1, 4]);
    let p3 = board.point([-1, -2]);
    let p4 = board.point([0, 0]);
    let p5 = board.point([4, -2]);
    let c1 = board.conic.fivePoints(p1, p2, p3, p4, p5);
    let p6 = board.point([-1, 1]);
    let l1 = board.polarLine(c1, p6);
}


{
    const board = TXG.TSXGraph.initBoard('html53')
    board.print('Pole Point')

    // Create the pole point of a line with respect to a conic
    let p1 = board.point([-1, 2]);
    let p2 = board.point([1, 4]);
    let p3 = board.point([-1, -2]);
    let p4 = board.point([0, 0]);
    let p5 = board.point([4, -2]);
    let c1 = board.conic.fivePoints(p1, p2, p3, p4, p5);
    let p6 = board.point([-1, 4]);
    let p7 = board.point([2, -2]);
    let l1 = board.line(p6, p7);
    let p8 = board.polePoint(c1, l1);
}

{

    const board = TXG.TSXGraph.initBoard('html54')
    board.print('Reflex and Non-Reflex Angle')

    // Create a non-reflex angle out of three free points
    let p1 = board.point([4.0, 0]),
        p2 = board.point([0.0, -0.5]),
        p3 = board.point([-0.5, 4.0])
    let a = board.reflexAngle(p1, p2, p3, { radius: 2 })



    // let a = board.reflexAngle(p1, p2, p3, { radius: 2 })


    board.text(3, 3, () => (a.Value().toFixed(2)))

    let p4 = board.point([0.5, 0])
    let b = board.nonReflexAngle(p1, p4, p3, { radius: 2 })
    board.text(4.5, 4.5, () => b.Value().toFixed(2))

}

{
    const JSX = TXG.TSXGraph.initBoard('html54', { axis: true })
    JSX.print('Derivative and Integral')
    JSX.print('d(x^2) is 2x')
    JSX.print

    let fxy = (x: number, y: number) => Math.pow(x, 2)
    let cu = JSX.functiongraph(fxy)
    let d = JSX.derivative(cu, { dash: 2 })
    let i1 = JSX.integral([0, 2], d)

    let z1 = JSX.functiongraph((t: number) => (Math.cos(t) * t) - 3);
    let z2 = JSX.integral([-2.0, 2.0], z1, { fillColor: 'pink' });

}

{
    const board = TXG.TSXGraph.initBoard('html55')
    board.print('Mirrorpoint')

    board.setBoundingBox(-10, 10, 10, -10)
    let ap1 = board.point([3.0, 3.0]);
    let ap2 = board.point([6.0, 1.0]);
    let mp1 = board.mirrorpoint(ap1, ap2);

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
    const JSX = TXG.TSXGraph.initBoard('html56')
    JSX.print('point')

    JSX.point([3, 2], { strokeColor: 'blue', strokeWidth: 5, strokeOpacity: .5 })

    let q = [3, 3]
    JSX.point(q, { showInfobox: false })


    let p1 = JSX.point([-1, 0])
    let p2 = JSX.point([1, 0])
    JSX.line(p1, p2)

    let c1 = JSX.circle(p1, p2)
    let c2 = JSX.circle(p2, p1)

    JSX.intersection(c1, c2, { color: 'red' })
    JSX.intersection(c2, c1, { color: 'blue' })

}

{
    const JSX = TXG.TSXGraph.initBoard('html57')
    JSX.print('Click for Scr and Usr coordinates')


    let getMouseCoords = function (e: Object, i: any = 0) {
        var cPos = (JSX.board as any).getCoordsTopLeftCorner(e, i),
            absPos = ((window as any).JXG as any).getPosition(e, i),
            dx = absPos[0] - cPos[0],
            dy = absPos[1] - cPos[1];

        let coords = new ((window as any).JXG as any).Coords(1, [dx, dy], (JSX.board as any));
        console.log('coords', coords)
        return coords;  // returns Coords object
    }
    let down = function (e: Object) {
        //    var canCreate = true, i, coords, el;
        let coords = getMouseCoords(e)
        JSX.print('scrCoords', coords.scrCoords)
        JSX.print('usrCoords', coords.usrCoords)

        // if (e[JXG.touchProperty]) {
        //     // index of the finger that is used to extract the coordinates
        //     i = 0;
        // }
        // coords = getMouseCoords(e, i);

        // for (el in board.objects) {
        //     if(JXG.isPoint(board.objects[el]) && board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
        //         canCreate = false;
        //         break;
        //     }
        // }

        // if (canCreate) {
        //     board.create('point', [coords.usrCoords[1], coords.usrCoords[2]]);
        // }
    }

    JSX.on('down', down);

}

{
    const JSX = TXG.TSXGraph.initBoard('html58')
    JSX.print('checking for whether points can be defined [x,y]')

    JSX.line([-1, 0], [1, 0])          // works, but I can drag the line
    JSX.circle([0, 0], [1, 0])         // works, but I can drag the circle
    JSX.ellipse([0, 2], [0, -2], 5)     // cannot drag the ellipse

    let a = JSX.arrow([-3, 0], [-3, -2])     // points are given names
    JSX.arrowparallel([-3, 0], [-3, -4], [-4, 0])




}


{
    let JSX = TXG.TSXGraph.initBoard('html60', {})
    JSX.print('grid')

    // let g = JSX.grid([2,3],[3,2],{drawZero:true})

    // // more fancy grid
    // let g = JSX.grid( {
    //     major: {
    //         face: 'plus',
    //         size: 10,
    //         strokeColor: '#080050',
    //         strokeOpacity: 1,
    //     },
    //     minor: {
    //         size: 3
    //     },
    //     drawZero: true,
    //     minorElements: 4,
    // });

    // extreme fancy grid

    let slide = JSX.slider([-5, 5], [0, 5], [.1, .1, 4])
    let grid = JSX.create('grid', [], {
        major: {
            face: 'regularPolygon',
            size: 10,
            strokeColor: 'blue',
            fillColor: 'orange',
            strokeOpacity: 1,
            // drawZero: true,
        },
        minor: {
            face: 'diamond',
            size: 3,
            strokeColor: 'green',
            fillColor: 'grey',
            drawZero: true,
        },
        minorElements: 2,
        includeBoundaries: false,
    });


}

{
    let JSX = TXG.TSXGraph.initBoard('html61', {})
    JSX.print('grid and axis')

    // grid with parent axes
    let axis1 = JSX.axis([-1, -2.5], [1, -2.5], {
        ticks: {
            strokeColor: 'green',
            strokeWidth: 2,
            minorTicks: 2,
            majorHeight: 10,
            drawZero: true
        }
    });
    let axis2 = JSX.axis([3, 0], [3, 2], {
        ticks: {
            strokeColor: 'red',
            strokeWidth: 2,
            minorTicks: 2,
            majorHeight: 10,
            drawZero: true
        }
    });
    let grid = JSX.grid(axis1, axis2, {
        major: {
            face: 'line',
            drawZero: true
        },
        minor: {
            face: 'point',
            size: 3
        },
        minorElements: 'auto',
        includeBoundaries: false,
    });
}


{
    // let board = JXG.TSXGraph.initBoard('html26')
    let JSX = TXG.TSXGraph.initBoard('html62', { grid: true, });
    JSX.print('snapToGrid')
    let p1 = JSX.point([-2, -2], { snapToGrid: true }),
        p2 = JSX.point([3, 3], { snapToGrid: true }),
        p3 = JSX.point([function () { return p1.X() }, function () { return p2.Y() }], { color: 'blue', snapToGrid: true }),
        p4 = JSX.point([function () { return p2.X() }, function () { return p1.Y() }], { color: 'blue', snapToGrid: true })

    JSX.polygon([p1, p3, p2, p4], { hasInnerPoints: true });
}


{

    // Set colors
    let JSX = TXG.TSXGraph.initBoard('html63', { boundingbox: [-10, 10, 10, -10], axis: true });
    let sl = JSX.slider([-9, 1], [0, 1], [-10, 1, 10], {
        snapWidth: 1,
        baseline: { strokeColor: 'blue' },
        highline: { strokeColor: 'red' },
        fillColor: 'red',
        label: { fontSize: 12, strokeColor: 'blue' },
        name: 'xyz', // Not shown, if suffixLabel is set
        suffixLabel: 'x = ',
        postLabel: ' meters'
    });

    let s2 = JSX.slider([-9, 3], [7, 3], [0, 10, 50], { stepWidth: 10 })

}
{
    // Create the radical axis line with respect to two circles
    let JSX = TXG.TSXGraph.initBoard('html64', { boundingbox: [-10, 10, 10, -10] });
    JSX.print('radicalAxis')
    let p1 = JSX.point([2, 3]);
    let p2 = JSX.point([1, 4]);
    let c1 = JSX.circle(p1, p2);
    let p3 = JSX.point([6, 5]);
    let p4 = JSX.point([8, 6]);
    let c2 = JSX.circle(p3, p4);
    let r1 = JSX.radicalAxis(c1, c2);
}

{
    let JSX = TXG.TSXGraph.initBoard('html65', { boundingbox: [-8, 8, 8, -8] });
    JSX.print('splines')

    let p: TXG.Point[] = []
    p[0] = JSX.point([-2, 2], { size: 4, face: 'o' })
    p[1] = JSX.point([0, -1], { size: 4, face: 'o' })
    p[2] = JSX.point([2, 0], { size: 4, face: 'o' })
    p[3] = JSX.point([4, 1], { size: 4, face: 'o' })

    let c = JSX.spline(p, { strokeWidth: 3 });



}

{

    let JSX = TXG.TSXGraph.initBoard('html66', { boundingbox: [-8, 8, 8, -8] });

    JSX.print('Three triangle centers lie on a line')

    // https://numbas.mathcentre.ac.uk/question/68491/create-a-jsxgraph-diagram-using-jessiecode-three-triangle-centres-lie-on-a-line/


    let p = [-4, -5]
    let A = JSX.point(p, );
    let B = JSX.point([4, -5], { name: 'B' });
    let C = JSX.point([1, 3], { name: 'C' });

    let circumcenter = JSX.circumcenter(A, B, C, { name: "circumcenter" })
    JSX.circumcircle(A, B, C, { strokeOpacity: 0.3 })

    let side_a = JSX.segment(B, C, { visible: false })
    let side_b = JSX.segment(A, C, { visible: false })
    let side_c = JSX.segment(B, A, { visible: false })

    JSX.polygon([A, B, C])

    let M_a = JSX.midpoint(B, C, { visible: false })
    let M_b = JSX.midpoint(A, C, { visible: false })
    let M_c = JSX.midpoint(B, A, { visible: false })

    let median_a = JSX.line(A, M_a, { dash: 4, color: "gray", strokeOpacity: 0.3 })
    let median_b = JSX.line(B, M_b, { dash: 4, color: "gray", strokeOpacity: 0.3 })
    let median_c = JSX.line(C, M_c, { dash: 4, color: "gray", strokeOpacity: 0.3 })

    let centroid = JSX.intersection(median_a, median_b, { name: "centroid" })

    let p_a = JSX.perpendicular(side_a, A, { dash: 1, color: "gray", strokeOpacity: 0.3 })
    let p_b = JSX.perpendicular(side_b, B, { dash: 1, color: "gray", strokeOpacity: 0.3 })
    let p_c = JSX.perpendicular(side_c, C, { dash: 1, color: "gray", strokeOpacity: 0.3 })

    let orthocenter = JSX.intersection(p_a, p_b, { name: "orthocenter" })

    let euler_line = JSX.line(orthocenter, centroid);

}











/////////////// last ///////////////////
{


    // this sets default for board (names, labels, everything)
    // without it, can only use brd2.text() for katex
    // useKatex can only be set ONCE.  unsetting it has no effect
    (window as any).JXG.Options.text.useKatex = true;

    const brd2 = TXG.TSXGraph.initBoard('htmlLAST')
    brd2.print('testing Katex')

    brd2.text(-4, 2, '\\pm\\sqrt{a^2 + b^2}', { useKatex: true })
    brd2.text(-4, 1, '\\pm\\sqrt{a^2 + b^2}', { useKatex: false });

    let pq = brd2.arrow([0, 0], [1, 1], {
        withLabel: true,
        name: '(\\vec{pq})',
        label: { position: 'top', parse: false },
        lastArrow: { type: 4, size: 8 },
    });



}
