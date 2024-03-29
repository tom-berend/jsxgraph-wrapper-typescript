"use strict";
/////////////////////////////////////////////////////////////////////////////
//
//    Copyright 2024 Tom Berend   (MIT Licence)
//
//    Permission is hereby granted, free of charge, to any person obtaining a copy of this
//    software and associated documentation files (the “Software”), to deal in the Software
//    without restriction, including without limitation the rights to use, copy, modify, merge,
//    publish, distribute, sublicense, and/or sell copies of the Software, and to permit
//    persons to whom the Software is furnished to do so, subject to the following conditions:
//
//    The above copyright notice and this permission notice shall be included in all copies
//    or substantial portions of the Software.
//
//    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
//    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
//    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
//    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//    DEALINGS IN THE SOFTWARE.
//
/////////////////////////////////////////////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSX = void 0;
//   Generated on February 29, 2024, 8:17 pm 
var TSX;
(function (TSX) {
    // utility function for determining whether an object is a JSX object (or part of this wrapper)
    function isJSXAttribute(maybe) {
        return (typeof (maybe) == 'object' && !Array.isArray(maybe) && !('elValue' in maybe) && !('elType' in maybe));
    }
    /**
    *  Constant: user coordinates relative to the coordinates system defined by the bounding box.
    */
    var COORDS_BY_USER = 0x0001;
    /**
     *  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
     */
    var COORDS_BY_SCREEN = 0x0002;
    var Math = /** @class */ (function () {
        function Math() {
        }
        return Math;
    }());
    TSX.Math = Math;
    ///// some math classes by hand
    var IntervalArithmetic = /** @class */ (function () {
        function IntervalArithmetic() {
        }
        return IntervalArithmetic;
    }());
    TSX.IntervalArithmetic = IntervalArithmetic;
    var PolyMonomial = /** @class */ (function () {
        function PolyMonomial() {
        }
        return PolyMonomial;
    }());
    TSX.PolyMonomial = PolyMonomial;
    var PolyPolynomial = /** @class */ (function () {
        function PolyPolynomial() {
        }
        return PolyPolynomial;
    }());
    TSX.PolyPolynomial = PolyPolynomial;
    var Symbolic = /** @class */ (function () {
        function Symbolic() {
        }
        return Symbolic;
    }());
    TSX.Symbolic = Symbolic;
    /** Initialize a new board. */
    var JSXGraph = /** @class */ (function () {
        function JSXGraph() {
        }
        JSXGraph.prototype.initBoard = function (html, attributes) {
            var newBoard = new JSXBoard();
            newBoard.board = window.JXG.JSXGraph.initBoard(html, attributes);
            Math.board = newBoard.board; // make a copy for Math and its decendents
            return newBoard;
        };
        Object.defineProperty(JSXGraph.prototype, "version", {
            // /** allows setting default attributes by class or across the board */
            // static defaultAttributes(jClass:string, attrs:Object={}):Object{
            //     // if(jClass=='Point' || jClass=='Glider' || jClass=='Midpoint'){
            //         if(!('name' in attrs)){
            //             (attrs as any).name = ''
            //         }
            //         if(!('showInfobox' in attrs)){
            //             (attrs as any).showInfobox = false
            //         }
            //     // }
            //     return attrs
            //  }
            /** Version of underlying JSX library */
            get: function () {
                return window.JXG.version;
            },
            enumerable: false,
            configurable: true
        });
        /** Delete a board and all its contents. */
        JSXGraph.prototype.freeBoard = function (board) {
            window.JXG.JSXGraph.freeBoard(board);
        };
        // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
        JSXGraph.dereference = function (params) {
            var ret;
            if (Array.isArray(params)) {
                ret = params.map(function (x) { return (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x; });
            }
            else {
                ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params;
            }
            return ret;
        };
        return JSXGraph;
    }());
    TSX.JSXGraph = JSXGraph;
    var JSXBoard = /** @class */ (function () {
        function JSXBoard() {
            this.printLineNumber = 0; // added a print() function, this tracks the line#
            this.defaultAttrs = {}; // hold defaults from setDefaultAttributes()
            this.board = null;
            this.conic = {
                /** @protected */
                z_ignore: {},
                /** Line defined by solution to a*z + b*y +c*y== 0 */
                line: function (a, b, c, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('line', this.z_ignore.dereference([a, b, c]), this.z_ignore.defaultAttributes(attributes));
                    return new Line(newObject);
                },
                /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
                fivePoints: function (A, B, C, D, E, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Conic', this.z_ignore.dereference([A, B, C, D, E,]), this.z_ignore.defaultAttributes(attributes));
                    return new Conic(newObject);
                },
                /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
                sixNumbers: function (A, B, C, D, E, F, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Conic', this.z_ignore.dereference([A, B, C, D, E, F,]), this.z_ignore.defaultAttributes(attributes));
                    return new Conic(newObject);
                },
                /** An Ellipse from 3 points */
                threePoints: function (focalPoint1, focalPoint2, outerPoint, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('ellipse', this.z_ignore.dereference([focalPoint1, focalPoint2, outerPoint]), this.z_ignore.defaultAttributes(attributes));
                    return new Ellipse(newObject);
                },
                /** Three Points, plus start and end. */
                ellipseArc: function (focalPoint1, focalPoint2, outerPoint, startAngle, endAngle, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('ellipse', this.z_ignore.dereference([focalPoint1, focalPoint2, outerPoint, startAngle, endAngle]), this.z_ignore.defaultAttributes(attributes));
                    return new Conic(newObject);
                },
            };
            this.conic.z_ignore = this;
            this.transform = {
                /** @protected */
                z_ignore: {},
                /** Move a distance from a point */
                translate: function (x, y, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Transform', this.z_ignore.dereference([x, y,]), this.z_ignore.defaultAttributes({ type: 'translate' }));
                    return new Transform(newObject);
                },
                /** Increase distance from a point by a factor */
                scale: function (x, y, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Transform', this.z_ignore.dereference([x, y,]), this.z_ignore.defaultAttributes({ type: 'scale' }));
                    return new Transform(newObject);
                },
                /** Rotate by angle around a point */
                rotate: function (angle, point, attributes) {
                    if (point === void 0) { point = [0, 0]; }
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Transform', this.z_ignore.dereference([angle, point,]), this.z_ignore.defaultAttributes({ type: 'rotate' }));
                    return new Transform(newObject);
                },
                /** Reflect around a line */
                reflect: function (x, y, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Transform', this.z_ignore.dereference([x, y,]), this.z_ignore.defaultAttributes({ type: 'reflect' }));
                    return new Transform(newObject);
                },
                /** Move proportionally to distance */
                shear: function (x, y, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Transform', this.z_ignore.dereference([x, y,]), this.z_ignore.defaultAttributes({ type: 'shear' }));
                    return new Transform(newObject);
                },
                /** Transform using a MAT3 */
                generic: function (a, b, c, d, e, f, g, h, i, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Transform', this.z_ignore.dereference([a, b, c, d, e, f, g, h, i,]), this.z_ignore.defaultAttributes({ type: 'generic' }));
                    return new Transform(newObject);
                },
                /** A new Point from a Point and Transform */
                point: function (p, t, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Point', [JSXGraph.dereference(p), JSXGraph.dereference(t),], attributes);
                    return new Point(newObject);
                },
                /** A new Circle from a Circle and Transform */
                circle: function (c, t, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Circle', JSXGraph.dereference([c, t]), attributes);
                    return new Circle(newObject);
                },
                /** A new Curve from a Curve and Transform */
                curve: function (c, t, attributes) {
                    if (attributes === void 0) { attributes = {}; }
                    var newObject = this.z_ignore.board.create('Curve', JSXGraph.dereference([c, t]), attributes);
                    return new Curve(newObject);
                },
            };
            this.transform.z_ignore = this;
            this.MatrixMath = {
                /** Calculates the cross product of two vectors both of length three. */
                crossProduct: function (c1, c2) { return window.JXG.Math.crossProduct(c1, c2); },
                /** Generates a 4x4 matrix for 3D to 2D projections. */
                frustum: function (left, right, top, bottom, near, far) { return window.JXG.Math.frustum(left, right, top, bottom, near, far); },
                /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
                identity: function (m, n) { return window.JXG.Math.identity(m, n); },
                /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
                innerProduct: function (v1, v2) { return window.JXG.Math.innerProduct(v1, v2); },
                /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
                inverse: function (mat) { return window.JXG.Math.inverse(mat); },
                /** Computes the product of the two matrices mat1*mat2. */
                matMatMult: function (mat1, mat2) { return window.JXG.Math.matMatMult(mat1, mat2); },
                /** Initializes a matrix as an array of rows with the given value. */
                matrix: function (nRows, mCols, init) { return window.JXG.Math.matrix(nRows, mCols, init); },
                /** Multiplies a vector vec to a matrix mat: mat * vec. */
                matVecMult: function (mat, vec) { return window.JXG.Math.matVecMult(mat, vec); },
                /** Generates a 4x4 matrix for 3D to 2D projections. */
                projection: function (fov, ratio, near, far) { return window.JXG.Math.projection(fov, ratio, near, far); },
                /** Transposes a matrix given as a two dimensional array. */
                transpose: function (mat) { return window.JXG.Math.transpose(mat); },
                /** Initializes a vector of size n wih coefficients set to the given value. */
                vector: function (n, init) { return window.JXG.Math.vector(n, init); },
            };
            this.NumericsMath = {
                CardinalSpline: function (pointArray, tau) { return window.JXG.Math.Numerics.CardinalSpline(JSXGraph.dereference(pointArray), tau); },
            };
        }
        Object.defineProperty(JSXBoard.prototype, "defaultAxes", {
            get: function () {
                return this.board.defaultAxes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JSXBoard.prototype, "canvasWidth", {
            get: function () {
                return this.board.canvasWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JSXBoard.prototype, "canvasHeight", {
            get: function () {
                return this.board.canvasHeight;
            },
            enumerable: false,
            configurable: true
        });
        /** allows setting default attributes by class or across the board */
        JSXBoard.prototype.setDefaultAttributes = function (attrs) {
            this.defaultAttrs = attrs;
        };
        // add in any default attributes
        JSXBoard.prototype.defaultAttributes = function (attrs) {
            for (var property in this.defaultAttrs) {
                if (!attrs.hasOwnProperty(property)) { // if the user has not specified a value for this property
                    attrs[property] = this.defaultAttrs[property];
                }
            }
            return attrs;
        };
        /** get a 2D canvas context (warning: cannot mix SVG and canvas) */
        JSXBoard.prototype.getCanvasCTX = function () {
            var boardID = this.board.container;
            var div = document.getElementById(boardID);
            window.JXG.CanvasRenderer(div, [this.canvasWidth, this.canvasHeight]);
            return window.JXG.context;
        };
        JSXBoard.prototype.setBoundingBox = function (left, top, right, bottom) {
            return this.board.setBoundingBox([left, top, right, bottom]);
        };
        JSXBoard.prototype.getBoundingBox = function () {
            return this.board.getBoundingBox();
        };
        JSXBoard.prototype.addGrid = function () {
            return this.board.addGrid();
        };
        JSXBoard.prototype.removeGrids = function () {
            return this.board.removeGrids(); // Note: remove GRIDS, not GRID
        };
        JSXBoard.prototype.addAxis = function () {
            this.axis([0, 0], [1, 0]);
            this.axis([0, 0], [0, 1]);
            return this;
        };
        JSXBoard.prototype.setAttribute = function (attrs) {
            return this.board.setAttribute(attrs);
        };
        // removeObject(object:Board,testForChildren:Boolean=false)
        /** Legacy method to create elements. */
        JSXBoard.prototype.create = function (elType, params, attributes) {
            if (params === void 0) { params = []; }
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create(elType, params, attributes);
            var newElement = new GeometryElement(newObject);
            return newElement;
        };
        /** force board update */
        JSXBoard.prototype.update = function () {
            this.board.update();
        };
        JSXBoard.prototype.on = function (event, handler, context) {
            // JSXGraph doesn't share keyboard events, but I want them
            if (event == 'keypress' || event == 'keydown' || event == 'keyup') {
                window.document.addEventListener(event, handler);
            }
            else {
                this.board.on(event, handler, context);
            }
        };
        // I cannot figure out how to get the keybard to respond.  mouse works fine
        // addKeyboardEventHandlers():void{
        //     (this.board as any).addKeyboardEventHandlers()
        // }
        JSXBoard.prototype.print = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var bbox = this.board.getBoundingBox(); // get every time, in case setBoundingBox()
            var left = bbox[0]; // align x to left border
            var lineHeight = (bbox[1] - bbox[3]) / 20; //
            var top = bbox[1] - (2 * lineHeight) - (this.printLineNumber * lineHeight); // align y to top border
            var helper = function (stringText, item) {
                if (typeof item == null) {
                    stringText += 'null, ';
                }
                else if (typeof item == 'string') {
                    stringText += '\'' + item + '\'';
                }
                else if (typeof item == 'number') {
                    stringText += item.toFixed(1);
                }
                else if (typeof item == 'boolean') {
                    stringText += item ? 'true' : 'false';
                }
                else if (Array.isArray(item)) {
                    stringText += '[';
                    stringText = item.reduce(function (acc, curr) { return acc + helper('', curr); }, stringText);
                    stringText += ']';
                }
                else if (typeof item == 'object') {
                    stringText += '{';
                    if ('elType' in item) {
                        stringText += item.elType;
                    }
                    stringText += '}';
                }
                else {
                    stringText += 'UNKNOWN';
                }
                stringText += ', ';
                return stringText;
            };
            var stringText = '';
            args.forEach(function (argn) {
                stringText = helper(stringText, argn);
            });
            this.board.create('text', this.dereference([left, top, stringText]), { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' });
            this.printLineNumber += 1;
        };
        JSXBoard.prototype.suspendUpdate = function () {
            this.board.suspendUpdate();
        };
        JSXBoard.prototype.unsuspendUpdate = function () {
            this.board.unsuspendUpdate();
        };
        // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
        JSXBoard.prototype.dereference = function (params) {
            var ret;
            if (Array.isArray(params)) {
                ret = params.map(function (x) { return (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x; });
            }
            else {
                ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params;
            }
            return ret;
        };
        /** create a chart  Constructor for a chart.*/
        JSXBoard.prototype.chart = function (f, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Chart', this.dereference([f,]), this.defaultAttributes(attributes));
            return new Chart(newObject);
        };
        /**   This element is used to provide a constructor for a circle.*/
        JSXBoard.prototype.circle = function (centerPoint, remotePoint, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject; // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
            if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0]) && Array.isArray(remotePoint[1])) {
                newObject = this.board.create("circle", this.dereference([centerPoint, remotePoint[0], remotePoint[1]]), this.defaultAttributes(attributes));
            }
            else {
                newObject = this.board.create("circle", this.dereference([centerPoint, remotePoint]), this.defaultAttributes(attributes));
            }
            return new Circle(newObject);
        };
        /**   This element is used to provide a constructor for curve, which is just a wrapper for element Curve. A curve is a mapping from R to R^2. t mapsto (x(t),y(t)). The graph is drawn for t in the interval [a,b]. The following types of curves can be plotted: parametric curves: t mapsto (x(t),y(t)), where x() and y() are univariate functions. polar curves: curves commonly written with polar equations like spirals and cardioids. data plots: plot line segments through a given list of coordinates.*/
        JSXBoard.prototype.curve = function (xArray, yArray, left, right, attributes) {
            if (left === void 0) { left = -5; }
            if (right === void 0) { right = 5; }
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Curve', this.dereference([xArray, yArray, left, right,]), this.defaultAttributes(attributes));
            return new Curve(newObject);
        };
        /** Array of Points  This element combines a given set of JXG.Point elements to a group. The elements of the group and dependent elements can be translated, rotated and scaled by dragging one of the group elements.*/
        JSXBoard.prototype.group = function (pointArray, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Group', this.dereference([pointArray,].flat()), this.defaultAttributes(attributes));
            return new Group(newObject);
        };
        /**   Displays an image.*/
        JSXBoard.prototype.image = function (url, lowerLeft, widthHeight, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Image', this.dereference([url, lowerLeft, widthHeight,]), this.defaultAttributes(attributes));
            return new Image(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.implicitcurve = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 1) {
                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = this.board.create('implicitcurve', this.dereference([]), this.defaultAttributes(a)); // as unknown as Implicitcurve
                }
                else {
                    newObject = this.board.create('implicitcurve', this.dereference([a,]), this.defaultAttributes({})); // as Implicitcurve
                }
            }
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('implicitcurve', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Implicitcurve
                }
                else {
                    newObject = this.board.create('implicitcurve', this.dereference([a, b,]), this.defaultAttributes({})); // as Implicitcurve
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('implicitcurve', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Implicitcurve
                }
                else {
                    newObject = this.board.create('implicitcurve', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Implicitcurve
                }
            }
            return new Implicitcurve(newObject);
        };
        /**   This element is used to provide a constructor for a general line. A general line is given by two points. By setting additional properties a line can be used as an arrow and/or axis.  Look at .conic.line() for a line defined by the equation 'az +bx +cy = 0'*/
        JSXBoard.prototype.line = function (p1, p2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Line', this.dereference([p1, p2,]), this.defaultAttributes(attributes));
            return new Line(newObject);
        };
        /**   Create a point. If any parent elements
                           are functions or the attribute 'fixed' is true
                           then point will be constrained.
                           
        JSX.point([3,2], {strokeColor:'blue',strokeWidth:5, strokeOpacity:.5})
                           
        JSX.point([3,3]), {fixed:true, showInfobox:true}
                           
        JSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
                           
        also create points with Intersection, Midpoint, Transform.Point, Circumcenter, Glider, and others.
                           .*/
        JSXBoard.prototype.point = function (position, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Point', position, this.defaultAttributes(attributes));
            return new Point(newObject);
        };
        /** Array of Points  A polygon is an area enclosed by a set of border lines which are determined by a list of points or a list of coordinate arrays or a function returning a list of coordinate arrays. Each two consecutive points of the list define a line.*/
        JSXBoard.prototype.polygon = function (pointArray, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Polygon', this.dereference([pointArray,].flat()), this.defaultAttributes(attributes));
            return new Polygon(newObject);
        };
        /**   Construct and handle texts. The coordinates can either be abslute (i.e. respective to the coordinate system of the board) or be relative to the coordinates of an element given in Text#anchor. HTML, MathJaX, KaTeX and GEONExT syntax can be handled. There are two ways to display texts: using the text element of the renderer (canvas or svg). In most cases this is the suitable approach if speed matters. However, advanced rendering like MathJax, KaTeX or HTML/CSS are not possible. using HTML <div>. This is the most flexible approach. The drawback is that HTML can only be display ”above” the geometry elements. If HTML should be displayed in an inbetween layer, conder to use an element of type ForeignObject (available in svg renderer, only).*/
        JSXBoard.prototype.text = function (x, y, string, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Text', this.dereference([x, y, string,]), this.defaultAttributes(attributes));
            return new Text(newObject);
        };
        /**   A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc.*/
        JSXBoard.prototype.sector = function (P1, P2, P3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Sector', this.dereference([P1, P2, P3,]), this.defaultAttributes(attributes));
            return new Sector(newObject);
        };
        /**   Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2.*/
        JSXBoard.prototype.vectorfield = function (fxfy, horizontalMesh, verticalMesh, attributes) {
            if (horizontalMesh === void 0) { horizontalMesh = [-6, 25, 6]; }
            if (verticalMesh === void 0) { verticalMesh = [-6, 25, 6]; }
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Vectorfield', this.dereference([fxfy, horizontalMesh, verticalMesh,]), this.defaultAttributes(attributes));
            return new Vectorfield(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.angle = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('angle', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Angle
                }
                else {
                    newObject = this.board.create('angle', this.dereference([a, b,]), this.defaultAttributes({})); // as Angle
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('angle', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Angle
                }
                else {
                    newObject = this.board.create('angle', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Angle
                }
            }
            if (arguments.length == 4) {
                // if((typeof (arguments[3])) == 'object' && !Array.isArray(arguments[3]) && !('elValue' in arguments[3]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(d)) {
                    newObject = this.board.create('angle', this.dereference([a, b, c,]), this.defaultAttributes(d)); // as unknown as Angle
                }
                else {
                    newObject = this.board.create('angle', this.dereference([a, b, c, d,]), this.defaultAttributes({})); // as Angle
                }
            }
            if (arguments.length == 5) {
                // if((typeof (arguments[4])) == 'object' && !Array.isArray(arguments[4]) && !('elValue' in arguments[4]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(e)) {
                    newObject = this.board.create('angle', this.dereference([a, b, c, d,]), this.defaultAttributes(e)); // as unknown as Angle
                }
                else {
                    newObject = this.board.create('angle', this.dereference([a, b, c, d, e,]), this.defaultAttributes({})); // as Angle
                }
            }
            return new Angle(newObject);
        };
        /** Create an Arc with three points  An arc is a segment of the circumference of a circle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc.*/
        JSXBoard.prototype.arc = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Arc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Arc(newObject);
        };
        /** Arrow defined by two points (like a Segment) with arrow at P2  This element is used to provide a constructor for arrow, which is just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to false and Line#lastArrow set to true.*/
        JSXBoard.prototype.arrow = function (p1, p2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Arrow', this.dereference([p1, p2,]), this.defaultAttributes(attributes));
            return new Arrow(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.parallel = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('parallel', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Parallel
                }
                else {
                    newObject = this.board.create('parallel', this.dereference([a, b,]), this.defaultAttributes({})); // as Parallel
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('parallel', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Parallel
                }
                else {
                    newObject = this.board.create('parallel', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Parallel
                }
            }
            if (arguments.length == 4) {
                // if((typeof (arguments[3])) == 'object' && !Array.isArray(arguments[3]) && !('elValue' in arguments[3]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(d)) {
                    newObject = this.board.create('parallel', this.dereference([a, b, c,]), this.defaultAttributes(d)); // as unknown as Parallel
                }
                else {
                    newObject = this.board.create('parallel', this.dereference([a, b, c, d,]), this.defaultAttributes({})); // as Parallel
                }
            }
            if (arguments.length == 5) {
                // if((typeof (arguments[4])) == 'object' && !Array.isArray(arguments[4]) && !('elValue' in arguments[4]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(e)) {
                    newObject = this.board.create('parallel', this.dereference([a, b, c, d,]), this.defaultAttributes(e)); // as unknown as Parallel
                }
                else {
                    newObject = this.board.create('parallel', this.dereference([a, b, c, d, e,]), this.defaultAttributes({})); // as Parallel
                }
            }
            return new Parallel(newObject);
        };
        /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2.  An arrow parallel is a segment with an arrow attached which is parallel through a given segment, given by its defining two points, through a given point.*/
        JSXBoard.prototype.arrowparallel = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Arrowparallel', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Arrowparallel(newObject);
        };
        /** Create an Axis with two points (like a Line)  This element is used to provide a constructor for an axis. It's strictly spoken just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to true. Additionally Line#lastArrow is set to true and default Ticks will be created.*/
        JSXBoard.prototype.axis = function (p1, p2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Axis', this.dereference([p1, p2,]), this.defaultAttributes(attributes));
            return new Axis(newObject);
        };
        /** Bisect an Angle defined with three points  A bisector is a line which divides an angle into two equal angles. It is given by three points A, B, and C and divides the angle ABC into two equal sized parts.*/
        JSXBoard.prototype.bisector = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Bisector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Bisector(newObject);
        };
        /** Bisect a Line defined with two points  Bisector lines are similar to Bisector but take two lines as parent elements. The resulting element is a composition of two lines.*/
        JSXBoard.prototype.bisectorlines = function (l1, l2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Bisectorlines', this.dereference([l1, l2,]), this.defaultAttributes(attributes));
            return new Bisectorlines(newObject);
        };
        /** create a button  This element is used to provide a constructor for special texts containing a form button element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML button element can be accessed through the sub-object 'rendNodeButton', e.g. to add event listeners.*/
        JSXBoard.prototype.button = function (x, y, label, handler, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('button', [x, y, label], this.defaultAttributes(attributes));
            return new Button(newObject);
        };
        /**   This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n.*/
        JSXBoard.prototype.cardinalspline = function (data, funct, splineType, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Cardinalspline', this.dereference([data, funct, splineType,]), this.defaultAttributes(attributes));
            return new Curve(newObject);
        };
        /**   This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners.*/
        JSXBoard.prototype.checkbox = function (x, y, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Checkbox', this.dereference([x, y, label,]), this.defaultAttributes(attributes));
            return new Checkbox(newObject);
        };
        /** Creates a Point at the center of a circle defined by 3 points  Constructs the midpoint of a Circumcircle. Like the circumcircle the circumcenter is constructed by providing three points.*/
        JSXBoard.prototype.circumcenter = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Circumcenter', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Circumcenter(newObject);
        };
        /** Draw a circle defined by 3 points  A circumcircle is given by three points which are all lying on the circle.*/
        JSXBoard.prototype.circumcircle = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Circumcircle', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Circumcircle(newObject);
        };
        /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points  A circumcircle arc is an Arc defined by three points. All three points lie on the arc.*/
        JSXBoard.prototype.circumcircleArc = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('CircumcircleArc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new CircumcircleArc(newObject);
        };
        /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points  A circumcircle sector is different from a Sector mostly in the way the parent elements are interpreted. At first, the circum centre is determined from the three given points. Then the sector is drawn from p1 through p2 to p3.*/
        JSXBoard.prototype.circumcircleSector = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('CircumcircleSector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new CircumcircleSector(newObject);
        };
        /**   A comb to display domains of inequalities.*/
        JSXBoard.prototype.comb = function (p1, p2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Comb', this.dereference([p1, p2,]), this.defaultAttributes(attributes));
            return new Comb(newObject);
        };
        /**   Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve.*/
        JSXBoard.prototype.curveDifference = function (curve1, curve2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('CurveDifference', this.dereference([curve1, curve2,]), this.defaultAttributes(attributes));
            return new CurveDifference(newObject);
        };
        /**   Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve.*/
        JSXBoard.prototype.curveIntersection = function (curve1, curve2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('CurveIntersection', this.dereference([curve1, curve2,]), this.defaultAttributes(attributes));
            return new CurveIntersection(newObject);
        };
        /**   Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve.*/
        JSXBoard.prototype.curveUnion = function (curve1, curve2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('CurveUnion', this.dereference([curve1, curve2,]), this.defaultAttributes(attributes));
            return new CurveUnion(newObject);
        };
        JSXBoard.prototype.derivative = function (curve, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Derivative', this.dereference([curve,]), this.defaultAttributes(attributes));
            return new Derivative(newObject);
        };
        /** Two Points and Radius  This element is used to provide a constructor for an ellipse. An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.*/
        JSXBoard.prototype.ellipse = function (p1, pointO, radius, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Ellipse', this.dereference([p1, pointO, radius,]), this.defaultAttributes(attributes));
            return new Ellipse(newObject);
        };
        /**   This element is used to provide a constructor for functiongraph, which is just a wrapper for element Curve with JXG.Curve#X() set to x. The graph is drawn for x in the interval [a,b].*/
        JSXBoard.prototype.functiongraph = function (funct, leftBorder, rightBorder, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Functiongraph', this.dereference([funct, leftBorder, rightBorder,]), this.defaultAttributes(attributes));
            return new Functiongraph(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.glider = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 1) {
                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = this.board.create('glider', this.dereference([]), this.defaultAttributes(a)); // as unknown as Glider
                }
                else {
                    newObject = this.board.create('glider', this.dereference([a,]), this.defaultAttributes({})); // as Glider
                }
            }
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('glider', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Glider
                }
                else {
                    newObject = this.board.create('glider', this.dereference([a, b,]), this.defaultAttributes({})); // as Glider
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('glider', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Glider
                }
                else {
                    newObject = this.board.create('glider', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Glider
                }
            }
            return new Glider(newObject);
        };
        /**   Creates a grid to support the user with element placement.*/
        JSXBoard.prototype.grid = function (showGrid, attributes) {
            if (showGrid === void 0) { showGrid = true; }
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Grid', this.dereference([showGrid,]), this.defaultAttributes(attributes));
            return new Grid(newObject);
        };
        /**   Hatches can be used to mark congruent lines or curves.*/
        JSXBoard.prototype.hatch = function (line, numberHatches, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Hatch', this.dereference([line, numberHatches,]), this.defaultAttributes(attributes));
            return new Hatch(newObject);
        };
        /**   This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis.*/
        JSXBoard.prototype.hyperbola = function (point1, point2, point3, start, end, attributes) {
            if (start === void 0) { start = -3.14; }
            if (end === void 0) { end = 3.14; }
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Hyperbola', this.dereference([point1, point2, point3, start, end,]), this.defaultAttributes(attributes));
            return new Hyperbola(newObject);
        };
        /**   Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html*/
        JSXBoard.prototype.incenter = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Incenter', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Incenter(newObject);
        };
        /**   An incircle is given by three points.*/
        JSXBoard.prototype.incircle = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Incircle', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Incircle(newObject);
        };
        /**   Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y*/
        JSXBoard.prototype.inequality = function (boundaryLine, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Inequality', this.dereference([boundaryLine,]), this.defaultAttributes(attributes));
            return new Inequality(newObject);
        };
        /**   This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners.*/
        JSXBoard.prototype.input = function (x, y, prompt, initial, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Input', this.dereference([x, y, prompt, initial,]), this.defaultAttributes(attributes));
            return new Input(newObject);
        };
        /**   This element is used to visualize the integral of a given curve over a given interval.*/
        JSXBoard.prototype.integral = function (range, curve, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Integral', this.dereference([range, curve,]), this.defaultAttributes(attributes));
            return new Integral(newObject);
        };
        /**   An intersection point is a point which lives on two JSXGraph elements, i.e. it is one point of the set consisting of the intersection points of the two elements. The following element types can be (mutually) intersected: line, circle, curve, polygon, polygonal chain.*/
        JSXBoard.prototype.intersection = function (element1, element2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('intersection', this.dereference([element1, element2, 0]), this.defaultAttributes(attributes));
            return new Point(newObject);
        };
        /**   A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc.*/
        JSXBoard.prototype.majorArc = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('MajorArc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new MajorArc(newObject);
        };
        /**   A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        JSXBoard.prototype.majorSector = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('MajorSector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new MajorSector(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.midpoint = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 1) {
                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = this.board.create('midpoint', this.dereference([]), this.defaultAttributes(a)); // as unknown as Midpoint
                }
                else {
                    newObject = this.board.create('midpoint', this.dereference([a,]), this.defaultAttributes({})); // as Midpoint
                }
            }
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('midpoint', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Midpoint
                }
                else {
                    newObject = this.board.create('midpoint', this.dereference([a, b,]), this.defaultAttributes({})); // as Midpoint
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('midpoint', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Midpoint
                }
                else {
                    newObject = this.board.create('midpoint', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Midpoint
                }
            }
            return new Midpoint(newObject);
        };
        /**   A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc.*/
        JSXBoard.prototype.minorArc = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('MinorArc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new MinorArc(newObject);
        };
        /**   A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        JSXBoard.prototype.minorSector = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('MinorSector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new MinorSector(newObject);
        };
        /**   A mirror element of a point, line, circle, curve, polygon will be constructed.*/
        JSXBoard.prototype.mirrorelement = function (element, acrossPoint, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('mirrorelement', this.dereference([element, acrossPoint,]), this.defaultAttributes(attributes));
            return new mirrorelement(newObject);
        };
        /**   A mirror point will be constructed.*/
        JSXBoard.prototype.mirrorpoint = function (p1, p2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Mirrorpoint', this.dereference([p1, p2,]), this.defaultAttributes(attributes));
            return new Mirrorpoint(newObject);
        };
        /**   A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        JSXBoard.prototype.nonReflexAngle = function (point1, point2, point3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('NonReflexAngle', this.dereference([point1, point2, point3,]), this.defaultAttributes(attributes));
            return new NonReflexAngle(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.normal = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 1) {
                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = this.board.create('normal', this.dereference([]), this.defaultAttributes(a)); // as unknown as Normal
                }
                else {
                    newObject = this.board.create('normal', this.dereference([a,]), this.defaultAttributes({})); // as Normal
                }
            }
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('normal', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Normal
                }
                else {
                    newObject = this.board.create('normal', this.dereference([a, b,]), this.defaultAttributes({})); // as Normal
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('normal', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Normal
                }
                else {
                    newObject = this.board.create('normal', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Normal
                }
            }
            return new Normal(newObject);
        };
        /**   This is used to construct a point that is the orthogonal projection of a point to a line.*/
        JSXBoard.prototype.orthogonalprojection = function (point, line, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Orthogonalprojection', this.dereference([point, line,]), this.defaultAttributes(attributes));
            return new Orthogonalprojection(newObject);
        };
        /**   This element is used to provide a constructor for the ”other” intersection point.*/
        JSXBoard.prototype.otherIntersection = function (element1, element2, firstIntersection, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('otherintersection', this.dereference([element1, element2, firstIntersection]), attributes);
            return new Point(newObject);
        };
        /**   This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix).*/
        JSXBoard.prototype.parabola = function (focalPoint, line, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Parabola', this.dereference([focalPoint, line,]), this.defaultAttributes(attributes));
            return new Parabola(newObject);
        };
        /**   This element is used to provide a constructor for a segment. It's strictly spoken just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to false. If there is a third variable then the segment has a fixed length (which may be a function, too).*/
        JSXBoard.prototype.segment = function (P1, P2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Segment', this.dereference([P1, P2,]), this.defaultAttributes(attributes));
            return new Segment(newObject);
        };
        /**   */
        JSXBoard.prototype.parallelogram = function (p1, p2, p3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Parallelogram', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes));
            return new Parallelogram(newObject);
        };
        /**   This element is used to provide a constructor for a perpendicular.*/
        JSXBoard.prototype.perpendicular = function (line, point, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Perpendicular', this.dereference([line, point,]), this.defaultAttributes(attributes));
            return new Perpendicular(newObject);
        };
        /**   This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle.*/
        JSXBoard.prototype.polarLine = function (conic, point, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('PolarLine', this.dereference([conic, point,]), this.defaultAttributes(attributes));
            return new PolarLine(newObject);
        };
        /**   This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle.*/
        JSXBoard.prototype.polePoint = function (conic, line, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('PolePoint', this.dereference([conic, line,]), this.defaultAttributes(attributes));
            return new PolePoint(newObject);
        };
        /**   A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        JSXBoard.prototype.reflexAngle = function (point1, point2, point3, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('ReflexAngle', this.dereference([point1, point2, point3,]), this.defaultAttributes(attributes));
            return new ReflexAngle(newObject);
        };
        /**   Constructs a regular polygon. It needs two points which define the base line and the number of vertices.*/
        JSXBoard.prototype.regularPolygon = function (P1, P2, nVertices, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('RegularPolygon', this.dereference([P1, P2, nVertices,]), this.defaultAttributes(attributes));
            return new RegularPolygon(newObject);
        };
        /**   A slider can be used to choose values from a given range of numbers.*/
        JSXBoard.prototype.slider = function (StartPoint, EndPoint, minimum_initial_maximum, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Slider', this.dereference([StartPoint, EndPoint, minimum_initial_maximum,]), this.defaultAttributes(attributes));
            return new Slider(newObject);
        };
        // implementation of signature,  hidden from user
        JSXBoard.prototype.slopetriangle = function (a, b, c, d, e, f, g, h, i) {
            var newObject = {}; // just so it is initialized
            if (arguments.length == 1) {
                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = this.board.create('slopetriangle', this.dereference([]), this.defaultAttributes(a)); // as unknown as Slopetriangle
                }
                else {
                    newObject = this.board.create('slopetriangle', this.dereference([a,]), this.defaultAttributes({})); // as Slopetriangle
                }
            }
            if (arguments.length == 2) {
                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = this.board.create('slopetriangle', this.dereference([a,]), this.defaultAttributes(b)); // as unknown as Slopetriangle
                }
                else {
                    newObject = this.board.create('slopetriangle', this.dereference([a, b,]), this.defaultAttributes({})); // as Slopetriangle
                }
            }
            if (arguments.length == 3) {
                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = this.board.create('slopetriangle', this.dereference([a, b,]), this.defaultAttributes(c)); // as unknown as Slopetriangle
                }
                else {
                    newObject = this.board.create('slopetriangle', this.dereference([a, b, c,]), this.defaultAttributes({})); // as Slopetriangle
                }
            }
            return new Slopetriangle(newObject);
        };
        /**   With the element tangent the slope of a line, circle, or curve in a certain point can be visualized. A tangent is always constructed by a glider on a line, circle, or curve and describes the tangent in the glider point on that line, circle, or curve.*/
        JSXBoard.prototype.tangent = function (glider, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Tangent', this.dereference([glider,]), this.defaultAttributes(attributes));
            return new Tangent(newObject);
        };
        /**   A tape measure can be used to measure distances between points.*/
        JSXBoard.prototype.tapemeasure = function (P1, P2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Tapemeasure', this.dereference([P1, P2,]), this.defaultAttributes(attributes));
            return new Tapemeasure(newObject);
        };
        /**   This element is used to provide a constructor for trace curve (simple locus curve), which is realized as a special curve.*/
        JSXBoard.prototype.tracecurve = function (glider, point, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var newObject = this.board.create('Tracecurve', this.dereference([glider, point,]), this.defaultAttributes(attributes));
            return new Tracecurve(newObject);
        };
        /** Here, lower is an array of the form [x, y] and dim is an array of the form [w, h]. The arrays [x, y] and [w, h] define the 2D frame into which the 3D cube is (roughly) projected. If the view azimuth=0 and elevation=0, the 3D view will cover a rectangle with lower left corner [x,y] and side lengths [w, h] of the board. The 'cube' is of the form [[x1, x2], [y1, y2], [z1, z2]] which determines the coordinate ranges of the 3D cube.   This element creates a 3D view.*/
        JSXBoard.prototype.view3D = function (x, y, w, h, xBounds, yBounds, zBounds, attributes) {
            if (x === void 0) { x = -13; }
            if (y === void 0) { y = -10; }
            if (w === void 0) { w = 20; }
            if (h === void 0) { h = 20; }
            if (xBounds === void 0) { xBounds = [-5, 5]; }
            if (yBounds === void 0) { yBounds = [-5, 5]; }
            if (zBounds === void 0) { zBounds = [-5, 5]; }
            if (attributes === void 0) { attributes = {
                // Main axes
                axesPosition: 'center',
                //xAxis: { strokeColor: 'blue', strokeWidth: 3 },
                // Planes
                xPlaneRear: { fillColor: 'yellow', mesh3d: { visible: false } },
                // yPlaneFront: { visible: true, fillColor: 'blue' },
                // Axes on planes
                xPlaneRearYAxis: { strokeColor: 'red' },
                xPlaneRearZAxis: { strokeColor: 'red' },
                yPlaneFrontXAxis: { strokeColor: 'blue' },
                yPlaneFrontZAxis: { strokeColor: 'blue' },
                zPlaneFrontXAxis: { visible: false },
                zPlaneFrontYAxis: { visible: false }
            }; }
            var newObject = this.board.create('view3D', [[x, y], [w, h], [xBounds, yBounds, zBounds]], attributes);
            return new View3D(newObject);
        };
        return JSXBoard;
    }());
    TSX.JSXBoard = JSXBoard;
    var GeometryElement = /** @class */ (function () {
        function GeometryElement(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        Object.defineProperty(GeometryElement.prototype, "x", {
            /**  */
            get: function () {
                return this.elValue.x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement.prototype, "y", {
            /**  */
            get: function () {
                return this.elValue.y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement.prototype, "elType", {
            /**  */
            get: function () {
                return this.elValue.elType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement.prototype, "name", {
            /**  */
            get: function () {
                return this.elValue.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement.prototype, "isDraggable", {
            /**  */
            get: function () {
                return this.elValue.isDraggable;
            },
            set: function (param) {
                this.elValue.isDraggable = param;
            },
            enumerable: false,
            configurable: true
        });
        /** Add an element as a child to the current element. */
        GeometryElement.prototype.addChild = function () {
            return this.elValue.addChild();
        };
        /** Alias of JXG.EventEmitter.on. */
        GeometryElement.prototype.addEvent = function () {
            return this.elValue.addEvent();
        };
        /** Adds ids of elements to the array this.parents. */
        GeometryElement.prototype.addParents = function () {
            return this.elValue.addParents();
        };
        /** Rotate texts or images by a given degree. */
        GeometryElement.prototype.addRotation = function () {
            return this.elValue.addRotation();
        };
        /** Adds ticks to this line or curve. */
        GeometryElement.prototype.addTicks = function () {
            return this.elValue.addTicks();
        };
        /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
        GeometryElement.prototype.animate = function () {
            return this.elValue.animate();
        };
        /** Dimensions of the smallest rectangle enclosing the element. */
        GeometryElement.prototype.bounds = function () {
            return this.elValue.bounds();
        };
        /** Removes all objects generated by the trace function. */
        GeometryElement.prototype.clearTrace = function () {
            return this.elValue.clearTrace();
        };
        /** Copy the element to background. */
        GeometryElement.prototype.cloneToBackground = function () {
            return this.elValue.cloneToBackground();
        };
        /** Creates a label element for this geometry element. */
        GeometryElement.prototype.createLabel = function () {
            return this.elValue.createLabel();
        };
        /** Format a number according to the locale set in the attribute ”intl”. */
        GeometryElement.prototype.formatNumberLocale = function () {
            return this.elValue.formatNumberLocale();
        };
        /** Array of strings containing the polynomials defining the element. */
        GeometryElement.prototype.generatePolynomial = function () {
            return this.elValue.generatePolynomial();
        };
        /** Get the value of the property key. */
        GeometryElement.prototype.getAttribute = function () {
            return this.elValue.getAttribute();
        };
        /** Retrieve a copy of the current visProp. */
        GeometryElement.prototype.getAttributes = function () {
            return this.elValue.getAttributes();
        };
        /** Returns the elements name. */
        GeometryElement.prototype.getName = function () {
            return this.elValue.getName();
        };
        /** List of the element ids resp. */
        GeometryElement.prototype.getParents = function () {
            return this.elValue.getParents();
        };
        /** Deprecated alias for JXG.GeometryElement#getAttribute. */
        GeometryElement.prototype.getProperty = function () {
            return this.elValue.getProperty();
        };
        /** The type of the element as used in JXG.Board#create. */
        GeometryElement.prototype.getType = function () {
            return this.elValue.getType();
        };
        /** Move an element to its nearest grid point. */
        GeometryElement.prototype.handleSnapToGrid = function () {
            return this.elValue.handleSnapToGrid();
        };
        /** Checks whether (x,y) is near the element. */
        GeometryElement.prototype.hasPoint = function (x, y) {
            return this.elValue.hasPoint(x, y);
        };
        /** Hide the element. */
        GeometryElement.prototype.hide = function () {
            return this.elValue.hide();
        };
        /** Hide the element. */
        GeometryElement.prototype.hideElement = function () {
            return this.elValue.hideElement();
        };
        /**  */
        GeometryElement.prototype.labelColor = function () {
            return this.elValue.labelColor();
        };
        /** Uses the ”normal” properties of the element. */
        GeometryElement.prototype.noHighlight = function () {
            return this.elValue.noHighlight();
        };
        /** Removes the element from the construction. */
        GeometryElement.prototype.remove = function () {
            return this.elValue.remove();
        };
        /** Removes all ticks from a line or curve. */
        GeometryElement.prototype.removeAllTicks = function () {
            return this.elValue.removeAllTicks();
        };
        /** Remove an element as a child from the current element. */
        GeometryElement.prototype.removeChild = function () {
            return this.elValue.removeChild();
        };
        /** Alias of JXG.EventEmitter.off. */
        GeometryElement.prototype.removeEvent = function () {
            return this.elValue.removeEvent();
        };
        /** Removes ticks identified by parameter named tick from this line or curve. */
        GeometryElement.prototype.removeTicks = function () {
            return this.elValue.removeTicks();
        };
        /** Determines whether the element has arrows at start or end of the arc. */
        GeometryElement.prototype.setArrow = function () {
            return this.elValue.setArrow();
        };
        /** Sets an arbitrary number of attributes. */
        GeometryElement.prototype.setAttribute = function (attrs) {
            return this.elValue.setAttribute(attrs);
        };
        /** Sets a label and its text If label doesn't exist, it creates one */
        GeometryElement.prototype.setLabel = function () {
            return this.elValue.setLabel();
        };
        /** Updates the element's label text, strips all html. */
        GeometryElement.prototype.setLabelText = function () {
            return this.elValue.setLabelText();
        };
        /** Updates the element's label text and the element's attribute ”name”, strips all html. */
        GeometryElement.prototype.setName = function () {
            return this.elValue.setName();
        };
        /** Sets ids of elements to the array this.parents. */
        GeometryElement.prototype.setParents = function () {
            return this.elValue.setParents();
        };
        /** Translates the object by (x, y). */
        GeometryElement.prototype.setPosition = function (transform) {
            return this.elValue.setPosition(COORDS_BY_USER, transform);
        };
        /** Moves an element by the difference of two coordinates. */
        GeometryElement.prototype.setPositionDirectly = function (x, y) {
            return this.elValue.setPositionDirectly(COORDS_BY_USER, [x, y]);
        };
        /** Deprecated alias for JXG.GeometryElement#setAttribute. */
        GeometryElement.prototype.setProperty = function () {
            return this.elValue.setProperty();
        };
        /** Make the element visible. */
        GeometryElement.prototype.show = function () {
            return this.elValue.show();
        };
        /** Make the element visible. */
        GeometryElement.prototype.showElement = function () {
            return this.elValue.showElement();
        };
        /** Snaps the element to points. */
        GeometryElement.prototype.snapToPoints = function () {
            return this.elValue.snapToPoints();
        };
        /** Checks if locale is enabled in the attribute. */
        GeometryElement.prototype.useLocale = function () {
            return this.elValue.useLocale();
        };
        return GeometryElement;
    }());
    TSX.GeometryElement = GeometryElement;
    var GeometryElement3D = /** @class */ (function () {
        function GeometryElement3D(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        Object.defineProperty(GeometryElement3D.prototype, "element2D", {
            /**  */
            get: function () {
                return this.elValue.element2D;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement3D.prototype, "is3D", {
            /**  */
            get: function () {
                return this.elValue.is3D;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement3D.prototype, "view", {
            /**  */
            get: function () {
                return this.elValue.view;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement3D.prototype, "strokeColor", {
            /**  */
            get: function () {
                return this.elValue.strokeColor;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement3D.prototype, "strokeWidth", {
            /**  */
            get: function () {
                return this.elValue.strokeWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement3D.prototype, "fillColor", {
            /**  */
            get: function () {
                return this.elValue.fillColor;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GeometryElement3D.prototype, "visible", {
            /**  */
            get: function () {
                return this.elValue.visible;
            },
            enumerable: false,
            configurable: true
        });
        return GeometryElement3D;
    }());
    TSX.GeometryElement3D = GeometryElement3D;
    var Board = /** @class */ (function () {
        function Board(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        return Board;
    }());
    TSX.Board = Board;
    var Infobox = /** @class */ (function () {
        function Infobox(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        return Infobox;
    }());
    TSX.Infobox = Infobox;
    var CA = /** @class */ (function () {
        function CA(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
        CA.prototype.expandDerivatives = function () {
            return this.elValue.expandDerivatives();
        };
        /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
        CA.prototype.setMath = function () {
            return this.elValue.setMath();
        };
        return CA;
    }());
    TSX.CA = CA;
    var Chart = /** @class */ (function (_super) {
        __extends(Chart, _super);
        function Chart(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Chart.prototype, "elements", {
            /**  */
            get: function () {
                return this.elValue.elements;
            },
            enumerable: false,
            configurable: true
        });
        /** Create bar chart defined by two data arrays. */
        Chart.prototype.drawBar = function () {
            return this.elValue.drawBar();
        };
        /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
        Chart.prototype.drawFit = function () {
            return this.elValue.drawFit();
        };
        /** Create line chart defined by two data arrays. */
        Chart.prototype.drawLine = function () {
            return this.elValue.drawLine();
        };
        /** Create pie chart. */
        Chart.prototype.drawPie = function () {
            return this.elValue.drawPie();
        };
        /** Create chart consisting of JSXGraph points. */
        Chart.prototype.drawPoints = function () {
            return this.elValue.drawPoints();
        };
        /** Create radar chart. */
        Chart.prototype.drawRadar = function () {
            return this.elValue.drawRadar();
        };
        /** Create line chart that consists of a natural spline curve defined by two data arrays. */
        Chart.prototype.drawSpline = function () {
            return this.elValue.drawSpline();
        };
        /** Template for dynamic charts update. */
        Chart.prototype.updateDataArray = function () {
            return this.elValue.updateDataArray();
        };
        return Chart;
    }(GeometryElement));
    TSX.Chart = Chart;
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Circle area */
        Circle.prototype.Area = function () {
            return this.elValue.Area();
        };
        /** Perimeter (circumference) of circle. */
        Circle.prototype.Perimeter = function () {
            return this.elValue.Perimeter();
        };
        /** Calculates the radius of the circle. */
        Circle.prototype.Radius = function () {
            return this.elValue.Radius();
        };
        /** Treats the circle as parametric curve and calculates its X coordinate. */
        Circle.prototype.X = function () {
            return this.elValue.X();
        };
        /** Treats the circle as parametric curve and calculates its Y coordinate. */
        Circle.prototype.Y = function () {
            return this.elValue.Y();
        };
        /** Treat the circle as parametric curve and calculates its Z coordinate. */
        Circle.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Circle;
    }(GeometryElement));
    TSX.Circle = Circle;
    var Complex = /** @class */ (function () {
        function Complex(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        Object.defineProperty(Complex.prototype, "absval", {
            /**  */
            get: function () {
                return this.elValue.absval;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Complex.prototype, "angle", {
            /**  */
            get: function () {
                return this.elValue.angle;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Complex.prototype, "imaginary", {
            /**  */
            get: function () {
                return this.elValue.imaginary;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Complex.prototype, "isComplex", {
            /**  */
            get: function () {
                return this.elValue.isComplex;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Complex.prototype, "real", {
            /**  */
            get: function () {
                return this.elValue.real;
            },
            enumerable: false,
            configurable: true
        });
        /** Add another complex number to this complex number. */
        Complex.prototype.add = function () {
            return this.elValue.add();
        };
        /** Conjugate a complex number in place. */
        Complex.prototype.conj = function () {
            return this.elValue.conj();
        };
        /** Divide this complex number by the given complex number. */
        Complex.prototype.div = function () {
            return this.elValue.div();
        };
        /** Multiply another complex number to this complex number. */
        Complex.prototype.mult = function () {
            return this.elValue.mult();
        };
        /** Subtract another complex number from this complex number. */
        Complex.prototype.sub = function () {
            return this.elValue.sub();
        };
        /** Converts a complex number into a string. */
        Complex.prototype.toString = function () {
            return this.elValue.toString();
        };
        return Complex;
    }());
    TSX.Complex = Complex;
    var Composition = /** @class */ (function () {
        function Composition(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        /** Adds an element to the composition container. */
        Composition.prototype.add = function () {
            return this.elValue.add();
        };
        /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
        Composition.prototype.fullUpdate = function () {
            return this.elValue.fullUpdate();
        };
        /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
        Composition.prototype.highlight = function () {
            return this.elValue.highlight();
        };
        /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
        Composition.prototype.noHighlight = function () {
            return this.elValue.noHighlight();
        };
        /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
        Composition.prototype.prepareUpdate = function () {
            return this.elValue.prepareUpdate();
        };
        /** Remove an element from the composition container. */
        Composition.prototype.remove = function () {
            return this.elValue.remove();
        };
        /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
        Composition.prototype.setParents = function () {
            return this.elValue.setParents();
        };
        /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
        Composition.prototype.updateRenderer = function () {
            return this.elValue.updateRenderer();
        };
        return Composition;
    }());
    TSX.Composition = Composition;
    var Coords = /** @class */ (function () {
        function Coords(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        Object.defineProperty(Coords.prototype, "board", {
            /**  */
            get: function () {
                return this.elValue.board;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Coords.prototype, "emitter", {
            /**  */
            get: function () {
                return this.elValue.emitter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Coords.prototype, "scrCoords", {
            /**  */
            get: function () {
                return this.elValue.scrCoords;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Coords.prototype, "usrCoords", {
            /**  */
            get: function () {
                return this.elValue.usrCoords;
            },
            enumerable: false,
            configurable: true
        });
        /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
        Coords.prototype.isReal = function () {
            return this.elValue.isReal();
        };
        /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
        Coords.prototype.setCoordinates = function () {
            return this.elValue.setCoordinates();
        };
        return Coords;
    }());
    TSX.Coords = Coords;
    var Curve = /** @class */ (function (_super) {
        __extends(Curve, _super);
        function Curve(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Curve.prototype, "dataX", {
            /**  */
            get: function () {
                return this.elValue.dataX;
            },
            set: function (param) {
                this.elValue.dataX = param;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Curve.prototype, "dataY", {
            /**  */
            get: function () {
                return this.elValue.dataY;
            },
            set: function (param) {
                this.elValue.dataY = param;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Curve.prototype, "ticks", {
            /**  */
            get: function () {
                return this.elValue.ticks;
            },
            enumerable: false,
            configurable: true
        });
        /** Allocate points in the Coords array this.points */
        Curve.prototype.allocatePoints = function () {
            return this.elValue.allocatePoints();
        };
        /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
        Curve.prototype.generateTerm = function () {
            return this.elValue.generateTerm();
        };
        /** Gives the default value of the right bound for the curve. */
        Curve.prototype.maxX = function () {
            return this.elValue.maxX();
        };
        /** Gives the default value of the left bound for the curve. */
        Curve.prototype.minX = function () {
            return this.elValue.minX();
        };
        /** Shift the curve by the vector 'where'. */
        Curve.prototype.moveTo = function () {
            return this.elValue.moveTo();
        };
        /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
        Curve.prototype.notifyParents = function () {
            return this.elValue.notifyParents();
        };
        /** Computes the curve path */
        Curve.prototype.updateCurve = function () {
            return this.elValue.updateCurve();
        };
        /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
        Curve.prototype.updateDataArray = function (func) {
            return this.elValue.updateDataArray(func);
        };
        /** Updates the visual contents of the curve. */
        Curve.prototype.updateRenderer = function () {
            return this.elValue.updateRenderer();
        };
        /** Applies the transformations of the curve to the given point p. */
        Curve.prototype.updateTransform = function () {
            return this.elValue.updateTransform();
        };
        /** The parametric function which defines the x-coordinate of the curve. */
        Curve.prototype.X = function () {
            return this.elValue.X();
        };
        /** The parametric function which defines the y-coordinate of the curve. */
        Curve.prototype.Y = function () {
            return this.elValue.Y();
        };
        /** Treat the curve as curve with homogeneous coordinates. */
        Curve.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Curve;
    }(GeometryElement));
    TSX.Curve = Curve;
    var Curve3D = /** @class */ (function (_super) {
        __extends(Curve3D, _super);
        function Curve3D(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Function which maps u to x; i.e. */
        Curve3D.prototype.X = function () {
            return this.elValue.X();
        };
        /** Function which maps u to y; i.e. */
        Curve3D.prototype.Y = function () {
            return this.elValue.Y();
        };
        /** Function which maps u to z; i.e. */
        Curve3D.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Curve3D;
    }(Curve));
    TSX.Curve3D = Curve3D;
    var Dump = /** @class */ (function () {
        function Dump(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        /** Adds markers to every element of the board */
        Dump.prototype.addMarkers = function () {
            return this.elValue.addMarkers();
        };
        /** Converts an array of different values into a parameter string that can be used by the code generators. */
        Dump.prototype.arrayToParamStr = function () {
            return this.elValue.arrayToParamStr();
        };
        /** Removes markers from every element on the board. */
        Dump.prototype.deleteMarkers = function () {
            return this.elValue.deleteMarkers();
        };
        /** Generate a save-able structure with all elements. */
        Dump.prototype.dump = function () {
            return this.elValue.dump();
        };
        /** Eliminate default values given by JXG.Options from the attributes object. */
        Dump.prototype.minimizeObject = function () {
            return this.elValue.minimizeObject();
        };
        /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
        Dump.prototype.prepareAttributes = function () {
            return this.elValue.prepareAttributes();
        };
        /** Stringifies a string, i.e. */
        Dump.prototype.str = function () {
            return this.elValue.str();
        };
        /** Saves the construction in board to JavaScript. */
        Dump.prototype.toJavaScript = function () {
            return this.elValue.toJavaScript();
        };
        /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
        Dump.prototype.toJCAN = function () {
            return this.elValue.toJCAN();
        };
        /** Saves the construction in board to JessieCode. */
        Dump.prototype.toJessie = function () {
            return this.elValue.toJessie();
        };
        return Dump;
    }());
    TSX.Dump = Dump;
    var ForeignObject = /** @class */ (function () {
        function ForeignObject(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        Object.defineProperty(ForeignObject.prototype, "content", {
            /**  */
            get: function () {
                return this.elValue.content;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForeignObject.prototype, "size", {
            /**  */
            get: function () {
                return this.elValue.size;
            },
            enumerable: false,
            configurable: true
        });
        /** Returns the height of the foreignObject in user coordinates. */
        ForeignObject.prototype.H = function () {
            return this.elValue.H();
        };
        /** Checks whether (x,y) is over or near the image; */
        ForeignObject.prototype.hasPoint = function () {
            return this.elValue.hasPoint();
        };
        /** Set the width and height of the foreignObject. */
        ForeignObject.prototype.setSize = function () {
            return this.elValue.setSize();
        };
        /** Returns the width of the foreignObject in user coordinates. */
        ForeignObject.prototype.W = function () {
            return this.elValue.W();
        };
        return ForeignObject;
    }());
    TSX.ForeignObject = ForeignObject;
    var Group = /** @class */ (function (_super) {
        __extends(Group, _super);
        function Group(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Group.prototype, "coords", {
            /**  */
            get: function () {
                return this.elValue.coords;
            },
            enumerable: false,
            configurable: true
        });
        /** Adds all points in a group to this group. */
        Group.prototype.addGroup = function () {
            return this.elValue.addGroup();
        };
        /** Adds ids of elements to the array this.parents. */
        Group.prototype.addParents = function () {
            return this.elValue.addParents();
        };
        /** Adds an Point to this group. */
        Group.prototype.addPoint = function () {
            return this.elValue.addPoint();
        };
        /** Adds multiple points to this group. */
        Group.prototype.addPoints = function () {
            return this.elValue.addPoints();
        };
        /** Adds a point to the set of rotation points of the group. */
        Group.prototype.addRotationPoint = function () {
            return this.elValue.addRotationPoint();
        };
        /** Adds a point to the set of the scale points of the group. */
        Group.prototype.addScalePoint = function () {
            return this.elValue.addScalePoint();
        };
        /** List of the element ids resp. */
        Group.prototype.getParents = function () {
            return this.elValue.getParents();
        };
        /** Removes a point from the group. */
        Group.prototype.removePoint = function () {
            return this.elValue.removePoint();
        };
        /** Removes the rotation property from a point of the group. */
        Group.prototype.removeRotationPoint = function () {
            return this.elValue.removeRotationPoint();
        };
        /** Removes the scaling property from a point of the group. */
        Group.prototype.removeScalePoint = function () {
            return this.elValue.removeScalePoint();
        };
        /** Removes the translation property from a point of the group. */
        Group.prototype.removeTranslationPoint = function () {
            return this.elValue.removeTranslationPoint();
        };
        /** Sets ids of elements to the array this.parents. */
        Group.prototype.setParents = function () {
            return this.elValue.setParents();
        };
        /**  */
        Group.prototype.setProperty = function () {
            return this.elValue.setProperty();
        };
        /** Sets the center of rotation for the group. */
        Group.prototype.setRotationCenter = function () {
            return this.elValue.setRotationCenter();
        };
        /** Sets the rotation points of the group. */
        Group.prototype.setRotationPoints = function () {
            return this.elValue.setRotationPoints();
        };
        /** Sets the center of scaling for the group. */
        Group.prototype.setScaleCenter = function () {
            return this.elValue.setScaleCenter();
        };
        /** Sets the scale points of the group. */
        Group.prototype.setScalePoints = function () {
            return this.elValue.setScalePoints();
        };
        /** Sets the translation points of the group. */
        Group.prototype.setTranslationPoints = function () {
            return this.elValue.setTranslationPoints();
        };
        /** Releases all elements of this group. */
        Group.prototype.ungroup = function () {
            return this.elValue.ungroup();
        };
        return Group;
    }(GeometryElement));
    TSX.Group = Group;
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Image.prototype, "size", {
            /**  */
            get: function () {
                return this.elValue.size;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Image.prototype, "url", {
            /**  */
            get: function () {
                return this.elValue.url;
            },
            enumerable: false,
            configurable: true
        });
        /** Returns the height of the image in user coordinates. */
        Image.prototype.H = function () {
            return this.elValue.H();
        };
        /** Checks whether (x,y) is over or near the image; */
        Image.prototype.hasPoint = function () {
            return this.elValue.hasPoint();
        };
        /** Set the width and height of the image. */
        Image.prototype.setSize = function () {
            return this.elValue.setSize();
        };
        /** Returns the width of the image in user coordinates. */
        Image.prototype.W = function () {
            return this.elValue.W();
        };
        return Image;
    }(GeometryElement));
    TSX.Image = Image;
    var Implicitcurve = /** @class */ (function (_super) {
        __extends(Implicitcurve, _super);
        function Implicitcurve(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Implicitcurve;
    }(GeometryElement));
    TSX.Implicitcurve = Implicitcurve;
    var Legend = /** @class */ (function () {
        function Legend(elValue) {
            this.elValue = {};
            this.elValue = elValue;
        }
        Object.defineProperty(Legend.prototype, "colors", {
            /**  */
            get: function () {
                return this.elValue.colors;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Legend.prototype, "labels", {
            /**  */
            get: function () {
                return this.elValue.labels;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Legend.prototype, "rowHeight", {
            /**  */
            get: function () {
                return this.elValue.rowHeight;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Legend.prototype, "style", {
            /**  */
            get: function () {
                return this.elValue.style;
            },
            enumerable: false,
            configurable: true
        });
        return Legend;
    }());
    TSX.Legend = Legend;
    var Line = /** @class */ (function (_super) {
        __extends(Line, _super);
        function Line(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Line.prototype, "defaultTicks", {
            /**  */
            get: function () {
                return this.elValue.defaultTicks;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "parentPolygon", {
            /**  */
            get: function () {
                return this.elValue.parentPolygon;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "point1", {
            /** Attributes for first defining point of the line. */
            get: function () {
                return this.elValue.point1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "point2", {
            /** Attributes for second defining point of the line. */
            get: function () {
                return this.elValue.point2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "ticks", {
            /** Attributes for ticks of the line. */
            get: function () {
                return this.elValue.ticks;
            },
            enumerable: false,
            configurable: true
        });
        /** Determines the angle between the positive x axis and the line. */
        Line.prototype.getAngle = function () {
            return this.elValue.getAngle();
        };
        /** Calculates the y intersect of the line. */
        Line.prototype.getRise = function () {
            return this.elValue.getRise();
        };
        /** Alias for line.Slope */
        Line.prototype.getSlope = function () {
            return this.elValue.getSlope();
        };
        /** Checks whether (x,y) is near the line. */
        Line.prototype.hasPoint = function () {
            return this.elValue.hasPoint();
        };
        /** The distance between the two points defining the line. */
        Line.prototype.L = function () {
            return this.elValue.L();
        };
        /** Calculates the slope of the line. */
        Line.prototype.Slope = function () {
            return this.elValue.Slope();
        };
        /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
        Line.prototype.X = function () {
            return this.elValue.X();
        };
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Line.prototype.Y = function () {
            return this.elValue.Y();
        };
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Line.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Line;
    }(GeometryElement));
    TSX.Line = Line;
    var Line3D = /** @class */ (function (_super) {
        __extends(Line3D, _super);
        function Line3D(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Line3D.prototype, "direction", {
            /**  */
            get: function () {
                return this.elValue.direction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line3D.prototype, "point", {
            /**  */
            get: function () {
                return this.elValue.point;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line3D.prototype, "point1", {
            /**  */
            get: function () {
                return this.elValue.point1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line3D.prototype, "point2", {
            /**  */
            get: function () {
                return this.elValue.point2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Line3D.prototype, "range", {
            /**  */
            get: function () {
                return this.elValue.range;
            },
            enumerable: false,
            configurable: true
        });
        return Line3D;
    }(GeometryElement3D));
    TSX.Line3D = Line3D;
    var Point = /** @class */ (function (_super) {
        __extends(Point, _super);
        function Point(elValues) {
            return _super.call(this, elValues) || this;
        }
        /**  */
        Point.prototype.coords = function () {
            return this.elValue.coords();
        };
        /**  */
        Point.prototype.distance = function (toPoint) {
            return this.elValue.Dist(JSXGraph.dereference(toPoint));
        };
        /** Set the face of a point element. */
        Point.prototype.face = function (style) {
            return this.elValue.face(style);
        };
        /** Updates the position of the point. */
        Point.prototype.update = function () {
            return this.elValue.update();
        };
        /**  */
        Point.prototype.X = function () {
            return this.elValue.X();
        };
        /**  */
        Point.prototype.Y = function () {
            return this.elValue.Y();
        };
        /**  */
        Point.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Point;
    }(GeometryElement));
    TSX.Point = Point;
    var Point3D = /** @class */ (function (_super) {
        __extends(Point3D, _super);
        function Point3D(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Point3D.prototype, "slide", {
            /**  */
            get: function () {
                return this.elValue.slide;
            },
            enumerable: false,
            configurable: true
        });
        /** Set the position of a 3D point. */
        Point3D.prototype.setPosition = function () {
            return this.elValue.setPosition();
        };
        /** Get x-coordinate of a 3D point. */
        Point3D.prototype.X = function () {
            return this.elValue.X();
        };
        /** Get y-coordinate of a 3D point. */
        Point3D.prototype.Y = function () {
            return this.elValue.Y();
        };
        /** Get z-coordinate of a 3D point. */
        Point3D.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Point3D;
    }(GeometryElement3D));
    TSX.Point3D = Point3D;
    var Polygon = /** @class */ (function (_super) {
        __extends(Polygon, _super);
        function Polygon(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Polygon.prototype, "borders", {
            /** Attributes for the polygon border lines. */
            get: function () {
                return this.elValue.borders;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Polygon.prototype, "vertices", {
            /** Attributes for the polygon vertices. */
            get: function () {
                return this.elValue.vertices;
            },
            enumerable: false,
            configurable: true
        });
        /** Uses the boards renderer to update the polygon. */
        Polygon.prototype.updateRenderer = function () {
            return this.elValue.updateRenderer();
        };
        return Polygon;
    }(GeometryElement));
    TSX.Polygon = Polygon;
    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Text.prototype, "size", {
            /**  */
            get: function () {
                return this.elValue.size;
            },
            enumerable: false,
            configurable: true
        });
        /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
        Text.prototype.bounds = function () {
            return this.elValue.bounds();
        };
        /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
        Text.prototype.crudeSizeEstimate = function () {
            return this.elValue.crudeSizeEstimate();
        };
        /** Returns the value of the attribute ”anchorX”. */
        Text.prototype.getAnchorX = function () {
            return this.elValue.getAnchorX();
        };
        /** Returns the value of the attribute ”anchorY”. */
        Text.prototype.getAnchorY = function () {
            return this.elValue.getAnchorY();
        };
        /** Return the width of the text element. */
        Text.prototype.getSize = function () {
            return this.elValue.getSize();
        };
        /** Replace _{} by <sub> */
        Text.prototype.replaceSub = function () {
            return this.elValue.replaceSub();
        };
        /** Replace ^{} by <sup> */
        Text.prototype.replaceSup = function () {
            return this.elValue.replaceSup();
        };
        /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
        Text.prototype.setAutoPosition = function () {
            return this.elValue.setAutoPosition();
        };
        /** Move the text to new coordinates. */
        Text.prototype.setCoords = function (x, y) {
            return this.elValue.setCoords(x, y);
        };
        /** Defines new content. */
        Text.prototype.setText = function (newText) {
            return this.elValue.setText(newText);
        };
        /** Defines new content but converts < and > to HTML entities before updating the DOM. */
        Text.prototype.setTextJessieCode = function () {
            return this.elValue.setTextJessieCode();
        };
        /** Evaluates the text. */
        Text.prototype.update = function () {
            return this.elValue.update();
        };
        /** Recompute the width and the height of the text box. */
        Text.prototype.updateSize = function () {
            return this.elValue.updateSize();
        };
        /** Decode unicode entities into characters. */
        Text.prototype.utf8_decode = function () {
            return this.elValue.utf8_decode();
        };
        return Text;
    }(GeometryElement));
    TSX.Text = Text;
    var Ticks = /** @class */ (function (_super) {
        __extends(Ticks, _super);
        function Ticks(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Ticks.prototype, "board", {
            /**  */
            get: function () {
                return this.elValue.board;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "equidistant", {
            /**  */
            get: function () {
                return this.elValue.equidistant;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "fixedTicks", {
            /**  */
            get: function () {
                return this.elValue.fixedTicks;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "labelCounter", {
            /**  */
            get: function () {
                return this.elValue.labelCounter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "labels", {
            /** User defined labels for special ticks. */
            get: function () {
                return this.elValue.labels;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "labelsData", {
            /**  */
            get: function () {
                return this.elValue.labelsData;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "line", {
            /**  */
            get: function () {
                return this.elValue.line;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Ticks.prototype, "ticks", {
            /**  */
            get: function () {
                return this.elValue.ticks;
            },
            enumerable: false,
            configurable: true
        });
        /** Formats label texts to make labels displayed in scientific notation look beautiful. */
        Ticks.prototype.beautifyScientificNotationLabel = function () {
            return this.elValue.beautifyScientificNotationLabel();
        };
        /** Checks whether (x,y) is near the line. */
        Ticks.prototype.hasPoint = function () {
            return this.elValue.hasPoint();
        };
        /** Sets x and y coordinate of the tick. */
        Ticks.prototype.setPositionDirectly = function () {
            return this.elValue.setPositionDirectly();
        };
        /** Uses the boards renderer to update the arc. */
        Ticks.prototype.updateRenderer = function () {
            return this.elValue.updateRenderer();
        };
        return Ticks;
    }(GeometryElement));
    TSX.Ticks = Ticks;
    var Turtle = /** @class */ (function (_super) {
        __extends(Turtle, _super);
        function Turtle(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Move the turtle backwards. */
        Turtle.prototype.back = function () {
            return this.elValue.back();
        };
        /** Alias for JXG.Turtle#back */
        Turtle.prototype.bk = function () {
            return this.elValue.bk();
        };
        /** Removes the turtle curve from the board. */
        Turtle.prototype.clean = function () {
            return this.elValue.clean();
        };
        /** Removes the turtle completely and resets it to its initial position and direction. */
        Turtle.prototype.clearScreen = function () {
            return this.elValue.clearScreen();
        };
        /** Alias for JXG.Turtle#clearScreen */
        Turtle.prototype.cs = function () {
            return this.elValue.cs();
        };
        /** The ”co”-coordinate of the turtle curve at position t is returned. */
        Turtle.prototype.evalAt = function () {
            return this.elValue.evalAt();
        };
        /** Alias for JXG.Turtle#forward */
        Turtle.prototype.fd = function () {
            return this.elValue.fd();
        };
        /** Move the turtle forward. */
        Turtle.prototype.forward = function () {
            return this.elValue.forward();
        };
        /** Get most recently set turtle color. */
        Turtle.prototype.getHighlightPenColor = function () {
            return this.elValue.getHighlightPenColor();
        };
        /** Get most recently set turtle color. */
        Turtle.prototype.getPenColor = function () {
            return this.elValue.getPenColor();
        };
        /** Get most recently set turtle size (in pixel). */
        Turtle.prototype.getPenSize = function () {
            return this.elValue.getPenSize();
        };
        /** Checks whether (x,y) is near the curve. */
        Turtle.prototype.hasPoint = function () {
            return this.elValue.hasPoint();
        };
        /** Sets the visibility of the turtle head to false, */
        Turtle.prototype.hideTurtle = function () {
            return this.elValue.hideTurtle();
        };
        /** Moves the turtle to position [0,0]. */
        Turtle.prototype.home = function () {
            return this.elValue.home();
        };
        /** Alias for JXG.Turtle#hideTurtle */
        Turtle.prototype.ht = function () {
            return this.elValue.ht();
        };
        /** Rotate the turtle direction to the right. */
        Turtle.prototype.left = function () {
            return this.elValue.left();
        };
        /** Rotates the turtle into a new direction. */
        Turtle.prototype.lookTo = function () {
            return this.elValue.lookTo();
        };
        /** Alias for JXG.Turtle#left */
        Turtle.prototype.lt = function () {
            return this.elValue.lt();
        };
        /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
        Turtle.prototype.maxX = function () {
            return this.elValue.maxX();
        };
        /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
        Turtle.prototype.minX = function () {
            return this.elValue.minX();
        };
        /** Moves the turtle to a given coordinate pair. */
        Turtle.prototype.moveTo = function () {
            return this.elValue.moveTo();
        };
        /** Alias for JXG.Turtle#penDown */
        Turtle.prototype.pd = function () {
            return this.elValue.pd();
        };
        /** Pen down, continues visible drawing */
        Turtle.prototype.penDown = function () {
            return this.elValue.penDown();
        };
        /** Pen up, stops visible drawing */
        Turtle.prototype.penUp = function () {
            return this.elValue.penUp();
        };
        /** Alias for JXG.Turtle#popTurtle */
        Turtle.prototype.pop = function () {
            return this.elValue.pop();
        };
        /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
        Turtle.prototype.popTurtle = function () {
            return this.elValue.popTurtle();
        };
        /** Alias for JXG.Turtle#penUp */
        Turtle.prototype.pu = function () {
            return this.elValue.pu();
        };
        /** Alias for JXG.Turtle#pushTurtle */
        Turtle.prototype.push = function () {
            return this.elValue.push();
        };
        /** Pushes the position of the turtle on the stack. */
        Turtle.prototype.pushTurtle = function () {
            return this.elValue.pushTurtle();
        };
        /** Rotate the turtle direction to the right */
        Turtle.prototype.right = function () {
            return this.elValue.right();
        };
        /** Alias for JXG.Turtle#right */
        Turtle.prototype.rt = function () {
            return this.elValue.rt();
        };
        /** Sets the highlight pen color. */
        Turtle.prototype.setHighlightPenColor = function () {
            return this.elValue.setHighlightPenColor();
        };
        /** Sets the pen color. */
        Turtle.prototype.setPenColor = function () {
            return this.elValue.setPenColor();
        };
        /** Sets the pen size. */
        Turtle.prototype.setPenSize = function () {
            return this.elValue.setPenSize();
        };
        /** Moves the turtle without drawing to a new position */
        Turtle.prototype.setPos = function () {
            return this.elValue.setPos();
        };
        /** Sets the visibility of the turtle head to true, */
        Turtle.prototype.showTurtle = function () {
            return this.elValue.showTurtle();
        };
        /** Alias for JXG.Turtle#showTurtle */
        Turtle.prototype.st = function () {
            return this.elValue.st();
        };
        /** if t is not supplied the x-coordinate of the turtle is returned. */
        Turtle.prototype.X = function () {
            return this.elValue.X();
        };
        /** if t is not supplied the y-coordinate of the turtle is returned. */
        Turtle.prototype.Y = function () {
            return this.elValue.Y();
        };
        /**  */
        Turtle.prototype.Z = function () {
            return this.elValue.Z();
        };
        return Turtle;
    }(GeometryElement));
    TSX.Turtle = Turtle;
    var Sector = /** @class */ (function (_super) {
        __extends(Sector, _super);
        function Sector(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Sector.prototype, "point1", {
            /**  */
            get: function () {
                return this.elValue.point1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sector.prototype, "point2", {
            /**  */
            get: function () {
                return this.elValue.point2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sector.prototype, "point3", {
            /**  */
            get: function () {
                return this.elValue.point3;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sector.prototype, "point4", {
            /**  */
            get: function () {
                return this.elValue.point4;
            },
            enumerable: false,
            configurable: true
        });
        /** Checks whether (x,y) is within the area defined by the sector. */
        Sector.prototype.hasPointSector = function () {
            return this.elValue.hasPointSector();
        };
        /** Returns the radius of the sector. */
        Sector.prototype.Radius = function () {
            return this.elValue.Radius();
        };
        return Sector;
    }(Curve));
    TSX.Sector = Sector;
    var Vectorfield = /** @class */ (function (_super) {
        __extends(Vectorfield, _super);
        function Vectorfield(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Set the defining functions of vector field. */
        Vectorfield.prototype.setF = function () {
            return this.elValue.setF();
        };
        return Vectorfield;
    }(Curve));
    TSX.Vectorfield = Vectorfield;
    var Angle = /** @class */ (function (_super) {
        __extends(Angle, _super);
        function Angle(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Angle.prototype, "point", {
            /**  */
            get: function () {
                return this.elValue.point;
            },
            enumerable: false,
            configurable: true
        });
        /** Frees an angle from a prescribed value. */
        Angle.prototype.free = function () {
            return this.elValue.free();
        };
        /** Set an angle to a prescribed value given in radians. */
        Angle.prototype.setAngle = function () {
            return this.elValue.setAngle();
        };
        /** Returns the value of the angle. */
        Angle.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Angle;
    }(Sector));
    TSX.Angle = Angle;
    var Arc = /** @class */ (function (_super) {
        __extends(Arc, _super);
        function Arc(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Arc.prototype, "anglepoint", {
            /**  */
            get: function () {
                return this.elValue.anglepoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Arc.prototype, "radiuspoint", {
            /**  */
            get: function () {
                return this.elValue.radiuspoint;
            },
            enumerable: false,
            configurable: true
        });
        /**  */
        Arc.prototype.getRadius = function () {
            return this.elValue.getRadius();
        };
        /** Checks whether (x,y) is within the sector defined by the arc. */
        Arc.prototype.hasPointSector = function () {
            return this.elValue.hasPointSector();
        };
        /** Determines the arc's current radius. */
        Arc.prototype.Radius = function () {
            return this.elValue.Radius();
        };
        /** Returns the length of the arc or the value of the angle spanned by the arc. */
        Arc.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Arc;
    }(Curve));
    TSX.Arc = Arc;
    var Arrow = /** @class */ (function (_super) {
        __extends(Arrow, _super);
        function Arrow(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Arrow;
    }(Line));
    TSX.Arrow = Arrow;
    var Parallel = /** @class */ (function (_super) {
        __extends(Parallel, _super);
        function Parallel(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Parallel;
    }(Line));
    TSX.Parallel = Parallel;
    var Arrowparallel = /** @class */ (function (_super) {
        __extends(Arrowparallel, _super);
        function Arrowparallel(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Arrowparallel;
    }(Parallel));
    TSX.Arrowparallel = Arrowparallel;
    var Axis = /** @class */ (function (_super) {
        __extends(Axis, _super);
        function Axis(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Axis.prototype, "defaultTicks", {
            /**  */
            get: function () {
                return this.elValue.defaultTicks;
            },
            enumerable: false,
            configurable: true
        });
        return Axis;
    }(Line));
    TSX.Axis = Axis;
    var Bisector = /** @class */ (function (_super) {
        __extends(Bisector, _super);
        function Bisector(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Bisector;
    }(Line));
    TSX.Bisector = Bisector;
    var Bisectorlines = /** @class */ (function (_super) {
        __extends(Bisectorlines, _super);
        function Bisectorlines(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Bisectorlines;
    }(Composition));
    TSX.Bisectorlines = Bisectorlines;
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Button;
    }(Text));
    TSX.Button = Button;
    var Cardinalspline = /** @class */ (function (_super) {
        __extends(Cardinalspline, _super);
        function Cardinalspline(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Cardinalspline;
    }(Curve));
    TSX.Cardinalspline = Cardinalspline;
    var Checkbox = /** @class */ (function (_super) {
        __extends(Checkbox, _super);
        function Checkbox(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Returns the value of the checkbox element */
        Checkbox.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Checkbox;
    }(Text));
    TSX.Checkbox = Checkbox;
    var Circumcenter = /** @class */ (function (_super) {
        __extends(Circumcenter, _super);
        function Circumcenter(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Circumcenter;
    }(Point));
    TSX.Circumcenter = Circumcenter;
    var Circumcircle = /** @class */ (function (_super) {
        __extends(Circumcircle, _super);
        function Circumcircle(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Circumcircle;
    }(Circle));
    TSX.Circumcircle = Circumcircle;
    var CircumcircleArc = /** @class */ (function (_super) {
        __extends(CircumcircleArc, _super);
        function CircumcircleArc(elValues) {
            return _super.call(this, elValues) || this;
        }
        return CircumcircleArc;
    }(Arc));
    TSX.CircumcircleArc = CircumcircleArc;
    var CircumcircleSector = /** @class */ (function (_super) {
        __extends(CircumcircleSector, _super);
        function CircumcircleSector(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(CircumcircleSector.prototype, "center", {
            /**  */
            get: function () {
                return this.elValue.center;
            },
            enumerable: false,
            configurable: true
        });
        return CircumcircleSector;
    }(Sector));
    TSX.CircumcircleSector = CircumcircleSector;
    var Comb = /** @class */ (function (_super) {
        __extends(Comb, _super);
        function Comb(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Comb;
    }(Curve));
    TSX.Comb = Comb;
    var Conic = /** @class */ (function (_super) {
        __extends(Conic, _super);
        function Conic(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Conic;
    }(Curve));
    TSX.Conic = Conic;
    var CurveDifference = /** @class */ (function (_super) {
        __extends(CurveDifference, _super);
        function CurveDifference(elValues) {
            return _super.call(this, elValues) || this;
        }
        return CurveDifference;
    }(Curve));
    TSX.CurveDifference = CurveDifference;
    var CurveIntersection = /** @class */ (function (_super) {
        __extends(CurveIntersection, _super);
        function CurveIntersection(elValues) {
            return _super.call(this, elValues) || this;
        }
        return CurveIntersection;
    }(Curve));
    TSX.CurveIntersection = CurveIntersection;
    var CurveUnion = /** @class */ (function (_super) {
        __extends(CurveUnion, _super);
        function CurveUnion(elValues) {
            return _super.call(this, elValues) || this;
        }
        return CurveUnion;
    }(Curve));
    TSX.CurveUnion = CurveUnion;
    var Derivative = /** @class */ (function (_super) {
        __extends(Derivative, _super);
        function Derivative(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Derivative;
    }(Curve));
    TSX.Derivative = Derivative;
    var Ellipse = /** @class */ (function (_super) {
        __extends(Ellipse, _super);
        function Ellipse(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Ellipse;
    }(Conic));
    TSX.Ellipse = Ellipse;
    var ParametricSurface3D = /** @class */ (function (_super) {
        __extends(ParametricSurface3D, _super);
        function ParametricSurface3D(elValues) {
            return _super.call(this, elValues) || this;
        }
        return ParametricSurface3D;
    }(Curve3D));
    TSX.ParametricSurface3D = ParametricSurface3D;
    var Functiongraph = /** @class */ (function (_super) {
        __extends(Functiongraph, _super);
        function Functiongraph(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Functiongraph;
    }(Curve));
    TSX.Functiongraph = Functiongraph;
    var Functiongraph3D = /** @class */ (function (_super) {
        __extends(Functiongraph3D, _super);
        function Functiongraph3D(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Functiongraph3D;
    }(Curve3D));
    TSX.Functiongraph3D = Functiongraph3D;
    var Glider = /** @class */ (function (_super) {
        __extends(Glider, _super);
        function Glider(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Animate the point. */
        Glider.prototype.startAnimation = function (direction, stepCount, delayMSec) {
            return this.elValue.startAnimation(direction, stepCount, delayMSec);
        };
        return Glider;
    }(Point));
    TSX.Glider = Glider;
    var Grid = /** @class */ (function (_super) {
        __extends(Grid, _super);
        function Grid(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Grid;
    }(Curve));
    TSX.Grid = Grid;
    var Hatch = /** @class */ (function (_super) {
        __extends(Hatch, _super);
        function Hatch(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Hatch.prototype, "ticksDistance", {
            /**  */
            get: function () {
                return this.elValue.ticksDistance;
            },
            enumerable: false,
            configurable: true
        });
        return Hatch;
    }(Ticks));
    TSX.Hatch = Hatch;
    var Hyperbola = /** @class */ (function (_super) {
        __extends(Hyperbola, _super);
        function Hyperbola(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Hyperbola;
    }(Conic));
    TSX.Hyperbola = Hyperbola;
    var Incenter = /** @class */ (function (_super) {
        __extends(Incenter, _super);
        function Incenter(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Incenter;
    }(Point));
    TSX.Incenter = Incenter;
    var Incircle = /** @class */ (function (_super) {
        __extends(Incircle, _super);
        function Incircle(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Incircle;
    }(Circle));
    TSX.Incircle = Incircle;
    var Inequality = /** @class */ (function (_super) {
        __extends(Inequality, _super);
        function Inequality(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Inequality;
    }(Curve));
    TSX.Inequality = Inequality;
    var Input = /** @class */ (function (_super) {
        __extends(Input, _super);
        function Input(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Sets value of the input element. */
        Input.prototype.set = function () {
            return this.elValue.set();
        };
        /** Returns the value (content) of the input element */
        Input.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Input;
    }(Text));
    TSX.Input = Input;
    var Integral = /** @class */ (function (_super) {
        __extends(Integral, _super);
        function Integral(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Integral.prototype, "baseLeft", {
            /** Attributes of the (left) base point of the integral. */
            get: function () {
                return this.elValue.baseLeft;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Integral.prototype, "baseRight", {
            /** Attributes of the (right) base point of the integral. */
            get: function () {
                return this.elValue.baseRight;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Integral.prototype, "curveLeft", {
            /** Attributes of the (left) starting point of the integral. */
            get: function () {
                return this.elValue.curveLeft;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Integral.prototype, "curveRight", {
            /** Attributes of the (right) end point of the integral. */
            get: function () {
                return this.elValue.curveRight;
            },
            enumerable: false,
            configurable: true
        });
        /** Returns the current value of the integral. */
        Integral.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Integral;
    }(Curve));
    TSX.Integral = Integral;
    var Intersection = /** @class */ (function (_super) {
        __extends(Intersection, _super);
        function Intersection(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Intersection;
    }(GeometryElement));
    TSX.Intersection = Intersection;
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Label;
    }(Text));
    TSX.Label = Label;
    var Locus = /** @class */ (function (_super) {
        __extends(Locus, _super);
        function Locus(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Locus.prototype, "ctime", {
            /**  */
            get: function () {
                return this.elValue.ctime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Locus.prototype, "eq", {
            /**  */
            get: function () {
                return this.elValue.eq;
            },
            enumerable: false,
            configurable: true
        });
        return Locus;
    }(Curve));
    TSX.Locus = Locus;
    var MajorArc = /** @class */ (function (_super) {
        __extends(MajorArc, _super);
        function MajorArc(elValues) {
            return _super.call(this, elValues) || this;
        }
        return MajorArc;
    }(Curve));
    TSX.MajorArc = MajorArc;
    var MajorSector = /** @class */ (function (_super) {
        __extends(MajorSector, _super);
        function MajorSector(elValues) {
            return _super.call(this, elValues) || this;
        }
        return MajorSector;
    }(Curve));
    TSX.MajorSector = MajorSector;
    var Metapostspline = /** @class */ (function (_super) {
        __extends(Metapostspline, _super);
        function Metapostspline(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Metapostspline;
    }(Curve));
    TSX.Metapostspline = Metapostspline;
    var Midpoint = /** @class */ (function (_super) {
        __extends(Midpoint, _super);
        function Midpoint(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Midpoint;
    }(Point));
    TSX.Midpoint = Midpoint;
    var MinorArc = /** @class */ (function (_super) {
        __extends(MinorArc, _super);
        function MinorArc(elValues) {
            return _super.call(this, elValues) || this;
        }
        return MinorArc;
    }(Curve));
    TSX.MinorArc = MinorArc;
    var MinorSector = /** @class */ (function (_super) {
        __extends(MinorSector, _super);
        function MinorSector(elValues) {
            return _super.call(this, elValues) || this;
        }
        return MinorSector;
    }(Curve));
    TSX.MinorSector = MinorSector;
    var mirrorelement = /** @class */ (function (_super) {
        __extends(mirrorelement, _super);
        function mirrorelement(elValues) {
            return _super.call(this, elValues) || this;
        }
        return mirrorelement;
    }(GeometryElement));
    TSX.mirrorelement = mirrorelement;
    var Mirrorpoint = /** @class */ (function (_super) {
        __extends(Mirrorpoint, _super);
        function Mirrorpoint(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Mirrorpoint;
    }(Point));
    TSX.Mirrorpoint = Mirrorpoint;
    var NonReflexAngle = /** @class */ (function (_super) {
        __extends(NonReflexAngle, _super);
        function NonReflexAngle(elValues) {
            return _super.call(this, elValues) || this;
        }
        return NonReflexAngle;
    }(Angle));
    TSX.NonReflexAngle = NonReflexAngle;
    var Normal = /** @class */ (function (_super) {
        __extends(Normal, _super);
        function Normal(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Normal;
    }(Line));
    TSX.Normal = Normal;
    var Orthogonalprojection = /** @class */ (function (_super) {
        __extends(Orthogonalprojection, _super);
        function Orthogonalprojection(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Orthogonalprojection;
    }(Point));
    TSX.Orthogonalprojection = Orthogonalprojection;
    var OtherIntersection = /** @class */ (function (_super) {
        __extends(OtherIntersection, _super);
        function OtherIntersection(elValues) {
            return _super.call(this, elValues) || this;
        }
        return OtherIntersection;
    }(Point));
    TSX.OtherIntersection = OtherIntersection;
    var Parabola = /** @class */ (function (_super) {
        __extends(Parabola, _super);
        function Parabola(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Parabola;
    }(Conic));
    TSX.Parabola = Parabola;
    var Parallelpoint = /** @class */ (function (_super) {
        __extends(Parallelpoint, _super);
        function Parallelpoint(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Parallelpoint;
    }(Point));
    TSX.Parallelpoint = Parallelpoint;
    var Segment = /** @class */ (function (_super) {
        __extends(Segment, _super);
        function Segment(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Segment;
    }(Line));
    TSX.Segment = Segment;
    var Parallelogram = /** @class */ (function (_super) {
        __extends(Parallelogram, _super);
        function Parallelogram(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Parallelogram;
    }(Polygon));
    TSX.Parallelogram = Parallelogram;
    var Perpendicular = /** @class */ (function (_super) {
        __extends(Perpendicular, _super);
        function Perpendicular(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Perpendicular;
    }(Segment));
    TSX.Perpendicular = Perpendicular;
    var PerpendicularPoint = /** @class */ (function (_super) {
        __extends(PerpendicularPoint, _super);
        function PerpendicularPoint(elValues) {
            return _super.call(this, elValues) || this;
        }
        return PerpendicularPoint;
    }(Point));
    TSX.PerpendicularPoint = PerpendicularPoint;
    var PerpendicularSegment = /** @class */ (function (_super) {
        __extends(PerpendicularSegment, _super);
        function PerpendicularSegment(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(PerpendicularSegment.prototype, "point", {
            /**  */
            get: function () {
                return this.elValue.point;
            },
            enumerable: false,
            configurable: true
        });
        return PerpendicularSegment;
    }(Segment));
    TSX.PerpendicularSegment = PerpendicularSegment;
    var PolarLine = /** @class */ (function (_super) {
        __extends(PolarLine, _super);
        function PolarLine(elValues) {
            return _super.call(this, elValues) || this;
        }
        return PolarLine;
    }(Line));
    TSX.PolarLine = PolarLine;
    var PolePoint = /** @class */ (function (_super) {
        __extends(PolePoint, _super);
        function PolePoint(elValues) {
            return _super.call(this, elValues) || this;
        }
        return PolePoint;
    }(Point));
    TSX.PolePoint = PolePoint;
    var PolygonalChain = /** @class */ (function (_super) {
        __extends(PolygonalChain, _super);
        function PolygonalChain(elValues) {
            return _super.call(this, elValues) || this;
        }
        return PolygonalChain;
    }(Polygon));
    TSX.PolygonalChain = PolygonalChain;
    var RadicalAxis = /** @class */ (function (_super) {
        __extends(RadicalAxis, _super);
        function RadicalAxis(elValues) {
            return _super.call(this, elValues) || this;
        }
        return RadicalAxis;
    }(Line));
    TSX.RadicalAxis = RadicalAxis;
    var Reflection = /** @class */ (function (_super) {
        __extends(Reflection, _super);
        function Reflection(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Reflection;
    }(GeometryElement));
    TSX.Reflection = Reflection;
    var ReflexAngle = /** @class */ (function (_super) {
        __extends(ReflexAngle, _super);
        function ReflexAngle(elValues) {
            return _super.call(this, elValues) || this;
        }
        return ReflexAngle;
    }(Angle));
    TSX.ReflexAngle = ReflexAngle;
    var RegularPolygon = /** @class */ (function (_super) {
        __extends(RegularPolygon, _super);
        function RegularPolygon(elValues) {
            return _super.call(this, elValues) || this;
        }
        return RegularPolygon;
    }(Polygon));
    TSX.RegularPolygon = RegularPolygon;
    var Riemannsum = /** @class */ (function (_super) {
        __extends(Riemannsum, _super);
        function Riemannsum(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Returns the value of the Riemann sum, i.e. */
        Riemannsum.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Riemannsum;
    }(Curve));
    TSX.Riemannsum = Riemannsum;
    var Semicircle = /** @class */ (function (_super) {
        __extends(Semicircle, _super);
        function Semicircle(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(Semicircle.prototype, "midpoint", {
            /**  */
            get: function () {
                return this.elValue.midpoint;
            },
            enumerable: false,
            configurable: true
        });
        return Semicircle;
    }(Arc));
    TSX.Semicircle = Semicircle;
    var Slider = /** @class */ (function (_super) {
        __extends(Slider, _super);
        function Slider(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Sets the maximum value of the slider. */
        Slider.prototype.setMax = function () {
            return this.elValue.setMax();
        };
        /** Sets the minimum value of the slider. */
        Slider.prototype.setMin = function () {
            return this.elValue.setMin();
        };
        /** Sets the value of the slider. */
        Slider.prototype.setValue = function () {
            return this.elValue.setValue();
        };
        /** Returns the current slider value. */
        Slider.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Slider;
    }(Glider));
    TSX.Slider = Slider;
    var Slopefield = /** @class */ (function (_super) {
        __extends(Slopefield, _super);
        function Slopefield(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Set the defining functions of slope field. */
        Slopefield.prototype.setF = function () {
            return this.elValue.setF();
        };
        return Slopefield;
    }(Vectorfield));
    TSX.Slopefield = Slopefield;
    var Slopetriangle = /** @class */ (function (_super) {
        __extends(Slopetriangle, _super);
        function Slopetriangle(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Returns the value of the slope triangle, that is the slope of the tangent. */
        Slopetriangle.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Slopetriangle;
    }(Line));
    TSX.Slopetriangle = Slopetriangle;
    var Smartlabel = /** @class */ (function (_super) {
        __extends(Smartlabel, _super);
        function Smartlabel(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Smartlabel;
    }(Text));
    TSX.Smartlabel = Smartlabel;
    var Spline = /** @class */ (function (_super) {
        __extends(Spline, _super);
        function Spline(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Spline;
    }(Curve));
    TSX.Spline = Spline;
    var Stepfunction = /** @class */ (function (_super) {
        __extends(Stepfunction, _super);
        function Stepfunction(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Stepfunction;
    }(Curve));
    TSX.Stepfunction = Stepfunction;
    var Tangent = /** @class */ (function (_super) {
        __extends(Tangent, _super);
        function Tangent(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Tangent;
    }(Line));
    TSX.Tangent = Tangent;
    var Tapemeasure = /** @class */ (function (_super) {
        __extends(Tapemeasure, _super);
        function Tapemeasure(elValues) {
            return _super.call(this, elValues) || this;
        }
        /** Returns the length of the tape measure. */
        Tapemeasure.prototype.Value = function () {
            return this.elValue.Value();
        };
        return Tapemeasure;
    }(Segment));
    TSX.Tapemeasure = Tapemeasure;
    var Tracecurve = /** @class */ (function (_super) {
        __extends(Tracecurve, _super);
        function Tracecurve(elValues) {
            return _super.call(this, elValues) || this;
        }
        return Tracecurve;
    }(Curve));
    TSX.Tracecurve = Tracecurve;
    var Transform = /** @class */ (function (_super) {
        __extends(Transform, _super);
        function Transform(elValues) {
            return _super.call(this, elValues) || this;
        }
        /**  */
        Transform.prototype.applyOnce = function (element) {
            return this.elValue.applyOnce(JSXGraph.dereference(element));
        };
        /**  */
        Transform.prototype.bindTo = function (element) {
            return this.elValue.bindTo(JSXGraph.dereference(element));
        };
        /**  */
        Transform.prototype.setMatrix = function () {
            return this.elValue.setMatrix();
        };
        return Transform;
    }(GeometryElement));
    TSX.Transform = Transform;
    var View3D = /** @class */ (function (_super) {
        __extends(View3D, _super);
        function View3D(elValues) {
            return _super.call(this, elValues) || this;
        }
        Object.defineProperty(View3D.prototype, "matrix3D", {
            /**  */
            get: function () {
                return this.elValue.matrix3D;
            },
            enumerable: false,
            configurable: true
        });
        /**  */
        View3D.prototype.point3D = function (xyz, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return this.elValue.create("point3d", [xyz], attributes);
        };
        /**  */
        View3D.prototype.line3D = function (point1, point2, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return this.elValue.create("line3d", JSXGraph.dereference([point1, point2]), attributes);
        };
        /**  */
        View3D.prototype.curve3D = function (xFunction, yFunction, zFunction, range, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return this.elValue.create("curve3d", JSXGraph.dereference([xFunction, yFunction, zFunction, range]), attributes);
        };
        /**  */
        View3D.prototype.functiongraph3D = function (xyFunction, xRange, yRange, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return this.elValue.create("functiongraph3d", JSXGraph.dereference([xyFunction, xRange, yRange]), attributes);
        };
        /**  */
        View3D.prototype.parametricsurface3D = function (xFunction, yFunction, zFunction, xRange, yRange, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return this.elValue.create("parametricsurface3d", JSXGraph.dereference([xFunction, yFunction, zFunction, xRange, yRange]), attributes);
        };
        /**  */
        View3D.prototype.animateAzimuth = function () {
            return this.elValue.animateAzimuth();
        };
        /** Creates a new 3D element of type elementType. */
        View3D.prototype.create = function () {
            return this.elValue.create();
        };
        /** Intersect a ray with the bounding cube of the 3D view. */
        View3D.prototype.intersectionLineCube = function () {
            return this.elValue.intersectionLineCube();
        };
        /**  */
        View3D.prototype.intersectionPlanePlane = function () {
            return this.elValue.intersectionPlanePlane();
        };
        /** Test if coordinates are inside of the bounding cube. */
        View3D.prototype.isInCube = function () {
            return this.elValue.isInCube();
        };
        /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
        View3D.prototype.project2DTo3DPlane = function () {
            return this.elValue.project2DTo3DPlane();
        };
        /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
        View3D.prototype.project2DTo3DVertical = function () {
            return this.elValue.project2DTo3DVertical();
        };
        /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
        View3D.prototype.project3DTo2D = function () {
            return this.elValue.project3DTo2D();
        };
        /** Limit 3D coordinates to the bounding cube. */
        View3D.prototype.project3DToCube = function () {
            return this.elValue.project3DToCube();
        };
        /** Select a single or multiple elements at once. */
        View3D.prototype.select = function () {
            return this.elValue.select();
        };
        /**  */
        View3D.prototype.stopAzimuth = function () {
            return this.elValue.stopAzimuth();
        };
        return View3D;
    }(GeometryElement3D));
    TSX.View3D = View3D;
})(TSX = exports.TSX || (exports.TSX = {}));
//# sourceMappingURL=jsxgraph.js.map