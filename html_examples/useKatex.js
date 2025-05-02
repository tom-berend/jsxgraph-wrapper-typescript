import { TSXBoard } from "../dist/lib/tsxgraph.js";

useKatex()

export function useKatex() {        // export is only necessary if you reference this in another module

    let TSX = new TSXBoard('jxgbox',{});

    TSX.setBoundingBox([-1, 5, 5, -1]);

    // top left, a model of uniform circular motion
    let origin = TSX.Point([0, 0], { name: '' });

    // use ()=> to lock the axis points to the origin
    let xAxisPt = TSX.Point([() => origin.X(), () => origin.Y() + 4], { name: 'y', opacity: 0 });
    let yAxisPt = TSX.Point([() => origin.X() + 4, () => origin.Y()], { name: 'x', opacity: 0 });
    let xAxis = TSX.Segment(origin, xAxisPt, { opacity: .3, strokeColor: 'gray' });
    let yAxis = TSX.Segment(origin, yAxisPt, { opacity: .3, strokeColor: 'gray' });

    let arc = TSX.Arc(origin, yAxisPt, xAxisPt);
    let glider = TSX.Glider(arc, [3, 3], { strokeColor: 'blue', name: '' }); // point on the arc
    let radius = TSX.Segment(origin, glider, { lastArrow: true, touchLastPoint: true });
    let minorArc = TSX.MinorArc(origin, TSX.Midpoint(yAxis, { name: '', opacity: 0 }), TSX.Midpoint(radius, { name: '', opacity: 0 }), { firstArrow: true, lastArrow: true });

    // put the labels at positions controlled by the ends of the minor arc, so looks ok if you move glider
    let arcRad = TSX.Intersection(minorArc, radius, { opacity: 0, name: '\\vec{r}', label: { offset: [-30, 10], fontSize: 20, useKatex:true } });
    let axisRad = TSX.Intersection(minorArc, yAxis, { name: 'ω', opacity: 0, label: { offset: [0, 40], fontSize: 20 } });

    // we want a tangent line at the glider point.  Easy to use 'perpendicularSegment, but no control over length
    let gliderCircle = TSX.Circle(glider, 2, { opacity: 0 }); // radius of two
    let gliderPerp = TSX.PerpendicularSegment(radius, glider, { opacity: 0 });
    let perpEnd = TSX.Intersection(gliderPerp, gliderCircle, { opacity: 0 });

    TSX.Segment(glider, perpEnd, {
        withLabel: true,
        name: '\\vec{V}_T=\\vec{r} \\omega',
        label: { position: 'top', fontSize: 15,useKatex:true },
        strokeWidth: 3,
        lastArrow: { type: 2, size: 8 }
    });
}

//# sourceMappingURL=orbit.js.map