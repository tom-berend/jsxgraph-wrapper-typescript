

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

     // match JSXGraph definition for JXG_Point3D, etc
        type NumberFunction = Number | Function

        /** A 'point' has a position in space.  The only characteristic that distinguishes one point from another is its position. */
        type pointAddr = NumberFunction[] | [number, number] | [number, Function] | [Function, number] | [Function | Function] // allow tuples or arrays
        type pointAddr3D =  NumberFunction[] // | [number | Function, number | Function, number | Function]  // either tuple or array
        let defaultAttrs: Object = {
    keepAspectRatio: true,
    name: '', showinfobox: false,
    pan: { enabled: false },
    resize: { enabled: false }
}




// to define 'matAny' (eg: 2x3 array) we need three steps
type arrayNumber = Number[]
type arrayNumber2 = arrayNumber | Number
type matAny = arrayNumber2[]





export interface ShaderInterface {
    enabled: Boolean,
    type: 'angle' | 'zIndex',
    hue: number,
    saturation: number,
    minlightness: number,
    maxLightness: number,
}

export interface MoveToOptions {
    callback?: Function,
    effect?: "==" | "<>" | "--" | "<" | ">",
    repeat?: number
}


export interface SelectionAttributes {
    enabled?: Boolean,
    name?: string,
    needShift?: Boolean,  // mouse selection needs pressing of the shift key
    needCtrl?: Boolean,    // mouse selection needs pressing of the shift key
    fillColor?: string,
}

export interface ScreenShotAttributes {
    scale?: number,
    type?: string,
    symbol?: '\u2318' | '\u22b9' | '\u26f6',
    css?: string,
    cssButton?: string,
}


///////////////////////////////////////////
///////  stuff for View3D elevation controls
export interface pointerControls {
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
export interface keyboardControls {
    /** specifies whether the keyboard (arrow keys) can be used to navigate the board.*/
    enabled?: Boolean
    /** Size of the step per keystroke. */
    step?: number
    /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
    key?: 'none' | 'shift' | 'ctrl'
}
export interface sliderControls {
    min?: number, // Minimum value.
    max?: number,  //Maximum value.
    start?: number, //Start value.
}

export interface screenControls {
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

export interface DisplayPoint {
    size?: Number
    face?: 'cross' | 'plus' | 'minus' | 'divide' | 'diamond' | 'triangledown' | 'triangleleft' | 'triangleright' | 'triangleup' | 'square' | 'circle'

}

export interface VertexAttributes {
    visible?: Boolean
}

export interface PanAttributes {
    /** allow panning */
    enabled?: Boolean
    /** panning is done with two fingers on touch devices */
    needTwoFingers?: Boolean
    /** mouse panning needs pressing of the shift key */
    needShift?: Boolean
}

export interface ZoomAttributes {
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
const COORDS_BY_USER = 0x0001
/**
*  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
*/
const COORDS_BY_SCREEN = 0x0002


// export interface JSXMathAttributes {
// }




// ///// some math classes by hand
//  class IntervalArithmetic {
// }
//  class PolyMonomial {
// }
//  class PolyPolynomial {
// }
//  class Symbolic {
// }






//////////
//////////            // this is the 'alternative mixins' pattern for TypeScript
//////////
//////////        /** use this to create mixins in Typescript.  Each mixin is a traditional ES class,
//////////         *  For example, to add classes Jumpable and Duckable to class Sprite, you add
//////////         * an export interface which merges the expected mixins using the same name as your base, and
//////////         * then apply the mixins at runtime.
//////////        ```js
//////////        class Jumpable {  jump() {}  }
//////////        class Duckable {  duck() {}  }
//////////        class Sprite { x = 0; y = 0; }   // base class
//////////        export interface Sprite extends Jumpable, Duckable {}
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




export type SpaceIcon =
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






 export interface GeometryElementAttributes  {
 /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to `inherit`. */
 showInfobox?: Boolean
 /** Sets an arbitrary number of attributes. */
 setAttribute?:Object
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
 

 export interface GeometryElement  {    // fields and methods

 //// fields 
 /** missing description */
 x: GeometryElement; 
 /** missing description */
 y: GeometryElement; 
 /** missing description */
 elType: String; 
 /** missing description */
 name: String; 
 /** missing description */
 isDraggable: Boolean; 

 //// methods 
 /** missing description */
 removeAllTicks(): Object; 
 /** missing description */
 addChild(): GeometryElement; 
 /** missing description */
 addParents(parents:GeometryElement[]): Object; 
 /** missing description */
 addRotation(): String; 
 /** missing description */
 addTicks(): String; 
 /** missing description */
 addTransform(element:GeometryElement,transforms:any|any[]): GeometryElement; 
 /** missing description */
 animate(): GeometryElement; 
 /** missing description */
 bounds(): number[]; 
 /** missing description */
 clearTrace(): GeometryElement; 
 /** missing description */
 cloneToBackground(): GeometryElement; 
 /** missing description */
 createLabel(): boolean; 
 /** missing description */
 formatNumberLocale(): string|number; 
 /** missing description */
 generatePolynomial(): number[]; 
 /** missing description */
 getAttribute(): Object; 
 /** missing description */
 getAttributes(): Object; 
 /** missing description */
 getName(): String; 
 /** missing description */
 getParents(): number[]; 
 /** missing description */
 getProperty(): number[]; 
 /** missing description */
 getType(): String; 
 /** missing description */
 handleSnapToGrid(): GeometryElement; 
 /** missing description */
 hide(): GeometryElement; 
 /** missing description */
 hideElement(): GeometryElement; 
 /** missing description */
 labelColor(): Board; 
 /** missing description */
 noHighlight(): Board; 
 /** missing description */
 remove(): Object; 
 /** missing description */
 removeChild(): Object; 
 /** missing description */
 removeEvent(): number; 
 /** missing description */
 removeTicks(): Object; 
 /** missing description */
 setArrow(): GeometryElement; 
 /** missing description */
 setAttribute(attrs:GeometryElementAttributes): void; 
 /** missing description */
 setLabel(txt:string): Object; 
 /** missing description */
 setLabelText(): Object; 
 /** missing description */
 setName(): Object; 
 /** missing description */
 setParents(): Object; 
 /** missing description */
 setPositionDirectly(method:number, coords:NumberFunction[], prevCoords?: NumberFunction[]): Point; 
 /** missing description */
 setProperty(): GeometryElement; 
 /** missing description */
 show(): GeometryElement; 
 /** missing description */
 showElement(): GeometryElement; 
 /** missing description */
 snapToPoints(): GeometryElement; 
 /** missing description */
 useLocale(): Boolean; 
 /** missing description */
 on(event:string,handler:Function): any; 
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
 

 export interface Board  {    // fields and methods

 //// fields 

 //// methods 
 }

 export interface PointAttributes extends GeometryElementAttributes {
 /** If the distance of the point to one of its attractors is less than this number the point will be a glider on this attracting element. If set to zero nothing happens. */
  attractorDistance?: number
 /** List of attractor elements. If the distance of the point is less than attractorDistance the point is made to glider of this element. */
  attractors?: Element[]
 /** Unit for attractorDistance and snatchDistance, used for magnetized points and for snapToPoints. Possible values are 'screen' and 'user'. */
  attractorUnit?: String
 /** If set to true, the point will only snap to (possibly invisibly) grid points when within Point#attractorDistance of such a grid point.The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
  attractToGrid?: Boolean
 /** List of elements which are ignored by snapToPoints. */
  ignoredSnapToPoints?: Element[]
 /** Truncating rule for the digits in the infobox.'auto': done automatically by JXG.autoDigits() 'none': no truncation number: truncate after ”number digits” with JXG.toFixed() */
  infoboxDigits?: String| number
 /** If true, the infobox is shown on mouse/pen over, if false not. If the value is 'inherit', the value of JXG.currentBoard#showInfobox is taken. */
  showInfobox?: Boolean
 /** There are different point styles which differ in appearance. */
  face?: 'o'|'line'|'point'|'cross'| 'plus' | 'minus' | 'divide'| 'diamond'| 'triangledown' | 'triangleleft' | 'triangleright'| 'triangleup' | 'square' |'circle' | string
 /** Size of a point, either in pixel or user coordinates. Means radius resp. half the width of a point (depending on the face). */
  size?: number|Function
 /** Unit for size. Possible values are 'screen' and 'user. */
  sizeUnit?: String
 /** Defines together with Point#snapSizeY the grid the point snaps on to. It is given in user coordinates, not in pixels. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the currentBoard. */
  snapSizeX?: number
 /** Defines together with Point#snapSizeX the grid the point snaps on to. It is given in user coordinates, not in pixels. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the currentBoard. */
  snapSizeY?: number
 /** If set to true, the point will snap to a grid of integer multiples of Point#snapSizeX and Point#snapSizeY (in user coordinates).The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
  snapToGrid?: Boolean
 /** If set to true, the point will snap to the nearest point in distance of Point#attractorDistance. */
  snapToPoints?: Boolean
 /** If the distance of the point to one of its attractors is at least this number the point will be released from being a glider on the attracting element. If set to zero nothing happens. */
  snatchDistance?: number
 /** This attribute was used to determined the point layout. It was derived from GEONExT and was replaced by Point#face and Point#size. */
  style?: number
 /** If true, the point size changes on zoom events. */
  zoom?: Boolean
}
 

 export interface Point extends GeometryElement {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 setAttribute(attrs:PointAttributes): void; 
 /** missing description */
 coords(): number[]; 
 /** missing description */
 startAnimation(direction:number,stepCount:number,delayMSec:number): void; 
 /** missing description */
 stopAnimation(): any; 
 /** missing description */
 Dist(toPoint:Point|pointAddr): number; 
 /** missing description */
 face(style:'cross'|'circle'|'square'|'plus'|'minus'|'diamond'): Boolean; 
 /** missing description */
 isOn(el:GeometryElement,tol:number): Boolean; 
 /** missing description */
 update(): number[]; 
 /** missing description */
 X(): number; 
 /** missing description */
 Y(): number; 
 /** missing description */
 Z(): number; 
 /** missing description */
 moveTo(p:number[]|Function[],time?:number, options?:VisitAttributes): Promise<any>; 
 /** missing description */
 visit(p:number[]|Function[],time?:number,options?: VisitAttributes): Promise<any>; 
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
 

 export interface Line extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 defaultTicks: Ticks; 
 /** missing description */
 parentPolygon: Polygon; 
 /** missing description */
 point1: Point; 
 /** missing description */
 point2: Point; 
 /** missing description */
 ticks: number[]; 

 //// methods 
 /** missing description */
 getAngle(): number; 
 /** missing description */
 getRise(): number; 
 /** missing description */
 getSlope(): number; 
 /** missing description */
 hasPoint(): Boolean; 
 /** missing description */
 L(): number; 
 /** missing description */
 Slope(): number; 
 /** missing description */
 X(): number; 
 /** missing description */
 Y(): number; 
 /** missing description */
 Z(): number; 
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
 

 export interface GeometryElement3D extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 element2D: number[]; 
 /** missing description */
 is3D: Boolean; 
 /** missing description */
 view: any; 
 /** missing description */
 strokeColor: String; 
 /** missing description */
 strokeWidth: number; 
 /** missing description */
 size: number; 
 /** missing description */
 fillColor: String; 
 /** missing description */
 visible: Boolean; 

 //// methods 
 /** missing description */
 setAttribute(attrs:GeometryElement3DAttributes): void; 
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
 

 export interface View3D extends GeometryElement3D {   // fields and methods

 //// fields 
 /** missing description */
 defaultAxes: Object; 
 /** missing description */
 matrix3D: Object; 

 //// methods 
 /** missing description */
 setView(azimuth:number,elevation:number,radius?:number): View3D; 
 /** missing description */
 animateAzimuth(): Object; 
 /** missing description */
 create(): Object; 
 /** missing description */
 intersectionLineCube(): number[]; 
 /** missing description */
 intersectionPlanePlane(): number[]; 
 /** missing description */
 isInCube(): number[]; 
 /** missing description */
 project2DTo3DPlane(): number[]; 
 /** missing description */
 project2DTo3DVertical(): number[]; 
 /** missing description */
 project3DTo2D(): number[]; 
 /** missing description */
 project3DToCube(): GeometryElement3D|Composition; 
 /** missing description */
 select(): GeometryElement3D|Composition; 
 /** missing description */
 stopAzimuth(): any; 
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
 

 export interface Chart extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 elements: any[]; 

 //// methods 
 /** missing description */
 drawBar(): any[]; 
 /** missing description */
 drawFit(): Curve; 
 /** missing description */
 drawLine(): Curve; 
 /** missing description */
 drawPie(): Object; 
 /** missing description */
 drawPoints(): number[]; 
 /** missing description */
 drawRadar(): Object; 
 /** missing description */
 drawSpline(): Curve; 
 /** missing description */
 updateDataArray(): Chart; 
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
 

 export interface Circle extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 center: Point; 
 /** missing description */
 circle: Circle; 
 /** missing description */
 line: Line; 
 /** missing description */
 method: string; 
 /** missing description */
 point2: Point; 
 /** missing description */
 radius: number; 

 //// methods 
 /** missing description */
 Area(): number; 
 /** missing description */
 Perimeter(): number; 
 /** missing description */
 Radius(): number; 
 /** missing description */
 X(): number; 
 /** missing description */
 Y(): number; 
 /** missing description */
 Z(): number; 
 }

 export interface Circle3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface Circle3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ComplexAttributes  {
}
 

 export interface Complex  {    // fields and methods

 //// fields 
 /** missing description */
 absval: number; 
 /** missing description */
 angle: number; 
 /** missing description */
 imaginary: number; 
 /** missing description */
 isComplex: Boolean; 
 /** missing description */
 real: number; 

 //// methods 
 /** missing description */
 add(): Complex; 
 /** missing description */
 conj(): Complex; 
 /** missing description */
 div(): Complex; 
 /** missing description */
 mult(): Complex; 
 /** missing description */
 sub(): Complex; 
 /** missing description */
 toString(): String; 
 }

 export interface CompositionAttributes  {
}
 

 export interface Composition  {    // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 add(): Boolean; 
 /** missing description */
 fullUpdate(): Boolean; 
 /** missing description */
 highlight(): Boolean; 
 /** missing description */
 noHighlight(): Boolean; 
 /** missing description */
 prepareUpdate(): Boolean; 
 /** missing description */
 remove(): Boolean; 
 /** missing description */
 setParents(): any; 
 /** missing description */
 updateRenderer(): Point; 
 }

 export interface CoordsAttributes  {
}
 

 export interface Coords  {    // fields and methods

 //// fields 
 /** missing description */
 currentBoard: Board; 
 /** missing description */
 emitter: boolean; 
 /** missing description */
 scrCoords: number[]; 
 /** missing description */
 usrCoords: number[]; 

 //// methods 
 /** missing description */
 isReal(): Boolean; 
 /** missing description */
 setCoordinates(): Coords; 
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
 

 export interface Curve extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 dataX: number[]; 
 /** missing description */
 dataY: number[]; 
 /** missing description */
 ticks: number[]; 

 //// methods 
 /** missing description */
 addTransform(base:GeometryElement,transforms:Transform[]): Curve; 
 /** missing description */
 allocatePoints(): number[]; 
 /** missing description */
 generateTerm(): number[]; 
 /** missing description */
 hasPoint(): Boolean; 
 /** missing description */
 maxX(): number; 
 /** missing description */
 minX(): number; 
 /** missing description */
 moveTo(): Curve; 
 /** missing description */
 notifyParents(): Curve; 
 /** missing description */
 update(): Curve; 
 /** missing description */
 updateCurve(): Curve; 
 /** missing description */
 updateDataArray(func:Function): void; 
 /** missing description */
 updateRenderer() : Curve; 
 /** missing description */
 updateTransform(): Point; 
 /** missing description */
 X(): number; 
 /** missing description */
 Y(): number; 
 /** missing description */
 Z(): number; 
 }

 export interface Curve3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface Curve3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 addTransform(other:ParametricSurface3D,transforms:Transform3D[]): Curve3D; 
 /** missing description */
 updateTransform(): void; 
 /** missing description */
 evalF(u:number): void; 
 /** missing description */
 F(u:number): void; 
 /** missing description */
 updateCoords(): void; 
 /** missing description */
 X(u:number): number; 
 /** missing description */
 Y(u:number): number; 
 /** missing description */
 Z(u:number): number; 
 }

 export interface DumpAttributes  {
}
 

 export interface Dump  {    // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 addMarkers(): Dump; 
 /** missing description */
 arrayToParamStr(): Dump; 
 /** missing description */
 deleteMarkers(): Dump; 
 /** missing description */
 dump(): Dump; 
 /** missing description */
 minimizeObject(): Dump; 
 /** missing description */
 prepareAttributes(): Dump; 
 /** missing description */
 str(): Dump; 
 /** missing description */
 toJavaScript(): Dump; 
 /** missing description */
 toJCAN(): Dump; 
 /** missing description */
 toJessie(): Dump; 
 }

 export interface ForeignObjectAttributes extends GeometryElementAttributes {
 /** List of attractor elements. If the distance of the ForeignObject is less than attractorDistance the ForeignObject is made to glider of this element. */
  attractors?: Element[]
}
 

 export interface ForeignObject extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 content: number[]; 
 /** missing description */
 size: number[]; 

 //// methods 
 /** missing description */
 H(): number; 
 /** missing description */
 hasPoint(): Boolean; 
 /** missing description */
 setSize(): ForeignObject; 
 /** missing description */
 W(): number; 
 }

 export interface GroupAttributes extends CompositionAttributes {
}
 

 export interface Group extends Composition {   // fields and methods

 //// fields 
 /** missing description */
 coords: Object; 

 //// methods 
 /** missing description */
 addGroup(group:Group): Group; 
 /** missing description */
 addParents(parents:GeometryElement[]): Object; 
 /** missing description */
 addPoint(point:Point|pointAddr|Image): Group; 
 /** missing description */
 addPoints(points:Point[]): Group; 
 /** missing description */
 addRotationPoint(point:Point): Group; 
 /** missing description */
 addScalePoint(point:Point,direction:number|Function): Group; 
 /** missing description */
 addTranslationPoint(point:Point): Group; 
 /** missing description */
 getParents(): number[]; 
 /** missing description */
 removePoint(point:Point): Group; 
 /** missing description */
 removeRotationPoint(point:Point): Group; 
 /** missing description */
 removeScalePoint(point:Point): Group; 
 /** missing description */
 removeTranslationPoint(point:Point): Group; 
 /** missing description */
 setRotationCenter(pivot:Point|pointAddr|"centroid"): Group; 
 /** missing description */
 setRotationPoints(points:Point|Point[]): Group; 
 /** missing description */
 setScaleCenter(point:Point|pointAddr): Group; 
 /** missing description */
 setScalePoints(points:Point|Point[]): Group; 
 /** missing description */
 setTranslationPoints(points:Point|Point[]): Group; 
 /** missing description */
 ungroup(): Group; 
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
 

 export interface Image extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 size: number[]; 
 /** missing description */
 url: string; 

 //// methods 
 /** missing description */
 H(): number; 
 /** missing description */
 hasPoint(): Boolean; 
 /** missing description */
 setSize(): GeometryElement; 
 /** missing description */
 W(): number; 
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
 

 export interface Implicitcurve extends GeometryElement {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface IntersectionCircle3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface IntersectionCircle3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface IntersectionLine3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface IntersectionLine3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface Line3D extends GeometryElement3D {   // fields and methods

 //// fields 
 /** missing description */
 direction: number[]|Function; 
 /** missing description */
 point: Point3D; 
 /** missing description */
 point1: Point3D; 
 /** missing description */
 point2: Point3D; 
 /** missing description */
 range: number[]; 

 //// methods 
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
 

 export interface Plane3D extends GeometryElement3D {   // fields and methods

 //// fields 
 /** missing description */
 d: number[]; 
 /** missing description */
 direction1: number[]|Function; 
 /** missing description */
 direction2: number[]|Function; 
 /** missing description */
 normal: number[]; 
 /** missing description */
 point: Point3D; 
 /** missing description */
 range1: number[]; 
 /** missing description */
 range2: number[]; 
 /** missing description */
 vec1: number[]; 
 /** missing description */
 vec2: number[]; 
 /** missing description */
 vec3: number[]; 

 //// methods 
 /** missing description */
 F(u:number, v:number): number[]; 
 /** missing description */
 X(u:number, v:number): number; 
 /** missing description */
 Y(u:number, v:number): number; 
 /** missing description */
 Z(u:number, v:number): number; 
 }

 export interface Point3DAttributes extends GeometryElement3DAttributes {
 /** Size in pixels */
 size?: number|Function
 /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
 fixed?: Boolean
}
 

 export interface Point3D extends GeometryElement3D {   // fields and methods

 //// fields 
 /** missing description */
 slide: GeometryElement3D; 

 //// methods 
 /** missing description */
 setPosition(coords:number[],noEvent:boolean): Point3D; 
 /** missing description */
 X(): number; 
 /** missing description */
 Y(): number; 
 /** missing description */
 Z(): number; 
 /** missing description */
 moveTo(p:number[]|Function,time?:number,options?:MoveToOptions): Promise<any>; 
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
 

 export interface Polygon extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 borders: Line[]; 
 /** missing description */
 vertices: Point[]; 

 //// methods 
 /** missing description */
 hasPoint(x:number,y:number): Boolean; 
 /** missing description */
 updateRenderer(): Polygon; 
 }

 export interface Polygon3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface Polygon3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface Text extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 size: number[]; 

 //// methods 
 /** missing description */
 setAttribute(attrs:TextAttributes): Object; 
 /** missing description */
 bounds(): number[]; 
 /** missing description */
 crudeSizeEstimate(): number[]; 
 /** missing description */
 getAnchorX(): number; 
 /** missing description */
 getAnchorY(): number; 
 /** missing description */
 getSize(): number[]; 
 /** missing description */
 replaceSub(): string; 
 /** missing description */
 replaceSup(): string; 
 /** missing description */
 setAutoPosition(): Text; 
 /** missing description */
 setCoords(x:number,y:number): object; 
 /** missing description */
 setText(newText:string): Text; 
 /** missing description */
 setTextJessieCode(): this; 
 /** missing description */
 update(): this; 
 /** missing description */
 updateSize(): this; 
 /** missing description */
 utf8_decode(): string; 
 }

 export interface Text3DAttributes extends TextAttributes {
}
 

 export interface Text3D extends Text {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 setPosition(coords:number[],noEvent:boolean): Text3D; 
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
 

 export interface Ticks extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 equidistant: Boolean; 
 /** missing description */
 fixedTicks: number[]; 
 /** missing description */
 labelCounter: number; 
 /** missing description */
 labels: number[]; 
 /** missing description */
 labelsData: number[]; 
 /** missing description */
 line: Line; 
 /** missing description */
 ticks: number[]; 

 //// methods 
 /** missing description */
 beautifyScientificNotationLabel(): String; 
 /** missing description */
 hasPoint(): Boolean; 
 /** missing description */
 setPositionDirectly(): Point; 
 /** missing description */
 updateRenderer(): Ticks; 
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
 

 export interface Sector extends Curve {   // fields and methods

 //// fields 
 /** missing description */
 point1: Point; 
 /** missing description */
 point2: Point; 
 /** missing description */
 point3: Point; 
 /** missing description */
 point4: Point; 

 //// methods 
 /** missing description */
 hasPointSector(): Boolean; 
 /** missing description */
 Radius(): number; 
 }

 export interface VectorfieldAttributes extends CurveAttributes {
 /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
  arrowhead?: Object
 /** Scaling factor of the vectors. This in contrast to slope fields, where this attribute sets the vector to the given length. */
  scale?: Object
}
 

 export interface Vectorfield extends Curve {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 setF(): Object; 
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
 

 export interface Angle extends Sector {   // fields and methods

 //// fields 
 /** missing description */
 point: Point; 

 //// methods 
 /** missing description */
 free(): Object; 
 /** missing description */
 setAngle(angle:number|Function): Object; 
 /** missing description */
 Value(): number; 
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
 

 export interface Arc extends Curve {   // fields and methods

 //// fields 
 /** missing description */
 anglepoint: Point; 
 /** missing description */
 radiuspoint: Point; 

 //// methods 
 /** missing description */
 getRadius(): number; 
 /** missing description */
 hasPointSector(): Boolean; 
 /** missing description */
 Radius(): number; 
 /** missing description */
 Value(): number; 
 }

 export interface ArrowAttributes extends LineAttributes {
}
 

 export interface Arrow extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ParallelAttributes extends LineAttributes {
 /** Attributes of helper point of normal. */
  point?: Point
}
 

 export interface Parallel extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ArrowparallelAttributes extends ParallelAttributes {
}
 

 export interface Arrowparallel extends Parallel {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface AxisAttributes extends LineAttributes {
 /** Attributes for the axis label. */
  label?: LabelAttributes
 /** Attributes for first point the axis. */
  point1?: PointAttributes
 /** Attributes for second point the axis. */
  point2?: PointAttributes
}
 

 export interface Axis extends Line {   // fields and methods

 //// fields 
 /** missing description */
 defaultTicks: Ticks; 

 //// methods 
 }

 export interface BezierCurveAttributes extends CurveAttributes {
}
 

 export interface BezierCurve extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface BisectorAttributes extends LineAttributes {
 /** Attributes for the helper point of the bisector. */
  point?: Point
}
 

 export interface Bisector extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface BisectorlinesAttributes extends CompositionAttributes {
 /** Attributes for first line. */
  line1?: Line
 /** Attributes for second line. */
  line2?: Line
}
 

 export interface Bisectorlines extends Composition {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ButtonAttributes extends TextAttributes {
 /** Control the attribute ”disabled” of the HTML button. */
  disabled?: Boolean|Function
}
 

 export interface Button extends Text {   // fields and methods

 //// fields 
 /** missing description */
 rendNodeButton: HTMLButtonElement; 

 //// methods 
 }

 export interface CardinalsplineAttributes extends CurveAttributes {
 /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
  createPoints?: Boolean
 /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
  isArrayOfCoordinates?: Boolean
 /** Attributes for the points generated by Cardinalspline in cases createPoints is set to true */
  points?: Object
}
 

 export interface Cardinalspline extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CheckboxAttributes extends TextAttributes {
 /** Control the attribute ”checked” of the HTML checkbox. */
  checked?: Boolean
 /** Control the attribute ”disabled” of the HTML checkbox. */
  disabled?: Boolean
}
 

 export interface Checkbox extends Text {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 Value(): Boolean; 
 /** missing description */
 onChange(action:Function): void; 
 }

 export interface CircumcenterAttributes extends PointAttributes {
}
 

 export interface Circumcenter extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CircumcircleAttributes extends CircleAttributes {
 /** Attributes for center point. */
  center?:  GeometryElementAttributes
}
 

 export interface Circumcircle extends Circle {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CircumcircleArcAttributes extends ArcAttributes {
 /** Attributes for center point. */
  center?: Point
}
 

 export interface CircumcircleArc extends Arc {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CircumcircleSectorAttributes extends SectorAttributes {
}
 

 export interface CircumcircleSector extends Sector {   // fields and methods

 //// fields 
 /** missing description */
 center: Circumcenter; 

 //// methods 
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
 

 export interface Comb extends Curve {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface Conic extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CurveDifferenceAttributes extends CurveAttributes {
}
 

 export interface CurveDifference extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CurveIntersectionAttributes extends CurveAttributes {
}
 

 export interface CurveIntersection extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface CurveUnionAttributes extends CurveAttributes {
}
 

 export interface CurveUnion extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface DerivativeAttributes extends CurveAttributes {
}
 

 export interface Derivative extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface EllipseAttributes extends ConicAttributes {
}
 

 export interface Ellipse extends Conic {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ParametricSurface3DAttributes extends Curve3DAttributes {
 /** number of intervals the mesh is divided into in direction of parameter u. */
  stepsU?: number
 /** number of intervals the mesh is divided into in direction of parameter v. */
  stepsV?: number
}
 

 export interface ParametricSurface3D extends Curve3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Face3DAttributes extends CurveAttributes {
}
 

 export interface Face3D extends Curve {   // fields and methods

 //// fields 
 /** missing description */
 dataX: number[]; 
 /** missing description */
 dataY: number[]; 
 /** missing description */
 dataZ: number[]; 

 //// methods 
 }

 export interface FunctiongraphAttributes extends CurveAttributes {
}
 

 export interface Functiongraph extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Functiongraph3DAttributes extends ParametricSurface3DAttributes {
}
 

 export interface Functiongraph3D extends ParametricSurface3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface GliderAttributes extends PointAttributes {
}
 

 export interface Glider extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Glider3DAttributes extends Point3DAttributes {
}
 

 export interface Glider3D extends Point3D {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface Grid extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface HatchAttributes extends TicksAttributes {
}
 

 export interface Hatch extends Ticks {   // fields and methods

 //// fields 
 /** missing description */
 ticksDistance: number; 

 //// methods 
 }

 export interface HyperbolaAttributes extends ConicAttributes {
}
 

 export interface Hyperbola extends Conic {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface IncenterAttributes extends PointAttributes {
}
 

 export interface Incenter extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface IncircleAttributes extends CircleAttributes {
 /** Attributes of circle center. */
  center?:  GeometryElementAttributes
}
 

 export interface Incircle extends Circle {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface InequalityAttributes extends CurveAttributes {
 /** By default an inequality is less (or equal) than. Set inverse to true will consider the inequality greater (or equal) than. */
  inverse?: Boolean
}
 

 export interface Inequality extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface InputAttributes extends TextAttributes {
 /** Control the attribute ”disabled” of the HTML input field. */
  disabled?: Boolean
 /** Control the attribute ”maxlength” of the HTML input field. */
  maxlength?: number
}
 

 export interface Input extends Text {   // fields and methods

 //// fields 
 /** missing description */
 rendNodeInput: HTMLInputElement; 

 //// methods 
 /** missing description */
 set(value:String): GeometryElement; 
 /** missing description */
 Value(): string; 
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
 

 export interface Integral extends Curve {   // fields and methods

 //// fields 
 /** missing description */
 baseLeft: Point; 
 /** missing description */
 baseRight: Point; 
 /** missing description */
 curveLeft: Point; 
 /** missing description */
 curveRight: Point; 

 //// methods 
 /** missing description */
 Value(): Point; 
 }

 export interface IntersectionAttributes extends PointAttributes {
 /**  */
  alwaysIntersect?: Boolean
}
 

 export interface Intersection extends Point {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface Label extends Text {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface LegendAttributes extends GeometryElementAttributes {
 /** Array of legend values */
 labels?:string[]
 /** Array of legend colors */
 colors?:string[]
}
 

 export interface Legend extends GeometryElement {   // fields and methods

 //// fields 
 /** missing description */
 labels: number[]; 
 /** missing description */
 rowHeight: number; 
 /** missing description */
 style: String; 

 //// methods 
 }

 export interface LocusAttributes extends CurveAttributes {
}
 

 export interface Locus extends Curve {   // fields and methods

 //// fields 
 /** missing description */
 ctime: number; 
 /** missing description */
 eq: String; 

 //// methods 
 }

 export interface MajorArcAttributes extends CurveAttributes {
}
 

 export interface MajorArc extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface MajorSectorAttributes extends CurveAttributes {
}
 

 export interface MajorSector extends Curve {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface Measurement extends Text {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Mesh3DAttributes extends CurveAttributes {
}
 

 export interface Mesh3D extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface MidpointAttributes extends PointAttributes {
}
 

 export interface Midpoint extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface MinorArcAttributes extends CurveAttributes {
}
 

 export interface MinorArc extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface MinorSectorAttributes extends CurveAttributes {
}
 

 export interface MinorSector extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface MirrorelementAttributes extends GeometryElementAttributes {
}
 

 export interface Mirrorelement extends GeometryElement {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface MirrorpointAttributes extends PointAttributes {
}
 

 export interface Mirrorpoint extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface NonReflexAngleAttributes extends AngleAttributes {
}
 

 export interface NonReflexAngle extends Angle {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface NormalAttributes extends LineAttributes {
 /** Attributes of helper point of normal. */
  point?: Point
}
 

 export interface Normal extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface OrthogonalprojectionAttributes extends PointAttributes {
}
 

 export interface Orthogonalprojection extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface OtherIntersectionAttributes extends PointAttributes {
}
 

 export interface OtherIntersection extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ParabolaAttributes extends ConicAttributes {
}
 

 export interface Parabola extends Conic {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ParallelpointAttributes extends PointAttributes {
}
 

 export interface Parallelpoint extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface SegmentAttributes extends LineAttributes {
}
 

 export interface Segment extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ParallelogramAttributes extends PolygonAttributes {
 /** Attributes of helper point of normal. */
  parallelpoint?: DisplayPoint
}
 

 export interface Parallelogram extends Polygon {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface PerpendicularAttributes extends SegmentAttributes {
}
 

 export interface Perpendicular extends Segment {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface PerpendicularPointAttributes extends PointAttributes {
}
 

 export interface PerpendicularPoint extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface PerpendicularSegmentAttributes extends SegmentAttributes {
}
 

 export interface PerpendicularSegment extends Segment {   // fields and methods

 //// fields 
 /** missing description */
 point: PerpendicularPoint; 

 //// methods 
 }

 export interface PolarLineAttributes extends LineAttributes {
}
 

 export interface PolarLine extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface PolePointAttributes extends PointAttributes {
}
 

 export interface PolePoint extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface PolygonalChainAttributes extends PolygonAttributes {
}
 

 export interface PolygonalChain extends Polygon {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Polyhedron3DAttributes extends GeometryElement3DAttributes {
 /** Default attributes for the face shader. */
  shader?: ShaderInterface
 /** Array of face colors. */
  fillColorArray?: string[]
}
 

 export interface Polyhedron3D extends GeometryElement3D {   // fields and methods

 //// fields 
 /** missing description */
 def: number[][]; 
 /** missing description */
 faces: Face3D[]; 
 /** missing description */
 numberFaces: number; 

 //// methods 
 }

 export interface RadicalAxisAttributes extends LineAttributes {
}
 

 export interface RadicalAxis extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ReflectionAttributes extends GeometryElementAttributes {
 /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the reflected element of a circle is again a circle, otherwise it is a conic section. */
  type?: String
}
 

 export interface Reflection extends GeometryElement {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ReflexAngleAttributes extends AngleAttributes {
}
 

 export interface ReflexAngle extends Angle {   // fields and methods

 //// fields 

 //// methods 
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
 

 export interface RegularPolygon extends Polygon {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface RiemannsumAttributes extends CurveAttributes {
}
 

 export interface Riemannsum extends Curve {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 Value(): number; 
 }

 export interface SemicircleAttributes extends ArcAttributes {
 /** Attributes for center point of the semicircle. */
  center?: Point
}
 

 export interface Semicircle extends Arc {   // fields and methods

 //// fields 
 /** missing description */
 midpoint: Midpoint; 

 //// methods 
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
 

 export interface Slider extends Glider {   // fields and methods

 //// fields 
 /** missing description */
 _smax: number; 
 /** missing description */
 _smin: number; 

 //// methods 
 /** missing description */
 setMax(value:number): Object; 
 /** missing description */
 setMin(value:number): Object; 
 /** missing description */
 setValue(value:number): Object; 
 /** missing description */
 Value(): number; 
 /** missing description */
 on(event:string, action:Function): void; 
 }

 export interface SlopefieldAttributes extends VectorfieldAttributes {
 /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
  arrowhead?: Object
 /** Set length of the vectors in user coordinates. This in contrast to vector fields, where this attribute just scales the vector. */
  scale?: Object
}
 

 export interface Slopefield extends Vectorfield {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 setF(): Object; 
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
 

 export interface Slopetriangle extends Line {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 Value(): number; 
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
 

 export interface Smartlabel extends Text {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Sphere3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface Sphere3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface SplineAttributes extends CurveAttributes {
}
 

 export interface Spline extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface StepfunctionAttributes extends CurveAttributes {
}
 

 export interface Stepfunction extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TangentAttributes extends LineAttributes {
}
 

 export interface Tangent extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TangentToAttributes extends LineAttributes {
 /** Attributes for the intersection point of the conic/circle with the polar line of the tangentTo construction. */
  point?: PointAttributes
 /** Attributes for the polar line of the tangentTo construction. */
  polar?: PolarLineAttributes
}
 

 export interface TangentTo extends Line {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TapemeasureAttributes extends SegmentAttributes {
 /** The precision of the tape measure value displayed in the optional text. */
  digits?: number
 /** Attributes for the tape measure label. */
  label?: LabelAttributes
 /** Attributes for first helper point defining the tape measure position. */
  point1?: PointAttributes
 /** Attributes for second helper point defining the tape measure position. */
  point2?: PointAttributes
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
 

 export interface Tapemeasure extends Segment {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 Value(): number; 
 }

 export interface TracecurveAttributes extends CurveAttributes {
 /** The number of evaluated data points. */
  numberPoints?: number
}
 

 export interface Tracecurve extends Curve {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TransformAttributes extends GeometryElementAttributes {
}
 

 export interface Transform extends GeometryElement {   // fields and methods

 //// fields 

 //// methods 
 /** missing description */
 point(fromPoint:Point,attributes:PointAttributes): Point; 
 /** missing description */
 applyOnce(element:GeometryElement): void; 
 /** missing description */
 bindTo(element:GeometryElement|GeometryElement[]): void; 
 /** missing description */
 setMatrix(): Transform; 
 }

 export interface Transform3DAttributes extends GeometryElement3DAttributes {
}
 

 export interface Transform3D extends GeometryElement3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TransformPointAttributes extends PointAttributes {
}
 

 export interface TransformPoint extends Point {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TransformPoint3DAttributes extends Point3DAttributes {
}
 

 export interface TransformPoint3D extends Point3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Segment3DAttributes extends Line3DAttributes {
}
 

 export interface Segment3D extends Line3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface TranslateAttributes extends TransformAttributes {
}
 

 export interface Translate extends Transform {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface RotateAttributes extends TransformAttributes {
}
 

 export interface Rotate extends Transform {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface ScaleAttributes extends TransformAttributes {
}
 

 export interface Scale extends Transform {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Translate3DAttributes extends Transform3DAttributes {
}
 

 export interface Translate3D extends Transform3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Rotate3DAttributes extends Transform3DAttributes {
}
 

 export interface Rotate3D extends Transform3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface RotateX3DAttributes extends Transform3DAttributes {
}
 

 export interface RotateX3D extends Transform3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface RotateY3DAttributes extends Transform3DAttributes {
}
 

 export interface RotateY3D extends Transform3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface RotateZ3DAttributes extends Transform3DAttributes {
}
 

 export interface RotateZ3D extends Transform3D {   // fields and methods

 //// fields 

 //// methods 
 }

 export interface Scale3DAttributes extends Transform3DAttributes {
}
 

 export interface Scale3D extends Transform3D {   // fields and methods

 //// fields 

 //// methods 
 }

/** A wrapper for the various math routines provided by JSXGraph.  For example:
            ```js
            let cross = JsxMath.Matrix.crossProduct(a,b)
            ```
        */
 export let JsxMath = {Matrix :{
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
 bezier(points:Point[])  { return (window as any).JXG.Math.bezier(points) }, 
 bspline(points:Point[],order:number)  { return (window as any).JXG.Math.bspline(points,order) }, 
 CardinalSpline(points:Point[],tau:number|Function)  { return (window as any).JXG.Math.CardinalSpline(points,tau) }, 
},
Statistics :{
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

    private _jBoard: Object

    private _jView3d: Object

    private printLineNumber = 0



    private currentCanvas: string = ''

    private boardList = new Map<string, Object>()     // will be keyed array of boards  { 'jxgbox': jBoard, 'jxgbox2': jBoard2 }

    private defaultAttrs = {}







    /** Store a reference to every board in this central list. */

    static get boards() { return (window as any).JXG.boards }

    /** Constant: screen coordinates in pixel relative to the upper left corner of the div element. */

    static get COORDS_BY_SCREEN() { return (window as any).JXG.COORDS_BY_SCREEN }

    /** Constant: user coordinates relative to the coordinates system defined by the bounding box. */

    static get COORDS_BY_USER() { return (window as any).JXG.COORDS_BY_USER }

    /** Associative array that keeps track of all constructable elements registered via JXG.registerElement. */

    static get elements() { return (window as any).JXG.elements }

    /** The FileReader object bundles the file input capabilities of JSXGraph. */

    static get FileReader() { return (window as any).JXG.FileReader }

    /** Internet Explorer version. */

    static get ieVersion() { return (window as any).JXG.ieVersion}

    /** A document/window environment is available. */

    static get isBrowser() { return (window as any).JXG.isBrowser() }

    /** Constant: the small gray version indicator in the top left corner of every JSXGraph board (if showCopyright is not set to false on board creation). */

    static get licenseText() { return (window as any).JXG.licenseText }

    /** Default color palette. */

    static get palette() { return (window as any).JXG.palette }

    /** Bang Wong color palette, optimized for various type of color blindness. */

    static get paletteWong() { return (window as any).JXG.paletteWong }

    /** Store the available file readers in this structure. */

    static get readers() { return (window as any).JXG.readers }

    /** Holds all possible properties and the according validators for geometry elements. */

    static get Validator() { return (window as any).JXG.Validator }

    /** Constant: the currently used JSXGraph version. */

    static get version() {

        return (window as any).JXG.version

    }









    // this is the code for InitBoard, which is created in the wrapper.

    constructor(canvas: string = 'jxgbox', attributes: Object = {}) {



        this.defaultAttrs = {

            keepAspectRatio: true,

            name: '',

            showinfobox: false,

            pan: { enabled: false },

            resize: { enabled: false },

        };



        // create the board

        this._jBoard = (window as any).JXG.JSXGraph.initBoard(canvas, attributes)



        let bounding = (this._jBoard as any).getBoundingBox()

        // console.log(bounding, [[bounding[0], bounding[3]], Math.abs(bounding[2] - bounding[0]), Math.abs(bounding[3] - bounding[1])])



        // axesPosition is immutable.  if it is set in initBoard(), then set it in view

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



        (this._jView3d as any).setView(Math.PI, Math.PI / 2, 0);





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

    isEmptyObject(obj: Object): Boolean {

        for (let _var in obj) return false;  // if there is a property, it is not empty (doesn't work for dates, etc)

        return true;

    }







    // utility to appy default attributes

    defaultAttributes(attrs: Object = {}) {

        for (const property in this.defaultAttrs) {

            if (!attrs.hasOwnProperty(property)) {   // if the user has not specified a value for this property

                (attrs as any)[property] = (this.defaultAttrs as any)[property]

            }

        }

        return attrs

    }



    // utility to determine if last parameter is the attributes

    isAttribute(last: any): Boolean {

        return ((typeof last == 'object') &&     // must be an object

            (!Array.isArray(last)) &&     // not an array (typeof treats arrays as objects)

            (last !== null) &&     // null returns type 'object' - javascript bug

            ('elType' in last === false))              // if has elType then a JSXGraph object

    }













    // /** legacy create for 2D and 3D elements.  Always TSX.create() */

    // create(element: string, params: any[], attributes: Object = {}) {

    //     if (element.toLowerCase().includes('3d'))    // 3D";

    //         return (this._jView3d as any).create(element, params, attributes);

    //     else

    //         return (this._jBoard as any).create(element, params, attributes);

    // }





    Print(...args: any[]) {

        let bbox = (this._jBoard as any).getBoundingBox()   // get every time, in case setBoundingBox()

        let left = bbox[0] // align x to left border

        let lineHeight = (bbox[1] - bbox[3]) / 20  //

        let top = bbox[1] - (2 * lineHeight) - (this.printLineNumber * lineHeight)  // align y to top border



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



        (this._jBoard as any).create('text', [left, top, stringText], { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' })

        this.printLineNumber += 1

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

    useMathJax() { (window as any).JXG.Options.text.useMathJax = true } // by default MathJax is true





    /** sets the projection to parallel or perspective.  Possible values are 'centeral' or 'parallel'. */

    projection3D(setting: 'parallel' | 'central') { (this._jView3d as any).setAttribute({ 'projection': setting }) }



    // /** Adds an animation.*/

    // addAnimation(element:GeometryElement) => (this._jBoard as any).addAnimation(element),



    /** Add the default x- and y-axis and grid to the construction,, equivalent to using the code below.

     * ```js

     * TSX.axis([0,0],[1,0]);

     * TSX.axis([0,0],[0,1]);

     * ```

     */

    addAxis() {        // using _jsxBoard ensures board is created if necessary

        (this._jBoard as any).create('axis', [[0, 0], [1, 0]]);

        (this._jBoard as any).create('axis', [[0, 0], [0, 1]]);

    }



    /**  Set infobox visible / invisible. */

    displayInfobox(val: Boolean) { (this._jBoard as any).displayInfobox(val) }







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

    zoomIn(x: number, y: number) { return (this._jBoard as any).zoomIn(x, y) }



    /** Zooms out of the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY and applies the zoom.*/

    zoomOut(x: number, y: number): any { return (this._jBoard as any).zoomOut(x, y) }



    /** Sets the zoom level to fX resp fY.*/

    setZoom(fX: number, fY: number): any { return (this._jBoard as any).setZoom(fX, fY) }



    /** Reset the zoom level to the original zoom level from initBoard(); Additionally, if the board as been initialized with a boundingBox(which is the default ), restore the viewport to the original viewport during initialization.*/

    zoom100(): any { return (this._jBoard as any).zoom100() }







    ///////////////////////////////

    //////////////////////////////

    // bring in remainder from header3.txt

    ///////////////////////////////

    //////////////////////////////















    // these are on the JXG object, but we keep them here for simplicity



    /** Set the bounding box of the board. */

    setBoundingBox(box: number[], keepAspectRatio: Boolean = false, setZoom?: 'reset' | 'keep' | 'update'): Object { return (this._jBoard as any).setBoundingBox(box, keepAspectRatio, setZoom) }



    /** Get the bounding box of the board. */

    getBoundingBox(): number[] { return (this._jBoard as any).getBoundingBox() }



    /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields. */

    useKatex() { (window as any).JXG.Options.text.useKatex = true }



    /** Add all possible event handlers to the board object that move objects, i.e. */

    addEventHandlers(): any { return (this._jBoard as any).addEventHandlers() }



    /**    Register keyboard event handlers. */

    addKeyboardEventHandlers(): any { return (this._jBoard as any).addKeyboardEventHandlers() }



    /** Adds a grid to the board according to the settings given in board.options. For more control, use the TSX.grid object.*/

    addGrid(): any { return (this._jBoard as any).addGrid() }



    /** Event handlers for the board (rather than for individual elements).

    *```js

    *    TSX.board.on('pointerdown',pointerDown)

    *    //equivalent to:   addEventListener("pointerdown", pointerDown)

    *```

    */

    on(event: string, handler: Function) { (this._jBoard as any).on(event, handler) }



    /** given a PointerEvent (eg: TSX.on('down', (e:Event) ... ), returns the mouse coordinates [x,y] in JSXGraph coordinates.  */

    getMouseCoords(e: Event): number[] {

        let cPos = (this._jBoard as any).getCoordsTopLeftCorner(e)

        let absPos = (window as any).JXG.getPosition(e)

        let dx = absPos[0] - cPos[0]

        let dy = absPos[1] - cPos[1]



        let coords = new (window as any).JXG.Coords(2, [dx, dy], (this._jBoard as any));

        return [coords.usrCoords[1], coords.usrCoords[2]]

    }













    /** Add fullscreen events which update the CSS transformation matrix to correct the mouse/ touch / pointer positions in case of CSS transformations..*/

    addFullscreenEventHandlers(): any { return (this._jBoard as any).addFullscreenEventHandlers() }



    /** Add user activity to the array 'board.userLog'.*/

    addLogEntry(type: string, obj: Object, pos: number): any { return (this._jBoard as any).addLogEntry(type, obj, pos) }



    /** Registers mouse move, down and wheel event handlers.*/

    addMouseEventHandlers(): any { return (this._jBoard as any).addMouseEventHandlers() }



    /** Registers pointer event handlers.*/

    addPointerEventHandlers(): any { return (this._jBoard as any).addPointerEventHandlers() }



    /** Add resize related event handlers*/

    addResizeEventHandlers(): any { return (this._jBoard as any).addResizeEventHandlers() }



    /** Register touch start and move and gesture start and change event handlers.*/

    addTouchEventHandlers(): any { return (this._jBoard as any).addTouchEventHandlers() }



    /** Registers pointer event handlers.*/

    addWheelEventHandlers(): any { return (this._jBoard as any).addWheelEventHandlers() }



    /** General purpose animation function.*/

    animate(): any { return (this._jBoard as any).animate() }



    /** Apply update on all objects with the new zoom - factors.*/

    applyZoom(): any { return (this._jBoard as any).applyZoom() }



    /** Calculates adequate snap sizes.*/

    calculateSnapSizes(): any { return (this._jBoard as any).calculateSnapSizes() }



    /** Delete the elements drawn as part of a trace of an element.*/

    clearTraces(): any { return (this._jBoard as any).clearTraces() }



    /** Handler for click on down arrow in the navigation bar*/

    clickDownArrow(): any { return (this._jBoard as any).clickDownArrow() }



    /** Handler for click on left arrow in the navigation bar*/

    clickLeftArrow(): any { return (this._jBoard as any).clickLeftArrow() }



    /** Handler for click on right arrow in the navigation bar*/

    clickRightArrow(): any { return (this._jBoard as any).clickRightArrow() }



    /** Handler for click on up arrow in the navigation bar*/

    clickUpArrow(): any { return (this._jBoard as any).clickUpArrow() }



    /** Creates a new geometric element of type elementType.*/

    create(elementType: string, parents: string, attributes: Object): any { return (this._jBoard as any).create(elementType, parents, attributes) }



    /** Deprecated name for JXG.Board.create.*/

    createElement(): any { return (this._jBoard as any).createElement() }



    /** Function to animate a curve rolling on another curve.*/

    createRoulette(c1: Object, c2: Object, start_c1: number, stepsize: number, direction: number, time: number, pointlist: Object[]): any { return (this._jBoard as any).createRoulette(c1, c2, start_c1, stepsize, direction, time, pointlist) }



    /** Remove highlighting of all elements.*/

    dehighlightAll(): any { return (this._jBoard as any).dehighlightAll() }



    /** Initializes color blindness simulation.*/

    emulateColorblindness(deficiency: string): any { return (this._jBoard as any).emulateColorblindness(deficiency) }



    /** After construction of the object the visibility is set and the label is constructed if necessary.*/

    finalizeAdding(obj: Object): any { return (this._jBoard as any).finalizeAdding(obj) }



    /** If fullscreen mode is toggled, the possible CSS transformations which are applied to the JSXGraph canvas have to be reread.*/

    fullscreenListener(evt: Event): any { return (this._jBoard as any).fullscreenListener(evt) }



    /** Runs through all elements and calls their update() method and update the conditions.*/

    fullUpdate(): any { return (this._jBoard as any).fullUpdate() }



    /** Generates unique id for a board.*/

    generateId(): any { return (this._jBoard as any).generateId() }



    /** Generates an unique name for the given object.*/

    generateName(object: Object): any { return (this._jBoard as any).generateName(object) }



    /** Triggered on iOS / Safari while the user inputs a gesture(e.g.*/

    gestureChangeListener(evt: Event): any { return (this._jBoard as any).gestureChangeListener(evt) }



    /** Called by iOS / Safari as soon as the user starts a gesture.*/

    gestureStartListener(evt: Event): any { return (this._jBoard as any).gestureStartListener(evt) }



    /** Collects all elements under current mouse position.*/

    getAllObjectsUnderMouse(evt: Event): any { return (this._jBoard as any).getAllObjectsUnderMouse(evt) }



    /** Collects all elements under current mouse position plus current user coordinates of mouse cursor.*/

    getAllUnderMouse(evt: Event): any { return (this._jBoard as any).getAllUnderMouse(evt) }



    /** Calculates mouse coordinates relative to the boards container.*/

    getCoordsTopLeftCorner(): any { return (this._jBoard as any).getCoordsTopLeftCorner() }



    /** Get the position of the pointing device in screen coordinates, relative to the upper left corner of the host tag.*/

    getMousePosition(e: Event, i: number): any { return (this._jBoard as any).getMousePosition(e, i) }



    /** This method calculates the user coords of the current mouse coordinates.*/

    getUsrCoordsOfMouse(evt: Event): any { return (this._jBoard as any).getUsrCoordsOfMouse(evt) }



    /** Checks if the given point is inside the boundingbox.*/

    hasPoint(x: number, y: number): any { return (this._jBoard as any).hasPoint(x, y) }



    /** Changes the text of the info box to what is provided via text.*/

    highlightCustomInfobox(text: string, el: Object): any { return (this._jBoard as any).highlightCustomInfobox(text, el) }



    /** Changes the text of the info box to show the given coordinates.*/

    highlightInfobox(x: number, y: number, el?: Object): any { return (this._jBoard as any).highlightInfobox(x, y, el) }



    /** Initialize some objects which are contained in every GEONExT construction by default, but are not contained in the gxt files.*/

    initGeonextBoard(): any { return (this._jBoard as any).initGeonextBoard() }



    /** Initialize the info box object which is used to display the coordinates of points near the mouse pointer,*/

    initInfobox(attributes: Object): any { return (this._jBoard as any).initInfobox(attributes) }



    /** Collects all elements below the current mouse pointer and fulfilling the following constraints: isDraggable, visible, not fixed, not frozen*/

    initMoveObject(x: number, y: number, evt: Event, type: string): any { return (this._jBoard as any).initMoveObject(x, y, evt, type) }



    /** Initiate moving the origin.. This is used in mouseDown and touchStart listeners. */

    initMoveOrigin(x: number, y: number): any { return (this._jBoard as any).initMoveOrigin(x, y) }



    /** Allow moving of JSXGraph elements with arrow keys.*/

    keyDownListener(evt: Event): any { return (this._jBoard as any).keyDownListener(evt) }



    /** Event listener for SVG elements getting focus.*/

    keyFocusInListener(evt: Event): any { return (this._jBoard as any).keyFocusInListener(evt) }



    /** Event listener for SVG elements losing focus.*/

    keyFocusOutListener(evt: Event): any { return (this._jBoard as any).keyFocusOutListener(evt) }



    /** Migrate the dependency properties of the point src to the point dest and delete the point src.*/

    migratePoint(src: Object, dest: Object, copyName: string): any { return (this._jBoard as any).migratePoint(src, dest, copyName) }



    /** This method is called by the browser when the mouse device clicks on the screen.*/

    mouseClickListener(evt: Event): any { return (this._jBoard as any).mouseClickListener(evt) }



    /** This method is called by the browser when the mouse device double clicks on the screen.*/

    mouseDblClickListener(evt: Event): any { return (this._jBoard as any).mouseDblClickListener(evt) }



    /** This method is called by the browser when the mouse button is clicked.*/

    mouseDownListener(evt: Event): any { return (this._jBoard as any).mouseDownListener(evt) }



    /** This method is called by the browser when the mouse is moved.*/

    mouseMoveListener(evt: Event): any { return (this._jBoard as any).mouseMoveListener(evt) }



    /** This method is called by the browser when the mouse button is released.*/

    mouseUpListener(evt: Event): any { return (this._jBoard as any).mouseUpListener(evt) }



    /** Handler for mouse wheel events.*/

    mouseWheelListener(evt: Event): any { return (this._jBoard as any).mouseWheelListener(evt) }



    /** Moves an object.*/

    moveObject(x: number, y: number, o: Object, evt: Event, type: string): any { return (this._jBoard as any).moveObject(x, y, o, evt, type) }



    /** Moves the origin and initializes an update of all elements.*/

    moveOrigin(x: number, y: number): any { return (this._jBoard as any).moveOrigin(x, y) }



    /** This method is called by the browser when a pointer device clicks on the screen. */

    pointerClickListener(evt: Event): any { return (this._jBoard as any).pointerClickListener(evt) }



    /**     This method is called by the browser when a pointer device double clicks on the screen.*/

    pointerDblClickListener(evt: Event): any { return (this._jBoard as any).pointerDblClickListener(evt) }



    /** This method is called by the browser when a pointing device is pressed on the screen.*/

    pointerDownListener(evt: Event, object: Object, allowDefaultEventHandling: Boolean): any { return (this._jBoard as any).pointerDownListener(evt, object, allowDefaultEventHandling) }



    /** Triggered by the pointerleave event.*/

    pointerLeaveListener(evt: Event): any { return (this._jBoard as any).pointerLeaveListener(evt) }



    /** Called periodically by the browser while the user moves a pointing device across the screen.*/

    pointerMoveListener(evt: Event): any { return (this._jBoard as any).pointerMoveListener(evt) }



    /** Triggered as soon as the user stops touching the device with at least one finger.*/

    pointerUpListener(evt: Event): any { return (this._jBoard as any).pointerUpListener(evt) }



    /** Sets for all objects the needsUpdate flag to 'true'.*/

    prepareUpdate(drag: Object): any { return (this._jBoard as any).prepareUpdate(drag) }



    /** Update the container before and after printing.*/

    printListener(evt: Event): any { return (this._jBoard as any).printListener(evt) }



    /** Wrapper for printListener to be used in mediaQuery matches.*/

    printListenerMatch(mql: any): any { return (this._jBoard as any).printListenerMatch(mql) }



    /** Removes the ancestors of an object an the object itself from board and renderer.*/

    removeAncestors(object: Object): any { return (this._jBoard as any).removeAncestors(object) }



    /** Deletes a board from the list of dependent boards.*/

    removeChild(): any { return (this._jBoard as any).removeChild(this._jBoard) }



    /** Remove all event handlers from the board object*/

    removeEventHandlers(): any { return (this._jBoard as any).removeEventHandlers() }



    /** Remove all registered event handlers regarding fullscreen mode.*/

    removeFullscreenEventHandlers(): any { return (this._jBoard as any).removeFullscreenEventHandlers() }



    /** Removes all grids assigned to this board.*/

    removeGrids(): any { return (this._jBoard as any).removeGrids() }



    /** Please use JXG.Board.off instead.*/

    removeHook(id: string): any { return (this._jBoard as any).removeHook(id) }



    /** Remove all registered touch event handlers.*/

    removeKeyboardEventHandlers(): any { return (this._jBoard as any).removeKeyboardEventHandlers() }



    /** De - register mouse event handlers.*/

    removeMouseEventHandlers(): any { return (this._jBoard as any).removeMouseEventHandlers() }



    /** Removes object from board and renderer.*/

    removeObject(object: Object, saveMethod?: Boolean): any { return (this._jBoard as any).removeObject(object, saveMethod) }



    /** Remove MSPointer * Event handlers.*/

    removePointerEventHandlers(): any { return (this._jBoard as any).removePointerEventHandlers() }



    /** Remove resize related event handlers*/

    removeResizeEventHandlers(): any { return (this._jBoard as any).removeResizeEventHandlers() }



    /** Remove all registered touch event handlers.*/

    removeTouchEventHandlers(): any { return (this._jBoard as any).removeTouchEventHandlers() }



    /** Change the height and width of the board's container.*/

    resizeContainer(canvasWidth: number, canvasHeight: number, dontset: Boolean, dontSetBoundingBox: Boolean): any { return (this._jBoard as any).resizeContainer(canvasWidth, canvasHeight, dontset, dontSetBoundingBox) }



    /** Fallback solutions if there is no resizeObserver available in the browser.*/

    resizeListener(): any { return (this._jBoard as any).resizeListener() }



    /** Listener to watch for scroll events.*/

    scrollListener(evt: Event): any { return (this._jBoard as any).scrollListener(evt) }



    /** Select a single or multiple elements at once.*/

    select(str: string, onlyByIdOrName: Boolean): any { return (this._jBoard as any).select(str, onlyByIdOrName) }



    /** Sets an arbitrary number of attributes.*/

    setAttribute(attributes: Object): any { return (this._jBoard as any).setAttribute(attributes) }



    /** Composes an id for an element.*/

    setId(obj: Object, type: number): any { return (this._jBoard as any).setId(obj, type) }



    /** Lists the dependencies graph in a new HTML - window.*/

    showDependencies(): any { return (this._jBoard as any).showDependencies() }



    /** Lists the XML code of the construction in a new HTML - window.*/

    showXML(): any { return (this._jBoard as any).showXML() }



    /** Watch for changes of the visibility of the JSXGraph container element.*/

    startIntersectionObserver(): any { return (this._jBoard as any).startIntersectionObserver() }



    /** Start observer which reacts to size changes of the JSXGraph container div element.*/

    startResizeObserver(): any { return (this._jBoard as any).startResizeObserver() }



    /** Start selection mode.*/

    startSelectionMode(): any { return (this._jBoard as any).startSelectionMode() }



    /** Cancels all running animations.*/

    stopAllAnimation(): any { return (this._jBoard as any).stopAllAnimation() }



    /** Stop the intersection observer*/

    stopIntersectionObserver(): any { return (this._jBoard as any).stopIntersectionObserver() }



    /** Stops the resize observer.*/

    stopResizeObserver(): any { return (this._jBoard as any).stopResizeObserver() }



    /** Finalize the selection: disable selection mode and return (this._jBoard as any). the coordinates of the selection rectangle.*/

    stopSelectionMode(): any { return (this._jBoard as any).stopSelectionMode() }



    /** Suppresses the default event handling.*/

    suppressDefault(e: Event): any { return (this._jBoard as any).suppressDefault(e) }



    /** Stop updates of the board.*/

    suspendUpdate(): any { return (this._jBoard as any).suspendUpdate() }



    /** Expand the JSXGraph construction to fullscreen.*/

    toFullscreen(id: string): any { return (this._jBoard as any).toFullscreen(id) }



    /** Triggered as soon as the user stops touching the device with at least one finger.*/

    touchEndListener(evt: Event): any { return (this._jBoard as any).touchEndListener(evt) }



    /** Called periodically by the browser while the user moves his fingers across the device.*/

    touchMoveListener(evt: Event): any { return (this._jBoard as any).touchMoveListener(evt) }



    /** This method is called by the browser when a finger touches the surface of the touch - device.*/

    touchStartListener(evt: Event): any { return (this._jBoard as any).touchStartListener(evt) }



    /** Moves elements in multitouch mode.*/

    twoFingerMove(p1: number[], p2: number[], o: Object, evt: Event): any { return (this._jBoard as any).twoFingerMove(p1, p2, o, evt) }



    /** Moves, rotates and scales a line or polygon with two fingers.*/

    twoFingerTouchObject(tar: number[], drag: Object, id: string): any { return (this._jBoard as any).twoFingerTouchObject(tar, drag, id) }



    /** Enable updates of the board.*/

    unsuspendUpdate(): any { return (this._jBoard as any).unsuspendUpdate() }



    /** Runs through most elements and calls their update() method and update the conditions.*/

    update(drag?: Object): any { return (this._jBoard as any).update(drag) }



    /** updates conditions*/

    updateConditions(): any { return (this._jBoard as any).updateConditions() }

    /** Update the width and height of the JSXGraph container div element.*/

    updateContainerDims(width: number, height: number): any { return (this._jBoard as any).updateContainerDims(width, height) }



    /** Update the coords object of all elements which possess this property.*/

    updateCoords(): any { return (this._jBoard as any).updateCoords() }



    /** Update CSS transformations of type scaling.*/

    updateCSSTransforms(): any { return (this._jBoard as any).updateCSSTransforms() }



    /** Runs through all elements and calls their update() method.*/

    updateElements(drag?: Object): any { return (this._jBoard as any).updateElements(drag) }



    /** Runs through all hooked functions and calls them.*/

    updateHooks(m: any): any { return (this._jBoard as any).updateHooks(m) }



    /** Updates and displays a little info box to show coordinates of current selected points.*/

    updateInfobox(el: Object): any { return (this._jBoard as any).updateInfobox(el) }



    /** Runs through all elements and calls their update() method.*/

    updateRenderer(): any { return (this._jBoard as any).updateRenderer() }



    /** Runs through all elements and calls their update() method.*/

    updateRendererCanvas(): any { return (this._jBoard as any).updateRendererCanvas() }





    /** Zooms the board so every visible point is shown.*/

    zoomAllPoints(): any { return (this._jBoard as any).zoomAllPoints() }



    /** Reset the bounding box and the zoom level to 100 % such that a given set of elements is within the board's viewport.*/

    zoomElements(elements: any): any { return (this._jBoard as any).zoomElements(elements) }











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

    setView(az: number, el: number, r?: number) {

        return (this._jView3d as any).setView(az, el, r)

    }









 /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
            
*```js
TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
TSX.point([3,3]),{fixed:true, showInfobox:true}
TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
TSX.point([1,2,2])  // three axis definition - [z,x,y]
            
*```
            
 also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, TransformPoint, and others. */
 Point (position:pointAddr, attributes: PointAttributes ={} ):Point {
 return (this._jBoard as any).create('point', position, this.defaultAttributes(attributes))
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
 Line( p1:Point|pointAddr,p2:Point|pointAddr,attributes?:LineAttributes) : Line
 /** Line has two signatures. 
 *``` 
*``` 
 #2 Create a line for the equation a*x+b*y+c*z = 0',

*```js
TSX.line(2,3,1)   // create a line for the equation a*x+b*y+c*z = 0

*```
 */
 Line( A:number|Function,B:number|Function,C:number|Function,attributes?:LineAttributes) : Line
// implementation of signature,  hidden from user
 Line (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
 if(typeof a == 'number' || typeof a == 'function')
                             // reorder the a,b,c elements of the line
                             return (this._jBoard as any).create('line', [c,a,b], this.defaultAttributes(d)) as Line
                          else  //  two points
                             return (this._jBoard as any).create('line', [a,b], this.defaultAttributes(c)) as Line
             
 }

 // Missing signaature array for View3D


 /** create a chart */
 Chart (f:number[], attributes: ChartAttributes ={} ):Chart {
   return (this._jBoard as any).create('chart', [f,], this.defaultAttributes(attributes))  as Chart
}


 Circle( centerPoint:Point|pointAddr|Function,remotePoint:Point|pointAddr|Line|number|Function|Circle,attributes?:CircleAttributes) : Circle
 Circle( initial:Circle,transform:Transform,attributes?:CircleAttributes) : Circle
// implementation of signature,  hidden from user
 Circle (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('circle', params, this.defaultAttributes(attrs))
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
 Circle3D (center:Point3D, normal:number[]|Function, radius:number|Function, attributes: Circle3DAttributes ={} ):Circle3D {
 
                let tempNormal:number[] = (typeof normal === "function") ? normal() : normal;
                if(tempNormal.length ===3) tempNormal.unshift(0);   // convert [a,b,c] to [0,a,b,c]
                return (this._jView3d as any).create("circle3d",[center,normal,radius],attributes)
}

 // Missing signaature array for Complex
 // Missing signaature array for Composition
 // Missing signaature array for Coords

 Curve( xArray:number[]|Function,yArray:number[]|Function,attributes?:CurveAttributes) : Curve
 Curve( xArray:number[]|Function,yArray:number[]|Function,left:NumberFunction,right:NumberFunction,attributes?:CurveAttributes) : Curve
// implementation of signature,  hidden from user
 Curve (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('curve', params, this.defaultAttributes(attrs))
 }

 /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points. 
 *``` 
*``` 
 FX(u), FY(u), FZ(u) are functions returning a number, range is the array containing lower and upper bound for the range of the parameter u. range may also be a function returning an array of length two. */
 Curve3D( Fx:(x:number)=>number,Fy:(y:number)=>number,Fz:(z:number)=>number,range:pointAddr3D,attributes?:Curve3DAttributes) : Curve3D
 /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points. 
 *``` 
*``` 
 A function of one variable returns an array of [x,y,z] values. */
 Curve3D( Fxyz:(x:number)=>[number,number,number]|number[],range:pointAddr3D,attributes?:Curve3DAttributes) : Curve3D
 /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points. 
 *``` 
*``` 
 A curve is drawn through the XYZ points described by three arrays. */
 Curve3D( X:number[],Y:number[],Z:number[],attributes?:Curve3DAttributes) : Curve3D
// implementation of signature,  hidden from user
 Curve3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('curve3d', params, this.defaultAttributes(attrs))
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
 ForeignObject (content:string, position:number[], size:number[]|null=null, attributes: ForeignObjectAttributes ={} ):ForeignObject {
   return (this._jBoard as any).create('foreignObject', [content,position,size,], this.defaultAttributes(attributes))  as ForeignObject
}



 /** Array of Points */
 Group (pointArray:Point[]|Polygon, attributes: GroupAttributes ={} ):Group {
 if (Array.isArray(pointArray))
                    return (this._jBoard as any).create('group', pointArray, this.defaultAttributes(attributes))
                else
                    return (this._jBoard as any).create('group', [pointArray], this.defaultAttributes(attributes))
                
}


 Image( url:SpaceIcon,lowerLeft:pointAddr,widthHeight:[number,number],attributes?:ImageAttributes) : Image
 Image( url:string,lowerLeft:pointAddr,widthHeight:[number,number],attributes?:ImageAttributes) : Image
// implementation of signature,  hidden from user
 Image (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('image', params, this.defaultAttributes(attrs))
 }

 Implicitcurve( f:Function|String,attributes?:ImplicitcurveAttributes) : Implicitcurve
 Implicitcurve( f:Function|String,dfx:Function|String,dfy:Function|String,attributes?:ImplicitcurveAttributes) : Implicitcurve
// implementation of signature,  hidden from user
 Implicitcurve (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('implicitcurve', params, this.defaultAttributes(attrs))
 }


 /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
 IntersectionCircle3D (sphere1:Sphere3D, sphere:Sphere3D|Plane3D, attributes: IntersectionCircle3DAttributes ={} ):IntersectionCircle3D {
   return (this._jView3d as any).create('intersectioncircle3d', [sphere1,sphere,], this.defaultAttributes(attributes))  as IntersectionCircle3D
}



 /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
 IntersectionLine3D (plane1:Sphere3D, plane2:Plane3D, attributes: IntersectionLine3DAttributes ={} ):IntersectionLine3D {
   return (this._jView3d as any).create('intersectionline3d', [plane1,plane2,], this.defaultAttributes(attributes))  as IntersectionLine3D
}


 /** Two signatures: A line in 3D is given by two points, or one point and a direction vector. 
 *``` 
*``` 
 The 3D line is defined by two 3D points (Point3D): The points can be either existing points or coordinate arrays of the form [x, y, z]. */
 Line3D( point1:Point3D|pointAddr3D,point2:Point3D|pointAddr3D,attributes?:Line3DAttributes) : Line3D
 /** Two signatures: A line in 3D is given by two points, or one point and a direction vector. 
 *``` 
*``` 
 The 3D line is defined by a point (or coordinate array [x, y, z]) a direction given as array [x, y, z] and an optional range given as array [s, e]. The default value for the range is [-Infinity, Infinity]. */
 Line3D( point:Point3D|pointAddr3D,direction:Line3D|pointAddr3D,range:number[]|pointAddr,attributes?:Line3DAttributes) : Line3D
// implementation of signature,  hidden from user
 Line3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('line3d', params, this.defaultAttributes(attrs))
 }

 Plane3D( point:Point3D|number[]|Function,direction1:number[]|Function,direction2:number[]|Function,range1?:pointAddr,range2?:pointAddr,attributes?:Plane3DAttributes) : Plane3D
 Plane3D( point:Point3D|number[]|Function,direction1:number[]|Function|Function[],direction2:number[]|Function|Function[],range1?:pointAddr,range2?:pointAddr,attributes?:Plane3DAttributes) : Plane3D
 Plane3D( point1:Point3D,point2:Point3D,point3:Point3D,range1?:pointAddr,range2?:pointAddr,attributes?:Plane3DAttributes) : Plane3D
 Plane3D( point1:Point3D,point2:Point3D,point3:Point3D,attributes?:Plane3DAttributes) : Plane3D
// implementation of signature,  hidden from user
 Plane3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('plane3d', params, this.defaultAttributes(attrs))
 }

 Point3D( xyz:NumberFunction[],attributes?:Point3DAttributes) : Point3D
 Point3D( fn:()=> number[]|[number,number,number],attributes?:Point3DAttributes) : Point3D
// implementation of signature,  hidden from user
 Point3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('point3d', params, this.defaultAttributes(attrs))
 }


 /** Array of Points */
 Polygon (vertices:Point[]|pointAddr[]|Function, attributes: PolygonAttributes ={} ):Polygon {
   if (typeof vertices === 'function')
                              return (this._jBoard as any).create('polygon', [vertices], this.defaultAttributes(attributes))
                           else
                              return (this._jBoard as any).create('polygon', vertices, this.defaultAttributes(attributes))
                  
}



 /** A polygon is a sequence of points connected by lines, with the last point connecting back to the first one. The points are given by a list of Point3D objects or a list of coordinate arrays. Each two consecutive points of the list define a line. */
 Polygon3D (vertices:Point3D[]|pointAddr3D[]|Function, attributes: Polygon3DAttributes ={} ):Polygon3D {
 if (typeof vertices === 'function')
                            return (this._jView3d as any).create('polygon3d', [vertices], this.defaultAttributes(attributes))
                         else
                            return (this._jView3d as any).create('polygon3d', vertices, this.defaultAttributes(attributes))
                        
}



 /** Display a message
                                
*```js
TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                
*``` */
 Text (position:Point|pointAddr, label:string|Function, attributes: TextAttributes ={} ):Text {
 (position as any).push(label);
                        return (this._jBoard as any).create('text', position,this.defaultAttributes(attributes));
}


 Text3D( position:Point3D|number[]|Function,text:string|Function,attributes?:Text3DAttributes) : Text3D
 Text3D( position:Point3D|number[]|Function,text:string|Function,slide:GeometryElement3D,attributes?:Text3DAttributes) : Text3D
// implementation of signature,  hidden from user
 Text3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('text3d', params, this.defaultAttributes(attrs))
 }


 /** Ticks are used as distance markers on a line or curve. They are mainly used for axis elements and slider elements.  */
 Ticks (line:Line, attributes: TicksAttributes ={} ):Ticks {
   return (this._jBoard as any).create('ticks', [line,], this.defaultAttributes(attributes))  as Ticks
}


 Sector (P1:Point|pointAddr, P2:Point|pointAddr, P3:Point|pointAddr, attributes: SectorAttributes ={} ):Sector {
   return (this._jBoard as any).create('sector', [P1,P2,P3,], this.defaultAttributes(attributes))  as Sector
}


 Vectorfield (fxfy:Function[], horizontalMesh:number[]=[-6,25,6], verticalMesh:number[]=[-6,25,6], attributes: VectorfieldAttributes ={} ):Vectorfield {
   return (this._jBoard as any).create('vectorfield', [fxfy,horizontalMesh,verticalMesh,], this.defaultAttributes(attributes))  as Vectorfield
}


 Angle( from:Point|pointAddr,around:Point|pointAddr,to:Point|pointAddr,attributes?:AngleAttributes) : Angle
 Angle( line1:Line|[Point|pointAddr,Point|pointAddr],line2:Line|[Point|pointAddr,Point|pointAddr],direction1:[number,number],direction2:[number,number],attributes?:AngleAttributes) : Angle
 Angle( line1:Line|[Point|pointAddr,Point|pointAddr],line2:Line|[Point|pointAddr,Point|pointAddr],dirPlusMinus1:number,dirPlusMinus2:number,attributes?:AngleAttributes) : Angle
// implementation of signature,  hidden from user
 Angle (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('angle', params, this.defaultAttributes(attrs))
 }


 /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                            
*```js
                            let arc = TSX.arc([-8,5],[-4,5],[-9,9]])
                            
*```
                            
 To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
 Arc (origin:Point|pointAddr, from:Point|pointAddr, to:Point|pointAddr, attributes: ArcAttributes ={} ):Arc {
   return (this._jBoard as any).create('arc', [origin,from,to,], this.defaultAttributes(attributes))  as Arc
}



 /** Arrow defined by two points (like a Segment) with arrow at P2
                            
*```js
                            
 let arrow = TSX.arrow([-8,5],[-4,5])
                            
*```
                            
 */
 Arrow (p1:Point|pointAddr, p2:Point|pointAddr, attributes: ArrowAttributes ={} ):Arrow {
   return (this._jBoard as any).create('arrow', [p1,p2,], this.defaultAttributes(attributes))  as Arrow
}


 Parallel( line:Line|[Point,Point],point:Point|pointAddr,attributes?:ParallelAttributes) : Parallel
 Parallel( lineP1:Point|pointAddr,lineP2:Point|pointAddr,Point:Point|pointAddr,attributes?:ParallelAttributes) : Parallel
// implementation of signature,  hidden from user
 Parallel (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('parallel', params, this.defaultAttributes(attrs))
 }


 /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
 Arrowparallel (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: ArrowparallelAttributes ={} ):Arrowparallel {
   return (this._jBoard as any).create('arrowparallel', [p1,p2,p3,], this.defaultAttributes(attributes))  as Arrowparallel
}



 /** Create an Axis with two points (like a Line) */
 Axis (p1:Point|pointAddr, p2:Point|pointAddr, attributes: AxisAttributes ={} ):Axis {
   return (this._jBoard as any).create('axis', [p1,p2,], this.defaultAttributes(attributes))  as Axis
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
 BezierCurve (points:Point[], attributes: BezierCurveAttributes ={} ):BezierCurve {
  return (this._jBoard as any).create('curve', (window as any).JXG.Math.Numerics.bezier(points), this.defaultAttributes(attributes));
}



 /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
 Bisector (A:Point|pointAddr, B:Point|pointAddr, C:Point|pointAddr, attributes: BisectorAttributes ={} ):Bisector {
   return (this._jBoard as any).create('bisector', [A,B,C,], this.defaultAttributes(attributes))  as Bisector
}



 /** Bisect a Line defined with two points */
 Bisectorlines (l1:Line, l2:Line, attributes: BisectorlinesAttributes ={} ):Bisectorlines {
   return (this._jBoard as any).create('bisectorlines', [l1,l2,], this.defaultAttributes(attributes))  as Bisectorlines
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
 Button (position:pointAddr, label:string|Function, handler:Function, attributes: ButtonAttributes ={} ):Button {
 (position as any).push(label,handler);  // position is already array, eg: [1,2], just use it as params
                        return (this._jBoard as any).create('button', position, this.defaultAttributes(attributes)) as Button;
}


 Cardinalspline (data:Point[]|number[][], funct:Function, splineType:`uniform`|`centripetal`, attributes: CardinalsplineAttributes ={} ):Cardinalspline {
   return (this._jBoard as any).create('cardinalspline', [data,funct,splineType,], this.defaultAttributes(attributes))  as Cardinalspline
}


 Checkbox (position:pointAddr, label:string|Function, attributes: CheckboxAttributes ={} ):Checkbox {
 (position as any).push(label);
                        return (this._jBoard as any).create('checkbox', position,this.defaultAttributes(attributes));
}



 /** Creates a Point at the center of a circle defined by 3 points */
 Circumcenter (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcenterAttributes ={} ):Circumcenter {
   return (this._jBoard as any).create('circumcenter', [p1,p2,p3,], this.defaultAttributes(attributes))  as Circumcenter
}



 /** Draw a circle defined by 3 points */
 Circumcircle (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleAttributes ={} ):Circumcircle {
   return (this._jBoard as any).create('circumcircle', [p1,p2,p3,], this.defaultAttributes(attributes))  as Circumcircle
}



 /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
 CircumcircleArc (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleArcAttributes ={} ):CircumcircleArc {
   return (this._jBoard as any).create('circumcircleArc', [p1,p2,p3,], this.defaultAttributes(attributes))  as CircumcircleArc
}



 /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
 CircumcircleSector (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: CircumcircleSectorAttributes ={} ):CircumcircleSector {
   return (this._jBoard as any).create('circumcircleSector', [p1,p2,p3,], this.defaultAttributes(attributes))  as CircumcircleSector
}


 Comb (p1:Point|pointAddr, p2:Point|pointAddr, attributes: CombAttributes ={} ):Comb {
   return (this._jBoard as any).create('comb', [p1,p2,], this.defaultAttributes(attributes))  as Comb
}


 /** Create a generic conic section either by five points or the six numeric coefficients of the general conic's equation.  
 *``` 
*``` 
 Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
 Conic( A:Point|pointAddr,B:Point|pointAddr,C:Point|pointAddr,D:Point|pointAddr,E:Point|pointAddr,attributes?:ConicAttributes) : Conic
 /** Create a generic conic section either by five points or the six numeric coefficients of the general conic's equation.  
 *``` 
*``` 
 Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
 Conic( A:number,B:number,C:number,D:number,E:number,F:number,attributes?:ConicAttributes) : Conic
// implementation of signature,  hidden from user
 Conic (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('conic', params, this.defaultAttributes(attrs))
 }

 CurveDifference (curve1:GeometryElement, curve2:GeometryElement, attributes: CurveDifferenceAttributes ={} ):CurveDifference {
   return (this._jBoard as any).create('curveDifference', [curve1,curve2,], this.defaultAttributes(attributes))  as CurveDifference
}


 CurveIntersection (curve1:GeometryElement, curve2:GeometryElement, attributes: CurveIntersectionAttributes ={} ):CurveIntersection {
   return (this._jBoard as any).create('curveIntersection', [curve1,curve2,], this.defaultAttributes(attributes))  as CurveIntersection
}


 CurveUnion (curve1:GeometryElement, curve2:GeometryElement, attributes: CurveUnionAttributes ={} ):CurveUnion {
   return (this._jBoard as any).create('curveUnion', [curve1,curve2,], this.defaultAttributes(attributes))  as CurveUnion
}


 Derivative (curve:Curve, attributes: DerivativeAttributes ={} ):Derivative {
   return (this._jBoard as any).create('derivative', [curve,], this.defaultAttributes(attributes))  as Derivative
}


 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Two points plus a radius */
 Ellipse( p1:Point|pointAddr,p2:Point|pointAddr,radius:Point|pointAddr|number|Function,attributes?:EllipseAttributes) : Ellipse
 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Two points plus a radius, with start and end  */
 Ellipse( p1:Point|pointAddr,p2:Point|pointAddr,radius:Point|pointAddr|number|Function,start?:number|Function,end?:number|Function,attributes?:EllipseAttributes) : Ellipse
 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Three Points */
 Ellipse( focalPoint1:Point|pointAddr,focalPoint2:Point|pointAddr,outerPoint:Point|pointAddr,attributes?:EllipseAttributes) : Ellipse
 /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                        Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).  
 *``` 
*``` 
 Three Points, with  start and end. */
 Ellipse( focalPoint1:Point|pointAddr,focalPoint2:Point|pointAddr,outerPoint:Point|pointAddr,start?:number|Function,end?:number|Function,attributes?:EllipseAttributes) : Ellipse
// implementation of signature,  hidden from user
 Ellipse (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('ellipse', params, this.defaultAttributes(attrs))
 }

 /** A 3D parametric surface visualizes a map (u, v) → [X(u, v), Y(u, v), Z(u, v)]. 
 *``` 
*``` 
 FX(u,v), FY(u,v), FZ(u,v) are functions returning a number for [x,y,z],
- rangeU is the array containing lower and upper bound for the range of parameter u,
- rangeV is the array containing lower and upper bound for the range of parameter v.

rangeU and rangeV may also be functions returning an array of length two. */
 ParametricSurface3D( FX:(u:number,v:number)=> number,FY:(u:number,v:number)=> number,FZ:(u:number,v:number)=> number,rangeU:number[]|(()=>number[]),rangeV:number[]|(()=>number[]),attributes?:ParametricSurface3DAttributes) : ParametricSurface3D
 /** A 3D parametric surface visualizes a map (u, v) → [X(u, v), Y(u, v), Z(u, v)]. 
 *``` 
*``` 
 F(u,v) is a function returning a number array [x,y,z],
- rangeU is the array containing lower and upper bound for the range of parameter u,
- rangeV is the array containing lower and upper bound for the range of parameter v.

rangeU and rangeV may also be functions returning an array of length two. */
 ParametricSurface3D( F:(u:number,v:number)=> number[],rangeU:number[]|(()=>number[]),rangeV:number[]|(()=>number[]),attributes?:ParametricSurface3DAttributes) : ParametricSurface3D
// implementation of signature,  hidden from user
 ParametricSurface3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('parametricsurface3d', params, this.defaultAttributes(attrs))
 }



 /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
```js
let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
``` */
 Functiongraph (funct:(x:number)=>number, leftBorder?:number, rightBorder?:number, attributes: FunctiongraphAttributes ={} ):Functiongraph {
   return (this._jBoard as any).create('functiongraph', [funct,leftBorder,rightBorder,], this.defaultAttributes(attributes))  as Functiongraph
}



 /** A 3D functiongraph visualizes a map (x, y) → f(x, y).  */
 Functiongraph3D (xyFunction:(x:number,y:number)=>number, xRange:NumberFunction[], yRange:NumberFunction[], attributes: Functiongraph3DAttributes ={} ):Functiongraph3D {
   return (this._jView3d as any).create('functiongraph3d', [xyFunction,xRange,yRange,], this.defaultAttributes(attributes))  as Functiongraph3D
}


 Glider( hostElement:GeometryElement,attributes?:GliderAttributes) : Glider
 Glider( hostElement:GeometryElement,initialPosition:number[],attributes?:GliderAttributes) : Glider
// implementation of signature,  hidden from user
 Glider (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
 params = b? [b[0]??0,b[1]??0,a]:[0,0,a]
                         return (this._jBoard as any).create('glider', params ,this.defaultAttributes(attrs));
 }


 /** Glider3D is an alias for JSXGraph's Point3D(). */
 Glider3D (element:Curve3D|Line3D|Sphere3D, initial:number[]=[0,0,0], attributes: Glider3DAttributes ={} ):Glider3D {
 return (this._jView3d as any).create("point3d",[initial,element],attributes)
}


 Grid( axis1:Axis,axis2:Axis,attributes?:GridAttributes) : Grid
 Grid( attributes?:GridAttributes) : Grid
// implementation of signature,  hidden from user
 Grid (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('grid', params, this.defaultAttributes(attrs))
 }

 Hatch (line:Line|[Point|pointAddr,Point|pointAddr], numberHatches:number, attributes: HatchAttributes ={} ):Hatch {
   return (this._jBoard as any).create('hatch', [line,numberHatches,], this.defaultAttributes(attributes))  as Hatch
}


 Hyperbola (point1:Point|pointAddr, point2:Point|pointAddr, point3:Point|pointAddr|number, start:number=-3.14, end:number=3.14, attributes: HyperbolaAttributes ={} ):Hyperbola {
   return (this._jBoard as any).create('hyperbola', [point1,point2,point3,start,end,], this.defaultAttributes(attributes))  as Hyperbola
}


 Incenter (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: IncenterAttributes ={} ):Incenter {
   return (this._jBoard as any).create('incenter', [p1,p2,p3,], this.defaultAttributes(attributes))  as Incenter
}


 Incircle (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: IncircleAttributes ={} ):Incircle {
   return (this._jBoard as any).create('incircle', [p1,p2,p3,], this.defaultAttributes(attributes))  as Incircle
}


 Inequality (boundaryLine:Line|[Point|pointAddr,Point|pointAddr]|Curve, attributes: InequalityAttributes ={} ):Inequality {
   return (this._jBoard as any).create('inequality', [boundaryLine,], this.defaultAttributes(attributes))  as Inequality
}


 Input (position:Point|pointAddr, label:string|Function, initial:String="", attributes: InputAttributes ={} ):Input {
 (position as any).push(label,initial);
                        return (this._jBoard as any).create('input', position,this.defaultAttributes(attributes));
}


 Integral (range:number[], curve:Curve, attributes: IntegralAttributes ={} ):Integral {
   return (this._jBoard as any).create('integral', [range,curve,], this.defaultAttributes(attributes))  as Integral
}


 Intersection( element1:Line|Circle|Curve|Polygon|PolygonalChain,element2:Line|Circle|Curve|Polygon|PolygonalChain,i?:number|Function,attributes?:IntersectionAttributes) : Intersection
 Intersection( element1:Line|Circle|Curve|Polygon|PolygonalChain,element2:Line|Circle|Curve|Polygon|PolygonalChain,attributes?:IntersectionAttributes) : Intersection
// implementation of signature,  hidden from user
 Intersection (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
 return (this._jBoard as any).create('intersection', params, this.defaultAttributes(attrs)) as Point
 }



 /** Creates a Legend for a Chart Element
                                
*```js
* let labels = ['a','b','c']
* let colors = ['red','green','blue']
* let legend = TSX.legend([2,2],labels,colors)
*```
                                
 */
 Legend (lowerLeft:pointAddr, labels:string[], colors:string[], attributes: LegendAttributes ={} ):Legend {
 attributes['labels']=labels;
                attributes['colors']=colors
                return (this._jBoard as any).create('legend', lowerLeft,this.defaultAttributes(attributes));
}


 Locus (point:Point, attributes: LocusAttributes ={} ):Locus {
   return (this._jBoard as any).create('locus', [point,], this.defaultAttributes(attributes))  as Locus
}


 MajorArc (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MajorArcAttributes ={} ):MajorArc {
   return (this._jBoard as any).create('majorArc', [p1,p2,p3,], this.defaultAttributes(attributes))  as MajorArc
}


 MajorSector (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MajorSectorAttributes ={} ):MajorSector {
   return (this._jBoard as any).create('majorSector', [p1,p2,p3,], this.defaultAttributes(attributes))  as MajorSector
}



 /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
```js
 let p = TSX.point([4, 9]);
 let c = TSX.circle([4, 7], p);
 TSX.measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
 TSX.measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
```
 */
 Measurement (locn:Point|pointAddr, measure:string, element:GeometryElement, attributes: MeasurementAttributes ={} ):Measurement {
 let x:any=0,y:any=0;
                if(Array.isArray(locn)){
                   x = locn[0];
                   y = locn[1];
                }else if(typeof locn == 'object'){
                    x = locn.X();
                    y = locn.Y();
                };
            return (this._jBoard as any).create('measurement', [x,y,[measure,element]], attributes)
}


 Mesh3D( point:Point3D|number[]|Function,direction1:number[]|Function,direction2:number[]|Function,range1?:pointAddr,range2?:pointAddr,attributes?:Mesh3DAttributes) : Mesh3D
 Mesh3D( point:Point3D|number[]|Function,direction1:number[]|Function|Function[],direction2:number[]|Function|Function[],range1?:pointAddr,range2?:pointAddr,attributes?:Mesh3DAttributes) : Mesh3D
 Mesh3D( point1:Point3D,point2:Point3D,point3:Point3D,range1?:pointAddr,range2?:pointAddr,attributes?:Mesh3DAttributes) : Mesh3D
 Mesh3D( point1:Point3D,point2:Point3D,point3:Point3D,attributes?:Mesh3DAttributes) : Mesh3D
// implementation of signature,  hidden from user
 Mesh3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('mesh3d', params, this.defaultAttributes(attrs))
 }

 Midpoint( p1:Point,p2:Point,attributes?:MidpointAttributes) : Midpoint
 Midpoint( line:Line,attributes?:MidpointAttributes) : Midpoint
// implementation of signature,  hidden from user
 Midpoint (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('midpoint', params, this.defaultAttributes(attrs))
 }

 MinorArc (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MinorArcAttributes ={} ):MinorArc {
   return (this._jBoard as any).create('minorArc', [p1,p2,p3,], this.defaultAttributes(attributes))  as MinorArc
}


 MinorSector (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: MinorSectorAttributes ={} ):MinorSector {
   return (this._jBoard as any).create('minorSector', [p1,p2,p3,], this.defaultAttributes(attributes))  as MinorSector
}


 Mirrorelement (element:Point|Line|Circle|Curve|Polygon, acrossPoint:Point|pointAddr, attributes: MirrorelementAttributes ={} ):Mirrorelement {
   return (this._jBoard as any).create('mirrorelement', [element,acrossPoint,], this.defaultAttributes(attributes))  as Mirrorelement
}


 Mirrorpoint (p1:Point, p2:Point, attributes: MirrorpointAttributes ={} ):Mirrorpoint {
   return (this._jBoard as any).create('mirrorpoint', [p1,p2,], this.defaultAttributes(attributes))  as Mirrorpoint
}


 NonReflexAngle (point1:Point, point2:Point, point3:Point, attributes: NonReflexAngleAttributes ={} ):NonReflexAngle {
   return (this._jBoard as any).create('nonReflexAngle', [point1,point2,point3,], this.defaultAttributes(attributes))  as NonReflexAngle
}


 Normal( object:Line|Circle|Curve,point:Point,attributes?:NormalAttributes) : Normal
 Normal( glider:Glider,attributes?:NormalAttributes) : Normal
// implementation of signature,  hidden from user
 Normal (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('normal', params, this.defaultAttributes(attrs))
 }


 /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
```js
let s1 = TSX.segment(p1, p2)
let p3 = TSX.point([0, -1])
TSX.orthogonalprojection(p3, s1)
``` */
 Orthogonalprojection (point:Point|pointAddr, line:Line|[Point|pointAddr,Point|pointAddr], attributes: OrthogonalprojectionAttributes ={} ):Orthogonalprojection {
   return (this._jBoard as any).create('orthogonalprojection', [point,line,], this.defaultAttributes(attributes))  as Orthogonalprojection
}


 OtherIntersection (element1:Line|Circle, element2:Line|Circle, firstIntersection:Point, attributes: OtherIntersectionAttributes ={} ):OtherIntersection {
  return (this._jBoard as any).create('otherintersection', [element1,element2,firstIntersection], attributes)
}


 Parabola (focalPoint:Point|pointAddr, line:Line|[Point|pointAddr,Point|pointAddr], attributes: ParabolaAttributes ={} ):Parabola {
   return (this._jBoard as any).create('parabola', [focalPoint,line,], this.defaultAttributes(attributes))  as Parabola
}


 Parallelpoint( line:Line|[Point,Point],point:Point|pointAddr,attributes?:ParallelpointAttributes) : Parallelpoint
 Parallelpoint( P1:Point,P2:Point,P3:Point,attributes?:ParallelpointAttributes) : Parallelpoint
// implementation of signature,  hidden from user
 Parallelpoint (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('parallelpoint', params, this.defaultAttributes(attrs))
 }

 Segment( P1:Point|pointAddr,P2:Point|pointAddr,attributes?:SegmentAttributes) : Segment
 Segment( P1:Point|pointAddr,P2:Point|pointAddr,length:number|Function,attributes?:SegmentAttributes) : Segment
// implementation of signature,  hidden from user
 Segment (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('segment', params, this.defaultAttributes(attrs))
 }

 Parallelogram (p1:Point|pointAddr, p2:Point|pointAddr, p3:Point|pointAddr, attributes: ParallelogramAttributes ={} ):Parallelogram {
   return (this._jBoard as any).create('parallelogram', [p1,p2,p3,], this.defaultAttributes(attributes))  as Parallelogram
}



 /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
 Perpendicular (line:Line|[Point|pointAddr,Point|pointAddr], point:Point|pointAddr, attributes: PerpendicularAttributes ={} ):Perpendicular {
   return (this._jBoard as any).create('perpendicular', [line,point,], this.defaultAttributes(attributes))  as Perpendicular
}



 /** Create a point on a line where a perpendicular to a given point would intersect that line. */
 PerpendicularPoint (line:Line|[Point|pointAddr,Point|pointAddr], point:Point|pointAddr, attributes: PerpendicularPointAttributes ={} ):PerpendicularPoint {
   return (this._jBoard as any).create('perpendicularPoint', [line,point,], this.defaultAttributes(attributes))  as PerpendicularPoint
}



 /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
 PerpendicularSegment (line:Line|[Point|pointAddr,Point|pointAddr], point:Point|pointAddr, attributes: PerpendicularSegmentAttributes ={} ):PerpendicularSegment {
   return (this._jBoard as any).create('perpendicularSegment', [line,point,], this.defaultAttributes(attributes))  as PerpendicularSegment
}


 PolarLine (conic:Conic|Circle, point:Point, attributes: PolarLineAttributes ={} ):PolarLine {
   return (this._jBoard as any).create('polarLine', [conic,point,], this.defaultAttributes(attributes))  as PolarLine
}


 PolePoint (conic:Conic|Circle, line:Line, attributes: PolePointAttributes ={} ):PolePoint {
   return (this._jBoard as any).create('polePoint', [conic,line,], this.defaultAttributes(attributes))  as PolePoint
}



 /** Array of Points */
 PolygonalChain (pointArray:Point[]|pointAddr[], attributes: PolygonalChainAttributes ={} ):PolygonalChain {
   return (this._jBoard as any).create('polygonalChain', [pointArray,], this.defaultAttributes(attributes))  as PolygonalChain
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
 Polyhedron3D (vertexList:(Point3D|pointAddr3D)[], faceArray:number[][], attributes: Polyhedron3DAttributes ={} ):Polyhedron3D {
   return (this._jView3d as any).create('polyhedron3d', [vertexList,faceArray,], this.defaultAttributes(attributes))  as Polyhedron3D
}


 RadicalAxis (circle1:Circle, circle2:Circle, attributes: RadicalAxisAttributes ={} ):RadicalAxis {
   return (this._jBoard as any).create('radicalAxis', [circle1,circle2,], this.defaultAttributes(attributes))  as RadicalAxis
}



 /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
 Reflection (object:Point|Line|Circle|Curve|Polygon|Arc|Sector, reflectLine:Line, attributes: ReflectionAttributes ={} ):Reflection {
   return (this._jBoard as any).create('reflection', [object,reflectLine,], this.defaultAttributes(attributes))  as Reflection
}


 ReflexAngle (point1:Point, point2:Point, point3:Point, attributes: ReflexAngleAttributes ={} ):ReflexAngle {
   return (this._jBoard as any).create('reflexAngle', [point1,point2,point3,], this.defaultAttributes(attributes))  as ReflexAngle
}


 RegularPolygon (P1:Point|pointAddr, P2:Point|pointAddr, nVertices:number, attributes: RegularPolygonAttributes ={} ):RegularPolygon {
   return (this._jBoard as any).create('regularPolygon', [P1,P2,nVertices,], this.defaultAttributes(attributes))  as RegularPolygon
}



 /** Visualize the Riemann sum which is an approximation of an integral by a finite sum. It is realized as a special curve. The returned element has the method Value() which returns the sum of the areas of the bars.

                        In case of type 'simpson' and 'trapezoidal', the horizontal line approximating the function value is replaced by a parabola or a secant. IN case of 'simpson', the parabola is approximated visually by a polygonal chain of fixed step width. */
 Riemannsum (funct:Function|number[], nBars:Function|number, type:'left'|'right'|'middle'|'lower'|'upper'|'random'|'simpson'|'trapezoidal' = 'simpson', leftBorder?:number|Function, rightBorder?:number|Function, attributes: RiemannsumAttributes ={} ):Riemannsum {
   return (this._jBoard as any).create('riemannsum', [funct,nBars,type,leftBorder,rightBorder,], this.defaultAttributes(attributes))  as Riemannsum
}


 Semicircle (P1:Point|pointAddr, P2:Point|pointAddr, attributes: SemicircleAttributes ={} ):Semicircle {
   return (this._jBoard as any).create('semicircle', [P1,P2,], this.defaultAttributes(attributes))  as Semicircle
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
 Slider (StartPoint:Point|pointAddr, EndPoint:Point|pointAddr, minimum_initial_maximum:[number,number,number], attributes: SliderAttributes ={} ):Slider {
   return (this._jBoard as any).create('slider', [StartPoint,EndPoint,minimum_initial_maximum,], this.defaultAttributes(attributes))  as Slider
}


 Slopefield (func:Function, xData:NumberFunction[], yData:NumberFunction[], attributes: SlopefieldAttributes ={} ):Slopefield {
   return (this._jBoard as any).create('slopefield', [func,xData,yData,], this.defaultAttributes(attributes))  as Slopefield
}


 Slopetriangle( tangent:Point | Tangent,attributes?:SlopetriangleAttributes) : Slopetriangle
 Slopetriangle( line:Line,point:Point,attributes?:SlopetriangleAttributes) : Slopetriangle
// implementation of signature,  hidden from user
 Slopetriangle (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('slopetriangle', params, this.defaultAttributes(attrs))
 }

 /** Customized text elements for displaying measurements of JSXGraph elements, Examples are length of a segment, perimeter or area of a circle or polygon (including polygonal chain), slope of a line, value of an angle, and coordinates of a point. */
 Smartlabel( parent:Point|Line|Circle|Polygon|Angle,attributes?:SmartlabelAttributes) : Smartlabel
 /** Customized text elements for displaying measurements of JSXGraph elements, Examples are length of a segment, perimeter or area of a circle or polygon (including polygonal chain), slope of a line, value of an angle, and coordinates of a point. */
 Smartlabel( parent:Point|Line|Circle|Polygon|Angle,Txt:string|Function,attributes?:SmartlabelAttributes) : Smartlabel
// implementation of signature,  hidden from user
 Smartlabel (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('smartlabel', params, this.defaultAttributes(attrs))
 }


 /**  sphere consists of all points with a given distance from a given point. The given point is called the center, and the given distance is called the radius. */
 Sphere3D (center:Point3D|pointAddr3D, radius:Point3D|number|pointAddr3D, attributes: Sphere3DAttributes ={} ):Sphere3D {
   return (this._jView3d as any).create('sphere3d', [center,radius,], this.defaultAttributes(attributes))  as Sphere3D
}


 Spline (points:Point[]|number[][], attributes: SplineAttributes ={} ):Spline {
 return (this._jBoard as any).create('spline', points, this.defaultAttributes(attributes))
}



 /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
```js
let  curve = TSX.stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
```
 */
 Stepfunction (X:number[], Y:number[], attributes: StepfunctionAttributes ={} ):Stepfunction {
   return (this._jBoard as any).create('stepfunction', [X,Y,], this.defaultAttributes(attributes))  as Stepfunction
}


 Tangent( point:Glider,attributes?:TangentAttributes) : Tangent
 Tangent( point:Point,curve:Line|Circle|Curve,attributes?:TangentAttributes) : Tangent
// implementation of signature,  hidden from user
 Tangent (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jBoard as any).create('tangent', params, this.defaultAttributes(attrs))
 }


 /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
 TangentTo (conic:Conic|Circle, point:Point|pointAddr, N:number=0, attributes: TangentToAttributes ={} ):TangentTo {
   return (this._jBoard as any).create('tangentTo', [conic,point,N,], this.defaultAttributes(attributes))  as TangentTo
}


 Tapemeasure (P1:Point|pointAddr, P2:Point|pointAddr, attributes: TapemeasureAttributes ={} ):Tapemeasure {
   return (this._jBoard as any).create('tapemeasure', [P1,P2,], this.defaultAttributes(attributes))  as Tapemeasure
}



 /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
 Tracecurve (glider:Glider, point:Point, attributes: TracecurveAttributes ={} ):Tracecurve {
   return (this._jBoard as any).create('tracecurve', [glider,point,], this.defaultAttributes(attributes))  as Tracecurve
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
 TransformPoint (point:Point, transform:Transform|Transform[], attributes: TransformPointAttributes ={} ):TransformPoint {
  return (this._jBoard as any).create('point', [point,transform],this.defaultAttributes(attributes))
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
 TransformPoint3D (point:Point3D, transform:Transform3D|Transform3D[], attributes: TransformPoint3DAttributes ={} ):TransformPoint3D {
  return (this._jView3d as any).create('point3d', [point,transform],this.defaultAttributes(attributes))
}


 Segment3D( P1:Point|pointAddr,P2:Point|pointAddr,attributes?:Segment3DAttributes) : Segment3D
 Segment3D( P1:Point|pointAddr,P2:Point|pointAddr,length:number|Function,attributes?:Segment3DAttributes) : Segment3D
// implementation of signature,  hidden from user
 Segment3D (a?:any, b?:any, c?:any, d?:any,e?:any,f?:any,g?:any,h?:any,i?:any) {
   let params:any[] = []
   let attrs = {}
 if(arguments.length == 1) {
   params = this.isAttribute(a)?[]:[a,];
   attrs = this.isAttribute(a)? a:{};
 }
 if(arguments.length == 2) {
   params = this.isAttribute(b)?[a,]:[a,b,];
   attrs = this.isAttribute(b)? b:{};
 }
 if(arguments.length == 3) {
   params = this.isAttribute(c)?[a,b,]:[a,b,c,];
   attrs = this.isAttribute(c)? c:{};
 }
 if(arguments.length == 4) {
   params = this.isAttribute(d)?[a,b,c,]:[a,b,c,d,];
   attrs = this.isAttribute(d)? d:{};
 }
 if(arguments.length == 5) {
   params = this.isAttribute(e)?[a,b,c,d,]:[a,b,c,d,e,];
   attrs = this.isAttribute(e)? e:{};
 }
 if(arguments.length == 6) {
   params = this.isAttribute(f)?[a,b,c,d,e,]:[a,b,c,d,e,f,];
   attrs = this.isAttribute(f)? f:{};
 }
 if(arguments.length == 7) {
   params = this.isAttribute(g)?[a,b,c,d,e,f,]:[a,b,c,d,e,f,g,];
   attrs = this.isAttribute(g)? g:{};
 }
   return (this._jView3d as any).create('segment3d', params, this.defaultAttributes(attrs))
 }


 /** Create a Transform object with Translate properties. */
 Translate (dx:number|Function, dy:number|Function, attributes: TranslateAttributes ={} ):Translate {
 return (this._jBoard as any).create('transform', [dx,dy], {type:'translate'})
}



 /** Create a Transform object with Rotate properties. */
 Rotate (angle:number|Function, around:Point|pointAddr, attributes: RotateAttributes ={} ):Rotate {
 return (this._jBoard as any).create('Transform', [angle,around], {type:'rotate'})
}



 /** Create a Transform object with Scale properties.  Scaling is relative to [0,0]. */
 Scale (xMultiplier:number|Function, yMultiplier:number|Function, attributes: ScaleAttributes ={} ):Scale {
 return (this._jBoard as any).create('transform', [xMultiplier,yMultiplier], {type:'scale'})
}



 /** Create a Transform3D object with Translate properties. */
 Translate3D (dx:number|Function, dy:number|Function, dz:number|Function, attributes: Translate3DAttributes ={} ):Translate3D {
 return (this._jView3d as any).create('transform3d', [dx,dy,dz], {type:'translate'})
}



 /** Create a Transform3D object with Rotate properties around the normal vector N. */
 Rotate3D (angle:number|Function, n:number[], attributes: Rotate3DAttributes ={} ):Rotate3D {
 return (this._jView3d as any).create('transform3d', [angle,n], {type:'rotate'})
}



 /** Create a Transform3D object with Rotate properties around the X axis. */
 RotateX3D (angle:number|Function, attributes: RotateX3DAttributes ={} ):RotateX3D {
 return (this._jView3d as any).create('transform3d', [angle], {type:'rotateX'})
}



 /** Create a Transform3D object with Rotate properties around the Y axis. */
 RotateY3D (angle:number|Function, attributes: RotateY3DAttributes ={} ):RotateY3D {
 return (this._jView3d as any).create('transform3d', [angle], {type:'rotateY'})
}



 /** Create a Transform3D object with Rotate properties around the Z axis. */
 RotateZ3D (angle:number|Function, attributes: RotateZ3DAttributes ={} ):RotateZ3D {
 return (this._jView3d as any).create('transform3d', [angle], {type:'rotateZ'})
}



 /** Create a Transform object with Scale properties.  Scaling is relative to [0,0,0]. */
 Scale3D (xMultiplier:number|Function, yMultiplier:number|Function, zMultiplier:number|Function, attributes: Scale3DAttributes ={} ):Scale3D {
 return (this._jView3d as any).create('transform3d', [xMultiplier,yMultiplier,zMultiplier], {type:'scale'})
}

 // Missing signaature array for Matrix
 // Missing signaature array for Geometry
 // Missing signaature array for Numerics
 // Missing signaature array for Statistics
}///////////////////////////
////// header2.text ///////
///////////////////////////



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
function initBoard(canvas: string='', attributes?: BoardAttributes): Object {   // a JSXGraph board object
        return (window as any).TSXGlobal.jInitBoard(canvas,attributes);
    }








