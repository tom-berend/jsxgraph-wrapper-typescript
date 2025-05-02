import { TSXBoard } from "../dist/lib/tsxgraph.js";

let TSX = new TSXBoard('jxgbox');

TSX.Angle(TSX.Point([0, 0]), TSX.Point([0, 2]), TSX.Point([2, 2.5]), { type: 'sector', radius: 2 })
TSX.Angle(TSX.Point([-3, 0]), TSX.Point([-3, 2]), TSX.Point([-1, 2.5]), { type: 'square', radius: 2 })


