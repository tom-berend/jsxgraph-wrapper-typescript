import { TSXBoard } from "../lib/tsxgraph.js"    // note: we need the '.js'

// easier to call the orbit function from here than from JS.  TS programs tend to be longer and more complex.

orbit()



function orbit() {
    let TSX = new TSXBoard('jxgbox', { boundingBox: [-1, 5, 5, -1] })
    TSX.useKatex()    // going to use Katex for all labels


    let origin = TSX.Point([0, 0])

    // use ()=> to lock the axis points to the origin, even if the origin moved
    let xAxisPt = TSX.Point([() => origin.X(), () => origin.Y() + 4], { name: 'y', opacity: 0 })
    let yAxisPt = TSX.Point([() => origin.X() + 4, () => origin.Y()], { name: 'x', opacity: 0 })
    let xAxis = TSX.Segment(origin, xAxisPt, { opacity: .3, strokeColor: 'gray' })
    let yAxis = TSX.Segment(origin, yAxisPt, { opacity: .3, strokeColor: 'gray' })

    let arc = TSX.Arc(origin, yAxisPt, xAxisPt)
    let glider = TSX.Glider(arc, [3, 3], { strokeColor: 'blue', name: '' })  // point on the arc

    let radius = TSX.Segment(origin, glider, { lastArrow: true, touchLastPoint: true })
    let minorArc = TSX.MinorArc(origin, TSX.Midpoint(yAxis, { name: '', opacity: 0 }), TSX.Midpoint(radius, { name: '', opacity: 0 }), { firstArrow: true, lastArrow: true })

    let arcRad = TSX.Intersection(minorArc, radius, { opacity: 0, name: '\\vec{r}', label: { offset: [-30, 10], fontSize: 20, useKatex: true } })
    let axisRad = TSX.Intersection(minorArc, yAxis, { name: 'ω', opacity: 0, label: { offset: [0, 40], fontSize: 20, useKatex: true } })


    // we want a tangent line at the glider point.  Easy to use 'perpendicularSegment, but no control over length
    let gliderCircle = TSX.Circle(glider, 2, { opacity: 0 })  // radius of two
    let gliderPerp = TSX.PerpendicularSegment(radius, glider, { opacity: 0 })
    let perpEnd = TSX.Intersection(gliderPerp, gliderCircle, { opacity: 0 })
    let gliderEnd = TSX.Segment(glider, perpEnd,
        {
            withLabel: true,
            name: '\\vec{V}_T=r \\omega',
            label: { position: 'top', fontSize: 20,useKatex:true },
            strokeWidth: 3,
            lastArrow: { type: 2, size: 8 }
        }
    )


}
