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

Happily, you can use the wrapper in plain HTML script tags.


![](test.png)



