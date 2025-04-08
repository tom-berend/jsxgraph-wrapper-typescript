

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

 export namespace TSX {     // match JSXGraph definition for JXG_Point3D, etc
        type NumberFunction = Number | Function

        /** A 'point' has a position in space.  The only characteristic that distinguishes one point from another is its position. */
        export type pointAddr = NumberFunction[] | [number, number] | [number, Function] | [Function, number] | [Function | Function] // allow tuples or arrays
        export type pointAddr3D =  NumberFunction[] // | [number | Function, number | Function, number | Function]  // either tuple or array
        ///////  THIS FILE IS INSERTED INTO TSXGRAPH.TS DURING THE BUILD PROCESS  //////


//////////////////////////////////////////////////////////////
///  WE NEED A PLACE TO STORE THE BOARD AND VIEW3D OBJECTS ///
//////////////////////////////////////////////////////////////



/** PRIVATE, Nothing here, just some storage.  Ignore */
export class TSXBoard {
    public _jBoard: Object
    public _jView3d: Object

    private currentCanvas: string = ''
    private boardList = new Map<string, Object>()     // will be keyed array of boards  { 'jxgbox': jBoard, 'jxgbox2': jBoard2 }

    constructor(b: Object, v: Object) {
        this._jBoard = b;
        this._jView3d = v;
    }

    // getters are used from outside this class
    get jBoard() {
        if (this.isEmptyObject(this._jBoard)) {     // create if doesn't exists
            this.jInitBoard('jxgbox', defaultAttributes({}))
        }
        return this._jBoard
    }
    get jView3d() {
        if (this.isEmptyObject(this._jView3d)) {     // create if doesn't exists
            this.jInitBoard('jxgbox', defaultAttributes({}))
        }
        return this._jView3d
    }




    /** test for empty object {} */
    isEmptyObject(obj: Object): Boolean {
        for (let _var in obj) return false;  // if there is a property, it is not empty (doesn't work for dates, etc)
        return true;
    }

    // this is the code for InitBoard, which is created in the wrapper.
    jInitBoard(canvas: string, attributes: Object = {}): Object {
        // console.log('jInitBoard', canvas, attributes)

        if (canvas.length === 0)       // default to currentCanvas, then to jxgbox
            canvas = (this.currentCanvas.length === 0) ? 'jxgbox' : this.currentCanvas;



        if ((canvas !== this.currentCanvas)) {   // test whether board needs to be created
            // console.log('change currentCanvas from ', this.currentCanvas, ' to ', canvas)

            // check if we have previously created this board
            if (this.boardList.has(canvas)) {
                let temp = this.boardList.get(canvas)! as [object, object] // we already have this board
                this._jBoard = temp[0]
                this._jView3d = temp[1]
                this.currentCanvas = canvas
                return this._jBoard
            }

            // create the board
            this._jBoard = (window as any).JXG.JSXGraph.initBoard(canvas, attributes)


            let bounding = (this._jBoard as any).getBoundingBox()
            // console.log(bounding, [[bounding[0], bounding[3]], Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])])

            // axesPosition is immutable.  if it is set in initBoard(), then set it in
            let attrs = (this._jBoard as any).attr;
            let ap = 'none'
            if ('axesposition' in attrs) {
                ap = attrs.axesposition;
            }

            //create the 3D view
            this._jView3d = (this._jBoard as any).create('view3d',
                [[bounding[0], bounding[3]],
                [Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])],
                // [box, box, box]] same size of the bounding box
                [[bounding[0], bounding[2]], [bounding[3], bounding[1]], [bounding[0], bounding[2]]]],  // just guessing at z axis
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
            (this._jView3d as any).setView(Math.PI, Math.PI / 2, 0);

            this.boardList.set(canvas, [this._jBoard, this.jView3d])   // keep a copy in case multiple boards
            this.currentCanvas = canvas

            printLineNumber = 0 // reset the 'print' utility
        }
        return this._jBoard
    }



}

// this is a hack, it pollutes the namespace.  But we can't
// run the playground without it.   Fix it if we merge with JSXGraph.
if (typeof (window as any).TSXGlobal === "undefined")       // only create if it doesn't exist
    (window as any).TSXGlobal = new TSXBoard({}, {});           // object to store 'board' and 'view3D' objects


// and some simple methods to retrieve them
/** PRIVATE - retrieves the current JSXGraph Board object. */
export function _jsxBoard() {
    return (window as any).TSXGlobal.jBoard;
}
/** PRIVATE - retrieves the current JSXGraph View3d object. */
export function _jsxView3d() {
    return (window as any).TSXGlobal.jView3d;
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////



// abstract class View3D {
//     setView(x: number, y: number, z: number) { }

// }

let jBoard: Object
let defaultAttrs: Object = { name: '', showinfobox: false }




// to define 'matAny' (eg: 2x3 array) we need three steps
type arrayNumber = Number[]
type arrayNumber2 = arrayNumber | Number
type matAny = arrayNumber2[]





interface ShaderInterface {
    enabled: Boolean,
    type: 'angle' | 'zIndex',
    hue: number,
    saturation: number,
    minlightness: number,
    maxLightness: number,
}

interface MoveToOptions {
    callback?: Function,
    effect?: "==" | "<>" | "--" | "<" | ">",
    repeat?: number
}


interface SelectionAttributes {
    enabled?: Boolean,
    name?: string,
    needShift?: Boolean,  // mouse selection needs pressing of the shift key
    needCtrl?: Boolean,    // mouse selection needs pressing of the shift key
    fillColor?: string,
}

interface ScreenShotAttributes {
    scale?: number,
    type?: string,
    symbol?: '\u2318' | '\u22b9' | '\u26f6',
    css?: string,
    cssButton?: string,
}


///////////////////////////////////////////
///////  stuff for View3D elevation controls
interface pointerControls {
    /**  specifies whether pointer navigation is allowed by elevation. */
    enabled?: Boolean,
    /** Number indicating how many passes the range of the el_slider makes when the cursor crosses the entire board once in the horizontal direction.*/
    speed?: number,
    /** specifies whether the pointer navigation is continued when the cursor leaves the board. */
    outside?: Boolean,
    /** Which button of the pointer should be used? ('-1' (=no button), '0' or '2') */
    button?: '-1' | '0' | '2'
    /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
    key?: 'none' | 'shift' | 'ctrl'
}
interface keyboardControls {
    /** specifies whether the keyboard (arrow keys) can be used to navigate the board.*/
    enabled?: Boolean
    /** Size of the step per keystroke. */
    step?: number
    /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
    key?: 'none' | 'shift' | 'ctrl'
}
interface sliderControls {
    min?: number, // Minimum value.
    max?: number,  //Maximum value.
    start?: number, //Start value.
}

interface screenControls {
    /** an object */
    pointer?: pointerControls,
    /** an object */
    keyboard?: keyboardControls,
    continuous?: Boolean,
    /** an object */
    slider?: sliderControls,
}

////////  end View3D elevation controls
//////////////////////////////////////////


export interface AriaAttributes {
    /** default false */
    enabled?: Boolean,
    /** default ''   */
    label?: string,
    /** Politeness setting.  default 'assertive'   */
    live?: string,
    /** ignore  ?? see Alfred comment in https://github.com/jsxgraph/jsxgraph/pull/737#event-16103541603 */
    ignore?: Boolean
}

interface DisplayPoint {
    size?: Number
    face?: 'cross' | 'plus' | 'minus' | 'divide' | 'diamond' | 'triangledown' | 'triangleleft' | 'triangleright' | 'triangleup' | 'square' | 'circle'

}

interface VertexAttributes {
    visible?: Boolean
}

interface PanAttributes {
    /** allow panning */
    enabled?: Boolean
    /** panning is done with two fingers on touch devices */
    needTwoFingers?: Boolean
    /** mouse panning needs pressing of the shift key */
    needShift?: Boolean
}

interface ZoomAttributes {
    /** turns off zooming completely, if set to false. */
    enabled?: Boolean,
    /** horizontal zoom factor (multiplied to JXG.Board#zoomX) */
    factorX?: number,
    /** vertical zoom factor (multiplied to JXG.Board#zoomY) */
    factorY?: number,
    /** allow zooming by mouse wheel */
    wheel?: Boolean,
    /**  mouse wheel zooming needs pressing of the shift key */
    needShift?: Boolean,
    /** minimal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomOut, default 0.001 */
    min?: number,
    /** maximal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomIn, default 1000.0 */
    max?: number,
    /** 'auto' centers zoom at position of mouse, 'board' centers zoom at the board's center
    center?: 'auto'| 'board',
    /**  pinch-to-zoom gesture for proportional zoom, default true */
    pinch?: Boolean,
    /** Horizontal pinch-to-zoom zooms horizontal axis. Only available if keepaspectratio:false */
    pinchHorizontal?: Boolean,
    /** Vertical pinch-to-zoom zooms vertical axis only. Only available if keepaspectratio:false */
    pinchVertical?: Boolean,
    /**  Sensitivity (in degrees) for recognizing horizontal or vertical pinch-to-zoom gestures.  default: 7 */
    pinchSensitivity?: number
}



/**
*  Constant: user coordinates relative to the coordinates system defined by the bounding box.
*/
export const COORDS_BY_USER = 0x0001
/**
*  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
*/
export const COORDS_BY_SCREEN = 0x0002


interface JSXMathAttributes {
}




///// some math classes by hand
export class IntervalArithmetic {
}
export class PolyMonomial {
}
export class PolyPolynomial {
}
export class Symbolic {
}






//////////
//////////            // this is the 'alternative mixins' pattern for TypeScript
//////////
//////////        /** use this to create mixins in Typescript.  Each mixin is a traditional ES class,
//////////         *  For example, to add classes Jumpable and Duckable to class Sprite, you add
//////////         * an interface which merges the expected mixins using the same name as your base, and
//////////         * then apply the mixins at runtime.
//////////        ```js
//////////        class Jumpable {  jump() {}  }
//////////        class Duckable {  duck() {}  }
//////////        class Sprite { x = 0; y = 0; }   // base class
//////////        interface Sprite extends Jumpable, Duckable {}
//////////        TXG.TSXGraph.applyMixins(Sprite, [Jumpable, Duckable]);
//////////
//////////        let s = new Sprite()  // now includes methods from mixins
//////////        s.jump();
//////////        ~~~
//////////                 */
//////////                static applyMixins(derivedCtor: any, constructors: any[]):void {
//////////                    constructors.forEach((baseCtor) => {
//////////                      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//////////                        Object.defineProperty(
//////////                          derivedCtor.prototype,
//////////                          name,
//////////                          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
//////////                            Object.create(null)
//////////                        );
//////////                      });
//////////                    });
//////////                  }
//////////
//////////
//////////
//////////
//////////

/** Initialize a new board. The first parameter 'html' should be the ID of a <DIV> in your web page.\n\n
 * ```js
<div id="jxgbox" class="jxgbox" style="width:1000px; height:1000px;float:left;"></div>
<script src="lunar.js" type="module" defer>  </script>\n
// start your .ts with something like this
import { TXG } from "../src/tsxgraph.js";
const board = TXG.TSXGraph.initBoard('jxgbox', { axis: true });
```
*/




export type spaceIcon =
    'icons/alien-1.png' |
    'icons/alien-2.png' |
    'icons/alien-3.png' |
    'icons/alien-4.png' |
    'icons/alien-5.png' |
    'icons/alien-abduction.png' |
    'icons/alien-ship-2.png' |
    'icons/alien-ship-beam.png' |
    'icons/alien-ship.png' |
    'icons/asteroid-2.png' |
    'icons/asteroid.png' |
    'icons/astronaut-helmet.png' |
    'icons/atom.png' |
    'icons/atronaut.png' |
    'icons/bb-8.png' |
    'icons/big-dipper.png' |
    'icons/black-hole.png' |
    'icons/brain-slug.png' |
    'icons/cassiopeia.png' |
    'icons/chewbacca.png' |
    'icons/comet.png' |
    'icons/cylon-raider.png' |
    'icons/darth-vader.png' |
    'icons/death-star.png' |
    'icons/earth.png' |
    'icons/falling-asteroid.png' |
    'icons/falling-space-capsule.png' |
    'icons/falling-star.png' |
    'icons/flag.png' |
    'icons/fly\ icon\ licence.png' |
    'icons/flyicon.png' |
    'icons/galaxy.png' |
    'icons/intl-space-station.png' |
    'icons/jupiter.png' |
    'icons/landing-space-capsule.png' |
    'icons/laser-gun.png' |
    'icons/mars.png' |
    'icons/millennium-falcon.png' |
    'icons/mission-control.png' |
    'icons/moon-full-almost.png' |
    'icons/moon-full-moon.png' |
    'icons/moon-last-quarter.png' |
    'icons/moon-new-moon.png' |
    'icons/moon-waning-cresent.png' |
    'icons/moon-waning-gibbous.png' |
    'icons/morty.png' |
    'icons/neptune.png' |
    'icons/pluto.png' |
    'icons/princess-leia.png' |
    'icons/rick.png' |
    'icons/ring-ship.png' |
    'icons/rocket-launch.png' |
    'icons/rocket.png' |
    'icons/satellite.png' |
    'icons/saturn.png' |
    'icons/solar-system.png' |
    'icons/space-capsule.png' |
    'icons/space-cockpit.png' |
    'icons/space-invader.png' |
    'icons/space-observatory.png' |
    'icons/space-rocket.png' |
    'icons/space-rover-1.png' |
    'icons/space-rover-2.png' |
    'icons/space-satellite-dish.png' |
    'icons/space-ship_1.png' |
    'icons/space-ship_2.png' |
    'icons/space-ship_3.png' |
    'icons/space-ship.png' |
    'icons/space-shuttle-launch.png' |
    'icons/space-shuttle.png' |
    'icons/sputnick-1.png' |
    'icons/sputnick-2.png' |
    'icons/star.png' |
    'icons/stars.png' |
    'icons/stormtrooper.png' |
    'icons/sun.png' |
    'icons/telescope.png' |
    'icons/uranus.png' |
    'icons/venus.png' |
    'icons/moon-dreamy.png'


// utility to appy default attributes
function defaultAttributes(attrs: Object = {}) {
    for (const property in defaultAttrs) {
        if (!attrs.hasOwnProperty(property)) {   // if the user has not specified a value for this property
            (attrs as any)[property] = (defaultAttrs as any)[property]
        }
    }
    return attrs
}

// utility to determine if last parameter is the attributes
function isAttribute(last: any): Boolean {
    return ((typeof last == 'object') &&     // must be an object
        (!Array.isArray(last)) &&     // not an array (typeof treats arrays as objects)
        (last !== null) &&     // null returns type 'object' - javascript bug
        ('elType' in last === false))              // if has elType then a JSXGraph object
}


// print utility - needs work !!
let printLineNumber: number = 0   // added a print() function, this tracks the line#
export function print(...args: any[]) {
    let bbox = _jsxBoard().getBoundingBox()   // get every time, in case setBoundingBox()
    let left = bbox[0] // align x to left border
    let lineHeight = (bbox[1] - bbox[3]) / 20  //
    let top = bbox[1] - (2 * lineHeight) - (printLineNumber * lineHeight)  // align y to top border

    let helper = (stringText: string, item: any): string => {
        if (typeof item == null) {
            stringText += 'null, ';
        } else if (item == undefined) {
            stringText += 'undefined';
        } else if (typeof item == 'string') {
            stringText += '\'' + item + '\'';
        } else if (typeof item == 'number') {
            stringText += Number.isInteger(item) ? item.toString() : item.toFixed(2);
        } else if (typeof item == 'boolean') {
            stringText += item ? 'true' : 'false';
        } else if (Array.isArray(item)) {
            stringText += '['
            stringText = item.reduce((acc, curr) => acc + helper('', curr), stringText)
            stringText += ']'
        } else if (typeof item == 'object') {
            stringText += '{'
            if ('elType' in item) {
                stringText += item.elType
            } else if ('elV2Math' in item) {
                stringText += [item.X(), item.Y()]
            }
            stringText += '}'
        } else {
            stringText += 'UNKNOWN';
        }
        stringText += ', '
        return stringText
    }


    let stringText = ''
    args.forEach((argn) => {
        stringText = helper(stringText, argn)
    });

    _jsxBoard().create('text', [left, top, stringText], { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' })
    printLineNumber += 1
}


// JXG methods that we pass through

/** Version of JSXGraph.  */
export function version(): String {
    return (window as any).JXG.version;
}


// these are some useful board methods that we pass through

/** Board and construction methods.  **Press '.' to see options** */
export let board = {

    /** Set the bounding box of the board.  Returns the board.
    ```js
    TSX.board.setBoundingBox([-8, 8, 8, -8])
    ```*/

    /** Stop updates of the board.  Returns the board. */
    suspendUpdate: (): Object => _jsxBoard().suspendUpdate(),


    /** Enable updates of the board.  Returns the board. */
    unsuspendUpdate: (): Object => _jsxBoard().unsuspendUpdate(),


    /** Update the board.  Returns the board.  */
    update: (): Object => _jsxBoard().update(),

    /** Use MathJax by default. PUT THIS AT THE VERY TOP OF YOUR PROGRAM.  See: {@link https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference}
     * ```js
     * TSX.board.useMathJax()  // only needed once
     * let a = TSX.point([-3, 3], { size: 4, color: 'blue', name: '\\(\\overrightarrow{a}\\)', fixed: true, label: { fontSize: 20 } });
     *```
     */
    useMathJax: () => (window as any).JXG.Options.text.useMathJax = true,   // by default MathJax is true


    /** sets the projection to parallel or perspective.  Possible values are 'centeral' or 'parallel'. */
    projection3D: (setting: 'parallel' | 'central') => _jsxView3d().setAttribute({ 'projection': setting }),

    // /** Adds an animation.*/
    // addAnimation: (element:GeometryElement) => _jsxBoard().addAnimation(element),

    /** Add the default x- and y-axis and grid to the construction,, equivalent to using the code below.
     * ```js
     * TSX.axis([0,0],[1,0]);
     * TSX.axis([0,0],[0,1]);
     * ```
     */
    addAxis: () => {        // using _jsxBoard ensures board is created if necessary
        _jsxBoard().create('axis', [[0, 0], [1, 0]]);
        _jsxBoard().create('axis', [[0, 0], [0, 1]]);
    },

    /**  Set infobox visible / invisible. */
    displayInfobox: (val: Boolean) => _jsxBoard().displayInfobox(val),


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
    zoomIn: (x: number, y: number) => { return _jsxBoard().zoomIn(x, y) },

    /** Zooms out of the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY and applies the zoom.*/
    zoomOut: (x: number, y: number): any => { return _jsxBoard().zoomOut(x, y) },

    /** Sets the zoom level to fX resp fY.*/
    setZoom: (fX: number, fY: number): any => { return _jsxBoard().setZoom(fX, fY) },

    /** Reset the zoom level to the original zoom level from initBoard(); Additionally, if the board as been initialized with a boundingBox(which is the default ), restore the viewport to the original viewport during initialization.*/
    zoom100: (): any => { return _jsxBoard().zoom100() },


    // these are on the JXG object, but we keep them here for simplicity

    /** Set the bounding box of the board. */
    setBoundingBox: (box: number[], keepAspectRatio: Boolean = false, setZoom?: 'reset' | 'keep' | 'update'): Object => { return _jsxBoard().setBoundingBox(box, keepAspectRatio, setZoom) },

    /** Get the bounding box of the board. */
    getBoundingBox: (): number[] => { return _jsxBoard().getBoundingBox() },

    /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields. */
    useKatex: () => { (window as any).JXG.Options.text.useKatex = true },

    /** Add all possible event handlers to the board object that move objects, i.e. */
    addEventHandlers: (): any => { return _jsxBoard().addEventHandlers() },

    /**    Register keyboard event handlers. */
    addKeyboardEventHandlers: (): any => { return _jsxBoard().addKeyboardEventHandlers() },

    /** Adds a grid to the board according to the settings given in board.options. For more control, use the TSX.grid object.*/
    addGrid: (): any => { return _jsxBoard().addGrid() },

    /** Event handlers for the board (rather than for individual elements).
    *```js
    *    TSX.board.on('pointerdown',pointerDown)
    *    //equivalent to:   addEventListener("pointerdown", pointerDown)
    *```
    */
    on: (event: string, handler: Function) => _jsxBoard().on(event, handler),

    /** given a PointerEvent (eg: TSX.on('down', (e:Event)=> ... ), returns the mouse coordinates [x,y] in JSXGraph coordinates.  */
    getMouseCoords: (e: Event): number[] => {
        let cPos = _jsxBoard().getCoordsTopLeftCorner(e)
        let absPos = (window as any).JXG.getPosition(e)
        let dx = absPos[0] - cPos[0]
        let dy = absPos[1] - cPos[1]

        let coords = new (window as any).JXG.Coords(2, [dx, dy], _jsxBoard());
        return [coords.usrCoords[1], coords.usrCoords[2]]
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
    setView: (az: number, el: number, r?: number) => {
        console.log('setview from function 527')
        return _jsxView3d().setView(az, el, r)
    },


    // animateAzimuth:()=> _jsxView3d().animateAzimuth(),

    // worldToFocal(pWorld, homog)
    // Map world coordinates to focal coordinates.

}











// this is the second header file.  It includes stuff that can't be put in header.ts file because definitions are not yet available.


// mesh.visible allows 'inherit' but can't do that here because typescript knows that Curve.visible does NOT allow it.
interface MeshAttributes extends CurveAttributes {
    /** A Mesh3D is attached to a Plane3D. */
    visible?: Boolean|Function
}

// for point.visit() and point.moveTo()
interface VisitAttributes{
    callback?:Function,
    effect?: "==" | "<>" | "<" | ">"
    repeat?:number,
}


/** Initialize a board other than jxgbox */
export function initBoard(canvas: string='', attributes?: BoardAttributes): Object {   // a JSXGraph board object
        return (window as any).TSXGlobal.jInitBoard(canvas,attributes);
    }


/** legacy create for 2D elements */
export function create(element: string, params: any[], attributes: Object = {}) {
initBoard()
if (element.toLowerCase().includes('3d'))    // 3D
    return _jsxView3d().create(element, params, attributes);
else
    return _jsxBoard().create(element, params, attributes);
}









 export interface BoardAttributes  {
 /** Location of the coordinate axes or 'axis gizmo'. */
 axesPosition?: 'none'| 'center'| 'border'
 /** Time (in msec) between two animation steps. */
 animationDelay?: number
 /** Show default axis. */
 axis?: Boolean
 /** Bounding box of the visible area in user coordinates. */
 boundingBox?: number[]
 /** Enable browser scrolling on touch interfaces if the user double taps into an empty region of the board. */
 browserPan?: Boolean
 /** Maximum time delay (in msec) between two clicks to be considered as double click. */
 clickDelay?: number
 /** If false (default), JSXGraph follows the JavaScript standard and fires before a dblclick event two click events. */
 dblClickSuppressClick?: Boolean
 /** Attributes for the default axes in case of the attribute axis:true in JXG.JSXGraph#initBoard. */
 defaultAxes?: {x?:AxisAttributes,y?:AxisAttributes}
 /** Supply the document object. */
 document?: Object|Boolean
 /** Attribute(s) to control the fullscreen icon. */
 fullscreen?: {symbol?:string,scale?:number}
 /** Support for internationalization of number formatting. */
 intl?: {enabled?:Boolean,locale?:string}
 /** If set to true, the ratio between horizontal and vertical unit sizes stays constant - independent of size changes of the hosting HTML div element. */
 keepAspectRatio?: Boolean
 /** Control using the keyboard to change the construction. */
 keyboard?: {enabled?:Boolean, dy?: number, panShift?: Boolean, panCtrl?:Boolean}
 /** If enabled, user activities are logged in array "board.userLog". */
 logging?: Boolean
 /** Maximal bounding box of the visible area in user coordinates. */
 maxBoundingBox?: [number,number,number,number]
 /** Maximum frame rate of the board, i.e. */
 maxFrameRate?: number
 /** Maximum number of digits in automatic label generation. */
 maxNameLength?: number
 /** Change redraw strategy in SVG rendering engine. */
 minimizeReflow?: string
 /** Element which listens to move events of the pointing device. */
 moveTarget?: string
 /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
 offsetX?: number
 /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
 offsetY?: number
 /** Control the possibilities for panning interaction (i.e. */
 pan?: {enabled?:Boolean, needTwoFingers?:Boolean, needShift?:Boolean}
 /** Allow user interaction by registering pointer events (including mouse and touch events), fullscreen, keyboard, resize, and zoom events. */
 registerEvents?:{fullscreen?:Boolean,keyboard?:Boolean,pointer?:Boolean,resize?:Boolean,wheel?:Boolean}
 /** Default rendering engine. */
 renderer?: string
 /** Control if JSXGraph reacts to resizing of the JSXGraph container element by the user / browser. */
 resize?: {enable?:Boolean,throttle?:number}
 /** Attributes to control the screenshot function. */
 screenshot?: ScreenShotAttributes
 /** Control th=> e possibilities for a selection rectangle. */
 selection?: SelectionAttributes
 /** Show a button which allows to clear all traces of a board. */
 showClearTraces?: Boolean
 /** Show copyright string in canvas. */
 showCopyright?: Boolean
 /** Show a button in the navigation bar to start fullscreen mode. */
 showFullscreen?: Boolean
 /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to `inherit`. */
 showInfobox?: Boolean
 /** Display of navigation arrows and zoom buttons in the navigation bar. */
 showNavigation?: Boolean
 /** Show a button in the navigation bar to force reload of a construction. */
 showReload?: Boolean
 /** Show a button in the navigation bar to enable screenshots. */
 showScreenshot?: Boolean
 /** Display of zoom buttons in the navigation bar. */
 showZoom?: Boolean
 /** If true the first element of the set JXG.board.objects having hasPoint==true is taken as drag element. */
 takeFirst?: Boolean
 /** If true, when read from a file or string - the size of the div can be changed by the construction text. */
 takeSizeFromFile?: Boolean
 /** Set a visual theme for a board. */
 theme?: string
 /** Title string for the board. */
 title?: string
 /** Control the possibilities for zoom interaction. */
 zoom?: ZoomAttributes
 /** Zoom factor in horizontal direction. */
 zoomX?: number
 /** Zoom factor in vertical direction. */
 zoomY?: number
 }

 export interface GeometryElementAttributes  {
 /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to `inherit`. */
 showInfobox?: Boolean
 /** ARIA settings for the element. */
 aria?: AriaAttributes
 /** Apply CSS classes to an element in non-highlighted view. */
 cssClass?: string
 /** Color of the element. */
 color?: string|Function
 /** Opacity of the element (between 0 and 1). */
 opacity?: number|Function
 /** The fill color of this geometry element. */
 fillColor?: string|Function
 /** Opacity for fill color. */
 fillOpacity?: number|Function
 /** The stroke color of the given geometry element. */
 strokeColor?: string|Function
 /** Opacity for element's stroke color. */
 strokeOpacity?: number|Function
 /** Width of the element's stroke. */
 strokeWidth?: number|Function
 /** If false the element won't be visible on the currentBoard, otherwise it is shown. */
 visible?: Boolean|Function
 /** Determines the elements border-style. Possible values are: 0 for a solid line 1 for a dotted line 2 for a line with small dashes 3 for a line with medium dashes 4 for a line with big dashes 5 for a line with alternating medium and big dashes and large gaps 6 for a line with alternating medium and big dashes and small gaps 7 for a dotted line. Needs JXG.GeometryElement#linecap set to ”round” for round dots.The dash patterns are defined in JXG.AbstractRenderer#dashArray. */
 dash?: number
 /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
 fixed?: Boolean
 /** If true a label will display the element's name. */
 withLabel?: Boolean
 /** Attributes for the line label. */
 label?: LabelAttributes
 /** Set display name  */
 name?:string|Function
 /** If enabled:true the (stroke) element will get a customized shadow.Customize color and opacity: If the object's RGB stroke color is [r,g,b] and its opacity is op, and the shadow parameters color is given as [r', g', b'] and opacity as op' the shadow will receive the RGB color[blend*r + r', blend*g + g', blend*b + b']and its opacity will be equal to op * op'. Further, the parameters blur and offset can be adjusted.This attribute is only available with SVG, not with canvas. */
 shadow?: Object
 /** If true, KaTeX will be used to render the input string. */
 useKatex?: Boolean
 /** Snaps the element or its parents to the grid. Currently only relevant for points, circles, and lines. Points are snapped to grid directly, on circles and lines it's only the parent points that are snapped */
  snapToGrid?: Boolean
 /** If some size of an element is controlled by a function, like the circle radius or segments of fixed length, this attribute controls what happens if the value is negative. By default, the absolute value is taken. If true, the maximum of 0 and the value is used. */
  nonnegativeOnly?: Boolean
 /** Draw label for this Element? */
 drawLabels?: Boolean
 /** Size in pixels */
 size?: number|Function
 /** There are different point styles which differ in appearance. */
  face?: 'o'|'line'|'point'|'cross'| 'plus' | 'minus' | 'divide'| 'diamond'| 'triangledown' | 'triangleleft' | 'triangleright'| 'triangleup' | 'square' |'circle' | string
 /** Include the the zero line in the grid */
  drawZero?: Boolean
 /** If true, the dash pattern is multiplied by strokeWidth / 2. */
  dashScale?: Boolean
 /** If the element is dragged it will be moved on mousedown or touchstart to the top of its layer. Works only for SVG renderer and for simple elements consisting of one SVG node. */
  dragToTopOfLayer?: Boolean
 /** If true the element is fixed and can not be dragged around. The element will even stay at its position on zoom and moveOrigin events. Only free elements like points, texts, curves can be frozen. */
  frozen?: Boolean
 /** Gradient type. Possible values are 'linear'. 'radial' or null. */
  gradient?: 'linear'|'radial'|'null'
 /** Angle (in radians) of the gradiant in case the gradient is of type 'linear'. If the angle is 0, the first color is on the left and the second color is on the right. If the angle is π/2 the first color is on top and the second color at the bottom. */
  gradientAngle?: number
 /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'x1'. Takes a value between 0 and 1. */
  gradientCX?: number
 /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'y1'. Takes a value between 0 and 1. */
  gradientCY?: number
 /** The gradientEndOffset attribute is a number (ranging from 0 to 1) which indicates where the second gradient stop is placed, see the SVG specification for more information. For linear gradients, this attribute represents a location along the gradient vector. For radial gradients, it represents a percentage distance from (fx,fy) to the edge of the outermost/largest circle. */
  gradientEndOffset?: number
 /** This attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% <stop> is mapped to the perimeter of the start circle. For radial gradients in canvas this is the value 'r0'. Takes a value between 0 and 1. */
  gradientFR?: number
 /** `fx` and `fy` define the focal point for the radial gradient. The gradient will be drawn such that the 0% gradient stop is mapped to (fx, fy). For radial gradients in canvas this is the value 'x0'. Takes a value between 0 and 1. */
  gradientFX?: number
 /** y-coordinate of the circle center for the second color in case of gradient 'radial'. (The attribute fy in SVG) For radial gradients in canvas this is the value 'y0'. Takes a value between 0 and 1. */
  gradientFY?: number
 /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'r1'. Takes a value between 0 and 1. */
  gradientR?: number
 /** Second color for gradient. */
  gradientSecondColor?: String
 /** Opacity of second gradient color. Takes a value between 0 and 1. */
  gradientSecondOpacity?: number
 /** The gradientStartOffset attribute is a number (ranging from 0 to 1) which indicates where the first gradient stop is placed, see the SVG specification for more information. For linear gradients, this attribute represents a location along the gradient vector. For radial gradients, it represents a percentage distance from (fx,fy) to the edge of the outermost/largest circle. */
  gradientStartOffset?: number
 /** Should the element use highlight attributes on mouseOver? */
  highlight?: Boolean
 /** The fill color of the given geometry element when the mouse is pointed over it. */
  highlightFillColor?: string|Function
 /** Opacity for fill color when the object is highlighted. */
  highlightFillOpacity?: number|Function
 /** The stroke color of the given geometry element when the user moves the mouse over it. */
  highlightStrokeColor?: string|Function
 /** Opacity for stroke color when the object is highlighted. */
  highlightStrokeOpacity?: number|Function
 /** Width of the element's stroke when the mouse is pointed over it. */
  highlightStrokeWidth?: number|Function
 /** Display layer which will contain the element. */
  layer?: number
 /** Line endings (linecap) of a stroke element, i.e. line, circle, curve. Possible values are:'butt','round','square'. */
  lineCap?: string
 /** Determines whether two-finger manipulation may rotate this object. If set to false, the object can only be scaled and translated.In case the element is a polygon or line and it has the attribute ”rotatable:false”, moving the element with two fingers results in a rotation or translation.If an element is set to be neither scalable nor rotatable, it can only be translated.In case of a polygon, scaling is only possible if no vertex has snapToGrid or snapToPoints enabled and no vertex is fixed by some other constraint. Also, the polygon itself has to have snapToGrid disabled. */
  rotatable?: Boolean
 /** Determines whether two-finger manipulation of this object may change its size. If set to false, the object is only rotated and translated.In case the element is a horizontal or vertical line having ticks, ”scalable:true” enables zooming of the currentBoard by dragging ticks lines. This feature is enabled, for the ticks element of the line element the attribute ”fixed” has to be false and the line element's scalable attribute has to be true.In case the element is a polygon or line and it has the attribute ”scalable:false”, moving the element with two fingers results in a rotation or translation.If an element is set to be neither scalable nor rotatable, it can only be translated.In case of a polygon, scaling is only possible if no vertex has snapToGrid or snapToPoints enabled and no vertex is fixed by some other constraint. Also, the polygon itself has to have snapToGrid disabled. */
  scalable?: Boolean
 /** Controls if an element can get the focus with the tab key. tabindex corresponds to the HTML attribute of the same name. See descriptiona at MDN. The additional value ”null” completely disables focus of an element. The value will be ignored if keyboard control of the currentBoard is not enabled or the element is fixed or not visible. */
  tabindex?: number
 /** If true the element will be traced, i.e. on every movement the element will be copied to the background. Use JXG.GeometryElement#clearTrace to delete the trace elements.The calling of element.setAttribute({trace:false}) additionally deletes all traces of this element. By calling element.setAttribute({trace:'pause'}) the removal of already existing traces can be prevented.The visual appearance of the trace can be influenced by JXG.GeometryElement#traceAttributes. */
  trace?: Boolean
 /** Extra visual properties for traces of an element */
  traceAttributes?: PointAttributes
 }

 export interface PointAttributes extends GeometryElementAttributes {
 /** If the distance of the point to one of its attractors is less than this number the point will be a glider on this attracting element. If set to zero nothing happens. */
  attractorDistance?: number
 /** If set to true, the point will only snap to (possibly invisibly) grid points when within Point#attractorDistance of such a grid point.The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
  attractToGrid?: Boolean
 /** If true, the infobox is shown on mouse/pen over, if false not. If the value is 'inherit', the value of JXG.currentBoard#showInfobox is taken. */
  showInfobox?: Boolean
 /** If set to true, the point will snap to a grid of integer multiples of Point#snapSizeX and Point#snapSizeY (in user coordinates).The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
  snapToGrid?: Boolean
 /** This attribute was used to determined the point layout. It was derived from GEONExT and was replaced by Point#face and Point#size. */
  style?: number
 }

 export interface LineAttributes extends GeometryElementAttributes {
 /** Configure the arrow head at the position of its first point or the corresponding intersection with the canvas borderIn case firstArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value }type=7 is the default for curves if firstArrow: true */
  firstArrow?: Boolean | Object
 /** Attributes for the line label. */
  label?: LabelAttributes
 /** Configure the arrow head at the position of its second point or the corresponding intersection with the canvas border.In case lastArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line.// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value is 6. }type=7 is the default for curves if lastArrow: true */
  lastArrow?: Boolean | Object
 /** This number (pixel value) controls where infinite lines end at the canvas border. If zero, the line ends exactly at the border, if negative there is a margin to the inside, if positive the line ends outside of the canvas (which is invisible). */
  margin?: number
 /** Attributes for first defining point of the line. */
  point1?: PointAttributes
 /** Attributes for second defining point of the line. */
  point2?: PointAttributes
 /** Defines together with Point#snapSizeY the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the currentBoard. */
  snapSizeX?: number
 /** Defines together with Point#snapSizeX the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the currentBoard. */
  snapSizeY?: number
 /** If set to true, the point will snap to a grid defined by Point#snapSizeX and Point#snapSizeY. */
  snapToGrid?: Boolean
 /** If true, line stretches infinitely in direction of its first point. Otherwise it ends at point1. */
  straightFirst?: Boolean
 /** If true, line stretches infinitely in direction of its second point. Otherwise it ends at point2. */
  straightLast?: Boolean
 /** Attributes for ticks of the line. */
  ticks?: TicksAttributes
 /** If set to true, Line#firstArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
  touchFirstPoint?: Boolean
 /** If set to true, Line#lastArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
  touchLastPoint?: Boolean
 }

 export interface GeometryElement3DAttributes extends GeometryElementAttributes {
 /** label for this item */
 name?:string|Function
 /** enable label for this item */
 withLabel?:boolean
 /** Opacity of the element (between 0 and 1). */
 opacity?: number|Function
 /** Opacity of the element (between 0 and 1). */
 fillOpacity?: number|Function
 /** Set whether the element is visibledisplay name  */
 visible?:Boolean
 /** Set the width of lines in pixels  */
 strokeWidth?:number
 /** Set the color of lines */
 strokeColor?:string|Function
 /** Set the color of areas */
 fillColor?:string|Function
 /** Arrow at the end of the line? */
 firstArrow?:Boolean
 /** Arrow at the start of the line? */
 lastArrow?:Boolean
 /** Highlight on mouse-over? */
 highlight?:Boolean
 /** Attributes for first point (an object) */
 point1?:Point3DAttributes
 /** Attributes for second point (an object) */
 point2?:Point3DAttributes
 }

 export interface View3DAttributes extends GeometryElement3DAttributes {
 /** Choose the projection type to be used: `parallel` or `central`. `parallel` is parallel projection, also called orthographic projection.   `central` is central projection, also called perspective projection */
 projection?: `parallel`|`central`
 /** Specify the user handing of the azimuth. */
 az?: screenControls
 /** Specify the user handing of the bank angle. */
 bank?: screenControls
 /** Specify the user handing of the elevation. */
 el?: screenControls
 /** Support occlusion by ordering points? */
 depthorderpoints?: Boolean
 /** use {enable:true, layers:[12]} */
 depthOrder?: Object
 /** Position of the main axes in a View3D element. Possible values are 'center' and 'border'. */
 axesPosition?: String
 /** Allow vertical dragging of objects, i.e. in direction of the z-axis. Subobjects areenabled: truekey: 'shift'Possible values for attribute key: 'shift' or 'ctrl'. */
 verticalDrag?: Object
 /** Attributes of the 3D x-axis. */
 xAxis?: Object
 /** Attributes of the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
 xPlaneFront?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
 xPlaneFrontYAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
 xPlaneFrontZAxis?: Object
 /** Attributes of the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
 xPlaneRear?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
 xPlaneRearYAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
 xPlaneRearZAxis?: Object
 /** Attributes of the 3D y-axis. */
 yAxis?: Line3D
 /** Attributes of the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
 yPlaneFront?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
 yPlaneFrontXAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
 yPlaneFrontZAxis?: Object
 /** Attributes of the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
 yPlaneRear?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
 yPlaneRearXAxis?: Object
 /** Attributes of the 3D z-axis on the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
 yPlaneRearZAxis?: Object
 /** Attributes of the 3D z-axis. */
 zAxis?: Line3D
 /** Attributes of the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
 zPlaneFront?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
 zPlaneFrontXAxis?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
 zPlaneFrontYAxis?: Object
 /** Attributes of the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
 zPlaneRear?: Object
 /** Attributes of the 3D x-axis on the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
 zPlaneRearXAxis?: Object
 /** Attributes of the 3D y-axis on the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
 zPlaneRearYAxis?: Object
 }

 export interface currentBoardAttributes  {
 }

 export interface InfoboxAttributes  {
 /** Horizontal offset in pixel of the infobox text from its anchor point. */
  distanceX?: number
 /** Vertical offset in pixel of the infobox text from its anchor point. */
  distanceY?: number
 /** Internationalization support for infobox text. */
  intl?: object
 }

 export interface CAttributes  {
 }

 export interface CAAttributes  {
 }

 export interface ChartAttributes extends GeometryElementAttributes {
 /** Select type of chart. */
 chartStyle?: `bar`|`line`
 /**  */
 width?: number
 /**  */
 labels?: any[]
 /**  */
 colorArray?: string[]
 /**  */
 label?: LabelAttributes
 }

 export interface CircleAttributes extends GeometryElementAttributes {
 /** Attributes for center point. */
  center?: GeometryElementAttributes
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** Attributes for circle label. */
  label?: LabelAttributes
 /** Attributes for center point. */
  point?: PointAttributes
 /** Attributes for center point. */
  point2?: PointAttributes
 }

 export interface Circle3DAttributes extends GeometryElement3DAttributes {
 }

 export interface ComplexAttributes  {
 }

 export interface CompositionAttributes  {
 }

 export interface CoordsAttributes  {
 }

 export interface CurveAttributes extends GeometryElementAttributes {
 /** The curveType is set in JXG.Curve#generateTerm and used in JXG.Curve#updateCurve. Possible values are'none' 'plot': Data plot 'parameter': we can not distinguish function graphs and parameter curves 'functiongraph': function graph 'polar' 'implicit' (not yet) Only parameter and plot are set directly. Polar is set with JXG.GeometryElement#setAttribute only. */
  curveType?: String
 /** If true use a recursive bisection algorithm. It is slower, but usually the result is better. It tries to detect jumps and singularities. */
  doAdvancedPlot?: Boolean
 /** If true use the algorithm by Gillam and Hohenwarter, which was default until version 0.98. */
  doAdvancedPlotOld?: Boolean
 /** Configure arrow head at the start position for curve. Recommended arrow head type is 7. */
  firstArrow?: Boolean | Object
 /** The data points of the curve are not connected with straight lines but with bezier curves. */
  handDrawing?: Boolean
 /** Attributes for curve label. */
  label?: LabelAttributes
 /** Configure arrow head at the end position for curve. Recommended arrow head type is 7. */
  lastArrow?: Boolean | Object
 /** number of points used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is false. */
  numberPointsHigh?: number
 /** number of points used for plotting triggered by move events (i.e. lower quality plotting but fast) in case Curve#doAdvancedPlot is false. */
  numberPointsLow?: number
 /** Select the version of the plot algorithm.Version 1 is very outdatedVersion 2 is the default version in JSXGraph v0.99.*, v1.0, and v1.1, v1.2.0Version 3 is an internal version that was never published ina stable version.Version 4 is available since JSXGraph v1.2.0Version 4 plots correctly logarithms if the function term is supplied as string (i.e. as JessieCode) */
  plotVersion?: number
 /** Apply Ramer-Douglas-Peuker smoothing. */
  RDPsmoothing?: Boolean
 /** Recursion depth used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is true. */
  recursionDepthHigh?: number
 /** number of points used for plotting triggered by move events in case (i.e. lower quality plotting but fast) Curve#doAdvancedPlot is true. */
  recursionDepthLow?: number
 }

 export interface Curve3DAttributes extends CurveAttributes {
 }

 export interface DumpAttributes  {
 }

 export interface ForeignObjectAttributes extends GeometryElementAttributes {
 /** List of attractor elements. If the distance of the ForeignObject is less than attractorDistance the ForeignObject is made to glider of this element. */
  attractors?: Element[]
 }

 export interface GroupAttributes extends CompositionAttributes {
 }

 export interface ImageAttributes extends GeometryElementAttributes {
 /** List of attractor elements. If the distance of the image is less than attractorDistance the image is made to glider of this element. */
  attractors?: Element[]
 /** Defines the CSS class used by the image. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. opacity. The default CSS class is defined in jsxgraph.css. */
  cssClass?: string
 /** Defines the CSS class used by the image when highlighted. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. highlightFillOpacity. The default CSS class is defined in jsxgraph.css. */
  highlightCssClass?: string
 /** Image rotation in degrees. */
  rotate?: number
 /** Defines together with Image#snapSizeY the grid the image snaps on to. The image will only snap on user coordinates which are integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the currentBoard. */
  snapSizeX?: number
 /** Defines together with Image#snapSizeX the grid the image snaps on to. The image will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the currentBoard. */
  snapSizeY?: number
 }

 export interface ImplicitcurveAttributes extends GeometryElementAttributes {
 /** Horizontal resolution: distance (in pixel) between vertical lines to search for components of the implicit curve. */
  resolution_outer?:number
 /** Vertical resolution (in pixel) to search for components of the implicit curve. */
  resolution_inner?:number
 /** Angle α0 between two successive tangents: determines the smoothness of the curve. */
  alpha_0?:number
 /** Initial step width (in user units). */
  h_initial?:number
 /** Maximum step width (in user units). */
  h_max?:number
 /** Half of the box size (in user units) to search for existing line segments in the quadtree. */
  qdt_box?:number
 }

 export interface IntersectionCircle3DAttributes extends GeometryElement3DAttributes {
 }

 export interface IntersectionLine3DAttributes extends GeometryElement3DAttributes {
 }

 export interface Line3DAttributes extends GeometryElement3DAttributes {
 /** Attributes of the defining point in case the line is defined by [point, vector, [range]] */
 point?:Point3DAttributes
 /** Attributes of the first point in case the line is defined by [point, point]. */
 point1?:Point3DAttributes
 /** Attributes of the second point in case the line is defined by [point, point]. */
 point2?:Point3DAttributes
 /** If the 3D line is defined by two points and if this attribute is true, the 3D line stretches infinitely in direction of its first point. */
 straightFirst?:Boolean
 /** If the 3D line is defined by two points and if this attribute is true, the 3D line stretches infinitely in direction of its second point. */
 straightLast?:Boolean
 }

 export interface Plane3DAttributes extends GeometryElement3DAttributes {
 /** Optional 3D mesh of a finite plane.  Mesh:{visible:true} */
 mesh3d?:MeshAttributes
 /** Attributes of the defining point in case the plane is defined by [point, vector, vector]. */
 point?:Point3DAttributes
 /** Attributes of the first point in case the plane is defined by [point, point, point]. */
 point1?:Point3DAttributes
 /** Attributes of the second point in case the plane is defined by [point, point, point]. */
 point2?:Point3DAttributes
 /** Attributes of the third point in case the plane is defined by [point, point, point]. */
 point3?:Point3DAttributes
 /** If the second parameter and the third parameter are given as arrays or functions and threePoints:true then the second and third parameter are interpreted as point coordinates and not as directions, i.e. */
 threePoints?:Boolean
 }

 export interface Point3DAttributes extends GeometryElement3DAttributes {
 /** Size in pixels */
 size?: number|Function
 /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
 fixed?: Boolean
 }

 export interface PolygonAttributes extends GeometryElementAttributes {
 /** Attributes for the polygon border lines. */
  borders?: LineAttributes
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** By default, the strokewidths of the borders of a polygon are not changed during highlighting (only strokeColor and strokeOpacity are changed to highlightStrokeColor, and highlightStrokeOpacity). However, strokewidth is changed to highlightStrokewidth if an individual border gets the focus.With this attribute set to true, also the borders change strokeWidth if the polygon itself gets the focus. */
  highlightByStrokeWidth?: Boolean
 /** Attributes for the polygon label. */
  label?: LabelAttributes
 /** Attributes for the polygon vertices.  eg: {vertices: { opacity: 0 }} */
  vertices?: GeometryElementAttributes
 /** Is the polygon bordered by lines? */
  withLines?: Boolean
 }

 export interface Polygon3DAttributes extends GeometryElement3DAttributes {
 }

 export interface TextAttributes extends GeometryElementAttributes {
 /** Anchor element Point, Text or Image of the text. */
  anchor?: Object
 /** The horizontal alignment of the text. */
  anchorX?: string
 /** The vertical alignment of the text. */
  anchorY?: string
 /** List of attractor elements. */
  attractors?: Element[]
 /** CSS class of the text in non-highlighted view. */
  cssClass?: string
 /** Default CSS properties of the HTML text element. */
  cssDefaultStyle?: string
 /** CSS properties of the HTML text element. */
  cssStyle?: string
 /** Used to round texts given by a number. */
  digits?: number
 /** Determines the rendering method of the text. */
  display?: "html"|"internal"
 /** Sensitive area for dragging the text. */
  dragArea?: string
 /** The font size in pixels. */
  fontSize?: number
 /** CSS unit for the font size of a text element. */
  fontUnit?: string
 /** CSS class of the text in highlighted view. */
  highlightCssClass?: string
 /** Default CSS properties of the HTML text element in case of highlighting. */
  highlightCssDefaultStyle?: string
 /** CSS properties of the HTML text element in case of highlighting. */
  highlightCssStyle?: string
 /** Internationalization support for texts consisting of a number only. */
  intl?: object
 /** If enabled, the text will be handled as label. */
  isLabel?: Boolean
 /** Object or function returning an object that contains macros for KaTeX */
  katexMacros?: Object
 /** If set to true, the text is parsed and evaluated. */
  parse?: Boolean
 /** Text rotation in degrees. */
  rotate?: number
 /** Defines together with Text#snapSizeY the grid the text snaps on to. */
  snapSizeX?: number
 /** Defines together with Text#snapSizeX the grid the text snaps on to. */
  snapSizeY?: number
 /** If true, the input will be given to ASCIIMathML before rendering. */
  useASCIIMathML?: Boolean
 /** If set to true and caja's sanitizeHTML function can be found it will be used to sanitize text output. */
  useCaja?: Boolean
 /** If true, KaTeX will be used to render the input string. */
  useKatex?: Boolean
 /** If true, MathJax will be used to render the input string. */
  useMathJax?: Boolean
 /** Control the attribute ”checked” of the HTML checkbox. */
  checked?: Boolean
 }

 export interface Text3DAttributes extends TextAttributes {
 }

 export interface TicksAttributes extends GeometryElementAttributes {
 /** Determine the position of the tick with value 0. 'left' means point1 of the line, 'right' means point2, and 'middle' is equivalent to the midpoint of the defining points. This attribute is ignored if the parent line is of type axis. */
  anchor?: String
 /** Format tick labels that were going to have scientific notation like 5.00e+6 to look like 5•10⁶. */
  beautifulScientificTickLabels?: Boolean
 /** If a label exceeds Ticks#maxLabelLength this determines the number of digits used to shorten the tick label. */
  digits?: number
 /** Draw labels yes/no */
  drawLabels?: Boolean
 /** Draw the zero tick, that lies at line.point1? */
  drawZero?: Boolean
 /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). The third parameter is a null, number or a string. In the latter two cases, this value is taken. Returns a string. */
  generateLabelText?: Function
 /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). */
  generateLabelValue?: Function
 /** If true, ignore the tick endings attribute for infinite (full height) ticks. This affects major and minor ticks. */
  ignoreInfiniteTickEndings?: Boolean
 /** Whether line boundaries should be included or not in the lower and upper bounds when creating ticks. In mathematical terms: if a segment considered as interval is open (includeBoundaries:false) or closed (includeBoundaries:true). In case of open interval, the interval is shortened by a small ε. */
  includeBoundaries?: Boolean
 /** Let JSXGraph determine the distance between ticks automatically. If true, the attribute ticksDistance is ignored. The distance between ticks is affected by the size of the currentBoard and the attribute minTicksDistance (in pixel). */
  insertTicks?: Boolean
 /** Internationalization support for ticks labels. */
  intl?: Object
 /** Attributes for the ticks labels */
  label?: LabelAttributes
 /** User defined labels for special ticks. Instead of the i-th tick's position, the i-th string stored in this array is shown. If the number of strings in this array is less than the number of special ticks, the tick's position is shown as a fallback. */
  labels?: String[]
 /** Total height of a major tick. If negative the full height of the currentBoard is taken. */
  majorHeight?: number
 /** Decides in which direction major ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
  majorTickEndings?: [number,number]
 /** The maximum number of characters a tick label can use. */
  maxLabelLength?: number
 /** Total height of a minor tick. If negative the full height of the currentBoard is taken. */
  minorHeight?: number
 /** The number of minor ticks between two major ticks. */
  minorTicks?: number
 /** Minimum distance in pixel of equidistant ticks in case insertTicks==true. */
  minTicksDistance?: number
 /** Scale the ticks but not the tick labels. */
  scale?: number
 /** A string that is appended to every tick, used to represent the scale factor given in Ticks#scale. */
  scaleSymbol?: String
 /** Decides in which direction minor ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
  tickEndings?: [number,number]
 /** The default distance (in user coordinates, notpixels) between two ticks. Please be aware that this value does not have to be used if Ticks#insertTicks is set to true. */
  ticksDistance?: number
 /** By default, i.e. if ticksPerLabel==false, labels are generated for major ticks, only. If ticksPerLabel is set to a(n integer) number, this denotes the number of minor ticks between two labels. */
  ticksPerLabel?: string
 /** Set the ticks type. Possible values are 'linear' or 'polar'. */
  type?: String
 /** Use the unicode character 0x2212, i.e. the HTML entity &minus; as minus sign. That is −1 instead of -1. */
  useUnicodeMinus?: Boolean
 }

 export interface TurtleAttributes extends GeometryElementAttributes {
 /** Attributes for the turtle arrow. */
  arrow?: Curve
 }

 export interface SectorAttributes extends CurveAttributes {
 /** Attributes for helper point anglepoint in case it is provided by coordinates. */
  anglePoint?: PointAttributes
 /** Attributes for sub-element arc. It is only available, if the sector is defined by three points. */
  arc?: Arc
 /** Attributes for helper point center in case it is provided by coordinates. */
  center?: PointAttributes
 /** Attributes for the sector label. */
  label?: LabelAttributes
 /** Attributes for helper point radiuspoint in case it is provided by coordinates. */
  radiusPoint?: PointAttributes
 /** Type of sector. Possible values are 'minor', 'major', and 'auto'. */
  selection?: String
 }

 export interface VectorfieldAttributes extends CurveAttributes {
 /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
  arrowhead?: Object
 /** Scaling factor of the vectors. This in contrast to slope fields, where this attribute sets the vector to the given length. */
  scale?: Object
 }

 export interface AngleAttributes extends SectorAttributes {
 /** Attributes for sub-element arc. In general, the arc will run through the first point and thus will not have the same radius as the angle sector. */
  arc?: Arc
 /** Attributes of the dot point marking right angles. */
  dot?: Object
 /** Sensitivity (in degrees) to declare an angle as right angle. If the angle measure is inside this distance from a rigth angle, the orthoType of the angle is used for display. */
  orthoSensitivity?: number
 /** Display type of the angle field in case of a right angle. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
  orthoType?: String
 /**  */
  pointsquare?: Object
 /** Radius of the sector, displaying the angle. The radius can be given as number (in user coordinates) or as string 'auto'. In the latter case, the angle is set to an value between 20 and 50 px. */
  radius?: number
 /**  */
  radiuspoint?: Object
 /** Display type of the angle field. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
  type?: String
 /** Attributes for the label object of this element */
  label?: LabelAttributes
 }

 export interface ArcAttributes extends CurveAttributes {
 /** Attributes for angle point. */
  anglePoint?: Point
 /** Attributes for center point. */
  center?: Point
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** Attributes for radius point. */
  radiusPoint?: Point
 /** Type of arc. Possible values are 'minor', 'major', and 'auto'. */
  selection?: String
 /** Attributes for the label object of this element */
  label?: LabelAttributes
 }

 export interface ArrowAttributes extends LineAttributes {
 }

 export interface ParallelAttributes extends LineAttributes {
 /** Attributes of helper point of normal. */
  point?: Point
 }

 export interface ArrowparallelAttributes extends ParallelAttributes {
 }

 export interface AxisAttributes extends LineAttributes {
 /** Attributes for the axis label. */
  label?: LabelAttributes
 /** Attributes for first point the axis. */
  point1?: PointAttributes
 /** Attributes for second point the axis. */
  point2?: PointAttributes
 }

 export interface BezierCurveAttributes extends CurveAttributes {
 }

 export interface BisectorAttributes extends LineAttributes {
 /** Attributes for the helper point of the bisector. */
  point?: Point
 }

 export interface BisectorlinesAttributes extends CompositionAttributes {
 /** Attributes for first line. */
  line1?: Line
 /** Attributes for second line. */
  line2?: Line
 }

 export interface ButtonAttributes extends TextAttributes {
 /** Control the attribute ”disabled” of the HTML button. */
  disabled?: Boolean|Function
 }

 export interface CardinalsplineAttributes extends CurveAttributes {
 /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
  createPoints?: Boolean
 /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
  isArrayOfCoordinates?: Boolean
 /** Attributes for the points generated by Cardinalspline in cases createPoints is set to true */
  points?: Object
 }

 export interface CheckboxAttributes extends TextAttributes {
 /** Control the attribute ”checked” of the HTML checkbox. */
  checked?: Boolean
 /** Control the attribute ”disabled” of the HTML checkbox. */
  disabled?: Boolean
 }

 export interface CircumcenterAttributes extends PointAttributes {
 }

 export interface CircumcircleAttributes extends CircleAttributes {
 /** Attributes for center point. */
  center?:  GeometryElementAttributes
 }

 export interface CircumcircleArcAttributes extends ArcAttributes {
 /** Attributes for center point. */
  center?: Point
 }

 export interface CircumcircleSectorAttributes extends SectorAttributes {
 }

 export interface CombAttributes extends CurveAttributes {
 /** Angle - given in radians - under which comb elements are positioned. */
  angle?: number
 /** Frequency of comb elements. */
  frequency?: number
 /** Attributes for first defining point of the comb. */
  point1?: LineAttributes
 /** Attributes for second defining point of the comb. */
  point2?: LineAttributes
 /** Should the comb go right to left instead of left to right. */
  reverse?: Boolean
 /** Width of the comb. */
  width?: number
 }

 export interface ConicAttributes extends CurveAttributes {
 /** Attributes for center point. */
  center?: PointAttributes
 /** Attributes for foci points. */
  foci?: PointAttributes
 /** Attributes for parabola line in case the line is given by two points or coordinate pairs. */
  line?: LineAttributes
 /** Attributes for five points defining the conic, if some of them are given as coordinates. */
  point?: PointAttributes
 }

 export interface CurveDifferenceAttributes extends CurveAttributes {
 }

 export interface CurveIntersectionAttributes extends CurveAttributes {
 }

 export interface CurveUnionAttributes extends CurveAttributes {
 }

 export interface DerivativeAttributes extends CurveAttributes {
 }

 export interface EllipseAttributes extends ConicAttributes {
 }

 export interface ParametricSurface3DAttributes extends Curve3DAttributes {
 /** number of intervals the mesh is divided into in direction of parameter u. */
  stepsU?: number
 /** number of intervals the mesh is divided into in direction of parameter v. */
  stepsV?: number
 }

 export interface Face3DAttributes extends CurveAttributes {
 }

 export interface FunctiongraphAttributes extends CurveAttributes {
 }

 export interface Functiongraph3DAttributes extends ParametricSurface3DAttributes {
 }

 export interface GliderAttributes extends PointAttributes {
 }

 export interface Glider3DAttributes extends Point3DAttributes {
 }

 export interface GridAttributes extends CurveAttributes {
 /** 
                    Distance of major grid elements. There are three possibilities:
- 'auto' the major grid matches majorTicks of the corresponding axis.
- Numbers are interpreted as distance in usrCoords.
- Strings with the unit 'px' are interpreted as distance in screen pixels.
- Strings with the unit '%' or 'fr' are interpreted as a ratio to the width/height of the board. (e.g. 50% = 0.5fr)
Instead of one value you can provide two values as an array [x, y] here. These are used as distance in x- and y-direction. */
 majorStep?: number|string|number[]|string[]
 /** Include the the zero line in the grid */
 drawZero?: Boolean
 /** Include the the boundary lines in the grid */
 includeBoundaries?: Boolean
 /** Attributes for Major Grid Elements */
 major?: GeometryElementAttributes
 /** Attributes for Minor Grid Elements */
 minor?: GeometryElementAttributes
 /** number of elements in minor grid between elements of the major grid. */
 minorElements?: number|'auto'
 /**  */
  snapSizeX?: Boolean
 /**  */
  snapSizeY?: Boolean
 /**  */
  snapToGrid?: Boolean
 }

 export interface HatchAttributes extends TicksAttributes {
 }

 export interface HyperbolaAttributes extends ConicAttributes {
 }

 export interface IncenterAttributes extends PointAttributes {
 }

 export interface IncircleAttributes extends CircleAttributes {
 /** Attributes of circle center. */
  center?:  GeometryElementAttributes
 }

 export interface InequalityAttributes extends CurveAttributes {
 /** By default an inequality is less (or equal) than. Set inverse to true will consider the inequality greater (or equal) than. */
  inverse?: Boolean
 }

 export interface InputAttributes extends TextAttributes {
 /** Control the attribute ”disabled” of the HTML input field. */
  disabled?: Boolean
 /** Control the attribute ”maxlength” of the HTML input field. */
  maxlength?: number
 }

 export interface IntegralAttributes extends CurveAttributes {
 /** Attributes of the (left) base point of the integral. */
  baseLeft?: Point
 /** Attributes of the (right) base point of the integral. */
  baseRight?: Point
 /** Attributes of the (left) starting point of the integral. */
  curveLeft?: Point
 /** Attributes of the (right) end point of the integral. */
  curveRight?: Point
 /** Attributes for integral label. */
  label?: LabelAttributes
 }

 export interface IntersectionAttributes extends PointAttributes {
 /**  */
  alwaysIntersect?: Boolean
 }

 export interface LabelAttributes extends TextAttributes {
 /** Automatic position of label text. When called first, the positioning algorithm starts at the position defined by offset. The algorithm tries to find a position with the least number of overlappings with other elements, while retaining the distance to the anchor element. */
  autoPosition?: Boolean
 /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. For this, the algorithm tests 12 positions around the anchor element up to a distance from the anchor defined here (in pixel). */
  autoPositionMaxDistance?: number
 /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. For this, the algorithm tests 12 positions around the anchor element starting at a distance from the anchor defined here (in pixel). */
  autoPositionMinDistance?: number
 /** Distance of the label from a path element, like line, circle, curve. */
  distance?: number
 /** Label offset from label anchor.The label anchor is determined by Label#position */
  offset?: [number,number]
 /** Possible string values for the position of a label for label anchor points are:'first' (lines only)'last' (lines only)'lft''rt''top''bot''ulft''urt''llft''lrt'This is relevant for non-points: line, circle, curve.The names have been borrowed from MetaPost. */
  position?: 'first'|'last'|'lft'|'rt'|'top'|'bot'|'ulft'|'urt'|'llft'|'lrt'
 /**  Display number as integer + nominator / denominator. Works together with MathJax, KaTex or as plain text. */
  toFraction?: Boolean
 }

 export interface LegendAttributes extends GeometryElementAttributes {
 /** Array of legend values */
 labels?:string[]
 /** Array of legend colors */
 colors?:string[]
 }

 export interface LocusAttributes extends CurveAttributes {
 }

 export interface MajorArcAttributes extends CurveAttributes {
 }

 export interface MajorSectorAttributes extends CurveAttributes {
 }

 export interface MeasurementAttributes extends TextAttributes {
 /** This specifies the unit of measurement in dimension 1  */
 baseUnit?:string
 /** Dimension of the measured data. */
 dim?:string|number
 /** Function to format coordinates. */
 formatCoords?:string
 /** Function to format direction vector. */
 formatDirection?:string
 /** String that is displayed before the measurement and its unit. */
 prefix?:string
 /** Determines whether a prefix is displayed before the measurement value and unit. */
 showPrefix?:string
 /** Determines whether a suffix is displayed after the measurement value and unit. */
 showSuffix?:string
 /** String that is displayed after the measurement and its unit. */
 suffix?:string
 /** This attribute expects an object that has the dimension numbers as keys (as integer or in the form of 'dimxx') and assigns a string to each dimension. */
 units?:string
 }

 export interface Mesh3DAttributes extends CurveAttributes {
 }

 export interface MidpointAttributes extends PointAttributes {
 }

 export interface MinorArcAttributes extends CurveAttributes {
 }

 export interface MinorSectorAttributes extends CurveAttributes {
 }

 export interface MirrorelementAttributes extends GeometryElementAttributes {
 }

 export interface MirrorpointAttributes extends PointAttributes {
 }

 export interface NonReflexAngleAttributes extends AngleAttributes {
 }

 export interface NormalAttributes extends LineAttributes {
 /** Attributes of helper point of normal. */
  point?: Point
 }

 export interface OrthogonalprojectionAttributes extends PointAttributes {
 }

 export interface OtherIntersectionAttributes extends PointAttributes {
 }

 export interface ParabolaAttributes extends ConicAttributes {
 }

 export interface ParallelpointAttributes extends PointAttributes {
 }

 export interface SegmentAttributes extends LineAttributes {
 }

 export interface ParallelogramAttributes extends PolygonAttributes {
 /** Attributes of helper point of normal. */
  parallelpoint?: DisplayPoint
 }

 export interface PerpendicularAttributes extends SegmentAttributes {
 }

 export interface PerpendicularPointAttributes extends PointAttributes {
 }

 export interface PerpendicularSegmentAttributes extends SegmentAttributes {
 }

 export interface PolarLineAttributes extends LineAttributes {
 }

 export interface PolePointAttributes extends PointAttributes {
 }

 export interface PolygonalChainAttributes extends PolygonAttributes {
 }

 export interface Polyhedron3DAttributes extends GeometryElement3DAttributes {
 /** Default attributes for the face shader. */
  shader?: ShaderInterface
 /** Array of face colors. */
  fillColorArray?: string[]
 }

 export interface RadicalAxisAttributes extends LineAttributes {
 }

 export interface ReflectionAttributes extends GeometryElementAttributes {
 /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the reflected element of a circle is again a circle, otherwise it is a conic section. */
  type?: String
 }

 export interface ReflexAngleAttributes extends AngleAttributes {
 }

 export interface RegularPolygonAttributes extends PolygonAttributes {
 /** Attributes for the polygon border lines. */
  borders?: LineAttributes
 /** If true, moving the mouse over inner points triggers hasPoint. */
  hasInnerPoints?: Boolean
 /** Attributes for the polygon vertices.   eg: {vertices: { opacity: 0 }}, */
  vertices?: GeometryElementAttributes
 /** Is the polygon bordered by lines? */
  withLines?: Boolean
 }

 export interface RiemannsumAttributes extends CurveAttributes {
 }

 export interface SemicircleAttributes extends ArcAttributes {
 /** Attributes for center point of the semicircle. */
  center?: Point
 }

 export interface SliderAttributes extends GliderAttributes {
 /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
 stepWidth?: number
 /** Attributes for the base line of the slider. */
  baseline?: GeometryElementAttributes
 /** Attributes for the highlighting line of the slider. */
  highline?: GeometryElementAttributes
 /** The number of digits of the slider value displayed in the optional text. */
  digits?: number
 /** Internationalization support for slider labels. */
  intl?: object
 /** Attributes for the slider label. */
  label?: LabelAttributes
 /** If true, 'up' events on the baseline will trigger slider moves. */
  moveOnUp?: Boolean
 /** Attributes for first (left) helper point defining the slider position. */
  point1?: LineAttributes
 /** Attributes for second (right) helper point defining the slider position. */
  point2?: LineAttributes
 /** If not null, this is appended to the value and to unitLabel in the slider label. Possible types: string, number or function. */
  postLabel?: String
 /** The precision of the slider value displayed in the optional text. Replaced by the attribute ”digits”. */
  precision?: number
 /** Size of slider point. */
  size?: number
 /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
  snapValueDistance?: number
 /** List of values to snap to. If the glider is within snapValueDistance (in user coordinate units) of one of these points, then the glider snaps to that point. */
  snapValues?: [number,number]
 /** The slider only returns integer multiples of this value, e.g. for discrete values set this property to 1. For continuous results set this to -1. */
  snapWidth?: number
 /** If not null, this replaces the part ”name = ” in the slider label. Possible types: string, number or function. */
  suffixLabel?: String
 /** Attributes for the ticks of the base line of the slider. */
  ticks?: TicksAttributes
 /** If not null, this is appended to the value in the slider label. Possible types: string, number or function. */
  unitLabel?: String
 /** Show slider label. */
  withLabel?: Boolean
 /** Show slider ticks. */
  withTicks?: Boolean
 }

 export interface SlopefieldAttributes extends VectorfieldAttributes {
 /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
  arrowhead?: Object
 /** Set length of the vectors in user coordinates. This in contrast to vector fields, where this attribute just scales the vector. */
  scale?: Object
 }

 export interface SlopetriangleAttributes extends LineAttributes {
 /** Attributes for the base line. */
  baseline?: Line
 /** Attributes for the base point. */
  basepoint?: Point
 /** Attributes for the gliding helper point. */
  glider?: Point
 /** Attributes for the slope triangle label. */
  label?: LabelAttributes
 /** Attributes for the tangent. The tangent is constructed by slop triangle if the construction is based on a glider, solely. */
  tangent?: Line
 /** Attributes for the top point. */
  toppoint?: Point
 }

 export interface SmartlabelAttributes extends TextAttributes {
 /** CSS classes for the smart label. Available classes are:'smart-label-solid''smart-label-outline''smart-label-pure'By default, an additional class is given specific for the element type. Available classes are 'smart-label-angle', 'smart-label-circle', 'smart-label-line', 'smart-label-point', 'smart-label-polygon'. */
  cssClass?: string
 /** Display of point coordinates either as row vector or column vector. Available values are 'row' or 'column'. */
  dir?: string
 /** CSS classes for the smart label when highlighted. */
  highlightCssClass?:string
 /** Type of measurement. Available values are: 'deg', 'rad' for angles'area', 'perimeter', 'radius' for circles'length', 'slope' for lines'area', 'perimeter' for polygonsDependent on this value, i.e. the type of measurement, the label is positioned differently on the object. */
  measure?: string
 /** Prefix text for the smartlabel. Comes before the measurement value. */
  prefix?: string
 /** Suffix text for the smartlabel. Comes after unit. */
  suffix?: string
 /** Measurement unit appended to the output text. For areas, the unit is squared automatically. Comes directly after the measurement value. */
  unit?: string
 }

 export interface Sphere3DAttributes extends GeometryElement3DAttributes {
 }

 export interface SplineAttributes extends CurveAttributes {
 }

 export interface StepfunctionAttributes extends CurveAttributes {
 }

 export interface TangentAttributes extends LineAttributes {
 }

 export interface TangentToAttributes extends LineAttributes {
 /** Attributes for the intersection point of the conic/circle with the polar line of the tangentTo construction. */
  point?: PointAttributes
 /** Attributes for the polar line of the tangentTo construction. */
  polar?: PolarLineAttributes
 }

 export interface TapemeasureAttributes extends SegmentAttributes {
 /** The precision of the tape measure value displayed in the optional text. */
  digits?: number
 /** Attributes for the tape measure label. */
  label?: LabelAttributes
 /** Attributes for first helper point defining the tape measure position. */
  point1?: LineAttributes
 /** Attributes for second helper point defining the tape measure position. */
  point2?: LineAttributes
 /** The precision of the tape measure value displayed in the optional text. Replaced by the attribute digits */
  precision?: number
 /** Text rotation in degrees. */
  rotate?: number
 /** Attributes for the ticks of the tape measure. */
  ticks?: TicksAttributes
 /** Show tape measure label. */
  withLabel?: Boolean
 /** Show tape measure ticks. */
  withTicks?: Boolean
 }

 export interface TracecurveAttributes extends CurveAttributes {
 /** The number of evaluated data points. */
  numberPoints?: number
 }

 export interface TransformAttributes extends GeometryElementAttributes {
 }

 export interface Transform3DAttributes extends GeometryElement3DAttributes {
 }

 export interface TransformPointAttributes extends PointAttributes {
 }

 export interface TransformPoint3DAttributes extends Point3DAttributes {
 }

 export interface Segment3DAttributes extends Line3DAttributes {
 }

 export interface TranslateAttributes extends TransformAttributes {
 }

 export interface RotateAttributes extends TransformAttributes {
 }

 export interface ScaleAttributes extends TransformAttributes {
 }

 export interface Translate3DAttributes extends Transform3DAttributes {
 }

 export interface Rotate3DAttributes extends Transform3DAttributes {
 }

 export interface RotateX3DAttributes extends Transform3DAttributes {
 }

 export interface RotateY3DAttributes extends Transform3DAttributes {
 }

 export interface RotateZ3DAttributes extends Transform3DAttributes {
 }

 export interface Scale3DAttributes extends Transform3DAttributes {
 }

/** A wrapper for the various math routines provided by JSXGraph.  For example:
            ```js
            TSX.JsxMath.Matrix.crossProduct(a,b)
            ```
        */
        export interface MathIface {
 Matrix: MatrixMathIface
 Geometry: GeometryMathIface
 Numerics: NumericsMathIface
 Statistics: StatisticsMathIface
}

 export interface MatrixMathIface {    // math functions
 /** Calculates the cross product of two vectors both of length three. */
 crossProduct(v1:number[],v2:number[]):number[],
 /** Generates a 4x4 matrix for 3D to 2D projections. */
 frustum(left:number,right:number,top:number,bottom:number,near:number,far:number):matAny,
 /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
 identity(m:number,n:number):matAny,
 /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
 innerProduct(v1:number[],v2:number[]):number,
 /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
 inverse(mat:matAny):matAny,
 /** Computes the product of the two matrices mat1*mat2. */
 matMatMult(mat1:matAny,mat2:matAny):matAny,
 /** Initializes a matrix as an array of rows with the given value. */
 matrix(nRows:number,mCols:number,init:number):matAny,
 /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
 matVecMult(mat:matAny,vec:number[]):number[],
 /** Generates a 4x4 matrix for 3D to 2D projections. */
 projection(fov:number,ratio:number,near:number,far:number):matAny,
 /** Transposes a matrix given as a two dimensional array. */
 transpose(mat:matAny):matAny,
 /** Initializes a vector of size n wih coefficients set to the given value. */
 vector(n:number,init:number):number[],
 } 

 export interface GeometryMathIface {    // math functions
 affineDistance():number[],
 affineRatio():number[],
 angle():number[],
 angleBisector():number[],
 bezierArc():number[],
 calcLabelQuadrant():number[],
 calcLineDelimitingPoints():number[],
 calcStraight():number[],
 circumcenter():number[],
 circumcenterMidpoint():number[],
 det3p():number[],
 distance():number[],
 distPointLine():number[],
 GrahamScan():number[],
 intersectionFunction():number[],
 isSameDir():number[],
 isSameDirection():number[],
 meet():number[],
 meetBezierCurveRedBlueSegments():number[],
 meetBeziersegmentBeziersegment():number[],
 meetCircleCircle():number[],
 meetCurveCurve():number[],
 meetCurveLine():number[],
 meetCurveLineContinuous():number[],
 meetCurveLineDiscrete():number[],
 meetCurveRedBlueSegments():number[],
 meetLineBoard():number[],
 meetLineCircle():number[],
 meetLineLine():number[],
 meetPathPath():number[],
 meetPolygonLine():number[],
 meetSegmentSegment():number[],
 perpendicular():number[],
 pnpoly():number[],
 projectCoordsToBeziersegment():number[],
 projectCoordsToCurve():number[],
 projectCoordsToPolygon():number[],
 projectCoordsToSegment():number[],
 projectPointToBoard():number[],
 projectPointToCircle():number[],
 projectPointToCurve():number[],
 projectPointToLine():number[],
 projectPointToPoint():number[],
 projectPointToTurtle():number[],
 rad():number[],
 reflection():number[],
 reuleauxPolygon():number[],
 rotation():number[],
 signedPolygon():number[],
 signedTriangle():number[],
 sortVertices():number[],
 trueAngle():number[],
 windingNumber():number[],
 } 

 export interface NumericsMathIface {    // math functions
 bezier(points:Point[]):[Function,Function,number,Function],
 bspline(points:Point[],order:number):any[],
 CardinalSpline(points:Point[],tau:number|Function):Function[],
 } 

 export interface StatisticsMathIface {    // math functions
 /** Generate value of a standard normal random variable with given mean and standard deviation.
                                   See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
 randomNormal(mean:number,stdDev:number):number,
 /** Generate value of a uniform distributed random variable in the interval [a, b]. */
 randomUniform(a:number,b:number):number,
 /** Generate value of a random variable with exponential distribution.
                                    See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                    Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
 randomExponential(lambda:number):number,
 /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                        See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                        Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
 randomGamma(shape:number,scale?:number,threshold?:number):number,
 /** Generate value of a random variable with Pareto distribution with shape gamma and scale k.
                                   See {@link https://en.wikipedia.org/wiki/Pareto_distribution}. */
 randomPareto(shape:number,scale?:number,threshold?:number):number,
 /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                    See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
 randomBeta(alpha:number,beta:number):number,
 /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
 randomChisquare(k:number):number,
 /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/F-distribution}. */
 randomF(d1:number,d2:number):number,
 /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                    See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
 randomT(v:number):number,
 /** Generate values for a random variable in binomial distribution with parameters n and p
                                    See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
 randomBinomial(n:number,p:number):number,
 /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                    See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
 randomGeometric(p:number):number,
 /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                    See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
 randomPoisson(mu:number):number,
 /** Generate values for a random variable in hypergeometric distribution.
                                    See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                    Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                    <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
 randomHypergeometric(good:number,bad:number,samples:number):number,
 /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
 histogram(data:number[], bins?:number, range?:boolean|[number,number], density?:boolean, cumulative?:boolean):[number[],number[]],
 /** The P-th percentile ( 0 < P ≤ 100 ) of a list of N ordered values (sorted from least to greatest) is the smallest value in the list such that no more than P percent of the data is strictly less than the value and at least P percent of the data is less than or equal to that value. */
 percentile(data:number[],ranges:number[]):number[],
 } 

 export let JsxMath: MathIface = {Matrix :{
 // Matrix
 crossProduct(v1:number[],v2:number[])  { return (window as any).JXG.Math.crossProduct(v1,v2) }, 
 frustum(left:number,right:number,top:number,bottom:number,near:number,far:number)  { return (window as any).JXG.Math.frustum(left,right,top,bottom,near,far) }, 
 identity(m:number,n:number)  { return (window as any).JXG.Math.identity(m,n) }, 
 innerProduct(v1:number[],v2:number[])  { return (window as any).JXG.Math.innerProduct(v1,v2) }, 
 inverse(mat:matAny)  { return (window as any).JXG.Math.inverse(mat) }, 
 matMatMult(mat1:matAny,mat2:matAny)  { return (window as any).JXG.Math.matMatMult(mat1,mat2) }, 
 matrix(nRows:number,mCols:number,init:number)  { return (window as any).JXG.Math.matrix(nRows,mCols,init) }, 
 matVecMult(mat:matAny,vec:number[])  { return (window as any).JXG.Math.matVecMult(mat,vec) }, 
 projection(fov:number,ratio:number,near:number,far:number)  { return (window as any).JXG.Math.projection(fov,ratio,near,far) }, 
 transpose(mat:matAny)  { return (window as any).JXG.Math.transpose(mat) }, 
 vector(n:number,init:number)  { return (window as any).JXG.Math.vector(n,init) }, 
},
Geometry :{
 // Geometry
 affineDistance()  { return (window as any).JXG.Math.affineDistance() }, 
 affineRatio()  { return (window as any).JXG.Math.affineRatio() }, 
 angle()  { return (window as any).JXG.Math.angle() }, 
 angleBisector()  { return (window as any).JXG.Math.angleBisector() }, 
 bezierArc()  { return (window as any).JXG.Math.bezierArc() }, 
 calcLabelQuadrant()  { return (window as any).JXG.Math.calcLabelQuadrant() }, 
 calcLineDelimitingPoints()  { return (window as any).JXG.Math.calcLineDelimitingPoints() }, 
 calcStraight()  { return (window as any).JXG.Math.calcStraight() }, 
 circumcenter()  { return (window as any).JXG.Math.circumcenter() }, 
 circumcenterMidpoint()  { return (window as any).JXG.Math.circumcenterMidpoint() }, 
 det3p()  { return (window as any).JXG.Math.det3p() }, 
 distance()  { return (window as any).JXG.Math.distance() }, 
 distPointLine()  { return (window as any).JXG.Math.distPointLine() }, 
 GrahamScan()  { return (window as any).JXG.Math.GrahamScan() }, 
 intersectionFunction()  { return (window as any).JXG.Math.intersectionFunction() }, 
 isSameDir()  { return (window as any).JXG.Math.isSameDir() }, 
 isSameDirection()  { return (window as any).JXG.Math.isSameDirection() }, 
 meet()  { return (window as any).JXG.Math.meet() }, 
 meetBezierCurveRedBlueSegments()  { return (window as any).JXG.Math.meetBezierCurveRedBlueSegments() }, 
 meetBeziersegmentBeziersegment()  { return (window as any).JXG.Math.meetBeziersegmentBeziersegment() }, 
 meetCircleCircle()  { return (window as any).JXG.Math.meetCircleCircle() }, 
 meetCurveCurve()  { return (window as any).JXG.Math.meetCurveCurve() }, 
 meetCurveLine()  { return (window as any).JXG.Math.meetCurveLine() }, 
 meetCurveLineContinuous()  { return (window as any).JXG.Math.meetCurveLineContinuous() }, 
 meetCurveLineDiscrete()  { return (window as any).JXG.Math.meetCurveLineDiscrete() }, 
 meetCurveRedBlueSegments()  { return (window as any).JXG.Math.meetCurveRedBlueSegments() }, 
 meetLineBoard()  { return (window as any).JXG.Math.meetLineBoard() }, 
 meetLineCircle()  { return (window as any).JXG.Math.meetLineCircle() }, 
 meetLineLine()  { return (window as any).JXG.Math.meetLineLine() }, 
 meetPathPath()  { return (window as any).JXG.Math.meetPathPath() }, 
 meetPolygonLine()  { return (window as any).JXG.Math.meetPolygonLine() }, 
 meetSegmentSegment()  { return (window as any).JXG.Math.meetSegmentSegment() }, 
 perpendicular()  { return (window as any).JXG.Math.perpendicular() }, 
 pnpoly()  { return (window as any).JXG.Math.pnpoly() }, 
 projectCoordsToBeziersegment()  { return (window as any).JXG.Math.projectCoordsToBeziersegment() }, 
 projectCoordsToCurve()  { return (window as any).JXG.Math.projectCoordsToCurve() }, 
 projectCoordsToPolygon()  { return (window as any).JXG.Math.projectCoordsToPolygon() }, 
 projectCoordsToSegment()  { return (window as any).JXG.Math.projectCoordsToSegment() }, 
 projectPointToBoard()  { return (window as any).JXG.Math.projectPointToBoard() }, 
 projectPointToCircle()  { return (window as any).JXG.Math.projectPointToCircle() }, 
 projectPointToCurve()  { return (window as any).JXG.Math.projectPointToCurve() }, 
 projectPointToLine()  { return (window as any).JXG.Math.projectPointToLine() }, 
 projectPointToPoint()  { return (window as any).JXG.Math.projectPointToPoint() }, 
 projectPointToTurtle()  { return (window as any).JXG.Math.projectPointToTurtle() }, 
 rad()  { return (window as any).JXG.Math.rad() }, 
 reflection()  { return (window as any).JXG.Math.reflection() }, 
 reuleauxPolygon()  { return (window as any).JXG.Math.reuleauxPolygon() }, 
 rotation()  { return (window as any).JXG.Math.rotation() }, 
 signedPolygon()  { return (window as any).JXG.Math.signedPolygon() }, 
 signedTriangle()  { return (window as any).JXG.Math.signedTriangle() }, 
 sortVertices()  { return (window as any).JXG.Math.sortVertices() }, 
 trueAngle()  { return (window as any).JXG.Math.trueAngle() }, 
 windingNumber()  { return (window as any).JXG.Math.windingNumber() }, 
},
Numerics :{
 // Numerics
 bezier(points:Point[])  { return (window as any).JXG.Math.bezier(points) }, 
 bspline(points:Point[],order:number)  { return (window as any).JXG.Math.bspline(points,order) }, 
 CardinalSpline(points:Point[],tau:number|Function)  { return (window as any).JXG.Math.CardinalSpline(points,tau) }, 
},
Statistics :{
 // Statistics
 randomNormal(mean:number,stdDev:number)  { return (window as any).JXG.Math.Statistics.randomNormal(mean,stdDev) }, 
 randomUniform(a:number,b:number)  { return (window as any).JXG.Math.Statistics.randomUniform(a,b) }, 
 randomExponential(lambda:number)  { return (window as any).JXG.Math.Statistics.randomExponential(lambda) }, 
 randomGamma(shape:number,scale?:number,threshold?:number)  { return (window as any).JXG.Math.Statistics.randomGamma(shape,scale,threshold) }, 
 randomPareto(shape:number,scale?:number,threshold?:number)  { return (window as any).JXG.Math.Statistics.randomPareto(shape,scale,threshold) }, 
 randomBeta(alpha:number,beta:number)  { return (window as any).JXG.Math.Statistics.randomBeta(alpha,beta) }, 
 randomChisquare(k:number)  { return (window as any).JXG.Math.Statistics.randomChisquare(k) }, 
 randomF(d1:number,d2:number)  { return (window as any).JXG.Math.Statistics.randomF(d1,d2) }, 
 randomT(v:number)  { return (window as any).JXG.Math.Statistics.randomT(v) }, 
 randomBinomial(n:number,p:number)  { return (window as any).JXG.Math.Statistics.randomBinomial(n,p) }, 
 randomGeometric(p:number)  { return (window as any).JXG.Math.Statistics.randomGeometric(p) }, 
 randomPoisson(mu:number)  { return (window as any).JXG.Math.Statistics.randomPoisson(mu) }, 
 randomHypergeometric(good:number,bad:number,samples:number)  { return (window as any).JXG.Math.Statistics.randomHypergeometric(good,bad,samples) }, 
 histogram(data:number[], bins?:number, range?:boolean|[number,number], density?:boolean, cumulative?:boolean)  { return (window as any).JXG.Math.Statistics.histogram(data,{bins:bins??10, range:range??false, density:density??true, cumulative:cumulative??false}) }, 
 percentile(data:number[],ranges:number[])  { return (window as any).JXG.Math.Statistics.percentile(data,ranges) }, 
},

}


 /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
            
*```js
TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
TSX.point([3,3]),{fixed:true, showInfobox:true}
TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
TSX.point([1,2,2])  // three axis definition - [z,x,y]
            
*```
            
 also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, TransformPoint, and others. */
 export function point(position:pointAddr, attributes: PointAttributes ={} ):Point{
 return _jsxBoard().create('point', position, defaultAttributes(attributes))
}

 /** Line has two signatures. 
 *``` 
*``` 
 #1  Create a line defined by two points (or point addresses)

*```js
TSX.line([3,2],[3,3],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
let P1 = TSX.point([3,2])
TSX.line(p1,[3,3])

*```
 */
 export function line( p1:Point|pointAddr,p2:Point|pointAddr,attributes?:LineAttributes) : Line
 /** Line has two signatures. 
 *``` 
*``` 
 #2 Create a line for the equation a*x+b*y+c*z = 0',

*```js
TSX.line(2,3,1)   // create a line for the equation a*x+b*y+c*z = 0

*```
 */
 export function line( A:number|Function,B:number|Function,C:number|Function,attributes?:LineAttributes) : Line
// implementation of signature,  hidden from user
 export function line (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Line {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
 if(typeof a == 'number' || typeof a == 'function')
                             // reorder the a,b,c elements of the line
                             return _jsxBoard().create('line', [c,a,b], defaultAttributes(d)) // as Line
                          else  //  two points
                             return _jsxBoard().create('line', [a,b], defaultAttributes(c)) // as Line
             
 }

 /** create a chart */
 export function chart(f:number[], attributes: ChartAttributes ={} ):Chart{
   return TSX._jsxBoard().create('chart', [f,], defaultAttributes(attributes))  as Chart
}


 /** A circle can be constructed by providing a center and a point on the circle,
                         or a center and a radius (given as a number, function, line, or circle).
                         If the radius is a negative value, its absolute values is taken.
                
*```js
                TSX.circle(P1,1])
                TSX.circle([0,0],[1,0])
                
*```
                
Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle. */
 export function circle(centerPoint:Point|pointAddr|Function, remotePoint:Point|pointAddr|Line|[Point|pointAddr,Point|pointAddr]|number|Function|Circle, attributes: CircleAttributes ={} ):Circle{
  let newObject:any  // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
                            if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0] ) && Array.isArray(remotePoint[1] )) {
                                return _jsxBoard().create("circle", [centerPoint, remotePoint[0] ,remotePoint[1]], defaultAttributes(attributes))
                            } else {
                                return _jsxBoard().create("circle", [centerPoint, remotePoint], defaultAttributes(attributes))
                            }
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
 export function circle3d(center:TSX.Point3D, normal:number[]|Function, radius:number|Function, attributes: Circle3DAttributes ={} ):Circle3D{
 
                let tempNormal:number[] = (typeof normal === "function") ? normal() : normal;
                if(tempNormal.length ===3) tempNormal.unshift(0);   // convert [a,b,c] to [0,a,b,c]
                return _jsxView3d().create("circle3d",[center,normal,radius],attributes)
}

 export function curve( xArray:number[]|Function,yArray:number[]|Function,attributes?:CurveAttributes) : Curve
 export function curve( xArray:number[]|Function,yArray:number[]|Function,left:NumberFunction,right:NumberFunction,attributes?:CurveAttributes) : Curve
// implementation of signature,  hidden from user
 export function curve (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Curve {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('curve', params, defaultAttributes(attrs))  as Curve
 }
 /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points. 
 *``` 
*``` 
 FX(u), FY(u), FZ(u) are functions returning a number, range is the array containing lower and upper bound for the range of the parameter u. range may also be a function returning an array of length two. */
 export function curve3d( Fx:(x:number)=>number,Fy:(y:number)=>number,Fz:(z:number)=>number,range:pointAddr3D,attributes?:Curve3DAttributes) : Curve3D
 /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points. 
 *``` 
*``` 
 A function of one variable returns an array of [x,y,z] values. */
 export function curve3d( Fxyz:(x:number)=>[number,number,number]|number[],range:pointAddr3D,attributes?:Curve3DAttributes) : Curve3D
 /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points. 
 *``` 
*``` 
 A curve is drawn through the XYZ points described by three arrays. */
 export function curve3d( X:number[],Y:number[],Z:number[],attributes?:Curve3DAttributes) : Curve3D
// implementation of signature,  hidden from user
 export function curve3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Curve3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('curve3d', params, defaultAttributes(attrs))  as Curve3D
 }

 /** This element is used to provide a constructor for arbitrary content in an SVG foreignObject container.
```js
TSX.foreignObject(
    `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
    [0, -3], [9, 6],
    {layer: 8, fixed: true})
```
              */
 export function foreignObject(content:string, position:number[], size:number[]|null=null, attributes: ForeignObjectAttributes ={} ):ForeignObject{
   return TSX._jsxBoard().create('foreignObject', [content,position,size,], defaultAttributes(attributes))  as ForeignObject
}


 /** Array of Points */
 export function group(pointArray:Point[]|Polygon, attributes: GroupAttributes ={} ):Group{
   return TSX._jsxBoard().create('group', [pointArray,].flat(), defaultAttributes(attributes))  as Group
}


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
 export function image(url:String|spaceIcon, lowerLeft:pointAddr, widthHeight:[number,number]=[1,1], attributes: ImageAttributes ={} ):Image{
   return TSX._jsxBoard().create('image', [url,lowerLeft,widthHeight,], defaultAttributes(attributes))  as Image
}

 export function implicitcurve( f:Function|String,attributes?:ImplicitcurveAttributes) : Implicitcurve
 export function implicitcurve( f:Function|String,dfx:Function|String,dfy:Function|String,attributes?:ImplicitcurveAttributes) : Implicitcurve
// implementation of signature,  hidden from user
 export function implicitcurve (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Implicitcurve {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('implicitcurve', params, defaultAttributes(attrs))  as Implicitcurve
 }

 /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
 export function intersectionCircle3d(sphere1:TSX.Sphere3D, sphere:TSX.Sphere3D|TSX.Plane3D, attributes: IntersectionCircle3DAttributes ={} ):IntersectionCircle3D{
   return TSX._jsxView3d().create('intersectioncircle3d', [sphere1,sphere,], defaultAttributes(attributes))  as IntersectionCircle3D
}


 /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
 export function intersectionLine3d(plane1:TSX.Sphere3D, plane2:TSX.Plane3D, attributes: IntersectionLine3DAttributes ={} ):IntersectionLine3D{
   return TSX._jsxView3d().create('intersectionline3d', [plane1,plane2,], defaultAttributes(attributes))  as IntersectionLine3D
}

 /** Two signatures: A line in 3D is given by two points, or one point and a direction vector. 
 *``` 
*``` 
 The 3D line is defined by two 3D points (Point3D): The points can be either existing points or coordinate arrays of the form [x, y, z]. */
 export function line3d( point1:Point3D|pointAddr3D,point2:Point3D|pointAddr3D,attributes?:Line3DAttributes) : Line3D
 /** Two signatures: A line in 3D is given by two points, or one point and a direction vector. 
 *``` 
*``` 
 The 3D line is defined by a point (or coordinate array [x, y, z]) a direction given as array [x, y, z] and an optional range given as array [s, e]. The default value for the range is [-Infinity, Infinity]. */
 export function line3d( point:Point3D|pointAddr3D,direction:Line3D|pointAddr3D,range:number[]|pointAddr,attributes?:Line3DAttributes) : Line3D
// implementation of signature,  hidden from user
 export function line3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Line3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('line3d', params, defaultAttributes(attrs))  as Line3D
 }
 export function plane3d( point:Point3D|number[]|Function,direction1:number[]|Function,direction2:number[]|Function,range1?:pointAddr,range2?:pointAddr,attributes?:Plane3DAttributes) : Plane3D
 export function plane3d( point:Point3D|number[]|Function,direction1:number[]|Function|Function[],direction2:number[]|Function|Function[],range1?:pointAddr,range2?:pointAddr,attributes?:Plane3DAttributes) : Plane3D
 export function plane3d( point1:Point3D,point2:Point3D,point3:Point3D,range1?:pointAddr,range2?:pointAddr,attributes?:Plane3DAttributes) : Plane3D
 export function plane3d( point1:Point3D,point2:Point3D,point3:Point3D,attributes?:Plane3DAttributes) : Plane3D
// implementation of signature,  hidden from user
 export function plane3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Plane3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('plane3d', params, defaultAttributes(attrs))  as Plane3D
 }
 export function point3d( xyz:NumberFunction[],attributes?:Point3DAttributes) : Point3D
 export function point3d( fn:()=> number[]|[number,number,number],attributes?:Point3DAttributes) : Point3D
// implementation of signature,  hidden from user
 export function point3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Point3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('point3d', params, defaultAttributes(attrs))  as Point3D
 }

 /** Array of Points */
 export function polygon(pointArray:Point[]|pointAddr[]|Function, attributes: PolygonAttributes ={} ):Polygon{
   return TSX._jsxBoard().create('polygon', [pointArray,].flat(), defaultAttributes(attributes))  as Polygon
}


 /** A polygon is a sequence of points connected by lines, with the last point connecting back to the first one. The points are given by a list of Point3D objects or a list of coordinate arrays. Each two consecutive points of the list define a line. */
 export function polygon3d(vertices:Point3D[]|pointAddr3D[]|Function, attributes: Polygon3DAttributes ={} ):Polygon3D{
   return TSX._jsxView3d().create('polygon3d', [vertices,], defaultAttributes(attributes))  as Polygon3D
}


 /** Display a message
                                
*```js
TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                
*``` */
 export function text(position:Point|pointAddr, label:String|Function, attributes: TextAttributes ={} ):Text{
 (position as any).push(label);
                        return _jsxBoard().create('text', position,defaultAttributes(attributes));
}

 export function text3d( position:Point3D|number[]|Function,text:string|Function,attributes?:Text3DAttributes) : Text3D
 export function text3d( position:Point3D|number[]|Function,text:string|Function,slide:GeometryElement3D,attributes?:Text3DAttributes) : Text3D
// implementation of signature,  hidden from user
 export function text3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Text3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
 return _jsxView3d().create('text3d',[params].flat(),defaultAttributes(attrs))
 }

 /** Ticks are used as distance markers on a line or curve. They are mainly used for axis elements and slider elements.  */
 export function ticks(line:Line, attributes: TicksAttributes ={} ):Ticks{
   return TSX._jsxBoard().create('ticks', [line,], defaultAttributes(attributes))  as Ticks
}


 /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. */
 export function sector(P1:Point|pointAddr, P2:Point|pointAddr, P3:Point|pointAddr, attributes: SectorAttributes ={} ):Sector{
   return TSX._jsxBoard().create('sector', [P1,P2,P3,], defaultAttributes(attributes))  as Sector
}


 /** Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
 export function vectorfield(fxfy:Function[], horizontalMesh:number[]=[-6,25,6], verticalMesh:number[]=[-6,25,6], attributes: VectorfieldAttributes ={} ):Vectorfield{
   return TSX._jsxBoard().create('vectorfield', [fxfy,horizontalMesh,verticalMesh,], defaultAttributes(attributes))  as Vectorfield
}

 export function angle( from:Point|pointAddr,around:Point|pointAddr,to:Point|pointAddr,attributes?:AngleAttributes) : Angle
 export function angle( line1:Line|[Point|pointAddr,Point|pointAddr],line2:Line|[Point|pointAddr,Point|pointAddr],direction1:[number,number],direction2:[number,number],attributes?:AngleAttributes) : Angle
 export function angle( line1:Line|[Point|pointAddr,Point|pointAddr],line2:Line|[Point|pointAddr,Point|pointAddr],dirPlusMinus1:number,dirPlusMinus2:number,attributes?:AngleAttributes) : Angle
// implementation of signature,  hidden from user
 export function angle (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Angle {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('angle', params, defaultAttributes(attrs))  as Angle
 }

 /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                            
*```js
                            let arc = TSX.arc([-8,5],[-4,5],[-9,9]])
                            
*```
                            
 To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
 export function arc(origin:Point|pointAddr, from:Point|pointAddr, to:Point|pointAddr, attributes: ArcAttributes ={} ):Arc{
   return TSX._jsxBoard().create('arc', [origin,from,to,], defaultAttributes(attributes))  as Arc
}


 /** Arrow defined by two points (like a Segment) with arrow at P2
                            
*```js
                            
 let arrow = TSX.arrow([-8,5],[-4,5])
                            
*```
                            
 */
 export function arrow(p1:Point|pointAddr, p2:Point|pointAddr, attributes: ArrowAttributes ={} ):Arrow{
   return TSX._jsxBoard().create('arrow', [p1,p2,], defaultAttributes(attributes))  as Arrow
}

 export function parallel( line:Line|[Point,Point],point:Point|pointAddr,attributes?:ParallelAttributes) : Parallel
 export function parallel( lineP1:Point|pointAddr,lineP2:Point|pointAddr,Point:Point|pointAddr,attributes?:ParallelAttributes) : Parallel
// implementation of signature,  hidden from user
 export function parallel (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Parallel {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('parallel', params, defaultAttributes(attrs))  as Parallel
 }

 /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
 export function arrowparallel(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: ArrowparallelAttributes ={} ):Arrowparallel{
   return TSX._jsxBoard().create('arrowparallel', [p1,p2,p3,], defaultAttributes(attributes))  as Arrowparallel
}


 /** Create an Axis with two points (like a Line) */
 export function axis(p1:Point|pointAddr, p2:Point|pointAddr, attributes: AxisAttributes ={} ):Axis{
   return TSX._jsxBoard().create('axis', [p1,p2,], defaultAttributes(attributes))  as Axis
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
 export function bezierCurve(points:Point[], attributes: BezierCurveAttributes ={} ):Curve{
  return _jsxBoard().create('curve', (window as any).JXG.Math.Numerics.bezier(points), defaultAttributes(attributes));
}


 /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
 export function bisector(A:Point|pointAddr, B:Point|pointAddr, C:Point|pointAddr, attributes: BisectorAttributes ={} ):Bisector{
   return TSX._jsxBoard().create('bisector', [A,B,C,], defaultAttributes(attributes))  as Bisector
}


 /** Bisect a Line defined with two points */
 export function bisectorlines(l1:Line, l2:Line, attributes: BisectorlinesAttributes ={} ):Bisectorlines{
   return TSX._jsxBoard().create('bisectorlines', [l1,l2,], defaultAttributes(attributes))  as Bisectorlines
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
 export function button(position:pointAddr, label:String|Function, handler:Function, attributes: ButtonAttributes ={} ):Button{
 (position as any).push(label,handler);  // position is already array, eg: [1,2], just use it as params
                        return _jsxBoard().create('button', position, defaultAttributes(attributes)) as Button;
}


 /** This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
 export function cardinalspline(data:Point[]|number[][], funct:Function, splineType:`uniform`|`centripetal`, attributes: CardinalsplineAttributes ={} ):Curve{
   return TSX._jsxBoard().create('cardinalspline', [data,funct,splineType,], defaultAttributes(attributes))  as Cardinalspline
}


 /** This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners. */
 export function checkbox(position:pointAddr, label:String|Function, attributes: CheckboxAttributes ={} ):Checkbox{
 (position as any).push(label);
                        return _jsxBoard().create('checkbox', position,defaultAttributes(attributes));
}


 /** Creates a Point at the center of a circle defined by 3 points */
 export function circumcenter(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcenterAttributes ={} ):Circumcenter{
   return TSX._jsxBoard().create('circumcenter', [p1,p2,p3,], defaultAttributes(attributes))  as Circumcenter
}


 /** Draw a circle defined by 3 points */
 export function circumcircle(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleAttributes ={} ):Circumcircle{
   return TSX._jsxBoard().create('circumcircle', [p1,p2,p3,], defaultAttributes(attributes))  as Circumcircle
}


 /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
 export function circumcircleArc(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleArcAttributes ={} ):CircumcircleArc{
   return TSX._jsxBoard().create('circumcircleArc', [p1,p2,p3,], defaultAttributes(attributes))  as CircumcircleArc
}


 /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
 export function circumcircleSector(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleSectorAttributes ={} ):CircumcircleSector{
   return TSX._jsxBoard().create('circumcircleSector', [p1,p2,p3,], defaultAttributes(attributes))  as CircumcircleSector
}


 /** A comb to display domains of inequalities. */
 export function comb(p1:Point|pointAddr, p2:Point|pointAddr, attributes: CombAttributes ={} ):Comb{
   return TSX._jsxBoard().create('comb', [p1,p2,], defaultAttributes(attributes))  as Comb
}

 /** Create a generic conic section either by five points or the six numeric coefficients of the general conic's equation.  
 *``` 
*``` 
 Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
 export function conic( A:Point|pointAddr,B:Point|pointAddr,C:Point|pointAddr,D:Point|pointAddr,E:Point|pointAddr,attributes?:ConicAttributes) : Conic
 /** Create a generic conic section either by five points or the six numeric coefficients of the general conic's equation.  
 *``` 
*``` 
 Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
 export function conic( A:number,B:number,C:number,D:number,E:number,F:number,attributes?:ConicAttributes) : Conic
// implementation of signature,  hidden from user
 export function conic (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Conic {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('conic', params, defaultAttributes(attrs))  as Conic
 }

 /** Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
 export function curveDifference(curve1:GeometryElement, curve2:GeometryElement, attributes: CurveDifferenceAttributes ={} ):CurveDifference{
   return TSX._jsxBoard().create('curveDifference', [curve1,curve2,], defaultAttributes(attributes))  as CurveDifference
}


 /** Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
 export function curveIntersection(curve1:GeometryElement, curve2:GeometryElement, attributes: CurveIntersectionAttributes ={} ):CurveIntersection{
   return TSX._jsxBoard().create('curveIntersection', [curve1,curve2,], defaultAttributes(attributes))  as CurveIntersection
}


 /** Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
 export function curveUnion(curve1:GeometryElement, curve2:GeometryElement, attributes: CurveUnionAttributes ={} ):CurveUnion{
   return TSX._jsxBoard().create('curveUnion', [curve1,curve2,], defaultAttributes(attributes))  as CurveUnion
}


 /** This element is used to provide a constructor for the graph showing the (numerical) derivative of a given curve. */
 export function derivative(curve:Curve, attributes: DerivativeAttributes ={} ):Derivative{
   return TSX._jsxBoard().create('derivative', [curve,], defaultAttributes(attributes))  as Derivative
}

 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Two points plus a radius */
 export function ellipse( p1:Point|pointAddr,p2:Point|pointAddr,radius:Point|pointAddr|number|Function,attributes?:EllipseAttributes) : Ellipse
 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Two points plus a radius, with start and end  */
 export function ellipse( p1:Point|pointAddr,p2:Point|pointAddr,radius:Point|pointAddr|number|Function,start?:number|Function,end?:number|Function,attributes?:EllipseAttributes) : Ellipse
 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Three Points */
 export function ellipse( focalPoint1:Point|pointAddr,focalPoint2:Point|pointAddr,outerPoint:Point|pointAddr,attributes?:EllipseAttributes) : Ellipse
 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Three Points, with  start and end. */
 export function ellipse( focalPoint1:Point|pointAddr,focalPoint2:Point|pointAddr,outerPoint:Point|pointAddr,start?:number|Function,end?:number|Function,attributes?:EllipseAttributes) : Ellipse
// implementation of signature,  hidden from user
 export function ellipse (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Ellipse {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('ellipse', params, defaultAttributes(attrs))  as Ellipse
 }
 /** A 3D parametric surface visualizes a map (u, v) → [X(u, v), Y(u, v), Z(u, v)]. 
 *``` 
*``` 
 FX(u,v), FY(u,v), FZ(u,v) are functions returning a number for [x,y,z],
- rangeU is the array containing lower and upper bound for the range of parameter u,
- rangeV is the array containing lower and upper bound for the range of parameter v.

rangeU and rangeV may also be functions returning an array of length two. */
 export function parametricSurface3d( FX:(u:number,v:number)=> number,FY:(u:number,v:number)=> number,FZ:(u:number,v:number)=> number,rangeU:number[]|(()=>number[]),rangeV:number[]|(()=>number[]),attributes?:ParametricSurface3DAttributes) : ParametricSurface3D
 /** A 3D parametric surface visualizes a map (u, v) → [X(u, v), Y(u, v), Z(u, v)]. 
 *``` 
*``` 
 F(u,v) is a function returning a number array [x,y,z],
- rangeU is the array containing lower and upper bound for the range of parameter u,
- rangeV is the array containing lower and upper bound for the range of parameter v.

rangeU and rangeV may also be functions returning an array of length two. */
 export function parametricSurface3d( F:(u:number,v:number)=> number[],rangeU:number[]|(()=>number[]),rangeV:number[]|(()=>number[]),attributes?:ParametricSurface3DAttributes) : ParametricSurface3D
// implementation of signature,  hidden from user
 export function parametricSurface3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :ParametricSurface3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('parametricsurface3d', params, defaultAttributes(attrs))  as ParametricSurface3D
 }

 /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
```js
let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
``` */
 export function functiongraph(funct:(x:number)=>number, leftBorder?:number, rightBorder?:number, attributes: FunctiongraphAttributes ={} ):Curve{
   return TSX._jsxBoard().create('functiongraph', [funct,leftBorder,rightBorder,], defaultAttributes(attributes))  as Functiongraph
}


 /** A 3D functiongraph visualizes a map (x, y) → f(x, y).  */
 export function functiongraph3d(xyFunction:(x:number,y:number)=>number, xRange:NumberFunction[], yRange:NumberFunction[], attributes: Functiongraph3DAttributes ={} ):Functiongraph3D{
   return TSX._jsxView3d().create('functiongraph3d', [xyFunction,xRange,yRange,], defaultAttributes(attributes))  as Functiongraph3D
}

 export function glider( hostElement:GeometryElement,attributes?:GliderAttributes) : Glider
 export function glider( hostElement:GeometryElement,initialPosition:number[],attributes?:GliderAttributes) : Glider
// implementation of signature,  hidden from user
 export function glider (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Glider {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
 params = b? [b[0]??0,b[1]??0,a]:[0,0,a]
                         return _jsxBoard().create('glider', params ,defaultAttributes(attrs));
 }

 /** Glider3D is an alias for JSXGraph's Point3D(). */
 export function glider3d(element:Curve3D|Line3D|Sphere3D, initial:number[]=[0,0,0], attributes: Glider3DAttributes ={} ):Point3D{
 return _jsxView3d().create("point3d",[initial,element],attributes)
}

 export function grid( axis1:Axis,axis2:Axis,attributes?:GridAttributes) : Grid
 export function grid( attributes?:GridAttributes) : Grid
// implementation of signature,  hidden from user
 export function grid (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Grid {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('grid', params, defaultAttributes(attrs))  as Grid
 }

 /** Hatches can be used to mark congruent lines or curves. */
 export function hatch(line:Line|[Point|pointAddr,Point|pointAddr], numberHatches:number, attributes: HatchAttributes ={} ):Hatch{
   return TSX._jsxBoard().create('hatch', [line,numberHatches,], defaultAttributes(attributes))  as Hatch
}


 /** This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
 export function hyperbola(point1:Point|pointAddr, point2:Point|pointAddr, point3:Point|pointAddr|number, start:number=-3.14, end:number=3.14, attributes: HyperbolaAttributes ={} ):Hyperbola{
   return TSX._jsxBoard().create('hyperbola', [point1,point2,point3,start,end,], defaultAttributes(attributes))  as Hyperbola
}


 /** Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html */
 export function incenter(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: IncenterAttributes ={} ):Incenter{
   return TSX._jsxBoard().create('incenter', [p1,p2,p3,], defaultAttributes(attributes))  as Incenter
}


 /** An incircle is given by three points. */
 export function incircle(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: IncircleAttributes ={} ):Incircle{
   return TSX._jsxBoard().create('incircle', [p1,p2,p3,], defaultAttributes(attributes))  as Incircle
}


 /** Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y */
 export function inequality(boundaryLine:Line|[Point|pointAddr,Point|pointAddr]|Curve, attributes: InequalityAttributes ={} ):Inequality{
   return TSX._jsxBoard().create('inequality', [boundaryLine,], defaultAttributes(attributes))  as Inequality
}


 /** This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners. */
 export function input(position:Point|pointAddr, label:String|Function, initial:String="", attributes: InputAttributes ={} ):Input{
 (position as any).push(label,initial);
                        return _jsxBoard().create('input', position,defaultAttributes(attributes));
}


 /** This element is used to visualize the integral of a given curve over a given interval. */
 export function integral(range:number[], curve:Curve, attributes: IntegralAttributes ={} ):Integral{
   return TSX._jsxBoard().create('integral', [range,curve,], defaultAttributes(attributes))  as Integral
}

 export function intersection( element1:Line|Circle|Curve|Polygon|PolygonalChain,element2:Line|Circle|Curve|Polygon|PolygonalChain,i?:number|Function,attributes?:IntersectionAttributes) : Intersection
 export function intersection( element1:Line|Circle|Curve|Polygon|PolygonalChain,element2:Line|Circle|Curve|Polygon|PolygonalChain,attributes?:IntersectionAttributes) : Intersection
// implementation of signature,  hidden from user
 export function intersection (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Intersection {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
 return _jsxBoard().create('intersection', params, defaultAttributes(attrs)) as Point
 }

 /** Creates a Legend for a Chart Element
                                
*```js
* let labels = ['a','b','c']
* let colors = ['red','green','blue']
* let legend = TSX.legend([2,2],labels,colors)
*```
                                
 */
 export function legend(lowerLeft:pointAddr, labels:string[], colors:string[], attributes: LegendAttributes ={} ):Legend{
 attributes['labels']=labels;
                attributes['colors']=colors
                return _jsxBoard().create('legend', lowerLeft,defaultAttributes(attributes));
}


 /** This element is used to visualize the locus of a given dependent point. */
 export function locus(point:Point, attributes: LocusAttributes ={} ):Locus{
   return TSX._jsxBoard().create('locus', [point,], defaultAttributes(attributes))  as Locus
}


 /** A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
 export function majorArc(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MajorArcAttributes ={} ):MajorArc{
   return TSX._jsxBoard().create('majorArc', [p1,p2,p3,], defaultAttributes(attributes))  as MajorArc
}


 /** A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
 export function majorSector(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MajorSectorAttributes ={} ):MajorSector{
   return TSX._jsxBoard().create('majorSector', [p1,p2,p3,], defaultAttributes(attributes))  as MajorSector
}


 /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
```js
 let p = TSX.point([4, 9]);
 let c = TSX.circle([4, 7], p);
 TSX.measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
 TSX.measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
```
 */
 export function measurement(locn:Point|pointAddr, measure:string, element:GeometryElement, attributes: MeasurementAttributes ={} ):Measurement{
 let x:any=0,y:any=0;
                if(Array.isArray(locn)){
                   x = locn[0];
                   y = locn[1];
                }else if(typeof locn == 'object'){
                    x = locn.X();
                    y = locn.Y();
                };
            return _jsxBoard().create('measurement', [x,y,[measure,element]], attributes)
}

 export function mesh3d( point:Point3D|number[]|Function,direction1:number[]|Function,direction2:number[]|Function,range1?:pointAddr,range2?:pointAddr,attributes?:Mesh3DAttributes) : Mesh3D
 export function mesh3d( point:Point3D|number[]|Function,direction1:number[]|Function|Function[],direction2:number[]|Function|Function[],range1?:pointAddr,range2?:pointAddr,attributes?:Mesh3DAttributes) : Mesh3D
 export function mesh3d( point1:Point3D,point2:Point3D,point3:Point3D,range1?:pointAddr,range2?:pointAddr,attributes?:Mesh3DAttributes) : Mesh3D
 export function mesh3d( point1:Point3D,point2:Point3D,point3:Point3D,attributes?:Mesh3DAttributes) : Mesh3D
// implementation of signature,  hidden from user
 export function mesh3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Mesh3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('mesh3d', params, defaultAttributes(attrs))  as Mesh3D
 }
 export function midpoint( p1:Point,p2:Point,attributes?:MidpointAttributes) : Midpoint
 export function midpoint( line:Line,attributes?:MidpointAttributes) : Midpoint
// implementation of signature,  hidden from user
 export function midpoint (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Midpoint {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('midpoint', params, defaultAttributes(attrs))  as Midpoint
 }

 /** A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
 export function minorArc(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MinorArcAttributes ={} ):MinorArc{
   return TSX._jsxBoard().create('minorArc', [p1,p2,p3,], defaultAttributes(attributes))  as MinorArc
}


 /** A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
 export function minorSector(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MinorSectorAttributes ={} ):MinorSector{
   return TSX._jsxBoard().create('minorSector', [p1,p2,p3,], defaultAttributes(attributes))  as MinorSector
}


 /**  */
 export function mirrorelement(element:Point|Line|Circle|Curve|Polygon, acrossPoint:Point|pointAddr, attributes: MirrorelementAttributes ={} ):Mirrorelement{
   return TSX._jsxBoard().create('mirrorelement', [element,acrossPoint,], defaultAttributes(attributes))  as Mirrorelement
}


 /** A mirror point will be constructed. */
 export function mirrorpoint(p1:Point, p2:Point, attributes: MirrorpointAttributes ={} ):Mirrorpoint{
   return TSX._jsxBoard().create('mirrorpoint', [p1,p2,], defaultAttributes(attributes))  as Mirrorpoint
}


 /** A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
 export function nonReflexAngle(point1:Point, point2:Point, point3:Point, attributes: NonReflexAngleAttributes ={} ):NonReflexAngle{
   return TSX._jsxBoard().create('nonReflexAngle', [point1,point2,point3,], defaultAttributes(attributes))  as NonReflexAngle
}

 export function normal( object:Line|Circle|Curve,point:Point,attributes?:NormalAttributes) : Normal
 export function normal( glider:Glider,attributes?:NormalAttributes) : Normal
// implementation of signature,  hidden from user
 export function normal (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Normal {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('normal', params, defaultAttributes(attrs))  as Normal
 }

 /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
```js
let s1 = TSX.segment(p1, p2)
let p3 = TSX.point([0, -1])
TSX.orthogonalprojection(p3, s1)
``` */
 export function orthogonalprojection(point:Point|pointAddr, line:Line|[Point|pointAddr,Point|pointAddr], attributes: OrthogonalprojectionAttributes ={} ):Orthogonalprojection{
   return TSX._jsxBoard().create('orthogonalprojection', [point,line,], defaultAttributes(attributes))  as Orthogonalprojection
}


 /** This element is used to provide a constructor for the ”other” intersection point. */
 export function otherIntersection(element1:Line|Circle, element2:Line|Circle, firstIntersection:Point, attributes: OtherIntersectionAttributes ={} ):Point{
  return _jsxBoard().create('otherintersection', [element1,element2,firstIntersection], attributes)
}


 /** This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix). */
 export function parabola(focalPoint:Point|pointAddr, line:Line|[Point|pointAddr,Point|pointAddr], attributes: ParabolaAttributes ={} ):Parabola{
   return TSX._jsxBoard().create('parabola', [focalPoint,line,], defaultAttributes(attributes))  as Parabola
}

 export function parallelpoint( line:Line|[Point,Point],point:Point|pointAddr,attributes?:ParallelpointAttributes) : Parallelpoint
 export function parallelpoint( P1:Point,P2:Point,P3:Point,attributes?:ParallelpointAttributes) : Parallelpoint
// implementation of signature,  hidden from user
 export function parallelpoint (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Parallelpoint {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('parallelpoint', params, defaultAttributes(attrs))  as Parallelpoint
 }
 export function segment( P1:Point|pointAddr,P2:Point|pointAddr,attributes?:SegmentAttributes) : Segment
 export function segment( P1:Point|pointAddr,P2:Point|pointAddr,length:number|Function,attributes?:SegmentAttributes) : Segment
// implementation of signature,  hidden from user
 export function segment (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Segment {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('segment', params, defaultAttributes(attrs))  as Segment
 }

 /**  */
 export function parallelogram(p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: ParallelogramAttributes ={} ):Parallelogram{
   return TSX._jsxBoard().create('parallelogram', [p1,p2,p3,], defaultAttributes(attributes))  as Parallelogram
}


 /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
 export function perpendicular(line:Line|[Point|pointAddr,Point|pointAddr], point:Point|pointAddr, attributes: PerpendicularAttributes ={} ):Perpendicular{
   return TSX._jsxBoard().create('perpendicular', [line,point,], defaultAttributes(attributes))  as Perpendicular
}


 /** Create a point on a line where a perpendicular to a given point would intersect that line. */
 export function perpendicularPoint(line:Line|[Point|pointAddr,Point|pointAddr], point:Point|pointAddr, attributes: PerpendicularPointAttributes ={} ):PerpendicularPoint{
   return TSX._jsxBoard().create('perpendicularPoint', [line,point,], defaultAttributes(attributes))  as PerpendicularPoint
}


 /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
 export function perpendicularSegment(line:Line|[Point|pointAddr,Point|pointAddr], point:Point|pointAddr, attributes: PerpendicularSegmentAttributes ={} ):PerpendicularSegment{
   return TSX._jsxBoard().create('perpendicularSegment', [line,point,], defaultAttributes(attributes))  as PerpendicularSegment
}


 /** This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle. */
 export function polarLine(conic:Conic|Circle, point:Point, attributes: PolarLineAttributes ={} ):PolarLine{
   return TSX._jsxBoard().create('polarLine', [conic,point,], defaultAttributes(attributes))  as PolarLine
}


 /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
 export function polePoint(conic:Conic|Circle, line:Line, attributes: PolePointAttributes ={} ):PolePoint{
   return TSX._jsxBoard().create('polePoint', [conic,line,], defaultAttributes(attributes))  as PolePoint
}


 /** Array of Points */
 export function polygonalChain(pointArray:Point[]|pointAddr[], attributes: PolygonalChainAttributes ={} ):PolygonalChain{
   return TSX._jsxBoard().create('polygonalChain', [pointArray,].flat(), defaultAttributes(attributes))  as PolygonalChain
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
 export function polyhedron3d(vertexList:(TSX.Point3D|TSX.pointAddr3D)[], faceArray:number[][], attributes: Polyhedron3DAttributes ={} ):Polyhedron3D{
   return TSX._jsxView3d().create('polyhedron3d', [vertexList,faceArray,], defaultAttributes(attributes))  as Polyhedron3D
}


 /** This element is used to provide a constructor for the radical axis with respect to two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
 export function radicalAxis(circle1:Circle, circle2:Circle, attributes: RadicalAxisAttributes ={} ):RadicalAxis{
   return TSX._jsxBoard().create('radicalAxis', [circle1,circle2,], defaultAttributes(attributes))  as RadicalAxis
}


 /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
 export function reflection(object:Point|Line|Curve|Polygon, reflectLine:Line, attributes: ReflectionAttributes ={} ):Reflection{
   return TSX._jsxBoard().create('reflection', [object,reflectLine,], defaultAttributes(attributes))  as Reflection
}


 /** A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
 export function reflexAngle(point1:Point, point2:Point, point3:Point, attributes: ReflexAngleAttributes ={} ):ReflexAngle{
   return TSX._jsxBoard().create('reflexAngle', [point1,point2,point3,], defaultAttributes(attributes))  as ReflexAngle
}


 /** Constructs a regular polygon. It needs two points which define the base line and the number of vertices. */
 export function regularPolygon(P1:Point|pointAddr, P2:Point|pointAddr, nVertices:number, attributes: RegularPolygonAttributes ={} ):RegularPolygon{
   return TSX._jsxBoard().create('regularPolygon', [P1,P2,nVertices,], defaultAttributes(attributes))  as RegularPolygon
}


 /** Visualize the Riemann sum which is an approximation of an integral by a finite sum. It is realized as a special curve. The returned element has the method Value() which returns the sum of the areas of the bars.

                        In case of type 'simpson' and 'trapezoidal', the horizontal line approximating the function value is replaced by a parabola or a secant. IN case of 'simpson', the parabola is approximated visually by a polygonal chain of fixed step width. */
 export function riemannsum(funct:Function|number[], nBars:Function|number, type:'left'|'right'|'middle'|'lower'|'upper'|'random'|'simpson'|'trapezoidal' = 'simpson', leftBorder?:number|Function, rightBorder?:number|Function, attributes: RiemannsumAttributes ={} ):Riemannsum{
   return TSX._jsxBoard().create('riemannsum', [funct,nBars,type,leftBorder,rightBorder,], defaultAttributes(attributes))  as Riemannsum
}


 /** A semicircle is a special arc defined by two points. The arc hits both points. */
 export function semicircle(P1:Point|pointAddr, P2:Point|pointAddr, attributes: SemicircleAttributes ={} ):Semicircle{
   return TSX._jsxBoard().create('semicircle', [P1,P2,], defaultAttributes(attributes))  as Semicircle
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
 export function slider(StartPoint:Point|pointAddr, EndPoint:Point|pointAddr, minimum_initial_maximum:[number,number,number], attributes: SliderAttributes ={} ):Slider{
   return TSX._jsxBoard().create('slider', [StartPoint,EndPoint,minimum_initial_maximum,], defaultAttributes(attributes))  as Slider
}


 /** Slope field. Plot a slope field given by a function f(x, y) returning a number. */
 export function slopefield(func:Function, xData:NumberFunction[], yData:NumberFunction[], attributes: SlopefieldAttributes ={} ):Slopefield{
   return TSX._jsxBoard().create('slopefield', [func,xData,yData,], defaultAttributes(attributes))  as Slopefield
}

 export function slopetriangle( tangent:Point | Tangent,attributes?:SlopetriangleAttributes) : Slopetriangle
 export function slopetriangle( line:Line,point:Point,attributes?:SlopetriangleAttributes) : Slopetriangle
// implementation of signature,  hidden from user
 export function slopetriangle (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Slopetriangle {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('slopetriangle', params, defaultAttributes(attrs))  as Slopetriangle
 }
 /** Customized text elements for displaying measurements of JSXGraph elements, Examples are length of a segment, perimeter or area of a circle or polygon (including polygonal chain), slope of a line, value of an angle, and coordinates of a point. */
 export function smartlabel( parent:Point|Line|Circle|Polygon|Angle,attributes?:SmartlabelAttributes) : Smartlabel
 /** Customized text elements for displaying measurements of JSXGraph elements, Examples are length of a segment, perimeter or area of a circle or polygon (including polygonal chain), slope of a line, value of an angle, and coordinates of a point. */
 export function smartlabel( parent:Point|Line|Circle|Polygon|Angle,Txt:string|Function,attributes?:SmartlabelAttributes) : Smartlabel
// implementation of signature,  hidden from user
 export function smartlabel (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Smartlabel {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('smartlabel', params, defaultAttributes(attrs))  as Smartlabel
 }

 /**  sphere consists of all points with a given distance from a given point. The given point is called the center, and the given distance is called the radius. */
 export function sphere3d(center:Point3D|pointAddr3D, radius:Point3D|number|pointAddr3D, attributes: Sphere3DAttributes ={} ):Sphere3D{
   return TSX._jsxView3d().create('sphere3d', [center,radius,], defaultAttributes(attributes))  as Sphere3D
}


 /** This element is used to provide a constructor for (natural) cubic spline curves. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
 export function spline(points:Point[]|number[][], attributes: SplineAttributes ={} ):Curve{
 return _jsxBoard().create('spline', points, defaultAttributes(attributes))
}


 /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
```js
let  curve = TSX.stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
```
 */
 export function stepfunction(X:number[], Y:number[], attributes: StepfunctionAttributes ={} ):Stepfunction{
   return TSX._jsxBoard().create('stepfunction', [X,Y,], defaultAttributes(attributes))  as Stepfunction
}

 export function tangent( point:Glider,attributes?:TangentAttributes) : Tangent
 export function tangent( point:Point,curve:Line|Circle|Curve,attributes?:TangentAttributes) : Tangent
// implementation of signature,  hidden from user
 export function tangent (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Tangent {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxBoard().create('tangent', params, defaultAttributes(attrs))  as Tangent
 }

 /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
 export function tangentTo(conic:Conic|Circle, point:Point|pointAddr, N:number=0, attributes: TangentToAttributes ={} ):TangentTo{
   return TSX._jsxBoard().create('tangentTo', [conic,point,N,], defaultAttributes(attributes))  as TangentTo
}


 /** A tape measure can be used to measure distances between points. */
 export function tapemeasure(P1:Point|pointAddr, P2:Point|pointAddr, attributes: TapemeasureAttributes ={} ):Tapemeasure{
   return TSX._jsxBoard().create('tapemeasure', [P1,P2,], defaultAttributes(attributes))  as Tapemeasure
}


 /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
 export function tracecurve(glider:Glider, point:Point, attributes: TracecurveAttributes ={} ):Tracecurve{
   return TSX._jsxBoard().create('tracecurve', [glider,point,], defaultAttributes(attributes))  as Tracecurve
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
 export function transformPoint(point:Point, transform:Transform|Transform[], attributes: TransformPointAttributes ={} ):Point{
  return _jsxBoard().create('point', [point,transform],defaultAttributes(attributes))
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
 export function transformPoint3d(point:Point3D, transform:Transform3D|Transform3D[], attributes: TransformPoint3DAttributes ={} ):Point3D{
  return _jsxView3d().create('point3d', [point,transform],defaultAttributes(attributes))
}

 export function segment3d( P1:Point|pointAddr,P2:Point|pointAddr,attributes?:Segment3DAttributes) : Segment3D
 export function segment3d( P1:Point|pointAddr,P2:Point|pointAddr,length:number|Function,attributes?:Segment3DAttributes) : Segment3D
// implementation of signature,  hidden from user
 export function segment3d (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) :Segment3D {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = isAttribute(a)?[]:[a,];
   attrs = isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = isAttribute(b)?[a,]:[a,b,];
   attrs = isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = isAttribute(g)? g:{};
 }
   return TSX._jsxView3d().create('segment3d', params, defaultAttributes(attrs))  as Segment3D
 }

 /** Create a Transform object with Translate properties. */
 export function translate(dx:number|Function, dy:number|Function, attributes: TranslateAttributes ={} ):Transform{
 return _jsxBoard().create('transform', [dx,dy], {type:'translate'})
}


 /** Create a Transform object with Rotate properties. */
 export function rotate(angle:number|Function, around:Point|pointAddr, attributes: RotateAttributes ={} ):Transform{
 return _jsxBoard().create('Transform', [angle,around], {type:'rotate'})
}


 /** Create a Transform object with Scale properties.  Scaling is relative to [0,0]. */
 export function scale(xMultiplier:number|Function, yMultiplier:number|Function, attributes: ScaleAttributes ={} ):Transform{
 return _jsxBoard().create('transform', [xMultiplier,yMultiplier], {type:'scale'})
}


 /** Create a Transform3D object with Translate properties. */
 export function translate3d(dx:number|Function, dy:number|Function, dz:number|Function, attributes: Translate3DAttributes ={} ):Transform3D{
 return _jsxView3d().create('transform3d', [dx,dy,dz], {type:'translate'})
}


 /** Create a Transform3D object with Rotate properties around the normal vector N. */
 export function rotate3d(angle:number|Function, n:number[], attributes: Rotate3DAttributes ={} ):Transform3D{
 return _jsxView3d().create('transform3d', [angle,n], {type:'rotate'})
}


 /** Create a Transform3D object with Rotate properties around the X axis. */
 export function rotateX3d(angle:number|Function, attributes: RotateX3DAttributes ={} ):Transform3D{
 return _jsxView3d().create('transform3d', [angle], {type:'rotateX'})
}


 /** Create a Transform3D object with Rotate properties around the Y axis. */
 export function rotateY3d(angle:number|Function, attributes: RotateY3DAttributes ={} ):Transform3D{
 return _jsxView3d().create('transform3d', [angle], {type:'rotateY'})
}


 /** Create a Transform3D object with Rotate properties around the Z axis. */
 export function rotateZ3d(angle:number|Function, attributes: RotateZ3DAttributes ={} ):Transform3D{
 return _jsxView3d().create('transform3d', [angle], {type:'rotateZ'})
}


 /** Create a Transform object with Scale properties.  Scaling is relative to [0,0,0]. */
 export function scale3d(xMultiplier:number|Function, yMultiplier:number|Function, zMultiplier:number|Function, attributes: Scale3DAttributes ={} ):Transform3D{
 return _jsxView3d().create('transform3d', [xMultiplier,yMultiplier,zMultiplier], {type:'scale'})
}


 export class GeometryElement{

 /**  */
 public get x():GeometryElement {
  return _jsxBoard().x as GeometryElement
}

 /**  */
 public get y():GeometryElement {
  return _jsxBoard().y as GeometryElement
}

 /**  */
 public get elType():String {
  return _jsxBoard().elType as String
}

 /**  */
 public get name():String {
  return _jsxBoard().name as String
}

 /**  */
 public get isDraggable():Boolean {
  return _jsxBoard().isDraggable as Boolean
}
 public set isDraggable(param:Boolean) {
  _jsxBoard().isDraggable = param
}

 /** Removes all ticks from a line or curve. */
 removeAllTicks(): Object {
  return  this.removeAllTicks() as Object
}

 /** Add an element as a child to the current element. */
 addChild(): GeometryElement {
  return  this.addChild() as GeometryElement
}

 /** Adds ids of elements to the array this.parents. */
 addParents(parents:GeometryElement[]): Object {
  return  this.addParents(parents) as Object
}

 /** Rotate texts or images by a given degree. */
 addRotation(): String {
  return  this.addRotation() as String
}

 /** Adds ticks to this line or curve. */
 addTicks(): String {
  return  this.addTicks() as String
}

 /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
 animate(): GeometryElement {
  return  this.animate() as GeometryElement
}

 /** Dimensions of the smallest rectangle enclosing the element. */
 bounds(): number[] {
  return  this.bounds() as number[]
}

 /** Removes all objects generated by the trace function. */
 clearTrace(): GeometryElement {
  return  this.clearTrace() as GeometryElement
}

 /** Copy the element to background. */
 cloneToBackground(): GeometryElement {
  return  this.cloneToBackground() as GeometryElement
}

 /** Creates a label element for this geometry element. */
 createLabel(): boolean {
  return  this.createLabel() as boolean
}

 /** Format a number according to the locale set in the attribute ”intl”. */
 formatNumberLocale(): String|number {
  return  this.formatNumberLocale() as String|number
}

 /** Array of strings containing the polynomials defining the element. */
 generatePolynomial(): number[] {
  return  this.generatePolynomial() as number[]
}

 /** Get the value of the property key. */
 getAttribute(): Object {
  return  this.getAttribute() as Object
}

 /** Retrieve a copy of the current visProp. */
 getAttributes(): Object {
  return  this.getAttributes() as Object
}

 /** Returns the elements name. */
 getName(): String {
  return  this.getName() as String
}

 /** List of the element ids resp. */
 getParents(): number[] {
  return  this.getParents() as number[]
}

 /** Deprecated alias for JXG.GeometryElement#getAttribute. */
 getProperty(): number[] {
  return  this.getProperty() as number[]
}

 /** The type of the element as used in JXG.Board#create. */
 getType(): String {
  return  this.getType() as String
}

 /** Move an element to its nearest grid point. */
 handleSnapToGrid(): GeometryElement {
  return  this.handleSnapToGrid() as GeometryElement
}

 /** Hide the element. */
 hide(): GeometryElement {
  return  this.hide() as GeometryElement
}

 /** Hide the element. */
 hideElement(): GeometryElement {
  return  this.hideElement() as GeometryElement
}

 /**  */
 labelColor(): currentBoard {
  return  this.labelColor() as currentBoard
}

 /** Uses the ”normal” properties of the element. */
 noHighlight(): currentBoard {
  return  this.noHighlight() as currentBoard
}

 /** Removes the element from the construction. */
 remove(): Object {
  return  this.remove() as Object
}

 /** Remove an element as a child from the current element. */
 removeChild(): Object {
  return  this.removeChild() as Object
}

 /** Alias of JXG.EventEmitter.off. */
 removeEvent(): number {
  return  this.removeEvent() as number
}

 /** Removes ticks identified by parameter named tick from this line or curve. */
 removeTicks(): Object {
  return  this.removeTicks() as Object
}

 /** Determines whether the element has arrows at start or end of the arc. */
 setArrow(): GeometryElement {
  return  this.setArrow() as GeometryElement
}

 /** Sets an arbitrary number of attributes. */
 setAttribute(attrs:GeometryElementAttributes): void {
  return  this.setAttribute(attrs) as void
}

 /** Sets a label and its text If label doesn't exist, it creates one */
 setLabel(txt:string): Object {
  return  this.setLabel(txt) as Object
}

 /** Updates the element's label text, strips all html. */
 setLabelText(): Object {
  return  this.setLabelText() as Object
}

 /** Updates the element's label text and the element's attribute ”name”, strips all html. */
 setName(): Object {
  return  this.setName() as Object
}

 /** Sets ids of elements to the array this.parents. */
 setParents(): Object {
  return  this.setParents() as Object
}

 /** Moves an element by the difference of two coordinates.  Valid values for method are TSX.COORDS_BY_USER and TSX.COORDS_BY_SCREEN */
 setPositionDirectly(method:number, coords:NumberFunction[], prevCoords?: NumberFunction[]): Point {
  return  this.setPositionDirectly(method,coords,prevCoords) as Point
}

 /** Deprecated alias for JXG.GeometryElement#setAttribute. */
 setProperty(): GeometryElement {
  return  this.setProperty() as GeometryElement
}

 /** Make the element visible. */
 show(): GeometryElement {
  return  this.show() as GeometryElement
}

 /** Make the element visible. */
 showElement(): GeometryElement {
  return  this.showElement() as GeometryElement
}

 /** Snaps the element to points. */
 snapToPoints(): GeometryElement {
  return  this.snapToPoints() as GeometryElement
}

 /** Checks if locale is enabled in the attribute. */
 useLocale(): Boolean {
  return  this.useLocale() as Boolean
}

 /**  */
 on(event:string,handler:Function): any {
  return  this.on(event,handler) as any
}
}

 export class GeometryElement3D extends GeometryElement {

 /**  */
 public get element2D():number[] {
  return _jsxBoard().element2D as number[]
}

 /**  */
 public get is3D():Boolean {
  return _jsxBoard().is3D as Boolean
}

 /**  */
 public get view():any {
  return _jsxBoard().view as any
}

 /**  */
 public get strokeColor():String {
  return _jsxBoard().strokeColor as String
}

 /**  */
 public get strokeWidth():number {
  return _jsxBoard().strokeWidth as number
}

 /**  */
 public get size():number {
  return _jsxBoard().size as number
}

 /**  */
 public get fillColor():String {
  return _jsxBoard().fillColor as String
}

 /**  */
 public get visible():Boolean {
  return _jsxBoard().visible as Boolean
}

 /**  */
 setAttribute(attrs:GeometryElement3DAttributes): void {
  return  this.setAttribute(attrs) as void
}
}

 export class Board extends GeometryElement {
}

 export class Point extends GeometryElement {

 /**  */
 coords(): number[] {
  return  this.coords() as number[]
}

 /**  */
 startAnimation(direction:number,stepCount:number,delayMSec:number): void {
  return  this.startAnimation(direction,stepCount,delayMSec) as void
}

 /**  */
 stopAnimation(): any {
  return  this.stopAnimation() as any
}

 /** Calculates Euclidean distance for two Points, eg:  p1.Dist(p2) */
 Dist(toPoint:Point|pointAddr): number {
  return  this.Dist(toPoint) as number
}

 /** Set the face of a point element. */
 face(style:'cross'|'circle'|'square'|'plus'|'minus'|'diamond'): Boolean {
  return  this.face(style) as Boolean
}

 /** Updates the position of the point. */
 update(): number[] {
  return  this.update() as number[]
}

 /**  */
 X(): number {
  return  this.X() as number
}

 /**  */
 Y(): number {
  return  this.Y() as number
}

 /**  */
 Z(): number {
  return  this.Z() as number
}

 /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                        is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                        want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                        
```js 

P.moveTo([A.X(), A.Y()], 5000)

``` */
 moveTo(p:number[]|Function[],time:number=0, options?:VisitAttributes): Promise<any> {
  return  this.moveTo(p,time,options) as Promise<any>
}

 /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                        is no AWAIT for the tween to finish, a second moveTo() starts immediately. Thats GOOD if you
                        want to move two different points at the same time, BAD if you want to move the same point repeatedly.  EG:
                        
```js 

P.moveTo([A.X(), A.Y()], 5000)

``` */
 visit(p:number[]|Function[],time:number=0,options?: VisitAttributes): Promise<any> {
  return  this.visit(p,time,options) as Promise<any>
}
                    /** Point location in vector form [n,n] */
                    XY(): [number,number] {
                    return [this.X() as number,this.Y() as number]
                    }
                
}

 export class Line extends GeometryElement {

 /**  */
 public get defaultTicks():Ticks {
  return _jsxBoard().defaultTicks as Ticks
}

 /**  */
 public get parentPolygon():Polygon {
  return _jsxBoard().parentPolygon as Polygon
}

 /** Attributes for first defining point of the line. */
 public get point1():Point {
  return _jsxBoard().point1 as Point
}

 /** Attributes for second defining point of the line. */
 public get point2():Point {
  return _jsxBoard().point2 as Point
}

 /** Attributes for ticks of the line. */
 public get ticks():number[] {
  return _jsxBoard().ticks as number[]
}

 /** Determines the angle between the positive x axis and the line. */
 getAngle(): number {
  return  this.getAngle() as number
}

 /** Calculates the y intersect of the line. */
 getRise(): number {
  return  this.getRise() as number
}

 /** Alias for line.Slope */
 getSlope(): number {
  return  this.getSlope() as number
}

 /** Checks whether (x,y) is near the line. */
 hasPoint(): Boolean {
  return  this.hasPoint() as Boolean
}

 /** The distance between the two points defining the line. */
 L(): number {
  return  this.L() as number
}

 /** Calculates the slope of the line. */
 Slope(): number {
  return  this.Slope() as number
}

 /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
 X(): number {
  return  this.X() as number
}

 /** Treat the line as parametric curve in homogeneous coordinates. */
 Y(): number {
  return  this.Y() as number
}

 /** Treat the line as parametric curve in homogeneous coordinates. */
 Z(): number {
  return  this.Z() as number
}
}

 export class View3D extends GeometryElement3D {

 /**  */
 public get defaultAxes():Object {
  return _jsxBoard().defaultAxes as Object
}

 /**  */
 public get matrix3D():Object {
  return _jsxBoard().matrix3D as Object
}

 /**  */
 setView(azimuth:number,elevation:number,radius?:number): View3D {
  return  this.setView(azimuth,elevation,radius) as View3D
}

 /**  */
 animateAzimuth(): Object {
  return  this.animateAzimuth() as Object
}

 /** Creates a new 3D element of type elementType. */
 create(): Object {
  return  this.create() as Object
}

 /** Intersect a ray with the bounding cube of the 3D view. */
 intersectionLineCube(): number[] {
  return  this.intersectionLineCube() as number[]
}

 /**  */
 intersectionPlanePlane(): number[] {
  return  this.intersectionPlanePlane() as number[]
}

 /** Test if coordinates are inside of the bounding cube. */
 isInCube(): number[] {
  return  this.isInCube() as number[]
}

 /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
 project2DTo3DPlane(): number[] {
  return  this.project2DTo3DPlane() as number[]
}

 /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
 project2DTo3DVertical(): number[] {
  return  this.project2DTo3DVertical() as number[]
}

 /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
 project3DTo2D(): number[] {
  return  this.project3DTo2D() as number[]
}

 /** Limit 3D coordinates to the bounding cube. */
 project3DToCube(): GeometryElement3D|Composition {
  return  this.project3DToCube() as GeometryElement3D|Composition
}

 /** Select a single or multiple elements at once. */
 select(): GeometryElement3D|Composition {
  return  this.select() as GeometryElement3D|Composition
}

 /**  */
 stopAzimuth(): any {
  return  this.stopAzimuth() as any
}
}

 export class currentBoard{
}

 export class Infobox{
}

 export class CA{

 /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
 expandDerivatives(): any {
  return  this.expandDerivatives() as any
}

 /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
 setMath(): any {
  return  this.setMath() as any
}
}

 export class Chart extends GeometryElement {

 /**  */
 public get elements():any[] {
  return _jsxBoard().elements as any[]
}

 /** Create bar chart defined by two data arrays. */
 drawBar(): any[] {
  return  this.drawBar() as any[]
}

 /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
 drawFit(): Curve {
  return  this.drawFit() as Curve
}

 /** Create line chart defined by two data arrays. */
 drawLine(): Curve {
  return  this.drawLine() as Curve
}

 /** Create pie chart. */
 drawPie(): Object {
  return  this.drawPie() as Object
}

 /** Create chart consisting of JSXGraph points. */
 drawPoints(): number[] {
  return  this.drawPoints() as number[]
}

 /** Create radar chart. */
 drawRadar(): Object {
  return  this.drawRadar() as Object
}

 /** Create line chart that consists of a natural spline curve defined by two data arrays. */
 drawSpline(): Curve {
  return  this.drawSpline() as Curve
}

 /** Template for dynamic charts update. */
 updateDataArray(): Chart {
  return  this.updateDataArray() as Chart
}
}

 export class Circle extends GeometryElement {

 /** Attributes for center point. */
 public get center():Point {
  return _jsxBoard().center as Point
}

 /**  */
 public get circle():Circle {
  return _jsxBoard().circle as Circle
}

 /**  */
 public get line():Line {
  return _jsxBoard().line as Line
}

 /**  */
 public get method():string {
  return _jsxBoard().method as string
}

 /** Attributes for center point. */
 public get point2():Point {
  return _jsxBoard().point2 as Point
}

 /**  */
 public get radius():number {
  return _jsxBoard().radius as number
}

 /** Circle area */
 Area(): number {
  return  this.Area() as number
}

 /** Perimeter (circumference) of circle. */
 Perimeter(): number {
  return  this.Perimeter() as number
}

 /** Calculates the radius of the circle. */
 Radius(): number {
  return  this.Radius() as number
}

 /** Treats the circle as parametric curve and calculates its X coordinate. */
 X(): number {
  return  this.X() as number
}

 /** Treats the circle as parametric curve and calculates its Y coordinate. */
 Y(): number {
  return  this.Y() as number
}

 /** Treat the circle as parametric curve and calculates its Z coordinate. */
 Z(): number {
  return  this.Z() as number
}
}

 export class Circle3D extends GeometryElement3D {
}

 export class Complex{

 /**  */
 public get absval():number {
  return _jsxBoard().absval as number
}

 /**  */
 public get angle():number {
  return _jsxBoard().angle as number
}

 /**  */
 public get imaginary():number {
  return _jsxBoard().imaginary as number
}

 /**  */
 public get isComplex():Boolean {
  return _jsxBoard().isComplex as Boolean
}

 /**  */
 public get real():number {
  return _jsxBoard().real as number
}

 /** Add another complex number to this complex number. */
 add(): Complex {
  return  this.add() as Complex
}

 /** Conjugate a complex number in place. */
 conj(): Complex {
  return  this.conj() as Complex
}

 /** Divide this complex number by the given complex number. */
 div(): Complex {
  return  this.div() as Complex
}

 /** Multiply another complex number to this complex number. */
 mult(): Complex {
  return  this.mult() as Complex
}

 /** Subtract another complex number from this complex number. */
 sub(): Complex {
  return  this.sub() as Complex
}

 /** Converts a complex number into a string. */
 toString(): String {
  return  this.toString() as String
}
}

 export class Composition{

 /** Adds an element to the composition container. */
 add(): Boolean {
  return  this.add() as Boolean
}

 /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
 fullUpdate(): Boolean {
  return  this.fullUpdate() as Boolean
}

 /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
 highlight(): Boolean {
  return  this.highlight() as Boolean
}

 /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
 noHighlight(): Boolean {
  return  this.noHighlight() as Boolean
}

 /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
 prepareUpdate(): Boolean {
  return  this.prepareUpdate() as Boolean
}

 /** Remove an element from the composition container. */
 remove(): Boolean {
  return  this.remove() as Boolean
}

 /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
 setParents(): any {
  return  this.setParents() as any
}

 /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
 updateRenderer(): Point {
  return  this.updateRenderer() as Point
}
}

 export class Coords{

 /**  */
 public get currentBoard():currentBoard {
  return _jsxBoard().currentBoard as currentBoard
}

 /**  */
 public get emitter():boolean {
  return _jsxBoard().emitter as boolean
}

 /**  */
 public get scrCoords():number[] {
  return _jsxBoard().scrCoords as number[]
}

 /**  */
 public get usrCoords():number[] {
  return _jsxBoard().usrCoords as number[]
}

 /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
 isReal(): Boolean {
  return  this.isReal() as Boolean
}

 /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
 setCoordinates(): Coords {
  return  this.setCoordinates() as Coords
}
}

 export class Curve extends GeometryElement {

 /**  */
 public get dataX():number[] {
  return _jsxBoard().dataX as number[]
}
 public set dataX(param:number[]) {
  _jsxBoard().dataX = param
}

 /**  */
 public get dataY():number[] {
  return _jsxBoard().dataY as number[]
}
 public set dataY(param:number[]) {
  _jsxBoard().dataY = param
}

 /**  */
 public get ticks():number[] {
  return _jsxBoard().ticks as number[]
}

 /** Allocate points in the Coords array this.points */
 allocatePoints(): number[] {
  return  this.allocatePoints() as number[]
}

 /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
 generateTerm(): number[] {
  return  this.generateTerm() as number[]
}

 /** Gives the default value of the right bound for the curve. */
 maxX(): number {
  return  this.maxX() as number
}

 /** Gives the default value of the left bound for the curve. */
 minX(): number {
  return  this.minX() as number
}

 /** Shift the curve by the vector 'where'. */
 moveTo(): Curve {
  return  this.moveTo() as Curve
}

 /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
 notifyParents(): Curve {
  return  this.notifyParents() as Curve
}

 /** Computes the curve path */
 updateCurve(): Curve {
  return  this.updateCurve() as Curve
}

 /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
 updateDataArray(func:Function): void {
  return  this.updateDataArray(func) as void
}

 /** Updates the visual contents of the curve. */
 updateRenderer() : Curve {
  return  this.updateRenderer() as Curve
}

 /** Applies the transformations of the curve to the given point p. */
 updateTransform(): Point {
  return  this.updateTransform() as Point
}

 /** The parametric function which defines the x-coordinate of the curve. */
 X(): number {
  return  this.X() as number
}

 /** The parametric function which defines the y-coordinate of the curve. */
 Y(): number {
  return  this.Y() as number
}

 /** Treat the curve as curve with homogeneous coordinates. */
 Z(): number {
  return  this.Z() as number
}
}

 export class Curve3D extends Curve {

 /**  */
 addTransform(other:ParametricSurface3D,transforms:Transform3D[]): Curve3D {
  return  this.addTransform(other,transforms) as Curve3D
}

 /** Function which maps u to x; i.e. */
 X(): number {
  return  this.X() as number
}

 /** Function which maps u to y; i.e. */
 Y(): number {
  return  this.Y() as number
}

 /** Function which maps u to z; i.e. */
 Z(): number {
  return  this.Z() as number
}
}

 export class Dump{

 /** Adds markers to every element of the board */
 addMarkers(): Dump {
  return  this.addMarkers() as Dump
}

 /** Converts an array of different values into a parameter string that can be used by the code generators. */
 arrayToParamStr(): Dump {
  return  this.arrayToParamStr() as Dump
}

 /** Removes markers from every element on the board. */
 deleteMarkers(): Dump {
  return  this.deleteMarkers() as Dump
}

 /** Generate a save-able structure with all elements. */
 dump(): Dump {
  return  this.dump() as Dump
}

 /** Eliminate default values given by JXG.Options from the attributes object. */
 minimizeObject(): Dump {
  return  this.minimizeObject() as Dump
}

 /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
 prepareAttributes(): Dump {
  return  this.prepareAttributes() as Dump
}

 /** Stringifies a string, i.e. */
 str(): Dump {
  return  this.str() as Dump
}

 /** Saves the construction in board to JavaScript. */
 toJavaScript(): Dump {
  return  this.toJavaScript() as Dump
}

 /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
 toJCAN(): Dump {
  return  this.toJCAN() as Dump
}

 /** Saves the construction in board to JessieCode. */
 toJessie(): Dump {
  return  this.toJessie() as Dump
}
}

 export class ForeignObject extends GeometryElement {

 /**  */
 public get content():number[] {
  return _jsxBoard().content as number[]
}

 /**  */
 public get size():number[] {
  return _jsxBoard().size as number[]
}

 /** Returns the height of the foreignObject in user coordinates. */
 H(): number {
  return  this.H() as number
}

 /** Checks whether (x,y) is over or near the image; */
 hasPoint(): Boolean {
  return  this.hasPoint() as Boolean
}

 /** Set the width and height of the foreignObject. */
 setSize(): ForeignObject {
  return  this.setSize() as ForeignObject
}

 /** Returns the width of the foreignObject in user coordinates. */
 W(): number {
  return  this.W() as number
}
}

 export class Group extends Composition {

 /**  */
 public get coords():Object {
  return _jsxBoard().coords as Object
}

 /** Adds all points in a group to this group. */
 addGroup(group:Group): Group {
  return  this.addGroup(group) as Group
}

 /** Adds ids of elements to the array this.parents. */
 addParents(parents:GeometryElement[]): Object {
  return  this.addParents(parents) as Object
}

 /** Adds an Point to this group. */
 addPoint(point:Point|pointAddr|Image): Group {
  return  this.addPoint(point) as Group
}

 /** Adds multiple points to this group. */
 addPoints(points:Point[]): Group {
  return  this.addPoints(points) as Group
}

 /** Adds a point to the set of rotation points of the group. */
 addRotationPoint(point:Point): Group {
  return  this.addRotationPoint(point) as Group
}

 /** Adds a point to the set of the scale points of the group. */
 addScalePoint(point:Point,direction:number|Function): Group {
  return  this.addScalePoint(point,direction) as Group
}

 /** Adds a point to the set of the translation points of the group. */
 addTranslationPoint(point:Point): Group {
  return  this.addTranslationPoint(point) as Group
}

 /** List of the element ids resp. */
 getParents(): number[] {
  return  this.getParents() as number[]
}

 /** Removes a point from the group. */
 removePoint(point:Point): Group {
  return  this.removePoint(point) as Group
}

 /** Removes the rotation property from a point of the group. */
 removeRotationPoint(point:Point): Group {
  return  this.removeRotationPoint(point) as Group
}

 /** Removes the scaling property from a point of the group. */
 removeScalePoint(point:Point): Group {
  return  this.removeScalePoint(point) as Group
}

 /** Removes the translation property from a point of the group. */
 removeTranslationPoint(point:Point): Group {
  return  this.removeTranslationPoint(point) as Group
}

 /** Sets the center of rotation for the group. */
 setRotationCenter(pivot:Point|pointAddr|"centroid"): Group {
  return  this.setRotationCenter(pivot) as Group
}

 /** Sets the rotation points of the group. */
 setRotationPoints(points:Point|Point[]): Group {
  return  this.setRotationPoints(points) as Group
}

 /** Sets the center of scaling for the group. */
 setScaleCenter(point:Point|pointAddr): Group {
  return  this.setScaleCenter(point) as Group
}

 /** Sets the scale points of the group. */
 setScalePoints(points:Point|Point[]): Group {
  return  this.setScalePoints(points) as Group
}

 /** Sets the translation points of the group. */
 setTranslationPoints(points:Point|Point[]): Group {
  return  this.setTranslationPoints(points) as Group
}

 /** Releases all elements of this group. */
 ungroup(): Group {
  return  this.ungroup() as Group
}
}

 export class Image extends GeometryElement {

 /**  */
 public get size():number[] {
  return _jsxBoard().size as number[]
}

 /**  */
 public get url():string {
  return _jsxBoard().url as string
}

 /** Returns the height of the image in user coordinates. */
 H(): number {
  return  this.H() as number
}

 /** Checks whether (x,y) is over or near the image; */
 hasPoint(): Boolean {
  return  this.hasPoint() as Boolean
}

 /** Set the width and height of the image. */
 setSize(): GeometryElement {
  return  this.setSize() as GeometryElement
}

 /** Returns the width of the image in user coordinates. */
 W(): number {
  return  this.W() as number
}
}

 export class Implicitcurve extends GeometryElement {
}

 export class IntersectionCircle3D extends GeometryElement3D {
}

 export class IntersectionLine3D extends GeometryElement3D {
}

 export class Line3D extends GeometryElement3D {

 /**  */
 public get direction():number[]|Function {
  return _jsxBoard().direction as number[]|Function
}

 /**  */
 public get point():Point3D {
  return _jsxBoard().point as Point3D
}

 /**  */
 public get point1():Point3D {
  return _jsxBoard().point1 as Point3D
}

 /**  */
 public get point2():Point3D {
  return _jsxBoard().point2 as Point3D
}

 /**  */
 public get range():number[] {
  return _jsxBoard().range as number[]
}
}

 export class Plane3D extends GeometryElement3D {

 /**  */
 public get d():number[] {
  return _jsxBoard().d as number[]
}

 /**  */
 public get direction1():number[]|Function {
  return _jsxBoard().direction1 as number[]|Function
}

 /**  */
 public get direction2():number[]|Function {
  return _jsxBoard().direction2 as number[]|Function
}

 /**  */
 public get normal():number[] {
  return _jsxBoard().normal as number[]
}

 /**  */
 public get point():Point3D {
  return _jsxBoard().point as Point3D
}

 /**  */
 public get range1():number[] {
  return _jsxBoard().range1 as number[]
}

 /**  */
 public get range2():number[] {
  return _jsxBoard().range2 as number[]
}

 /**  */
 public get vec1():number[] {
  return _jsxBoard().vec1 as number[]
}

 /**  */
 public get vec2():number[] {
  return _jsxBoard().vec2 as number[]
}

 /**  */
 public get vec3():number[] {
  return _jsxBoard().vec3 as number[]
}

 /** Get coordinate array [x, y, z] of a point on the plane for parameters (u, v). */
 F(u:number, v:number): number[] {
  return  this.F(u, v) as number[]
}

 /** Get x-coordinate of a point on the plane for parameters (u, v). */
 X(u:number, v:number): number {
  return  this.X(u, v) as number
}

 /** Get y-coordinate of a point on the plane for parameters (u, v). */
 Y(u:number, v:number): number {
  return  this.Y(u, v) as number
}

 /** Get z-coordinate of a point on the plane for parameters (u, v). */
 Z(u:number, v:number): number {
  return  this.Z(u, v) as number
}
}

 export class Point3D extends GeometryElement3D {

 /**  */
 public get slide():GeometryElement3D {
  return _jsxBoard().slide as GeometryElement3D
}

 /** Set the position of a 3D point. */
 setPosition(coords:number[],noEvent:boolean=true): Point3D {
  return  this.setPosition(coords,noEvent) as Point3D
}

 /** Get x-coordinate of a 3D point. */
 X(): number {
  return  this.X() as number
}

 /** Get y-coordinate of a 3D point. */
 Y(): number {
  return  this.Y() as number
}

 /** Get z-coordinate of a 3D point. */
 Z(): number {
  return  this.Z() as number
}

 /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.    EG:
                        
```js 

P.moveTo([A.X(), A.Y()], 5000)

``` */
 moveTo(p:number[]|Function,time:number=0,options?:MoveToOptions): Promise<any> {
  return  this.moveTo(p,time,options) as Promise<any>
}
}

 export class Polygon extends GeometryElement {

 /** Attributes for the polygon border lines. */
 public get borders():Line[] {
  return _jsxBoard().borders as Line[]
}

 /** Attributes for the polygon vertices. */
 public get vertices():Point[] {
  return _jsxBoard().vertices as Point[]
}

 /** Checks whether (x,y) is near the polygon. */
 hasPoint(x:number,y:number): Boolean {
  return  this.hasPoint(x,y) as Boolean
}

 /** Uses the boards renderer to update the polygon. */
 updateRenderer(): Polygon {
  return  this.updateRenderer() as Polygon
}
}

 export class Polygon3D extends GeometryElement3D {
}

 export class Text extends GeometryElement {

 /**  */
 public get size():number[] {
  return _jsxBoard().size as number[]
}

 /**  */
 setAttribute(attrs:TextAttributes): void {
  return  this.setAttribute(attrs) as void
}

 /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
 bounds(): number[] {
  return  this.bounds() as number[]
}

 /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
 crudeSizeEstimate(): number[] {
  return  this.crudeSizeEstimate() as number[]
}

 /** Returns the value of the attribute ”anchorX”. */
 getAnchorX(): number {
  return  this.getAnchorX() as number
}

 /** Returns the value of the attribute ”anchorY”. */
 getAnchorY(): number {
  return  this.getAnchorY() as number
}

 /** Return the width of the text element. */
 getSize(): number[] {
  return  this.getSize() as number[]
}

 /** Replace _{} by <sub> */
 replaceSub(): string {
  return  this.replaceSub() as string
}

 /** Replace ^{} by <sup> */
 replaceSup(): string {
  return  this.replaceSup() as string
}

 /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
 setAutoPosition(): Text {
  return  this.setAutoPosition() as Text
}

 /** Move the text to new coordinates. */
 setCoords(x:number,y:number): object {
  return  this.setCoords(x,y) as object
}

 /** Defines new content. */
 setText(newText:string): Text {
  return  this.setText(newText) as Text
}

 /** Defines new content but converts < and > to HTML entities before updating the DOM. */
 setTextJessieCode(): this {
  return  this.setTextJessieCode() as this
}

 /** Evaluates the text. */
 update(): this {
  return  this.update() as this
}

 /** Recompute the width and the height of the text box. */
 updateSize(): this {
  return  this.updateSize() as this
}

 /** Decode unicode entities into characters. */
 utf8_decode(): string {
  return  this.utf8_decode() as string
}
}

 export class Text3D extends Text {

 /** Set the position of a 3D point. If `noEvent` true, then no events are triggered. */
 setPosition(coords:number[],noEvent:boolean=false): Text3D {
  return  this.setPosition(coords,noEvent) as Text3D
}
}

 export class Ticks extends GeometryElement {

 /**  */
 public get equidistant():Boolean {
  return _jsxBoard().equidistant as Boolean
}

 /**  */
 public get fixedTicks():number[] {
  return _jsxBoard().fixedTicks as number[]
}

 /**  */
 public get labelCounter():number {
  return _jsxBoard().labelCounter as number
}

 /** User defined labels for special ticks. */
 public get labels():number[] {
  return _jsxBoard().labels as number[]
}

 /**  */
 public get labelsData():number[] {
  return _jsxBoard().labelsData as number[]
}

 /**  */
 public get line():Line {
  return _jsxBoard().line as Line
}

 /**  */
 public get ticks():number[] {
  return _jsxBoard().ticks as number[]
}

 /** Formats label texts to make labels displayed in scientific notation look beautiful. */
 beautifyScientificNotationLabel(): String {
  return  this.beautifyScientificNotationLabel() as String
}

 /** Checks whether (x,y) is near the line. */
 hasPoint(): Boolean {
  return  this.hasPoint() as Boolean
}

 /** Sets x and y coordinate of the tick. */
 setPositionDirectly(): Point {
  return  this.setPositionDirectly() as Point
}

 /** Uses the boards renderer to update the arc. */
 updateRenderer(): Ticks {
  return  this.updateRenderer() as Ticks
}
}

 export class Turtle extends GeometryElement {

 /** Move the turtle backwards. */
 back(): Turtle {
  return  this.back() as Turtle
}

 /** Alias for JXG.Turtle#back */
 bk(): Turtle {
  return  this.bk() as Turtle
}

 /** Removes the turtle curve from the board. */
 clean(): Turtle {
  return  this.clean() as Turtle
}

 /** Removes the turtle completely and resets it to its initial position and direction. */
 clearScreen(): Turtle {
  return  this.clearScreen() as Turtle
}

 /** Alias for JXG.Turtle#clearScreen */
 cs(): number {
  return  this.cs() as number
}

 /** The ”co”-coordinate of the turtle curve at position t is returned. */
 evalAt(): number {
  return  this.evalAt() as number
}

 /** Alias for JXG.Turtle#forward */
 fd(): Turtle {
  return  this.fd() as Turtle
}

 /** Move the turtle forward. */
 forward(): Turtle {
  return  this.forward() as Turtle
}

 /** Get most recently set turtle color. */
 getHighlightPenColor(): Boolean {
  return  this.getHighlightPenColor() as Boolean
}

 /** Get most recently set turtle color. */
 getPenColor(): Boolean {
  return  this.getPenColor() as Boolean
}

 /** Get most recently set turtle size (in pixel). */
 getPenSize(): Boolean {
  return  this.getPenSize() as Boolean
}

 /** Checks whether (x,y) is near the curve. */
 hasPoint(): Boolean {
  return  this.hasPoint() as Boolean
}

 /** Sets the visibility of the turtle head to false, */
 hideTurtle(): Turtle {
  return  this.hideTurtle() as Turtle
}

 /** Moves the turtle to position [0,0]. */
 home(): Turtle {
  return  this.home() as Turtle
}

 /** Alias for JXG.Turtle#hideTurtle */
 ht(): Turtle {
  return  this.ht() as Turtle
}

 /** Rotate the turtle direction to the right. */
 left(): Turtle {
  return  this.left() as Turtle
}

 /** Rotates the turtle into a new direction. */
 lookTo(): Turtle {
  return  this.lookTo() as Turtle
}

 /** Alias for JXG.Turtle#left */
 lt(): Turtle {
  return  this.lt() as Turtle
}

 /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
 maxX(): Turtle {
  return  this.maxX() as Turtle
}

 /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
 minX(): Turtle {
  return  this.minX() as Turtle
}

 /** Moves the turtle to a given coordinate pair. */
 moveTo(): Turtle {
  return  this.moveTo() as Turtle
}

 /** Alias for JXG.Turtle#penDown */
 pd(): Turtle {
  return  this.pd() as Turtle
}

 /** Pen down, continues visible drawing */
 penDown(): Turtle {
  return  this.penDown() as Turtle
}

 /** Pen up, stops visible drawing */
 penUp(): Turtle {
  return  this.penUp() as Turtle
}

 /** Alias for JXG.Turtle#popTurtle */
 pop(): Turtle {
  return  this.pop() as Turtle
}

 /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
 popTurtle(): Turtle {
  return  this.popTurtle() as Turtle
}

 /** Alias for JXG.Turtle#penUp */
 pu(): Turtle {
  return  this.pu() as Turtle
}

 /** Alias for JXG.Turtle#pushTurtle */
 push(): Turtle {
  return  this.push() as Turtle
}

 /** Pushes the position of the turtle on the stack. */
 pushTurtle(): Turtle {
  return  this.pushTurtle() as Turtle
}

 /** Rotate the turtle direction to the right */
 right(): Turtle {
  return  this.right() as Turtle
}

 /** Alias for JXG.Turtle#right */
 rt(): Turtle {
  return  this.rt() as Turtle
}

 /** Sets the highlight pen color. */
 setHighlightPenColor(): Turtle {
  return  this.setHighlightPenColor() as Turtle
}

 /** Sets the pen color. */
 setPenColor(): Turtle {
  return  this.setPenColor() as Turtle
}

 /** Sets the pen size. */
 setPenSize(): Turtle {
  return  this.setPenSize() as Turtle
}

 /** Moves the turtle without drawing to a new position */
 setPos(): Turtle {
  return  this.setPos() as Turtle
}

 /** Sets the visibility of the turtle head to true, */
 showTurtle(): Turtle {
  return  this.showTurtle() as Turtle
}

 /** Alias for JXG.Turtle#showTurtle */
 st(): number {
  return  this.st() as number
}

 /** if t is not supplied the x-coordinate of the turtle is returned. */
 X(): number {
  return  this.X() as number
}

 /** if t is not supplied the y-coordinate of the turtle is returned. */
 Y(): number {
  return  this.Y() as number
}

 /**  */
 Z(): number {
  return  this.Z() as number
}
}

 export class Sector extends Curve {

 /**  */
 public get point1():Point {
  return _jsxBoard().point1 as Point
}

 /**  */
 public get point2():Point {
  return _jsxBoard().point2 as Point
}

 /**  */
 public get point3():Point {
  return _jsxBoard().point3 as Point
}

 /**  */
 public get point4():Point {
  return _jsxBoard().point4 as Point
}

 /** Checks whether (x,y) is within the area defined by the sector. */
 hasPointSector(): Boolean {
  return  this.hasPointSector() as Boolean
}

 /** Returns the radius of the sector. */
 Radius(): number {
  return  this.Radius() as number
}
}

 export class Vectorfield extends Curve {

 /** Set the defining functions of vector field. */
 setF(): Object {
  return  this.setF() as Object
}
}

 export class Angle extends Sector {

 /**  */
 public get point():Point {
  return _jsxBoard().point as Point
}

 /** Frees an angle from a prescribed value. */
 free(): Object {
  return  this.free() as Object
}

 /** Set an angle to a prescribed value given in radians. */
 setAngle(angle:number|Function): Object {
  return  this.setAngle(angle) as Object
}

 /** Returns the value of the angle. */
 Value(): number {
  return  this.Value() as number
}
}

 export class Arc extends Curve {

 /**  */
 public get anglepoint():Point {
  return _jsxBoard().anglepoint as Point
}

 /**  */
 public get radiuspoint():Point {
  return _jsxBoard().radiuspoint as Point
}

 /**  */
 getRadius(): number {
  return  this.getRadius() as number
}

 /** Checks whether (x,y) is within the sector defined by the arc. */
 hasPointSector(): Boolean {
  return  this.hasPointSector() as Boolean
}

 /** Determines the arc's current radius. */
 Radius(): number {
  return  this.Radius() as number
}

 /** Returns the length of the arc or the value of the angle spanned by the arc. */
 Value(): number {
  return  this.Value() as number
}
}

 export class Arrow extends Line {
}

 export class Parallel extends Line {
}

 export class Arrowparallel extends Parallel {
}

 export class Axis extends Line {

 /**  */
 public get defaultTicks():Ticks {
  return _jsxBoard().defaultTicks as Ticks
}
}

 export class BezierCurve extends Curve {
}

 export class Bisector extends Line {
}

 export class Bisectorlines extends Composition {
}

 export class Button extends Text {

 /**  */
 public get rendNodeButton():HTMLButtonElement {
  return _jsxBoard().rendNodeButton as HTMLButtonElement
}

 /**  */
 setAttribute(attrs:ButtonAttributes): void {
  return  this.setAttribute(attrs) as void
}
}

 export class Cardinalspline extends Curve {
}

 export class Checkbox extends Text {

 /**  */
 setAttribute(attrs:CheckboxAttributes): void {
  return  this.setAttribute(attrs) as void
}

 /** Returns the value of the checkbox element */
 Value(): Boolean {
  return  this.Value() as Boolean
}

 /**  */
 onChange(action:Function): void {
  (window as any).JXG.addEvent((this as any).rendNodeCheckbox,`change`,action) as void
}
}

 export class Circumcenter extends Point {
}

 export class Circumcircle extends Circle {
}

 export class CircumcircleArc extends Arc {
}

 export class CircumcircleSector extends Sector {

 /**  */
 public get center():Circumcenter {
  return _jsxBoard().center as Circumcenter
}
}

 export class Comb extends Curve {
}

 export class Conic extends Curve {
}

 export class CurveDifference extends Curve {
}

 export class CurveIntersection extends Curve {
}

 export class CurveUnion extends Curve {
}

 export class Derivative extends Curve {
}

 export class Ellipse extends Conic {
}

 export class ParametricSurface3D extends Curve3D {
}

 export class Face3D extends Curve {

 /**  */
 public get dataX():number[] {
  return _jsxBoard().dataX as number[]
}

 /**  */
 public get dataY():number[] {
  return _jsxBoard().dataY as number[]
}

 /**  */
 public get dataZ():number[] {
  return _jsxBoard().dataZ as number[]
}
}

 export class Functiongraph extends Curve {
}

 export class Functiongraph3D extends ParametricSurface3D {
}

 export class Glider extends Point {
}

 export class Glider3D extends Point3D {
}

 export class Grid extends Curve {
}

 export class Hatch extends Ticks {

 /**  */
 public get ticksDistance():number {
  return _jsxBoard().ticksDistance as number
}
}

 export class Hyperbola extends Conic {
}

 export class Incenter extends Point {
}

 export class Incircle extends Circle {
}

 export class Inequality extends Curve {
}

 export class Input extends Text {

 /**  */
 public get rendNodeInput():HTMLInputElement {
  return _jsxBoard().rendNodeInput as HTMLInputElement
}

 /** Sets value of the input element. */
 set(value:String): GeometryElement {
  return  this.set(value) as GeometryElement
}

 /** Returns the value (content) of the input element */
 Value(): string {
  return  this.Value() as string
}
}

 export class Integral extends Curve {

 /** Attributes of the (left) base point of the integral. */
 public get baseLeft():Point {
  return _jsxBoard().baseLeft as Point
}

 /** Attributes of the (right) base point of the integral. */
 public get baseRight():Point {
  return _jsxBoard().baseRight as Point
}

 /** Attributes of the (left) starting point of the integral. */
 public get curveLeft():Point {
  return _jsxBoard().curveLeft as Point
}

 /** Attributes of the (right) end point of the integral. */
 public get curveRight():Point {
  return _jsxBoard().curveRight as Point
}

 /** Returns the current value of the integral. */
 Value(): Point {
  return  this.Value() as Point
}
}

 export class Intersection extends Point {
}

 export class Label extends Text {
}

 export class Legend extends GeometryElement {

 /**  */
 public get labels():number[] {
  return _jsxBoard().labels as number[]
}

 /**  */
 public get rowHeight():number {
  return _jsxBoard().rowHeight as number
}

 /**  */
 public get style():String {
  return _jsxBoard().style as String
}
}

 export class Locus extends Curve {

 /**  */
 public get ctime():number {
  return _jsxBoard().ctime as number
}

 /**  */
 public get eq():String {
  return _jsxBoard().eq as String
}
}

 export class MajorArc extends Curve {
}

 export class MajorSector extends Curve {
}

 export class Measurement extends Text {
}

 export class Mesh3D extends Curve {
}

 export class Midpoint extends Point {
}

 export class MinorArc extends Curve {
}

 export class MinorSector extends Curve {
}

 export class Mirrorelement extends GeometryElement {
}

 export class Mirrorpoint extends Point {
}

 export class NonReflexAngle extends Angle {
}

 export class Normal extends Line {
}

 export class Orthogonalprojection extends Point {
}

 export class OtherIntersection extends Point {
}

 export class Parabola extends Conic {
}

 export class Parallelpoint extends Point {
}

 export class Segment extends Line {
}

 export class Parallelogram extends Polygon {
}

 export class Perpendicular extends Segment {
}

 export class PerpendicularPoint extends Point {
}

 export class PerpendicularSegment extends Segment {

 /**  */
 public get point():PerpendicularPoint {
  return _jsxBoard().point as PerpendicularPoint
}
}

 export class PolarLine extends Line {
}

 export class PolePoint extends Point {
}

 export class PolygonalChain extends Polygon {
}

 export class Polyhedron3D extends GeometryElement3D {

 /**  */
 public get def():number[][] {
  return _jsxBoard().def as number[][]
}

 /**  */
 public get faces():Face3D[] {
  return _jsxBoard().faces as Face3D[]
}

 /**  */
 public get numberFaces():number {
  return _jsxBoard().numberFaces as number
}
}

 export class RadicalAxis extends Line {
}

 export class Reflection extends GeometryElement {
}

 export class ReflexAngle extends Angle {
}

 export class RegularPolygon extends Polygon {
}

 export class Riemannsum extends Curve {

 /** Returns the value of the Riemann sum, i.e. */
 Value(): number {
  return  this.Value() as number
}
}

 export class Semicircle extends Arc {

 /**  */
 public get midpoint():Midpoint {
  return _jsxBoard().midpoint as Midpoint
}
}

 export class Slider extends Glider {

 /** Sets the maximum value of the slider. */
 setMax(value:number): Object {
  return  this.setMax(value) as Object
}

 /** Sets the minimum value of the slider. */
 setMin(value:number): Object {
  return  this.setMin(value) as Object
}

 /** Sets the value of the slider. */
 setValue(value:number): Object {
  return  this.setValue(value) as Object
}

 /** Returns the current slider value. */
 Value(): number {
  return  this.Value() as number
}

 /**  */
 on(event:string, action:Function): void {
  this.on(`event`,action) as void
}
}

 export class Slopefield extends Vectorfield {

 /** Set the defining functions of slope field. */
 setF(): Object {
  return  this.setF() as Object
}
}

 export class Slopetriangle extends Line {

 /** Returns the value of the slope triangle, that is the slope of the tangent. */
 Value(): number {
  return  this.Value() as number
}
}

 export class Smartlabel extends Text {
}

 export class Sphere3D extends GeometryElement3D {
}

 export class Spline extends Curve {
}

 export class Stepfunction extends Curve {
}

 export class Tangent extends Line {
}

 export class TangentTo extends Line {
}

 export class Tapemeasure extends Segment {

 /** Returns the length of the tape measure. */
 Value(): number {
  return  this.Value() as number
}
}

 export class Tracecurve extends Curve {
}

 export class Transform extends GeometryElement {

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
 point(fromPoint:Point,attributes:PointAttributes={}): Point {
  return _jsxBoard().create('point',[fromPoint, this],defaultAttributes(attributes)) as Point
}

 /**  */
 applyOnce(element:GeometryElement): void {
  return  this.applyOnce(element) as void
}

 /**  Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation, a call of currentBoard.update() has to follow. */
 bindTo(element:GeometryElement|GeometryElement[]): void {
  return  this.bindTo(element) as void
}

 /**  */
 setMatrix(): Transform {
  return  this.setMatrix() as Transform
}
}

 export class Transform3D extends GeometryElement3D {
}

 export class TransformPoint extends Point {
}

 export class TransformPoint3D extends Point3D {
}

 export class Segment3D extends Line3D {
}

 export class Translate extends Transform {
}

 export class Rotate extends Transform {
}

 export class Scale extends Transform {
}

 export class Translate3D extends Transform3D {
}

 export class Rotate3D extends Transform3D {
}

 export class RotateX3D extends Transform3D {
}

 export class RotateY3D extends Transform3D {
}

 export class RotateZ3D extends Transform3D {
}

 export class Scale3D extends Transform3D {
}}