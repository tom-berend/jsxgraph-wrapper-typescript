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
//   Generated on May 12, 2025, 9:13 pm
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
        crossProduct(v1, v2) { return window.JXG.Math.crossProduct(v1, v2); },
        frustum(left, right, top, bottom, near, far) { return window.JXG.Math.frustum(left, right, top, bottom, near, far); },
        identity(m, n) { return window.JXG.Math.identity(m, n); },
        innerProduct(v1, v2) { return window.JXG.Math.innerProduct(v1, v2); },
        inverse(mat) { return window.JXG.Math.inverse(mat); },
        matMatMult(mat1, mat2) { return window.JXG.Math.matMatMult(mat1, mat2); },
        matrix(nRows, mCols, init) { return window.JXG.Math.matrix(nRows, mCols, init); },
        matVecMult(mat, vec) { return window.JXG.Math.matVecMult(mat, vec); },
        projection(fov, ratio, near, far) { return window.JXG.Math.projection(fov, ratio, near, far); },
        transpose(mat) { return window.JXG.Math.transpose(mat); },
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
    Numerics: {
        bezier(points) { return window.JXG.Math.bezier(points); },
        bspline(points, order) { return window.JXG.Math.bspline(points, order); },
        CardinalSpline(points, tau) { return window.JXG.Math.CardinalSpline(points, tau); },
    },
    Statistics: {
        randomNormal(mean, stdDev) { return window.JXG.Math.Statistics.randomNormal(mean, stdDev); },
        randomUniform(a, b) { return window.JXG.Math.Statistics.randomUniform(a, b); },
        randomExponential(lambda) { return window.JXG.Math.Statistics.randomExponential(lambda); },
        randomGamma(shape, scale, threshold) { return window.JXG.Math.Statistics.randomGamma(shape, scale, threshold); },
        randomPareto(shape, scale, threshold) { return window.JXG.Math.Statistics.randomPareto(shape, scale, threshold); },
        randomBeta(alpha, beta) { return window.JXG.Math.Statistics.randomBeta(alpha, beta); },
        randomChisquare(k) { return window.JXG.Math.Statistics.randomChisquare(k); },
        randomF(d1, d2) { return window.JXG.Math.Statistics.randomF(d1, d2); },
        randomT(v) { return window.JXG.Math.Statistics.randomT(v); },
        randomBinomial(n, p) { return window.JXG.Math.Statistics.randomBinomial(n, p); },
        randomGeometric(p) { return window.JXG.Math.Statistics.randomGeometric(p); },
        randomPoisson(mu) { return window.JXG.Math.Statistics.randomPoisson(mu); },
        randomHypergeometric(good, bad, samples) { return window.JXG.Math.Statistics.randomHypergeometric(good, bad, samples); },
        histogram(data, bins, range, density, cumulative) { return window.JXG.Math.Statistics.histogram(data, { bins: bins ?? 10, range: range ?? false, density: density ?? true, cumulative: cumulative ?? false }); },
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
            az: { pointer: { enabled: false }, keyboard: { enabled: true, key: 'none' } },
            el: { pointer: { enabled: false }, keyboard: { enabled: true, key: 'none' } },
        });
        this._jView3d.setView(Math.PI, Math.PI / 2, 0);
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
    /** Creates a new geometric element of type elementType.*/
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
   TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
   TSX.point([3,3]),{fixed:true, showInfobox:true}
   TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
   TSX.point([1,2,2])  // three axis definition - [z,x,y]
               
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
    /** create a chart */
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
   let a = TSX.point3D([-3, 0, 0])
   let circle = TSX.circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
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
   TSX.foreignObject(
       `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
       [0, -3], [9, 6],
       {layer: 8, fixed: true})
   ```
                 */
    ForeignObject(content, position, size = null, attributes = {}) {
        return this._jBoard.create('foreignObject', [content, position, size,], this.defaultAttributes(attributes));
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
        return this._jBoard.create('image', params, this.defaultAttributes(attrs));
    }
    // implementation of signature,  hidden from user
    Implicitcurve(a, b, c, d, e, f, g, h, i) {
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
        return this._jBoard.create('implicitcurve', params, this.defaultAttributes(attrs));
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
   TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
   TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
   TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                   
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
    /** Ticks are used as distance markers on a line or curve. They are mainly used for axis elements and slider elements.  */
    Ticks(line, attributes = {}) {
        return this._jBoard.create('ticks', [line,], this.defaultAttributes(attributes));
    }
    Sector(P1, P2, P3, attributes = {}) {
        return this._jBoard.create('sector', [P1, P2, P3,], this.defaultAttributes(attributes));
    }
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
                               let arc = TSX.arc([-8,5],[-4,5],[-9,9]])
                               
   *```
                               
    To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
    Arc(origin, from, to, attributes = {}) {
        return this._jBoard.create('arc', [origin, from, to,], this.defaultAttributes(attributes));
    }
    /** Arrow defined by two points (like a Segment) with arrow at P2
                               
   *```js
                               
    let arrow = TSX.arrow([-8,5],[-4,5])
                               
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
    Arrowparallel(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('arrowparallel', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Create an Axis with two points (like a Line) */
    Axis(p1, p2, attributes = {}) {
        return this._jBoard.create('axis', [p1, p2,], this.defaultAttributes(attributes));
    }
    /** A cubic bezier curve.  The input is 3k + 1 points; those at positions k mod 3 = 0 (eg: 0, 3, 6 are the data points, the two points between each data points are the control points.
                   
   *```js
       let points: Point[] = []
       points.push(point([-2, -1], { size: 4, color: 'blue', name: '0' }))
   
       points.push(point([-2, -2.5], { name: '1' }))
       points.push(point([-1, -2.5], { name: '2' }))
   
       points.push(TSX.point([2, -2], { size: 4, color: 'blue', name: '3' }))
   
       let curve = TSX.bezierCurve(points, { strokeColor: 'orange', strokeWidth: 5, fixed: false }); // Draggable curve
   
       // 'BezierCurve()' is just a shorthand for the following two lines:
       // let bz = TSX.NumericsMath.bezier(points)
       // let curve = TSX.curve(bz[0], bz[1])
                   
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
    /** Create a button.
   ```js
       let toggleValue = false   // button toggles this value and updates board
       let butt = TSX.button([0, 0], 'Toggle', () => {
           toggleValue = !toggleValue;
           butt.rendNodeButton.innerHTML = toggleValue ? 'On' : 'Off';
           butt.rendNodeButton.style.backgroundColor = toggleValue ? 'lightgreen' : 'salmon';
       });
       TSX.circle([0, 0], 1, { visible: () => toggleValue });  // sees update
   ```
    */
    Button(position, label, handler, attributes = {}) {
        position.push(label, handler); // position is already array, eg: [1,2], just use it as params
        return this._jBoard.create('button', position, this.defaultAttributes(attributes));
    }
    Cardinalspline(data, funct, splineType, attributes = {}) {
        return this._jBoard.create('cardinalspline', [data, funct, splineType,], this.defaultAttributes(attributes));
    }
    Checkbox(position, label, attributes = {}) {
        position.push(label);
        return this._jBoard.create('checkbox', position, this.defaultAttributes(attributes));
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
        return this._jBoard.create('circumcircleArc', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
    CircumcircleSector(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('circumcircleSector', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
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
    CurveDifference(curve1, curve2, attributes = {}) {
        return this._jBoard.create('curveDifference', [curve1, curve2,], this.defaultAttributes(attributes));
    }
    CurveIntersection(curve1, curve2, attributes = {}) {
        return this._jBoard.create('curveIntersection', [curve1, curve2,], this.defaultAttributes(attributes));
    }
    CurveUnion(curve1, curve2, attributes = {}) {
        return this._jBoard.create('curveUnion', [curve1, curve2,], this.defaultAttributes(attributes));
    }
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
    /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
   ```js
   let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
   ``` */
    Functiongraph(funct, leftBorder, rightBorder, attributes = {}) {
        return this._jBoard.create('functiongraph', [funct, leftBorder, rightBorder,], this.defaultAttributes(attributes));
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
        params = b ? [b[0] ?? 0, b[1] ?? 0, a] : [0, 0, a];
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
    Hatch(line, numberHatches, attributes = {}) {
        return this._jBoard.create('hatch', [line, numberHatches,], this.defaultAttributes(attributes));
    }
    Hyperbola(point1, point2, point3, start = -3.14, end = 3.14, attributes = {}) {
        return this._jBoard.create('hyperbola', [point1, point2, point3, start, end,], this.defaultAttributes(attributes));
    }
    Incenter(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('incenter', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    Incircle(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('incircle', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    Inequality(boundaryLine, attributes = {}) {
        return this._jBoard.create('inequality', [boundaryLine,], this.defaultAttributes(attributes));
    }
    Input(position, label, initial = "", attributes = {}) {
        position.push(label, initial);
        return this._jBoard.create('input', position, this.defaultAttributes(attributes));
    }
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
   * let legend = TSX.legend([2,2],labels,colors)
   *```
                                   
    */
    Legend(lowerLeft, labels, colors, attributes = {}) {
        attributes['labels'] = labels;
        attributes['colors'] = colors;
        return this._jBoard.create('legend', lowerLeft, this.defaultAttributes(attributes));
    }
    Locus(point, attributes = {}) {
        return this._jBoard.create('locus', [point,], this.defaultAttributes(attributes));
    }
    MajorArc(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('majorArc', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    MajorSector(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('majorSector', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
   ```js
    let p = TSX.point([4, 9]);
    let c = TSX.circle([4, 7], p);
    TSX.measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
    TSX.measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
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
    MinorArc(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('minorArc', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    MinorSector(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('minorSector', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    Mirrorelement(element, acrossPoint, attributes = {}) {
        return this._jBoard.create('mirrorelement', [element, acrossPoint,], this.defaultAttributes(attributes));
    }
    Mirrorpoint(p1, p2, attributes = {}) {
        return this._jBoard.create('mirrorpoint', [p1, p2,], this.defaultAttributes(attributes));
    }
    NonReflexAngle(point1, point2, point3, attributes = {}) {
        return this._jBoard.create('nonReflexAngle', [point1, point2, point3,], this.defaultAttributes(attributes));
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
    /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
   ```js
   let s1 = TSX.segment(p1, p2)
   let p3 = TSX.point([0, -1])
   TSX.orthogonalprojection(p3, s1)
   ``` */
    Orthogonalprojection(point, line, attributes = {}) {
        return this._jBoard.create('orthogonalprojection', [point, line,], this.defaultAttributes(attributes));
    }
    OtherIntersection(element1, element2, firstIntersection, attributes = {}) {
        return this._jBoard.create('otherintersection', [element1, element2, firstIntersection], attributes);
    }
    Parabola(focalPoint, line, attributes = {}) {
        return this._jBoard.create('parabola', [focalPoint, line,], this.defaultAttributes(attributes));
    }
    // implementation of signature,  hidden from user
    Parallelpoint(a, b, c, d, e, f, g, h, i) {
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
        return this._jBoard.create('parallelpoint', params, this.defaultAttributes(attrs));
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
    Parallelogram(p1, p2, p3, attributes = {}) {
        return this._jBoard.create('parallelogram', [p1, p2, p3,], this.defaultAttributes(attributes));
    }
    /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
    Perpendicular(line, point, attributes = {}) {
        return this._jBoard.create('perpendicular', [line, point,], this.defaultAttributes(attributes));
    }
    /** Create a point on a line where a perpendicular to a given point would intersect that line. */
    PerpendicularPoint(line, point, attributes = {}) {
        return this._jBoard.create('perpendicularPoint', [line, point,], this.defaultAttributes(attributes));
    }
    /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
    PerpendicularSegment(line, point, attributes = {}) {
        return this._jBoard.create('perpendicularSegment', [line, point,], this.defaultAttributes(attributes));
    }
    PolarLine(conic, point, attributes = {}) {
        return this._jBoard.create('polarLine', [conic, point,], this.defaultAttributes(attributes));
    }
    PolePoint(conic, line, attributes = {}) {
        return this._jBoard.create('polePoint', [conic, line,], this.defaultAttributes(attributes));
    }
    /** Array of Points */
    PolygonalChain(pointArray, attributes = {}) {
        return this._jBoard.create('polygonalChain', [pointArray,], this.defaultAttributes(attributes));
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
   
       let ico = TSX.polyhedron3D(vertexList, faceArray, {
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
    RadicalAxis(circle1, circle2, attributes = {}) {
        return this._jBoard.create('radicalAxis', [circle1, circle2,], this.defaultAttributes(attributes));
    }
    /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
    Reflection(object, reflectLine, attributes = {}) {
        return this._jBoard.create('reflection', [object, reflectLine,], this.defaultAttributes(attributes));
    }
    ReflexAngle(point1, point2, point3, attributes = {}) {
        return this._jBoard.create('reflexAngle', [point1, point2, point3,], this.defaultAttributes(attributes));
    }
    RegularPolygon(P1, P2, nVertices, attributes = {}) {
        return this._jBoard.create('regularPolygon', [P1, P2, nVertices,], this.defaultAttributes(attributes));
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
    Spline(points, attributes = {}) {
        return this._jBoard.create('spline', points, this.defaultAttributes(attributes));
    }
    /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
   ```js
   let  curve = TSX.stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
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
        return this._jBoard.create('tangentTo', [conic, point, N,], this.defaultAttributes(attributes));
    }
    Tapemeasure(P1, P2, attributes = {}) {
        return this._jBoard.create('tapemeasure', [P1, P2,], this.defaultAttributes(attributes));
    }
    /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
    Tracecurve(glider, point, attributes = {}) {
        return this._jBoard.create('tracecurve', [glider, point,], this.defaultAttributes(attributes));
    }
    // Missing signaature array for Transform
    // Missing signaature array for Transform3D
    /** Create a new point from an existing point and a concatenation of transforms. This is a powerful way of creating complex constructions that can be rotated, scaled, and translated.  An alternative to using Groups.
   ~~~js
        // define a few sliders to control the model
        let tX = TSX.slider([-4, 4.0], [3, 4.0], [-10, 0, 10], { name: 'tX' })
        let tY = TSX.slider([-4, 4.5], [3, 4.5], [-10, 0, 10], { name: 'tY' })
        let tRotate = TSX.slider([-4, 3.0], [3, 3.0], [-Math.PI * 2, 0, Math.PI * 2], { name: 'tRotate' })
        let tScale = TSX.slider ([-4, 3.5], [3, 3.5], [0, 1, 5], { name: 'tScale' })
        // orange is 'geometry' for a complex shape (use opacity:0)
        let a = TSX.point([0, -1])
        let b = TSX.point([1, -1])
        // set up tranforms for rotation, scaling, and translation
        let trans = TSX.translate(()=>tX.Value(), ()=>tY.Value())
        let rot = TSX.rotate(() => tRotate.Value(), a)  // rotation around a
        let scale = TSX.scale(()=>tScale.Value(),()=>tScale.Value())  // scaling is relative to [0,0]
        // blue shape using transformPoints- starts with model and applies transforms
        let shapea = TSX.transformPoint(a,[rot,scale,trans],{color:'blue'})
        let shapeb = TSX.transformPoint(b,[rot,scale,trans],{color:'blue'})
        TSX.segment(shapea,shapeb)
   ~~~             */
    TransformPoint(point, transform, attributes = {}) {
        return this._jBoard.create('point', [point, transform], this.defaultAttributes(attributes));
    }
    /** Create a new point from an existing point and a concatenation of transforms. This is a powerful way of creating complex constructions that can be rotated, scaled, and translated.  An alternative to using Groups.
   ~~~js
        // define a few sliders to control the model
        let tX = TSX.slider([-4, 4.0], [3, 4.0], [-10, 0, 10], { name: 'tX' })
        let tY = TSX.slider([-4, 4.5], [3, 4.5], [-10, 0, 10], { name: 'tY' })
        let tRotate = TSX.slider([-4, 3.0], [3, 3.0], [-Math.PI * 2, 0, Math.PI * 2], { name: 'tRotate' })
        let tScale = TSX.slider ([-4, 3.5], [3, 3.5], [0, 1, 5], { name: 'tScale' })
        // orange is 'geometry' for a complex shape (use opacity:0)
        let a = TSX.point([0, -1])
        let b = TSX.point([1, -1])
        // set up tranforms for rotation, scaling, and translation
        let trans = TSX.translate(()=>tX.Value(), ()=>tY.Value())
        let rot = TSX.rotate(() => tRotate.Value(), a)  // rotation around a
        let scale = TSX.scale(()=>tScale.Value(),()=>tScale.Value())  // scaling is relative to [0,0]
        // blue shape using transformPoints- starts with model and applies transforms
        let shapea = TSX.transformPoint(a,[rot,scale,trans],{color:'blue'})
        let shapeb = TSX.transformPoint(b,[rot,scale,trans],{color:'blue'})
        TSX.segment(shapea,shapeb)
   ~~~             */
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
    /** Create a Transform object with Translate properties. */
    Translate(dx, dy, attributes = {}) {
        return this._jBoard.create('transform', [dx, dy], { type: 'translate' });
    }
    /** Create a Transform object with Rotate properties. */
    Rotate(angle, around, attributes = {}) {
        return this._jBoard.create('Transform', [angle, around], { type: 'rotate' });
    }
    /** Create a Transform object with Scale properties.  Scaling is relative to [0,0]. */
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
    /** Create a Transform object with Scale properties.  Scaling is relative to [0,0,0]. */
    Scale3D(xMultiplier, yMultiplier, zMultiplier, attributes = {}) {
        return this._jView3d.create('transform3d', [xMultiplier, yMultiplier, zMultiplier], { type: 'scale' });
    }
} ///////////////////////////
/** Initialize a board other than jxgbox */
function initBoard(canvas = '', attributes) {
    return window.TSXGlobal.jInitBoard(canvas, attributes);
}
