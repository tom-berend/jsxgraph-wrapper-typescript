import { TXG } from "../lib/tsxgraph.js"    // note: we need the '.js'

// easier to call the orbit function from here than from JS.  TS programs tend to be longer and more complex.

orbit()



function orbit() {
    TXG.TSXGraph.useKatex()    // going to use Katex for all labels

    let TSX = TXG.TSXGraph.initBoard('jxgbox');
    TSX.setBoundingBox(-1, 5, 5, -1)

    let origin = TSX.point([0, 0])

    // use ()=> to lock the axis points to the origin
    let xAxisPt = TSX.point([() => origin.X(), () => origin.Y() + 4], { name: 'y', opacity: 0 })
    let yAxisPt = TSX.point([() => origin.X() + 4, () => origin.Y()], { name: 'x', opacity: 0 })
    let xAxis = TSX.segment(origin, xAxisPt, { opacity: .3, strokeColor: 'gray' })
    let yAxis = TSX.segment(origin, yAxisPt, { opacity: .3, strokeColor: 'gray' })

    let arc = TSX.arc(origin, yAxisPt, xAxisPt)
    let glider = TSX.glider(arc, [3, 3], { strokeColor: 'blue', name: '' })  // point on the arc

    let radius = TSX.segment(origin, glider, { lastArrow: true, touchLastPoint: true })
    let minorArc = TSX.minorArc(origin, TSX.midpoint(yAxis, { name: '', opacity: 0 }), TSX.midpoint(radius, { name: '', opacity: 0 }), { firstArrow: true, lastArrow: true })

    // put the labels at intersections controlled by the ends of the minor arc, so looks ok if you move glider
    TSX.intersection(minorArc, radius, { opacity: 0, name: '\\vec{r}', label: { offset: [-30, 10], fontSize: 20 } })
    TSX.intersection(minorArc, yAxis, { name: 'ω', opacity: 0, label: { offset: [0, 40], fontSize: 20 } })


    // we want a tangent line at the glider point.  Easy to use 'perpendicularSegment, but no control over length
    let gliderCircle = TSX.circle(glider, 2, { opacity: 0 })  // radius of two
    let gliderPerp = TSX.perpendicularSegment(radius, glider, { opacity: 0 })
    let perpEnd = TSX.intersection(gliderPerp, gliderCircle, { opacity: 0 })

    TSX.segment(glider, perpEnd,
        {
            withLabel: true,
            name: '\\vec{V}_T=\\vec{r} \\omega',
            label: { position: 'top', fontSize: 15 },
            strokeWidth: 3,
            lastArrow: { type: 2, size: 8 }
        }
    )

}
