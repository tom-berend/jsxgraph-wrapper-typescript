import { TSX } from "./jsxgraph";
const JSXGraph = new TSX.JSXGraph();

const board = JSXGraph.initBoard('jxgbox');

board.print('Three triangle centers lie on a line')
// https://numbas.mathcentre.ac.uk/question/68491/create-a-jsxgraph-diagram-using-jessiecode-three-triangle-centres-lie-on-a-line/



let p =[-2, -2]
let A = board.point(p, { name: 'A' });
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

