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
//   Generated on April 16, 2024, 6:07 pm
export var TXG;
(function (TXG) {
    // utility function for determining whether an object is a JSX object (or part of this wrapper)
    function isJSXAttribute(maybe) {
        return (typeof (maybe) == 'object' && !Array.isArray(maybe) && !('elValue' in maybe) && !('elType' in maybe));
    }
    /**
    *  Constant: user coordinates relative to the coordinates system defined by the bounding box.
    */
    const COORDS_BY_USER = 0x0001;
    /**
     *  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
     */
    const COORDS_BY_SCREEN = 0x0002;
    class Math {
        static board;
    }
    TXG.Math = Math;
    ///// some math classes by hand
    class IntervalArithmetic {
    }
    TXG.IntervalArithmetic = IntervalArithmetic;
    class PolyMonomial {
    }
    TXG.PolyMonomial = PolyMonomial;
    class PolyPolynomial {
    }
    TXG.PolyPolynomial = PolyPolynomial;
    class Symbolic {
    }
    TXG.Symbolic = Symbolic;
    /** Initialize a new board. */
    class TSXGraph {
        static defaultAttrs = {};
        static initBoard(html, attributes = {}) {
            const newBoard = new TSXBoard();
            newBoard.board = window.JXG.JSXGraph.initBoard(html, attributes);
            Math.board = newBoard.board; // make a copy for Math and its decendents
            return newBoard;
        }
        // /** Delete a board and all its contents. */
        static freeBoard(board) {
            window.JXG.JSXGraph.freeBoard(board);
        }
        // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
        static dereference(params) {
            let ret;
            if (Array.isArray(params)) {
                ret = params.map((x) => (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x);
            }
            else {
                ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params;
            }
            return ret;
        }
        // add in any default attributes
        static defaultAttributes(attrs) {
            for (const property in TSXGraph.defaultAttrs) {
                if (!attrs.hasOwnProperty(property)) { // if the user has not specified a value for this property
                    attrs[property] = TSXGraph.defaultAttrs[property];
                }
            }
            return attrs;
        }
    }
    TXG.TSXGraph = TSXGraph;
    class TSXBoard {
        board;
        printLineNumber = 0; // added a print() function, this tracks the line#
        defaultAttrs = {}; // hold defaults from setDefaultAttributes()
        /** Version of underlying JSX library */
        get version() {
            return window.JXG.JSXGraph.version;
        }
        get defaultAxes() {
            return this.board.defaultAxes;
        }
        get canvasWidth() {
            return this.board.canvasWidth;
        }
        get canvasHeight() {
            return this.board.canvasHeight;
        }
        /** allows setting default attributes by class or across the board */
        setDefaultAttributes(attrs) {
            this.defaultAttrs = attrs;
        }
        /** get a 2D canvas context (warning: cannot mix SVG and canvas) */
        getCanvasCTX() {
            const boardID = this.board.container;
            const div = document.getElementById(boardID);
            window.JXG.CanvasRenderer(div, [this.canvasWidth, this.canvasHeight]);
            return window.JXG.context;
        }
        setBoundingBox(left, top, right, bottom) {
            return this.board.setBoundingBox([left, top, right, bottom]);
        }
        getBoundingBox() {
            return this.board.getBoundingBox();
        }
        addGrid() {
            return this.board.addGrid();
        }
        removeGrids() {
            return this.board.removeGrids(); // Note: remove GRIDS, not GRID
        }
        addAxis() {
            this.axis([0, 0], [1, 0]);
            this.axis([0, 0], [0, 1]);
            return this;
        }
        setAttribute(attrs) {
            return this.board.setAttribute(attrs);
        }
        // removeObject(object:Board,testForChildren:Boolean=false)
        /** Legacy method to create elements. */
        create(elType, params = [], attributes = {}) {
            return new GeometryElement(elType, params, attributes);
        }
        /** force board update */
        update() {
            this.board.update();
        }
        /** run through the board and call update() on each element */
        updateElements() {
            this.board.updateElements();
        }
        on(event, handler, context) {
            // JSXGraph doesn't share keyboard events, but I want them
            if (event == 'keypress' || event == 'keydown' || event == 'keyup') {
                window.document.addEventListener(event, handler);
            }
            else {
                this.board.on(event, handler, context);
            }
        }
        // I cannot figure out how to get the keybard to respond.  mouse works fine
        // addKeyboardEventHandlers():void{
        //     (this.board as any).addKeyboardEventHandlers()
        // }
        print(...args) {
            let bbox = this.board.getBoundingBox(); // get every time, in case setBoundingBox()
            let left = bbox[0]; // align x to left border
            let lineHeight = (bbox[1] - bbox[3]) / 20; //
            let top = bbox[1] - (2 * lineHeight) - (this.printLineNumber * lineHeight); // align y to top border
            let helper = (stringText, item) => {
                if (typeof item == null) {
                    stringText += 'null, ';
                }
                else if (item == undefined) {
                    stringText += 'undefined';
                }
                else if (typeof item == 'string') {
                    stringText += '\'' + item + '\'';
                }
                else if (typeof item == 'number') {
                    stringText += Number.isInteger(item) ? item.toString() : item.toFixed(2);
                }
                else if (typeof item == 'boolean') {
                    stringText += item ? 'true' : 'false';
                }
                else if (Array.isArray(item)) {
                    stringText += '[';
                    stringText = item.reduce((acc, curr) => acc + helper('', curr), stringText);
                    stringText += ']';
                }
                else if (typeof item == 'object') {
                    stringText += '{';
                    if ('elType' in item) {
                        stringText += item.elType;
                    }
                    else if ('elV2Math' in item) {
                        stringText += [item.X(), item.Y()];
                    }
                    stringText += '}';
                }
                else {
                    stringText += 'UNKNOWN';
                }
                stringText += ', ';
                return stringText;
            };
            let stringText = '';
            args.forEach((argn) => {
                stringText = helper(stringText, argn);
            });
            this.board.create('text', this.dereference([left, top, stringText]), { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' });
            this.printLineNumber += 1;
        }
        suspendUpdate() {
            this.board.suspendUpdate();
        }
        unsuspendUpdate() {
            this.board.unsuspendUpdate();
        }
        // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
        dereference(params) {
            let ret;
            if (Array.isArray(params)) {
                ret = params.map((x) => (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x);
            }
            else {
                ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params;
            }
            return ret;
        }
        //   /** Math.Clip */
        //   public get clip():Clip {
        //       let clip = new Clip({})
        //       return clip as Clip
        //   }
        /////////////////////////////
        /////////////////////////////
        /////////////////////////////
        /**  */
        conic;
        /** This element is used to provide projective transformations. */
        transform;
        MatrixMath;
        NumericsMath;
        constructor() {
            this.board = null;
            this.conic = {
                /** @protected */
                z_ignore: {},
                /** Line defined by solution to a*z + b*y +c*y== 0 */
                line(a, b, c, attributes = {}) {
                    return new Line('Line', [a, b, c,], attributes);
                },
                /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
                fivePoints(A, B, C, D, E, attributes = {}) {
                    return new Conic('Conic', [A, B, C, D, E,], attributes);
                },
                /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
                sixNumbers(A, B, C, D, E, F, attributes = {}) {
                    return new Conic('Conic', [A, B, C, D, E, F,], attributes);
                },
                /** An Ellipse from 3 points */
                threePoints(focalPoint1, focalPoint2, outerPoint, attributes = {}) {
                    return new Ellipse('Ellipse', [focalPoint1, focalPoint2, outerPoint,], attributes);
                },
                /** Three Points, plus start and end. */
                ellipseArc(focalPoint1, focalPoint2, outerPoint, startAngle, endAngle, attributes = {}) {
                    return new Ellipse('Ellipse', [focalPoint1, focalPoint2, outerPoint, startAngle, endAngle,], attributes);
                },
            };
            this.conic.z_ignore = this;
            this.transform = {
                /** @protected */
                z_ignore: {},
                /** Move a distance from a point */
                translate(x, y, attributes = {}) {
                    return new Transform('Transform', [x, y,], { type: 'translate' });
                },
                /** Increase distance from a point by a factor */
                scale(x, y, attributes = {}) {
                    return new Transform('Transform', [x, y,], { type: 'scale' });
                },
                /** Rotate by angle around a point */
                rotate(angle, point = [0, 0], attributes = {}) {
                    return new Transform('Transform', [angle, point,], { type: 'rotate' });
                },
                /** Reflect around a line */
                reflect(x, y, attributes = {}) {
                    return new Transform('Transform', [x, y,], { type: 'reflect' });
                },
                /** Move proportionally to distance */
                shear(x, y, attributes = {}) {
                    return new Transform('Transform', [x, y,], { type: 'shear' });
                },
                /** Transform using a MAT3 */
                generic(a, b, c, d, e, f, g, h, i, attributes = {}) {
                    return new Transform('Transform', [a, b, c, d, e, f, g, h, i,], { type: 'generic' });
                },
                /** A new Point from a Point and Transform */
                point(p, t, attributes = {}) {
                    return new Point('Point', [p, t,], attributes);
                },
                /** A new Circle from a Circle and Transform */
                circle(c, t, attributes = {}) {
                    return new Circle('Circle', [c, t,], attributes);
                },
                /** A new Curve from a Curve and Transform */
                curve(c, t, attributes = {}) {
                    return new Curve('Curve', [c, t,], attributes);
                },
            };
            this.transform.z_ignore = this;
            this.MatrixMath = {
                /** Calculates the cross product of two vectors both of length three. */
                crossProduct(c1, c2) { return window.JXG.Math.crossProduct(c1, c2); },
                /** Generates a 4x4 matrix for 3D to 2D projections. */
                frustum(left, right, top, bottom, near, far) { return window.JXG.Math.frustum(left, right, top, bottom, near, far); },
                /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
                identity(m, n) { return window.JXG.Math.identity(m, n); },
                /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
                innerProduct(v1, v2) { return window.JXG.Math.innerProduct(v1, v2); },
                /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
                inverse(mat) { return window.JXG.Math.inverse(mat); },
                /** Computes the product of the two matrices mat1*mat2. */
                matMatMult(mat1, mat2) { return window.JXG.Math.matMatMult(mat1, mat2); },
                /** Initializes a matrix as an array of rows with the given value. */
                matrix(nRows, mCols, init) { return window.JXG.Math.matrix(nRows, mCols, init); },
                /** Multiplies a vector vec to a matrix mat: mat * vec. */
                matVecMult(mat, vec) { return window.JXG.Math.matVecMult(mat, vec); },
                /** Generates a 4x4 matrix for 3D to 2D projections. */
                projection(fov, ratio, near, far) { return window.JXG.Math.projection(fov, ratio, near, far); },
                /** Transposes a matrix given as a two dimensional array. */
                transpose(mat) { return window.JXG.Math.transpose(mat); },
                /** Initializes a vector of size n wih coefficients set to the given value. */
                vector(n, init) { return window.JXG.Math.vector(n, init); },
            };
            this.NumericsMath = {
                CardinalSpline(pointArray, tau) { return window.JXG.Math.Numerics.CardinalSpline(TSXGraph.dereference(pointArray), tau); },
            };
        }
        /** create a chart */
        chart(f, attributes = {}) {
            return new Chart('Chart', [f,], attributes);
        }
        /** This element is used to provide a constructor for a circle. */
        circle(centerPoint, remotePoint, attributes = {}) {
            let newObject; // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
            if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0]) && Array.isArray(remotePoint[1])) {
                return new Circle(`circle`, TSXGraph.dereference([centerPoint, remotePoint[0], remotePoint[1]]), TSXGraph.defaultAttributes(attributes));
            }
            else {
                return new Circle(`circle`, TSXGraph.dereference([centerPoint, remotePoint]), TSXGraph.defaultAttributes(attributes));
            }
        }
        /** This element is used to provide a constructor for curve, which is just a wrapper for element Curve. A curve is a mapping from R to R^2. t mapsto (x(t),y(t)). The graph is drawn for t in the interval [a,b]. The following types of curves can be plotted: parametric curves: t mapsto (x(t),y(t)), where x() and y() are univariate functions. polar curves: curves commonly written with polar equations like spirals and cardioids. data plots: plot line segments through a given list of coordinates. */
        curve(xArray, yArray, left = -5, right = 5, attributes = {}) {
            return new Curve('Curve', [xArray, yArray, left, right,], attributes);
        }
        /** Array of Points */
        group(pointArray, attributes = {}) {
            return new Group('Group', [pointArray,], attributes);
        }
        /** Displays an image. */
        image(url, lowerLeft, widthHeight, attributes = {}) {
            return new Image('Image', [url, lowerLeft, widthHeight,], attributes);
        }
        // implementation of signature,  hidden from user
        implicitcurve(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 1) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([a,]);
                }
            }
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            return new Implicitcurve('implicitcurve', params, TSXGraph.defaultAttributes(attrs)); // as Implicitcurve
        }
        /** This element is used to provide a constructor for a general line given by two points.
                                       By setting additional properties a line can be used as an arrow and/or axis.

       *```js
                                       TSX.line([3,2],[3,3], {strokeColor:'blue',strokeWidth:5, strokeOpacity:.5})
                                       let P1 = TSX.point([3,2])
                                       TSX.line(p1,[3,3])

       *```

        also create lines with Segment, Arrow, Transform.Point, Circumcenter, Glider, and others.
                                       Look at .conic.line() for a line defined by the equation 'az +bx +cy = 0'
                           */
        line(p1, p2, attributes = {}) {
            return new Line('Line', [p1, p2,], attributes);
        }
        /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.

       *```js
                    TSX.point([3,2], {strokeColor:'blue',strokeWidth:5, strokeOpacity:.5})
                    TSX.point([3,3]), {fixed:true, showInfobox:true}
                    TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
                    TSX.point([1,2,2])  // three axis definition - [z,x,y]

       *```

        also create points with Intersection, Midpoint, Transform.Point, Circumcenter, Glider, and others. */
        point(position, attributes = {}) {
            return new Point('Point', position, TSXGraph.defaultAttributes(attributes));
        }
        /** Array of Points */
        polygon(pointArray, attributes = {}) {
            return new Polygon('Polygon', [pointArray,], attributes);
        }
        /** Construct and handle texts. The coordinates can either be abslute (i.e. respective to the coordinate system of the board) or be relative to the coordinates of an element given in Text#anchor. HTML, MathJaX, KaTeX and GEONExT syntax can be handled. There are two ways to display texts: using the text element of the renderer (canvas or svg). In most cases this is the suitable approach if speed matters. However, advanced rendering like MathJax, KaTeX or HTML/CSS are not possible. using HTML <div>. This is the most flexible approach. The drawback is that HTML can only be display ”above” the geometry elements. If HTML should be displayed in an inbetween layer, conder to use an element of type ForeignObject (available in svg renderer, only). */
        text(x, y, string, attributes = {}) {
            return new Text('Text', [x, y, string,], attributes);
        }
        /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. */
        sector(P1, P2, P3, attributes = {}) {
            return new Sector('Sector', [P1, P2, P3,], attributes);
        }
        /** Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
        vectorfield(fxfy, horizontalMesh = [-6, 25, 6], verticalMesh = [-6, 25, 6], attributes = {}) {
            return new Vectorfield('Vectorfield', [fxfy, horizontalMesh, verticalMesh,], attributes);
        }
        // implementation of signature,  hidden from user
        angle(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            if (arguments.length == 4) {
                if (isJSXAttribute(d)) {
                    attrs = TSXGraph.defaultAttributes(d);
                    params = TSXGraph.dereference([a, b, c,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c, d,]);
                }
            }
            if (arguments.length == 5) {
                if (isJSXAttribute(e)) {
                    attrs = TSXGraph.defaultAttributes(e);
                    params = TSXGraph.dereference([a, b, c, d,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c, d, e,]);
                }
            }
            return new Angle('angle', params, TSXGraph.defaultAttributes(attrs)); // as Angle
        }
        /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).

       *```js
                                   let arc = TSX.arc([-8,5],[-4,5],[-9,9]])

       *```

        To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
        arc(origin, from, to, attributes = {}) {
            return new Arc('Arc', [origin, from, to,], attributes);
        }
        /** Arrow defined by two points (like a Segment) with arrow at P2 */
        arrow(p1, p2, attributes = {}) {
            return new Arrow('Arrow', [p1, p2,], attributes);
        }
        // implementation of signature,  hidden from user
        parallel(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            if (arguments.length == 4) {
                if (isJSXAttribute(d)) {
                    attrs = TSXGraph.defaultAttributes(d);
                    params = TSXGraph.dereference([a, b, c,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c, d,]);
                }
            }
            if (arguments.length == 5) {
                if (isJSXAttribute(e)) {
                    attrs = TSXGraph.defaultAttributes(e);
                    params = TSXGraph.dereference([a, b, c, d,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c, d, e,]);
                }
            }
            return new Parallel('parallel', params, TSXGraph.defaultAttributes(attrs)); // as Parallel
        }
        /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
        arrowparallel(p1, p2, p3, attributes = {}) {
            return new Arrowparallel('Arrowparallel', [p1, p2, p3,], attributes);
        }
        /** Create an Axis with two points (like a Line) */
        axis(p1, p2, attributes = {}) {
            return new Axis('Axis', [p1, p2,], attributes);
        }
        /** Bisect an Angle defined with three points */
        bisector(p1, p2, p3, attributes = {}) {
            return new Bisector('Bisector', [p1, p2, p3,], attributes);
        }
        /** Bisect a Line defined with two points */
        bisectorlines(l1, l2, attributes = {}) {
            return new Bisectorlines('Bisectorlines', [l1, l2,], attributes);
        }
        /** create a button */
        button(x, y, label, handler, attributes = {}) {
            return new Button('Button', [x, y, label, handler,], attributes);
        }
        /** This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
        cardinalspline(data, funct, splineType, attributes = {}) {
            return new Cardinalspline('Cardinalspline', [data, funct, splineType,], attributes);
        }
        /** This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners. */
        checkbox(x, y, label, attributes = {}) {
            return new Checkbox('Checkbox', [x, y, label,], attributes);
        }
        /** Creates a Point at the center of a circle defined by 3 points */
        circumcenter(p1, p2, p3, attributes = {}) {
            return new Circumcenter('Circumcenter', [p1, p2, p3,], attributes);
        }
        /** Draw a circle defined by 3 points */
        circumcircle(p1, p2, p3, attributes = {}) {
            return new Circumcircle('Circumcircle', [p1, p2, p3,], attributes);
        }
        /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
        circumcircleArc(p1, p2, p3, attributes = {}) {
            return new CircumcircleArc('CircumcircleArc', [p1, p2, p3,], attributes);
        }
        /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
        circumcircleSector(p1, p2, p3, attributes = {}) {
            return new CircumcircleSector('CircumcircleSector', [p1, p2, p3,], attributes);
        }
        /** A comb to display domains of inequalities. */
        comb(p1, p2, attributes = {}) {
            return new Comb('Comb', [p1, p2,], attributes);
        }
        /** Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
        curveDifference(curve1, curve2, attributes = {}) {
            return new CurveDifference('CurveDifference', [curve1, curve2,], attributes);
        }
        /** Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
        curveIntersection(curve1, curve2, attributes = {}) {
            return new CurveIntersection('CurveIntersection', [curve1, curve2,], attributes);
        }
        /** Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
        curveUnion(curve1, curve2, attributes = {}) {
            return new CurveUnion('CurveUnion', [curve1, curve2,], attributes);
        }
        /** This element is used to provide a constructor for the graph showing the (numerical) derivative of a given curve. */
        derivative(curve, attributes = {}) {
            return new Derivative('Derivative', [curve,], attributes);
        }
        /** Two Points and Radius */
        ellipse(p1, p2, radius, attributes = {}) {
            return new Ellipse('Ellipse', [p1, p2, radius,], attributes);
        }
        /** This element is used to provide a constructor for functiongraph, which is just a wrapper for element Curve with JXG.Curve#X() set to x. The graph is drawn for x in the interval [a,b]. */
        functiongraph(funct, leftBorder, rightBorder, attributes = {}) {
            return new Functiongraph('Functiongraph', [funct, leftBorder, rightBorder,], attributes);
        }
        // implementation of signature,  hidden from user
        glider(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 1) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([a,]);
                }
            }
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            if (arguments.length == 4) {
                if (isJSXAttribute(d)) {
                    attrs = TSXGraph.defaultAttributes(d);
                    params = TSXGraph.dereference([a, b, c,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c, d,]);
                }
            }
            return new Glider('glider', params, TSXGraph.defaultAttributes(attrs)); // as Glider
        }
        // implementation of signature,  hidden from user
        grid(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 0) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([]);
                }
            }
            if (arguments.length == 1) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([a,]);
                }
            }
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            return new Grid('grid', params, TSXGraph.defaultAttributes(attrs)); // as Grid
        }
        /** Hatches can be used to mark congruent lines or curves. */
        hatch(line, numberHatches, attributes = {}) {
            return new Hatch('Hatch', [line, numberHatches,], attributes);
        }
        /** This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
        hyperbola(point1, point2, point3, start = -3.14, end = 3.14, attributes = {}) {
            return new Hyperbola('Hyperbola', [point1, point2, point3, start, end,], attributes);
        }
        /** Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html */
        incenter(p1, p2, p3, attributes = {}) {
            return new Incenter('Incenter', [p1, p2, p3,], attributes);
        }
        /** An incircle is given by three points. */
        incircle(p1, p2, p3, attributes = {}) {
            return new Incircle('Incircle', [p1, p2, p3,], attributes);
        }
        /** Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y */
        inequality(boundaryLine, attributes = {}) {
            return new Inequality('Inequality', [boundaryLine,], attributes);
        }
        /** This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners. */
        input(x, y, prompt, initial, attributes = {}) {
            return new Input('Input', [x, y, prompt, initial,], attributes);
        }
        /** This element is used to visualize the integral of a given curve over a given interval. */
        integral(range, curve, attributes = {}) {
            return new Integral('Integral', [range, curve,], attributes);
        }
        /** An intersection point is a point which lives on two JSXGraph elements, i.e. it is one point of the set consisting of the intersection points of the two elements. The following element types can be (mutually) intersected: line, circle, curve, polygon, polygonal chain. */
        intersection(element1, element2, attributes = {}) {
            return new Intersection('intersection', TSXGraph.dereference([element1, element2, 0]), TSXGraph.defaultAttributes(attributes));
        }
        /** A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
        majorArc(p1, p2, p3, attributes = {}) {
            return new MajorArc('MajorArc', [p1, p2, p3,], attributes);
        }
        /** A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        majorSector(p1, p2, p3, attributes = {}) {
            return new MajorSector('MajorSector', [p1, p2, p3,], attributes);
        }
        // implementation of signature,  hidden from user
        midpoint(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 1) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([a,]);
                }
            }
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            return new Midpoint('midpoint', params, TSXGraph.defaultAttributes(attrs)); // as Midpoint
        }
        /** A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
        minorArc(p1, p2, p3, attributes = {}) {
            return new MinorArc('MinorArc', [p1, p2, p3,], attributes);
        }
        /** A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        minorSector(p1, p2, p3, attributes = {}) {
            return new MinorSector('MinorSector', [p1, p2, p3,], attributes);
        }
        /** A mirror element of a point, line, circle, curve, polygon will be constructed. */
        mirrorelement(element, acrossPoint, attributes = {}) {
            return new mirrorelement('mirrorelement', [element, acrossPoint,], attributes);
        }
        /** A mirror point will be constructed. */
        mirrorpoint(p1, p2, attributes = {}) {
            return new Mirrorpoint('Mirrorpoint', [p1, p2,], attributes);
        }
        /** A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        nonReflexAngle(point1, point2, point3, attributes = {}) {
            return new NonReflexAngle('NonReflexAngle', [point1, point2, point3,], attributes);
        }
        // implementation of signature,  hidden from user
        normal(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 1) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([a,]);
                }
            }
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            return new Normal('normal', params, TSXGraph.defaultAttributes(attrs)); // as Normal
        }
        /** This is used to construct a point that is the orthogonal projection of a point to a line. */
        orthogonalprojection(point, line, attributes = {}) {
            return new Orthogonalprojection('Orthogonalprojection', [point, line,], attributes);
        }
        /** This element is used to provide a constructor for the ”other” intersection point. */
        otherIntersection(element1, element2, firstIntersection, attributes = {}) {
            return new OtherIntersection('otherintersection', TSXGraph.dereference([element1, element2, firstIntersection]), attributes);
        }
        /** This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix). */
        parabola(focalPoint, line, attributes = {}) {
            return new Parabola('Parabola', [focalPoint, line,], attributes);
        }
        /** This element is used to provide a constructor for a segment. It's strictly spoken just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to false. If there is a third variable then the segment has a fixed length (which may be a function, too). */
        segment(P1, P2, attributes = {}) {
            return new Segment('Segment', [P1, P2,], attributes);
        }
        /**  */
        parallelogram(p1, p2, p3, attributes = {}) {
            return new Parallelogram('Parallelogram', [p1, p2, p3,], attributes);
        }
        /** This element is used to provide a constructor for a perpendicular. */
        perpendicular(line, point, attributes = {}) {
            return new Perpendicular('Perpendicular', [line, point,], attributes);
        }
        /** This element is used to provide a constructor for a perpendicular segment. */
        perpendicularSegment(line, point, attributes = {}) {
            return new PerpendicularSegment('PerpendicularSegment', [line, point,], attributes);
        }
        /** This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle. */
        polarLine(conic, point, attributes = {}) {
            return new PolarLine('PolarLine', [conic, point,], attributes);
        }
        /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
        polePoint(conic, line, attributes = {}) {
            return new PolePoint('PolePoint', [conic, line,], attributes);
        }
        /** This element is used to provide a constructor for the radical axis with respect to two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
        radicalAxis(circle1, circle2, attributes = {}) {
            return new RadicalAxis('RadicalAxis', [circle1, circle2,], attributes);
        }
        /** A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        reflexAngle(point1, point2, point3, attributes = {}) {
            return new ReflexAngle('ReflexAngle', [point1, point2, point3,], attributes);
        }
        /** Constructs a regular polygon. It needs two points which define the base line and the number of vertices. */
        regularPolygon(P1, P2, nVertices, attributes = {}) {
            return new RegularPolygon('RegularPolygon', [P1, P2, nVertices,], attributes);
        }
        /** An input widget for choosing values from a given range of numbers.  Parameters are startpoint, endpoint,
                       and an array with [minimum, initialValue, maximum].  Query the value with slider.Value().  Set the slider either by
                       dragging the control or clicking on the line (you can disable clicking with {moveOnUp:false}

       *```js
                let s = TSX.slider([1, 2], [3, 2], [1, 5, 10])           //  query with s.Value()
                let s = TSX.slider([1, 2], [3, 2], [1, 5, 10],{snapWidth:1})     //  only values 1,2,3...
                let s = TSX.slider([1, 2], [3, 2], [1, 5, 10],{withTicks:false}) //  hide the ticks
                let s = TSX.slider[-3, 1], [1, 1], [-10, 1, 10], {
                   highline: { strokeColor: 'red'},        // to left of handle
                   baseline: { strokeColor: 'blue'},       // to right of handle
                   fillColor: 'red',                       // handle color
                   label: {fontSize: 16, strokeColor: 'orange'},
                   suffixLabel: ' x=',         // really a prefix
                   postLabel: ' meters'        // this is a suffix

       *``` */
        slider(StartPoint, EndPoint, minimum_initial_maximum, attributes = {}) {
            return new Slider('Slider', [StartPoint, EndPoint, minimum_initial_maximum,], attributes);
        }
        // implementation of signature,  hidden from user
        slopetriangle(a, b, c, d, e, f, g, h, i) {
            let newObject = {}; // just so it is initialized
            let params = [];
            let attrs = {};
            if (arguments.length == 1) {
                if (isJSXAttribute(a)) {
                    attrs = TSXGraph.defaultAttributes(a);
                    params = TSXGraph.dereference([]);
                }
                else {
                    params = TSXGraph.dereference([a,]);
                }
            }
            if (arguments.length == 2) {
                if (isJSXAttribute(b)) {
                    attrs = TSXGraph.defaultAttributes(b);
                    params = TSXGraph.dereference([a,]);
                }
                else {
                    params = TSXGraph.dereference([a, b,]);
                }
            }
            if (arguments.length == 3) {
                if (isJSXAttribute(c)) {
                    attrs = TSXGraph.defaultAttributes(c);
                    params = TSXGraph.dereference([a, b,]);
                }
                else {
                    params = TSXGraph.dereference([a, b, c,]);
                }
            }
            return new Slopetriangle('slopetriangle', params, TSXGraph.defaultAttributes(attrs)); // as Slopetriangle
        }
        /** This element is used to provide a constructor for (natural) cubic spline curves. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
        spline(points, attributes = {}) {
            return new Spline('spline', TSXGraph.dereference(points), TSXGraph.defaultAttributes(attributes));
        }
        /** With the element tangent the slope of a line, circle, or curve in a certain point can be visualized. A tangent is always constructed by a glider on a line, circle, or curve and describes the tangent in the glider point on that line, circle, or curve. */
        tangent(glider, attributes = {}) {
            return new Tangent('Tangent', [glider,], attributes);
        }
        /** A tape measure can be used to measure distances between points. */
        tapemeasure(P1, P2, attributes = {}) {
            return new Tapemeasure('Tapemeasure', [P1, P2,], attributes);
        }
        /** This element is used to provide a constructor for trace curve (simple locus curve), which is realized as a special curve. */
        tracecurve(glider, point, attributes = {}) {
            return new Tracecurve('Tracecurve', [glider, point,], attributes);
        }
        /** Here, lower is an array of the form [x, y] and dim is an array of the form [w, h]. The arrays [x, y] and [w, h] define the 2D frame into which the 3D cube is (roughly) projected. If the view azimuth=0 and elevation=0, the 3D view will cover a rectangle with lower left corner [x,y] and side lengths [w, h] of the board. The 'cube' is of the form [[x1, x2], [y1, y2], [z1, z2]] which determines the coordinate ranges of the 3D cube.  */
        view3D(x = -13, y = -10, w = 20, h = 20, xBounds = [-5, 5], yBounds = [-5, 5], zBounds = [-5, 5], attributes = {
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
        }) {
            return new View3D('view3D', [[x, y], [w, h], [xBounds, yBounds, zBounds]], attributes);
        }
    }
    TXG.TSXBoard = TSXBoard;
    class GeometryElement {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /**  */
        get x() {
            return this.elValue.x;
        }
        /**  */
        get y() {
            return this.elValue.y;
        }
        /**  */
        get elType() {
            return this.elValue.elType;
        }
        /**  */
        get name() {
            return this.elValue.name;
        }
        /**  */
        get isDraggable() {
            return this.elValue.isDraggable;
        }
        set isDraggable(param) {
            this.elValue.isDraggable = param;
        }
        /** Removes all ticks from a line or curve. */
        removeAllTicks() {
            return this.elValue.console.log(this);
            this.elValue.removeAllTicks();
        }
        /** Add an element as a child to the current element. */
        addChild() {
            return this.elValue.addChild();
        }
        /** Alias of JXG.EventEmitter.on. */
        addEvent() {
            return this.elValue.addEvent();
        }
        /** Adds ids of elements to the array this.parents. */
        addParents() {
            return this.elValue.addParents();
        }
        /** Rotate texts or images by a given degree. */
        addRotation() {
            return this.elValue.addRotation();
        }
        /** Adds ticks to this line or curve. */
        addTicks() {
            return this.elValue.addTicks();
        }
        /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
        animate() {
            return this.elValue.animate();
        }
        /** Dimensions of the smallest rectangle enclosing the element. */
        bounds() {
            return this.elValue.bounds();
        }
        /** Removes all objects generated by the trace function. */
        clearTrace() {
            return this.elValue.clearTrace();
        }
        /** Copy the element to background. */
        cloneToBackground() {
            return this.elValue.cloneToBackground();
        }
        /** Creates a label element for this geometry element. */
        createLabel() {
            return this.elValue.createLabel();
        }
        /** Format a number according to the locale set in the attribute ”intl”. */
        formatNumberLocale() {
            return this.elValue.formatNumberLocale();
        }
        /** Array of strings containing the polynomials defining the element. */
        generatePolynomial() {
            return this.elValue.generatePolynomial();
        }
        /** Get the value of the property key. */
        getAttribute() {
            return this.elValue.getAttribute();
        }
        /** Retrieve a copy of the current visProp. */
        getAttributes() {
            return this.elValue.getAttributes();
        }
        /** Returns the elements name. */
        getName() {
            return this.elValue.getName();
        }
        /** List of the element ids resp. */
        getParents() {
            return this.elValue.getParents();
        }
        /** Deprecated alias for JXG.GeometryElement#getAttribute. */
        getProperty() {
            return this.elValue.getProperty();
        }
        /** The type of the element as used in JXG.Board#create. */
        getType() {
            return this.elValue.getType();
        }
        /** Move an element to its nearest grid point. */
        handleSnapToGrid() {
            return this.elValue.handleSnapToGrid();
        }
        /** Checks whether (x,y) is near the element. */
        hasPoint(x, y) {
            return this.elValue.hasPoint(x, y);
        }
        /** Hide the element. */
        hide() {
            return this.elValue.hide();
        }
        /** Hide the element. */
        hideElement() {
            return this.elValue.hideElement();
        }
        /**  */
        labelColor() {
            return this.elValue.labelColor();
        }
        /** Uses the ”normal” properties of the element. */
        noHighlight() {
            return this.elValue.noHighlight();
        }
        /** Removes the element from the construction. */
        remove() {
            return this.elValue.remove();
        }
        /** Remove an element as a child from the current element. */
        removeChild() {
            return this.elValue.removeChild();
        }
        /** Alias of JXG.EventEmitter.off. */
        removeEvent() {
            return this.elValue.removeEvent();
        }
        /** Removes ticks identified by parameter named tick from this line or curve. */
        removeTicks() {
            return this.elValue.removeTicks();
        }
        /** Determines whether the element has arrows at start or end of the arc. */
        setArrow() {
            return this.elValue.setArrow();
        }
        /** Sets an arbitrary number of attributes. */
        setAttribute(attrs) {
            return this.elValue.setAttribute(attrs);
        }
        /** Sets a label and its text If label doesn't exist, it creates one */
        setLabel() {
            return this.elValue.setLabel();
        }
        /** Updates the element's label text, strips all html. */
        setLabelText() {
            return this.elValue.setLabelText();
        }
        /** Updates the element's label text and the element's attribute ”name”, strips all html. */
        setName() {
            return this.elValue.setName();
        }
        /** Sets ids of elements to the array this.parents. */
        setParents() {
            return this.elValue.setParents();
        }
        /** Translates the object by (x, y). */
        setPosition(transform) {
            return this.elValue.setPosition(COORDS_BY_USER, transform);
        }
        /** Moves an element by the difference of two coordinates. */
        setPositionDirectly(x, y) {
            return this.elValue.setPositionDirectly(COORDS_BY_USER, [x, y]);
        }
        /** Deprecated alias for JXG.GeometryElement#setAttribute. */
        setProperty() {
            return this.elValue.setProperty();
        }
        /** Make the element visible. */
        show() {
            return this.elValue.show();
        }
        /** Make the element visible. */
        showElement() {
            return this.elValue.showElement();
        }
        /** Snaps the element to points. */
        snapToPoints() {
            return this.elValue.snapToPoints();
        }
        /** Checks if locale is enabled in the attribute. */
        useLocale() {
            return this.elValue.useLocale();
        }
    }
    TXG.GeometryElement = GeometryElement;
    class GeometryElement3D {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /**  */
        get element2D() {
            return this.elValue.element2D;
        }
        /**  */
        get is3D() {
            return this.elValue.is3D;
        }
        /**  */
        get view() {
            return this.elValue.view;
        }
        /**  */
        get strokeColor() {
            return this.elValue.strokeColor;
        }
        /**  */
        get strokeWidth() {
            return this.elValue.strokeWidth;
        }
        /**  */
        get fillColor() {
            return this.elValue.fillColor;
        }
        /**  */
        get visible() {
            return this.elValue.visible;
        }
    }
    TXG.GeometryElement3D = GeometryElement3D;
    class Board {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
    }
    TXG.Board = Board;
    class Infobox {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
    }
    TXG.Infobox = Infobox;
    class CA {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
        expandDerivatives() {
            return this.elValue.expandDerivatives();
        }
        /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
        setMath() {
            return this.elValue.setMath();
        }
    }
    TXG.CA = CA;
    class Chart extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get elements() {
            return this.elValue.elements;
        }
        /** Create bar chart defined by two data arrays. */
        drawBar() {
            return this.elValue.drawBar();
        }
        /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
        drawFit() {
            return this.elValue.drawFit();
        }
        /** Create line chart defined by two data arrays. */
        drawLine() {
            return this.elValue.drawLine();
        }
        /** Create pie chart. */
        drawPie() {
            return this.elValue.drawPie();
        }
        /** Create chart consisting of JSXGraph points. */
        drawPoints() {
            return this.elValue.drawPoints();
        }
        /** Create radar chart. */
        drawRadar() {
            return this.elValue.drawRadar();
        }
        /** Create line chart that consists of a natural spline curve defined by two data arrays. */
        drawSpline() {
            return this.elValue.drawSpline();
        }
        /** Template for dynamic charts update. */
        updateDataArray() {
            return this.elValue.updateDataArray();
        }
    }
    TXG.Chart = Chart;
    class Circle extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Circle area */
        Area() {
            return this.elValue.Area();
        }
        /** Perimeter (circumference) of circle. */
        Perimeter() {
            return this.elValue.Perimeter();
        }
        /** Calculates the radius of the circle. */
        Radius() {
            return this.elValue.Radius();
        }
        /** Treats the circle as parametric curve and calculates its X coordinate. */
        X() {
            return this.elValue.X();
        }
        /** Treats the circle as parametric curve and calculates its Y coordinate. */
        Y() {
            return this.elValue.Y();
        }
        /** Treat the circle as parametric curve and calculates its Z coordinate. */
        Z() {
            return this.elValue.Z();
        }
    }
    TXG.Circle = Circle;
    class Complex {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /**  */
        get absval() {
            return this.elValue.absval;
        }
        /**  */
        get angle() {
            return this.elValue.angle;
        }
        /**  */
        get imaginary() {
            return this.elValue.imaginary;
        }
        /**  */
        get isComplex() {
            return this.elValue.isComplex;
        }
        /**  */
        get real() {
            return this.elValue.real;
        }
        /** Add another complex number to this complex number. */
        add() {
            return this.elValue.add();
        }
        /** Conjugate a complex number in place. */
        conj() {
            return this.elValue.conj();
        }
        /** Divide this complex number by the given complex number. */
        div() {
            return this.elValue.div();
        }
        /** Multiply another complex number to this complex number. */
        mult() {
            return this.elValue.mult();
        }
        /** Subtract another complex number from this complex number. */
        sub() {
            return this.elValue.sub();
        }
        /** Converts a complex number into a string. */
        toString() {
            return this.elValue.toString();
        }
    }
    TXG.Complex = Complex;
    class Composition {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /** Adds an element to the composition container. */
        add() {
            return this.elValue.add();
        }
        /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
        fullUpdate() {
            return this.elValue.fullUpdate();
        }
        /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
        highlight() {
            return this.elValue.highlight();
        }
        /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
        noHighlight() {
            return this.elValue.noHighlight();
        }
        /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
        prepareUpdate() {
            return this.elValue.prepareUpdate();
        }
        /** Remove an element from the composition container. */
        remove() {
            return this.elValue.remove();
        }
        /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
        setParents() {
            return this.elValue.setParents();
        }
        /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
        updateRenderer() {
            return this.elValue.updateRenderer();
        }
    }
    TXG.Composition = Composition;
    class Coords {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /**  */
        get board() {
            return this.elValue.board;
        }
        /**  */
        get emitter() {
            return this.elValue.emitter;
        }
        /**  */
        get scrCoords() {
            return this.elValue.scrCoords;
        }
        /**  */
        get usrCoords() {
            return this.elValue.usrCoords;
        }
        /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
        isReal() {
            return this.elValue.isReal();
        }
        /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
        setCoordinates() {
            return this.elValue.setCoordinates();
        }
    }
    TXG.Coords = Coords;
    class Curve extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get dataX() {
            return this.elValue.dataX;
        }
        set dataX(param) {
            this.elValue.dataX = param;
        }
        /**  */
        get dataY() {
            return this.elValue.dataY;
        }
        set dataY(param) {
            this.elValue.dataY = param;
        }
        /**  */
        get ticks() {
            return this.elValue.ticks;
        }
        /** Allocate points in the Coords array this.points */
        allocatePoints() {
            return this.elValue.allocatePoints();
        }
        /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
        generateTerm() {
            return this.elValue.generateTerm();
        }
        /** Gives the default value of the right bound for the curve. */
        maxX() {
            return this.elValue.maxX();
        }
        /** Gives the default value of the left bound for the curve. */
        minX() {
            return this.elValue.minX();
        }
        /** Shift the curve by the vector 'where'. */
        moveTo() {
            return this.elValue.moveTo();
        }
        /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
        notifyParents() {
            return this.elValue.notifyParents();
        }
        /** Computes the curve path */
        updateCurve() {
            return this.elValue.updateCurve();
        }
        /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
        updateDataArray(func) {
            return this.elValue.updateDataArray(func);
        }
        /** Updates the visual contents of the curve. */
        updateRenderer() {
            return this.elValue.updateRenderer();
        }
        /** Applies the transformations of the curve to the given point p. */
        updateTransform() {
            return this.elValue.updateTransform();
        }
        /** The parametric function which defines the x-coordinate of the curve. */
        X() {
            return this.elValue.X();
        }
        /** The parametric function which defines the y-coordinate of the curve. */
        Y() {
            return this.elValue.Y();
        }
        /** Treat the curve as curve with homogeneous coordinates. */
        Z() {
            return this.elValue.Z();
        }
    }
    TXG.Curve = Curve;
    class Curve3D extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Function which maps u to x; i.e. */
        X() {
            return this.elValue.X();
        }
        /** Function which maps u to y; i.e. */
        Y() {
            return this.elValue.Y();
        }
        /** Function which maps u to z; i.e. */
        Z() {
            return this.elValue.Z();
        }
    }
    TXG.Curve3D = Curve3D;
    class Dump {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /** Adds markers to every element of the board */
        addMarkers() {
            return this.elValue.addMarkers();
        }
        /** Converts an array of different values into a parameter string that can be used by the code generators. */
        arrayToParamStr() {
            return this.elValue.arrayToParamStr();
        }
        /** Removes markers from every element on the board. */
        deleteMarkers() {
            return this.elValue.deleteMarkers();
        }
        /** Generate a save-able structure with all elements. */
        dump() {
            return this.elValue.dump();
        }
        /** Eliminate default values given by JXG.Options from the attributes object. */
        minimizeObject() {
            return this.elValue.minimizeObject();
        }
        /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
        prepareAttributes() {
            return this.elValue.prepareAttributes();
        }
        /** Stringifies a string, i.e. */
        str() {
            return this.elValue.str();
        }
        /** Saves the construction in board to JavaScript. */
        toJavaScript() {
            return this.elValue.toJavaScript();
        }
        /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
        toJCAN() {
            return this.elValue.toJCAN();
        }
        /** Saves the construction in board to JessieCode. */
        toJessie() {
            return this.elValue.toJessie();
        }
    }
    TXG.Dump = Dump;
    class ForeignObject {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /**  */
        get content() {
            return this.elValue.content;
        }
        /**  */
        get size() {
            return this.elValue.size;
        }
        /** Returns the height of the foreignObject in user coordinates. */
        H() {
            return this.elValue.H();
        }
        /** Checks whether (x,y) is over or near the image; */
        hasPoint() {
            return this.elValue.hasPoint();
        }
        /** Set the width and height of the foreignObject. */
        setSize() {
            return this.elValue.setSize();
        }
        /** Returns the width of the foreignObject in user coordinates. */
        W() {
            return this.elValue.W();
        }
    }
    TXG.ForeignObject = ForeignObject;
    class Group extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get coords() {
            return this.elValue.coords;
        }
        /** Adds all points in a group to this group. */
        addGroup() {
            return this.elValue.addGroup();
        }
        /** Adds ids of elements to the array this.parents. */
        addParents() {
            return this.elValue.addParents();
        }
        /** Adds an Point to this group. */
        addPoint() {
            return this.elValue.addPoint();
        }
        /** Adds multiple points to this group. */
        addPoints() {
            return this.elValue.addPoints();
        }
        /** Adds a point to the set of rotation points of the group. */
        addRotationPoint() {
            return this.elValue.addRotationPoint();
        }
        /** Adds a point to the set of the scale points of the group. */
        addScalePoint() {
            return this.elValue.addScalePoint();
        }
        /** List of the element ids resp. */
        getParents() {
            return this.elValue.getParents();
        }
        /** Removes a point from the group. */
        removePoint() {
            return this.elValue.removePoint();
        }
        /** Removes the rotation property from a point of the group. */
        removeRotationPoint() {
            return this.elValue.removeRotationPoint();
        }
        /** Removes the scaling property from a point of the group. */
        removeScalePoint() {
            return this.elValue.removeScalePoint();
        }
        /** Removes the translation property from a point of the group. */
        removeTranslationPoint() {
            return this.elValue.removeTranslationPoint();
        }
        /** Sets ids of elements to the array this.parents. */
        setParents() {
            return this.elValue.setParents();
        }
        /**  */
        setProperty() {
            return this.elValue.setProperty();
        }
        /** Sets the center of rotation for the group. */
        setRotationCenter() {
            return this.elValue.setRotationCenter();
        }
        /** Sets the rotation points of the group. */
        setRotationPoints() {
            return this.elValue.setRotationPoints();
        }
        /** Sets the center of scaling for the group. */
        setScaleCenter() {
            return this.elValue.setScaleCenter();
        }
        /** Sets the scale points of the group. */
        setScalePoints() {
            return this.elValue.setScalePoints();
        }
        /** Sets the translation points of the group. */
        setTranslationPoints() {
            return this.elValue.setTranslationPoints();
        }
        /** Releases all elements of this group. */
        ungroup() {
            return this.elValue.ungroup();
        }
    }
    TXG.Group = Group;
    class Image extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get size() {
            return this.elValue.size;
        }
        /**  */
        get url() {
            return this.elValue.url;
        }
        /** Returns the height of the image in user coordinates. */
        H() {
            return this.elValue.H();
        }
        /** Checks whether (x,y) is over or near the image; */
        hasPoint() {
            return this.elValue.hasPoint();
        }
        /** Set the width and height of the image. */
        setSize() {
            return this.elValue.setSize();
        }
        /** Returns the width of the image in user coordinates. */
        W() {
            return this.elValue.W();
        }
    }
    TXG.Image = Image;
    class Implicitcurve extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Implicitcurve = Implicitcurve;
    class Legend {
        elValue = {};
        scaleXY = 1; // used by V2 math library
        constructor(className, params, attrs) {
            if (className == 'Polygon' || className == 'Group') {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params.flat()), TSXGraph.defaultAttributes(attrs));
            }
            else {
                this.elValue = Math.board.create(className, TSXGraph.dereference(params), TSXGraph.defaultAttributes(attrs));
            }
            if (Object.hasOwn(attrs, 'scaleXY')) {
                this.scaleXY = attrs.scaleXY; // for V2 Math
            }
        }
        /**  */
        get colors() {
            return this.elValue.colors;
        }
        /**  */
        get labels() {
            return this.elValue.labels;
        }
        /**  */
        get rowHeight() {
            return this.elValue.rowHeight;
        }
        /**  */
        get style() {
            return this.elValue.style;
        }
    }
    TXG.Legend = Legend;
    class Line extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get defaultTicks() {
            return this.elValue.defaultTicks;
        }
        /**  */
        get parentPolygon() {
            return this.elValue.parentPolygon;
        }
        /** Attributes for first defining point of the line. */
        get point1() {
            return this.elValue.point1;
        }
        /** Attributes for second defining point of the line. */
        get point2() {
            return this.elValue.point2;
        }
        /** Attributes for ticks of the line. */
        get ticks() {
            return this.elValue.ticks;
        }
        /** Determines the angle between the positive x axis and the line. */
        getAngle() {
            return this.elValue.getAngle();
        }
        /** Calculates the y intersect of the line. */
        getRise() {
            return this.elValue.getRise();
        }
        /** Alias for line.Slope */
        getSlope() {
            return this.elValue.getSlope();
        }
        /** Checks whether (x,y) is near the line. */
        hasPoint() {
            return this.elValue.hasPoint();
        }
        /** The distance between the two points defining the line. */
        L() {
            return this.elValue.L();
        }
        /** Calculates the slope of the line. */
        Slope() {
            return this.elValue.Slope();
        }
        /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
        X() {
            return this.elValue.X();
        }
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Y() {
            return this.elValue.Y();
        }
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Z() {
            return this.elValue.Z();
        }
    }
    TXG.Line = Line;
    class Line3D extends GeometryElement3D {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get direction() {
            return this.elValue.direction;
        }
        /**  */
        get point() {
            return this.elValue.point;
        }
        /**  */
        get point1() {
            return this.elValue.point1;
        }
        /**  */
        get point2() {
            return this.elValue.point2;
        }
        /**  */
        get range() {
            return this.elValue.range;
        }
    }
    TXG.Line3D = Line3D;
    class Point extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        coords() {
            return this.elValue.coords();
        }
        /**  */
        distance(toPoint) {
            return this.elValue.Dist(TSXGraph.dereference(toPoint));
        }
        /** Set the face of a point element. */
        face(style) {
            return this.elValue.face(style);
        }
        /** Updates the position of the point. */
        update() {
            return this.elValue.update();
        }
        /**  */
        X() {
            return this.elValue.X();
        }
        /**  */
        Y() {
            return this.elValue.Y();
        }
        /**  */
        Z() {
            return this.elValue.Z();
        }
        /** Point location in vector form [n,n] */
        XY() {
            return [this.elValue.X(), this.elValue.Y()];
        }
    }
    TXG.Point = Point;
    class Point3D extends GeometryElement3D {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get slide() {
            return this.elValue.slide;
        }
        /** Set the position of a 3D point. */
        setPosition() {
            return this.elValue.setPosition();
        }
        /** Get x-coordinate of a 3D point. */
        X() {
            return this.elValue.X();
        }
        /** Get y-coordinate of a 3D point. */
        Y() {
            return this.elValue.Y();
        }
        /** Get z-coordinate of a 3D point. */
        Z() {
            return this.elValue.Z();
        }
    }
    TXG.Point3D = Point3D;
    class Polygon extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Attributes for the polygon border lines. */
        get borders() {
            return this.elValue.borders;
        }
        /** Attributes for the polygon vertices. */
        get vertices() {
            return this.elValue.vertices;
        }
        /** Uses the boards renderer to update the polygon. */
        updateRenderer() {
            return this.elValue.updateRenderer();
        }
    }
    TXG.Polygon = Polygon;
    class Text extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get size() {
            return this.elValue.size;
        }
        /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
        bounds() {
            return this.elValue.bounds();
        }
        /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
        crudeSizeEstimate() {
            return this.elValue.crudeSizeEstimate();
        }
        /** Returns the value of the attribute ”anchorX”. */
        getAnchorX() {
            return this.elValue.getAnchorX();
        }
        /** Returns the value of the attribute ”anchorY”. */
        getAnchorY() {
            return this.elValue.getAnchorY();
        }
        /** Return the width of the text element. */
        getSize() {
            return this.elValue.getSize();
        }
        /** Replace _{} by <sub> */
        replaceSub() {
            return this.elValue.replaceSub();
        }
        /** Replace ^{} by <sup> */
        replaceSup() {
            return this.elValue.replaceSup();
        }
        /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
        setAutoPosition() {
            return this.elValue.setAutoPosition();
        }
        /** Move the text to new coordinates. */
        setCoords(x, y) {
            return this.elValue.setCoords(x, y);
        }
        /** Defines new content. */
        setText(newText) {
            return this.elValue.setText(newText);
        }
        /** Defines new content but converts < and > to HTML entities before updating the DOM. */
        setTextJessieCode() {
            return this.elValue.setTextJessieCode();
        }
        /** Evaluates the text. */
        update() {
            return this.elValue.update();
        }
        /** Recompute the width and the height of the text box. */
        updateSize() {
            return this.elValue.updateSize();
        }
        /** Decode unicode entities into characters. */
        utf8_decode() {
            return this.elValue.utf8_decode();
        }
    }
    TXG.Text = Text;
    class Ticks extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get board() {
            return this.elValue.board;
        }
        /**  */
        get equidistant() {
            return this.elValue.equidistant;
        }
        /**  */
        get fixedTicks() {
            return this.elValue.fixedTicks;
        }
        /**  */
        get labelCounter() {
            return this.elValue.labelCounter;
        }
        /** User defined labels for special ticks. */
        get labels() {
            return this.elValue.labels;
        }
        /**  */
        get labelsData() {
            return this.elValue.labelsData;
        }
        /**  */
        get line() {
            return this.elValue.line;
        }
        /**  */
        get ticks() {
            return this.elValue.ticks;
        }
        /** Formats label texts to make labels displayed in scientific notation look beautiful. */
        beautifyScientificNotationLabel() {
            return this.elValue.beautifyScientificNotationLabel();
        }
        /** Checks whether (x,y) is near the line. */
        hasPoint() {
            return this.elValue.hasPoint();
        }
        /** Sets x and y coordinate of the tick. */
        setPositionDirectly() {
            return this.elValue.setPositionDirectly();
        }
        /** Uses the boards renderer to update the arc. */
        updateRenderer() {
            return this.elValue.updateRenderer();
        }
    }
    TXG.Ticks = Ticks;
    class Turtle extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Move the turtle backwards. */
        back() {
            return this.elValue.back();
        }
        /** Alias for JXG.Turtle#back */
        bk() {
            return this.elValue.bk();
        }
        /** Removes the turtle curve from the board. */
        clean() {
            return this.elValue.clean();
        }
        /** Removes the turtle completely and resets it to its initial position and direction. */
        clearScreen() {
            return this.elValue.clearScreen();
        }
        /** Alias for JXG.Turtle#clearScreen */
        cs() {
            return this.elValue.cs();
        }
        /** The ”co”-coordinate of the turtle curve at position t is returned. */
        evalAt() {
            return this.elValue.evalAt();
        }
        /** Alias for JXG.Turtle#forward */
        fd() {
            return this.elValue.fd();
        }
        /** Move the turtle forward. */
        forward() {
            return this.elValue.forward();
        }
        /** Get most recently set turtle color. */
        getHighlightPenColor() {
            return this.elValue.getHighlightPenColor();
        }
        /** Get most recently set turtle color. */
        getPenColor() {
            return this.elValue.getPenColor();
        }
        /** Get most recently set turtle size (in pixel). */
        getPenSize() {
            return this.elValue.getPenSize();
        }
        /** Checks whether (x,y) is near the curve. */
        hasPoint() {
            return this.elValue.hasPoint();
        }
        /** Sets the visibility of the turtle head to false, */
        hideTurtle() {
            return this.elValue.hideTurtle();
        }
        /** Moves the turtle to position [0,0]. */
        home() {
            return this.elValue.home();
        }
        /** Alias for JXG.Turtle#hideTurtle */
        ht() {
            return this.elValue.ht();
        }
        /** Rotate the turtle direction to the right. */
        left() {
            return this.elValue.left();
        }
        /** Rotates the turtle into a new direction. */
        lookTo() {
            return this.elValue.lookTo();
        }
        /** Alias for JXG.Turtle#left */
        lt() {
            return this.elValue.lt();
        }
        /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
        maxX() {
            return this.elValue.maxX();
        }
        /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
        minX() {
            return this.elValue.minX();
        }
        /** Moves the turtle to a given coordinate pair. */
        moveTo() {
            return this.elValue.moveTo();
        }
        /** Alias for JXG.Turtle#penDown */
        pd() {
            return this.elValue.pd();
        }
        /** Pen down, continues visible drawing */
        penDown() {
            return this.elValue.penDown();
        }
        /** Pen up, stops visible drawing */
        penUp() {
            return this.elValue.penUp();
        }
        /** Alias for JXG.Turtle#popTurtle */
        pop() {
            return this.elValue.pop();
        }
        /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
        popTurtle() {
            return this.elValue.popTurtle();
        }
        /** Alias for JXG.Turtle#penUp */
        pu() {
            return this.elValue.pu();
        }
        /** Alias for JXG.Turtle#pushTurtle */
        push() {
            return this.elValue.push();
        }
        /** Pushes the position of the turtle on the stack. */
        pushTurtle() {
            return this.elValue.pushTurtle();
        }
        /** Rotate the turtle direction to the right */
        right() {
            return this.elValue.right();
        }
        /** Alias for JXG.Turtle#right */
        rt() {
            return this.elValue.rt();
        }
        /** Sets the highlight pen color. */
        setHighlightPenColor() {
            return this.elValue.setHighlightPenColor();
        }
        /** Sets the pen color. */
        setPenColor() {
            return this.elValue.setPenColor();
        }
        /** Sets the pen size. */
        setPenSize() {
            return this.elValue.setPenSize();
        }
        /** Moves the turtle without drawing to a new position */
        setPos() {
            return this.elValue.setPos();
        }
        /** Sets the visibility of the turtle head to true, */
        showTurtle() {
            return this.elValue.showTurtle();
        }
        /** Alias for JXG.Turtle#showTurtle */
        st() {
            return this.elValue.st();
        }
        /** if t is not supplied the x-coordinate of the turtle is returned. */
        X() {
            return this.elValue.X();
        }
        /** if t is not supplied the y-coordinate of the turtle is returned. */
        Y() {
            return this.elValue.Y();
        }
        /**  */
        Z() {
            return this.elValue.Z();
        }
    }
    TXG.Turtle = Turtle;
    class Sector extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get point1() {
            return this.elValue.point1;
        }
        /**  */
        get point2() {
            return this.elValue.point2;
        }
        /**  */
        get point3() {
            return this.elValue.point3;
        }
        /**  */
        get point4() {
            return this.elValue.point4;
        }
        /** Checks whether (x,y) is within the area defined by the sector. */
        hasPointSector() {
            return this.elValue.hasPointSector();
        }
        /** Returns the radius of the sector. */
        Radius() {
            return this.elValue.Radius();
        }
    }
    TXG.Sector = Sector;
    class Vectorfield extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Set the defining functions of vector field. */
        setF() {
            return this.elValue.setF();
        }
    }
    TXG.Vectorfield = Vectorfield;
    class Angle extends Sector {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get point() {
            return this.elValue.point;
        }
        /** Frees an angle from a prescribed value. */
        free() {
            return this.elValue.free();
        }
        /** Set an angle to a prescribed value given in radians. */
        setAngle() {
            return this.elValue.setAngle();
        }
        /** Returns the value of the angle. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Angle = Angle;
    class Arc extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get anglepoint() {
            return this.elValue.anglepoint;
        }
        /**  */
        get radiuspoint() {
            return this.elValue.radiuspoint;
        }
        /**  */
        getRadius() {
            return this.elValue.getRadius();
        }
        /** Checks whether (x,y) is within the sector defined by the arc. */
        hasPointSector() {
            return this.elValue.hasPointSector();
        }
        /** Determines the arc's current radius. */
        Radius() {
            return this.elValue.Radius();
        }
        /** Returns the length of the arc or the value of the angle spanned by the arc. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Arc = Arc;
    class Arrow extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Arrow = Arrow;
    class Parallel extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Parallel = Parallel;
    class Arrowparallel extends Parallel {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Arrowparallel = Arrowparallel;
    class Axis extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get defaultTicks() {
            return this.elValue.defaultTicks;
        }
    }
    TXG.Axis = Axis;
    class Bisector extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Bisector = Bisector;
    class Bisectorlines extends Composition {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Bisectorlines = Bisectorlines;
    class Button extends Text {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Button = Button;
    class Cardinalspline extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Cardinalspline = Cardinalspline;
    class Checkbox extends Text {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Returns the value of the checkbox element */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Checkbox = Checkbox;
    class Circumcenter extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Circumcenter = Circumcenter;
    class Circumcircle extends Circle {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Circumcircle = Circumcircle;
    class CircumcircleArc extends Arc {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.CircumcircleArc = CircumcircleArc;
    class CircumcircleSector extends Sector {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get center() {
            return this.elValue.center;
        }
    }
    TXG.CircumcircleSector = CircumcircleSector;
    class Comb extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Comb = Comb;
    class Conic extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Conic = Conic;
    class CurveDifference extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.CurveDifference = CurveDifference;
    class CurveIntersection extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.CurveIntersection = CurveIntersection;
    class CurveUnion extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.CurveUnion = CurveUnion;
    class Derivative extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Derivative = Derivative;
    class Ellipse extends Conic {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Ellipse = Ellipse;
    class ParametricSurface3D extends Curve3D {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.ParametricSurface3D = ParametricSurface3D;
    class Functiongraph extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Functiongraph = Functiongraph;
    class Functiongraph3D extends Curve3D {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Functiongraph3D = Functiongraph3D;
    class Glider extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Animate the point. */
        startAnimation(direction, stepCount, delayMSec) {
            return this.elValue.startAnimation(direction, stepCount, delayMSec);
        }
    }
    TXG.Glider = Glider;
    class Grid extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Grid = Grid;
    class Hatch extends Ticks {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get ticksDistance() {
            return this.elValue.ticksDistance;
        }
    }
    TXG.Hatch = Hatch;
    class Hyperbola extends Conic {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Hyperbola = Hyperbola;
    class Incenter extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Incenter = Incenter;
    class Incircle extends Circle {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Incircle = Incircle;
    class Inequality extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Inequality = Inequality;
    class Input extends Text {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Sets value of the input element. */
        set() {
            return this.elValue.set();
        }
        /** Returns the value (content) of the input element */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Input = Input;
    class Integral extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Attributes of the (left) base point of the integral. */
        get baseLeft() {
            return this.elValue.baseLeft;
        }
        /** Attributes of the (right) base point of the integral. */
        get baseRight() {
            return this.elValue.baseRight;
        }
        /** Attributes of the (left) starting point of the integral. */
        get curveLeft() {
            return this.elValue.curveLeft;
        }
        /** Attributes of the (right) end point of the integral. */
        get curveRight() {
            return this.elValue.curveRight;
        }
        /** Returns the current value of the integral. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Integral = Integral;
    class Intersection extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Intersection = Intersection;
    class Label extends Text {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Label = Label;
    class Locus extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get ctime() {
            return this.elValue.ctime;
        }
        /**  */
        get eq() {
            return this.elValue.eq;
        }
    }
    TXG.Locus = Locus;
    class MajorArc extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.MajorArc = MajorArc;
    class MajorSector extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.MajorSector = MajorSector;
    class Metapostspline extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Metapostspline = Metapostspline;
    class Midpoint extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Midpoint = Midpoint;
    class MinorArc extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.MinorArc = MinorArc;
    class MinorSector extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.MinorSector = MinorSector;
    class mirrorelement extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.mirrorelement = mirrorelement;
    class Mirrorpoint extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Mirrorpoint = Mirrorpoint;
    class NonReflexAngle extends Angle {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.NonReflexAngle = NonReflexAngle;
    class Normal extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Normal = Normal;
    class Orthogonalprojection extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Orthogonalprojection = Orthogonalprojection;
    class OtherIntersection extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.OtherIntersection = OtherIntersection;
    class Parabola extends Conic {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Parabola = Parabola;
    class Parallelpoint extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Parallelpoint = Parallelpoint;
    class Segment extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Segment = Segment;
    class Parallelogram extends Polygon {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Parallelogram = Parallelogram;
    class Perpendicular extends Segment {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Perpendicular = Perpendicular;
    class PerpendicularPoint extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.PerpendicularPoint = PerpendicularPoint;
    class PerpendicularSegment extends Segment {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get point() {
            return this.elValue.point;
        }
    }
    TXG.PerpendicularSegment = PerpendicularSegment;
    class PolarLine extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.PolarLine = PolarLine;
    class PolePoint extends Point {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.PolePoint = PolePoint;
    class PolygonalChain extends Polygon {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.PolygonalChain = PolygonalChain;
    class RadicalAxis extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.RadicalAxis = RadicalAxis;
    class Reflection extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Reflection = Reflection;
    class ReflexAngle extends Angle {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.ReflexAngle = ReflexAngle;
    class RegularPolygon extends Polygon {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.RegularPolygon = RegularPolygon;
    class Riemannsum extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Returns the value of the Riemann sum, i.e. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Riemannsum = Riemannsum;
    class Semicircle extends Arc {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get midpoint() {
            return this.elValue.midpoint;
        }
    }
    TXG.Semicircle = Semicircle;
    class Slider extends Glider {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Sets the maximum value of the slider. */
        setMax() {
            return this.elValue.setMax();
        }
        /** Sets the minimum value of the slider. */
        setMin() {
            return this.elValue.setMin();
        }
        /** Sets the value of the slider. */
        setValue() {
            return this.elValue.setValue();
        }
        /** Returns the current slider value. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Slider = Slider;
    class Slopefield extends Vectorfield {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Set the defining functions of slope field. */
        setF() {
            return this.elValue.setF();
        }
    }
    TXG.Slopefield = Slopefield;
    class Slopetriangle extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Returns the value of the slope triangle, that is the slope of the tangent. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Slopetriangle = Slopetriangle;
    class Smartlabel extends Text {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Smartlabel = Smartlabel;
    class Spline extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Spline = Spline;
    class Stepfunction extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Stepfunction = Stepfunction;
    class Tangent extends Line {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Tangent = Tangent;
    class Tapemeasure extends Segment {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /** Returns the length of the tape measure. */
        Value() {
            return this.elValue.Value();
        }
    }
    TXG.Tapemeasure = Tapemeasure;
    class Tracecurve extends Curve {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
    }
    TXG.Tracecurve = Tracecurve;
    class Transform extends GeometryElement {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        applyOnce(element) {
            return this.elValue.applyOnce(TSXGraph.dereference(element));
        }
        /**  */
        bindTo(element) {
            return this.elValue.bindTo(TSXGraph.dereference(element));
        }
        /**  */
        setMatrix() {
            return this.elValue.setMatrix();
        }
    }
    TXG.Transform = Transform;
    class View3D extends GeometryElement3D {
        constructor(className, params, attrs) {
            super(className, params, attrs);
        }
        /**  */
        get matrix3D() {
            return this.elValue.matrix3D;
        }
        /**  */
        point3D(xyz, attributes = {}) {
            return this.elValue.create("point3d", [xyz], attributes);
        }
        /**  */
        line3D(point1, point2, attributes = {}) {
            return this.elValue.create("line3d", TSXGraph.dereference([point1, point2]), attributes);
        }
        /**  */
        curve3D(xFunction, yFunction, zFunction, range, attributes = {}) {
            return this.elValue.create("curve3d", TSXGraph.dereference([xFunction, yFunction, zFunction, range]), attributes);
        }
        /**  */
        functiongraph3D(xyFunction, xRange, yRange, attributes = {}) {
            return this.elValue.create("functiongraph3d", TSXGraph.dereference([xyFunction, xRange, yRange]), attributes);
        }
        /**  */
        parametricsurface3D(xFunction, yFunction, zFunction, xRange, yRange, attributes = {}) {
            return this.elValue.create("parametricsurface3d", TSXGraph.dereference([xFunction, yFunction, zFunction, xRange, yRange]), attributes);
        }
        /**  */
        animateAzimuth() {
            return this.elValue.animateAzimuth();
        }
        /** Creates a new 3D element of type elementType. */
        create() {
            return this.elValue.create();
        }
        /** Intersect a ray with the bounding cube of the 3D view. */
        intersectionLineCube() {
            return this.elValue.intersectionLineCube();
        }
        /**  */
        intersectionPlanePlane() {
            return this.elValue.intersectionPlanePlane();
        }
        /** Test if coordinates are inside of the bounding cube. */
        isInCube() {
            return this.elValue.isInCube();
        }
        /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
        project2DTo3DPlane() {
            return this.elValue.project2DTo3DPlane();
        }
        /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
        project2DTo3DVertical() {
            return this.elValue.project2DTo3DVertical();
        }
        /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
        project3DTo2D() {
            return this.elValue.project3DTo2D();
        }
        /** Limit 3D coordinates to the bounding cube. */
        project3DToCube() {
            return this.elValue.project3DToCube();
        }
        /** Select a single or multiple elements at once. */
        select() {
            return this.elValue.select();
        }
        /**  */
        stopAzimuth() {
            return this.elValue.stopAzimuth();
        }
    }
    TXG.View3D = View3D;
})(TXG || (TXG = {}));
