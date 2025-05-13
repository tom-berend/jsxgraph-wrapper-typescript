
import { TSXBoard } from "../lib/tsxgraph.js"    // note: we need the '.js'

    let TSX = new TSXBoard('jxgbox')

try {

    TSX.Image('icons/earth.png', [0, 0], [2, 2])

    // modify point p1's position to drag the moon around)
    let p1 = TSX.Point([3, 2], { opacity: .1 })  // set to opacity 0 for invisible

    TSX.Image('icons/moon-full-moon.png', [() => p1.X(), () => p1.Y()],[1,1])
    throw ('some custom error')

} catch (err:any) {
    TSX.Text([-4,4],err)      // this shows error in JSXGraph window
}