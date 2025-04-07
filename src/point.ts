
import { TSX } from "../lib/tsxgraph.js"    // note: we need the '.js'


try {
    TSX.image('icons/earth.png', [0, 0], [2, 2])

    // modify point p1's position to drag the moon around)
    let p1 = TSX.point([3, 2], { opacity: .1 })  // set to opacity 0 for invisible

    TSX.image('icons/moon-full-moon.png', [() => p1.X(), () => p1.Y()])
    throw ('some custom error')

} catch (err) {
    TSX.print(err)      // this shows error in JSXGraph window
}