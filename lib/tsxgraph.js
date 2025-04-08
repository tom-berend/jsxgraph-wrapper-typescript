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
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
//    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
//    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
//    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//    DEALINGS IN THE SOFTWARE.
//
/////////////////////////////////////////////////////////////////////////////
//   Generated on April 8, 2025, 2:43 pm
export var TSX;
(function (TSX) {
    ///////  THIS FILE IS INSERTED INTO TSXGRAPH.TS DURING THE BUILD PROCESS  //////
    //////////////////////////////////////////////////////////////
    ///  WE NEED A PLACE TO STORE THE BOARD AND VIEW3D OBJECTS ///
    //////////////////////////////////////////////////////////////
    /** PRIVATE, Nothing here, just some storage.  Ignore */
    class TSXBoard {
        _jBoard;
        _jView3d;
        currentCanvas = '';
        boardList = new Map(); // will be keyed array of boards  { 'jxgbox': jBoard, 'jxgbox2': jBoard2 }
        constructor(b, v) {
            this._jBoard = b;
            this._jView3d = v;
        }
        // getters are used from outside this class
        get jBoard() {
            if (this.isEmptyObject(this._jBoard)) { // create if doesn't exists
                this.jInitBoard('jxgbox', defaultAttributes({}));
            }
            return this._jBoard;
        }
        get jView3d() {
            if (this.isEmptyObject(this._jView3d)) { // create if doesn't exists
                this.jInitBoard('jxgbox', defaultAttributes({}));
            }
            return this._jView3d;
        }
        /** test for empty object {} */
        isEmptyObject(obj) {
            for (let _var in obj)
                return false; // if there is a property, it is not empty (doesn't work for dates, etc)
            return true;
        }
        // this is the code for InitBoard, which is created in the wrapper.
        jInitBoard(canvas, attributes = {}) {
            // console.log('jInitBoard', canvas, attributes)
            if (canvas.length === 0) // default to currentCanvas, then to jxgbox
                canvas = (this.currentCanvas.length === 0) ? 'jxgbox' : this.currentCanvas;
            if ((canvas !== this.currentCanvas)) { // test whether board needs to be created
                // console.log('change currentCanvas from ', this.currentCanvas, ' to ', canvas)
                // check if we have previously created this board
                if (this.boardList.has(canvas)) {
                    let temp = this.boardList.get(canvas); // we already have this board
                    this._jBoard = temp[0];
                    this._jView3d = temp[1];
                    this.currentCanvas = canvas;
                    return this._jBoard;
                }
                // create the board
                this._jBoard = window.JXG.JSXGraph.initBoard(canvas, attributes);
                let bounding = this._jBoard.getBoundingBox();
                // console.log(bounding, [[bounding[0], bounding[3]], Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])])
                // axesPosition is immutable.  if it is set in initBoard(), then set it in
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
                console.log('setview in setup');
                this._jView3d.setView(Math.PI, Math.PI / 2, 0);
                this.boardList.set(canvas, [this._jBoard, this.jView3d]); // keep a copy in case multiple boards
                this.currentCanvas = canvas;
                printLineNumber = 0; // reset the 'print' utility
            }
            return this._jBoard;
        }
    }
    TSX.TSXBoard = TSXBoard;
    // this is a hack, it pollutes the namespace.  But we can't
    // run the playground without it.   Fix it if we merge with JSXGraph.
    if (typeof window.TSXGlobal === "undefined") // only create if it doesn't exist
        window.TSXGlobal = new TSXBoard({}, {}); // object to store 'board' and 'view3D' objects
    // and some simple methods to retrieve them
    /** PRIVATE - retrieves the current JSXGraph Board object. */
    function _jsxBoard() {
        return window.TSXGlobal.jBoard;
    }
    TSX._jsxBoard = _jsxBoard;
    /** PRIVATE - retrieves the current JSXGraph View3d object. */
    function _jsxView3d() {
        return window.TSXGlobal.jView3d;
    }
    TSX._jsxView3d = _jsxView3d;
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    // abstract class View3D {
    //     setView(x: number, y: number, z: number) { }
    // }
    let jBoard;
    let defaultAttrs = { name: '', showinfobox: false };
    /**
    *  Constant: user coordinates relative to the coordinates system defined by the bounding box.
    */
    TSX.COORDS_BY_USER = 0x0001;
    /**
    *  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
    */
    TSX.COORDS_BY_SCREEN = 0x0002;
    ///// some math classes by hand
    class IntervalArithmetic {
    }
    TSX.IntervalArithmetic = IntervalArithmetic;
    class PolyMonomial {
    }
    TSX.PolyMonomial = PolyMonomial;
    class PolyPolynomial {
    }
    TSX.PolyPolynomial = PolyPolynomial;
    class Symbolic {
    }
    TSX.Symbolic = Symbolic;
    // utility to appy default attributes
    function defaultAttributes(attrs = {}) {
        for (const property in defaultAttrs) {
            if (!attrs.hasOwnProperty(property)) { // if the user has not specified a value for this property
                attrs[property] = defaultAttrs[property];
            }
        }
        return attrs;
    }
    // utility to determine if last parameter is the attributes
    function isAttribute(last) {
        return ((typeof last == 'object') && // must be an object
            (!Array.isArray(last)) && // not an array (typeof treats arrays as objects)
            (last !== null) && // null returns type 'object' - javascript bug
            ('elType' in last === false)); // if has elType then a JSXGraph object
    }
    // print utility - needs work !!
    let printLineNumber = 0; // added a print() function, this tracks the line#
    function print(...args) {
        let bbox = _jsxBoard().getBoundingBox(); // get every time, in case setBoundingBox()
        let left = bbox[0]; // align x to left border
        let lineHeight = (bbox[1] - bbox[3]) / 20; //
        let top = bbox[1] - (2 * lineHeight) - (printLineNumber * lineHeight); // align y to top border
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
        _jsxBoard().create('text', [left, top, stringText], { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' });
        printLineNumber += 1;
    }
    TSX.print = print;
    // JXG methods that we pass through
    /** Version of JSXGraph.  */
    function version() {
        return window.JXG.version;
    }
    TSX.version = version;
    // these are some useful board methods that we pass through
    /** Board and construction methods.  **Press '.' to see options** */
    TSX.board = {
        /** Set the bounding box of the board.  Returns the board.
        ```js
        TSX.board.setBoundingBox([-8, 8, 8, -8])
        ```*/
        /** Stop updates of the board.  Returns the board. */
        suspendUpdate: () => _jsxBoard().suspendUpdate(),
        /** Enable updates of the board.  Returns the board. */
        unsuspendUpdate: () => _jsxBoard().unsuspendUpdate(),
        /** Update the board.  Returns the board.  */
        update: () => _jsxBoard().update(),
        /** Use MathJax by default. PUT THIS AT THE VERY TOP OF YOUR PROGRAM.  See: {@link https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference}
         * ```js
         * TSX.board.useMathJax()  // only needed once
         * let a = TSX.point([-3, 3], { size: 4, color: 'blue', name: '\\(\\overrightarrow{a}\\)', fixed: true, label: { fontSize: 20 } });
         *```
         */
        useMathJax: () => window.JXG.Options.text.useMathJax = true, // by default MathJax is true
        /** sets the projection to parallel or perspective.  Possible values are 'centeral' or 'parallel'. */
        projection3D: (setting) => _jsxView3d().setAttribute({ 'projection': setting }),
        // /** Adds an animation.*/
        // addAnimation: (element:GeometryElement) => _jsxBoard().addAnimation(element),
        /** Add the default x- and y-axis and grid to the construction,, equivalent to using the code below.
         * ```js
         * TSX.axis([0,0],[1,0]);
         * TSX.axis([0,0],[0,1]);
         * ```
         */
        addAxis: () => {
            _jsxBoard().create('axis', [[0, 0], [1, 0]]);
            _jsxBoard().create('axis', [[0, 0], [0, 1]]);
        },
        /**  Set infobox visible / invisible. */
        displayInfobox: (val) => _jsxBoard().displayInfobox(val),
        /** Sets an arbitrary number of attributes.  Use an object with key-value pairs.
         * ```js
         * TSX.board.setAttribute({axis:true});    // turn on the default axis
         * ```
         */
        // setAttribute: (attr: BoardAttributes) => {
        //     initBoard();
        //     _jsxBoard().setAttribute(attr);
        //     _jsxBoard().update()
        // },
        /** Zooms into the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY
         * and applies the zoom. The zoom operation is centered at x, y. */
        zoomIn: (x, y) => { return _jsxBoard().zoomIn(x, y); },
        /** Zooms out of the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY and applies the zoom.*/
        zoomOut: (x, y) => { return _jsxBoard().zoomOut(x, y); },
        /** Sets the zoom level to fX resp fY.*/
        setZoom: (fX, fY) => { return _jsxBoard().setZoom(fX, fY); },
        /** Reset the zoom level to the original zoom level from initBoard(); Additionally, if the board as been initialized with a boundingBox(which is the default ), restore the viewport to the original viewport during initialization.*/
        zoom100: () => { return _jsxBoard().zoom100(); },
        // these are on the JXG object, but we keep them here for simplicity
        /** Set the bounding box of the board. */
        setBoundingBox: (box, keepAspectRatio = false, setZoom) => { return _jsxBoard().setBoundingBox(box, keepAspectRatio, setZoom); },
        /** Get the bounding box of the board. */
        getBoundingBox: () => { return _jsxBoard().getBoundingBox(); },
        /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields. */
        useKatex: () => { window.JXG.Options.text.useKatex = true; },
        /** Add all possible event handlers to the board object that move objects, i.e. */
        addEventHandlers: () => { return _jsxBoard().addEventHandlers(); },
        /**    Register keyboard event handlers. */
        addKeyboardEventHandlers: () => { return _jsxBoard().addKeyboardEventHandlers(); },
        /** Adds a grid to the board according to the settings given in board.options. For more control, use the TSX.grid object.*/
        addGrid: () => { return _jsxBoard().addGrid(); },
        /** Event handlers for the board (rather than for individual elements).
        *```js
        *    TSX.board.on('pointerdown',pointerDown)
        *    //equivalent to:   addEventListener("pointerdown", pointerDown)
        *```
        */
        on: (event, handler) => _jsxBoard().on(event, handler),
        /** given a PointerEvent (eg: TSX.on('down', (e:Event)=> ... ), returns the mouse coordinates [x,y] in JSXGraph coordinates.  */
        getMouseCoords: (e) => {
            let cPos = _jsxBoard().getCoordsTopLeftCorner(e);
            let absPos = window.JXG.getPosition(e);
            let dx = absPos[0] - cPos[0];
            let dy = absPos[1] - cPos[1];
            let coords = new window.JXG.Coords(2, [dx, dy], _jsxBoard());
            return [coords.usrCoords[1], coords.usrCoords[2]];
        },
        // /** Add fullscreen events which update the CSS transformation matrix to correct the mouse/ touch / pointer positions in case of CSS transformations..*/
        // addFullscreenEventHandlers: (): any => { return _jsxBoard().addFullscreenEventHandlers() },
        // /** Add user activity to the array 'board.userLog'.*/
        // addLogEntry: (type: string, obj: Object, pos: number): any => { return _jsxBoard().addLogEntry(type, obj, pos) },
        // /** Registers mouse move, down and wheel event handlers.*/
        // addMouseEventHandlers: (): any => { return _jsxBoard().addMouseEventHandlers() },
        // /** Registers pointer event handlers.*/
        // addPointerEventHandlers: (): any => { return _jsxBoard().addPointerEventHandlers() },
        // /** Add resize related event handlers*/
        // addResizeEventHandlers: (): any => { return _jsxBoard().addResizeEventHandlers() },
        // /** Register touch start and move and gesture start and change event handlers.*/
        // addTouchEventHandlers: (): any => { return _jsxBoard().addTouchEventHandlers() },
        // /** Registers pointer event handlers.*/
        // addWheelEventHandlers: (): any => { return _jsxBoard().addWheelEventHandlers() },
        // /** General purpose animation function.*/
        // animate: (): any => { return _jsxBoard().animate() },
        // /** Apply update on all objects with the new zoom - factors.*/
        // applyZoom: (): any => { return _jsxBoard().applyZoom() },
        // /** Calculates adequate snap sizes.*/
        // calculateSnapSizes: (): any => { return _jsxBoard().calculateSnapSizes() },
        // /** Delete the elements drawn as part of a trace of an element.*/
        // clearTraces: (): any => { return _jsxBoard().clearTraces() },
        // /** Handler for click on down arrow in the navigation bar*/
        // clickDownArrow: (): any => { return _jsxBoard().clickDownArrow() },
        // /** Handler for click on left arrow in the navigation bar*/
        // clickLeftArrow: (): any => { return _jsxBoard().clickLeftArrow() },
        // /** Handler for click on right arrow in the navigation bar*/
        // clickRightArrow: (): any => { return _jsxBoard().clickRightArrow() },
        // /** Handler for click on up arrow in the navigation bar*/
        // clickUpArrow: (): any => { return _jsxBoard().clickUpArrow() },
        // /** Creates a new geometric element of type elementType.*/
        // create: (elementType: string, parents: string, attributes: Object): any => { return _jsxBoard().create(elementType, parents, attributes) },
        // /** Deprecated name for JXG.Board.create.*/
        // createElement: (): any => { return _jsxBoard().createElement() },
        // /** Function to animate a curve rolling on another curve.*/
        // createRoulette: (c1: Object, c2: Object, start_c1: number, stepsize: number, direction: number, time: number, pointlist: Object[]): any => { return _jsxBoard().createRoulette(c1, c2, start_c1, stepsize, direction, time, pointlist) },
        // /** Remove highlighting of all elements.*/
        // dehighlightAll: (): any => { return _jsxBoard().dehighlightAll() },
        // /** Initializes color blindness simulation.*/
        // emulateColorblindness: (deficiency: string): any => { return _jsxBoard().emulateColorblindness(deficiency) },
        // /** After construction of the object the visibility is set and the label is constructed if necessary.*/
        // finalizeAdding: (obj:Object): any => { return _jsxBoard().finalizeAdding(obj) },
        // /** If fullscreen mode is toggled, the possible CSS transformations which are applied to the JSXGraph canvas have to be reread.*/
        // fullscreenListener: (evt: Event): any => { return _jsxBoard().fullscreenListener(evt) },
        // /** Runs through all elements and calls their update() method and update the conditions.*/
        // fullUpdate: (): any => { return _jsxBoard().fullUpdate() },
        // /** Generates unique id for a board.*/
        // generateId: (): any => { return _jsxBoard().generateId() },
        // /** Generates an unique name for the given object.*/
        // generateName: (object: Object): any => { return _jsxBoard().generateName(object) },
        // /** Triggered on iOS / Safari while the user inputs a gesture(e.g.*/
        // gestureChangeListener: (evt: Event): any => { return _jsxBoard().gestureChangeListener(evt) },
        // /** Called by iOS / Safari as soon as the user starts a gesture.*/
        // gestureStartListener: (evt: Event): any => { return _jsxBoard().gestureStartListener(evt) },
        // /** Collects all elements under current mouse position.*/
        // getAllObjectsUnderMouse: (evt: Event): any => { return _jsxBoard().getAllObjectsUnderMouse(evt) },
        // /** Collects all elements under current mouse position plus current user coordinates of mouse cursor.*/
        // getAllUnderMouse: (evt: Event): any => { return _jsxBoard().getAllUnderMouse(evt) },
        // /** Calculates mouse coordinates relative to the boards container.*/
        // getCoordsTopLeftCorner: (): any => { return _jsxBoard().getCoordsTopLeftCorner() },
        // /** Get the position of the pointing device in screen coordinates, relative to the upper left corner of the host tag.*/
        // getMousePosition: (e: Event, i: number): any => { return _jsxBoard().getMousePosition(e, i) },
        // /** This method calculates the user coords of the current mouse coordinates.*/
        // getUsrCoordsOfMouse: (evt: Event): any => { return _jsxBoard().getUsrCoordsOfMouse(evt) },
        // /** Checks if the given point is inside the boundingbox.*/
        // hasPoint: (x:number,y:number): any => { return _jsxBoard().hasPoint(x, y) },
        // /** Changes the text of the info box to what is provided via text.*/
        // highlightCustomInfobox: (text:string,el:Object): any => { return _jsxBoard().highlightCustomInfobox(text, el) },
        // /** Changes the text of the info box to show the given coordinates.*/
        // highlightInfobox: (x:number,y:number,el?:Object): any => { return _jsxBoard().highlightInfobox(x, y, el) },
        // /** Initialize some objects which are contained in every GEONExT construction by default, but are not contained in the gxt files.*/
        // initGeonextBoard: (): any => { return _jsxBoard().initGeonextBoard() },
        // /** Initialize the info box object which is used to display the coordinates of points near the mouse pointer,*/
        // initInfobox: (attributes:Object): any => { return _jsxBoard().initInfobox(attributes) },
        // /** Collects all elements below the current mouse pointer and fulfilling the following constraints: isDraggable, visible, not fixed, not frozen*/
        // initMoveObject: (x:number,y:number,evt:Event,type:string): any => { return _jsxBoard().initMoveObject(x, y, evt, type) },
        // /** Initiate moving the origin.. This is used in mouseDown and touchStart listeners. */
        // initMoveOrigin: (x:number,y:number): any => { return _jsxBoard().initMoveOrigin(x, y) },
        // /** Allow moving of JSXGraph elements with arrow keys.*/
        // keyDownListener: (evt: Event): any => { return _jsxBoard().keyDownListener(evt) },
        // /** Event listener for SVG elements getting focus.*/
        // keyFocusInListener: (evt: Event): any => { return _jsxBoard().keyFocusInListener(evt) },
        // /** Event listener for SVG elements losing focus.*/
        // keyFocusOutListener: (): any => { return _jsxBoard().keyFocusOutListener(evt) },
        // /** Migrate the dependency properties of the point src to the point dest and delete the point src.*/
        // migratePoint: (): any => { return _jsxBoard().migratePoint(src, dest, copyName) },
        // /** This method is called by the browser when the mouse device clicks on the screen.*/
        // mouseClickListener: (evt: Event): any => { return _jsxBoard().mouseClickListener(evt) },
        // /** This method is called by the browser when the mouse device double clicks on the screen.*/
        // mouseDblClickListener: (evt: Event): any => { return _jsxBoard().mouseDblClickListener(evt) },
        // /** This method is called by the browser when the mouse button is clicked.*/
        // mouseDownListener: (evt: Event): any => { return _jsxBoard().mouseDownListener(evt) },
        // /** This method is called by the browser when the mouse is moved.*/
        // mouseMoveListener: (evt: Event): any => { return _jsxBoard().mouseMoveListener(evt) },
        // /** This method is called by the browser when the mouse button is released.*/
        // mouseUpListener: (evt: Event): any => { return _jsxBoard().mouseUpListener(evt) },
        // /** Handler for mouse wheel events.*/
        // mouseWheelListener: (evt: Event): any => { return _jsxBoard().mouseWheelListener(evt) },
        // /** Moves an object.*/
        // moveObject: (x:number,y:number,o:Object,evt:Event,type:string): any => { return _jsxBoard().moveObject(x, y, o, evt, type) },
        // /** Moves the origin and initializes an update of all elements.*/
        // moveOrigin: (): any => { return _jsxBoard().moveOrigin(x, y, diff) },
        // /** This method is called by the browser when a pointer device clicks on the screen. */
        // pointerClickListener: (evt: Event): any => { return _jsxBoard().pointerClickListener(evt) },
        // /**     This method is called by the browser when a pointer device double clicks on the screen.*/
        // pointerDblClickListener: (evt: Event): any => { return _jsxBoard().pointerDblClickListener(evt) },
        // /** This method is called by the browser when a pointing device is pressed on the screen.*/
        // pointerDownListener: (): any => { return _jsxBoard().pointerDownListener(evt, object, allowDefaultEventHandling) },
        // /** Triggered by the pointerleave event.*/
        // pointerLeaveListener: (evt: Event): any => { return _jsxBoard().pointerLeaveListener(evt) },
        // /** Called periodically by the browser while the user moves a pointing device across the screen.*/
        // pointerMoveListener: (evt: Event): any => { return _jsxBoard().pointerMoveListener(evt) },
        // /** Triggered as soon as the user stops touching the device with at least one finger.*/
        // pointerUpListener: (evt: Event): any => { return _jsxBoard().pointerUpListener(evt) },
        // /** Sets for all objects the needsUpdate flag to 'true'.*/
        // prepareUpdate: (): any => { return _jsxBoard().prepareUpdate(drag) },
        // /** Update the container before and after printing.*/
        // printListener: (): any => { return _jsxBoard().printListener(evt) },
        // /** Wrapper for printListener to be used in mediaQuery matches.*/
        // printListenerMatch: (): any => { return _jsxBoard().printListenerMatch(mql) },
        // /** Removes the ancestors of an object an the object itself from board and renderer.*/
        // removeAncestors: (): any => { return _jsxBoard().removeAncestors(object) },
        // /** Deletes a board from the list of dependent boards.*/
        // removeChild: (): any => { return _jsxBoard().removeChild(board) },
        // /** Remove all event handlers from the board object*/
        // removeEventHandlers: (): any => { return _jsxBoard().removeEventHandlers() },
        // /** Remove all registered event handlers regarding fullscreen mode.*/
        // removeFullscreenEventHandlers: (): any => { return _jsxBoard().removeFullscreenEventHandlers() },
        // /** Removes all grids assigned to this board.*/
        // removeGrids: (): any => { return _jsxBoard().removeGrids() },
        // /** Please use JXG.Board.off instead.*/
        // removeHook: (): any => { return _jsxBoard().removeHook(id) },
        // /** Remove all registered touch event handlers.*/
        // removeKeyboardEventHandlers: (): any => { return _jsxBoard().removeKeyboardEventHandlers() },
        // /** De - register mouse event handlers.*/
        // removeMouseEventHandlers: (): any => { return _jsxBoard().removeMouseEventHandlers() },
        // /** Removes object from board and renderer.*/
        // removeObject: (): any => { return _jsxBoard().removeObject(object, saveMethod) },
        // /** Remove MSPointer * Event handlers.*/
        // removePointerEventHandlers: (): any => { return _jsxBoard().removePointerEventHandlers() },
        // /** Remove resize related event handlers*/
        // removeResizeEventHandlers: (): any => { return _jsxBoard().removeResizeEventHandlers() },
        // /** Remove all registered touch event handlers.*/
        // removeTouchEventHandlers: (): any => { return _jsxBoard().removeTouchEventHandlers() },
        // /** Change the height and width of the board's container.*/
        // resizeContainer: (canvasWidth: number, canvasHeight: number, dontset: Boolean, dontSetBoundingBox: Boolean): any => { return _jsxBoard().resizeContainer(canvasWidth, canvasHeight, dontset, dontSetBoundingBox) },
        // /** Fallback solutions if there is no resizeObserver available in the browser.*/
        // resizeListener: (): any => { return _jsxBoard().resizeListener() },
        // /** Listener to watch for scroll events.*/
        // scrollListener: (evt: Event): any => { return _jsxBoard().scrollListener(evt) },
        // /** Select a single or multiple elements at once.*/
        // select: (): any => { return _jsxBoard().select(str, onlyByIdOrName) },
        // /** Sets an arbitrary number of attributes.*/
        // setAttribute: (): any => { return _jsxBoard().setAttribute(attributes) },
        // /** Set the bounding box of the board.*/
        // setBoundingBox: (): any => { return _jsxBoard().setBoundingBox(bbox, keepaspectratio, setZoom) },
        // /** Composes an id for an element.*/
        // setId: (): any => { return _jsxBoard().setId(obj, type) },
        // /** Lists the dependencies graph in a new HTML - window.*/
        // showDependencies: (): any => { return _jsxBoard().showDependencies() },
        // /** Lists the XML code of the construction in a new HTML - window.*/
        // showXML: (): any => { return _jsxBoard().showXML() },
        // /** Watch for changes of the visibility of the JSXGraph container element.*/
        // startIntersectionObserver: (): any => { return _jsxBoard().startIntersectionObserver() },
        // /** Start observer which reacts to size changes of the JSXGraph container div element.*/
        // startResizeObserver: (): any => { return _jsxBoard().startResizeObserver() },
        // /** Start selection mode.*/
        // startSelectionMode: (): any => { return _jsxBoard().startSelectionMode() },
        // /** Cancels all running animations.*/
        // stopAllAnimation: (): any => { return _jsxBoard().stopAllAnimation() },
        // /** Stop the intersection observer*/
        // stopIntersectionObserver: (): any => { return _jsxBoard().stopIntersectionObserver() },
        // /** Stops the resize observer.*/
        // stopResizeObserver: (): any => { return _jsxBoard().stopResizeObserver() },
        // /** Finalize the selection: disable selection mode and return _jsxBoard(). the coordinates of the selection rectangle.*/
        // stopSelectionMode: (): any => { return _jsxBoard().stopSelectionMode() },
        // /** Suppresses the default event handling.*/
        // suppressDefault: (): any => { return _jsxBoard().suppressDefault(e) },
        // /** Stop updates of the board.*/
        // suspendUpdate: (): any => { return _jsxBoard().suspendUpdate() },
        // /** Expand the JSXGraph construction to fullscreen.*/
        // toFullscreen: (): any => { return _jsxBoard().toFullscreen(id) },
        // /** Triggered as soon as the user stops touching the device with at least one finger.*/
        // touchEndListener: (evt: Event): any => { return _jsxBoard().touchEndListener(evt) },
        // /** Called periodically by the browser while the user moves his fingers across the device.*/
        // touchMoveListener: (evt: Event): any => { return _jsxBoard().touchMoveListener(evt) },
        // /** This method is called by the browser when a finger touches the surface of the touch - device.*/
        // touchStartListener: (evt: Event): any => { return _jsxBoard().touchStartListener(evt) },
        // /** Moves elements in multitouch mode.*/
        // twoFingerMove: (): any => { return _jsxBoard().twoFingerMove(p1, p2, o, evt) },
        // /** Moves, rotates and scales a line or polygon with two fingers.*/
        // twoFingerTouchObject: (): any => { return _jsxBoard().twoFingerTouchObject(tar, drag, id) },
        // /** Enable updates of the board.*/
        // unsuspendUpdate: (): any => { return _jsxBoard().unsuspendUpdate() },
        // /** Runs through most elements and calls their update() method and update the conditions.*/
        // update: (): any => { return _jsxBoard().update(drag) },
        // /** updates conditions*/
        // updateConditions: (): any => { return _jsxBoard().updateConditions() },
        // /** Update the width and height of the JSXGraph container div element.*/
        // updateContainerDims: (): any => { return _jsxBoard().updateContainerDims(width, height) },
        // /** Update the coords object of all elements which possess this property.*/
        // updateCoords: (): any => { return _jsxBoard().updateCoords() },
        // /** Update CSS transformations of type scaling.*/
        // updateCSSTransforms: (): any => { return _jsxBoard().updateCSSTransforms() },
        // /** Runs through all elements and calls their update() method.*/
        // updateElements: (): any => { return _jsxBoard().updateElements(drag) },
        // /** Runs through all hooked functions and calls them.*/
        // updateHooks: (): any => { return _jsxBoard().updateHooks(m) },
        // /** Updates and displays a little info box to show coordinates of current selected points.*/
        // updateInfobox: (): any => { return _jsxBoard().updateInfobox(el) },
        // /** Runs through all elements and calls their update() method.*/
        // updateRenderer: (): any => { return _jsxBoard().updateRenderer() },
        // /** Runs through all elements and calls their update() method.*/
        // updateRendererCanvas: (): any => { return _jsxBoard().updateRendererCanvas() },
        // /** Zooms the board so every visible point is shown.*/
        // zoomAllPoints: (): any => { return _jsxBoard().zoomAllPoints() },
        // /** Reset the bounding box and the zoom level to 100 % such that a given set of elements is within the board's viewport.*/
        // zoomElements: (elements: any): any => { return _jsxBoard().zoomElements(elements) },
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
        setView: (az, el, r) => {
            console.log('setview from function 527');
            return _jsxView3d().setView(az, el, r);
        },
        // animateAzimuth:()=> _jsxView3d().animateAzimuth(),
        // worldToFocal(pWorld, homog)
        // Map world coordinates to focal coordinates.
    };
    /** Initialize a board other than jxgbox */
    function initBoard(canvas = '', attributes) {
        return window.TSXGlobal.jInitBoard(canvas, attributes);
    }
    TSX.initBoard = initBoard;
    /** legacy create for 2D elements */
    function create(element, params, attributes = {}) {
        initBoard();
        if (element.toLowerCase().includes('3d')) // 3D
            return _jsxView3d().create(element, params, attributes);
        else
            return _jsxBoard().create(element, params, attributes);
    }
    TSX.create = create;
    TSX.JsxMath = { Matrix: {
            // Matrix
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
            // Geometry
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
            // Numerics
            bezier(points) { return window.JXG.Math.bezier(points); },
            bspline(points, order) { return window.JXG.Math.bspline(points, order); },
            CardinalSpline(points, tau) { return window.JXG.Math.CardinalSpline(points, tau); },
        },
        Statistics: {
            // Statistics
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
    /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
               
   *```js
   TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
   TSX.point([3,3]),{fixed:true, showInfobox:true}
   TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
   TSX.point([1,2,2])  // three axis definition - [z,x,y]
               
   *```
               
    also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, TransformPoint, and others. */
    function point(position, attributes = {}) {
        return _jsxBoard().create('point', position, defaultAttributes(attributes));
    }
    TSX.point = point;
    // implementation of signature,  hidden from user
    function line(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        if (typeof a == 'number' || typeof a == 'function')
            // reorder the a,b,c elements of the line
            return _jsxBoard().create('line', [c, a, b], defaultAttributes(d)); // as Line
        else //  two points
            return _jsxBoard().create('line', [a, b], defaultAttributes(c)); // as Line
    }
    TSX.line = line;
    /** create a chart */
    function chart(f, attributes = {}) {
        return TSX._jsxBoard().create('chart', [f,], defaultAttributes(attributes));
    }
    TSX.chart = chart;
    /** A circle can be constructed by providing a center and a point on the circle,
                            or a center and a radius (given as a number, function, line, or circle).
                            If the radius is a negative value, its absolute values is taken.
                   
   *```js
                   TSX.circle(P1,1])
                   TSX.circle([0,0],[1,0])
                   
   *```
                   
   Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle. */
    function circle(centerPoint, remotePoint, attributes = {}) {
        let newObject; // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
        if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0]) && Array.isArray(remotePoint[1])) {
            return _jsxBoard().create("circle", [centerPoint, remotePoint[0], remotePoint[1]], defaultAttributes(attributes));
        }
        else {
            return _jsxBoard().create("circle", [centerPoint, remotePoint], defaultAttributes(attributes));
        }
    }
    TSX.circle = circle;
    /** In 3D space, a circle consists of all points on a given plane with a given distance from a given point.
                       The given point is called the center, and the given distance is called the radius.
                       A circle can be constructed by providing a center, a normal vector (either homogenous or cartesian),
                       and a radius (given as a number or function).
                       
   *```js
   let a = TSX.point3D([-3, 0, 0])
   let circle = TSX.circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
   ```
    */
    function circle3d(center, normal, radius, attributes = {}) {
        let tempNormal = (typeof normal === "function") ? normal() : normal;
        if (tempNormal.length === 3)
            tempNormal.unshift(0); // convert [a,b,c] to [0,a,b,c]
        return _jsxView3d().create("circle3d", [center, normal, radius], attributes);
    }
    TSX.circle3d = circle3d;
    // implementation of signature,  hidden from user
    function curve(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('curve', params, defaultAttributes(attrs));
    }
    TSX.curve = curve;
    // implementation of signature,  hidden from user
    function curve3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('curve3d', params, defaultAttributes(attrs));
    }
    TSX.curve3d = curve3d;
    /** This element is used to provide a constructor for arbitrary content in an SVG foreignObject container.
   ```js
   TSX.foreignObject(
       `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
       [0, -3], [9, 6],
       {layer: 8, fixed: true})
   ```
                 */
    function foreignObject(content, position, size = null, attributes = {}) {
        return TSX._jsxBoard().create('foreignObject', [content, position, size,], defaultAttributes(attributes));
    }
    TSX.foreignObject = foreignObject;
    /** Array of Points */
    function group(pointArray, attributes = {}) {
        return TSX._jsxBoard().create('group', [pointArray,].flat(), defaultAttributes(attributes));
    }
    TSX.group = group;
    /** Display an image.  The first element is the location URL of the image.
                   A collection of space icons is provided, press CTRL+I to show the list.
                   The second parameter sets the lower left point of the image.
                   The optional third parameter sets the size multiplier of the image, default is [1,1].
                   
   If you want to move the image, just tie the image to a point, maybe at the center of the image.
                    For more flexibility, see TSX.Rotate() and TSX.Translate()
                   
   *```js
               TSX.image('icons/earth.png', [0, 0],[2,2])
               let p1 = TSX.point([3, 2], { opacity: .1 })
               TSX.image('icons/moon-full-moon.png', [()=>p1.X(),()=>p1.Y()])
                   
   *``` */
    function image(url, lowerLeft, widthHeight = [1, 1], attributes = {}) {
        return TSX._jsxBoard().create('image', [url, lowerLeft, widthHeight,], defaultAttributes(attributes));
    }
    TSX.image = image;
    // implementation of signature,  hidden from user
    function implicitcurve(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('implicitcurve', params, defaultAttributes(attrs));
    }
    TSX.implicitcurve = implicitcurve;
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    function intersectionCircle3d(sphere1, sphere, attributes = {}) {
        return TSX._jsxView3d().create('intersectioncircle3d', [sphere1, sphere,], defaultAttributes(attributes));
    }
    TSX.intersectionCircle3d = intersectionCircle3d;
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    function intersectionLine3d(plane1, plane2, attributes = {}) {
        return TSX._jsxView3d().create('intersectionline3d', [plane1, plane2,], defaultAttributes(attributes));
    }
    TSX.intersectionLine3d = intersectionLine3d;
    // implementation of signature,  hidden from user
    function line3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('line3d', params, defaultAttributes(attrs));
    }
    TSX.line3d = line3d;
    // implementation of signature,  hidden from user
    function plane3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('plane3d', params, defaultAttributes(attrs));
    }
    TSX.plane3d = plane3d;
    // implementation of signature,  hidden from user
    function point3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('point3d', params, defaultAttributes(attrs));
    }
    TSX.point3d = point3d;
    /** Array of Points */
    function polygon(pointArray, attributes = {}) {
        return TSX._jsxBoard().create('polygon', [pointArray,].flat(), defaultAttributes(attributes));
    }
    TSX.polygon = polygon;
    /** A polygon is a sequence of points connected by lines, with the last point connecting back to the first one. The points are given by a list of Point3D objects or a list of coordinate arrays. Each two consecutive points of the list define a line. */
    function polygon3d(vertices, attributes = {}) {
        return TSX._jsxView3d().create('polygon3d', [vertices,], defaultAttributes(attributes));
    }
    TSX.polygon3d = polygon3d;
    /** Display a message
                                   
   *```js
   TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
   TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
   TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                   
   *``` */
    function text(position, label, attributes = {}) {
        position.push(label);
        return _jsxBoard().create('text', position, defaultAttributes(attributes));
    }
    TSX.text = text;
    // implementation of signature,  hidden from user
    function text3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return _jsxView3d().create('text3d', [params].flat(), defaultAttributes(attrs));
    }
    TSX.text3d = text3d;
    /** Ticks are used as distance markers on a line or curve. They are mainly used for axis elements and slider elements.  */
    function ticks(line, attributes = {}) {
        return TSX._jsxBoard().create('ticks', [line,], defaultAttributes(attributes));
    }
    TSX.ticks = ticks;
    /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. */
    function sector(P1, P2, P3, attributes = {}) {
        return TSX._jsxBoard().create('sector', [P1, P2, P3,], defaultAttributes(attributes));
    }
    TSX.sector = sector;
    /** Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
    function vectorfield(fxfy, horizontalMesh = [-6, 25, 6], verticalMesh = [-6, 25, 6], attributes = {}) {
        return TSX._jsxBoard().create('vectorfield', [fxfy, horizontalMesh, verticalMesh,], defaultAttributes(attributes));
    }
    TSX.vectorfield = vectorfield;
    // implementation of signature,  hidden from user
    function angle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('angle', params, defaultAttributes(attrs));
    }
    TSX.angle = angle;
    /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                               
   *```js
                               let arc = TSX.arc([-8,5],[-4,5],[-9,9]])
                               
   *```
                               
    To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
    function arc(origin, from, to, attributes = {}) {
        return TSX._jsxBoard().create('arc', [origin, from, to,], defaultAttributes(attributes));
    }
    TSX.arc = arc;
    /** Arrow defined by two points (like a Segment) with arrow at P2
                               
   *```js
                               
    let arrow = TSX.arrow([-8,5],[-4,5])
                               
   *```
                               
    */
    function arrow(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('arrow', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.arrow = arrow;
    // implementation of signature,  hidden from user
    function parallel(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('parallel', params, defaultAttributes(attrs));
    }
    TSX.parallel = parallel;
    /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
    function arrowparallel(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('arrowparallel', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.arrowparallel = arrowparallel;
    /** Create an Axis with two points (like a Line) */
    function axis(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('axis', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.axis = axis;
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
    function bezierCurve(points, attributes = {}) {
        return _jsxBoard().create('curve', window.JXG.Math.Numerics.bezier(points), defaultAttributes(attributes));
    }
    TSX.bezierCurve = bezierCurve;
    /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
    function bisector(A, B, C, attributes = {}) {
        return TSX._jsxBoard().create('bisector', [A, B, C,], defaultAttributes(attributes));
    }
    TSX.bisector = bisector;
    /** Bisect a Line defined with two points */
    function bisectorlines(l1, l2, attributes = {}) {
        return TSX._jsxBoard().create('bisectorlines', [l1, l2,], defaultAttributes(attributes));
    }
    TSX.bisectorlines = bisectorlines;
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
    function button(position, label, handler, attributes = {}) {
        position.push(label, handler); // position is already array, eg: [1,2], just use it as params
        return _jsxBoard().create('button', position, defaultAttributes(attributes));
    }
    TSX.button = button;
    /** This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
    function cardinalspline(data, funct, splineType, attributes = {}) {
        return TSX._jsxBoard().create('cardinalspline', [data, funct, splineType,], defaultAttributes(attributes));
    }
    TSX.cardinalspline = cardinalspline;
    /** This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners. */
    function checkbox(position, label, attributes = {}) {
        position.push(label);
        return _jsxBoard().create('checkbox', position, defaultAttributes(attributes));
    }
    TSX.checkbox = checkbox;
    /** Creates a Point at the center of a circle defined by 3 points */
    function circumcenter(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcenter', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcenter = circumcenter;
    /** Draw a circle defined by 3 points */
    function circumcircle(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcircle', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcircle = circumcircle;
    /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
    function circumcircleArc(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcircleArc', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcircleArc = circumcircleArc;
    /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
    function circumcircleSector(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('circumcircleSector', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.circumcircleSector = circumcircleSector;
    /** A comb to display domains of inequalities. */
    function comb(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('comb', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.comb = comb;
    // implementation of signature,  hidden from user
    function conic(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('conic', params, defaultAttributes(attrs));
    }
    TSX.conic = conic;
    /** Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    function curveDifference(curve1, curve2, attributes = {}) {
        return TSX._jsxBoard().create('curveDifference', [curve1, curve2,], defaultAttributes(attributes));
    }
    TSX.curveDifference = curveDifference;
    /** Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    function curveIntersection(curve1, curve2, attributes = {}) {
        return TSX._jsxBoard().create('curveIntersection', [curve1, curve2,], defaultAttributes(attributes));
    }
    TSX.curveIntersection = curveIntersection;
    /** Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
    function curveUnion(curve1, curve2, attributes = {}) {
        return TSX._jsxBoard().create('curveUnion', [curve1, curve2,], defaultAttributes(attributes));
    }
    TSX.curveUnion = curveUnion;
    /** This element is used to provide a constructor for the graph showing the (numerical) derivative of a given curve. */
    function derivative(curve, attributes = {}) {
        return TSX._jsxBoard().create('derivative', [curve,], defaultAttributes(attributes));
    }
    TSX.derivative = derivative;
    // implementation of signature,  hidden from user
    function ellipse(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('ellipse', params, defaultAttributes(attrs));
    }
    TSX.ellipse = ellipse;
    // implementation of signature,  hidden from user
    function parametricSurface3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('parametricsurface3d', params, defaultAttributes(attrs));
    }
    TSX.parametricSurface3d = parametricSurface3d;
    /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
   ```js
   let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
   ``` */
    function functiongraph(funct, leftBorder, rightBorder, attributes = {}) {
        return TSX._jsxBoard().create('functiongraph', [funct, leftBorder, rightBorder,], defaultAttributes(attributes));
    }
    TSX.functiongraph = functiongraph;
    /** A 3D functiongraph visualizes a map (x, y) → f(x, y).  */
    function functiongraph3d(xyFunction, xRange, yRange, attributes = {}) {
        return TSX._jsxView3d().create('functiongraph3d', [xyFunction, xRange, yRange,], defaultAttributes(attributes));
    }
    TSX.functiongraph3d = functiongraph3d;
    // implementation of signature,  hidden from user
    function glider(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        params = b ? [b[0] ?? 0, b[1] ?? 0, a] : [0, 0, a];
        return _jsxBoard().create('glider', params, defaultAttributes(attrs));
    }
    TSX.glider = glider;
    /** Glider3D is an alias for JSXGraph's Point3D(). */
    function glider3d(element, initial = [0, 0, 0], attributes = {}) {
        return _jsxView3d().create("point3d", [initial, element], attributes);
    }
    TSX.glider3d = glider3d;
    // implementation of signature,  hidden from user
    function grid(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('grid', params, defaultAttributes(attrs));
    }
    TSX.grid = grid;
    /** Hatches can be used to mark congruent lines or curves. */
    function hatch(line, numberHatches, attributes = {}) {
        return TSX._jsxBoard().create('hatch', [line, numberHatches,], defaultAttributes(attributes));
    }
    TSX.hatch = hatch;
    /** This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
    function hyperbola(point1, point2, point3, start = -3.14, end = 3.14, attributes = {}) {
        return TSX._jsxBoard().create('hyperbola', [point1, point2, point3, start, end,], defaultAttributes(attributes));
    }
    TSX.hyperbola = hyperbola;
    /** Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html */
    function incenter(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('incenter', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.incenter = incenter;
    /** An incircle is given by three points. */
    function incircle(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('incircle', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.incircle = incircle;
    /** Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y */
    function inequality(boundaryLine, attributes = {}) {
        return TSX._jsxBoard().create('inequality', [boundaryLine,], defaultAttributes(attributes));
    }
    TSX.inequality = inequality;
    /** This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners. */
    function input(position, label, initial = "", attributes = {}) {
        position.push(label, initial);
        return _jsxBoard().create('input', position, defaultAttributes(attributes));
    }
    TSX.input = input;
    /** This element is used to visualize the integral of a given curve over a given interval. */
    function integral(range, curve, attributes = {}) {
        return TSX._jsxBoard().create('integral', [range, curve,], defaultAttributes(attributes));
    }
    TSX.integral = integral;
    // implementation of signature,  hidden from user
    function intersection(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return _jsxBoard().create('intersection', params, defaultAttributes(attrs));
    }
    TSX.intersection = intersection;
    /** Creates a Legend for a Chart Element
                                   
   *```js
   * let labels = ['a','b','c']
   * let colors = ['red','green','blue']
   * let legend = TSX.legend([2,2],labels,colors)
   *```
                                   
    */
    function legend(lowerLeft, labels, colors, attributes = {}) {
        attributes['labels'] = labels;
        attributes['colors'] = colors;
        return _jsxBoard().create('legend', lowerLeft, defaultAttributes(attributes));
    }
    TSX.legend = legend;
    /** This element is used to visualize the locus of a given dependent point. */
    function locus(point, attributes = {}) {
        return TSX._jsxBoard().create('locus', [point,], defaultAttributes(attributes));
    }
    TSX.locus = locus;
    /** A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
    function majorArc(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('majorArc', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.majorArc = majorArc;
    /** A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function majorSector(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('majorSector', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.majorSector = majorSector;
    /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
   ```js
    let p = TSX.point([4, 9]);
    let c = TSX.circle([4, 7], p);
    TSX.measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
    TSX.measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
   ```
    */
    function measurement(locn, measure, element, attributes = {}) {
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
        return _jsxBoard().create('measurement', [x, y, [measure, element]], attributes);
    }
    TSX.measurement = measurement;
    // implementation of signature,  hidden from user
    function mesh3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('mesh3d', params, defaultAttributes(attrs));
    }
    TSX.mesh3d = mesh3d;
    // implementation of signature,  hidden from user
    function midpoint(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('midpoint', params, defaultAttributes(attrs));
    }
    TSX.midpoint = midpoint;
    /** A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
    function minorArc(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('minorArc', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.minorArc = minorArc;
    /** A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function minorSector(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('minorSector', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.minorSector = minorSector;
    /**  */
    function mirrorelement(element, acrossPoint, attributes = {}) {
        return TSX._jsxBoard().create('mirrorelement', [element, acrossPoint,], defaultAttributes(attributes));
    }
    TSX.mirrorelement = mirrorelement;
    /** A mirror point will be constructed. */
    function mirrorpoint(p1, p2, attributes = {}) {
        return TSX._jsxBoard().create('mirrorpoint', [p1, p2,], defaultAttributes(attributes));
    }
    TSX.mirrorpoint = mirrorpoint;
    /** A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function nonReflexAngle(point1, point2, point3, attributes = {}) {
        return TSX._jsxBoard().create('nonReflexAngle', [point1, point2, point3,], defaultAttributes(attributes));
    }
    TSX.nonReflexAngle = nonReflexAngle;
    // implementation of signature,  hidden from user
    function normal(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('normal', params, defaultAttributes(attrs));
    }
    TSX.normal = normal;
    /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
   ```js
   let s1 = TSX.segment(p1, p2)
   let p3 = TSX.point([0, -1])
   TSX.orthogonalprojection(p3, s1)
   ``` */
    function orthogonalprojection(point, line, attributes = {}) {
        return TSX._jsxBoard().create('orthogonalprojection', [point, line,], defaultAttributes(attributes));
    }
    TSX.orthogonalprojection = orthogonalprojection;
    /** This element is used to provide a constructor for the ”other” intersection point. */
    function otherIntersection(element1, element2, firstIntersection, attributes = {}) {
        return _jsxBoard().create('otherintersection', [element1, element2, firstIntersection], attributes);
    }
    TSX.otherIntersection = otherIntersection;
    /** This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix). */
    function parabola(focalPoint, line, attributes = {}) {
        return TSX._jsxBoard().create('parabola', [focalPoint, line,], defaultAttributes(attributes));
    }
    TSX.parabola = parabola;
    // implementation of signature,  hidden from user
    function parallelpoint(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('parallelpoint', params, defaultAttributes(attrs));
    }
    TSX.parallelpoint = parallelpoint;
    // implementation of signature,  hidden from user
    function segment(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('segment', params, defaultAttributes(attrs));
    }
    TSX.segment = segment;
    /**  */
    function parallelogram(p1, p2, p3, attributes = {}) {
        return TSX._jsxBoard().create('parallelogram', [p1, p2, p3,], defaultAttributes(attributes));
    }
    TSX.parallelogram = parallelogram;
    /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
    function perpendicular(line, point, attributes = {}) {
        return TSX._jsxBoard().create('perpendicular', [line, point,], defaultAttributes(attributes));
    }
    TSX.perpendicular = perpendicular;
    /** Create a point on a line where a perpendicular to a given point would intersect that line. */
    function perpendicularPoint(line, point, attributes = {}) {
        return TSX._jsxBoard().create('perpendicularPoint', [line, point,], defaultAttributes(attributes));
    }
    TSX.perpendicularPoint = perpendicularPoint;
    /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
    function perpendicularSegment(line, point, attributes = {}) {
        return TSX._jsxBoard().create('perpendicularSegment', [line, point,], defaultAttributes(attributes));
    }
    TSX.perpendicularSegment = perpendicularSegment;
    /** This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle. */
    function polarLine(conic, point, attributes = {}) {
        return TSX._jsxBoard().create('polarLine', [conic, point,], defaultAttributes(attributes));
    }
    TSX.polarLine = polarLine;
    /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
    function polePoint(conic, line, attributes = {}) {
        return TSX._jsxBoard().create('polePoint', [conic, line,], defaultAttributes(attributes));
    }
    TSX.polePoint = polePoint;
    /** Array of Points */
    function polygonalChain(pointArray, attributes = {}) {
        return TSX._jsxBoard().create('polygonalChain', [pointArray,].flat(), defaultAttributes(attributes));
    }
    TSX.polygonalChain = polygonalChain;
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
    function polyhedron3d(vertexList, faceArray, attributes = {}) {
        return TSX._jsxView3d().create('polyhedron3d', [vertexList, faceArray,], defaultAttributes(attributes));
    }
    TSX.polyhedron3d = polyhedron3d;
    /** This element is used to provide a constructor for the radical axis with respect to two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
    function radicalAxis(circle1, circle2, attributes = {}) {
        return TSX._jsxBoard().create('radicalAxis', [circle1, circle2,], defaultAttributes(attributes));
    }
    TSX.radicalAxis = radicalAxis;
    /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
    function reflection(object, reflectLine, attributes = {}) {
        return TSX._jsxBoard().create('reflection', [object, reflectLine,], defaultAttributes(attributes));
    }
    TSX.reflection = reflection;
    /** A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
    function reflexAngle(point1, point2, point3, attributes = {}) {
        return TSX._jsxBoard().create('reflexAngle', [point1, point2, point3,], defaultAttributes(attributes));
    }
    TSX.reflexAngle = reflexAngle;
    /** Constructs a regular polygon. It needs two points which define the base line and the number of vertices. */
    function regularPolygon(P1, P2, nVertices, attributes = {}) {
        return TSX._jsxBoard().create('regularPolygon', [P1, P2, nVertices,], defaultAttributes(attributes));
    }
    TSX.regularPolygon = regularPolygon;
    /** Visualize the Riemann sum which is an approximation of an integral by a finite sum. It is realized as a special curve. The returned element has the method Value() which returns the sum of the areas of the bars.
   
                           In case of type 'simpson' and 'trapezoidal', the horizontal line approximating the function value is replaced by a parabola or a secant. IN case of 'simpson', the parabola is approximated visually by a polygonal chain of fixed step width. */
    function riemannsum(funct, nBars, type = 'simpson', leftBorder, rightBorder, attributes = {}) {
        return TSX._jsxBoard().create('riemannsum', [funct, nBars, type, leftBorder, rightBorder,], defaultAttributes(attributes));
    }
    TSX.riemannsum = riemannsum;
    /** A semicircle is a special arc defined by two points. The arc hits both points. */
    function semicircle(P1, P2, attributes = {}) {
        return TSX._jsxBoard().create('semicircle', [P1, P2,], defaultAttributes(attributes));
    }
    TSX.semicircle = semicircle;
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
    function slider(StartPoint, EndPoint, minimum_initial_maximum, attributes = {}) {
        return TSX._jsxBoard().create('slider', [StartPoint, EndPoint, minimum_initial_maximum,], defaultAttributes(attributes));
    }
    TSX.slider = slider;
    /** Slope field. Plot a slope field given by a function f(x, y) returning a number. */
    function slopefield(func, xData, yData, attributes = {}) {
        return TSX._jsxBoard().create('slopefield', [func, xData, yData,], defaultAttributes(attributes));
    }
    TSX.slopefield = slopefield;
    // implementation of signature,  hidden from user
    function slopetriangle(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('slopetriangle', params, defaultAttributes(attrs));
    }
    TSX.slopetriangle = slopetriangle;
    // implementation of signature,  hidden from user
    function smartlabel(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('smartlabel', params, defaultAttributes(attrs));
    }
    TSX.smartlabel = smartlabel;
    /**  sphere consists of all points with a given distance from a given point. The given point is called the center, and the given distance is called the radius. */
    function sphere3d(center, radius, attributes = {}) {
        return TSX._jsxView3d().create('sphere3d', [center, radius,], defaultAttributes(attributes));
    }
    TSX.sphere3d = sphere3d;
    /** This element is used to provide a constructor for (natural) cubic spline curves. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
    function spline(points, attributes = {}) {
        return _jsxBoard().create('spline', points, defaultAttributes(attributes));
    }
    TSX.spline = spline;
    /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
   ```js
   let  curve = TSX.stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
   ```
    */
    function stepfunction(X, Y, attributes = {}) {
        return TSX._jsxBoard().create('stepfunction', [X, Y,], defaultAttributes(attributes));
    }
    TSX.stepfunction = stepfunction;
    // implementation of signature,  hidden from user
    function tangent(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxBoard().create('tangent', params, defaultAttributes(attrs));
    }
    TSX.tangent = tangent;
    /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
    function tangentTo(conic, point, N = 0, attributes = {}) {
        return TSX._jsxBoard().create('tangentTo', [conic, point, N,], defaultAttributes(attributes));
    }
    TSX.tangentTo = tangentTo;
    /** A tape measure can be used to measure distances between points. */
    function tapemeasure(P1, P2, attributes = {}) {
        return TSX._jsxBoard().create('tapemeasure', [P1, P2,], defaultAttributes(attributes));
    }
    TSX.tapemeasure = tapemeasure;
    /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
    function tracecurve(glider, point, attributes = {}) {
        return TSX._jsxBoard().create('tracecurve', [glider, point,], defaultAttributes(attributes));
    }
    TSX.tracecurve = tracecurve;
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
    function transformPoint(point, transform, attributes = {}) {
        return _jsxBoard().create('point', [point, transform], defaultAttributes(attributes));
    }
    TSX.transformPoint = transformPoint;
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
    function transformPoint3d(point, transform, attributes = {}) {
        return _jsxView3d().create('point3d', [point, transform], defaultAttributes(attributes));
    }
    TSX.transformPoint3d = transformPoint3d;
    // implementation of signature,  hidden from user
    function segment3d(a, b, c, d, e, f, g, h, i) {
        let params = [];
        let attrs = {};
        if (arguments.length == 1) {
            params = isAttribute(a) ? [] : [a,];
            attrs = isAttribute(a) ? a : {};
        }
        if (arguments.length == 2) {
            params = isAttribute(b) ? [a,] : [a, b,];
            attrs = isAttribute(b) ? b : {};
        }
        if (arguments.length == 3) {
            params = isAttribute(c) ? [a, b,] : [a, b, c,];
            attrs = isAttribute(c) ? c : {};
        }
        if (arguments.length == 4) {
            params = isAttribute(d) ? [a, b, c,] : [a, b, c, d,];
            attrs = isAttribute(d) ? d : {};
        }
        if (arguments.length == 5) {
            params = isAttribute(e) ? [a, b, c, d,] : [a, b, c, d, e,];
            attrs = isAttribute(e) ? e : {};
        }
        if (arguments.length == 6) {
            params = isAttribute(f) ? [a, b, c, d, e,] : [a, b, c, d, e, f,];
            attrs = isAttribute(f) ? f : {};
        }
        if (arguments.length == 7) {
            params = isAttribute(g) ? [a, b, c, d, e, f,] : [a, b, c, d, e, f, g,];
            attrs = isAttribute(g) ? g : {};
        }
        return TSX._jsxView3d().create('segment3d', params, defaultAttributes(attrs));
    }
    TSX.segment3d = segment3d;
    /** Create a Transform object with Translate properties. */
    function translate(dx, dy, attributes = {}) {
        return _jsxBoard().create('transform', [dx, dy], { type: 'translate' });
    }
    TSX.translate = translate;
    /** Create a Transform object with Rotate properties. */
    function rotate(angle, around, attributes = {}) {
        return _jsxBoard().create('Transform', [angle, around], { type: 'rotate' });
    }
    TSX.rotate = rotate;
    /** Create a Transform object with Scale properties.  Scaling is relative to [0,0]. */
    function scale(xMultiplier, yMultiplier, attributes = {}) {
        return _jsxBoard().create('transform', [xMultiplier, yMultiplier], { type: 'scale' });
    }
    TSX.scale = scale;
    /** Create a Transform3D object with Translate properties. */
    function translate3d(dx, dy, dz, attributes = {}) {
        return _jsxView3d().create('transform3d', [dx, dy, dz], { type: 'translate' });
    }
    TSX.translate3d = translate3d;
    /** Create a Transform3D object with Rotate properties around the normal vector N. */
    function rotate3d(angle, n, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle, n], { type: 'rotate' });
    }
    TSX.rotate3d = rotate3d;
    /** Create a Transform3D object with Rotate properties around the X axis. */
    function rotateX3d(angle, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle], { type: 'rotateX' });
    }
    TSX.rotateX3d = rotateX3d;
    /** Create a Transform3D object with Rotate properties around the Y axis. */
    function rotateY3d(angle, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle], { type: 'rotateY' });
    }
    TSX.rotateY3d = rotateY3d;
    /** Create a Transform3D object with Rotate properties around the Z axis. */
    function rotateZ3d(angle, attributes = {}) {
        return _jsxView3d().create('transform3d', [angle], { type: 'rotateZ' });
    }
    TSX.rotateZ3d = rotateZ3d;
    /** Create a Transform object with Scale properties.  Scaling is relative to [0,0,0]. */
    function scale3d(xMultiplier, yMultiplier, zMultiplier, attributes = {}) {
        return _jsxView3d().create('transform3d', [xMultiplier, yMultiplier, zMultiplier], { type: 'scale' });
    }
    TSX.scale3d = scale3d;
    class GeometryElement {
        /**  */
        get x() {
            return _jsxBoard().x;
        }
        /**  */
        get y() {
            return _jsxBoard().y;
        }
        /**  */
        get elType() {
            return _jsxBoard().elType;
        }
        /**  */
        get name() {
            return _jsxBoard().name;
        }
        /**  */
        get isDraggable() {
            return _jsxBoard().isDraggable;
        }
        set isDraggable(param) {
            _jsxBoard().isDraggable = param;
        }
        /** Removes all ticks from a line or curve. */
        removeAllTicks() {
            return this.removeAllTicks();
        }
        /** Add an element as a child to the current element. */
        addChild() {
            return this.addChild();
        }
        /** Adds ids of elements to the array this.parents. */
        addParents(parents) {
            return this.addParents(parents);
        }
        /** Rotate texts or images by a given degree. */
        addRotation() {
            return this.addRotation();
        }
        /** Adds ticks to this line or curve. */
        addTicks() {
            return this.addTicks();
        }
        /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
        animate() {
            return this.animate();
        }
        /** Dimensions of the smallest rectangle enclosing the element. */
        bounds() {
            return this.bounds();
        }
        /** Removes all objects generated by the trace function. */
        clearTrace() {
            return this.clearTrace();
        }
        /** Copy the element to background. */
        cloneToBackground() {
            return this.cloneToBackground();
        }
        /** Creates a label element for this geometry element. */
        createLabel() {
            return this.createLabel();
        }
        /** Format a number according to the locale set in the attribute ”intl”. */
        formatNumberLocale() {
            return this.formatNumberLocale();
        }
        /** Array of strings containing the polynomials defining the element. */
        generatePolynomial() {
            return this.generatePolynomial();
        }
        /** Get the value of the property key. */
        getAttribute() {
            return this.getAttribute();
        }
        /** Retrieve a copy of the current visProp. */
        getAttributes() {
            return this.getAttributes();
        }
        /** Returns the elements name. */
        getName() {
            return this.getName();
        }
        /** List of the element ids resp. */
        getParents() {
            return this.getParents();
        }
        /** Deprecated alias for JXG.GeometryElement#getAttribute. */
        getProperty() {
            return this.getProperty();
        }
        /** The type of the element as used in JXG.Board#create. */
        getType() {
            return this.getType();
        }
        /** Move an element to its nearest grid point. */
        handleSnapToGrid() {
            return this.handleSnapToGrid();
        }
        /** Hide the element. */
        hide() {
            return this.hide();
        }
        /** Hide the element. */
        hideElement() {
            return this.hideElement();
        }
        /**  */
        labelColor() {
            return this.labelColor();
        }
        /** Uses the ”normal” properties of the element. */
        noHighlight() {
            return this.noHighlight();
        }
        /** Removes the element from the construction. */
        remove() {
            return this.remove();
        }
        /** Remove an element as a child from the current element. */
        removeChild() {
            return this.removeChild();
        }
        /** Alias of JXG.EventEmitter.off. */
        removeEvent() {
            return this.removeEvent();
        }
        /** Removes ticks identified by parameter named tick from this line or curve. */
        removeTicks() {
            return this.removeTicks();
        }
        /** Determines whether the element has arrows at start or end of the arc. */
        setArrow() {
            return this.setArrow();
        }
        /** Sets an arbitrary number of attributes. */
        setAttribute(attrs) {
            return this.setAttribute(attrs);
        }
        /** Sets a label and its text If label doesn't exist, it creates one */
        setLabel(txt) {
            return this.setLabel(txt);
        }
        /** Updates the element's label text, strips all html. */
        setLabelText() {
            return this.setLabelText();
        }
        /** Updates the element's label text and the element's attribute ”name”, strips all html. */
        setName() {
            return this.setName();
        }
        /** Sets ids of elements to the array this.parents. */
        setParents() {
            return this.setParents();
        }
        /** Moves an element by the difference of two coordinates.  Valid values for method are TSX.COORDS_BY_USER and TSX.COORDS_BY_SCREEN */
        setPositionDirectly(method, coords, prevCoords) {
            return this.setPositionDirectly(method, coords, prevCoords);
        }
        /** Deprecated alias for JXG.GeometryElement#setAttribute. */
        setProperty() {
            return this.setProperty();
        }
        /** Make the element visible. */
        show() {
            return this.show();
        }
        /** Make the element visible. */
        showElement() {
            return this.showElement();
        }
        /** Snaps the element to points. */
        snapToPoints() {
            return this.snapToPoints();
        }
        /** Checks if locale is enabled in the attribute. */
        useLocale() {
            return this.useLocale();
        }
        /**  */
        on(event, handler) {
            return this.on(event, handler);
        }
    }
    TSX.GeometryElement = GeometryElement;
    class GeometryElement3D extends GeometryElement {
        /**  */
        get element2D() {
            return _jsxBoard().element2D;
        }
        /**  */
        get is3D() {
            return _jsxBoard().is3D;
        }
        /**  */
        get view() {
            return _jsxBoard().view;
        }
        /**  */
        get strokeColor() {
            return _jsxBoard().strokeColor;
        }
        /**  */
        get strokeWidth() {
            return _jsxBoard().strokeWidth;
        }
        /**  */
        get size() {
            return _jsxBoard().size;
        }
        /**  */
        get fillColor() {
            return _jsxBoard().fillColor;
        }
        /**  */
        get visible() {
            return _jsxBoard().visible;
        }
        /**  */
        setAttribute(attrs) {
            return this.setAttribute(attrs);
        }
    }
    TSX.GeometryElement3D = GeometryElement3D;
    class Board extends GeometryElement {
    }
    TSX.Board = Board;
    class Point extends GeometryElement {
        /**  */
        coords() {
            return this.coords();
        }
        /**  */
        startAnimation(direction, stepCount, delayMSec) {
            return this.startAnimation(direction, stepCount, delayMSec);
        }
        /**  */
        stopAnimation() {
            return this.stopAnimation();
        }
        /** Calculates Euclidean distance for two Points, eg:  p1.Dist(p2) */
        Dist(toPoint) {
            return this.Dist(toPoint);
        }
        /** Set the face of a point element. */
        face(style) {
            return this.face(style);
        }
        /** Updates the position of the point. */
        update() {
            return this.update();
        }
        /**  */
        X() {
            return this.X();
        }
        /**  */
        Y() {
            return this.Y();
        }
        /**  */
        Z() {
            return this.Z();
        }
        /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                               is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                               want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                               
       ```js
       
       P.moveTo([A.X(), A.Y()], 5000)
       
       ``` */
        moveTo(p, time = 0, options) {
            return this.moveTo(p, time, options);
        }
        /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                               is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                               want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                               
       ```js
       
       P.moveTo([A.X(), A.Y()], 5000)
       
       ``` */
        visit(p, time = 0, options) {
            return this.visit(p, time, options);
        }
        /** Point location in vector form [n,n] */
        XY() {
            return [this.X(), this.Y()];
        }
    }
    TSX.Point = Point;
    class Line extends GeometryElement {
        /**  */
        get defaultTicks() {
            return _jsxBoard().defaultTicks;
        }
        /**  */
        get parentPolygon() {
            return _jsxBoard().parentPolygon;
        }
        /** Attributes for first defining point of the line. */
        get point1() {
            return _jsxBoard().point1;
        }
        /** Attributes for second defining point of the line. */
        get point2() {
            return _jsxBoard().point2;
        }
        /** Attributes for ticks of the line. */
        get ticks() {
            return _jsxBoard().ticks;
        }
        /** Determines the angle between the positive x axis and the line. */
        getAngle() {
            return this.getAngle();
        }
        /** Calculates the y intersect of the line. */
        getRise() {
            return this.getRise();
        }
        /** Alias for line.Slope */
        getSlope() {
            return this.getSlope();
        }
        /** Checks whether (x,y) is near the line. */
        hasPoint() {
            return this.hasPoint();
        }
        /** The distance between the two points defining the line. */
        L() {
            return this.L();
        }
        /** Calculates the slope of the line. */
        Slope() {
            return this.Slope();
        }
        /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
        X() {
            return this.X();
        }
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Y() {
            return this.Y();
        }
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Z() {
            return this.Z();
        }
    }
    TSX.Line = Line;
    class View3D extends GeometryElement3D {
        /**  */
        get defaultAxes() {
            return _jsxBoard().defaultAxes;
        }
        /**  */
        get matrix3D() {
            return _jsxBoard().matrix3D;
        }
        /**  */
        setView(azimuth, elevation, radius) {
            return this.setView(azimuth, elevation, radius);
        }
        /**  */
        animateAzimuth() {
            return this.animateAzimuth();
        }
        /** Creates a new 3D element of type elementType. */
        create() {
            return this.create();
        }
        /** Intersect a ray with the bounding cube of the 3D view. */
        intersectionLineCube() {
            return this.intersectionLineCube();
        }
        /**  */
        intersectionPlanePlane() {
            return this.intersectionPlanePlane();
        }
        /** Test if coordinates are inside of the bounding cube. */
        isInCube() {
            return this.isInCube();
        }
        /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
        project2DTo3DPlane() {
            return this.project2DTo3DPlane();
        }
        /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
        project2DTo3DVertical() {
            return this.project2DTo3DVertical();
        }
        /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
        project3DTo2D() {
            return this.project3DTo2D();
        }
        /** Limit 3D coordinates to the bounding cube. */
        project3DToCube() {
            return this.project3DToCube();
        }
        /** Select a single or multiple elements at once. */
        select() {
            return this.select();
        }
        /**  */
        stopAzimuth() {
            return this.stopAzimuth();
        }
    }
    TSX.View3D = View3D;
    class currentBoard {
    }
    TSX.currentBoard = currentBoard;
    class Infobox {
    }
    TSX.Infobox = Infobox;
    class CA {
        /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
        expandDerivatives() {
            return this.expandDerivatives();
        }
        /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
        setMath() {
            return this.setMath();
        }
    }
    TSX.CA = CA;
    class Chart extends GeometryElement {
        /**  */
        get elements() {
            return _jsxBoard().elements;
        }
        /** Create bar chart defined by two data arrays. */
        drawBar() {
            return this.drawBar();
        }
        /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
        drawFit() {
            return this.drawFit();
        }
        /** Create line chart defined by two data arrays. */
        drawLine() {
            return this.drawLine();
        }
        /** Create pie chart. */
        drawPie() {
            return this.drawPie();
        }
        /** Create chart consisting of JSXGraph points. */
        drawPoints() {
            return this.drawPoints();
        }
        /** Create radar chart. */
        drawRadar() {
            return this.drawRadar();
        }
        /** Create line chart that consists of a natural spline curve defined by two data arrays. */
        drawSpline() {
            return this.drawSpline();
        }
        /** Template for dynamic charts update. */
        updateDataArray() {
            return this.updateDataArray();
        }
    }
    TSX.Chart = Chart;
    class Circle extends GeometryElement {
        /** Attributes for center point. */
        get center() {
            return _jsxBoard().center;
        }
        /**  */
        get circle() {
            return _jsxBoard().circle;
        }
        /**  */
        get line() {
            return _jsxBoard().line;
        }
        /**  */
        get method() {
            return _jsxBoard().method;
        }
        /** Attributes for center point. */
        get point2() {
            return _jsxBoard().point2;
        }
        /**  */
        get radius() {
            return _jsxBoard().radius;
        }
        /** Circle area */
        Area() {
            return this.Area();
        }
        /** Perimeter (circumference) of circle. */
        Perimeter() {
            return this.Perimeter();
        }
        /** Calculates the radius of the circle. */
        Radius() {
            return this.Radius();
        }
        /** Treats the circle as parametric curve and calculates its X coordinate. */
        X() {
            return this.X();
        }
        /** Treats the circle as parametric curve and calculates its Y coordinate. */
        Y() {
            return this.Y();
        }
        /** Treat the circle as parametric curve and calculates its Z coordinate. */
        Z() {
            return this.Z();
        }
    }
    TSX.Circle = Circle;
    class Circle3D extends GeometryElement3D {
    }
    TSX.Circle3D = Circle3D;
    class Complex {
        /**  */
        get absval() {
            return _jsxBoard().absval;
        }
        /**  */
        get angle() {
            return _jsxBoard().angle;
        }
        /**  */
        get imaginary() {
            return _jsxBoard().imaginary;
        }
        /**  */
        get isComplex() {
            return _jsxBoard().isComplex;
        }
        /**  */
        get real() {
            return _jsxBoard().real;
        }
        /** Add another complex number to this complex number. */
        add() {
            return this.add();
        }
        /** Conjugate a complex number in place. */
        conj() {
            return this.conj();
        }
        /** Divide this complex number by the given complex number. */
        div() {
            return this.div();
        }
        /** Multiply another complex number to this complex number. */
        mult() {
            return this.mult();
        }
        /** Subtract another complex number from this complex number. */
        sub() {
            return this.sub();
        }
        /** Converts a complex number into a string. */
        toString() {
            return this.toString();
        }
    }
    TSX.Complex = Complex;
    class Composition {
        /** Adds an element to the composition container. */
        add() {
            return this.add();
        }
        /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
        fullUpdate() {
            return this.fullUpdate();
        }
        /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
        highlight() {
            return this.highlight();
        }
        /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
        noHighlight() {
            return this.noHighlight();
        }
        /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
        prepareUpdate() {
            return this.prepareUpdate();
        }
        /** Remove an element from the composition container. */
        remove() {
            return this.remove();
        }
        /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
        setParents() {
            return this.setParents();
        }
        /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
        updateRenderer() {
            return this.updateRenderer();
        }
    }
    TSX.Composition = Composition;
    class Coords {
        /**  */
        get currentBoard() {
            return _jsxBoard().currentBoard;
        }
        /**  */
        get emitter() {
            return _jsxBoard().emitter;
        }
        /**  */
        get scrCoords() {
            return _jsxBoard().scrCoords;
        }
        /**  */
        get usrCoords() {
            return _jsxBoard().usrCoords;
        }
        /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
        isReal() {
            return this.isReal();
        }
        /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
        setCoordinates() {
            return this.setCoordinates();
        }
    }
    TSX.Coords = Coords;
    class Curve extends GeometryElement {
        /**  */
        get dataX() {
            return _jsxBoard().dataX;
        }
        set dataX(param) {
            _jsxBoard().dataX = param;
        }
        /**  */
        get dataY() {
            return _jsxBoard().dataY;
        }
        set dataY(param) {
            _jsxBoard().dataY = param;
        }
        /**  */
        get ticks() {
            return _jsxBoard().ticks;
        }
        /** Allocate points in the Coords array this.points */
        allocatePoints() {
            return this.allocatePoints();
        }
        /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
        generateTerm() {
            return this.generateTerm();
        }
        /** Gives the default value of the right bound for the curve. */
        maxX() {
            return this.maxX();
        }
        /** Gives the default value of the left bound for the curve. */
        minX() {
            return this.minX();
        }
        /** Shift the curve by the vector 'where'. */
        moveTo() {
            return this.moveTo();
        }
        /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
        notifyParents() {
            return this.notifyParents();
        }
        /** Computes the curve path */
        updateCurve() {
            return this.updateCurve();
        }
        /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
        updateDataArray(func) {
            return this.updateDataArray(func);
        }
        /** Updates the visual contents of the curve. */
        updateRenderer() {
            return this.updateRenderer();
        }
        /** Applies the transformations of the curve to the given point p. */
        updateTransform() {
            return this.updateTransform();
        }
        /** The parametric function which defines the x-coordinate of the curve. */
        X() {
            return this.X();
        }
        /** The parametric function which defines the y-coordinate of the curve. */
        Y() {
            return this.Y();
        }
        /** Treat the curve as curve with homogeneous coordinates. */
        Z() {
            return this.Z();
        }
    }
    TSX.Curve = Curve;
    class Curve3D extends Curve {
        /**  */
        addTransform(other, transforms) {
            return this.addTransform(other, transforms);
        }
        /** Function which maps u to x; i.e. */
        X() {
            return this.X();
        }
        /** Function which maps u to y; i.e. */
        Y() {
            return this.Y();
        }
        /** Function which maps u to z; i.e. */
        Z() {
            return this.Z();
        }
    }
    TSX.Curve3D = Curve3D;
    class Dump {
        /** Adds markers to every element of the board */
        addMarkers() {
            return this.addMarkers();
        }
        /** Converts an array of different values into a parameter string that can be used by the code generators. */
        arrayToParamStr() {
            return this.arrayToParamStr();
        }
        /** Removes markers from every element on the board. */
        deleteMarkers() {
            return this.deleteMarkers();
        }
        /** Generate a save-able structure with all elements. */
        dump() {
            return this.dump();
        }
        /** Eliminate default values given by JXG.Options from the attributes object. */
        minimizeObject() {
            return this.minimizeObject();
        }
        /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
        prepareAttributes() {
            return this.prepareAttributes();
        }
        /** Stringifies a string, i.e. */
        str() {
            return this.str();
        }
        /** Saves the construction in board to JavaScript. */
        toJavaScript() {
            return this.toJavaScript();
        }
        /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
        toJCAN() {
            return this.toJCAN();
        }
        /** Saves the construction in board to JessieCode. */
        toJessie() {
            return this.toJessie();
        }
    }
    TSX.Dump = Dump;
    class ForeignObject extends GeometryElement {
        /**  */
        get content() {
            return _jsxBoard().content;
        }
        /**  */
        get size() {
            return _jsxBoard().size;
        }
        /** Returns the height of the foreignObject in user coordinates. */
        H() {
            return this.H();
        }
        /** Checks whether (x,y) is over or near the image; */
        hasPoint() {
            return this.hasPoint();
        }
        /** Set the width and height of the foreignObject. */
        setSize() {
            return this.setSize();
        }
        /** Returns the width of the foreignObject in user coordinates. */
        W() {
            return this.W();
        }
    }
    TSX.ForeignObject = ForeignObject;
    class Group extends Composition {
        /**  */
        get coords() {
            return _jsxBoard().coords;
        }
        /** Adds all points in a group to this group. */
        addGroup(group) {
            return this.addGroup(group);
        }
        /** Adds ids of elements to the array this.parents. */
        addParents(parents) {
            return this.addParents(parents);
        }
        /** Adds an Point to this group. */
        addPoint(point) {
            return this.addPoint(point);
        }
        /** Adds multiple points to this group. */
        addPoints(points) {
            return this.addPoints(points);
        }
        /** Adds a point to the set of rotation points of the group. */
        addRotationPoint(point) {
            return this.addRotationPoint(point);
        }
        /** Adds a point to the set of the scale points of the group. */
        addScalePoint(point, direction) {
            return this.addScalePoint(point, direction);
        }
        /** Adds a point to the set of the translation points of the group. */
        addTranslationPoint(point) {
            return this.addTranslationPoint(point);
        }
        /** List of the element ids resp. */
        getParents() {
            return this.getParents();
        }
        /** Removes a point from the group. */
        removePoint(point) {
            return this.removePoint(point);
        }
        /** Removes the rotation property from a point of the group. */
        removeRotationPoint(point) {
            return this.removeRotationPoint(point);
        }
        /** Removes the scaling property from a point of the group. */
        removeScalePoint(point) {
            return this.removeScalePoint(point);
        }
        /** Removes the translation property from a point of the group. */
        removeTranslationPoint(point) {
            return this.removeTranslationPoint(point);
        }
        /** Sets the center of rotation for the group. */
        setRotationCenter(pivot) {
            return this.setRotationCenter(pivot);
        }
        /** Sets the rotation points of the group. */
        setRotationPoints(points) {
            return this.setRotationPoints(points);
        }
        /** Sets the center of scaling for the group. */
        setScaleCenter(point) {
            return this.setScaleCenter(point);
        }
        /** Sets the scale points of the group. */
        setScalePoints(points) {
            return this.setScalePoints(points);
        }
        /** Sets the translation points of the group. */
        setTranslationPoints(points) {
            return this.setTranslationPoints(points);
        }
        /** Releases all elements of this group. */
        ungroup() {
            return this.ungroup();
        }
    }
    TSX.Group = Group;
    class Image extends GeometryElement {
        /**  */
        get size() {
            return _jsxBoard().size;
        }
        /**  */
        get url() {
            return _jsxBoard().url;
        }
        /** Returns the height of the image in user coordinates. */
        H() {
            return this.H();
        }
        /** Checks whether (x,y) is over or near the image; */
        hasPoint() {
            return this.hasPoint();
        }
        /** Set the width and height of the image. */
        setSize() {
            return this.setSize();
        }
        /** Returns the width of the image in user coordinates. */
        W() {
            return this.W();
        }
    }
    TSX.Image = Image;
    class Implicitcurve extends GeometryElement {
    }
    TSX.Implicitcurve = Implicitcurve;
    class IntersectionCircle3D extends GeometryElement3D {
    }
    TSX.IntersectionCircle3D = IntersectionCircle3D;
    class IntersectionLine3D extends GeometryElement3D {
    }
    TSX.IntersectionLine3D = IntersectionLine3D;
    class Line3D extends GeometryElement3D {
        /**  */
        get direction() {
            return _jsxBoard().direction;
        }
        /**  */
        get point() {
            return _jsxBoard().point;
        }
        /**  */
        get point1() {
            return _jsxBoard().point1;
        }
        /**  */
        get point2() {
            return _jsxBoard().point2;
        }
        /**  */
        get range() {
            return _jsxBoard().range;
        }
    }
    TSX.Line3D = Line3D;
    class Plane3D extends GeometryElement3D {
        /**  */
        get d() {
            return _jsxBoard().d;
        }
        /**  */
        get direction1() {
            return _jsxBoard().direction1;
        }
        /**  */
        get direction2() {
            return _jsxBoard().direction2;
        }
        /**  */
        get normal() {
            return _jsxBoard().normal;
        }
        /**  */
        get point() {
            return _jsxBoard().point;
        }
        /**  */
        get range1() {
            return _jsxBoard().range1;
        }
        /**  */
        get range2() {
            return _jsxBoard().range2;
        }
        /**  */
        get vec1() {
            return _jsxBoard().vec1;
        }
        /**  */
        get vec2() {
            return _jsxBoard().vec2;
        }
        /**  */
        get vec3() {
            return _jsxBoard().vec3;
        }
        /** Get coordinate array [x, y, z] of a point on the plane for parameters (u, v). */
        F(u, v) {
            return this.F(u, v);
        }
        /** Get x-coordinate of a point on the plane for parameters (u, v). */
        X(u, v) {
            return this.X(u, v);
        }
        /** Get y-coordinate of a point on the plane for parameters (u, v). */
        Y(u, v) {
            return this.Y(u, v);
        }
        /** Get z-coordinate of a point on the plane for parameters (u, v). */
        Z(u, v) {
            return this.Z(u, v);
        }
    }
    TSX.Plane3D = Plane3D;
    class Point3D extends GeometryElement3D {
        /**  */
        get slide() {
            return _jsxBoard().slide;
        }
        /** Set the position of a 3D point. */
        setPosition(coords, noEvent = true) {
            return this.setPosition(coords, noEvent);
        }
        /** Get x-coordinate of a 3D point. */
        X() {
            return this.X();
        }
        /** Get y-coordinate of a 3D point. */
        Y() {
            return this.Y();
        }
        /** Get z-coordinate of a 3D point. */
        Z() {
            return this.Z();
        }
        /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.    EG:
                               
       ```js
       
       P.moveTo([A.X(), A.Y()], 5000)
       
       ``` */
        moveTo(p, time = 0, options) {
            return this.moveTo(p, time, options);
        }
    }
    TSX.Point3D = Point3D;
    class Polygon extends GeometryElement {
        /** Attributes for the polygon border lines. */
        get borders() {
            return _jsxBoard().borders;
        }
        /** Attributes for the polygon vertices. */
        get vertices() {
            return _jsxBoard().vertices;
        }
        /** Checks whether (x,y) is near the polygon. */
        hasPoint(x, y) {
            return this.hasPoint(x, y);
        }
        /** Uses the boards renderer to update the polygon. */
        updateRenderer() {
            return this.updateRenderer();
        }
    }
    TSX.Polygon = Polygon;
    class Polygon3D extends GeometryElement3D {
    }
    TSX.Polygon3D = Polygon3D;
    class Text extends GeometryElement {
        /**  */
        get size() {
            return _jsxBoard().size;
        }
        /**  */
        setAttribute(attrs) {
            return this.setAttribute(attrs);
        }
        /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
        bounds() {
            return this.bounds();
        }
        /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
        crudeSizeEstimate() {
            return this.crudeSizeEstimate();
        }
        /** Returns the value of the attribute ”anchorX”. */
        getAnchorX() {
            return this.getAnchorX();
        }
        /** Returns the value of the attribute ”anchorY”. */
        getAnchorY() {
            return this.getAnchorY();
        }
        /** Return the width of the text element. */
        getSize() {
            return this.getSize();
        }
        /** Replace _{} by <sub> */
        replaceSub() {
            return this.replaceSub();
        }
        /** Replace ^{} by <sup> */
        replaceSup() {
            return this.replaceSup();
        }
        /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
        setAutoPosition() {
            return this.setAutoPosition();
        }
        /** Move the text to new coordinates. */
        setCoords(x, y) {
            return this.setCoords(x, y);
        }
        /** Defines new content. */
        setText(newText) {
            return this.setText(newText);
        }
        /** Defines new content but converts < and > to HTML entities before updating the DOM. */
        setTextJessieCode() {
            return this.setTextJessieCode();
        }
        /** Evaluates the text. */
        update() {
            return this.update();
        }
        /** Recompute the width and the height of the text box. */
        updateSize() {
            return this.updateSize();
        }
        /** Decode unicode entities into characters. */
        utf8_decode() {
            return this.utf8_decode();
        }
    }
    TSX.Text = Text;
    class Text3D extends Text {
        /** Set the position of a 3D point. If `noEvent` true, then no events are triggered. */
        setPosition(coords, noEvent = false) {
            return this.setPosition(coords, noEvent);
        }
    }
    TSX.Text3D = Text3D;
    class Ticks extends GeometryElement {
        /**  */
        get equidistant() {
            return _jsxBoard().equidistant;
        }
        /**  */
        get fixedTicks() {
            return _jsxBoard().fixedTicks;
        }
        /**  */
        get labelCounter() {
            return _jsxBoard().labelCounter;
        }
        /** User defined labels for special ticks. */
        get labels() {
            return _jsxBoard().labels;
        }
        /**  */
        get labelsData() {
            return _jsxBoard().labelsData;
        }
        /**  */
        get line() {
            return _jsxBoard().line;
        }
        /**  */
        get ticks() {
            return _jsxBoard().ticks;
        }
        /** Formats label texts to make labels displayed in scientific notation look beautiful. */
        beautifyScientificNotationLabel() {
            return this.beautifyScientificNotationLabel();
        }
        /** Checks whether (x,y) is near the line. */
        hasPoint() {
            return this.hasPoint();
        }
        /** Sets x and y coordinate of the tick. */
        setPositionDirectly() {
            return this.setPositionDirectly();
        }
        /** Uses the boards renderer to update the arc. */
        updateRenderer() {
            return this.updateRenderer();
        }
    }
    TSX.Ticks = Ticks;
    class Turtle extends GeometryElement {
        /** Move the turtle backwards. */
        back() {
            return this.back();
        }
        /** Alias for JXG.Turtle#back */
        bk() {
            return this.bk();
        }
        /** Removes the turtle curve from the board. */
        clean() {
            return this.clean();
        }
        /** Removes the turtle completely and resets it to its initial position and direction. */
        clearScreen() {
            return this.clearScreen();
        }
        /** Alias for JXG.Turtle#clearScreen */
        cs() {
            return this.cs();
        }
        /** The ”co”-coordinate of the turtle curve at position t is returned. */
        evalAt() {
            return this.evalAt();
        }
        /** Alias for JXG.Turtle#forward */
        fd() {
            return this.fd();
        }
        /** Move the turtle forward. */
        forward() {
            return this.forward();
        }
        /** Get most recently set turtle color. */
        getHighlightPenColor() {
            return this.getHighlightPenColor();
        }
        /** Get most recently set turtle color. */
        getPenColor() {
            return this.getPenColor();
        }
        /** Get most recently set turtle size (in pixel). */
        getPenSize() {
            return this.getPenSize();
        }
        /** Checks whether (x,y) is near the curve. */
        hasPoint() {
            return this.hasPoint();
        }
        /** Sets the visibility of the turtle head to false, */
        hideTurtle() {
            return this.hideTurtle();
        }
        /** Moves the turtle to position [0,0]. */
        home() {
            return this.home();
        }
        /** Alias for JXG.Turtle#hideTurtle */
        ht() {
            return this.ht();
        }
        /** Rotate the turtle direction to the right. */
        left() {
            return this.left();
        }
        /** Rotates the turtle into a new direction. */
        lookTo() {
            return this.lookTo();
        }
        /** Alias for JXG.Turtle#left */
        lt() {
            return this.lt();
        }
        /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
        maxX() {
            return this.maxX();
        }
        /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
        minX() {
            return this.minX();
        }
        /** Moves the turtle to a given coordinate pair. */
        moveTo() {
            return this.moveTo();
        }
        /** Alias for JXG.Turtle#penDown */
        pd() {
            return this.pd();
        }
        /** Pen down, continues visible drawing */
        penDown() {
            return this.penDown();
        }
        /** Pen up, stops visible drawing */
        penUp() {
            return this.penUp();
        }
        /** Alias for JXG.Turtle#popTurtle */
        pop() {
            return this.pop();
        }
        /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
        popTurtle() {
            return this.popTurtle();
        }
        /** Alias for JXG.Turtle#penUp */
        pu() {
            return this.pu();
        }
        /** Alias for JXG.Turtle#pushTurtle */
        push() {
            return this.push();
        }
        /** Pushes the position of the turtle on the stack. */
        pushTurtle() {
            return this.pushTurtle();
        }
        /** Rotate the turtle direction to the right */
        right() {
            return this.right();
        }
        /** Alias for JXG.Turtle#right */
        rt() {
            return this.rt();
        }
        /** Sets the highlight pen color. */
        setHighlightPenColor() {
            return this.setHighlightPenColor();
        }
        /** Sets the pen color. */
        setPenColor() {
            return this.setPenColor();
        }
        /** Sets the pen size. */
        setPenSize() {
            return this.setPenSize();
        }
        /** Moves the turtle without drawing to a new position */
        setPos() {
            return this.setPos();
        }
        /** Sets the visibility of the turtle head to true, */
        showTurtle() {
            return this.showTurtle();
        }
        /** Alias for JXG.Turtle#showTurtle */
        st() {
            return this.st();
        }
        /** if t is not supplied the x-coordinate of the turtle is returned. */
        X() {
            return this.X();
        }
        /** if t is not supplied the y-coordinate of the turtle is returned. */
        Y() {
            return this.Y();
        }
        /**  */
        Z() {
            return this.Z();
        }
    }
    TSX.Turtle = Turtle;
    class Sector extends Curve {
        /**  */
        get point1() {
            return _jsxBoard().point1;
        }
        /**  */
        get point2() {
            return _jsxBoard().point2;
        }
        /**  */
        get point3() {
            return _jsxBoard().point3;
        }
        /**  */
        get point4() {
            return _jsxBoard().point4;
        }
        /** Checks whether (x,y) is within the area defined by the sector. */
        hasPointSector() {
            return this.hasPointSector();
        }
        /** Returns the radius of the sector. */
        Radius() {
            return this.Radius();
        }
    }
    TSX.Sector = Sector;
    class Vectorfield extends Curve {
        /** Set the defining functions of vector field. */
        setF() {
            return this.setF();
        }
    }
    TSX.Vectorfield = Vectorfield;
    class Angle extends Sector {
        /**  */
        get point() {
            return _jsxBoard().point;
        }
        /** Frees an angle from a prescribed value. */
        free() {
            return this.free();
        }
        /** Set an angle to a prescribed value given in radians. */
        setAngle(angle) {
            return this.setAngle(angle);
        }
        /** Returns the value of the angle. */
        Value() {
            return this.Value();
        }
    }
    TSX.Angle = Angle;
    class Arc extends Curve {
        /**  */
        get anglepoint() {
            return _jsxBoard().anglepoint;
        }
        /**  */
        get radiuspoint() {
            return _jsxBoard().radiuspoint;
        }
        /**  */
        getRadius() {
            return this.getRadius();
        }
        /** Checks whether (x,y) is within the sector defined by the arc. */
        hasPointSector() {
            return this.hasPointSector();
        }
        /** Determines the arc's current radius. */
        Radius() {
            return this.Radius();
        }
        /** Returns the length of the arc or the value of the angle spanned by the arc. */
        Value() {
            return this.Value();
        }
    }
    TSX.Arc = Arc;
    class Arrow extends Line {
    }
    TSX.Arrow = Arrow;
    class Parallel extends Line {
    }
    TSX.Parallel = Parallel;
    class Arrowparallel extends Parallel {
    }
    TSX.Arrowparallel = Arrowparallel;
    class Axis extends Line {
        /**  */
        get defaultTicks() {
            return _jsxBoard().defaultTicks;
        }
    }
    TSX.Axis = Axis;
    class BezierCurve extends Curve {
    }
    TSX.BezierCurve = BezierCurve;
    class Bisector extends Line {
    }
    TSX.Bisector = Bisector;
    class Bisectorlines extends Composition {
    }
    TSX.Bisectorlines = Bisectorlines;
    class Button extends Text {
        /**  */
        get rendNodeButton() {
            return _jsxBoard().rendNodeButton;
        }
        /**  */
        setAttribute(attrs) {
            return this.setAttribute(attrs);
        }
    }
    TSX.Button = Button;
    class Cardinalspline extends Curve {
    }
    TSX.Cardinalspline = Cardinalspline;
    class Checkbox extends Text {
        /**  */
        setAttribute(attrs) {
            return this.setAttribute(attrs);
        }
        /** Returns the value of the checkbox element */
        Value() {
            return this.Value();
        }
        /**  */
        onChange(action) {
            window.JXG.addEvent(this.rendNodeCheckbox, `change`, action);
        }
    }
    TSX.Checkbox = Checkbox;
    class Circumcenter extends Point {
    }
    TSX.Circumcenter = Circumcenter;
    class Circumcircle extends Circle {
    }
    TSX.Circumcircle = Circumcircle;
    class CircumcircleArc extends Arc {
    }
    TSX.CircumcircleArc = CircumcircleArc;
    class CircumcircleSector extends Sector {
        /**  */
        get center() {
            return _jsxBoard().center;
        }
    }
    TSX.CircumcircleSector = CircumcircleSector;
    class Comb extends Curve {
    }
    TSX.Comb = Comb;
    class Conic extends Curve {
    }
    TSX.Conic = Conic;
    class CurveDifference extends Curve {
    }
    TSX.CurveDifference = CurveDifference;
    class CurveIntersection extends Curve {
    }
    TSX.CurveIntersection = CurveIntersection;
    class CurveUnion extends Curve {
    }
    TSX.CurveUnion = CurveUnion;
    class Derivative extends Curve {
    }
    TSX.Derivative = Derivative;
    class Ellipse extends Conic {
    }
    TSX.Ellipse = Ellipse;
    class ParametricSurface3D extends Curve3D {
    }
    TSX.ParametricSurface3D = ParametricSurface3D;
    class Face3D extends Curve {
        /**  */
        get dataX() {
            return _jsxBoard().dataX;
        }
        /**  */
        get dataY() {
            return _jsxBoard().dataY;
        }
        /**  */
        get dataZ() {
            return _jsxBoard().dataZ;
        }
    }
    TSX.Face3D = Face3D;
    class Functiongraph extends Curve {
    }
    TSX.Functiongraph = Functiongraph;
    class Functiongraph3D extends ParametricSurface3D {
    }
    TSX.Functiongraph3D = Functiongraph3D;
    class Glider extends Point {
    }
    TSX.Glider = Glider;
    class Glider3D extends Point3D {
    }
    TSX.Glider3D = Glider3D;
    class Grid extends Curve {
    }
    TSX.Grid = Grid;
    class Hatch extends Ticks {
        /**  */
        get ticksDistance() {
            return _jsxBoard().ticksDistance;
        }
    }
    TSX.Hatch = Hatch;
    class Hyperbola extends Conic {
    }
    TSX.Hyperbola = Hyperbola;
    class Incenter extends Point {
    }
    TSX.Incenter = Incenter;
    class Incircle extends Circle {
    }
    TSX.Incircle = Incircle;
    class Inequality extends Curve {
    }
    TSX.Inequality = Inequality;
    class Input extends Text {
        /**  */
        get rendNodeInput() {
            return _jsxBoard().rendNodeInput;
        }
        /** Sets value of the input element. */
        set(value) {
            return this.set(value);
        }
        /** Returns the value (content) of the input element */
        Value() {
            return this.Value();
        }
    }
    TSX.Input = Input;
    class Integral extends Curve {
        /** Attributes of the (left) base point of the integral. */
        get baseLeft() {
            return _jsxBoard().baseLeft;
        }
        /** Attributes of the (right) base point of the integral. */
        get baseRight() {
            return _jsxBoard().baseRight;
        }
        /** Attributes of the (left) starting point of the integral. */
        get curveLeft() {
            return _jsxBoard().curveLeft;
        }
        /** Attributes of the (right) end point of the integral. */
        get curveRight() {
            return _jsxBoard().curveRight;
        }
        /** Returns the current value of the integral. */
        Value() {
            return this.Value();
        }
    }
    TSX.Integral = Integral;
    class Intersection extends Point {
    }
    TSX.Intersection = Intersection;
    class Label extends Text {
    }
    TSX.Label = Label;
    class Legend extends GeometryElement {
        /**  */
        get labels() {
            return _jsxBoard().labels;
        }
        /**  */
        get rowHeight() {
            return _jsxBoard().rowHeight;
        }
        /**  */
        get style() {
            return _jsxBoard().style;
        }
    }
    TSX.Legend = Legend;
    class Locus extends Curve {
        /**  */
        get ctime() {
            return _jsxBoard().ctime;
        }
        /**  */
        get eq() {
            return _jsxBoard().eq;
        }
    }
    TSX.Locus = Locus;
    class MajorArc extends Curve {
    }
    TSX.MajorArc = MajorArc;
    class MajorSector extends Curve {
    }
    TSX.MajorSector = MajorSector;
    class Measurement extends Text {
    }
    TSX.Measurement = Measurement;
    class Mesh3D extends Curve {
    }
    TSX.Mesh3D = Mesh3D;
    class Midpoint extends Point {
    }
    TSX.Midpoint = Midpoint;
    class MinorArc extends Curve {
    }
    TSX.MinorArc = MinorArc;
    class MinorSector extends Curve {
    }
    TSX.MinorSector = MinorSector;
    class Mirrorelement extends GeometryElement {
    }
    TSX.Mirrorelement = Mirrorelement;
    class Mirrorpoint extends Point {
    }
    TSX.Mirrorpoint = Mirrorpoint;
    class NonReflexAngle extends Angle {
    }
    TSX.NonReflexAngle = NonReflexAngle;
    class Normal extends Line {
    }
    TSX.Normal = Normal;
    class Orthogonalprojection extends Point {
    }
    TSX.Orthogonalprojection = Orthogonalprojection;
    class OtherIntersection extends Point {
    }
    TSX.OtherIntersection = OtherIntersection;
    class Parabola extends Conic {
    }
    TSX.Parabola = Parabola;
    class Parallelpoint extends Point {
    }
    TSX.Parallelpoint = Parallelpoint;
    class Segment extends Line {
    }
    TSX.Segment = Segment;
    class Parallelogram extends Polygon {
    }
    TSX.Parallelogram = Parallelogram;
    class Perpendicular extends Segment {
    }
    TSX.Perpendicular = Perpendicular;
    class PerpendicularPoint extends Point {
    }
    TSX.PerpendicularPoint = PerpendicularPoint;
    class PerpendicularSegment extends Segment {
        /**  */
        get point() {
            return _jsxBoard().point;
        }
    }
    TSX.PerpendicularSegment = PerpendicularSegment;
    class PolarLine extends Line {
    }
    TSX.PolarLine = PolarLine;
    class PolePoint extends Point {
    }
    TSX.PolePoint = PolePoint;
    class PolygonalChain extends Polygon {
    }
    TSX.PolygonalChain = PolygonalChain;
    class Polyhedron3D extends GeometryElement3D {
        /**  */
        get def() {
            return _jsxBoard().def;
        }
        /**  */
        get faces() {
            return _jsxBoard().faces;
        }
        /**  */
        get numberFaces() {
            return _jsxBoard().numberFaces;
        }
    }
    TSX.Polyhedron3D = Polyhedron3D;
    class RadicalAxis extends Line {
    }
    TSX.RadicalAxis = RadicalAxis;
    class Reflection extends GeometryElement {
    }
    TSX.Reflection = Reflection;
    class ReflexAngle extends Angle {
    }
    TSX.ReflexAngle = ReflexAngle;
    class RegularPolygon extends Polygon {
    }
    TSX.RegularPolygon = RegularPolygon;
    class Riemannsum extends Curve {
        /** Returns the value of the Riemann sum, i.e. */
        Value() {
            return this.Value();
        }
    }
    TSX.Riemannsum = Riemannsum;
    class Semicircle extends Arc {
        /**  */
        get midpoint() {
            return _jsxBoard().midpoint;
        }
    }
    TSX.Semicircle = Semicircle;
    class Slider extends Glider {
        /** Sets the maximum value of the slider. */
        setMax(value) {
            return this.setMax(value);
        }
        /** Sets the minimum value of the slider. */
        setMin(value) {
            return this.setMin(value);
        }
        /** Sets the value of the slider. */
        setValue(value) {
            return this.setValue(value);
        }
        /** Returns the current slider value. */
        Value() {
            return this.Value();
        }
        /**  */
        on(event, action) {
            this.on(`event`, action);
        }
    }
    TSX.Slider = Slider;
    class Slopefield extends Vectorfield {
        /** Set the defining functions of slope field. */
        setF() {
            return this.setF();
        }
    }
    TSX.Slopefield = Slopefield;
    class Slopetriangle extends Line {
        /** Returns the value of the slope triangle, that is the slope of the tangent. */
        Value() {
            return this.Value();
        }
    }
    TSX.Slopetriangle = Slopetriangle;
    class Smartlabel extends Text {
    }
    TSX.Smartlabel = Smartlabel;
    class Sphere3D extends GeometryElement3D {
    }
    TSX.Sphere3D = Sphere3D;
    class Spline extends Curve {
    }
    TSX.Spline = Spline;
    class Stepfunction extends Curve {
    }
    TSX.Stepfunction = Stepfunction;
    class Tangent extends Line {
    }
    TSX.Tangent = Tangent;
    class TangentTo extends Line {
    }
    TSX.TangentTo = TangentTo;
    class Tapemeasure extends Segment {
        /** Returns the length of the tape measure. */
        Value() {
            return this.Value();
        }
    }
    TSX.Tapemeasure = Tapemeasure;
    class Tracecurve extends Curve {
    }
    TSX.Tracecurve = Tracecurve;
    class Transform extends GeometryElement {
        /** Create a new Point from a Point and Transform.  Translation just requires dx and dy.
                                   Rotation requires a point to rotate around, and a rotation transform around that point, and
                                   a remote point that sets both the radius and the initial angle of the rotation.
                                   
       Example: Given a rotation transform controlled by a slider, create a rotating point using the transform method Point() and the
                                   radius point.
       ```js
           let slid = TSX.slider([-4,0],[-2,0],[-20,0,20])  // controls rotation
           let c = TSX.point([-1,-1],{name:'c'})     //center
           let rot = TSX.rotate(()=>slid.Value(),c)  // rotation around c
           let initial = TSX.point([-1,1],{name:'initial'})
           let d = rot.point(initial,{name:'rotation around c'})  // new point
           TSX.segment(c,d)    // to illustrate
       ``` */
        point(fromPoint, attributes = {}) {
            return _jsxBoard().create('point', [fromPoint, this], defaultAttributes(attributes));
        }
        /**  */
        applyOnce(element) {
            return this.applyOnce(element);
        }
        /**  Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation, a call of currentBoard.update() has to follow. */
        bindTo(element) {
            return this.bindTo(element);
        }
        /**  */
        setMatrix() {
            return this.setMatrix();
        }
    }
    TSX.Transform = Transform;
    class Transform3D extends GeometryElement3D {
    }
    TSX.Transform3D = Transform3D;
    class TransformPoint extends Point {
    }
    TSX.TransformPoint = TransformPoint;
    class TransformPoint3D extends Point3D {
    }
    TSX.TransformPoint3D = TransformPoint3D;
    class Segment3D extends Line3D {
    }
    TSX.Segment3D = Segment3D;
    class Translate extends Transform {
    }
    TSX.Translate = Translate;
    class Rotate extends Transform {
    }
    TSX.Rotate = Rotate;
    class Scale extends Transform {
    }
    TSX.Scale = Scale;
    class Translate3D extends Transform3D {
    }
    TSX.Translate3D = Translate3D;
    class Rotate3D extends Transform3D {
    }
    TSX.Rotate3D = Rotate3D;
    class RotateX3D extends Transform3D {
    }
    TSX.RotateX3D = RotateX3D;
    class RotateY3D extends Transform3D {
    }
    TSX.RotateY3D = RotateY3D;
    class RotateZ3D extends Transform3D {
    }
    TSX.RotateZ3D = RotateZ3D;
    class Scale3D extends Transform3D {
    }
    TSX.Scale3D = Scale3D;
})(TSX || (TSX = {}));
