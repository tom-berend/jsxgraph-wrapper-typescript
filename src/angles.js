import { TSXBoard } from "../lib/tsxgraph.js";

let TSX = new TSXBoard('jxgbox');

TSX.Text([-4,4],"Source is a JS file, not a TS file. You don't have to use TS.")
TSX.Text([-4,3.5],"Watch out - if you edit the JS file in the dist directory of THIS workflow, it may get overwritten by the TSX compiler. Either don't compile, or edit in the src directory.")

TSX.Angle(TSX.Point([0, 0]), TSX.Point([0, 2]), TSX.Point([2, 2.5]), { type: 'sector', radius: 2 })
TSX.Angle(TSX.Point([-3, 0]), TSX.Point([-3, 2]), TSX.Point([-1, 2.5]), { type: 'square', radius: 2 })


