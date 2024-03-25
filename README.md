# jsxgraph-wrapper-typescript

**A thin TypeScript wrapper over JSXGraph to support editing with VSCode.  It is intended for programmers who are new to JSXGraph.**

The wrapper provides a 'TypeScript' flavor to JSXGraph syntax, providing navigation, scaffolding, syntax checking, and discovery with VSCode.

This approach is different from merely providing descriptions with a d.ts file. The wrapper adds a thin layer on top of JSXGraph, typically 2-3 lines per call.


## Don't Want TypeScript and Webpack?

Instructions for getting started with TypeScript are below.

You can use the wrapper in plain JavaScript, and VSCode will still provide scaffolding (but not error checking).  There is a sample construction in [simple.js](simple.js) and [simple.html](simple.html) to load it.  Installing this repository downloads everything you need.



## Key Difference Wrapper vs vanilla JSXGraph

The vanilla JSXGraph interface offers a a single 'create()' function, with over 100 overloads.  Developing a construction involves frequent references to the [API Reference](https://jsxgraph.org/docs/index.html) and debugging with the browser console.

This wrapper provides a typica TypeScript interface, with each geometry element in a separate class for interactive discovery and scaffolding with VSCode.  The syntax remains familiar if you already know JSXGraph.  Here's an example.

```
    const JSX = JSXGraph.initBoard('jxgbox')
    let p = [-2, -2]
    let a = JSX.point(p, { name: 'A',strokeColor:'orange' })
    let side_a = JSX.segment(a, [2,-2], { visible: false })
```

The magic happens when using VSCode...

![](./vscode.png)



## Reasons NOT to Use this Wrapper

The wrapper enables about 98% of JSXGraph's capabilities for interactive constructions. Specialized methods and attributes not provided can be accessed with the wrapper 'legacy' constructor `JSX.create(string, array, object)`.  But if you are coding with 'inside baseball' then you should use native JSXGraph.

JSXGraph is both a graphics engine and a storehouse of numerical algorithms. This wrapper is focused on graphics. I've started to add some of the Math methods, but it is a work in progress.  Also still lots of cleaning in the GeometryElement attributes and methods.

JSXGraph is constantly evolving.  This wrapper was built around JSXGraph 1.8.0, and may have fallen behind.



## Getting Started with TypeScript and VSCode?

The first step is to switch to VSCode, which you can download from [here](https://code.visualstudio.com/).

Then, you will need to download and install Node and the NPM command line interface.  The easiest way is to use a [package manager](https://nodejs.org/en/download/package-manager).

At this point, I would reboot to make sure everything is running.  Test whether you have Node, NPM, and Git by running these commands at the command line.

```
npm -v
node -v
git --version
```

To clone this repository, you can download the zip, but it is easier to do it using Git, which you can install from [here](https://git-scm.com/download).

Open the VSCode [integrated terminal](https://code.visualstudio.com/docs/terminal/basics#:~:text=From%20the%20Command%20Palette%20).  On my machine that is **CTRL+ \`** (Control + backtick).


Navigate to the directory above where you would like to add this wrapper directory and run
```
git clone https://github.com/tom-berend/jsxgraph-wrapper-typescript.git
```

This created a folder `jsxgraph-wrapper-typescript`.  Open that folder with VSCode. Install the packages you need for the wrapper (like TypeScript and Webpack) with
```
npm i
```

Open the file **src/threeCenters.ts** to see the sample code.  Run it with
```
npm run watch
```
and open your browser to **localhost:9000** to see the results.  If you modify **threeCenters.ts** then your browser should update automatically.




## Vanilla JavaScript and VSCode?

The wrapper has a type declaration **d.ts** file that lets VSCode provide wrapper options and type hinting in vanilla .js files.  To try this out, edit the file **src/simple.js**.  To run it, point your localhost at
[](http://localhost/jsxgraph-wrapper-typescript/src/simple.html) or wherever on your machine.  There is no compile step.




Have fun!


![](test.png)



