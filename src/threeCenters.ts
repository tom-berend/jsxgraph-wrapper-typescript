import { TSX } from "./jsxgraph";

export function threeCenters() {

    const JSXGraph = new TSX.JSXGraph();

    const JSX = JSXGraph.initBoard('jxgbox');

    JSX.print('Three triangle centers lie on a line')
    // https://numbas.mathcentre.ac.uk/question/68491/create-a-jsxgraph-diagram-using-jessiecode-three-triangle-centres-lie-on-a-line/


    let p = [-2, -2]
    let A = JSX.point(p, { name: 'A' });
    let B = JSX.point([2, -2], { name: 'B' });
    let C = JSX.point([1, 2], { name: 'C' });

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