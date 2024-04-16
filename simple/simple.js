import { TXG } from "../src/tsxgraph.js";
{
    let b = TXG.TSXGraph.initBoard('jxgbox2');
    b.angle(b.point([0, 0]), b.point([0, 2]), b.point([2, 2.5]), { type: 'sector', radius: 2 })
    b.angle(b.point([-3, 0]), b.point([-3, 2]), b.point([-1, 2.5]), { type: 'square', radius: 2 })

}
