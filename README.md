# jsxgraph-wrapper-typescript

**A thin TypeScript wrapper over JSXGraph to maximize VSCode scaffolding.**

[JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/index.html) is amazing for creating geometry constructions, writing games, building dashboards, and teaching coding.  But building a JSXGraph construction is finicky.

[VSCode](https://code.visualstudio.com/) could provide scaffolding, type-checking,
syntax checking, and object discovery, but JSXGraph's syntax doesn't co-operate.  JSXGraph constructions use a
single 'create()' function, with over 100 overloads, requiring frequent references to the [API Reference](https://jsxgraph.org/docs/index.html) and debugging with the browser console.

This wrapper provides a more-typical [TypeScript](https://www.typescriptlang.org/) interface, optimized for scaffolding with VSCode.  The syntax is familiar if you already know JSXGraph, and delightful if you don't.


| **JSXGraph**    | **TSXGraph** | comment |
| --------- | ------- |--------|
| `board.create('point',[0,0])`  | `TSX.point([0,0])`   |  // looks similar because an immediate address is always [x,y]
| `board.create('segment' , [p1, p2])`     | `TSX.segment(p1, p2)` | // much closer to what you would expect
| `board.create('intersection', [cl,ln])` | `TSX.intersection(cl,ln))`    |  // VSCode shows order of parameters|
| `let rot = board.create('transform', [()=>slider.Value(), c], {type: 'rotate'})`| `let rot = TSX.rotate(()=>slider.Value(),c)` | // transform that rotates around c|


With the wrapper, VSCode offers the usual signatures, object keys, and completions.

![](vscode.png)

A wrapper approach is different from providing a d.ts file. The wrapper changes the programming interface by adding a thin layer on top of JSXGraph, typically 2-3 lines per call.


## Quick Start Workflow

This package includes a quick-start workflow.  It looks for source files in the `/src` directory.


```
npm i
npm run start
```
Install the package, start the workflow, and browse to `http://localhost:3000`.   Add or edit `.ts` files in `/src` and refresh your browser.


When you are ready to move your constructions, the `.js` files you have created are in the `dist\src` directory.  If you don't want to use this workflow, just copy `tsxgraph.ts` to your own workflow.

JSXGraph is constantly evolving.  This wrapper was built around JSXGraph 1.11 beta.


This package includes **Space Icons** by [Good Stuff No Nonsense](https://goodstuffnononsense.com/), licensed under CC BY 4.0.
~~~
TSX.image("icons/saturn.png",[0,0])    // Use VSCode's `CTRL+I` to list the icons
~~~


If you try the wrapper, I'd love to hear from you.

---

![](test.png)



