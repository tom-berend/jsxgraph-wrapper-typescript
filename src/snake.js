import { TSXBoard } from "../lib/tsxgraph.js"; // note: we need the '.js'
let TSX = new TSXBoard('jxgbox');
let range = 6;
let robotPlay = true;
let gameOver = false;
TSX.setBoundingBox([-.5, range - .5, range - .5, -.5]);
TSX.addGrid();
TSX.Text([0, -.2], "In Progress.  Trying to build a robot that creates maximum snakes.");
TSX.Text([0, -.4], "But this version still gets locked into endless loops and finding corners.");
let xy2i = (xy) => xy[0] + range * xy[1];
let i2xy = (i) => [i % range, Math.floor(i / range)];
// for debugging
let matrixNumbers = [];
for (let i = 0; i < range * range; i++) {
    matrixNumbers[i] = TSX.Text(i2xy(i), '');
    TSX.Text(i2xy(i).map((n) => n - .1), i.toString()); // label the matrix
}
const right = [1, 0];
const left = [-1, 0];
const up = [0, 1];
const down = [0, -1];
let direction = right; // start the snake going right
TSX.on('keydown', (e) => {
    if ('code' in e) { //  only allow left/right if going up/down, etc
        if (e.code == 'ArrowRight' && direction[0] == 0)
            direction = right;
        if (e.code == 'ArrowLeft' && direction[0] == 0)
            direction = left;
        if (e.code == 'ArrowUp' && direction[1] == 0)
            direction = up;
        if (e.code == 'ArrowDown' && direction[1] == 0)
            direction = down;
        // ignore everything else.
    }
});
let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let newPoint = (i, color) => TSX.Point(i2xy(i), { strokeColor: color, strokeWidth: 12 });
let getNewApple = () => {
    let emptyArray = [...Array(range * range).keys()]; //=> [0, 1, 2, ...]
    let emptyCells = emptyArray.filter(a => !snakeArray.some(b => a === b)); // array of cells that are NOT in the snake
    if (emptyCells.length == 0) {
        gameOver = true;
        throw new Error('Perfect Game !!');
    }
    return emptyCells[random(0, emptyCells.length - 1)];
};
// check if hit an edge, return new i position or -1.  if range is 15, then valid values are 0-14
let canMoveTo = (i, direction) => {
    let xy = i2xy(i);
    if ((xy[0] + direction[0]) < 0 || (xy[0] + direction[0]) >= range)
        return -1;
    if ((xy[1] + direction[1]) < 0 || (xy[1] + direction[1]) >= range)
        return -1;
    return xy2i([xy[0] + direction[0], xy[1] + direction[1]]);
};
let snakeArray = [xy2i([2, 2])]; // always start off with one element at same place
let snakeDot = newPoint(snakeArray[0], 'red');
// let apple = getNewApple()
let apple = xy2i([3, 3]);
let appleDot = newPoint(apple, 'green');
let shockwaveSize = .2;
let shockwave = TSX.Circle(() => i2xy(snakeArray[0]), () => shockwaveSize, { strokeColor: 'black', strokeWidth: 5, opacity: () => 0 /*1 - shockwaveSize */ });
let snakeCurve = TSX.Curve([0], [0], { strokeColor: 'red', strokeWidth: 5 });
let snakeUpdate = () => {
    let x = [];
    let y = [];
    snakeArray.map((n) => {
        let xy = i2xy(n);
        x.push(xy[0]);
        y.push(xy[1]);
    });
    snakeCurve.dataX = x;
    snakeCurve.dataY = y;
    snakeCurve.updateCurve();
};
let move = (projected) => {
    if (projected == apple) { // we ate the apple
        snakeArray.unshift(apple); // add apple to front of snake
        snakeDot.setPositionDirectly(TSX.COORDS_BY_USER, i2xy(projected)); // move snakehead
        apple = getNewApple(); // and find a new target
        appleDot.setPositionDirectly(TSX.COORDS_BY_USER, i2xy(apple)); // move apple
    }
    else { // must moving the snake forward
        // console.log(projected)
        snakeArray.pop(); // move snake by moving tail to head
        snakeArray.unshift(projected);
        snakeDot.setPositionDirectly(TSX.COORDS_BY_USER, i2xy(projected));
    }
    snakeUpdate();
    TSX.update();
};
let planMove = () => {
    console.log('gameover', gameOver);
    if (gameOver) {
        if (shockwaveSize < 1) {
            shockwaveSize += .1;
            TSX.update();
        }
    }
    else {
        // is this a legal move?
        let projected = canMoveTo(snakeArray[0], direction); // -1 if off the board
        if (projected < 0) { // did we step off the board? (got a -1 from offsetCellIndex)
            gameOver = true;
            return;
        }
        if (snakeArray.slice(1, -1).includes(projected)) { // slice because last element will move away, so no hit
            gameOver = true;
            return;
        }
        move(projected); // this is a valid move, execute it
    }
};
let robot = () => {
    // heuristics:
    // 1) generate possible moves (left, right, straight)
    // 2) for each, calculate if tail is reachable
    // 3) for reachables pick shortest path to apple
    if (gameOver)
        return;
    console.log('%cRobot at ' + snakeArray[0].toString(), 'color:red;');
    // all the neighbours of the given cell, except snake and previous distances
    let neighbourList = (matrix, cell, distance) => {
        let valid = [];
        [left, right, up, down].map((direction) => {
            let test = canMoveTo(cell, direction); // gives on-board values
            if (test >= 0 && matrix[test] == 0) { // remove where snake and prev tests are marked
                valid.push(test);
                matrix[test] = distance;
            }
        });
        return valid;
    };
    // given a list of neighbours, find and mark THEIR neighbours
    let distanceLine = (matrix, neighbours, distance) => {
        let newNeighbours = [];
        neighbours.map((n) => {
            newNeighbours.push(...neighbourList(matrix, n, distance)); // valid neighbours of one of our neighbours
        });
        return newNeighbours;
    };
    // calculate the crawl distances from one point to another
    let distanceMatrix = (snake, start) => {
        let matrix = new Array(range * range).fill(0); // fill grid with invalid number
        snake.slice(0, -1).map((n) => matrix[n] = -1); // filled by snake (but exclude tail because it will move away)
        let distance = 1;
        matrix[start] = distance; // eg: apple cell is a '1'.  after this we look at neighbours
        let close = neighbourList(matrix, start, distance);
        while (close.length > 0) { // until no more possible unmarked neighbours
            distance += 1;
            close.map((n) => matrix[n] = distance);
            close = distanceLine(matrix, close, distance);
            // console.log(distance, close)
        }
        // if (matrix.some((i) => i == 0)) {
        //     console.log('zeros found')
        // for (let i = 0; i < range * range; i += 10) {
        //     console.log(matrix[i + 0], matrix[i + 1], matrix[i + 2], matrix[i + 3], matrix[i + 4], matrix[i + 5], matrix[i + 6], matrix[i + 7], matrix[i + 8], matrix[i + 9])
        // }
        // }
        matrix.map((n, i) => matrixNumbers[i].setLabel(n.toString()));
        return matrix;
    };
    // console.log('snake',snakeArray[0],'valid2tail',distanceToTail)
    let onBoardMoves = [left, right, up, down].map((arrowKey) => canMoveTo(snakeArray[0], arrowKey));
    let validMoves = onBoardMoves.filter((n) => n >= 0 && !snakeArray.some((i) => i == n));
    // console.log('snakehead:', snakeArray[0], 'valid moves:', validMoves, 'apple:', apple, 'snake:', snakeArray)
    if (validMoves.length == 0) {
        gameOver = true;
        throw new Error('no valid moves left');
    }
    // let distanceToApple = distanceMatrix(apple)  // calculate all possible distances to the apple
    let bestAppleMove = -1;
    let bestAppleDistance = 100000;
    let bestTailMove = -1;
    let bestTailDistance = 100000;
    let OKAppleMove = -1;
    let OKAppleDistance = 100000;
    // console.log('applMat:',distanceToApple)
    // console.log('onToTail:',onBoardMoves[0], validToTail[0], onBoardMoves[1], validToTail[1], onBoardMoves[2], validToTail[2], onBoardMoves[3], validToTail[3])
    // console.log('onToApple:', onBoardMoves[0], targetDirection[0], onBoardMoves[1], targetDirection[1], onBoardMoves[2], targetDirection[2], onBoardMoves[3], targetDirection[3])
    validMoves.map((i) => {
        // let's pretend that we have made the move and then check
        console.log('trying valid move ', i, ' on snake ', snakeArray);
        let testingSnake = [...snakeArray]; // clone
        // testingSnake.unshift(i)  // move head forward
        // testingSnake.pop()   // remove one element from tail
        // console.log('testingSnake', testingSnake)
        // now see if future snake can get to apple or sees tail
        // let nextOnBoardMoves = [left, right, up, down].map((arrowKey) => canMoveTo(testingSnake[0], arrowKey))
        // let nextValidMoves = nextOnBoardMoves.filter((n) => !testingSnake.some((i) => i == n))
        let distanceToApple = distanceMatrix(testingSnake, apple); // calculate all possible distances to the apple
        let distanceToTail = distanceMatrix(testingSnake, testingSnake[testingSnake.length - 1]); // all possible distances to the tail
        console.log('distanceToApple', distanceToApple, 'distanceToTail', distanceToTail);
        let snakeSeesTail = distanceToTail[i] > 0; // snake in new position can see its tail
        console.log('snakeSeesTail', 'head:', testingSnake[0], 'validMove:', i, 'distance:', distanceToTail[i]);
        let appleSeesTail = distanceToTail[apple] > 0; //  apple can see the tail in new position
        console.log('appleSeesTail', 'head:', testingSnake[0], 'validMove:', i, 'distance:', distanceToTail[i]);
        let snakeSeesApple = distanceToApple[i] >= 0; // allow zero so can eat apple
        console.log('snakeSeesApple', 'head:', testingSnake[0], 'validMove:', i, 'distance:', distanceToTail[i]);
        console.log('if move to :', i, 'snakeSeesTail', snakeSeesTail, 'snakeSeesApple', snakeSeesApple, 'appleSeesTail', appleSeesTail);
        // console.log(apple,i,targetDirection[i])
        // find the best move towards the apple
        if (snakeSeesApple && appleSeesTail) {
            if (distanceToApple[i] > 0 && distanceToApple[i] < bestAppleDistance) {
                // make sure snake will STILL see tail after move
                bestAppleMove = i;
                bestAppleDistance = distanceToApple[i];
            }
        }
        // find the best move to chase the tail
        if (snakeSeesTail) {
            if (distanceToTail[i] > 0 && distanceToTail[i] < bestTailDistance) {
                bestTailMove = i;
                bestTailDistance = distanceToTail[i];
            }
        }
        // find the best move to chase the tail
        if (snakeSeesApple) {
            if ( /*distanceToTail[i] > 0 && */distanceToTail[i] < OKAppleDistance) {
                OKAppleMove = i;
                OKAppleDistance = distanceToTail[i];
            }
        }
        console.log('bestAppleMove', bestAppleMove, bestAppleDistance, 'bestTailMove', bestTailMove, bestTailDistance, 'OKAppleMove', OKAppleMove, OKAppleDistance);
    });
    console.log('FINAL: bestAppleMove', bestAppleMove, bestAppleDistance, 'bestTailMove', bestTailMove, bestTailDistance, 'OKAppleMove', OKAppleMove, OKAppleDistance);
    if (bestAppleMove >= 0) {
        move(bestAppleMove);
    }
    else if (bestTailMove >= 0) {
        move(bestTailMove);
    }
    else if (OKAppleMove >= 0) {
        move(OKAppleMove);
    }
    else if (validMoves.length > 0) { // any valid move
        move(validMoves[random(0, validMoves.length - 1)]);
    }
    else {
        gameOver = true;
        throw new Error('No good moves left');
    }
    // let snakeSeesApple = distanceToApple[snakeArray[0]] > 0        // snake can see apple
};
// human play or robot play?
if (robotPlay) {
    setInterval(robot, 50); // move until you can't
    // robot()
    // robot()
    // robot()
}
else {
    setInterval(planMove, 300); // move until you can't
}
