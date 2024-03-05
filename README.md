# jsxgraph-wrapper-typescript
A thin TypeScript wrapper over JSXGraph, to support building complex software


The wrapper provides a 'TypeScript' flavor to JSXGraph syntax. It replaces the single constructor 'create()' with a typed class and methods for each geometry element.

This approach is different from providing descriptions with a d.ts file. The wrapper adds a thin layer on top of JSXGraph, typically 2-3 lines per call.


The design goals were
1) to maximize navigation, scaffolding, syntax checking, and discovery using VSCode
2) to create a platform for building complex software on JSXGraph
3) to make JSXGraph friendlier for novice programming students (and their teachers).


JSXGraph is both a graphics engine and a storehouse of numerical algorithms. This wrapper is focused on graphics. I've started to add some of the Math methods, but it is a work in progress.  Also still lots of cleaning in the GeometryElement attributes and methods.

For now, I have mostly followed the traditional JSXGraph structure, only moving a few methods into collections of Conics and Transforms.

## Familiar with JSXGraph but not TypeScript or VSCode?

This wrapper's first design goal is to maximize scaffolding with VSCode, which you can download from [here](https://code.visualstudio.com/).

Then, you will need to download and install Node and the NPM command line interface.  The easiest way is to use a [package manager](https://nodejs.org/en/download/package-manager).

To clone this repository, you can download the zip, but it is easier to do it using Git, which you can install from [here](https://git-scm.com/download).

At this point, I would reboot to make sure everything is running.  Verify that you can start VSCode.  Test whether you have Node, NPM, and Git by running these commands at the command line.

```
npm -v
node -v
git --version
```


Now navigate to the directory above where you would like to add this wrapper directory and run
```
git clone https://github.com/tom-berend/jsxgraph-wrapper-typescript.git
```

This created a directory `jsxgraph-wrapper-typescript`.  Open it with VSCode, and open the [integrated terminal](https://code.visualstudio.com/docs/terminal/basics#:~:text=From%20the%20Command%20Palette%20).  On my machine that is **CTRL+ \`** (Control + backtick).

In the integrated terminal, install the packages you need for the wrapper (like TypeScript and Webpack) with
```
npm i
```

Open the file **src/main.ts** to see the code.  Run it with
```
npm run watch
```
and open your browser to **localhost:9000** to see the results.  If you modify **main.ts** then your browser should update automatically.






Happily, you can use the wrapper in plain HTML script tags.
```

    <br><br>
    <p>This wrapper construction is just plain javascript in the html file - see src/index.html</p>
    <div id="jxgbox2" class="jxgbox" style="width:600px; height:600px;"></div>
    <script type="module" defer>
        import { TSX } from "./src/jsxgraph.js";
        const JSXGraph = new TSX.JSXGraph()
        {
            let b = JSXGraph.initBoard('jxgbox2');
            b.angle(b.point([0, 0]), b.point([0, 2]), b.point([2, 2.5]), { type: 'sector', radius: 2, useKatex: true })
            b.angle(b.point([-3, 0]), b.point([-3, 2]), b.point([-1, 2.5]), { type: 'square', radius: 2, useKatex: true })

        }
    </script>

```


![](test.png)



