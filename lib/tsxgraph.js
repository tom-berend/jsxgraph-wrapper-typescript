/////////////////////////////////////////////////////////////////////////////
//
//    Copyright 2024-2025 Tom Berend   (MIT Licence)
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
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
//    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
//    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
//    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//    DEALINGS IN THE SOFTWARE.
//
/////////////////////////////////////////////////////////////////////////////
//   Generated on August 26, 2025, 11:20 am
let defaultAttrs = {
    keepAspectRatio: true,
    name: '', showinfobox: false,
    pan: { enabled: false },
    resize: { enabled: false }
};
/**
*  Constant: user coordinates relative to the coordinates system defined by the bounding box.
*/
const COORDS_BY_USER = 0x0001;
/**
*  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
*/
const COORDS_BY_SCREEN = 0x0002;
/** A wrapper for the various math routines provided by JSXGraph.  For example:
            ```js
            let cross = JsxMath.Matrix.crossProduct(a,b)
            ```
        */
export let JsxMath = { Matrix: {
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(v1, v2) { return window.JXG.Math.crossProduct(v1, v2); },
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
        /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
        matVecMult(mat, vec) { return window.JXG.Math.matVecMult(mat, vec); },
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov, ratio, near, far) { return window.JXG.Math.projection(fov, ratio, near, far); },
        /** Transposes a matrix given as a two dimensional array. */
        transpose(mat) { return window.JXG.Math.transpose(mat); },
        /** Initializes a vector of size n wih coefficients set to the given value. */
        vector(n, init) { return window.JXG.Math.vector(n, init); },
    },
    Geometry: {
        affineDistance() { return window.JXG.Math.affineDistance(); },
        affineRatio() { return window.JXG.Math.affineRatio(); },
        angle() { return window.JXG.Math.angle(); },
        angleBisector() { return window.JXG.Math.angleBisector(); },
        bezierArc() { return window.JXG.Math.bezierArc(); },
        calcLabelQuadrant() { return window.JXG.Math.calcLabelQuadrant(); },
        calcLineDelimitingPoints() { return window.JXG.Math.calcLineDelimitingPoints(); },
        calcStraight() { return window.JXG.Math.calcStraight(); },
        circumcenter() { return window.JXG.Math.circumcenter(); },
        circumcenterMidpoint() { return window.JXG.Math.circumcenterMidpoint(); },
        det3p() { return window.JXG.Math.det3p(); },
        distance() { return window.JXG.Math.distance(); },
        distPointLine() { return window.JXG.Math.distPointLine(); },
        GrahamScan() { return window.JXG.Math.GrahamScan(); },
        intersectionFunction() { return window.JXG.Math.intersectionFunction(); },
        isSameDir() { return window.JXG.Math.isSameDir(); },
        isSameDirection() { return window.JXG.Math.isSameDirection(); },
        meet() { return window.JXG.Math.meet(); },
        meetBezierCurveRedBlueSegments() { return window.JXG.Math.meetBezierCurveRedBlueSegments(); },
        meetBeziersegmentBeziersegment() { return window.JXG.Math.meetBeziersegmentBeziersegment(); },
        meetCircleCircle() { return window.JXG.Math.meetCircleCircle(); },
        meetCurveCurve() { return window.JXG.Math.meetCurveCurve(); },
        meetCurveLine() { return window.JXG.Math.meetCurveLine(); },
        meetCurveLineContinuous() { return window.JXG.Math.meetCurveLineContinuous(); },
        meetCurveLineDiscrete() { return window.JXG.Math.meetCurveLineDiscrete(); },
        meetCurveRedBlueSegments() { return window.JXG.Math.meetCurveRedBlueSegments(); },
        meetLineBoard() { return window.JXG.Math.meetLineBoard(); },
        meetLineCircle() { return window.JXG.Math.meetLineCircle(); },
        meetLineLine() { return window.JXG.Math.meetLineLine(); },
        meetPathPath() { return window.JXG.Math.meetPathPath(); },
        meetPolygonLine() { return window.JXG.Math.meetPolygonLine(); },
        meetSegmentSegment() { return window.JXG.Math.meetSegmentSegment(); },
        perpendicular() { return window.JXG.Math.perpendicular(); },
        pnpoly() { return window.JXG.Math.pnpoly(); },
        projectCoordsToBeziersegment() { return window.JXG.Math.projectCoordsToBeziersegment(); },
        projectCoordsToCurve() { return window.JXG.Math.projectCoordsToCurve(); },
        projectCoordsToPolygon() { return window.JXG.Math.projectCoordsToPolygon(); },
        projectCoordsToSegment() { return window.JXG.Math.projectCoordsToSegment(); },
        projectPointToBoard() { return window.JXG.Math.projectPointToBoard(); },
        projectPointToCircle() { return window.JXG.Math.projectPointToCircle(); },
        projectPointToCurve() { return window.JXG.Math.projectPointToCurve(); },
        projectPointToLine() { return window.JXG.Math.projectPointToLine(); },
        projectPointToPoint() { return window.JXG.Math.projectPointToPoint(); },
        projectPointToTurtle() { return window.JXG.Math.projectPointToTurtle(); },
        rad() { return window.JXG.Math.rad(); },
        reflection() { return window.JXG.Math.reflection(); },
        reuleauxPolygon() { return window.JXG.Math.reuleauxPolygon(); },
        rotation() { return window.JXG.Math.rotation(); },
        signedPolygon() { return window.JXG.Math.signedPolygon(); },
        signedTriangle() { return window.JXG.Math.signedTriangle(); },
        sortVertices() { return window.JXG.Math.sortVertices(); },
        trueAngle() { return window.JXG.Math.trueAngle(); },
        windingNumber() { return window.JXG.Math.windingNumber(); },
    },
    Math: {
        /** Hyperbolic arc-cosine of a number. */
        acosh(x) { return window.JXG.Math.acosh(x); },
        /** Computes the inverse cotangent of x. */
        acot(x) { return window.JXG.Math.acot(x); },
        /** Logical operator: a && b? */
        and(a, b) { return window.JXG.Math.and(a, b); },
        /** Hyperbolic arcsine of a number */
        asinh(x) { return window.JXG.Math.asinh(x); },
        /** Compute a * x + y for a scalar a and vectors x and y. */
        axpy(a, x, y) { return window.JXG.Math.axpy(a, x, y); },
        /** Computes the binomial coefficient n over k. */
        binomial(n, k) { return window.JXG.Math.binomial(n, k); },
        /** Computes cube root of real number Polyfill for Math.cbrt(). */
        cbrt(x) { return window.JXG.Math.cbrt(x); },
        /** Clamp x within the interval [a, b]. */
        clamp(x, a, b) { return window.JXG.Math.clamp(x, a, b); },
        /** Calculates the cosine hyperbolicus of x. */
        cosh(x) { return window.JXG.Math.cosh(x); },
        /** Computes the cotangent of x. */
        cot(x) { return window.JXG.Math.cot(x); },
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(c1, c2) { return window.JXG.Math.crossProduct(c1, c2); },
        /** Convert a floating point number to sign + integer + fraction. */
        decToFraction(x, order) { return window.JXG.Math.decToFraction(x, order); },
        /** Logical test: a === b? */
        eq(a, b) { return window.JXG.Math.eq(a, b); },
        /** Error function, see https://en.wikipedia.org/wiki/Error_function. */
        erf(x) { return window.JXG.Math.erf(x); },
        /** Complementary error function, i.e. */
        erfc(x) { return window.JXG.Math.erfc(x); },
        /** Inverse of error function */
        erfi(x) { return window.JXG.Math.erfi(x); },
        /** Compute the factorial of a positive integer. */
        factorial(n) { return window.JXG.Math.factorial(n); },
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        frustum(l, r, t, b, n, f) { return window.JXG.Math.frustum(l, r, t, b, n, f); },
        /** Gamma function for real parameters by Lanczos approximation. */
        gamma(z) { return window.JXG.Math.gamma(z); },
        /** Greatest common divisor (gcd) of two numbers. */
        gcd(a, b) { return window.JXG.Math.gcd(a, b); },
        /** Logical test: a >= b? */
        geq(a, b) { return window.JXG.Math.geq(a, b); },
        /** Logical test: a > b? */
        gt(a, b) { return window.JXG.Math.gt(a, b); },
        /** Heaviside unit step function. */
        hstep(x) { return window.JXG.Math.hstep(x); },
        /** Returns sqrt(a * a + b * b) for a variable number of arguments. */
        hypot(a) { return window.JXG.Math.hypot(a); },
        /** Generates an identity matrix. */
        identity(n, m) { return window.JXG.Math.identity(n, m); },
        /** Inner product of two vectors a and b. */
        innerProduct(a, b, n) { return window.JXG.Math.innerProduct(a, b, n); },
        /** Compute the inverse of an (n x n)-matrix by Gauss elimination. */
        inverse(A) { return window.JXG.Math.inverse(A); },
        /** Least common multiple (lcm) of two numbers. */
        lcm(a, b) { return window.JXG.Math.lcm(a, b); },
        /** Logical test: a <= b? */
        leq(a, b) { return window.JXG.Math.leq(a, b); },
        /** Logarithm to arbitrary base b. */
        log(x, b) { return window.JXG.Math.log(x, b); },
        /** Logarithm to base 10. */
        log10(x) { return window.JXG.Math.log10(x); },
        /** Logarithm to base 2. */
        log2(x) { return window.JXG.Math.log2(x); },
        /** Logical test: a < b? */
        lt(a, b) { return window.JXG.Math.lt(a, b); },
        /** Compute the sum of two matrices: mat1 + mat2. */
        matMatAdd(mat1, mat2) { return window.JXG.Math.matMatAdd(mat1, mat2); },
        /** Computes the product of the two matrices: mat1 * mat2. */
        matMatMult(mat1, mat2) { return window.JXG.Math.matMatMult(mat1, mat2); },
        /** Multiply a matrix mat by a scalar alpha: mat * scalar */
        matNumberMult(mat, alpha) { return window.JXG.Math.matNumberMult(mat, alpha); },
        /** Initializes a matrix as an array of rows with the given value. */
        matrix(n, m, init) { return window.JXG.Math.matrix(n, m, init); },
        /** Multiplies a vector vec to a matrix mat: mat * vec. */
        matVecMult(mat, vec) { return window.JXG.Math.matVecMult(mat, vec); },
        /** The JavaScript implementation of the % operator returns the symmetric modulo. */
        mod(a, m) { return window.JXG.Math.mod(a, m); },
        /** Normal distribution function */
        ndtr(x) { return window.JXG.Math.ndtr(x); },
        /** Inverse of normal distribution function */
        ndtri(x) { return window.JXG.Math.ndtri(x); },
        /** Logical test: a !== b? */
        neq(a, b) { return window.JXG.Math.neq(a, b); },
        /** Euclidean norm of a vector. */
        norm(a, n) { return window.JXG.Math.norm(a, n); },
        /** Normalize the standard form [c, b0, b1, a, k, r, q0, q1]. */
        normalize(stdform) { return window.JXG.Math.normalize(stdform); },
        /** Logical operator: !a? */
        not(a) { return window.JXG.Math.not(a); },
        /** Compute n-th real root of a real number. */
        nthroot(x, n) { return window.JXG.Math.nthroot(x, n); },
        /** Logical operator: a || b? */
        or(a, b) { return window.JXG.Math.or(a, b); },
        /** Compute base to the power of exponent. */
        pow(base, exponent) { return window.JXG.Math.pow(base, exponent); },
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov, ratio, n, f) { return window.JXG.Math.projection(fov, ratio, n, f); },
        /** Compute base to the power of the rational exponent m / n. */
        ratpow(base, m, n) { return window.JXG.Math.ratpow(base, m, n); },
        /** Determine the relative difference between two numbers. */
        relDif(a, b) { return window.JXG.Math.relDif(a, b); },
        /** Special use of Math.round function to round not only to integers but also to chosen decimal values. */
        roundToStep(value, step, min, max) { return window.JXG.Math.roundToStep(value, step, min, max); },
        /** The sign() function returns the sign of a number, indicating whether the number is positive, negative or zero. */
        sign(x) { return window.JXG.Math.sign(x); },
        /** Sine hyperbolicus of x. */
        sinh(x) { return window.JXG.Math.sinh(x); },
        /** A square & multiply algorithm to compute base to the power of exponent. */
        squampow(base, exponent) { return window.JXG.Math.squampow(base, exponent); },
        /** Converts a two-dimensional array to a one-dimensional Float32Array that can be processed by WebGL. */
        toGL(m) { return window.JXG.Math.toGL(m); },
        /** Trace of a square matrix, given as a two-dimensional array. */
        trace(M) { return window.JXG.Math.trace(M); },
        /** Transposes a matrix given as a two-dimensional array. */
        transpose(M) { return window.JXG.Math.transpose(M); },
        /** Multiplies a vector vec to a matrix mat from the left: vec * mat. */
        vecMatMult(vec, mat) { return window.JXG.Math.vecMatMult(vec, mat); },
        /** Initializes a vector of size n wih coefficients set to the init value (default 0) */
        vector(n, init) { return window.JXG.Math.vector(n, init); },
        /** Theorem of Vieta: Given a set of simple zeroes x_0, . */
        Vieta(x) { return window.JXG.Math.Vieta(x); },
        /** Translate x into the interval [a, b) by adding a multiple of b - a. */
        wrap(x, a, b) { return window.JXG.Math.wrap(x, a, b); },
        /** A way of clamping a periodic variable. */
        wrapAndClamp(x, a, b, period) { return window.JXG.Math.wrapAndClamp(x, a, b, period); },
        /** Logical operator: either a or b? */
        xor(a, b) { return window.JXG.Math.xor(a, b); },
    },
    Numerics: {
        bezier(points) { return window.JXG.Math.bezier(points); },
        bspline(points, order) { return window.JXG.Math.bspline(points, order); },
        CardinalSpline(points, tau) { return window.JXG.Math.CardinalSpline(points, tau); },
    },
    Statistics: {
        /** Generate value of a standard normal random variable with given mean and standard deviation.
                                          See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
        randomNormal(mean, stdDev) { return window.JXG.Math.Statistics.randomNormal(mean, stdDev); },
        /** Generate value of a uniform distributed random variable in the interval [a, b]. */
        randomUniform(a, b) { return window.JXG.Math.Statistics.randomUniform(a, b); },
        /** Generate value of a random variable with exponential distribution.
                                           See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                           Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
        randomExponential(lambda) { return window.JXG.Math.Statistics.randomExponential(lambda); },
        /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                               See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                               Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
        randomGamma(shape, scale, threshold) { return window.JXG.Math.Statistics.randomGamma(shape, scale, threshold); },
        /** Generate value of a random variable with Pareto distribution with shape gamma and scale k.
                                          See {@link https://en.wikipedia.org/wiki/Pareto_distribution}. */
        randomPareto(shape, scale, threshold) { return window.JXG.Math.Statistics.randomPareto(shape, scale, threshold); },
        /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                           See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
        randomBeta(alpha, beta) { return window.JXG.Math.Statistics.randomBeta(alpha, beta); },
        /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
        randomChisquare(k) { return window.JXG.Math.Statistics.randomChisquare(k); },
        /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/F-distribution}. */
        randomF(d1, d2) { return window.JXG.Math.Statistics.randomF(d1, d2); },
        /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
        randomT(v) { return window.JXG.Math.Statistics.randomT(v); },
        /** Generate values for a random variable in binomial distribution with parameters n and p
                                           See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
        randomBinomial(n, p) { return window.JXG.Math.Statistics.randomBinomial(n, p); },
        /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                           See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
        randomGeometric(p) { return window.JXG.Math.Statistics.randomGeometric(p); },
        /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                           See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
        randomPoisson(mu) { return window.JXG.Math.Statistics.randomPoisson(mu); },
        /** Generate values for a random variable in hypergeometric distribution.
                                           See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                           Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                           <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
        randomHypergeometric(good, bad, samples) { return window.JXG.Math.Statistics.randomHypergeometric(good, bad, samples); },
        /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
        histogram(data, bins, range, density, cumulative) { return window.JXG.Math.Statistics.histogram(data, { bins: bins ?? 10, range: range ?? false, density: density ?? true, cumulative: cumulative ?? false }); },
        /** The P-th percentile ( 0 < P ≤ 100 ) of a list of N ordered values (sorted from least to greatest) is the smallest value in the list such that no more than P percent of the data is strictly less than the value and at least P percent of the data is less than or equal to that value. */
        percentile(data, ranges) { return window.JXG.Math.Statistics.percentile(data, ranges); },
    },
};
///////  THIS FILE IS INSERTED INTO TSXGRAPH.TS DURING THE BUILD PROCESS  //////
//////////////////////////////////////////////////////////////
///  WE NEED A PLACE TO STORE THE BOARD AND VIEW3D OBJECTS ///
//////////////////////////////////////////////////////////////
/** This wraps the JSX library and the constructor is equivalent to the `initBoard()` method.

 * ```js

 * let TSX = new TSXBoard('jxgbox)`

 * ```

 * */
export class TSXBoard {
    _jBoard;
    _jView3d;
    printLineNumber = 0;
    /** This contains the default options of the board and of all geometry elements.  See JSXGraph.Options.js for details.  Example: TSX.JXGOptions.elements.tabindex = -1 */
    JXGOptions;
    currentCanvas = '';
    boardList = new Map(); // will be keyed array of boards  { 'jxgbox': jBoard, 'jxgbox2': jBoard2 }
    defaultAttrs = {};
    /** Store a reference to every board in this central list. */
    static get boards() { return window.JXG.boards; }
    /** Constant: screen coordinates in pixel relative to the upper left corner of the div element. */
    static get COORDS_BY_SCREEN() { return window.JXG.COORDS_BY_SCREEN; }
    /** Constant: user coordinates relative to the coordinates system defined by the bounding box. */
    static get COORDS_BY_USER() { return window.JXG.COORDS_BY_USER; }
    /** Associative array that keeps track of all constructable elements registered via JXG.registerElement. */
    static get elements() { return window.JXG.elements; }
    /** The FileReader object bundles the file input capabilities of JSXGraph. */
    static get FileReader() { return window.JXG.FileReader; }
    /** Internet Explorer version. */
    static get ieVersion() { return window.JXG.ieVersion; }
    /** A document/window environment is available. */
    static get isBrowser() { return window.JXG.isBrowser(); }
    /** Constant: the small gray version indicator in the top left corner of every JSXGraph board (if showCopyright is not set to false on board creation). */
    static get licenseText() { return window.JXG.licenseText; }
    /** Default color palette. */
    static get palette() { return window.JXG.palette; }
    /** Bang Wong color palette, optimized for various type of color blindness. */
    static get paletteWong() { return window.JXG.paletteWong; }
    /** Store the available file readers in this structure. */
    static get readers() { return window.JXG.readers; }
    /** Holds all possible properties and the according validators for geometry elements. */
    static get Validator() { return window.JXG.Validator; }
    /** Constant: the currently used JSXGraph version. */
    static get version() {
        return window.JXG.version;
    }
    // this is the code for InitBoard, which is created in the wrapper.
    constructor(canvas = 'jxgbox', attributes = {}) {
        this.defaultAttrs = {
            keepAspectRatio: true,
            name: '',
            showinfobox: false,
            pan: { enabled: false },
            resize: { enabled: false },
        };
        // create the board
        this._jBoard = window.JXG.JSXGraph.initBoard(canvas, attributes);
        this.JXGOptions = window.JXG.Options;
        let bounding = this._jBoard.getBoundingBox();
        // console.log(bounding, [[bounding[0], bounding[3]], Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])])
        // axesPosition is immutable.  if it is set in initBoard(), then set it in view
        let attrs = this._jBoard.attr;
        let ap = 'none';
        if ('axesposition' in attrs) {
            ap = attrs.axesposition;
        }
        //create the 3D view
        this._jView3d = this._jBoard.create('view3d', [[bounding[0], bounding[3]],
            [Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])],
            // [box, box, box]] same size of the bounding box
            [[bounding[0], bounding[2]], [bounding[3], bounding[1]], [bounding[0], bounding[2]]]], // just guessing at z axis
        {
            projection: 'central',
            // projection: 'parallel',
            pan: { enabled: false },
            trackball: { enabled: true },
            axesPosition: ap,
            depthOrder: {
                enabled: true,
            },
            depthOrderPoints: true,
            xPlaneRear: { visible: false },
            yPlaneRear: { visible: false }, //fillOpacity: 0.2, fillColor: 'blue' },
            zPlaneRear: { visible: false },
            // note: keyboard requires jxgbox div to contain tabindex='0' directive
            az: { pointer: { enabled: false }, keyboard: { enabled: true, key: 'none' } },
            el: { pointer: { enabled: false }, keyboard: { enabled: true, key: 'none' } },
        });
        // (this._jView3d as any).setView(Math.PI, Math.PI / 2, 0);
        // /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields.
        // * ```js
        // *     TSX.useKatex()
        // * ```
        // */
        // static useKatex(){
        //     (window as any).JXG.Options.text.useKatex = true;
        // }
    }
    /** test for empty object {} */
    isEmptyObject(obj) {
        for (let _var in obj)
            return false; // if there is a property, it is not empty (doesn't work for dates, etc)
        return true;
    }
    // utility to appy default attributes
    defaultAttributes(attrs = {}) {
        for (const property in this.defaultAttrs) {
            if (!attrs.hasOwnProperty(property)) { // if the user has not specified a value for this property
                attrs[property] = this.defaultAttrs[property];
            }
        }
        return attrs;
    }
    // utility to determine if last parameter is the attributes
    isAttribute(last) {
        return ((typeof last == 'object') && // must be an object
            (!Array.isArray(last)) && // not an array (typeof treats arrays as objects)
            (last !== null) && // null returns type 'object' - javascript bug
            ('elType' in last === false)); // if has elType then a JSXGraph object
    }
    // /** legacy create for 2D and 3D elements.  Always TSX.create() */
    // create(element: string, params: any[], attributes: Object = {}) {
    //     if (element.toLowerCase().includes('3d'))    // 3D";
    //         return (this._jView3d as any).create(element, params, attributes);
    //     else
    //         return (this._jBoard as any).create(element, params, attributes);
    // }
    Print(...args) {
        let bbox = this._jBoard.getBoundingBox(); // get every time, in case setBoundingBox()
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
        this._jBoard.create('text', [left, top, stringText], { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' });
        this.printLineNumber += 1;
    }
    /** Set the bounding box of the board.  Returns the board.

    ```js

    TSX.board.setBoundingBox([-8, 8, 8, -8])

    ```*/
    /** Use MathJax by default. PUT THIS AT THE VERY TOP OF YOUR PROGRAM.  See: {@link https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference}

     * ```js

     * TSX.board.useMathJax()  // only needed once

     * let a = TSX.point([-3, 3], { size: 4, color: 'blue', name: '\\(\\overrightarrow{a}\\)', fixed: true, label: { fontSize: 20 } });

     *```

     */
    useMathJax() { window.JXG.Options.text.useMathJax = true; } // by default MathJax is true
    /** sets the projection to parallel or perspective.  Possible values are 'centeral' or 'parallel'. */
    projection3D(setting) { this._jView3d.setAttribute({ 'projection': setting }); }
    // /** Adds an animation.*/
    // addAnimation(element:GeometryElement) => (this._jBoard as any).addAnimation(element),
    /** Add the default x- and y-axis and grid to the construction,, equivalent to using the code below.

     * ```js

     * TSX.axis([0,0],[1,0]);

     * TSX.axis([0,0],[0,1]);

     * ```

     */
    addAxis() {
        this._jBoard.create('axis', [[0, 0], [1, 0]]);
        this._jBoard.create('axis', [[0, 0], [0, 1]]);
    }
    /**  Set infobox visible / invisible. */
    displayInfobox(val) { this._jBoard.displayInfobox(val); }
    // animateAzimuth:()=> (this._jView3d as any).animateAzimuth(),
    // worldToFocal(pWorld, homog)
    // Map world coordinates to focal coordinates.
    /** Sets an arbitrary number of attributes.  Use an object with key-value pairs.

     * ```js

     * TSX.board.setAttribute({axis:true});    // turn on the default axis

     * ```

     */
    // setAttribute(attr: BoardAttributes) => {
    //     initBoard();
    //     _jsxBoard().setAttribute(attr);
    //     _jsxBoard().update()
    // },
    /** Zooms into the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY

     * and applies the zoom. The zoom operation is centered at x, y. */
    zoomIn(x, y) { return this._jBoard.zoomIn(x, y); }
    /** Zooms out of the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY and applies the zoom.*/
    zoomOut(x, y) { return this._jBoard.zoomOut(x, y); }
    /** Sets the zoom level to fX resp fY.*/
    setZoom(fX, fY) { return this._jBoard.setZoom(fX, fY); }
    /** Reset the zoom level to the original zoom level from initBoard(); Additionally, if the board as been initialized with a boundingBox(which is the default ), restore the viewport to the original viewport during initialization.*/
    zoom100() { return this._jBoard.zoom100(); }
    ///////////////////////////////
    //////////////////////////////
    // bring in remainder from header3.txt
    ///////////////////////////////
    //////////////////////////////
    // these are on the JXG object, but we keep them here for simplicity
    /** Set the bounding box of the board. */
    setBoundingBox(box, keepAspectRatio = false, setZoom) { return this._jBoard.setBoundingBox(box, keepAspectRatio, setZoom); }
    /** Get the bounding box of the board. */
    getBoundingBox() { return this._jBoard.getBoundingBox(); }
    /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields. */
    useKatex() { window.JXG.Options.text.useKatex = true; }
    /** Add all possible event handlers to the board object that move objects, i.e. */
    addEventHandlers() { return this._jBoard.addEventHandlers(); }
    /**    Register keyboard event handlers. */
    addKeyboardEventHandlers() { return this._jBoard.addKeyboardEventHandlers(); }
    /** Adds a grid to the board according to the settings given in board.options. For more control, use the TSX.grid object.*/
    addGrid() { return this._jBoard.addGrid(); }
    /** Event handlers for the board (rather than for individual elements).

    *```js

    *    TSX.board.on('pointerdown',pointerDown)

    *    //equivalent to:   addEventListener("pointerdown", pointerDown)

    *```

    */
    on(event, handler) { this._jBoard.on(event, handler); }
    /** given a PointerEvent (eg: TSX.on('down', (e:Event) ... ), returns the mouse coordinates [x,y] in JSXGraph coordinates.  */
    getMouseCoords(e) {
        let cPos = this._jBoard.getCoordsTopLeftCorner(e);
        let absPos = window.JXG.getPosition(e);
        let dx = absPos[0] - cPos[0];
        let dy = absPos[1] - cPos[1];
        let coords = new window.JXG.Coords(2, [dx, dy], this._jBoard);
        return [coords.usrCoords[1], coords.usrCoords[2]];
    }
    /** Add fullscreen events which update the CSS transformation matrix to correct the mouse/ touch / pointer positions in case of CSS transformations..*/
    addFullscreenEventHandlers() { return this._jBoard.addFullscreenEventHandlers(); }
    /** Add user activity to the array 'board.userLog'.*/
    addLogEntry(type, obj, pos) { return this._jBoard.addLogEntry(type, obj, pos); }
    /** Registers mouse move, down and wheel event handlers.*/
    addMouseEventHandlers() { return this._jBoard.addMouseEventHandlers(); }
    /** Registers pointer event handlers.*/
    addPointerEventHandlers() { return this._jBoard.addPointerEventHandlers(); }
    /** Add resize related event handlers*/
    addResizeEventHandlers() { return this._jBoard.addResizeEventHandlers(); }
    /** Register touch start and move and gesture start and change event handlers.*/
    addTouchEventHandlers() { return this._jBoard.addTouchEventHandlers(); }
    /** Registers pointer event handlers.*/
    addWheelEventHandlers() { return this._jBoard.addWheelEventHandlers(); }
    /** General purpose animation function.*/
    animate() { return this._jBoard.animate(); }
    /** Apply update on all objects with the new zoom - factors.*/
    applyZoom() { return this._jBoard.applyZoom(); }
    /** Calculates adequate snap sizes.*/
    calculateSnapSizes() { return this._jBoard.calculateSnapSizes(); }
    /** Delete the elements drawn as part of a trace of an element.*/
    clearTraces() { return this._jBoard.clearTraces(); }
    /** Handler for click on down arrow in the navigation bar*/
    clickDownArrow() { return this._jBoard.clickDownArrow(); }
    /** Handler for click on left arrow in the navigation bar*/
    clickLeftArrow() { return this._jBoard.clickLeftArrow(); }
    /** Handler for click on right arrow in the navigation bar*/
    clickRightArrow() { return this._jBoard.clickRightArrow(); }
    /** Handler for click on up arrow in the navigation bar*/
    clickUpArrow() { return this._jBoard.clickUpArrow(); }
    /** Creates a new geometric element of type elementType.*/ // NOTE: UPPER CASE Create  !!
    create(elementType, parents, attributes) { return this._jBoard.create(elementType, parents, attributes); }
    /** Deprecated name for JXG.Board.create.*/
    createElement() { return this._jBoard.createElement(); }
    /** Function to animate a curve rolling on another curve.*/
    createRoulette(c1, c2, start_c1, stepsize, direction, time, pointlist) { return this._jBoard.createRoulette(c1, c2, start_c1, stepsize, direction, time, pointlist); }
    /** Remove highlighting of all elements.*/
    dehighlightAll() { return this._jBoard.dehighlightAll(); }
    /** Initializes color blindness simulation.*/
    emulateColorblindness(deficiency) { return this._jBoard.emulateColorblindness(deficiency); }
    /** After construction of the object the visibility is set and the label is constructed if necessary.*/
    finalizeAdding(obj) { return this._jBoard.finalizeAdding(obj); }
    /** If fullscreen mode is toggled, the possible CSS transformations which are applied to the JSXGraph canvas have to be reread.*/
    fullscreenListener(evt) { return this._jBoard.fullscreenListener(evt); }
    /** Runs through all elements and calls their update() method and update the conditions.*/
    fullUpdate() { return this._jBoard.fullUpdate(); }
    /** Generates unique id for a board.*/
    generateId() { return this._jBoard.generateId(); }
    /** Generates an unique name for the given object.*/
    generateName(object) { return this._jBoard.generateName(object); }
    /** Triggered on iOS / Safari while the user inputs a gesture(e.g.*/
    gestureChangeListener(evt) { return this._jBoard.gestureChangeListener(evt); }
    /** Called by iOS / Safari as soon as the user starts a gesture.*/
    gestureStartListener(evt) { return this._jBoard.gestureStartListener(evt); }
    /** Collects all elements under current mouse position.*/
    getAllObjectsUnderMouse(evt) { return this._jBoard.getAllObjectsUnderMouse(evt); }
    /** Collects all elements under current mouse position plus current user coordinates of mouse cursor.*/
    getAllUnderMouse(evt) { return this._jBoard.getAllUnderMouse(evt); }
    /** Calculates mouse coordinates relative to the boards container.*/
    getCoordsTopLeftCorner() { return this._jBoard.getCoordsTopLeftCorner(); }
    /** Get the position of the pointing device in screen coordinates, relative to the upper left corner of the host tag.*/
    getMousePosition(e, i) { return this._jBoard.getMousePosition(e, i); }
    /** This method calculates the user coords of the current mouse coordinates.*/
    getUsrCoordsOfMouse(evt) { return this._jBoard.getUsrCoordsOfMouse(evt); }
    /** Checks if the given point is inside the boundingbox.*/
    hasPoint(x, y) { return this._jBoard.hasPoint(x, y); }
    /** Changes the text of the info box to what is provided via text.*/
    highlightCustomInfobox(text, el) { return this._jBoard.highlightCustomInfobox(text, el); }
    /** Changes the text of the info box to show the given coordinates.*/
    highlightInfobox(x, y, el) { return this._jBoard.highlightInfobox(x, y, el); }
    /** Initialize some objects which are contained in every GEONExT construction by default, but are not contained in the gxt files.*/
    initGeonextBoard() { return this._jBoard.initGeonextBoard(); }
    /** Initialize the info box object which is used to display the coordinates of points near the mouse pointer,*/
    initInfobox(attributes) { return this._jBoard.initInfobox(attributes); }
    /** Collects all elements below the current mouse pointer and fulfilling the following constraints: isDraggable, visible, not fixed, not frozen*/
    initMoveObject(x, y, evt, type) { return this._jBoard.initMoveObject(x, y, evt, type); }
    /** Initiate moving the origin.. This is used in mouseDown and touchStart listeners. */
    initMoveOrigin(x, y) { return this._jBoard.initMoveOrigin(x, y); }
    /** Allow moving of JSXGraph elements with arrow keys.*/
    keyDownListener(evt) { return this._jBoard.keyDownListener(evt); }
    /** Event listener for SVG elements getting focus.*/
    keyFocusInListener(evt) { return this._jBoard.keyFocusInListener(evt); }
    /** Event listener for SVG elements losing focus.*/
    keyFocusOutListener(evt) { return this._jBoard.keyFocusOutListener(evt); }
    /** Migrate the dependency properties of the point src to the point dest and delete the point src.*/
    migratePoint(src, dest, copyName) { return this._jBoard.migratePoint(src, dest, copyName); }
    /** This method is called by the browser when the mouse device clicks on the screen.*/
    mouseClickListener(evt) { return this._jBoard.mouseClickListener(evt); }
    /** This method is called by the browser when the mouse device double clicks on the screen.*/
    mouseDblClickListener(evt) { return this._jBoard.mouseDblClickListener(evt); }
    /** This method is called by the browser when the mouse button is clicked.*/
    mouseDownListener(evt) { return this._jBoard.mouseDownListener(evt); }
    /** This method is called by the browser when the mouse is moved.*/
    mouseMoveListener(evt) { return this._jBoard.mouseMoveListener(evt); }
    /** This method is called by the browser when the mouse button is released.*/
    mouseUpListener(evt) { return this._jBoard.mouseUpListener(evt); }
    /** Handler for mouse wheel events.*/
    mouseWheelListener(evt) { return this._jBoard.mouseWheelListener(evt); }
    /** Moves an object.*/
    moveObject(x, y, o, evt, type) { return this._jBoard.moveObject(x, y, o, evt, type); }
    /** Moves the origin and initializes an update of all elements.*/
    moveOrigin(x, y) { return this._jBoard.moveOrigin(x, y); }
    /** This method is called by the browser when a pointer device clicks on the screen. */
    pointerClickListener(evt) { return this._jBoard.pointerClickListener(evt); }
    /**     This method is called by the browser when a pointer device double clicks on the screen.*/
    pointerDblClickListener(evt) { return this._jBoard.pointerDblClickListener(evt); }
    /** This method is called by the browser when a pointing device is pressed on the screen.*/
    pointerDownListener(evt, object, allowDefaultEventHandling) { return this._jBoard.pointerDownListener(evt, object, allowDefaultEventHandling); }
    /** Triggered by the pointerleave event.*/
    pointerLeaveListener(evt) { return this._jBoard.pointerLeaveListener(evt); }
    /** Called periodically by the browser while the user moves a pointing device across the screen.*/
    pointerMoveListener(evt) { return this._jBoard.pointerMoveListener(evt); }
    /** Triggered as soon as the user stops touching the device with at least one finger.*/
    pointerUpListener(evt) { return this._jBoard.pointerUpListener(evt); }
    /** Sets for all objects the needsUpdate flag to 'true'.*/
    prepareUpdate(drag) { return this._jBoard.prepareUpdate(drag); }
    /** Update the container before and after printing.*/
    printListener(evt) { return this._jBoard.printListener(evt); }
    /** Wrapper for printListener to be used in mediaQuery matches.*/
    printListenerMatch(mql) { return this._jBoard.printListenerMatch(mql); }
    /** Removes the ancestors of an object an the object itself from board and renderer.*/
    removeAncestors(object) { return this._jBoard.removeAncestors(object); }
    /** Deletes a board from the list of dependent boards.*/
    removeChild() { return this._jBoard.removeChild(this._jBoard); }
    /** Remove all event handlers from the board object*/
    removeEventHandlers() { return this._jBoard.removeEventHandlers(); }
    /** Remove all registered event handlers regarding fullscreen mode.*/
    removeFullscreenEventHandlers() { return this._jBoard.removeFullscreenEventHandlers(); }
    /** Removes all grids assigned to this board.*/
    removeGrids() { return this._jBoard.removeGrids(); }
    /** Please use JXG.Board.off instead.*/
    removeHook(id) { return this._jBoard.removeHook(id); }
    /** Remove all registered touch event handlers.*/
    removeKeyboardEventHandlers() { return this._jBoard.removeKeyboardEventHandlers(); }
    /** De - register mouse event handlers.*/
    removeMouseEventHandlers() { return this._jBoard.removeMouseEventHandlers(); }
    /** Removes object from board and renderer.*/
    removeObject(object, saveMethod) { return this._jBoard.removeObject(object, saveMethod); }
    /** Remove MSPointer * Event handlers.*/
    removePointerEventHandlers() { return this._jBoard.removePointerEventHandlers(); }
    /** Remove resize related event handlers*/
    removeResizeEventHandlers() { return this._jBoard.removeResizeEventHandlers(); }
    /** Remove all registered touch event handlers.*/
    removeTouchEventHandlers() { return this._jBoard.removeTouchEventHandlers(); }
    /** Change the height and width of the board's container.*/
    resizeContainer(canvasWidth, canvasHeight, dontset, dontSetBoundingBox) { return this._jBoard.resizeContainer(canvasWidth, canvasHeight, dontset, dontSetBoundingBox); }
    /** Fallback solutions if there is no resizeObserver available in the browser.*/
    resizeListener() { return this._jBoard.resizeListener(); }
    /** Listener to watch for scroll events.*/
    scrollListener(evt) { return this._jBoard.scrollListener(evt); }
    /** Select a single or multiple elements at once.*/
    select(str, onlyByIdOrName) { return this._jBoard.select(str, onlyByIdOrName); }
    /** Sets an arbitrary number of attributes.*/
    setAttribute(attributes) { return this._jBoard.setAttribute(attributes); }
    /** Composes an id for an element.*/
    setId(obj, type) { return this._jBoard.setId(obj, type); }
    /** Lists the dependencies graph in a new HTML - window.*/
    showDependencies() { return this._jBoard.showDependencies(); }
    /** Lists the XML code of the construction in a new HTML - window.*/
    showXML() { return this._jBoard.showXML(); }
    /** Watch for changes of the visibility of the JSXGraph container element.*/
    startIntersectionObserver() { return this._jBoard.startIntersectionObserver(); }
    /** Start observer which reacts to size changes of the JSXGraph container div element.*/
    startResizeObserver() { return this._jBoard.startResizeObserver(); }
    /** Start selection mode.*/
    startSelectionMode() { return this._jBoard.startSelectionMode(); }
    /** Cancels all running animations.*/
    stopAllAnimation() { return this._jBoard.stopAllAnimation(); }
    /** Stop the intersection observer*/
    stopIntersectionObserver() { return this._jBoard.stopIntersectionObserver(); }
    /** Stops the resize observer.*/
    stopResizeObserver() { return this._jBoard.stopResizeObserver(); }
    /** Finalize the selection: disable selection mode and return (this._jBoard as any). the coordinates of the selection rectangle.*/
    stopSelectionMode() { return this._jBoard.stopSelectionMode(); }
    /** Suppresses the default event handling.*/
    suppressDefault(e) { return this._jBoard.suppressDefault(e); }
    /** Stop updates of the board.*/
    suspendUpdate() { return this._jBoard.suspendUpdate(); }
    /** Expand the JSXGraph construction to fullscreen.*/
    toFullscreen(id) { return this._jBoard.toFullscreen(id); }
    /** Triggered as soon as the user stops touching the device with at least one finger.*/
    touchEndListener(evt) { return this._jBoard.touchEndListener(evt); }
    /** Called periodically by the browser while the user moves his fingers across the device.*/
    touchMoveListener(evt) { return this._jBoard.touchMoveListener(evt); }
    /** This method is called by the browser when a finger touches the surface of the touch - device.*/
    touchStartListener(evt) { return this._jBoard.touchStartListener(evt); }
    /** Moves elements in multitouch mode.*/
    twoFingerMove(p1, p2, o, evt) { return this._jBoard.twoFingerMove(p1, p2, o, evt); }
    /** Moves, rotates and scales a line or polygon with two fingers.*/
    twoFingerTouchObject(tar, drag, id) { return this._jBoard.twoFingerTouchObject(tar, drag, id); }
    /** Enable updates of the board.*/
    unsuspendUpdate() { return this._jBoard.unsuspendUpdate(); }
    /** Runs through most elements and calls their update() method and update the conditions.*/
    update(drag) { return this._jBoard.update(drag); }
    /** updates conditions*/
    updateConditions() { return this._jBoard.updateConditions(); }
    /** Update the width and height of the JSXGraph container div element.*/
    updateContainerDims(width, height) { return this._jBoard.updateContainerDims(width, height); }
    /** Update the coords object of all elements which possess this property.*/
    updateCoords() { return this._jBoard.updateCoords(); }
    /** Update CSS transformations of type scaling.*/
    updateCSSTransforms() { return this._jBoard.updateCSSTransforms(); }
    /** Runs through all elements and calls their update() method.*/
    updateElements(drag) { return this._jBoard.updateElements(drag); }
    /** Runs through all hooked functions and calls them.*/
    updateHooks(m) { return this._jBoard.updateHooks(m); }
    /** Updates and displays a little info box to show coordinates of current selected points.*/
    updateInfobox(el) { return this._jBoard.updateInfobox(el); }
    /** Runs through all elements and calls their update() method.*/
    updateRenderer() { return this._jBoard.updateRenderer(); }
    /** Runs through all elements and calls their update() method.*/
    updateRendererCanvas() { return this._jBoard.updateRendererCanvas(); }
    /** Zooms the board so every visible point is shown.*/
    zoomAllPoints() { return this._jBoard.zoomAllPoints(); }
    /** Reset the bounding box and the zoom level to 100 % such that a given set of elements is within the board's viewport.*/
    zoomElements(elements) { return this._jBoard.zoomElements(elements); }
    /////////////////////////////////////////////////
    //////////// view3d methods  ////////////////////
    /////////////////////////////////////////////////
    // intersectionLineCube(p, dir, r)
    // Intersect a ray with the bounding cube of the 3D view.
    // intersectionPlanePlane(plane1, plane2, d)
    // isInCube(p, polyhedron)
    // Test if coordinates are inside of the bounding cube.
    // previousView()
    // Changes view to the previous view stored in the attribute `values`.
    // project2DTo3DPlane(point2d, normal, foot)
    // Project a 2D coordinate to the plane defined by point "foot" and the normal vector `normal`.
    // project2DTo3DVertical(point2d, base_c3d)
    // Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate.
    // project3DTo2D(x, y, z)
    // Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3.
    // project3DToCube(c3d)
    // Limit 3D coordinates to the bounding cube.
    // projectScreenToSegment(pScr, end0, end1)
    // Project a point on the screen to the nearest point, in screen distance, on a line segment in 3d space.
    // select(str, onlyByIdOrName)
    // Select a single or multiple elements at once.
    // setCurrentView(n)
    // Changes view to the determined view stored in the attribute `values`.
    /** Sets camera view to the given values. */
    /** Sets camera view to the given values. */
    setView(az, el, r) {
        return this._jView3d.setView(az, el, r);
    }
    /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
               
   *```js
   TSX.Point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
   TSX.Point([3,3]),{fixed:true, showInfobox:true}
   TSX.Point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
   TSX.Point([1,2,2])  // three axis definition - [z,x,y]
               
   *```
               
    also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, TransformPoint, and others. */
    Point(position, attributes = {}) {
        return this._jBoard.create('point', position, this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Line(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        if (typeof a == 'number' || typeof a == 'function')
            // reorder the a,b,c elements of the line
            return this._jBoard.create('line', [c, a, b], this.defaultAttributes(d));
        else //  two points
            return this._jBoard.create('line', [a, b], this.defaultAttributes(c));
    }
    // Missing signaature array for View3D
    /** Various types of charts for data visualization. */
    Chart(f, attributes = {}) {
        return this._jBoard.create('chart', [f,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Circle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('circle', params, this.defaultAttributes(attrs));
    }
    /** In 3D space, a circle consists of all points on a given plane with a given distance from a given point.
                       The given point is called the center, and the given distance is called the radius.
                       A circle can be constructed by providing a center, a normal vector (either homogenous or cartesian),
                       and a radius (given as a number or function).
                       
   *```js
   let a = TSX.Point3D([-3, 0, 0])
   let circle = TSX.Circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
   ```
    */
    Circle3D(center, normal, radius, attributes = {}) {
        let tempNormal = (typeof normal === "function") ? normal() : normal;
        if (tempNormal.length === 3)
            tempNormal.unshift(0); // convert [a,b,c] to [0,a,b,c]
        return this._jView3d.create("circle3d", [center, normal, radius], attributes);
    }
    // implementation of signature,  hidden from user
    Curve(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        //console.log('curvee',b);
        if (!b || this.isAttribute(b)) { // only one parameter, must be array of [[x,y],[x,y]...]
            //console.log('curve',a)
            return this._jBoard.create('curve', [a], b); // JSXGraph syntax is mangled, too many nested arrays
        }
        // else just return standard create
        return this._jBoard.create('curve', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Curve3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('curve3d', params, this.defaultAttributes(attrs));
    }
    // Missing signaature array for Dump
    /** This element is used to provide a constructor for arbitrary content in an SVG foreignObject container.
   ```js
   TSX.ForeignObject(
       `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
       [0, -3], [9, 6],
       {layer: 8, fixed: true})
   ```
                 */
    ForeignObject(content, position, size = null, attributes = {}) {
        return this._jBoard.create('foreignobject', [content, position, size,], this.defaultAttributes(attributes));
    }
    /** Array of Points */
    Group(pointArray, attributes = {}) {
        if (Array.isArray(pointArray))
            return this._jBoard.create('group', pointArray, this.defaultAttributes(attributes));
        else
            return this._jBoard.create('group', [pointArray], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Image(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        if (typeof c == 'object' || c == null) {
            params.push([1, 1]);
        } // default value for size
        return this._jBoard.create('image', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    ImplicitCurve(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('implicitCurve', params, this.defaultAttributes(attrs));
    }
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    IntersectionCircle3D(sphere1, sphere, attributes = {}) {
        return this._jView3d.create('intersectioncircle3d', [sphere1, sphere,], this.defaultAttributes(attributes));
    }
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    IntersectionLine3D(plane1, plane2, attributes = {}) {
        return this._jView3d.create('intersectionline3d', [plane1, plane2,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Line3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('line3d', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Plane3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('plane3d', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Point3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('point3d', params, this.defaultAttributes(attrs));
    }
    /** Array of Points */
    Polygon(vertices, attributes = {}) {
        if (typeof vertices === 'function')
            return this._jBoard.create('polygon', [vertices], this.defaultAttributes(attributes));
        else
            return this._jBoard.create('polygon', vertices, this.defaultAttributes(attributes));
    }
    /** A polygon is a sequence of points connected by lines, with the last point connecting back to the first one. The points are given by a list of Point3D objects or a list of coordinate arrays. Each two consecutive points of the list define a line. */
    Polygon3D(vertices, attributes = {}) {
        if (typeof vertices === 'function')
            return this._jView3d.create('polygon3d', [vertices], this.defaultAttributes(attributes));
        else
            return this._jView3d.create('polygon3d', vertices, this.defaultAttributes(attributes));
    }
    /** Display a message
                                   
   *```js
   TSX.Text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
   TSX.Text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
   TSX.Text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                   
   *``` */
    Text(position, label, attributes = {}) {
        position.push(label);
        return this._jBoard.create('text', position, this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Text3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('text3d', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Ticks(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('ticks', params, this.defaultAttributes(attrs));
    }
    /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. The sector as curve consists of two legs and an arc. The curve length is 6. That means, a point with coordinates [sector.X(t), sector.Y(t)] is on leg 1 if t is between 0 and 1, the arc if t is between 1 and 5, leg 2 if t is between 5 and 6. */
    Sector(P1, P2, P3, attributes = {}) {
        return this._jBoard.create('sector', [P1, P2, P3,], this.defaultAttributes(attributes));
    }
    /** A vector field on a plane can be visualized as a collection of arrows with given magnitudes and directions, each attached to a point on the plane.  Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
    Vectorfield(fxfy, horizontalMesh = [-6, 25, 6], verticalMesh = [-6, 25, 6], attributes = {}) {
        return this._jBoard.create('vectorfield', [fxfy, horizontalMesh, verticalMesh,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Angle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('angle', params, this.defaultAttributes(attrs));
    }
    /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                               
   *```js
                               let arc = TSX.Arc([-8,5],[-4,5],[-9,9]])
                               
   *```
                               
    To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
    Arc(origin, from, to, attributes = {}) {
        return this._jBoard.create('arc', [origin, from, to,], this.defaultAttributes(attributes));
    }
    /** Arrow defined by two points (like a Segment) with arrow at P2
                               
   *```js
                               
    let arrow = TSX.Arrow([-8,5],[-4,5])
                               
   *```
                               
    */
    Arrow(p1, p2, attributes = {}) {
        return this._jBoard.create('arrow', [p1, p2,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Parallel(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('parallel', params, this.defaultAttributes(attrs));
    }
    /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
    ArrowParallel(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('arrowparallel', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Create an Axis with two points (like a Line) */
    Axis(p1, p2, attributes = {}) {
        return this._jBoard.create('axis', [p1, p2,], this.defaultAttributes(attributes));
    }
    /** A cubic bezier curve.  The input is 3k + 1 points; those at positions k mod 3 = 0 (eg: 0, 3, 6 are the data points, the two points between each data points are the control points.
                   
   *```js
       let points: Point[] = []
       points.push(TSX.Point([-2, -1], { size: 4, color: 'blue', name: '0' }))
   
       points.push(TSX.Point([-2, -2.5], { name: '1' }))
       points.push(TSX.Point([-1, -2.5], { name: '2' }))
   
       points.push(TSX.Point([2, -2], { size: 4, color: 'blue', name: '3' }))
   
       let curve = TSX.BezierCurve(points, { strokeColor: 'orange', strokeWidth: 5, fixed: false }); // Draggable curve
   
       // 'BezierCurve()' is just a shorthand for the following two lines:
       // let bz = TSX.NumericsMath.bezier(points)
       // let curve = TSX.Curve(bz[0], bz[1])
                   
   *```
   
                    */
    BezierCurve(points, attributes = {}) {
        return this._jBoard.create('curve', window.JXG.Math.Numerics.bezier(points), this.defaultAttributes(attributes));
    }
    /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
    Bisector(A, B, C, attributes = {}) {
        return this._jBoard.create('bisector', [A, B, C,], this.defaultAttributes(attributes));
    }
    /** Bisect a Line defined with two points */
    Bisectorlines(l1, l2, attributes = {}) {
        return this._jBoard.create('bisectorlines', [l1, l2,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Button(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        if (typeof c === 'function') {
            a.push(b, c); // position is already array, eg: [1,2], just use it as params
        }
        else {
            a.push(b);
        }
        return this._jBoard.create('button', a, this.defaultAttributes(attrs));
    }
    /** Cardinal spline curve through a given data set. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
    Cardinalspline(data, funct, splineType, attributes = {}) {
        return this._jBoard.create('cardinalspline', [data, funct, splineType,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Checkbox(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        a.push(b); // a is already an array, push label
        let _temp = this._jBoard.create('checkbox', a, this.defaultAttributes(attrs));
        if (typeof c === 'function') {
            _temp.on('down', c); // if function then add handler.  JSXGraph doesn't have this.
        }
        return _temp;
    }
    /** Creates a Point at the center of a circle defined by 3 points */
    Circumcenter(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('circumcenter', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Draw a circle defined by 3 points */
    Circumcircle(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('circumcircle', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
    CircumcircleArc(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('circumcirclearc', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
    CircumcircleSector(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('circumcirclesector', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** A marker to display domains of inequalities. The comb element is defined by two points. */
    Comb(p1, p2, attributes = {}) {
        return this._jBoard.create('comb', [p1, p2,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Conic(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('conic', params, this.defaultAttributes(attrs));
    }
    /** The path forming the difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    CurveDifference(curve1, curve2, attributes = {}) {
        return this._jBoard.create('curvedifference', [curve1, curve2,], this.defaultAttributes(attributes));
    }
    /** The path forming the intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    CurveIntersection(curve1, curve2, attributes = {}) {
        return this._jBoard.create('curveintersection', [curve1, curve2,], this.defaultAttributes(attributes));
    }
    /** The path forming the union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    CurveUnion(curve1, curve2, attributes = {}) {
        return this._jBoard.create('curveunion', [curve1, curve2,], this.defaultAttributes(attributes));
    }
    /** A curve visualizing the function graph of the (numerical) derivative of a given curve. */
    Derivative(curve, attributes = {}) {
        return this._jBoard.create('derivative', [curve,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Ellipse(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('ellipse', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    ParametricSurface3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('parametricsurface3d', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Functiongraph(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('functiongraph', params, this.defaultAttributes(attrs));
    }
    /** A 3D functiongraph visualizes a map (x, y) → f(x, y).  */
    Functiongraph3D(xyFunction, xRange, yRange, attributes = {}) {
        return this._jView3d.create('functiongraph3d', [xyFunction, xRange, yRange,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Glider(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        if ((!b || this.isAttribute(b))) {
            params = [0, 0, a];
            attrs = b;
        }
        else {
            params = b ? [b[0] ?? 0, b[1] ?? 0, a] : [0, 0, a];
        }
        return this._jBoard.create('glider', params, this.defaultAttributes(attrs));
    }
    /** Glider3D is an alias for JSXGraph's Point3D(). */
    Glider3D(element, initial = [0, 0, 0], attributes = {}) {
        return this._jView3d.create("point3d", [initial, element], attributes);
    }
    // implementation of signature,  hidden from user
    Grid(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('grid', params, this.defaultAttributes(attrs));
    }
    /** Hatches are collections of short line segments used to mark congruent lines or curves. */
    Hatch(line, numberHatches, attributes = {}) {
        return this._jBoard.create('hatch', [line, numberHatches,], this.defaultAttributes(attributes));
    }
    /** A hyperbola is a special conic section given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
    Hyperbola(point1, point2, point3, start = -3.14, end = 3.14, attributes = {}) {
        return this._jBoard.create('hyperbola', [point1, point2, point3, start, end,], this.defaultAttributes(attributes));
    }
    /** The center of the incircle of the triangle described by the three given points (without constructing the circle). https://mathworld.wolfram.com/Incenter.html */
    Incenter(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('incenter', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** The circle which touches the three sides of a triangle given by three points. */
    Incircle(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('incircle', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** The area which is the set of solutions of a linear inequality or an inequality of a function graph. For example, an inequality of type y <= f(x). */
    Inequality(boundaryLine, attributes = {}) {
        return this._jBoard.create('inequality', [boundaryLine,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Input(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        a.push(b); // always have label
        if (typeof c === 'string') {
            a.push(c);
        }
        else {
            a.push(''); // label is optional, but JSXGraph says 'undefined'
        }
        let _temp = this._jBoard.create('input', a, this.defaultAttributes(attrs));
        if (typeof d === 'function') {
            _temp.rendNodeInput.addEventListener('keyup', d); // if function then add handler.  JSXGraph doesn't have this.
        }
        return _temp;
    }
    /** The graph of the integral function of a given function in a given interval. */
    Integral(range, curve, attributes = {}) {
        return this._jBoard.create('integral', [range, curve,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Intersection(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('intersection', params, this.defaultAttributes(attrs));
    }
    /** Creates a Legend for a Chart Element
                                   
   *```js
   * let labels = ['a','b','c']
   * let colors = ['red','green','blue']
   * let legend = TSX.Legend([2,2],labels,colors)
   *```
                                   
    */
    Legend(lowerLeft, labels, colors, attributes = {}) {
        attributes['labels'] = labels;
        attributes['colors'] = colors;
        return this._jBoard.create('legend', lowerLeft, this.defaultAttributes(attributes));
    }
    /** A set of points (typically a line, curve or surface) whose location is determined by a construction. */
    Locus(point, attributes = {}) {
        return this._jBoard.create('locus', [point,], this.defaultAttributes(attributes));
    }
    /** A major arc given by three points is that part of the circumference of a circle having measure at least 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
    MajorArc(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('majorarc', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** A major sector is a sector of a circle having measure at least 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    MajorSector(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('majorsector', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
   ```js
    let p = TSX.Point([4, 9]);
    let c = TSX.Circle([4, 7], p);
    TSX.Measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
    TSX.Measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
   ```
    */
    Measurement(locn, measure, element, attributes = {}) {
        let x = 0, y = 0;
        if (Array.isArray(locn)) {
            x = locn[0];
            y = locn[1];
        }
        else if (typeof locn == 'object') {
            x = locn.X();
            y = locn.Y();
        }
        ;
        return this._jBoard.create('measurement', [x, y, [measure, element]], attributes);
    }
    // implementation of signature,  hidden from user
    Mesh3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('mesh3d', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Midpoint(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('midpoint', params, this.defaultAttributes(attrs));
    }
    /** A minor arc given by three points is that part of the circumference of a circle having measure at most 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
    MinorArc(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('minorarc', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** A minor sector is a sector of a circle having measure at most 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    MinorSector(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('minorsector', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Reflect a point, line, circle, curve, polygon across a given point. */
    MirrorElement(element, acrossPoint, attributes = {}) {
        return this._jBoard.create('mirrorelement', [element, acrossPoint,], this.defaultAttributes(attributes));
    }
    /** A MirrorPoint is a special case of a MirrorElement. */
    MirrorPoint(p1, p2, attributes = {}) {
        return this._jBoard.create('mirrorpoint', [p1, p2,], this.defaultAttributes(attributes));
    }
    /** A non-reflex angle is the instance of an angle that is at most 180°. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    NonReflexAngle(point1, point2, point3, attributes = {}) {
        return this._jBoard.create('nonreflexangle', [point1, point2, point3,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Normal(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('normal', params, this.defaultAttributes(attrs));
    }
    /** An `OrthogonalProjection` is a locked point determined by projecting a point orthogonally onto a line.
   ```js
   let s1 = TSX.Segment(p1, p2)
   let p3 = TSX.Point([0, -1])
   TSX.OrthogonalProjection(p3, s1)
   ``` */
    OrthogonalProjection(point, line, attributes = {}) {
        return this._jBoard.create('orthogonalprojection', [point, line,], this.defaultAttributes(attributes));
    }
    /** Given a set of intersection points, this is another ("other") intersection point, */
    OtherIntersection(element1, element2, firstIntersection, attributes = {}) {
        return this._jBoard.create('otherintersection', [element1, element2, firstIntersection], attributes);
    }
    /** A parabola is a special conic section given by one point (the focus) and a line (the directrix). */
    Parabola(focalPoint, line, attributes = {}) {
        return this._jBoard.create('parabola', [focalPoint, line,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    ParallelPoint(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('parallelPoint', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Segment(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('segment', params, this.defaultAttributes(attrs));
    }
    /** A quadrilateral polygon with parallel opposite sides. */
    Parallelogram(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('parallelogram', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
    Perpendicular(line, point, attributes = {}) {
        return this._jBoard.create('perpendicular', [line, point,], this.defaultAttributes(attributes));
    }
    /** Create a point on a line where a perpendicular to a given point would intersect that line. */
    PerpendicularPoint(line, point, attributes = {}) {
        return this._jBoard.create('perpendicularpoint', [line, point,], this.defaultAttributes(attributes));
    }
    /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
    PerpendicularSegment(line, point, attributes = {}) {
        return this._jBoard.create('perpendicularsegment', [line, point,], this.defaultAttributes(attributes));
    }
    /** The polar line of a point with respect to a conic or a circle. */
    PolarLine(conic, point, attributes = {}) {
        return this._jBoard.create('polarline', [conic, point,], this.defaultAttributes(attributes));
    }
    /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
    PolePoint(conic, line, attributes = {}) {
        return this._jBoard.create('polepoint', [conic, line,], this.defaultAttributes(attributes));
    }
    /** A polygonal chain is a connected series of line segments (borders). It is determined by a list of points or a list of coordinate arrays or a function returning a list of coordinate arrays.
                               Each two consecutive points of the list define a line. In JSXGraph, a polygonal chain is simply realized as polygon without the last - closing - point. This may lead to unexpected results. Polygonal chains can be distinguished from polygons by the attribute 'elType' which is 'polygonalchain' for the first and 'polygon' for the latter. */
    PolygonalChain(pointArray, attributes = {}) {
        if (Array.isArray(pointArray)) {
            return this._jBoard.create('polygonalchain', pointArray, this.defaultAttributes(attributes));
        }
        else {
            return this._jBoard.create('polygonalchain', [pointArray], this.defaultAttributes(attributes));
        }
    }
    /** A polyhedron in a 3D view consists of faces. Faces can be 0-, 1- or 2-dimensional.
   ```js
   let rho = 1.6180339887;
   let vertexList = [  // list of vertex points
       [0, -1, -rho], [0, +1, -rho], [0, -1, rho], [0, +1, rho],[1, rho, 0], [-1, rho, 0],
       [1, -rho, 0], [-1, -rho, 0],[-rho, 0, 1], [-rho, 0, -1], [rho, 0, 1], [rho, 0, -1]
   ];
   
   let faceArray = [  // each triangular face connects three vertex points
       [4, 1, 11], [11, 1, 0], [6, 11, 0], [0, 1, 9],[11, 10, 4], [9, 1, 5],
       [8, 9, 5], [5, 3, 8],[6, 10, 11], [2, 3, 10], [2, 10, 6], [8, 3, 2],
       [3, 4, 10], [7, 8, 2], [9, 8, 7], [0, 9, 7],[4, 3, 5], [5, 1, 4], [0, 7, 6], [7, 2, 6]];
   
       let ico = TSX.Polyhedron3D(vertexList, faceArray, {
       fillColorArray: [],
       fillOpacity: 1,
       strokeWidth: 0.1,
       layer: 12,
       shader: {   // shader modifies face colors depending on angle (simulates lighting)
           enabled: true,
           type: 'angle',
           hue: 0,
           saturation: 90,
           minlightness: 60,
           maxLightness: 80
       }
   });
   ``` */
    Polyhedron3D(vertexList, faceArray, attributes = {}) {
        return this._jView3d.create('polyhedron3d', [vertexList, faceArray,], this.defaultAttributes(attributes));
    }
    /** The radical axis is the line connecting the two interstion points of two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
    RadicalAxis(circle1, circle2, attributes = {}) {
        return this._jBoard.create('radicalaxis', [circle1, circle2,], this.defaultAttributes(attributes));
    }
    /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
    Reflection(object, reflectLine, attributes = {}) {
        return this._jBoard.create('reflection', [object, reflectLine,], this.defaultAttributes(attributes));
    }
    /** A reflex angle is the instance of an angle that is larger than 180°. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    ReflexAngle(point1, point2, point3, attributes = {}) {
        return this._jBoard.create('reflexangle', [point1, point2, point3,], this.defaultAttributes(attributes));
    }
    /** A regular polygon is a polygon that is direct equiangular (all angles are equal in measure) and equilateral (all sides have the same length). It needs two points which define the base line and the number of vertices. */
    RegularPolygon(P1, P2, nVertices, attributes = {}) {
        return this._jBoard.create('regularpolygon', [P1, P2, nVertices,], this.defaultAttributes(attributes));
    }
    /** Visualize the Riemann sum which is an approximation of an integral by a finite sum. It is realized as a special curve. The returned element has the method Value() which returns the sum of the areas of the bars.
   
                           In case of type 'simpson' and 'trapezoidal', the horizontal line approximating the function value is replaced by a parabola or a secant. IN case of 'simpson', the parabola is approximated visually by a polygonal chain of fixed step width. */
    Riemannsum(funct, nBars, type = 'simpson', leftBorder, rightBorder, attributes = {}) {
        return this._jBoard.create('riemannsum', [funct, nBars, type, leftBorder, rightBorder,], this.defaultAttributes(attributes));
    }
    Semicircle(P1, P2, attributes = {}) {
        return this._jBoard.create('semicircle', [P1, P2,], this.defaultAttributes(attributes));
    }
    /** An input widget for choosing values from a given range of numbers.  Parameters are startpoint, endpoint,
                   and an array with [minimum, initialValue, maximum].  Query the value with slider.Value().  Set the slider either by
                   dragging the control or clicking on the line (you can disable clicking with {moveOnUp:false}
           
   *```js
            let s = TSX.Slider([1, 2], [3, 2], [1, 5, 10])           //  query with s.Value()
            let s = TSX.Slider([1, 2], [3, 2], [1, 5, 10],{snapWidth:1})     //  only values 1,2,3...
            let s = TSX.Slider([1, 2], [3, 2], [1, 5, 10],{withTicks:false}) //  hide the ticks
            let s = TSX.Slider[-3, 1], [1, 1], [-10, 1, 10], {
               highline: { strokeColor: 'red'},        // to left of handle
               baseline: { strokeColor: 'blue'},       // to right of handle
               fillColor: 'red',                       // handle color
               label: {fontSize: 16, strokeColor: 'orange'},
               suffixLabel: ' x=',         // really a prefix
               postLabel: ' meters'        // this is a suffix
           
   *``` */
    Slider(StartPoint, EndPoint, minimum_initial_maximum, attributes = {}) {
        return this._jBoard.create('slider', [StartPoint, EndPoint, minimum_initial_maximum,], this.defaultAttributes(attributes));
    }
    Slopefield(func, xData, yData, attributes = {}) {
        return this._jBoard.create('slopefield', [func, xData, yData,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Slopetriangle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('slopetriangle', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Smartlabel(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('smartlabel', params, this.defaultAttributes(attrs));
    }
    /**  sphere consists of all points with a given distance from a given point. The given point is called the center, and the given distance is called the radius. */
    Sphere3D(center, radius, attributes = {}) {
        return this._jView3d.create('sphere3d', [center, radius,], this.defaultAttributes(attributes));
    }
    /** The (natural) cubic spline curves (function graph) interpolating a set of points. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
    Spline(points, attributes = {}) {
        return this._jBoard.create('spline', points, this.defaultAttributes(attributes));
    }
    /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
   ```js
   let  curve = TSX.Stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
   ```
    */
    Stepfunction(X, Y, attributes = {}) {
        return this._jBoard.create('stepfunction', [X, Y,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Tangent(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jBoard.create('tangent', params, this.defaultAttributes(attrs));
    }
    /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
    TangentTo(conic, point, N = 0, attributes = {}) {
        return this._jBoard.create('tangentto', [conic, point, N,], this.defaultAttributes(attributes));
    }
    /** A tape measure can be used to measure distances between points. The two defining points of the tape measure (which is a segment) do not inherit by default the attribute "visible" from the segment. Otherwise the tape meassure would be inaccessible if the two points coincide and the segment is hidden.
    */
    Tapemeasure(P1, P2, attributes = {}) {
        return this._jBoard.create('tapemeasure', [P1, P2,], this.defaultAttributes(attributes));
    }
    /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
    Tracecurve(glider, point, attributes = {}) {
        return this._jBoard.create('tracecurve', [glider, point,], this.defaultAttributes(attributes));
    }
    // Missing signaature array for Transformation
    // Missing signaature array for Transform3D
    /** Create a new point from an existing point and a concatenation of transforms. This is a powerful way of creating complex constructions that can be rotated, scaled, and translated.  An alternative to using Groups.
   ```js
        // define a few sliders to control the model
        let tX = TSX.Slider([-4, 4.0], [3, 4.0], [-10, 0, 10], { name: 'tX' })
        let tY = TSX.Slider([-4, 4.5], [3, 4.5], [-10, 0, 10], { name: 'tY' })
        let tRotate = TSX.Slider([-4, 3.0], [3, 3.0], [-Math.PI * 2, 0, Math.PI * 2], { name: 'tRotate' })
        let tScale = TSX.Slider ([-4, 3.5], [3, 3.5], [0, 1, 5], { name: 'tScale' })
        // orange is 'geometry' for a complex shape (use opacity:0)
        let a = TSX.Point([0, -1])
        let b = TSX.Point([1, -1])
        // set up tranforms for rotation, scaling, and translation
        let trans = TSX.Translate(()=>tX.Value(), ()=>tY.Value())
        let rot = TSX.Rotate(() => tRotate.Value(), a)  // rotation around a
        let scale = TSX.Scale(()=>tScale.Value(),()=>tScale.Value())  // scaling is relative to [0,0]
        // blue shape using transformPoints- starts with model and applies transforms
        let shapea = TSX.TransformPoint(a,[rot,scale,trans],{color:'blue'})
        let shapeb = TSX.TransformPoint(b,[rot,scale,trans],{color:'blue'})
        TSX.Segment(shapea,shapeb)
   ```             */
    TransformPoint(point, transform, attributes = {}) {
        return this._jBoard.create('point', [point, transform], this.defaultAttributes(attributes));
    }
    /** Create a new point from an existing point and a concatenation of transforms. This is a powerful way of creating complex constructions that can be rotated, scaled, and translated.  An alternative to using Groups.
   ```js
        // define a few sliders to control the model
        let tX = TSX.Slider([-4, 4.0], [3, 4.0], [-10, 0, 10], { name: 'tX' })
        let tY = TSX.Slider([-4, 4.5], [3, 4.5], [-10, 0, 10], { name: 'tY' })
        let tRotate = TSX.Slider([-4, 3.0], [3, 3.0], [-Math.PI * 2, 0, Math.PI * 2], { name: 'tRotate' })
        let tScale = TSX.Slider ([-4, 3.5], [3, 3.5], [0, 1, 5], { name: 'tScale' })
        // orange is 'geometry' for a complex shape (use opacity:0)
        let a = TSX.point([0, -1])
        let b = TSX.point([1, -1])
        // set up tranforms for rotation, scaling, and translation
        let trans = TSX.Translate(()=>tX.Value(), ()=>tY.Value())
        let rot = TSX.Rotate(() => tRotate.Value(), a)  // rotation around a
        let scale = TSX.Scale(()=>tScale.Value(),()=>tScale.Value())  // scaling is relative to [0,0]
        // blue shape using transformPoints- starts with model and applies transforms
        let shapea = TSX.TransformPoint(a,[rot,scale,trans],{color:'blue'})
        let shapeb = TSX.TransformPoint(b,[rot,scale,trans],{color:'blue'})
        TSX.Segment(shapea,shapeb)
   ```             */
    TransformPoint3D(point, transform, attributes = {}) {
        return this._jView3d.create('point3d', [point, transform], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Segment3D(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = this.isAttribute(a) ? [] : [a,];
            attrs = this.isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = this.isAttribute(b) ? [a,] : [a, b,];
            attrs = this.isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = this.isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = this.isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = this.isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = this.isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = this.isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = this.isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = this.isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = this.isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = this.isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = this.isAttribute(g) ? g : {};
        }
        return this._jView3d.create('segment3d', params, this.defaultAttributes(attrs));
    }
    /** Create a Transformation object with Translate properties. */
    Translate(dx, dy, attributes = {}) {
        return this._jBoard.create('transform', [dx, dy], { type: 'translate' });
    }
    /** Create a Transformation object with Rotate properties. */
    Rotate(angle, around, attributes = {}) {
        return this._jBoard.create('Transform', [angle, around], { type: 'rotate' });
    }
    /** Create a Transformation object with Scale properties.  Scaling is relative to [0,0]. */
    Scale(xMultiplier, yMultiplier, attributes = {}) {
        return this._jBoard.create('transform', [xMultiplier, yMultiplier], { type: 'scale' });
    }
    /** Create a Transform3D object with Translate properties. */
    Translate3D(dx, dy, dz, attributes = {}) {
        return this._jView3d.create('transform3d', [dx, dy, dz], { type: 'translate' });
    }
    /** Create a Transform3D object with Rotate properties around the normal vector N. */
    Rotate3D(angle, n, attributes = {}) {
        return this._jView3d.create('transform3d', [angle, n], { type: 'rotate' });
    }
    /** Create a Transform3D object with Rotate properties around the X axis. */
    RotateX3D(angle, attributes = {}) {
        return this._jView3d.create('transform3d', [angle], { type: 'rotateX' });
    }
    /** Create a Transform3D object with Rotate properties around the Y axis. */
    RotateY3D(angle, attributes = {}) {
        return this._jView3d.create('transform3d', [angle], { type: 'rotateY' });
    }
    /** Create a Transform3D object with Rotate properties around the Z axis. */
    RotateZ3D(angle, attributes = {}) {
        return this._jView3d.create('transform3d', [angle], { type: 'rotateZ' });
    }
    /** Create a Transformation object with Scale properties.  Scaling is relative to [0,0,0]. */
    Scale3D(xMultiplier, yMultiplier, zMultiplier, attributes = {}) {
        return this._jView3d.create('transform3d', [xMultiplier, yMultiplier, zMultiplier], { type: 'scale' });
    }
} ///////////////////////////
/** Initialize a board other than jxgbox */
function initBoard(canvas = '', attributes) {
    return window.TSXGlobal.jInitBoard(canvas, attributes);
}
