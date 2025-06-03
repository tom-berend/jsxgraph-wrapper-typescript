type NumberFunction = Number | Function;
/** A 'point' has a position in space.  The only characteristic that distinguishes one point from another is its position. */
type pointAddr = NumberFunction[] | [number, number] | [number, Function] | [Function, number] | [Function | Function];
type pointAddr3D = NumberFunction[];
type arrayNumber = Number[];
type arrayNumber2 = arrayNumber | Number;
type matAny = arrayNumber2[];
type eventType = 'down' | 'drag' | 'keydrag' | 'mousedown' | 'mousedrag' | 'mousemove' | 'mouseout' | 'mouseover' | 'mouseup' | 'move' | 'out' | 'over' | 'pendown' | 'pendrag' | 'penup' | 'touchdown' | 'touchdrag' | 'touchup' | 'up';
interface Events {
    /** event handlers, eventType is a STRING
     * ```
     * let p = TSX.Point([0, 0])
     * p.on('over', () => alert('bang!'))
     * ```
    */
    on(trigger: eventType, action: Function): void;
}
interface EventsAttributes {
    /** color is a shortcut for  ['strokeColor', 'fillColor']  */
    color?: string | Function;
    /** opacity is a shortcut for ['strokeOpacity', 'fillOpacity']  */
    opacity?: number | Function;
    /** highlightColor is a shortcut for ['highlightStrokeColor', 'highlightFillColor']  */
    highlightColor?: string | Function;
    /** highlightOpacity is a shortcut for ['highlightStrokeOpacity', 'highlightFillOpacity'] */
    highlightOpacity?: number | Function;
    /** strokeWidth is a shortcut for ['strokeWidth', 'highlightStrokeWidth'] */
    strokeWidth?: number | Function;
    /** the name of the object used in labels */
    name?: string | Function;
    /** size of the element in px */
    size?: number | Function;
    /** label attributes eg:  {position: 'top', offset: 10}  */
    label?: LabelAttributes;
    /** use Katex for math notation */
    useKatex?: Boolean;
    parallelpoint?: PointAttributes;
}
export interface ShaderInterface {
    enabled: Boolean;
    type: 'angle' | 'zIndex';
    hue: number;
    saturation: number;
    minlightness: number;
    maxLightness: number;
}
export interface MoveToOptions {
    callback?: Function;
    effect?: "==" | "<>" | "--" | "<" | ">";
    repeat?: number;
}
export interface SelectionAttributes {
    enabled?: Boolean | Function;
    name?: string | Function;
    needShift?: Boolean;
    needCtrl?: Boolean;
    fillColor?: string;
}
export interface ScreenShotAttributes {
    scale?: number;
    type?: string;
    symbol?: '\u2318' | '\u22b9' | '\u26f6';
    css?: string;
    cssButton?: string;
}
export interface pointerControls {
    /**  specifies whether pointer navigation is allowed by elevation. */
    enabled?: Boolean;
    /** Number indicating how many passes the range of the el_slider makes when the cursor crosses the entire board once in the horizontal direction.*/
    speed?: number;
    /** specifies whether the pointer navigation is continued when the cursor leaves the board. */
    outside?: Boolean;
    /** Which button of the pointer should be used? ('-1' (=no button), '0' or '2') */
    button?: '-1' | '0' | '2';
    /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
    key?: 'none' | 'shift' | 'ctrl';
}
export interface keyboardControls {
    /** specifies whether the keyboard (arrow keys) can be used to navigate the board.*/
    enabled?: Boolean;
    /** Size of the step per keystroke. */
    step?: number;
    /** Should an additional key be pressed? ('none', 'shift' or 'ctrl') */
    key?: 'none' | 'shift' | 'ctrl';
}
export interface sliderControls {
    min?: number;
    max?: number;
    start?: number;
}
export interface screenControls {
    /** an object */
    pointer?: pointerControls;
    /** an object */
    keyboard?: keyboardControls;
    continuous?: Boolean;
    /** an object */
    slider?: sliderControls;
}
export interface AriaAttributes {
    /** default false */
    enabled?: Boolean;
    /** default ''   */
    label?: string;
    /** Politeness setting.  default 'assertive'   */
    live?: string;
    /** ignore  ?? see Alfred comment in https://github.com/jsxgraph/jsxgraph/pull/737#event-16103541603 */
    ignore?: Boolean;
}
export interface DisplayPoint {
    size?: Number;
    face?: 'cross' | 'plus' | 'minus' | 'divide' | 'diamond' | 'triangledown' | 'triangleleft' | 'triangleright' | 'triangleup' | 'square' | 'circle';
}
export interface VertexAttributes {
    visible?: Boolean;
}
export interface PanAttributes {
    /** allow panning */
    enabled?: Boolean;
    /** panning is done with two fingers on touch devices */
    needTwoFingers?: Boolean;
    /** mouse panning needs pressing of the shift key */
    needShift?: Boolean;
}
export interface ZoomAttributes {
    /** turns off zooming completely, if set to false. */
    enabled?: Boolean;
    /** horizontal zoom factor (multiplied to JXG.Board#zoomX) */
    factorX?: number;
    /** vertical zoom factor (multiplied to JXG.Board#zoomY) */
    factorY?: number;
    /** allow zooming by mouse wheel */
    wheel?: Boolean;
    /**  mouse wheel zooming needs pressing of the shift key */
    needShift?: Boolean;
    /** minimal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomOut, default 0.001 */
    min?: number;
    /** maximal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomIn, default 1000.0 */
    max?: number;
    /** 'auto' centers zoom at position of mouse, 'board' centers zoom at the board's center
    center?: 'auto'| 'board',
    /**  pinch-to-zoom gesture for proportional zoom, default true */
    pinch?: Boolean;
    /** Horizontal pinch-to-zoom zooms horizontal axis. Only available if keepaspectratio:false */
    pinchHorizontal?: Boolean;
    /** Vertical pinch-to-zoom zooms vertical axis only. Only available if keepaspectratio:false */
    pinchVertical?: Boolean;
    /**  Sensitivity (in degrees) for recognizing horizontal or vertical pinch-to-zoom gestures.  default: 7 */
    pinchSensitivity?: number;
}
/** Initialize a new board. The first parameter 'html' should be the ID of a <DIV> in your web page.\n\n
 * ```js
<div id="jxgbox" class="jxgbox" style="width:1000px; height:1000px;float:left;"></div>
<script src="lunar.js" type="module" defer>  </script>\n
// start your .ts with something like this
import { TXG } from "../src/tsxgraph.js";
const board = TXG.TSXGraph.initBoard('jxgbox', { axis: true });
```
*/
export type SpaceIcon = 'icons/alien-1.png' | 'icons/alien-2.png' | 'icons/alien-3.png' | 'icons/alien-4.png' | 'icons/alien-5.png' | 'icons/alien-abduction.png' | 'icons/alien-ship-2.png' | 'icons/alien-ship-beam.png' | 'icons/alien-ship.png' | 'icons/asteroid-2.png' | 'icons/asteroid.png' | 'icons/astronaut-helmet.png' | 'icons/atom.png' | 'icons/atronaut.png' | 'icons/bb-8.png' | 'icons/big-dipper.png' | 'icons/black-hole.png' | 'icons/brain-slug.png' | 'icons/cassiopeia.png' | 'icons/chewbacca.png' | 'icons/comet.png' | 'icons/cylon-raider.png' | 'icons/darth-vader.png' | 'icons/death-star.png' | 'icons/earth.png' | 'icons/falling-asteroid.png' | 'icons/falling-space-capsule.png' | 'icons/falling-star.png' | 'icons/flag.png' | 'icons/fly\ icon\ licence.png' | 'icons/flyicon.png' | 'icons/galaxy.png' | 'icons/intl-space-station.png' | 'icons/jupiter.png' | 'icons/landing-space-capsule.png' | 'icons/laser-gun.png' | 'icons/mars.png' | 'icons/millennium-falcon.png' | 'icons/mission-control.png' | 'icons/moon-full-almost.png' | 'icons/moon-full-moon.png' | 'icons/moon-last-quarter.png' | 'icons/moon-new-moon.png' | 'icons/moon-waning-cresent.png' | 'icons/moon-waning-gibbous.png' | 'icons/morty.png' | 'icons/neptune.png' | 'icons/pluto.png' | 'icons/princess-leia.png' | 'icons/rick.png' | 'icons/ring-ship.png' | 'icons/rocket-launch.png' | 'icons/rocket.png' | 'icons/satellite.png' | 'icons/saturn.png' | 'icons/solar-system.png' | 'icons/space-capsule.png' | 'icons/space-cockpit.png' | 'icons/space-invader.png' | 'icons/space-observatory.png' | 'icons/space-rocket.png' | 'icons/space-rover-1.png' | 'icons/space-rover-2.png' | 'icons/space-satellite-dish.png' | 'icons/space-ship_1.png' | 'icons/space-ship_2.png' | 'icons/space-ship_3.png' | 'icons/space-ship.png' | 'icons/space-shuttle-launch.png' | 'icons/space-shuttle.png' | 'icons/sputnick-1.png' | 'icons/sputnick-2.png' | 'icons/star.png' | 'icons/stars.png' | 'icons/stormtrooper.png' | 'icons/sun.png' | 'icons/telescope.png' | 'icons/uranus.png' | 'icons/venus.png' | 'icons/moon-dreamy.png';
export interface GeometryElementAttributes extends EventsAttributes {
    /** Apply CSS classes to an element in highlighted view. It is possible to supply one or more CSS classes separated by blanks. <p> For non-text and non-image elements, this feature is available for the SVG renderer, only. */
    highlightCssClass?: string;
    /** If this is set to true, the element is updated in every update call of the board. If set to false, the element is updated only after zoom events or more generally, when the bounding box has been changed. Examples for the latter behavior should be axes. */
    needsRegularUpdate?: Boolean;
    /** Precision options for JSXGraph elements. This attributes takes either the value 'inherit' or an object of the form: <pre> precision: { touch: 30, mouse: 4, pen: 4 } </pre> In the first case, the global, JSXGraph-wide values of JXGraph.Options.precision are taken. */
    precision?: string;
    /** A private element will be inaccessible in certain environments, e.g. a graphical user interface. */
    priv?: Boolean;
    /** Transition duration (in milliseconds) for certain cahnges of properties like color and opacity. The properties can be set in the attribute transitionProperties Works in SVG renderer, only. */
    transitionDuration?: number;
    /** Properties which change smoothly in the time set in transitionDuration. Possible values are ['fill', 'fill-opacity', 'stroke', 'stroke-opacity', 'stroke-width', 'width', 'height', 'rx', 'ry'] (and maybe more) for geometry elements and ['color', 'opacity', 'all'] for HTML texts. */
    transitionProperties?: string[];
    /** ARIA settings for the element. */
    aria?: AriaAttributes;
    /** Apply CSS classes to an element in non-highlighted view. */
    cssClass?: string;
    /** The fill color of this geometry element. */
    fillColor?: string | Function;
    /** Opacity for fill color. */
    fillOpacity?: number | Function;
    /** The stroke color of the given geometry element. */
    strokeColor?: string | Function;
    /** Opacity for element's stroke color. */
    strokeOpacity?: number | Function;
    /** Width of the element's stroke. */
    strokeWidth?: number | Function;
    /** If false the element won't be visible on the currentBoard, otherwise it is shown. */
    visible?: Boolean | Function;
    /** Determines the elements border-style. Possible values are: 0 for a solid line 1 for a dotted line 2 for a line with small dashes 3 for a line with medium dashes 4 for a line with big dashes 5 for a line with alternating medium and big dashes and large gaps 6 for a line with alternating medium and big dashes and small gaps 7 for a dotted line. Needs JXG.GeometryElement#linecap set to ”round” for round dots.The dash patterns are defined in JXG.AbstractRenderer#dashArray. */
    dash?: number;
    /** if true the element will be drawn in grey scale colors (as default) to visualize that it's only a draft. */
    draft?: Boolean;
    /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
    fixed?: Boolean;
    /** If true a label will display the element's name. */
    withLabel?: Boolean;
    /** If enabled:true the (stroke) element will get a customized shadow.Customize color and opacity: If the object's RGB stroke color is [r,g,b] and its opacity is op, and the shadow parameters color is given as [r', g', b'] and opacity as op' the shadow will receive the RGB color[blend*r + r', blend*g + g', blend*b + b']and its opacity will be equal to op * op'. Further, the parameters blur and offset can be adjusted.This attribute is only available with SVG, not with canvas. */
    shadow?: Object;
    /** Snaps the element or its parents to the grid. Currently only relevant for points, circles, and lines. Points are snapped to grid directly, on circles and lines it's only the parent points that are snapped */
    snapToGrid?: Boolean;
    /** If some size of an element is controlled by a function, like the circle radius or segments of fixed length, this attribute controls what happens if the value is negative. By default, the absolute value is taken. If true, the maximum of 0 and the value is used. */
    nonnegativeOnly?: Boolean;
    /** If true, the dash pattern is multiplied by strokeWidth / 2. */
    dashScale?: Boolean;
    /** If the element is dragged it will be moved on mousedown or touchstart to the top of its layer. Works only for SVG renderer and for simple elements consisting of one SVG node. */
    dragToTopOfLayer?: Boolean;
    /** If true the element is fixed and can not be dragged around. The element will even stay at its position on zoom and moveOrigin events. Only free elements like points, texts, curves can be frozen. */
    frozen?: Boolean;
    /** Gradient type. Possible values are 'linear'. 'radial' or null. */
    gradient?: 'linear' | 'radial' | 'null';
    /** Angle (in radians) of the gradiant in case the gradient is of type 'linear'. If the angle is 0, the first color is on the left and the second color is on the right. If the angle is π/2 the first color is on top and the second color at the bottom. */
    gradientAngle?: number;
    /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'x1'. Takes a value between 0 and 1. */
    gradientCX?: number;
    /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'y1'. Takes a value between 0 and 1. */
    gradientCY?: number;
    /** The gradientEndOffset attribute is a number (ranging from 0 to 1) which indicates where the second gradient stop is placed, see the SVG specification for more information. For linear gradients, this attribute represents a location along the gradient vector. For radial gradients, it represents a percentage distance from (fx,fy) to the edge of the outermost/largest circle. */
    gradientEndOffset?: number;
    /** This attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% <stop> is mapped to the perimeter of the start circle. For radial gradients in canvas this is the value 'r0'. Takes a value between 0 and 1. */
    gradientFR?: number;
    /** `fx` and `fy` define the focal point for the radial gradient. The gradient will be drawn such that the 0% gradient stop is mapped to (fx, fy). For radial gradients in canvas this is the value 'x0'. Takes a value between 0 and 1. */
    gradientFX?: number;
    /** y-coordinate of the circle center for the second color in case of gradient 'radial'. (The attribute fy in SVG) For radial gradients in canvas this is the value 'y0'. Takes a value between 0 and 1. */
    gradientFY?: number;
    /** From the SVG specification: ‘cx’, ‘cy’ and ‘r’ define the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. For radial gradients in canvas this is the value 'r1'. Takes a value between 0 and 1. */
    gradientR?: number;
    /** Second color for gradient. */
    gradientSecondColor?: String;
    /** Opacity of second gradient color. Takes a value between 0 and 1. */
    gradientSecondOpacity?: number;
    /** The gradientStartOffset attribute is a number (ranging from 0 to 1) which indicates where the first gradient stop is placed, see the SVG specification for more information. For linear gradients, this attribute represents a location along the gradient vector. For radial gradients, it represents a percentage distance from (fx,fy) to the edge of the outermost/largest circle. */
    gradientStartOffset?: number;
    /** Should the element use highlight attributes on mouseOver? */
    highlight?: Boolean;
    /** The fill color of the given geometry element when the mouse is pointed over it. */
    highlightFillColor?: string | Function;
    /** Opacity for fill color when the object is highlighted. */
    highlightFillOpacity?: number | Function;
    /** The stroke color of the given geometry element when the user moves the mouse over it. */
    highlightStrokeColor?: string | Function;
    /** Opacity for stroke color when the object is highlighted. */
    highlightStrokeOpacity?: number | Function;
    /** Width of the element's stroke when the mouse is pointed over it. */
    highlightStrokeWidth?: number | Function;
    /** Display layer which will contain the element. */
    layer?: number;
    /** Line endings (linecap) of a stroke element, i.e. line, circle, curve. Possible values are:'butt','round','square'. */
    lineCap?: string;
    /** Determines whether two-finger manipulation may rotate this object. If set to false, the object can only be scaled and translated.In case the element is a polygon or line and it has the attribute ”rotatable:false”, moving the element with two fingers results in a rotation or translation.If an element is set to be neither scalable nor rotatable, it can only be translated.In case of a polygon, scaling is only possible if no vertex has snapToGrid or snapToPoints enabled and no vertex is fixed by some other constraint. Also, the polygon itself has to have snapToGrid disabled. */
    rotatable?: Boolean;
    /** Determines whether two-finger manipulation of this object may change its size. If set to false, the object is only rotated and translated.In case the element is a horizontal or vertical line having ticks, ”scalable:true” enables zooming of the currentBoard by dragging ticks lines. This feature is enabled, for the ticks element of the line element the attribute ”fixed” has to be false and the line element's scalable attribute has to be true.In case the element is a polygon or line and it has the attribute ”scalable:false”, moving the element with two fingers results in a rotation or translation.If an element is set to be neither scalable nor rotatable, it can only be translated.In case of a polygon, scaling is only possible if no vertex has snapToGrid or snapToPoints enabled and no vertex is fixed by some other constraint. Also, the polygon itself has to have snapToGrid disabled. */
    scalable?: Boolean;
    /** Controls if an element can get the focus with the tab key. tabindex corresponds to the HTML attribute of the same name. See descriptiona at MDN. The additional value ”null” completely disables focus of an element. The value will be ignored if keyboard control of the currentBoard is not enabled or the element is fixed or not visible. */
    tabindex?: number;
    /** If true the element will be traced, i.e. on every movement the element will be copied to the background. Use JXG.GeometryElement#clearTrace to delete the trace elements.The calling of element.setAttribute({trace:false}) additionally deletes all traces of this element. By calling element.setAttribute({trace:'pause'}) the removal of already existing traces can be prevented.The visual appearance of the trace can be influenced by JXG.GeometryElement#traceAttributes. */
    trace?: Boolean;
    /** Extra visual properties for traces of an element */
    traceAttributes?: PointAttributes;
}
export interface GeometryElement extends Events {
    /** missing description */
    elType: String;
    /** missing description */
    name: string | Function;
    /** missing description */
    isDraggable: Boolean;
    /** missing description */
    ancestors: Object;
    /** missing description */
    board: Board;
    /** missing description */
    childElements: Object;
    /** missing description */
    descendants: Object;
    /** missing description */
    dump: Boolean;
    /** missing description */
    elementClass: Number;
    /** missing description */
    hasLabel: Boolean;
    /** missing description */
    highlighted: Boolean;
    /** missing description */
    id: String;
    /** missing description */
    inherits: Object;
    /** missing description */
    isReal: Boolean;
    /** missing description */
    lastDragTime: Date;
    /** missing description */
    methodMap: Object;
    /** missing description */
    mouseover: Boolean;
    /** missing description */
    needsUpdate: Boolean;
    /** missing description */
    notExistingParents: Object;
    /** missing description */
    numTraces: Number;
    /** missing description */
    parents: Object;
    /** missing description */
    quadraticform: number[];
    /** missing description */
    rendNode: HTMLElement;
    /** missing description */
    stdform: number[];
    /** missing description */
    subs: Object;
    /** missing description */
    symbolic: Object;
    /** missing description */
    traces: Object;
    /** missing description */
    transformations: number[];
    /** missing description */
    type: Number;
    /** missing description */
    visProp: Object;
    /** missing description */
    visPropCalc: Object;
    /** Removes all ticks from a line or curve. */
    removeAllTicks(): Object;
    /** Get value of a parameter. If the parameter is a function, call the function and return its value. In that case, the function is called with the GeometryElement as (only) parameter. For label elements (i.e. if the attribute  */
    eval(val: string | number | Function | Object): any;
    /** Get value of an attribute. If the value that attribute is a function, call the function and return its value. In that case, the function is called with the GeometryElement as (only) parameter. For label elements (i.e. if the attribute  */
    evalVisProp(key: string): any;
    /** Checks whether (x,y) is near the element.  */
    hasPoint(x: number, y: number): Boolean;
    /** Add an element as a child to the current element. Can be used to model dependencies between geometry elements. */
    addChild(obj: GeometryElement): GeometryElement;
    /** Alias of {@link JXG.EventEmitter.on}.  */
    addEvent(): void;
    /** Adds ids of elements to the array this.parents. This method needs to be called if some dependencies can not be detected automatically by JSXGraph. For example if a function graph is given by a function which refers to coordinates of a point, calling addParents() is necessary. */
    addParents(parents: GeometryElement[]): Object;
    /** Rotate texts or images by a given degree. */
    addRotation(angle: number): void;
    /** Adds ticks to this line or curve. Ticks can be added to a curve or any kind of line: line, arrow, and axis. */
    addTicks(ticks: Ticks): string;
    /** Add transformations to this element. */
    addTransform(el: GeometryElement, transform: Transformation | Transformation[]): GeometryElement;
    /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
    animate(hash: Object, time: number, options?: Object): GeometryElement;
    /** Dimensions of the smallest rectangle enclosing the element. */
    bounds(): number[];
    /** Removes all objects generated by the trace function. */
    clearTrace(): GeometryElement;
    /** Copy the element to background. This is used for tracing elements. */
    cloneToBackground(): GeometryElement;
    /** Creates a label element for this geometry element. */
    createLabel(): boolean;
    /** Format a number according to the locale set in the attribute  */
    formatNumberLocale(value: number, digits?: number): string;
    /** Array of strings containing the polynomials defining the element. Used for determining geometric loci the groebner way. */
    generatePolynomial(): number[];
    /** Get the value of the property &lt;tt&gt;key&lt;/tt&gt;. */
    getAttribute(key: string): Object;
    /** Retrieve a copy of the current visProp. */
    getAttributes(): Object;
    /** Returns the coords object where the label of the element shall be drawn. Differs in some cases from the values that getTextAnchor returns.  */
    getLabelAnchor(): number[];
    /** Returns the coords object where a text that is bound to the element shall be drawn. Differs in some cases from the values that getLabelAnchor returns.  */
    getTextAnchor(): number[];
    /** Returns the elements name. Used in JessieCode. */
    getName(): String;
    /** List of the element ids resp. values used as parents in {@link JXG.Board#create}. */
    getParents(): number[];
    /** Deprecated alias for {@link JXG.GeometryElement#getAttribute}. */
    getProperty(): number[];
    /** The type of the element as used in {@link JXG.Board#create}. */
    getType(): String;
    /** Move an element to its nearest grid point. The function uses the coords object of the element as its actual position. If there is no coords object or if the object is fixed, nothing is done. */
    handleSnapToGrid(force: Boolean, fromParent?: Boolean): GeometryElement;
    /** Hide the element. It will still exist but not be visible on the board. Alias for  */
    hide(): GeometryElement;
    /** Hide the polygon including its border lines. It will still exist but not visible on the board.  */
    hideElement(): void;
    /** Uses the  */
    noHighlight(): Board;
    /** Removes the element from the construction.  This only removes the SVG or VML node of the element and its label (if available) from the renderer, to remove the element completely you should use {@link JXG.Board#removeObject}. */
    remove(): Object;
    /** Remove an element as a child from the current element. */
    removeChild(obj: GeometryElement): Object;
    /** Alias of {@link JXG.EventEmitter.off}. */
    removeEvent(): number;
    /** Removes ticks identified by parameter named tick from this line or curve. */
    removeTicks(tick: Ticks): Object;
    /** Determines whether the element has arrows at start or end of the arc. If it is set to be a  */
    setArrow(firstArrow: Boolean, lastArrow: Boolean): GeometryElement;
    /** Sets an arbitrary number of attributes. This method has one or more parameters of the following types: &lt;ul&gt; &lt;li&gt; object: {key1:value1,key2:value2,...} &lt;li&gt; string: &#039;key:value&#039; &lt;li&gt; array: [&#039;key&#039;, value] &lt;/ul&gt; */
    setAttribute(attributes: GeometryElementAttributes): void;
    /** Sets a label and its text If label doesn&#039;t exist, it creates one */
    setLabel(str: string): Object;
    /** Updates the element&#039;s label text, strips all html. */
    setLabelText(str: string): Object;
    /** Updates the element&#039;s label text and the element&#039;s attribute  */
    setName(str: string): Object;
    /** Sets ids of elements to the array this.parents. First, this.parents is cleared. See {@link JXG.GeometryElement#addParents}. */
    setParents(parents: any): Object;
    /** Moves an element by the difference of two coordinates. */
    setPositionDirectly(method: number, coords: NumberFunction[], oldcoords?: NumberFunction[]): GeometryElement;
    /** Deprecated alias for {@link JXG.GeometryElement#setAttribute}. */
    setProperty(): GeometryElement;
    /** Make the element visible. Alias for  */
    show(): GeometryElement;
    /** Make the element visible. Alias for {@link JXG.GeometryElement#show} */
    showElement(): GeometryElement;
    /** Snaps the element to points. Only works for points. Points will snap to the next point as defined in their properties {@link JXG.Point#attractorDistance} and {@link JXG.Point#attractorUnit}. Lines and circles will snap their parent points to points. */
    snapToPoints(force?: Boolean): GeometryElement;
    /** Checks if locale is enabled in the attribute. This may be in the attributes of the board, or in the attributes of the text. The latter has higher priority. The board attribute is taken if attribute  */
    useLocale(): Boolean;
    /** Translates the object by <tt>(x, y)</tt>. In case the element is defined by points, the defining points are translated, e.g. a circle constructed by a center point and a point on the circle line.  */
    setPosition(method: number, coords: number[]): GeometryElement;
    /** General update method. Should be overwritten by the element itself. Can be used sometimes to commit changes to the object.  */
    update(): void;
}
export interface CoordsElementAttributes extends GeometryElementAttributes {
}
export interface CoordsElement extends Omit<GeometryElement, 'snapToPoints'> {
    /** missing description */
    coords: Coords;
    /** missing description */
    groups: number[];
    /** missing description */
    isConstrained: Boolean;
    /** missing description */
    needsUpdateFromParent: Boolean;
    /** missing description */
    onPolygon: Boolean;
    /** missing description */
    position: number;
    /** missing description */
    slideObject: GeometryElement;
    /** missing description */
    slideObjects: CoordsElement;
    /** Convert the point to CAS point and call update(). */
    addConstraint(terms: any[]): CoordsElement;
    /** Add transformations to this element. */
    addTransform(el: GeometryElement, transform: Transformation | Transformation[]): GeometryElement;
    /** Getter method for coordinates x, y and (optional) z. */
    Coords(digits: number, withZ: Boolean): number[];
    /** Generic method to create point, text or image. Determines the type of the construction, i.e. free, or constrained by function, transformation or of glider type.  */
    create(Callback: any, board: any, coords: any, attr: any, arg1: any, arg2: any): Object;
    /** Getter method for the distance to a second point, this is required for CAS-elements. Here, function inlining seems to be worthwile (for plotting).  */
    Dist(point2: Point): number;
    /** Converts a calculated element into a free element, i.e. it will delete all ancestors and transformations and, if the element is currently a glider, will remove the slideObject reference.  */
    free(): void;
    /** A point can change its type from free point to glider and vice versa. If it is given an array of attractor elements (attribute attractors) and the attribute attractorDistance then the point will be made a glider if it less than attractorDistance apart from one of its attractor elements. If attractorDistance is equal to zero, the point stays in its current form.  */
    handleAttractors(): void;
    /** Let a point snap to the nearest point in distance of {@link JXG.Point#attractorDistance}. The function uses the coords object of the point as its actual position. */
    handleSnapToPoints(force: Boolean): Point;
    /** Convert the point to glider and update the construction. To move the point visual onto the glider, a call of board update is necessary.  */
    makeGlider(slide: GeometryElement): GeometryElement;
    /** Move along a path defined by an array of coordinates  */
    moveAlong(where: number[][], time?: number, options?: Object): void;
    /** ES6 version of {@link JXG.CoordsElement#moveAlong} using a promise. */
    moveAlongES6(where: number[][], time?: number, options?: Object): Promise<any>;
    /** Starts an animated point movement towards the given coordinates &lt;tt&gt;where&lt;/tt&gt;. The animation is done after &lt;tt&gt;time&lt;/tt&gt; milliseconds. If the second parameter is not given or is equal to 0, setPosition() is called, see {@link JXG.CoordsElement#setPosition}, i.e. the coordinates are changed without animation. */
    moveTo(where: number[] | Function, time?: number, options?: MoveToOptions): void;
    /** ES6 version of {@link JXG.CoordsElement#moveTo} using a promise. */
    moveToES6(where: number[] | Function, time?: number, options?: MoveToOptions): Promise<any>;
    /** Remove the last slideObject. If there are more than one elements the point is bound to, the second last element is the new active slideObject. */
    popSlideObject(): Point;
    /** Sets the position of a glider relative to the defining elements of the {@link JXG.Point#slideObject}. */
    setGliderPosition(x: number): Point;
    /** Sets coordinates and calls the element&#039;s update() method.  Method is the type of coordinates used here. Possible values are JXG.COORDS_BY_USER and JXG.COORDS_BY_SCREEN. */
    setPosition(method: number, coord: number[]): CoordsElement;
    /** Translates the point by tv = [x, y]. Method is the type of coordinates used here. Possible values are JXG.COORDS_BY_USER and JXG.COORDS_BY_SCREEN. */
    setPositionByTransform(method: number, tv: number[]): CoordsElement;
    /** Sets coordinates and calls the elements&#039;s update() method. */
    setPositionDirectly(method: number, coords: NumberFunction[]): GeometryElement;
    /** Alias for {@link JXG.Element#handleSnapToGrid} */
    snapToGrid(force: Boolean): CoordsElement;
    /** Alias for {@link JXG.CoordsElement#handleSnapToPoints}. */
    snapToPoints(force: Boolean): CoordsElement;
    /** Applies the transformations of the element to {@link JXG.Point#baseElement}. Point transformations are relative to a base element.  */
    updateTransform(fromParent: Boolean): void;
    /** Starts an animated point movement towards the given coordinates &lt;tt&gt;where&lt;/tt&gt;. After arriving at &lt;tt&gt;where&lt;/tt&gt; the point moves back to where it started. The animation is done after &lt;tt&gt;time&lt;/tt&gt; milliseconds. */
    visit(where: number[], time: number, options: VisitAttributes): CoordsElement;
    /** ES6 version of {@link JXG.CoordsElement#moveVisit} using a promise. */
    visitES6(where: number[], time: number, options: VisitAttributes): Promise<any>;
    /** Getter method for x, this is used by for CAS-points to access point coordinates. */
    X(): number;
    /** Getter method for y, this is used by CAS-points to access point coordinates. */
    Y(): number;
    /** Getter method for z, this is used by CAS-points to access point coordinates. */
    Z(): number;
    /** sets an arbitrary number of attributes for this CoordsElement element*/ setAttribute(attrs: CoordsElementAttributes): void;
}
export interface BoardAttributes {
    /** Location of the coordinate axes or 'axis gizmo'. */
    axesPosition?: 'none' | 'center' | 'border';
    /** Time (in msec) between two animation steps. */
    animationDelay?: number;
    /** Show default axis. */
    axis?: Boolean;
    /** Bounding box of the visible area in user coordinates. */
    boundingBox?: number[];
    /** Enable browser scrolling on touch interfaces if the user double taps into an empty region of the board. */
    browserPan?: Boolean;
    /** Maximum time delay (in msec) between two clicks to be considered as double click. */
    clickDelay?: number;
    /** If false (default), JSXGraph follows the JavaScript standard and fires before a dblclick event two click events. */
    dblClickSuppressClick?: Boolean;
    /** Attributes for the default axes in case of the attribute axis:true in JXG.JSXGraph#initBoard. */
    defaultAxes?: {
        x?: AxisAttributes;
        y?: AxisAttributes;
    };
    /** Supply the document object. */
    document?: Object | Boolean;
    /** Attribute(s) to control the fullscreen icon. */
    fullscreen?: {
        symbol?: string;
        scale?: number;
    };
    /** Support for internationalization of number formatting. */
    intl?: {
        enabled?: Boolean;
        locale?: string;
    };
    /** If set to true, the ratio between horizontal and vertical unit sizes stays constant - independent of size changes of the hosting HTML div element. */
    keepAspectRatio?: Boolean;
    /** Control using the keyboard to change the construction. */
    keyboard?: {
        enabled?: Boolean;
        dy?: number;
        panShift?: Boolean;
        panCtrl?: Boolean;
    };
    /** If enabled, user activities are logged in array "board.userLog". */
    logging?: Boolean;
    /** Maximal bounding box of the visible area in user coordinates. */
    maxBoundingBox?: [number, number, number, number];
    /** Maximum frame rate of the board, i.e. */
    maxFrameRate?: number;
    /** Maximum number of digits in automatic label generation. */
    maxNameLength?: number;
    /** Change redraw strategy in SVG rendering engine. */
    minimizeReflow?: string;
    /** Element which listens to move events of the pointing device. */
    moveTarget?: string;
    /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
    offsetX?: number;
    /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
    offsetY?: number;
    /** Control the possibilities for panning interaction (i.e. */
    pan?: {
        enabled?: Boolean;
        needTwoFingers?: Boolean;
        needShift?: Boolean;
    };
    /** Allow user interaction by registering pointer events (including mouse and touch events), fullscreen, keyboard, resize, and zoom events. */
    registerEvents?: {
        fullscreen?: Boolean;
        keyboard?: Boolean;
        pointer?: Boolean;
        resize?: Boolean;
        wheel?: Boolean;
    };
    /** Default rendering engine. */
    renderer?: string;
    /** Control if JSXGraph reacts to resizing of the JSXGraph container element by the user / browser. */
    resize?: {
        enable?: Boolean;
        throttle?: number;
    };
    /** Attributes to control the screenshot function. */
    screenshot?: ScreenShotAttributes;
    /** Control th=> e possibilities for a selection rectangle. */
    selection?: SelectionAttributes;
    /** Show a button which allows to clear all traces of a board. */
    showClearTraces?: Boolean;
    /** Show copyright string in canvas. */
    showCopyright?: Boolean;
    /** Show a button in the navigation bar to start fullscreen mode. */
    showFullscreen?: Boolean;
    /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to `inherit`. */
    showInfobox?: Boolean;
    /** Display of navigation arrows and zoom buttons in the navigation bar. */
    showNavigation?: Boolean;
    /** Show a button in the navigation bar to force reload of a construction. */
    showReload?: Boolean;
    /** Show a button in the navigation bar to enable screenshots. */
    showScreenshot?: Boolean;
    /** Display of zoom buttons in the navigation bar. */
    showZoom?: Boolean;
    /** If true the first element of the set JXG.board.objects having hasPoint==true is taken as drag element. */
    takeFirst?: Boolean;
    /** If true, when read from a file or string - the size of the div can be changed by the construction text. */
    takeSizeFromFile?: Boolean;
    /** Set a visual theme for a board. */
    theme?: string;
    /** Title string for the board. */
    title?: string;
    /** Control the possibilities for zoom interaction. */
    zoom?: ZoomAttributes;
    /** Zoom factor in horizontal direction. */
    zoomX?: number;
    /** Zoom factor in vertical direction. */
    zoomY?: number;
}
export interface Board {
    /** sets an arbitrary number of attributes for this Board element*/ setAttribute(attrs: BoardAttributes): void;
}
export interface PointAttributes extends GeometryElementAttributes {
    /** If the distance of the point to one of its attractors is less than this number the point will be a glider on this attracting element. If set to zero nothing happens. */
    attractorDistance?: number;
    /** List of attractor elements. If the distance of the point is less than attractorDistance the point is made to glider of this element. */
    attractors?: Element[];
    /** Unit for attractorDistance and snatchDistance, used for magnetized points and for snapToPoints. Possible values are 'screen' and 'user'. */
    attractorUnit?: String;
    /** If set to true, the point will only snap to (possibly invisibly) grid points when within Point#attractorDistance of such a grid point.The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
    attractToGrid?: Boolean;
    /** List of elements which are ignored by snapToPoints. */
    ignoredSnapToPoints?: Element[];
    /** Truncating rule for the digits in the infobox.'auto': done automatically by JXG.autoDigits() 'none': no truncation number: truncate after ”number digits” with JXG.toFixed() */
    infoboxDigits?: String | number;
    /** If true, the infobox is shown on mouse/pen over, if false not. If the value is 'inherit', the value of JXG.currentBoard#showInfobox is taken. */
    showInfobox?: Boolean;
    /** There are different point styles which differ in appearance. */
    face?: 'o' | 'line' | 'point' | 'cross' | 'plus' | 'minus' | 'divide' | 'diamond' | 'triangledown' | 'triangleleft' | 'triangleright' | 'triangleup' | 'square' | 'circle' | string;
    /** Size of a point, either in pixel or user coordinates. Means radius resp. half the width of a point (depending on the face). */
    size?: number | Function;
    /** Unit for size. Possible values are 'screen' and 'user. */
    sizeUnit?: String;
    /** Defines together with Point#snapSizeY the grid the point snaps on to. It is given in user coordinates, not in pixels. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the currentBoard. */
    snapSizeX?: number;
    /** Defines together with Point#snapSizeX the grid the point snaps on to. It is given in user coordinates, not in pixels. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the currentBoard. */
    snapSizeY?: number;
    /** If set to true, the point will snap to a grid of integer multiples of Point#snapSizeX and Point#snapSizeY (in user coordinates).The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
    snapToGrid?: Boolean;
    /** If set to true, the point will snap to the nearest point in distance of Point#attractorDistance. */
    snapToPoints?: Boolean;
    /** If the distance of the point to one of its attractors is at least this number the point will be released from being a glider on the attracting element. If set to zero nothing happens. */
    snatchDistance?: number;
    /** This attribute was used to determined the point layout. It was derived from GEONExT and was replaced by Point#face and Point#size. */
    style?: number;
    /** If true, the point size changes on zoom events. */
    zoom?: Boolean;
}
export interface Point extends CoordsElement, Omit<GeometryElement, 'setPositionDirectly' | 'snapToPoints' | 'setPosition'> {
    /** Convert the point to intersection point and update the construction. To move the point visual onto the intersection, a call of board update is necessary.  */
    makeIntersection(el1: string | Object, el2: string | Object, i: number, j: number): void;
    /** Applies the transformations of the element to {@link JXG.Point#baseElement}. Point transformations are relative to a base element.  */
    updateTransform(fromParent: Boolean): void;
    /** Set the face of a point element. */
    face(style: 'cross' | 'circle' | 'square' | 'plus' | 'minus' | 'diamond'): Boolean;
    /** Test if the point is on (is incident with) element  */
    isOn(el: GeometryElement, tol: number): Boolean;
    /** Updates the position of the point. */
    update(fromParent?: Boolean): number[];
    /** sets an arbitrary number of attributes for this Point element*/ setAttribute(attrs: PointAttributes): void;
}
export interface LineAttributes extends GeometryElementAttributes {
    /** Configure the arrow head at the position of its first point or the corresponding intersection with the canvas borderIn case firstArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value }type=7 is the default for curves if firstArrow: true */
    firstArrow?: Boolean | Object;
    /** Attributes for the line label. */
    label?: LabelAttributes;
    /** Configure the arrow head at the position of its second point or the corresponding intersection with the canvas border.In case lastArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line.// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value is 6. }type=7 is the default for curves if lastArrow: true */
    lastArrow?: Boolean | Object;
    /** This number (pixel value) controls where infinite lines end at the canvas border. If zero, the line ends exactly at the border, if negative there is a margin to the inside, if positive the line ends outside of the canvas (which is invisible). */
    margin?: number;
    /** Attributes for first defining point of the line. */
    point1?: PointAttributes;
    /** Attributes for second defining point of the line. */
    point2?: PointAttributes;
    /** Defines together with Point#snapSizeY the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the currentBoard. */
    snapSizeX?: number;
    /** Defines together with Point#snapSizeX the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the currentBoard. */
    snapSizeY?: number;
    /** If set to true, the point will snap to a grid defined by Point#snapSizeX and Point#snapSizeY. */
    snapToGrid?: Boolean;
    /** If true, line stretches infinitely in direction of its first point. Otherwise it ends at point1. */
    straightFirst?: Boolean;
    /** If true, line stretches infinitely in direction of its second point. Otherwise it ends at point2. */
    straightLast?: Boolean;
    /** Attributes for ticks of the line. */
    ticks?: TicksAttributes;
    /** If set to true, Line#firstArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
    touchFirstPoint?: Boolean;
    /** If set to true, Line#lastArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
    touchLastPoint?: Boolean;
}
export interface Line extends Omit<GeometryElement, 'addTransform'> {
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
    /** Add transformations to this line. */
    addTransform(transform: Transformation | Transformation[]): GeometryElement;
    /** Determines the angle between the positive x axis and the line. */
    getAngle(): number;
    /** Calculates the y intersect of the line. */
    getRise(): number;
    /** Alias for line.Slope */
    getSlope(): number;
    /** Checks whether (x,y) is near the line. */
    hasPoint(x: number, y: number): Boolean;
    /** Returns true, if the line is horizontal (if the y coordinate of the direction vector is 0).  */
    isHorizontal(): Boolean;
    /** Returns true, if the line is vertical (if the x coordinate of the direction vector is 0).  */
    isVertical(): Boolean;
    /** The distance between the two points defining the line. */
    L(): number;
    /** Calculates the slope of the line. */
    Slope(): number;
    /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. First we transform the interval [0,1] to [-1,1]. If the line has homogeneous coordinates [c, a, b] = stdform[] then the direction of the line is [b, -a]. Now, we take one finite point that defines the line, i.e. we take either point1 or point2 (in case the line is not the ideal line). Let the coordinates of that point be [z, x, y]. Then, the curve runs linearly from [0, b, -a] (t=-1) to [z, x, y] (t=0) and [z, x, y] (t=0) to [0, -b, a] (t=1) */
    X(t: number): number;
    /** Treat the line as parametric curve in homogeneous coordinates. See {@link JXG.Line#X} for a detailed description. */
    Y(t: number): number;
    /** Treat the line as parametric curve in homogeneous coordinates. See {@link JXG.Line#X} for a detailed description. */
    Z(t: number): number;
    /** Set a new fixed length, then update the board. */
    setFixedLength(l: string | number | Function): number;
    /** Returns the direction vector of the line. This is an array of length two containing the direction vector as [x, y]. It is defined as <li> the difference of the x- and y-coordinate of the second and first point, in case both points are finite or both points are infinite. <li> [x, y] coordinates of point2, in case only point2 is infinite. <li> [-x, -y] coordinates of point1, in case only point1 is infinite.  */
    Direction(): number[];
    /** sets an arbitrary number of attributes for this Line element*/ setAttribute(attrs: LineAttributes): void;
}
export interface GeometryElement3DAttributes extends GeometryElementAttributes {
}
export interface GeometryElement3D extends Omit<GeometryElement, 'X' | 'Y' | 'Z'> {
    /** missing description */
    element2D: GeometryElement;
    /** missing description */
    is3D: Boolean;
    /** missing description */
    view: any;
    /** sets an arbitrary number of attributes for this GeometryElement3D element*/ setAttribute(attrs: GeometryElement3DAttributes): void;
}
export interface View3DAttributes extends GeometryElementAttributes {
    /** Choose the projection type to be used: `parallel` or `central`. `parallel` is parallel projection, also called orthographic projection.   `central` is central projection, also called perspective projection */
    projection?: `parallel` | `central`;
    /** Specify the user handing of the azimuth. */
    az?: screenControls;
    /** Specify the user handing of the bank angle. */
    bank?: screenControls;
    /** Specify the user handing of the elevation. */
    el?: screenControls;
    /** use {enable:true, layers:[12]} */
    depthOrder?: Object;
    /** Position of the main axes in a View3D element. Possible values are 'center' and 'border'. */
    axesPosition?: String;
    /** Allow vertical dragging of objects, i.e. in direction of the z-axis. Subobjects areenabled: truekey: 'shift'Possible values for attribute key: 'shift' or 'ctrl'. */
    verticalDrag?: Object;
    /** Attributes of the 3D x-axis. */
    xAxis?: Object;
    /** Attributes of the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
    xPlaneFront?: Object;
    /** Attributes of the 3D y-axis on the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
    xPlaneFrontYAxis?: Object;
    /** Attributes of the 3D z-axis on the 3D plane orthogonal to the x-axis at the ”front” of the cube. */
    xPlaneFrontZAxis?: Object;
    /** Attributes of the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
    xPlaneRear?: Object;
    /** Attributes of the 3D y-axis on the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
    xPlaneRearYAxis?: Object;
    /** Attributes of the 3D z-axis on the 3D plane orthogonal to the x-axis at the ”rear” of the cube. */
    xPlaneRearZAxis?: Object;
    /** Attributes of the 3D y-axis. */
    yAxis?: Line3D;
    /** Attributes of the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
    yPlaneFront?: Object;
    /** Attributes of the 3D x-axis on the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
    yPlaneFrontXAxis?: Object;
    /** Attributes of the 3D z-axis on the 3D plane orthogonal to the y-axis at the ”front” of the cube. */
    yPlaneFrontZAxis?: Object;
    /** Attributes of the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
    yPlaneRear?: Object;
    /** Attributes of the 3D x-axis on the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
    yPlaneRearXAxis?: Object;
    /** Attributes of the 3D z-axis on the 3D plane orthogonal to the y-axis at the ”rear” of the cube. */
    yPlaneRearZAxis?: Object;
    /** Attributes of the 3D z-axis. */
    zAxis?: Line3D;
    /** Attributes of the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
    zPlaneFront?: Object;
    /** Attributes of the 3D x-axis on the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
    zPlaneFrontXAxis?: Object;
    /** Attributes of the 3D y-axis on the 3D plane orthogonal to the z-axis at the ”front” of the cube. */
    zPlaneFrontYAxis?: Object;
    /** Attributes of the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
    zPlaneRear?: Object;
    /** Attributes of the 3D x-axis on the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
    zPlaneRearXAxis?: Object;
    /** Attributes of the 3D y-axis on the 3D plane orthogonal to the z-axis at the ”rear” of the cube. */
    zPlaneRearYAxis?: Object;
    /** Enable user handling by a virtual trackball that allows to move the 3D scene with 3 degrees of freedom. If not enabled, direct user dragging (i.e. in the JSXGraph board, not manipulating the sliders) will only have two degrees of freedom. This means, the z-axis will always be projected to a vertical 2D line. <p> Sub-attributes: <ul> <li><tt>enabled</tt>: Boolean that specifies whether pointer navigation is allowed by elevation. <li><tt>outside</tt>: Boolean that specifies whether the pointer navigation is continued when the cursor leaves the board. <li><tt>button</tt>: Which button of the pointer should be used? (<tt>'-1'</tt> (=no button), <tt>'0'</tt> or <tt>'2'</tt>) <li><tt>key</tt>: Should an additional key be pressed? (<tt>'none'</tt>, <tt>'shift'</tt> or <tt>'ctrl'</tt>) </ul> */
    trackball?: Object;
    /** Fixed values for the view, which can be changed using keyboard keys `picture-up` and `picture-down`. Array of the form: [[el0, az0, r0], [el1, az1, r1, ...[eln, azn, rn]] */
    values?: number[];
    /** Attributes of the 3D x-axis at the border. */
    xAxisBorder?: Line3D;
    /** Attributes of the 3D y-axis at the border. */
    yAxisBorder?: Line3D;
    /** Attributes of the 3D z-axis at the border. */
    zAxisBorder?: Line3D;
}
export interface View3D extends Omit<GeometryElement, 'create'> {
    /** missing description */
    defaultAxes: Object;
    /** missing description */
    matrix3D: Object;
    /** missing description */
    angles: number[];
    /** missing description */
    az_slide: Slider;
    /** missing description */
    bank_slide: Slider;
    /** missing description */
    bbox3D: number[][];
    /** missing description */
    boxToCam: number[];
    /** missing description */
    el_slide: Slider;
    /** missing description */
    focalDist: number;
    /** missing description */
    matrix3DRot: number[];
    /** missing description */
    projectionType: string;
    /** missing description */
    r: number;
    /** missing description */
    shift: number;
    /** missing description */
    trackballEnabled: string;
    /** Sets camera view to the given values. */
    setView(az: number, el: number, r?: number): View3D;
    /**  */
    animateAzimuth(): Object;
    /** Creates a new 3D element of type elementType. */
    create(elementType: string, parents: any[], attributes: View3DAttributes): View3D;
    /** Intersect a ray with the bounding cube of the 3D view. */
    intersectionLineCube(p: number[], dir: number[], r: number): number[];
    /** returns array of length 2 containing the coordinates of the defining points of of the intersection segment, or false if there is no intersection */
    intersectionPlanePlane(plane1: Plane3D, plane2: Plane3D, d: number): number[];
    /** Test if coordinates are inside of the bounding cube. */
    isInCube(p: number[], polyhedron: Polyhedron3D): Boolean;
    /** Changes view to the next view stored in the attribute `values`.  */
    nextView(): View3D;
    /** Changes view to the previouw view stored in the attribute `values`.  */
    previousView(): View3D;
    /** Project a 2D coordinate to the plane defined by point  */
    project2DTo3DPlane(point2d: Point, normal: number[], foot: number[]): number[];
    /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. All horizontal moves of the 2D point are ignored. */
    project2DTo3DVertical(point2d: Point, base_c3d: number[]): number[];
    /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
    project3DTo2D(x: number | number[], y?: number, z?: number): number[];
    /** Limit 3D coordinates to the bounding cube.  Returns Array [Array, Boolean] containing [coords, corrected]. coords contains the updated 3D coordinates, correct is true if the coords have been changed.
    */
    project3DToCube(c3d: number[]): any[];
    /** Select a single or multiple elements at once. */
    select(str: string, onlyByIdOrName?: Boolean): GeometryElement3D | Composition;
    /**  */
    stopAzimuth(): any;
    /** Compares 3D elements according to their z-Index.  */
    compareDepth(a: GeometryElement3D, b: GeometryElement3D): number;
    /** Project a point on the screen to the nearest point, in screen distance, on a line segment in 3d space. The inputs must be in ordinary coordinates, but the output is in homogeneous coordinates.  */
    projectScreenToSegment(pScr: number[], end0: number[], end1: number[]): number[];
    /** Changes view to the determined view stored in the attribute `values`.  */
    setCurrentView(n: number): View3D;
    /** Map world coordinates to focal coordinates. These coordinate systems are explained in the {@link JXG.View3D#boxToCam} matrix documentation.  */
    worldToFocal(pWorld: number[], homog?: Boolean): void;
    /** sets an arbitrary number of attributes for this View3D element*/ setAttribute(attrs: View3DAttributes): void;
}
export interface ChartAttributes extends GeometryElementAttributes {
}
export interface Chart extends GeometryElement {
    /** missing description */
    elements: any[];
    /** Create bar chart defined by two data arrays. Attributes to change the layout of the bar chart are: &lt;ul&gt; &lt;li&gt; width (optional) &lt;li&gt; dir: &#039;horizontal&#039; or &#039;vertical&#039; &lt;li&gt; colors: array of colors &lt;li&gt; labels: array of labels &lt;/ul&gt; */
    drawBar(board: string | Board, x: number[], y: number[], attributes?: BoardAttributes): any[];
    /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. The degree of the polynomial is supplied through the attribute  */
    drawFit(board: string | Board, x: number[], y: number[], attributes?: BoardAttributes): Curve;
    /** Create line chart defined by two data arrays. */
    drawLine(board: string | Board, x: number[], y: number[], attributes?: BoardAttributes): Curve;
    /** Create pie chart. Attributes to change the layout of the pie chart are: &lt;ul&gt; &lt;li&gt; labels: array of labels &lt;li&gt; colors: (Array) &lt;li&gt; highlightColors (Array) &lt;li&gt; radius &lt;li&gt; center (coordinate array) &lt;li&gt; highlightOnSector (Boolean) &lt;/ul&gt; */
    drawPie(board: string | Board, y: number[], attributes?: BoardAttributes): Object;
    /** Create chart consisting of JSXGraph points. Attributes to change the layout of the point chart are: &lt;ul&gt; &lt;li&gt; fixed (Boolean) &lt;li&gt; infoboxArray (Array): Texts for the infobox &lt;/ul&gt; */
    drawPoints(board: string | Board, x: number[], y: number[], attributes?: BoardAttributes): number[];
    /** Create radar chart. Attributes to change the layout of the pie chart are: &lt;ul&gt; &lt;li&gt; paramArray: labels for axes, [ paramx, paramy, paramz ] &lt;li&gt; startShiftRatio: 0 &lt;= offset from chart center &lt;=1 &lt;li&gt; endShiftRatio:  0 &lt;= offset from chart radius &lt;=1 &lt;li&gt; startShiftArray: Adjust offsets per each axis &lt;li&gt; endShiftArray: Adjust offsets per each axis &lt;li&gt; startArray: Values for inner circle. Default values: minimums &lt;li&gt; start: one value to overwrite all startArray values &lt;li&gt; endArray: Values for outer circle, maximums by default &lt;li&gt; end: one value to overwrite all endArray values &lt;li&gt; labelArray &lt;li&gt; polyStrokeWidth &lt;li&gt; colors &lt;li&gt; highlightcolors &lt;li&gt; labelArray: [ row1, row2, row3 ] &lt;li&gt; radius &lt;li&gt; legendPosition &lt;li&gt; showCircles &lt;li&gt; circleLabelArray &lt;li&gt; circleStrokeWidth &lt;/ul&gt; */
    drawRadar(board: string | Board, parents: number[][], attributes?: BoardAttributes): Object;
    /** Create line chart that consists of a natural spline curve defined by two data arrays. */
    drawSpline(board: string | Board, x: number[], y: number[], attributes?: BoardAttributes): Curve;
    /** Template for dynamic charts update. This method is used to compute new entries for the arrays this.dataX and this.dataY. It is used in update. Default is an empty method, can be overwritten by the user. */
    updateDataArray(): Chart;
    /** sets an arbitrary number of attributes for this Chart element*/ setAttribute(attrs: ChartAttributes): void;
}
export interface CircleAttributes extends GeometryElementAttributes {
    /** Attributes for center point. */
    center?: GeometryElementAttributes;
    /** If true, moving the mouse over inner points triggers hasPoint. */
    hasInnerPoints?: Boolean;
    /** Attributes for circle label. */
    label?: LabelAttributes;
    /** Attributes for center point. */
    point?: PointAttributes;
    /** Attributes for center point. */
    point2?: PointAttributes;
}
export interface Circle extends Omit<GeometryElement, 'addTransform'> {
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
    /** Add transformations to this circle. */
    addTransform(transform: Transformation | Transformation[]): GeometryElement;
    /** Circle area */
    Area(): number;
    /** Get bounding box of the circle.  */
    bounds(): number[];
    /** Calculates the diameter of the circle.  */
    Diameter(): number;
    /** Get data to construct this element. Data consists of the parent elements and static data like radius.  */
    getParents(): number[];
    /** Use {@link JXG.Circle#Radius}.  */
    getRadius(): number;
    /** Perimeter (circumference) of circle. */
    Perimeter(): number;
    /** Calculates the radius of the circle. */
    Radius(value: number): number;
    /** Set a new radius, then update the board. */
    setRadius(r: number | Function): Circle;
    /** Treats the circle as parametric curve and calculates its X coordinate. */
    X(t: number): number;
    /** Treats the circle as parametric curve and calculates its Y coordinate. */
    Y(t: number): number;
    /** Treat the circle as parametric curve and calculates its Z coordinate. */
    Z(t: number): number;
    /** Uses the boards renderer to update the circle.  */
    update(): void;
    /** sets an arbitrary number of attributes for this Circle element*/ setAttribute(attrs: CircleAttributes): void;
}
export interface Circle3DAttributes extends GeometryElement3DAttributes {
}
export interface Circle3D extends GeometryElement3D {
    /** missing description */
    center: Point3D;
    /** Calculates the radius of the circle.  */
    Radius(value?: number | Function): number;
    /** Set a new radius, then update the board.  */
    setRadius(r: number | Function): void;
    /** sets an arbitrary number of attributes for this Circle3D element*/ setAttribute(attrs: Circle3DAttributes): void;
}
export interface ComplexAttributes {
}
export interface Complex {
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
    /** Add another complex number to this complex number. */
    add(c: Complex | number): Complex;
    /** Conjugate a complex number in place. */
    conj(): Complex;
    /** Divide this complex number by the given complex number. */
    div(c: Complex | number): Complex;
    /** Multiply another complex number to this complex number. */
    mult(c: Complex | number): Complex;
    /** Subtract another complex number from this complex number. */
    sub(c: Complex | number): Complex;
    /** Converts a complex number into a string. */
    toString(): String;
    /** sets an arbitrary number of attributes for this Complex element*/ setAttribute(attrs: ComplexAttributes): void;
}
export interface CompositionAttributes {
}
export interface Composition {
    /** Adds an element to the composition container. */
    add(what: string, element: GeometryElement | Composition): Boolean;
    /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. See {@link JXG.GeometryElement#fullUpdate} for further description, valid parameters and return values. */
    fullUpdate(): Boolean;
    /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. See {@link JXG.GeometryElement#highlight} for further description, valid parameters and return values. */
    highlight(): Boolean;
    /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. See {@link JXG.GeometryElement#noHighlight} for further description, valid parameters and return values. */
    noHighlight(): Boolean;
    /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. See {@link JXG.GeometryElement#prepareUpdate} for further description, valid parameters and return values. */
    prepareUpdate(): Boolean;
    /** Remove an element from the composition container. */
    remove(what: string): Boolean;
    /** Invokes setAttribute for every stored element with a setAttribute method and hands over the given arguments. See {@link JXG.GeometryElement#setAttribute} for further description, valid parameters and return values.  */
    setAttribute(): void;
    /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. See {@link JXG.GeometryElement#setParents} for further description, valid parameters and return values. */
    setParents(parents: any[]): any;
    /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. See {@link JXG.GeometryElement#updateRenderer} for further description, valid parameters and return values. */
    updateRenderer(): Point;
    /** Invokes update for every stored element with a update method and hands over the given arguments. See {@link JXG.GeometryElement#update} for further description, valid parameters and return values.  */
    update(): void;
}
export interface CoordsAttributes {
}
export interface Coords {
    /** missing description */
    emitter: boolean;
    /** missing description */
    scrCoords: number[];
    /** missing description */
    usrCoords: number[];
    /** missing description */
    board: Board;
    /** Calculate distance of one point to another. */
    distance(coord_type: number, coordinates: Coords): number;
    /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
    isReal(): Boolean;
    /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
    setCoordinates(coord_type: number, coordinates: number[], doRound?: Boolean, noevent?: Boolean): Coords;
    /** sets an arbitrary number of attributes for this Coords element*/ setAttribute(attrs: CoordsAttributes): void;
}
export interface CurveAttributes extends GeometryElementAttributes {
    /** Line endings (linecap) of a curve stroke. */
    lineCap?: 'butt' | 'round' | 'square';
    /** The curveType is set in JXG.Curve#generateTerm and used in JXG.Curve#updateCurve. Possible values are'none' 'plot': Data plot 'parameter': we can not distinguish function graphs and parameter curves 'functiongraph': function graph 'polar' 'implicit' (not yet) Only parameter and plot are set directly. Polar is set with JXG.GeometryElement#setAttribute only. */
    curveType?: String;
    /** If true use a recursive bisection algorithm. It is slower, but usually the result is better. It tries to detect jumps and singularities. */
    doAdvancedPlot?: Boolean;
    /** If true use the algorithm by Gillam and Hohenwarter, which was default until version 0.98. */
    doAdvancedPlotOld?: Boolean;
    /** Configure arrow head at the start position for curve. Recommended arrow head type is 7. */
    firstArrow?: Boolean | Object;
    /** The data points of the curve are not connected with straight lines but with bezier curves. */
    handDrawing?: Boolean;
    /** Attributes for curve label. */
    label?: LabelAttributes;
    /** Configure arrow head at the end position for curve. Recommended arrow head type is 7. */
    lastArrow?: Boolean | Object;
    /** number of points used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is false. */
    numberPointsHigh?: number;
    /** number of points used for plotting triggered by move events (i.e. lower quality plotting but fast) in case Curve#doAdvancedPlot is false. */
    numberPointsLow?: number;
    /** Select the version of the plot algorithm.Version 1 is very outdatedVersion 2 is the default version in JSXGraph v0.99.*, v1.0, and v1.1, v1.2.0Version 3 is an internal version that was never published ina stable version.Version 4 is available since JSXGraph v1.2.0Version 4 plots correctly logarithms if the function term is supplied as string (i.e. as JessieCode) */
    plotVersion?: number;
    /** Recursion depth used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is true. */
    recursionDepthHigh?: number;
    /** number of points used for plotting triggered by move events in case (i.e. lower quality plotting but fast) Curve#doAdvancedPlot is true. */
    recursionDepthLow?: number;
}
export interface Curve extends Omit<GeometryElement, 'addTransform'> {
    /** missing description */
    dataX: number[];
    /** missing description */
    dataY: number[];
    /** missing description */
    numberPoints: number;
    /** missing description */
    qdt: Object;
    /** missing description */
    ticks: number[];
    /** Add transformations to this curve. */
    addTransform(transform: Transformation | Transformation[]): GeometryElement;
    /** Allocate points in the Coords array this.points */
    allocatePoints(): void;
    /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. New methods X() and Y() for the Curve object are generated, further new methods for minX() and maxX(). If mi or ma are not supplied, default functions are set. */
    generateTerm(varname: string, xterm: string | number | number[] | Function, yterm: string | number | number[] | Function, mi?: string | number | Function, ma?: string | number | Function): number[];
    /** Position a curve label according to the attributes "position" and distance. This function is also used for angle, arc and sector. */
    getLabelPosition(pos: string, distance: number): Coords;
    /** Checks whether (x,y) is near the curve. */
    hasPoint(x: number, y: number, start?: number): Boolean;
    /** Gives the default value of the right bound for the curve. May be overwritten in {@link JXG.Curve#generateTerm}. */
    maxX(): number;
    /** Gives the default value of the left bound for the curve. May be overwritten in {@link JXG.Curve#generateTerm}. */
    minX(): number;
    /** Shift the curve by the vector &#039;where&#039;. */
    moveTo(where: number[]): Promise<any>;
    /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
    notifyParents(contentStr: string): void;
    /** Computes for equidistant points on the x-axis the values of the function */
    update(): Curve;
    /** Computes the curve path */
    updateCurve(): Curve;
    /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays {@link JXG.Curve#dataX} and {@link JXG.Curve#dataY}. It is used in {@link JXG.Curve#updateCurve}. Default is an empty method, can be overwritten by the user. */
    updateDataArray(): void;
    /** Updates the visual contents of the curve. */
    updateRenderer(): Curve;
    /** Applies the transformations of the curve to the given point &lt;tt&gt;p&lt;/tt&gt;. Before using it, {@link JXG.Curve#updateTransformMatrix} has to be called. */
    updateTransform(p: Point): GeometryElement;
    /** The parametric function which defines the x-coordinate of the curve. */
    X(t: number, suspendUpdate?: Boolean): number;
    /** The parametric function which defines the y-coordinate of the curve. */
    Y(t: number, suspendUpdate?: Boolean): number;
    /** Treat the curve as curve with homogeneous coordinates. */
    Z(t: number): number;
    /** sets an arbitrary number of attributes for this Curve element*/ setAttribute(attrs: CurveAttributes): void;
}
export interface Curve3DAttributes extends GeometryElement3DAttributes {
}
export interface Curve3D extends GeometryElement3D {
    /**  */
    updateTransform(): GeometryElement;
    /** Generic function which evaluates the function term of the curve and applies its transformations. */
    evalF(u: number): void;
    /** Function defining the curve plus applying transformations. */
    F(u: number): void;
    /** Simple curve plotting algorithm. */
    updateCoords(): void;
    /** Function which maps (u) to z; i.e. */
    X(u: number): number;
    /** Function which maps (u) to y; i.e. */
    Y(u: number): number;
    /** Function which maps (u) to z; i.e. */
    Z(u: number): number;
    /** sets an arbitrary number of attributes for this Curve3D element*/ setAttribute(attrs: Curve3DAttributes): void;
}
export interface DumpAttributes {
}
export interface Dump {
    /** Adds markers to every element of the board */
    addMarkers(board: Board, markers: string | string[], values: string[]): void;
    /** Converts an array of different values into a parameter string that can be used by the code generators. */
    arrayToParamStr(a: any[], converter: Function): string;
    /** Removes markers from every element on the board. */
    deleteMarkers(board: Board, markers: string | string[]): void;
    /** Generate a save-able structure with all elements. This is used by {@link JXG.Dump#toJessie} and {@link JXG.Dump#toJavaScript} to generate the script. */
    dump(board: Board): string[];
    /** Eliminate default values given by {@link JXG.Options} from the attributes object. */
    minimizeObject(instance: Object, s: Object): Dump;
    /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
    prepareAttributes(board: Board, obj: GeometryElement): Object;
    /** Stringifies a string, i.e. puts some quotation marks around &lt;tt&gt;s&lt;/tt&gt; if it is of type string. */
    str(s: string): string;
    /** Saves the construction in &lt;tt&gt;board&lt;/tt&gt; to JavaScript. */
    toJavaScript(board: Board): string;
    /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
    toJCAN(obj: Object): string;
    /** Saves the construction in &lt;tt&gt;board&lt;/tt&gt; to JessieCode. */
    toJessie(board: Board): string;
    /** sets an arbitrary number of attributes for this Dump element*/ setAttribute(attrs: DumpAttributes): void;
}
export interface ForeignObjectAttributes extends GeometryElementAttributes {
    /** If set to true, this object is only evaluated once and not re-evaluated on update. This is necessary if you want to have a bord within a foreignObject of another board. */
    evaluateOnlyOnce?: Boolean;
    /** List of attractor elements. If the distance of the ForeignObject is less than attractorDistance the ForeignObject is made to glider of this element. */
    attractors?: Element[];
}
export interface ForeignObject extends Omit<GeometryElement, 'size'> {
    /** missing description */
    content: number[];
    /** missing description */
    size: number[];
    /** Returns the height of the foreignObject in user coordinates. */
    H(): number;
    /** Checks whether (x,y) is over or near the image; */
    hasPoint(x: number, y: number): Boolean;
    /** Set the width and height of the foreignObject. After setting a new size, board.update() or foreignobject.fullUpdate() has to be called to make the change visible. */
    setSize(width: number, height: number): ForeignObject;
    /** Returns the width of the foreignObject in user coordinates. */
    W(): number;
    /** sets an arbitrary number of attributes for this ForeignObject element*/ setAttribute(attrs: ForeignObjectAttributes): void;
}
export interface GroupAttributes extends CompositionAttributes {
}
export interface Group extends Composition {
    /** missing description */
    coords: Object;
    /** Adds all points in a group to this group. */
    addGroup(group: Group): Group;
    /** Adds ids of elements to the array this.parents. This is a copy of {@link Element.addParents}. */
    addParents(parents: GeometryElement[]): Object;
    /** Adds an Point to this group. */
    addPoint(object: Point | Image): Group;
    /** Adds multiple points to this group. */
    addPoints(objects: Point[]): Group;
    /** Adds a point to the set of rotation points of the group. Dragging at one of these points results into a rotation of the whole group around the rotation center of the group {@see JXG.Group#setRotationCenter}. */
    addRotationPoint(point: Point): Group;
    /** Adds a point to the set of the scale points of the group. Dragging at one of these points results into a scaling of the whole group. */
    addScalePoint(point: Point, direction: number | Function): Group;
    /** Adds a point to the set of the translation points of the group. Dragging one of these points results into a translation of the whole group. */
    addTranslationPoint(point: Point): Group;
    /** List of the element ids resp. values used as parents in {@link JXG.Board#create}. */
    getParents(): number[];
    /** Removes a point from the group. */
    removePoint(point: Point): Group;
    /** Removes the rotation property from a point of the group. */
    removeRotationPoint(point: Point): Group;
    /** Removes the scaling property from a point of the group. */
    removeScalePoint(point: Point): Group;
    /** Removes the translation property from a point of the group. */
    removeTranslationPoint(point: Point): Group;
    /** Sets ids of elements to the array this.parents. This is a copy of {@link Element.setParents} First, this.parents is cleared. See {@link Group#addParents}. */
    setParents(parents: any[]): Object;
    /** Sets the center of rotation for the group. This is either a point or the centroid of the group. */
    setRotationCenter(object: Point | pointAddr | Function): Group;
    /** Sets the rotation points of the group. Dragging at one of these points results into a rotation of the whole group around the rotation center of the group {@see JXG.Group#setRotationCenter}. */
    setRotationPoints(objects: Point | Point[] | pointAddr[]): Group;
    /** Sets the center of scaling for the group. This is either a point or the centroid of the group. */
    setScaleCenter(object: Point): Group;
    /** Sets the scale points of the group. Dragging at one of these points results into a scaling of the whole group. */
    setScalePoints(objects: Point | Point[], direction?: string): Group;
    /** Sets the translation points of the group. Dragging at one of these points results into a translation of the whole group. */
    setTranslationPoints(objects: Point | Point[]): Group;
    /** Releases all elements of this group. */
    ungroup(): Group;
    /** Sends an update to all group members. This method is called from the points' coords object event listeners and not by the board.  */
    update(): void;
}
export interface ImageAttributes extends GeometryElementAttributes {
    /** List of attractor elements. If the distance of the image is less than attractorDistance the image is made to glider of this element. */
    attractors?: Element[];
    /** Defines the CSS class used by the image. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. opacity. The default CSS class is defined in jsxgraph.css. */
    cssClass?: string;
    /** Defines the CSS class used by the image when highlighted. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. highlightFillOpacity. The default CSS class is defined in jsxgraph.css. */
    highlightCssClass?: string;
    /** Image rotation in degrees. */
    rotate?: number;
    /** Defines together with Image#snapSizeY the grid the image snaps on to. The image will only snap on user coordinates which are integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the currentBoard. */
    snapSizeX?: number;
    /** Defines together with Image#snapSizeX the grid the image snaps on to. The image will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the currentBoard. */
    snapSizeY?: number;
}
export interface Image extends Omit<GeometryElement, 'size'> {
    /** missing description */
    size: number[];
    /** missing description */
    url: string;
    /** Returns the height of the image in user coordinates. */
    H(): number;
    /** Checks whether (x,y) is over or near the image; */
    hasPoint(x: number, y: number): Boolean;
    /** Set the width and height of the image. After setting a new size, board.update() or image.fullUpdate() has to be called to make the change visible. */
    setSize(width: number, height: number): void;
    /** Returns the width of the image in user coordinates. */
    W(): number;
    /** sets an arbitrary number of attributes for this Image element*/ setAttribute(attrs: ImageAttributes): void;
}
export interface ImplicitCurveAttributes extends GeometryElementAttributes {
    /** Allowed distance (in user units) of predictor point to curve. */
    delta_0?: number;
    /** If h is below this threshold (in user units), we bail out of the tracing phase of that component. */
    h_critical?: number;
    /** Inverse of desired number of Newton steps. */
    kappa_0?: number;
    /** Use Gosper's loop detector. */
    loop_detection?: Boolean;
    /** Minimum acos of angle to detect loop. */
    loop_dir?: number;
    /** Allowed distance (in user units multiplied by actual step width) to detect loop. */
    loop_dist?: number;
    /** Defines the margin (in user coordinates) around the JSXGraph board in which the implicit curve is plotted. */
    margin?: number;
    /** Maximum iterations for one component of the implicit curve. */
    max_steps?: number;
    /** Tolerance to find starting points for the tracing phase of a component. */
    tol_0?: number;
    /** Tolerance for cusp / bifurcation detection. */
    tol_cusp?: number;
    /** Tolerance for the Newton steps. */
    tol_newton?: number;
    /** If two points are closer than this value, we bail out of the tracing phase for that component. */
    tol_progress?: number;
    /** Horizontal resolution: distance (in pixel) between vertical lines to search for components of the implicit curve. */
    resolution_outer?: number;
    /** Vertical resolution (in pixel) to search for components of the implicit curve. */
    resolution_inner?: number;
    /** Angle α0 between two successive tangents: determines the smoothness of the curve. */
    alpha_0?: number;
    /** Initial step width (in user units). */
    h_initial?: number;
    /** Maximum step width (in user units). */
    h_max?: number;
    /** Half of the box size (in user units) to search for existing line segments in the quadtree. */
    qdt_box?: number;
}
export interface ImplicitCurve extends GeometryElement {
    /** missing description */
    domain: any;
    /** Partial derivative in the first variable of the left side of the equation <i>f(x,y)=0</i>. If null, then numerical derivative is used.  */
    dfx(): number;
    /** Partial derivative in the second variable of the left side of the equation <i>f(x,y)=0</i>. If null, then numerical derivative is used.  */
    dfy(): number;
    /** Function of two variables for the left side of the equation <i>f(x,y)=0</i>.  */
    f(): number;
    /** sets an arbitrary number of attributes for this ImplicitCurve element*/ setAttribute(attrs: ImplicitCurveAttributes): void;
}
export interface IntersectionCircle3DAttributes extends GeometryElement3DAttributes {
}
export interface IntersectionCircle3D extends GeometryElement3D {
    /** sets an arbitrary number of attributes for this IntersectionCircle3D element*/ setAttribute(attrs: IntersectionCircle3DAttributes): void;
}
export interface IntersectionLine3DAttributes extends GeometryElement3DAttributes {
}
export interface IntersectionLine3D extends GeometryElement3D {
    /** sets an arbitrary number of attributes for this IntersectionLine3D element*/ setAttribute(attrs: IntersectionLine3DAttributes): void;
}
export interface Line3DAttributes extends LineAttributes, GeometryElement3DAttributes {
    /** Attributes of the defining point in case the line is defined by [point, vector, [range]] */
    point?: Point3DAttributes;
    /** Attributes of the first point in case the line is defined by [point, point]. */
    point1?: Point3DAttributes;
    /** Attributes of the second point in case the line is defined by [point, point]. */
    point2?: Point3DAttributes;
    /** If the 3D line is defined by two points and if this attribute is true, the 3D line stretches infinitely in direction of its first point. */
    straightFirst?: Boolean;
    /** If the 3D line is defined by two points and if this attribute is true, the 3D line stretches infinitely in direction of its second point. */
    straightLast?: Boolean;
}
export interface Line3D extends GeometryElement3D {
    /** missing description */
    direction: number[] | Function;
    /** missing description */
    point: Point3D;
    /** missing description */
    endpoints: number[];
    /** missing description */
    vec: number[];
    /** missing description */
    range: number[];
    /** Update the z-index of the line, i.e. the z-index of its midpoint.  */
    updateZIndex(): Line3D;
    /** sets an arbitrary number of attributes for this Line3D element*/ setAttribute(attrs: Line3DAttributes): void;
}
export interface Plane3DAttributes extends GeometryElement3DAttributes {
    /** Optional 3D mesh of a finite plane.  Mesh:{visible:true} */
    mesh3d?: MeshAttributes;
    /** Attributes of the defining point in case the plane is defined by [point, vector, vector]. */
    point?: Point3DAttributes;
    /** Attributes of the first point in case the plane is defined by [point, point, point]. */
    point1?: Point3DAttributes;
    /** Attributes of the second point in case the plane is defined by [point, point, point]. */
    point2?: Point3DAttributes;
    /** Attributes of the third point in case the plane is defined by [point, point, point]. */
    point3?: Point3DAttributes;
    /** If the second parameter and the third parameter are given as arrays or functions and threePoints:true then the second and third parameter are interpreted as point coordinates and not as directions, i.e. */
    threePoints?: Boolean;
}
export interface Plane3D extends GeometryElement3D {
    /** missing description */
    range_u: number[];
    /** missing description */
    range_v: number[];
    /** missing description */
    d: number[];
    /** missing description */
    direction1: number[] | Function;
    /** missing description */
    direction2: number[] | Function;
    /** missing description */
    normal: number[];
    /** missing description */
    point: Point3D;
    /** missing description */
    vec1: number[];
    /** missing description */
    vec2: number[];
    /** Get coordinate array [x, y, z] of a point on the plane for parameters (u, v). */
    F(u: number, v: number): number[];
    /** Get x-coordinate of a point on the plane for parameters (u, v). */
    X(u: number, v: number): number;
    /** Get y-coordinate of a point on the plane for parameters (u, v). */
    Y(u: number, v: number): number;
    /** Get z-coordinate of a point on the plane for parameters (u, v). */
    Z(u: number, v: number): number;
    /** sets an arbitrary number of attributes for this Plane3D element*/ setAttribute(attrs: Plane3DAttributes): void;
}
export interface Point3DAttributes extends PointAttributes, GeometryElement3DAttributes {
}
export interface Point3D extends Omit<GeometryElement3D, 'setPosition'> {
    /** missing description */
    slide: GeometryElement3D;
    /** Calculate the distance from one point to another. If one of the points is on the plane at infinity, return positive infinity.  */
    distance(pt: Point3D): number;
    /** Move along a path defined by an array of coordinates  */
    moveAlong(traversePath?: number[][], time?: number, options?: Object): CoordsElement;
    /** Check whether a point's position is finite, i.e. the first entry is not zero.  */
    testIfFinite(): Boolean;
    /** Set the position of a 3D point.  */
    setPosition(coords: number[], noevent?: Boolean): Point3D;
    /** Get w-coordinate of a 3D point.  */
    W(): number;
    /** Get x-coordinate of a 3D point. */
    X(): number;
    /** Get y-coordinate of a 3D point. */
    Y(): number;
    /** Get z-coordinate of a 3D point. */
    Z(): number;
    /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.    EG:
   
   ```js
   P.moveTo([A.X(), A.Y()], 5000)
   ``` */
    moveTo(where: number[] | Function, time?: number, options?: MoveToOptions): Promise<any>;
    /** sets an arbitrary number of attributes for this Point3D element*/ setAttribute(attrs: Point3DAttributes): void;
}
export interface PolygonAttributes extends GeometryElementAttributes {
    /** Attributes for the polygon border lines. */
    borders?: LineAttributes;
    /** If true, moving the mouse over inner points triggers hasPoint. */
    hasInnerPoints?: Boolean;
    /** By default, the strokewidths of the borders of a polygon are not changed during highlighting (only strokeColor and strokeOpacity are changed to highlightStrokeColor, and highlightStrokeOpacity). However, strokewidth is changed to highlightStrokewidth if an individual border gets the focus.With this attribute set to true, also the borders change strokeWidth if the polygon itself gets the focus. */
    highlightByStrokeWidth?: Boolean;
    /** Attributes for the polygon label. */
    label?: LabelAttributes;
    /** Attributes for the polygon vertices.  eg: {vertices: { opacity: 0 }} */
    vertices?: GeometryElementAttributes;
    /** Is the polygon bordered by lines? */
    withLines?: Boolean;
}
export interface Polygon extends GeometryElement {
    /** missing description */
    borders: Line[];
    /** missing description */
    vertices: Point[];
    /** Area of (not self-intersecting) polygon  */
    Area(): number;
    /** Bounding box of a polygon. The bounding box is an array of four numbers: the first two numbers determine the upper left corner, the last two number determine the lower right corner of the bounding box. The width and height of a polygon can then determined like this:  */
    boundingBox(): number[];
    /** return TextAnchor  */
    getTextAnchor(): number[];
    /** Alias for Perimeter. For polygons, the perimeter is returned. For polygonal chains the length is returned.  */
    L(): number;
    /** Perimeter of polygon. For a polygonal chain, this method returns its length.  */
    Perimeter(): number;
    /** Checks whether (x,y) is near the polygon. */
    hasPoint(x: number, y: number): Boolean;
    /** Add more points to the polygon. The new points will be inserted at the end. The attributes of new border segments are set to the same values as those used when the polygon was created. If new vertices are supplied by coordinates, the default attributes of polygon vertices are taken as their attributes. Therefore, the visual attributes of new vertices and borders may have to be adapted afterwards.  */
    addPoints(p: Point): Polygon;
    /** Finds the index to a given point reference.  */
    findPoint(p: Point): Point;
    /** Hide the polygon including its border lines. It will still exist but not visible on the board.  */
    hideElement(borderless?: Boolean): void;
    /** Insert points to the vertex list of the polygon after index <tt>idx</tt>. The attributes of new border segments are set to the same values as those used when the polygon was created. If new vertices are supplied by coordinates, the default attributes of polygon vertices are taken as their attributes. Therefore, the visual attributes of new vertices and borders may have to be adapted afterwards.  */
    insertPoints(idx: number, p: Point): Polygon;
    /** Generic method for the intersection of this polygon with another polygon. The parent object is the clipping polygon, it expects as parameter a polygon to be clipped. Both polygons have to be convex. Calls the algorithm by Sutherland, Hodgman, {@link JXG.Polygon#sutherlandHodgman}. <p> An alternative is to use the methods from {@link JXG.Math.Clip}, where the algorithm by Greiner and Hormann is used.  */
    intersect(polygon: Polygon): number[];
    /** Wrapper for JXG.Math.Geometry.pnpoly.  */
    pnpoly(x_in: number, y_in: number, coord_type: number): Boolean;
    /** Removes given set of vertices from the polygon  */
    removePoints(p: Point): Polygon;
    /** Moves the polygon by the difference of two coordinates.  */
    setPositionDirectly(method: number, coords: NumberFunction[], oldcoords: NumberFunction[]): GeometryElement;
    /** Make the element visible.  */
    showElement(borderless?: Boolean): GeometryElement;
    /** Uses the boards renderer to update the polygon. */
    updateRenderer(): Polygon;
    /** sets an arbitrary number of attributes for this Polygon element*/ setAttribute(attrs: PolygonAttributes): void;
}
export interface Polygon3DAttributes extends PolygonAttributes, GeometryElement3DAttributes {
}
export interface Polygon3D extends GeometryElement3D {
    /** missing description */
    vertices: number[][];
    /** sets an arbitrary number of attributes for this Polygon3D element*/ setAttribute(attrs: Polygon3DAttributes): void;
}
export interface TextAttributes extends GeometryElementAttributes {
    /** Anchor element Point, Text or Image of the text. */
    anchor?: Object;
    /** The horizontal alignment of the text, eg: 'left' */
    anchorX?: string;
    /** The vertical alignment of the text, 'eg 'top' */
    anchorY?: string;
    /** List of attractor elements. */
    attractors?: Element[];
    /** CSS class of the text in non-highlighted view. */
    cssClass?: string;
    /** Default CSS properties of the HTML text element. */
    cssDefaultStyle?: string;
    /** CSS properties of the HTML text element. */
    cssStyle?: string;
    /** Used to round texts given by a number. */
    digits?: number;
    /** Determines the rendering method of the text. */
    display?: "html" | "internal";
    /** Sensitive area for dragging the text. */
    dragArea?: string;
    /** The font size in pixels. */
    fontSize?: number;
    /** CSS unit for the font size of a text element. */
    fontUnit?: string;
    /** CSS class of the text in highlighted view. */
    highlightCssClass?: string;
    /** Default CSS properties of the HTML text element in case of highlighting. */
    highlightCssDefaultStyle?: string;
    /** CSS properties of the HTML text element in case of highlighting. */
    highlightCssStyle?: string;
    /** Internationalization support for texts consisting of a number only. */
    intl?: object;
    /** If enabled, the text will be handled as label. */
    isLabel?: Boolean;
    /** Object or function returning an object that contains macros for KaTeX */
    katexMacros?: Object;
    /** If set to true, the text is parsed and evaluated. */
    parse?: Boolean;
    /** Text rotation in degrees. */
    rotate?: number;
    /** Defines together with Text#snapSizeY the grid the text snaps on to. */
    snapSizeX?: number;
    /** Defines together with Text#snapSizeX the grid the text snaps on to. */
    snapSizeY?: number;
    /** If true, the input will be given to ASCIIMathML before rendering. */
    useASCIIMathML?: Boolean;
    /** If set to true and caja's sanitizeHTML function can be found it will be used to sanitize text output. */
    useCaja?: Boolean;
    /** If true, KaTeX will be used to render the input string. */
    useKatex?: Boolean;
    /** If true, MathJax will be used to render the input string. */
    useMathJax?: Boolean;
    /** If the text content is solely a number and this attribute is true (default) then the number is either formatted according to the number of digits given by the attribute 'digits' or converted into a fraction if 'toFraction' is true. <p> Otherwise, display the raw number. */
    formatNumber?: Boolean;
    /** Display number as integer + nominator / denominator. Works together with MathJax, KaTex or as plain text. */
    toFraction?: Boolean;
    /**  */
    visible?: Boolean;
}
export interface Text extends Omit<GeometryElement, 'size'> {
    /** missing description */
    size: number[];
    /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. The method assumes that the lower left corner is at position [el.X(), el.Y()] of the text element el, i.e. the attributes anchorX, anchorY are ignored.  &lt;p&gt; &lt;strong&gt;Attention:&lt;/strong&gt; for labels, [0, 0, 0, 0] is returned. */
    bounds(): number[];
    /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
    crudeSizeEstimate(): number[];
    /** Returns the value of the attribute  */
    getAnchorX(): number;
    /** Returns the value of the attribute  */
    getAnchorY(): number;
    /** Return the width of the text element. */
    getSize(): number[];
    /** Replace _{} by &amp;lt;sub&amp;gt; */
    replaceSub(te: string): string;
    /** Replace ^{} by &amp;lt;sup&amp;gt; */
    replaceSup(te: string): string;
    /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. Twelve different angles are possible. */
    setAutoPosition(): Text;
    /** Move the text to new coordinates. */
    setCoords(x: number, y: number): object;
    /** Defines new content. */
    setText(text: string): Text;
    /** Defines new content but converts &amp;lt; and &amp;gt; to HTML entities before updating the DOM. */
    setTextJessieCode(text: string): this;
    /** Evaluates the text. Then, the update function of the renderer is called. */
    update(fromParent?: Boolean): void;
    /** Recompute the width and the height of the text box. Updates the array {@link JXG.Text#size} with pixel values. The result may differ from browser to browser by some pixels. In canvas an old IEs we use a very crude estimation of the dimensions of the textbox. JSXGraph needs {@link JXG.Text#size} for applying rotations in IE and for aligning text. */
    updateSize(): this;
    /** Decode unicode entities into characters. */
    utf8_decode(string: string): string;
    /** sets an arbitrary number of attributes for this Text element*/ setAttribute(attrs: TextAttributes): void;
}
export interface Text3DAttributes extends TextAttributes {
}
export interface Text3D extends Text {
    /** Set the position of a 3D point. If `noEvent` true, then no events are triggered. */
    setPosition(method: number, coords: number[]): CoordsElement;
    /** Check whether a text's position is finite, i.e. the first entry is not zero.  */
    testIfFinite(): Boolean;
    /** sets an arbitrary number of attributes for this Text3D element*/ setAttribute(attrs: Text3DAttributes): void;
}
export interface TicksAttributes extends GeometryElementAttributes {
    /** Determine the position of the tick with value 0. 'left' means point1 of the line, 'right' means point2, and 'middle' is equivalent to the midpoint of the defining points. This attribute is ignored if the parent line is of type axis. */
    anchor?: String;
    /** Format tick labels that were going to have scientific notation like 5.00e+6 to look like 5•10⁶. */
    beautifulScientificTickLabels?: Boolean;
    /** If a label exceeds Ticks#maxLabelLength this determines the number of digits used to shorten the tick label. */
    digits?: number;
    /** Draw labels yes/no */
    drawLabels?: Boolean;
    /** Draw the zero tick, that lies at line.point1? */
    drawZero?: Boolean;
    /** Tick face for major ticks of finite length. By default (face: '|') this is a straight line. Possible other values are '<' and '>'. These faces are used in {@link JXG.Hatch} for hatch marking parallel lines. */
    face?: string;
    /** If a label exceeds {@link Ticks#maxLabelLength} this determines the precision used to shorten the tick label. Deprecated! Replaced by the attribute <tt>digits</tt>. */
    precision?: string;
    /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). The third parameter is a null, number or a string. In the latter two cases, this value is taken. Returns a string. */
    generateLabelText?: Function;
    /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). */
    generateLabelValue?: Function;
    /** If true, ignore the tick endings attribute for infinite (full height) ticks. This affects major and minor ticks. */
    ignoreInfiniteTickEndings?: Boolean;
    /** Whether line boundaries should be included or not in the lower and upper bounds when creating ticks. In mathematical terms: if a segment considered as interval is open (includeBoundaries:false) or closed (includeBoundaries:true). In case of open interval, the interval is shortened by a small ε. */
    includeBoundaries?: Boolean;
    /** Let JSXGraph determine the distance between ticks automatically. If true, the attribute ticksDistance is ignored. The distance between ticks is affected by the size of the currentBoard and the attribute minTicksDistance (in pixel). */
    insertTicks?: Boolean;
    /** Internationalization support for ticks labels. */
    intl?: Object;
    /** Attributes for the ticks labels */
    label?: LabelAttributes;
    /** User defined labels for special ticks. Instead of the i-th tick's position, the i-th string stored in this array is shown. If the number of strings in this array is less than the number of special ticks, the tick's position is shown as a fallback. */
    labels?: String[];
    /** Total height of a major tick. If negative the full height of the currentBoard is taken. */
    majorHeight?: number;
    /** Decides in which direction major ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
    majorTickEndings?: [number, number];
    /** The maximum number of characters a tick label can use. */
    maxLabelLength?: number;
    /** Total height of a minor tick. If negative the full height of the currentBoard is taken. */
    minorHeight?: number;
    /** The number of minor ticks between two major ticks. */
    minorTicks?: number;
    /** Minimum distance in pixel of equidistant ticks in case insertTicks==true. */
    minTicksDistance?: number;
    /** Scale the ticks but not the tick labels. */
    scale?: number;
    /** A string that is appended to every tick, used to represent the scale factor given in Ticks#scale. */
    scaleSymbol?: String;
    /** Decides in which direction minor ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
    tickEndings?: [number, number];
    /** The default distance (in user coordinates, notpixels) between two ticks. Please be aware that this value does not have to be used if Ticks#insertTicks is set to true. */
    ticksDistance?: number;
    /** By default, i.e. if ticksPerLabel==false, labels are generated for major ticks, only. If ticksPerLabel is set to a(n integer) number, this denotes the number of minor ticks between two labels. */
    ticksPerLabel?: string;
    /** Set the ticks type. Possible values are 'linear' or 'polar'. */
    type?: String;
    /** Use the unicode character 0x2212, i.e. the HTML entity &minus; as minus sign. That is −1 instead of -1. */
    useUnicodeMinus?: Boolean;
}
export interface Ticks extends GeometryElement {
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
    /** Formats label texts to make labels displayed in scientific notation look beautiful. For example, label 5.00e+6 will become 5&bull;10⁶, label -1.00e-7 will become into -1&bull;10⁻⁷ */
    beautifyScientificNotationLabel(labelText: string): string;
    /** Checks whether (x,y) is near the line. Only available for line elements,  not for ticks on curves. */
    hasPoint(x: number, y: number): Boolean;
    /** Sets x and y coordinate of the tick. */
    setPositionDirectly(method: number, coords: NumberFunction[], oldcoords?: NumberFunction[]): GeometryElement;
    /** Uses the boards renderer to update the arc. */
    updateRenderer(): Ticks;
    /** Recalculate the tick positions and the labels.  */
    update(): void;
    /** sets an arbitrary number of attributes for this Ticks element*/ setAttribute(attrs: TicksAttributes): void;
}
export interface SectorAttributes extends CurveAttributes {
    /** Attributes for helper point anglepoint in case it is provided by coordinates. */
    anglePoint?: PointAttributes;
    /** Attributes for sub-element arc. It is only available, if the sector is defined by three points. */
    arc?: Arc;
    /** Attributes for helper point center in case it is provided by coordinates. */
    center?: PointAttributes;
    /** Attributes for the sector label. */
    label?: LabelAttributes;
    /** Attributes for helper point radiuspoint in case it is provided by coordinates. */
    radiusPoint?: PointAttributes;
    /** Type of sector. Possible values are 'minor', 'major', and 'auto'. */
    selection?: String;
}
export interface Sector extends Curve {
    /** missing description */
    point1: Point;
    /** missing description */
    point2: Point;
    /** missing description */
    point3: Point;
    /** missing description */
    point4: Point;
    /** Area of the sector. */
    Area(): number;
    /** Arc length. */
    L(): number;
    /** Sector perimeter, i.e. arc length plus 2 * radius. */
    Perimeter(): number;
    /** Overwrite the Radius method of the sector.  */
    setRadius(value: number | Function): void;
    /** Length of the sector's arc or the angle in various units,  */
    Value(unit: string): number;
    /** Checks whether (x,y) is within the area defined by the sector. */
    hasPointSector(x: number, y: number): Boolean;
    /** Returns the radius of the sector. */
    Radius(): number;
    /** sets an arbitrary number of attributes for this Sector element*/ setAttribute(attrs: SectorAttributes): void;
}
export interface VectorfieldAttributes extends CurveAttributes {
    /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
    arrowhead?: Object;
    /** Scaling factor of the vectors. This in contrast to slope fields, where this attribute sets the vector to the given length. */
    scale?: Object;
}
export interface Vectorfield extends Curve {
    /** Set the defining functions of vector field. */
    setF(func: Function): Object;
    /** sets an arbitrary number of attributes for this Vectorfield element*/ setAttribute(attrs: VectorfieldAttributes): void;
}
export interface AngleAttributes extends SectorAttributes {
    /** Attributes for sub-element arc. In general, the arc will run through the first point and thus will not have the same radius as the angle sector. */
    arc?: Arc;
    /** Attributes of the dot point marking right angles. */
    dot?: Object;
    /** Sensitivity (in degrees) to declare an angle as right angle. If the angle measure is inside this distance from a rigth angle, the orthoType of the angle is used for display. */
    orthoSensitivity?: number;
    /** Display type of the angle field in case of a right angle. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
    orthoType?: String;
    /**  */
    pointsquare?: Object;
    /** Radius of the sector, displaying the angle. The radius can be given as number (in user coordinates) or as string 'auto'. In the latter case, the angle is set to an value between 20 and 50 px. */
    radius?: number;
    /**  */
    radiuspoint?: Object;
    /** Display type of the angle field. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
    type?: String;
}
export interface Angle extends Sector {
    /** missing description */
    point: Point;
    /** Frees an angle from a prescribed value. This is only relevant if the angle size has been set by  */
    free(): void;
    /** Set an angle to a prescribed value given in radians. This is only possible if the third point of the angle, i.e. the anglepoint is a free point. Removing the constraint again is done by calling  */
    setAngle(val: number | Function): Object;
    /** Returns the value of the angle.  Unit is one of Unit of the returned values. Possible units are
   'radians' (default): angle value in radians;
   'degrees': angle value in degrees;
   'semicircle': angle value in radians as a multiple of π, e.g. if the angle is 1.5π, 1.5 will be returned.;
   'circle': angle value in radians as a multiple of 2π;
   'length': length of the arc line of the angle;
   It is sufficient to supply the first three characters of the unit, e.g. 'len'.
    */
    Value(unit?: string): number;
    /** sets an arbitrary number of attributes for this Angle element*/ setAttribute(attrs: AngleAttributes): void;
}
export interface ArcAttributes extends CurveAttributes {
    /** Attributes for angle point. */
    anglePoint?: Point;
    /** Attributes for center point. */
    center?: Point;
    /** If true, moving the mouse over inner points triggers hasPoint. */
    hasInnerPoints?: Boolean;
    /** Attributes for radius point. */
    radiusPoint?: Point;
    /** Type of arc. Possible values are 'minor', 'major', and 'auto'. */
    selection?: String;
}
export interface Arc extends Curve {
    /** missing description */
    L: number;
    /** missing description */
    anglepoint: Point;
    /** missing description */
    radiuspoint: Point;
    /**  */
    getRadius(): number;
    /** Checks whether (x,y) is within the sector defined by the arc. */
    hasPointSector(x: number, y: number): Boolean;
    /** Determines the arc&#039;s current radius. I.e. the distance between {@link Arc#center} and {@link Arc#radiuspoint}. */
    Radius(): number;
    /** Returns the length of the arc or the value of the angle spanned by the arc. */
    Value(unit?: string, rad?: number): number;
    /** sets an arbitrary number of attributes for this Arc element*/ setAttribute(attrs: ArcAttributes): void;
}
export interface ArrowAttributes extends LineAttributes {
}
export interface Arrow extends Line {
    /** sets an arbitrary number of attributes for this Arrow element*/ setAttribute(attrs: ArrowAttributes): void;
}
export interface ParallelAttributes extends LineAttributes {
    /** Attributes of helper point of normal. */
    point?: Point;
}
export interface Parallel extends Line {
    /** sets an arbitrary number of attributes for this Parallel element*/ setAttribute(attrs: ParallelAttributes): void;
}
export interface ArrowParallelAttributes extends ParallelAttributes {
}
export interface ArrowParallel extends Parallel {
    /** sets an arbitrary number of attributes for this ArrowParallel element*/ setAttribute(attrs: ArrowParallelAttributes): void;
}
export interface AxisAttributes extends LineAttributes {
    /** Position is used in cases: position=='sticky' or position=='fixed'. */
    anchor?: Boolean;
    /** Used to define at which distance to the edge of the board the axis should stick or be fixed. */
    anchorDist?: string | number;
    /** Is used to define the behaviour of the axis. Settings in this attribute only have an effect if the axis is exactly horizontal or vertical.  */
    position?: 'static' | 'fixed' | 'sticky';
    /** Attributes for ticks of the axis. */
    ticks?: TicksAttributes;
    /** set to true, the tick labels of the axis are automatically positioned in the narrower area between the axis and the side of the board. Settings in this attribute only have an effect if the axis is exactly horizontal or vertical. This option overrides offset, anchorX and anchorY of axis tick labels. */
    ticksAutoPos?: Boolean;
    /** Defines, when ticksAutoPos takes effect.  */
    ticksAutoPosThreshold?: string | number;
    /** Show / hide ticks. Deprecated. Suggested alternative is "ticks: {visible: false}" */
    withTicks?: Boolean;
    /** Attributes for the axis label. */
    label?: LabelAttributes;
    /** Attributes for first point the axis. */
    point1?: PointAttributes;
    /** Attributes for second point the axis. */
    point2?: PointAttributes;
}
export interface Axis extends Line {
    /** missing description */
    defaultTicks: Ticks;
    /** sets an arbitrary number of attributes for this Axis element*/ setAttribute(attrs: AxisAttributes): void;
}
export interface BezierCurveAttributes extends CurveAttributes {
}
export interface BezierCurve extends Curve {
    /** sets an arbitrary number of attributes for this BezierCurve element*/ setAttribute(attrs: BezierCurveAttributes): void;
}
export interface BisectorAttributes extends LineAttributes {
    /** Attributes for the helper point of the bisector. */
    point?: Point;
}
export interface Bisector extends Line {
    /** sets an arbitrary number of attributes for this Bisector element*/ setAttribute(attrs: BisectorAttributes): void;
}
export interface BisectorlinesAttributes extends CompositionAttributes {
    /** Attributes for first line. */
    line1?: Line;
    /** Attributes for second line. */
    line2?: Line;
}
export interface Bisectorlines extends Composition {
}
export interface ButtonAttributes extends TextAttributes {
    /** Control the attribute ”disabled” of the HTML button. */
    disabled?: Boolean | Function;
}
export interface Button extends Text {
    /** missing description */
    rendNodeButton: HTMLElement;
    /** sets an arbitrary number of attributes for this Button element*/ setAttribute(attrs: ButtonAttributes): void;
}
export interface CardinalsplineAttributes extends CurveAttributes {
    /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
    createPoints?: Boolean;
    /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
    isArrayOfCoordinates?: Boolean;
    /** Attributes for the points generated by Cardinalspline in cases createPoints is set to true */
    points?: Object;
}
export interface Cardinalspline extends Curve {
    /** sets an arbitrary number of attributes for this Cardinalspline element*/ setAttribute(attrs: CardinalsplineAttributes): void;
}
export interface CheckboxAttributes extends TextAttributes {
    /** Control the attribute ”checked” of the HTML checkbox. */
    checked?: Boolean | Function;
    /** Control the attribute ”disabled” of the HTML checkbox. */
    disabled?: Boolean;
}
export interface Checkbox extends Text {
    /** missing description */
    rendNodeCheck: HTMLElement;
    /** Returns the value of the checkbox element */
    Value(): Boolean;
    /** sets an arbitrary number of attributes for this Checkbox element*/ setAttribute(attrs: CheckboxAttributes): void;
}
export interface CircumcenterAttributes extends PointAttributes {
}
export interface Circumcenter extends Point {
    /** sets an arbitrary number of attributes for this Circumcenter element*/ setAttribute(attrs: CircumcenterAttributes): void;
}
export interface CircumcircleAttributes extends CircleAttributes {
    /** Attributes for center point. */
    center?: GeometryElementAttributes;
}
export interface Circumcircle extends Circle {
    /** sets an arbitrary number of attributes for this Circumcircle element*/ setAttribute(attrs: CircumcircleAttributes): void;
}
export interface CircumcircleArcAttributes extends ArcAttributes {
    /** Attributes for center point. */
    center?: Point;
}
export interface CircumcircleArc extends Arc {
    /** sets an arbitrary number of attributes for this CircumcircleArc element*/ setAttribute(attrs: CircumcircleArcAttributes): void;
}
export interface CircumcircleSectorAttributes extends SectorAttributes {
}
export interface CircumcircleSector extends Sector {
    /** missing description */
    center: Circumcenter;
    /** sets an arbitrary number of attributes for this CircumcircleSector element*/ setAttribute(attrs: CircumcircleSectorAttributes): void;
}
export interface CombAttributes extends CurveAttributes {
    /** Angle - given in radians - under which comb elements are positioned. */
    angle?: number;
    /** Frequency of comb elements. */
    frequency?: number;
    /** Attributes for first defining point of the comb. */
    point1?: LineAttributes;
    /** Attributes for second defining point of the comb. */
    point2?: LineAttributes;
    /** Should the comb go right to left instead of left to right. */
    reverse?: Boolean;
    /** Width of the comb. */
    width?: number;
}
export interface Comb extends Curve {
    /** sets an arbitrary number of attributes for this Comb element*/ setAttribute(attrs: CombAttributes): void;
}
export interface ConicAttributes extends CurveAttributes {
    /** Attributes for center point. */
    center?: PointAttributes;
    /** Attributes for foci points. */
    foci?: PointAttributes;
    /** Attributes for parabola line in case the line is given by two points or coordinate pairs. */
    line?: LineAttributes;
    /** Attributes for five points defining the conic, if some of them are given as coordinates. */
    point?: PointAttributes;
}
export interface Conic extends Curve {
    /** sets an arbitrary number of attributes for this Conic element*/ setAttribute(attrs: ConicAttributes): void;
}
export interface CurveDifferenceAttributes extends CurveAttributes {
}
export interface CurveDifference extends Curve {
    /** sets an arbitrary number of attributes for this CurveDifference element*/ setAttribute(attrs: CurveDifferenceAttributes): void;
}
export interface CurveIntersectionAttributes extends CurveAttributes {
}
export interface CurveIntersection extends Curve {
    /** sets an arbitrary number of attributes for this CurveIntersection element*/ setAttribute(attrs: CurveIntersectionAttributes): void;
}
export interface CurveUnionAttributes extends CurveAttributes {
}
export interface CurveUnion extends Curve {
    /** sets an arbitrary number of attributes for this CurveUnion element*/ setAttribute(attrs: CurveUnionAttributes): void;
}
export interface DerivativeAttributes extends CurveAttributes {
}
export interface Derivative extends Curve {
    /** sets an arbitrary number of attributes for this Derivative element*/ setAttribute(attrs: DerivativeAttributes): void;
}
export interface EllipseAttributes extends ConicAttributes {
}
export interface Ellipse extends Conic {
    /** sets an arbitrary number of attributes for this Ellipse element*/ setAttribute(attrs: EllipseAttributes): void;
}
export interface ParametricSurface3DAttributes extends CurveAttributes {
    /** number of intervals the mesh is divided into in direction of parameter u. */
    stepsU?: number;
    /** number of intervals the mesh is divided into in direction of parameter v. */
    stepsV?: number;
}
export interface ParametricSurface3D extends Omit<Curve, 'addTransform'> {
    /** Add transformations to this line. */
    addTransform(el: GeometryElement, transform: Transformation | Transformation[]): GeometryElement;
    /** sets an arbitrary number of attributes for this ParametricSurface3D element*/ setAttribute(attrs: ParametricSurface3DAttributes): void;
}
export interface Face3DAttributes extends CurveAttributes {
    /** Shading of faces. For this, the HSL color scheme is used. Two types are possible: either by 'angle' or by 'zIndex'. By default (i.e. type:'angle'), the angle between the camera axis and the normal of the face determines the lightness value of the HSL color. Otherwise, the zIndex of the face determines the lightness value of the HSL color. */
    shader?: Object;
}
export interface Face3D extends Curve {
    /** missing description */
    d: Number;
    /** missing description */
    faceNumber: Number;
    /** missing description */
    normal: number[];
    /** missing description */
    polyhedron: Object;
    /** missing description */
    vec1: number[];
    /** missing description */
    vec2: number[];
    /** Determines the lightness of the face (in the HSL color scheme). <p> Sets the fillColor of the adjoint 2D curve.  */
    shader(): number;
    /** Update the coordinates of all vertices of the polyhedron  */
    updateCoords(): Face3D;
    /** Update the 2d coordinates of the face, returns {X:[], Y:[]}  */
    updateDataArray2D(): Object;
    /** sets an arbitrary number of attributes for this Face3D element*/ setAttribute(attrs: Face3DAttributes): void;
}
export interface FunctiongraphAttributes extends CurveAttributes {
}
export interface Functiongraph extends Curve {
    /** sets an arbitrary number of attributes for this Functiongraph element*/ setAttribute(attrs: FunctiongraphAttributes): void;
}
export interface Functiongraph3DAttributes extends ParametricSurface3DAttributes {
}
export interface Functiongraph3D extends ParametricSurface3D {
    /** sets an arbitrary number of attributes for this Functiongraph3D element*/ setAttribute(attrs: Functiongraph3DAttributes): void;
}
export interface GliderAttributes extends PointAttributes {
}
export interface Glider extends Point {
    /** Animate the point. */
    startAnimation(direction: number | Function, stepCount: number | Function, delay: number | Function): void;
    /** Stop animation. */
    stopAnimation(): CoordsElement;
    /** sets an arbitrary number of attributes for this Glider element*/ setAttribute(attrs: GliderAttributes): void;
}
export interface Glider3DAttributes extends Point3DAttributes {
}
export interface Glider3D extends Point3D {
    /** sets an arbitrary number of attributes for this Glider3D element*/ setAttribute(attrs: Glider3DAttributes): void;
}
export interface GridAttributes extends CurveAttributes {
    /**
                       Distance of major grid elements. There are three possibilities:
   - 'auto' the major grid matches majorTicks of the corresponding axis.
   - Numbers are interpreted as distance in usrCoords.
   - Strings with the unit 'px' are interpreted as distance in screen pixels.
   - Strings with the unit '%' or 'fr' are interpreted as a ratio to the width/height of the board. (e.g. 50% = 0.5fr)
   Instead of one value you can provide two values as an array [x, y] here. These are used as distance in x- and y-direction. */
    majorStep?: number | string | number[] | string[];
    /** Include the the zero line in the grid */
    drawZero?: Boolean;
    /** Include the the boundary lines in the grid */
    includeBoundaries?: Boolean;
    /** Attributes for Major Grid Elements */
    major?: GridAttributes;
    /** Attributes for Minor Grid Elements */
    minor?: GridAttributes;
    /** number of elements in minor grid between elements of the major grid. */
    minorElements?: number | 'auto';
    /** There are different point styles which differ in appearance. */
    face?: 'o' | 'line' | 'point' | 'cross' | 'plus' | 'minus' | 'divide' | 'diamond' | 'triangledown' | 'triangleleft' | 'triangleright' | 'triangleup' | 'square' | 'circle' | string;
    /** To print a quadratic grid with same distance of major grid elements in x- and y-direction. 'min' or true will set both distances of major grid elements in x- and y-direction to the primarily lesser value, 'max' to the primarily greater value. */
    forceSquare?: Boolean;
    /** Deprecated. Use Grid#majorStep instead. */
    gridX?: number;
    /** Deprecated. Use Grid#majorStep instead. */
    gridY?: number;
    /** This number (pixel value) controls where grid elements end at the canvas edge. If zero, the line ends exactly at the end, if negative there is a margin to the inside, if positive the line ends outside of the canvas (which is invisible). */
    margin?: number;
    /** Number of vertices for face 'polygon'. */
    polygonVertices?: number;
    /** Size of grid elements. There are the following possibilities: */
    size?: number | Function;
}
export interface Grid extends Curve {
    /** sets an arbitrary number of attributes for this Grid element*/ setAttribute(attrs: GridAttributes): void;
}
export interface HatchAttributes extends TicksAttributes {
}
export interface Hatch extends Ticks {
    /** missing description */
    ticksDistance: number;
    /** sets an arbitrary number of attributes for this Hatch element*/ setAttribute(attrs: HatchAttributes): void;
}
export interface HyperbolaAttributes extends ConicAttributes {
}
export interface Hyperbola extends Conic {
    /** sets an arbitrary number of attributes for this Hyperbola element*/ setAttribute(attrs: HyperbolaAttributes): void;
}
export interface IncenterAttributes extends PointAttributes {
}
export interface Incenter extends Point {
    /** sets an arbitrary number of attributes for this Incenter element*/ setAttribute(attrs: IncenterAttributes): void;
}
export interface IncircleAttributes extends CircleAttributes {
    /** Attributes of circle center. */
    center?: GeometryElementAttributes;
}
export interface Incircle extends Circle {
    /** sets an arbitrary number of attributes for this Incircle element*/ setAttribute(attrs: IncircleAttributes): void;
}
export interface InequalityAttributes extends CurveAttributes {
    /** By default an inequality is less (or equal) than. Set inverse to true will consider the inequality greater (or equal) than. */
    inverse?: Boolean;
}
export interface Inequality extends Curve {
    /** sets an arbitrary number of attributes for this Inequality element*/ setAttribute(attrs: InequalityAttributes): void;
}
export interface InputAttributes extends TextAttributes {
    /** Control the attribute ”disabled” of the HTML input field. */
    disabled?: Boolean;
    /** Control the attribute ”maxlength” of the HTML input field. */
    maxlength?: number;
}
export interface Input extends Text {
    /** Sets value of the input element. */
    set(val: String): GeometryElement;
    /** Returns the value (content) of the input element */
    Value(): string;
    /** sets an arbitrary number of attributes for this Input element*/ setAttribute(attrs: InputAttributes): void;
}
export interface IntegralAttributes extends CurveAttributes {
    /** Attributes of the (left) base point of the integral. */
    baseLeft?: Point;
    /** Attributes of the (right) base point of the integral. */
    baseRight?: Point;
    /** Attributes of the (left) starting point of the integral. */
    curveLeft?: Point;
    /** Attributes of the (right) end point of the integral. */
    curveRight?: Point;
    /** Attributes for integral label. */
    label?: LabelAttributes;
}
export interface Integral extends Curve {
    /** missing description */
    baseLeft: Point;
    /** missing description */
    baseRight: Point;
    /** missing description */
    curveLeft: Point;
    /** missing description */
    curveRight: Point;
    /** Returns the current value of the integral. */
    Value(): Point;
    /** sets an arbitrary number of attributes for this Integral element*/ setAttribute(attrs: IntegralAttributes): void;
}
export interface IntersectionAttributes extends PointAttributes {
    /**  */
    alwaysIntersect?: Boolean;
}
export interface Intersection extends Point {
    /** sets an arbitrary number of attributes for this Intersection element*/ setAttribute(attrs: IntersectionAttributes): void;
}
export interface LabelAttributes extends TextAttributes {
    /** Automatic position of label text. When called first, the positioning algorithm starts at the position defined by offset. The algorithm tries to find a position with the least number of overlappings with other elements, while retaining the distance to the anchor element. */
    autoPosition?: Boolean;
    /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. For this, the algorithm tests 12 positions around the anchor element up to a distance from the anchor defined here (in pixel). */
    autoPositionMaxDistance?: number;
    /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. For this, the algorithm tests 12 positions around the anchor element starting at a distance from the anchor defined here (in pixel). */
    autoPositionMinDistance?: number;
    /** Distance of the label from a path element, like line, circle, curve. */
    distance?: number;
    /** Label offset from label anchor.The label anchor is determined by Label#position */
    offset?: [number, number];
    /** Possible string values for the position of a label for label anchor points are:'first' (lines only)'last' (lines only)'lft''rt''top''bot''ulft''urt''llft''lrt'This is relevant for non-points: line, circle, curve.The names have been borrowed from MetaPost. */
    position?: 'first' | 'last' | 'lft' | 'rt' | 'top' | 'bot' | 'ulft' | 'urt' | 'llft' | 'lrt';
    /** List of object ids which should be ignored on setting automatic position of label text. */
    autoPositionWhitelist?: string[];
}
export interface Label extends Text {
    /** sets an arbitrary number of attributes for this Label element*/ setAttribute(attrs: LabelAttributes): void;
}
export interface LegendAttributes extends GeometryElementAttributes {
    /** Array of legend values */
    labels?: string[];
    /** Array of legend colors */
    colors?: string[];
    /** The element is fixed and can not be dragged around. */
    frozen?: Boolean;
    /** Length of line in one legend entry */
    lineLength?: number;
    /** Height (in px) of one legend entry */
    rowHeight?: number;
    /** (Circular) array of opacity for legend line stroke color for one legend entry. */
    strokeOpacity?: number;
    /** Height (in px) of one legend entry */
    strokeWidth?: number;
    /** Default style of a legend element. The only possible value is 'vertical'. */
    style?: string;
}
export interface Legend extends GeometryElement {
    /** sets an arbitrary number of attributes for this Legend element*/ setAttribute(attrs: LegendAttributes): void;
}
export interface LocusAttributes extends CurveAttributes {
}
export interface Locus extends Curve {
    /** sets an arbitrary number of attributes for this Locus element*/ setAttribute(attrs: LocusAttributes): void;
}
export interface MajorArcAttributes extends CurveAttributes {
}
export interface MajorArc extends Curve {
    /** sets an arbitrary number of attributes for this MajorArc element*/ setAttribute(attrs: MajorArcAttributes): void;
}
export interface MajorSectorAttributes extends CurveAttributes {
}
export interface MajorSector extends Curve {
    /** sets an arbitrary number of attributes for this MajorSector element*/ setAttribute(attrs: MajorSectorAttributes): void;
}
export interface MeasurementAttributes extends TextAttributes {
    /** This specifies the unit of measurement in dimension 1  */
    baseUnit?: string;
    /** Dimension of the measured data. */
    dim?: string | number;
    /** Function to format coordinates. */
    formatCoords?: string;
    /** Function to format direction vector. */
    formatDirection?: string;
    /** String that is displayed before the measurement and its unit. */
    prefix?: string;
    /** Determines whether a prefix is displayed before the measurement value and unit. */
    showPrefix?: string;
    /** Determines whether a suffix is displayed after the measurement value and unit. */
    showSuffix?: string;
    /** String that is displayed after the measurement and its unit. */
    suffix?: string;
    /** This attribute expects an object that has the dimension numbers as keys (as integer or in the form of 'dimxx') and assigns a string to each dimension. */
    units?: string;
}
export interface Measurement extends Text {
    /** sets an arbitrary number of attributes for this Measurement element*/ setAttribute(attrs: MeasurementAttributes): void;
}
export interface Mesh3DAttributes extends CurveAttributes {
    /** Step width of the mesh in the direction of the first spanning vector. */
    stepWidthU?: number;
    /** Step width of the mesh in the direction of the second spanning vector. */
    stepWidthV?: number;
}
export interface Mesh3D extends Curve {
    /** sets an arbitrary number of attributes for this Mesh3D element*/ setAttribute(attrs: Mesh3DAttributes): void;
}
export interface MidpointAttributes extends PointAttributes {
}
export interface Midpoint extends Point {
    /** sets an arbitrary number of attributes for this Midpoint element*/ setAttribute(attrs: MidpointAttributes): void;
}
export interface MinorArcAttributes extends CurveAttributes {
}
export interface MinorArc extends Curve {
    /** sets an arbitrary number of attributes for this MinorArc element*/ setAttribute(attrs: MinorArcAttributes): void;
}
export interface MinorSectorAttributes extends CurveAttributes {
}
export interface MinorSector extends Curve {
    /** sets an arbitrary number of attributes for this MinorSector element*/ setAttribute(attrs: MinorSectorAttributes): void;
}
export interface MirrorElementAttributes extends GeometryElementAttributes {
}
export interface MirrorElement extends GeometryElement {
    /** sets an arbitrary number of attributes for this MirrorElement element*/ setAttribute(attrs: MirrorElementAttributes): void;
}
export interface MirrorPointAttributes extends PointAttributes {
}
export interface MirrorPoint extends Point {
    /** sets an arbitrary number of attributes for this MirrorPoint element*/ setAttribute(attrs: MirrorPointAttributes): void;
}
export interface NonReflexAngleAttributes extends AngleAttributes {
}
export interface NonReflexAngle extends Angle {
    /** sets an arbitrary number of attributes for this NonReflexAngle element*/ setAttribute(attrs: NonReflexAngleAttributes): void;
}
export interface NormalAttributes extends LineAttributes {
    /** Attributes of helper point of normal. */
    point?: Point;
}
export interface Normal extends Line {
    /** sets an arbitrary number of attributes for this Normal element*/ setAttribute(attrs: NormalAttributes): void;
}
export interface OrthogonalprojectionAttributes extends PointAttributes {
}
export interface Orthogonalprojection extends Point {
    /** sets an arbitrary number of attributes for this Orthogonalprojection element*/ setAttribute(attrs: OrthogonalprojectionAttributes): void;
}
export interface OtherIntersectionAttributes extends PointAttributes {
}
export interface OtherIntersection extends Point {
    /** sets an arbitrary number of attributes for this OtherIntersection element*/ setAttribute(attrs: OtherIntersectionAttributes): void;
}
export interface ParabolaAttributes extends ConicAttributes {
}
export interface Parabola extends Conic {
    /** sets an arbitrary number of attributes for this Parabola element*/ setAttribute(attrs: ParabolaAttributes): void;
}
export interface ParallelpointAttributes extends PointAttributes {
}
export interface Parallelpoint extends Point {
    /** sets an arbitrary number of attributes for this Parallelpoint element*/ setAttribute(attrs: ParallelpointAttributes): void;
}
export interface SegmentAttributes extends LineAttributes {
}
export interface Segment extends Line {
    /** sets an arbitrary number of attributes for this Segment element*/ setAttribute(attrs: SegmentAttributes): void;
}
export interface ParallelogramAttributes extends PolygonAttributes {
}
export interface Parallelogram extends Polygon {
    /** missing description */
    parallelPoint: Point;
    /** sets an arbitrary number of attributes for this Parallelogram element*/ setAttribute(attrs: ParallelogramAttributes): void;
}
export interface PerpendicularAttributes extends SegmentAttributes {
}
export interface Perpendicular extends Segment {
    /** sets an arbitrary number of attributes for this Perpendicular element*/ setAttribute(attrs: PerpendicularAttributes): void;
}
export interface PerpendicularPointAttributes extends PointAttributes {
}
export interface PerpendicularPoint extends Point {
    /** sets an arbitrary number of attributes for this PerpendicularPoint element*/ setAttribute(attrs: PerpendicularPointAttributes): void;
}
export interface PerpendicularSegmentAttributes extends SegmentAttributes {
}
export interface PerpendicularSegment extends Segment {
    /** missing description */
    point: PerpendicularPoint;
    /** sets an arbitrary number of attributes for this PerpendicularSegment element*/ setAttribute(attrs: PerpendicularSegmentAttributes): void;
}
export interface PolarLineAttributes extends LineAttributes {
}
export interface PolarLine extends Line {
    /** sets an arbitrary number of attributes for this PolarLine element*/ setAttribute(attrs: PolarLineAttributes): void;
}
export interface PolePointAttributes extends PointAttributes {
}
export interface PolePoint extends Point {
    /** sets an arbitrary number of attributes for this PolePoint element*/ setAttribute(attrs: PolePointAttributes): void;
}
export interface PolygonalChainAttributes extends PolygonAttributes {
}
export interface PolygonalChain extends Polygon {
    /** sets an arbitrary number of attributes for this PolygonalChain element*/ setAttribute(attrs: PolygonalChainAttributes): void;
}
export interface Polyhedron3DAttributes extends GeometryElement3DAttributes {
    /** Array of face colors. */
    fillColorArray?: string[];
}
export interface Polyhedron3D extends GeometryElement3D {
    /** missing description */
    def: number[][];
    /** missing description */
    faces: Face3D[];
    /** missing description */
    numberFaces: number;
    /** sets an arbitrary number of attributes for this Polyhedron3D element*/ setAttribute(attrs: Polyhedron3DAttributes): void;
}
export interface RadicalAxisAttributes extends LineAttributes {
}
export interface RadicalAxis extends Line {
    /** sets an arbitrary number of attributes for this RadicalAxis element*/ setAttribute(attrs: RadicalAxisAttributes): void;
}
export interface ReflectionAttributes extends GeometryElementAttributes {
    /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the reflected element of a circle is again a circle, otherwise it is a conic section. */
    type?: String;
    /** Attributes of circle center, i.e. the center of the circle, if a circle is the mirror element and the transformation type is 'Euclidean' */
    center?: PointAttributes;
}
export interface Reflection extends GeometryElement {
    /** sets an arbitrary number of attributes for this Reflection element*/ setAttribute(attrs: ReflectionAttributes): void;
}
export interface ReflexAngleAttributes extends AngleAttributes {
}
export interface ReflexAngle extends Angle {
    /** sets an arbitrary number of attributes for this ReflexAngle element*/ setAttribute(attrs: ReflexAngleAttributes): void;
}
export interface RegularPolygonAttributes extends PolygonAttributes {
    /** Attributes for the polygon border lines. */
    borders?: LineAttributes;
    /** If true, moving the mouse over inner points triggers hasPoint. */
    hasInnerPoints?: Boolean;
    /** Attributes for the polygon vertices.   eg: {vertices: { opacity: 0 }}, */
    vertices?: GeometryElementAttributes;
    /** Is the polygon bordered by lines? */
    withLines?: Boolean;
    /** Attributes for the polygon label. */
    label?: LabelAttributes;
}
export interface RegularPolygon extends Polygon {
    /** sets an arbitrary number of attributes for this RegularPolygon element*/ setAttribute(attrs: RegularPolygonAttributes): void;
}
export interface RiemannsumAttributes extends CurveAttributes {
}
export interface Riemannsum extends Curve {
    /** Returns the value of the Riemann sum, i.e. the sum of the (signed) areas of the rectangles. */
    Value(): number;
    /** sets an arbitrary number of attributes for this Riemannsum element*/ setAttribute(attrs: RiemannsumAttributes): void;
}
export interface SemicircleAttributes extends ArcAttributes {
    /** Attributes for center point of the semicircle. */
    center?: Point;
}
export interface Semicircle extends Arc {
    /** missing description */
    midpoint: Midpoint;
    /** sets an arbitrary number of attributes for this Semicircle element*/ setAttribute(attrs: SemicircleAttributes): void;
}
export interface SliderAttributes extends GliderAttributes {
    /** Attributes for the base line of the slider. */
    baseline?: GeometryElementAttributes;
    /** Attributes for the highlighting line of the slider. */
    highline?: GeometryElementAttributes;
    /** The number of digits of the slider value displayed in the optional text. */
    digits?: number;
    /** Internationalization support for slider labels. */
    intl?: object;
    /** Attributes for the slider label. */
    label?: LabelAttributes;
    /** If true, 'up' events on the baseline will trigger slider moves. */
    moveOnUp?: Boolean;
    /** Attributes for first (left) helper point defining the slider position. */
    point1?: LineAttributes;
    /** Attributes for second (right) helper point defining the slider position. */
    point2?: LineAttributes;
    /** If not null, this is appended to the value and to unitLabel in the slider label. Possible types: string, number or function. */
    postLabel?: String;
    /** The precision of the slider value displayed in the optional text. Replaced by the attribute ”digits”. */
    precision?: string;
    /** Size of slider point. */
    size?: number;
    /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
    snapValueDistance?: number;
    /** List of values to snap to. If the glider is within snapValueDistance (in user coordinate units) of one of these points, then the glider snaps to that point. */
    snapValues?: [number, number];
    /** The slider only returns integer multiples of this value, e.g. for discrete values set this property to 1. For continuous results set this to -1. */
    snapWidth?: number;
    /** If not null, this replaces the part ”name = ” in the slider label. Possible types: string, number or function. */
    suffixLabel?: String;
    /** Attributes for the ticks of the base line of the slider. */
    ticks?: TicksAttributes;
    /** If not null, this is appended to the value in the slider label. Possible types: string, number or function. */
    unitLabel?: String;
    /** Show slider label. */
    withLabel?: Boolean;
    /** Show slider ticks. */
    withTicks?: Boolean;
}
export interface Slider extends Glider {
    /** missing description */
    _smax: number;
    /** missing description */
    _smin: number;
    /** Sets the maximum value of the slider. */
    setMax(val: number): Slider;
    /** Sets the minimum value of the slider. */
    setMin(val: number): Slider;
    /** Sets the value of the slider. This call must be followed by a board update call. */
    setValue(val: number): Slider;
    /** Returns the current slider value. */
    Value(): number;
    /** sets an arbitrary number of attributes for this Slider element*/ setAttribute(attrs: SliderAttributes): void;
}
export interface SlopefieldAttributes extends VectorfieldAttributes {
    /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
    arrowhead?: Object;
    /** Set length of the vectors in user coordinates. This in contrast to vector fields, where this attribute just scales the vector. */
    scale?: Object;
}
export interface Slopefield extends Vectorfield {
    /** Set the defining functions of slope field. */
    setF(func: Function): Slopefield;
    /** sets an arbitrary number of attributes for this Slopefield element*/ setAttribute(attrs: SlopefieldAttributes): void;
}
export interface SlopetriangleAttributes extends LineAttributes {
    /** Attributes for the base line. */
    baseline?: Line;
    /** Attributes for the base point. */
    basepoint?: Point;
    /** Attributes for the gliding helper point. */
    glider?: Point;
    /** Attributes for the slope triangle label. */
    label?: LabelAttributes;
    /** Attributes for the tangent. The tangent is constructed by slop triangle if the construction is based on a glider, solely. */
    tangent?: Line;
    /** Attributes for the top point. */
    toppoint?: Point;
}
export interface Slopetriangle extends Line {
    /** Returns the value of the slope triangle, that is the slope of the tangent. */
    Value(): number;
    /** Returns the direction of the slope triangle, that is the direction of the tangent.  */
    Direction(): number[];
    /** sets an arbitrary number of attributes for this Slopetriangle element*/ setAttribute(attrs: SlopetriangleAttributes): void;
}
export interface SmartlabelAttributes extends TextAttributes {
    /** CSS classes for the smart label. Available classes are:'smart-label-solid''smart-label-outline''smart-label-pure'By default, an additional class is given specific for the element type. Available classes are 'smart-label-angle', 'smart-label-circle', 'smart-label-line', 'smart-label-point', 'smart-label-polygon'. */
    cssClass?: string;
    /** Display of point coordinates either as row vector or column vector. Available values are 'row' or 'column'. */
    dir?: string;
    /** CSS classes for the smart label when highlighted. */
    highlightCssClass?: string;
    /** Type of measurement. Available values are: 'deg', 'rad' for angles'area', 'perimeter', 'radius' for circles'length', 'slope' for lines'area', 'perimeter' for polygonsDependent on this value, i.e. the type of measurement, the label is positioned differently on the object. */
    measure?: string;
    /** Prefix text for the smartlabel. Comes before the measurement value. */
    prefix?: string;
    /** Suffix text for the smartlabel. Comes after unit. */
    suffix?: string;
    /** Measurement unit appended to the output text. For areas, the unit is squared automatically. Comes directly after the measurement value. */
    unit?: string;
}
export interface Smartlabel extends Text {
    /** sets an arbitrary number of attributes for this Smartlabel element*/ setAttribute(attrs: SmartlabelAttributes): void;
}
export interface Sphere3DAttributes extends GeometryElement3DAttributes {
}
export interface Sphere3D extends GeometryElement3D {
    /** missing description */
    center: Point3D;
    /** missing description */
    element2D: GeometryElement;
    /** missing description */
    method: string;
    /** missing description */
    point2: Point3D;
    /** missing description */
    projectionType: string;
    /** Calculates the radius of the circle.  */
    Radius(value?: number | Function): number;
    /** Set a new radius, then update the board.  */
    setRadius(r: number | Function): void;
    /** sets an arbitrary number of attributes for this Sphere3D element*/ setAttribute(attrs: Sphere3DAttributes): void;
}
export interface SplineAttributes extends CurveAttributes {
}
export interface Spline extends Curve {
    /** sets an arbitrary number of attributes for this Spline element*/ setAttribute(attrs: SplineAttributes): void;
}
export interface StepfunctionAttributes extends CurveAttributes {
}
export interface Stepfunction extends Curve {
    /** sets an arbitrary number of attributes for this Stepfunction element*/ setAttribute(attrs: StepfunctionAttributes): void;
}
export interface TangentAttributes extends LineAttributes {
}
export interface Tangent extends Line {
    /** sets an arbitrary number of attributes for this Tangent element*/ setAttribute(attrs: TangentAttributes): void;
}
export interface TangentToAttributes extends LineAttributes {
    /** Attributes for the intersection point of the conic/circle with the polar line of the tangentTo construction. */
    point?: PointAttributes;
    /** Attributes for the polar line of the tangentTo construction. */
    polar?: PolarLineAttributes;
}
export interface TangentTo extends Line {
    /** sets an arbitrary number of attributes for this TangentTo element*/ setAttribute(attrs: TangentToAttributes): void;
}
export interface TapemeasureAttributes extends SegmentAttributes {
    /** The precision of the tape measure value displayed in the optional text. */
    digits?: number;
    /** Attributes for the tape measure label. */
    label?: LabelAttributes;
    /** Attributes for first helper point defining the tape measure position. */
    point1?: PointAttributes;
    /** Attributes for second helper point defining the tape measure position. */
    point2?: PointAttributes;
    /** The precision of the tape measure value displayed in the optional text. Replaced by the attribute digits */
    precision?: string;
    /** Text rotation in degrees. */
    rotate?: number;
    /** Attributes for the ticks of the tape measure. */
    ticks?: TicksAttributes;
    /** Show tape measure label. */
    withLabel?: Boolean;
    /** Show tape measure ticks. */
    withTicks?: Boolean;
}
export interface Tapemeasure extends Segment {
    /** Returns the length of the tape measure. */
    Value(): number;
    /** sets an arbitrary number of attributes for this Tapemeasure element*/ setAttribute(attrs: TapemeasureAttributes): void;
}
export interface TracecurveAttributes extends CurveAttributes {
    /** The number of evaluated data points. */
    numberPoints?: number;
}
export interface Tracecurve extends Curve {
    /** sets an arbitrary number of attributes for this Tracecurve element*/ setAttribute(attrs: TracecurveAttributes): void;
}
export interface TransformationAttributes extends GeometryElementAttributes {
}
export interface Transformation extends GeometryElement {
    /** Applies a transformation once to a point element, that are: {@link Point}, {@link Text}, {@link Image}, {@link Point3D} or to an array of such elements. If it is a free 2D point, then it can be dragged around later and will overwrite the transformed coordinates. */
    applyOnce(p: Point | Text | Point3D | Image): void;
    /**  Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation, a call of currentBoard.update() has to follow. */
    bindTo(el: GeometryElement | GeometryElement[]): void;
    /** Set the transformation matrix for different types of standard transforms. */
    setMatrix(board: Object, type: 'translate' | 'scale' | 'reflect' | 'rotate' | 'shear' | 'generic', params: any[]): Transformation;
    /** Applies a transformation once to a point element, that are: {@link Point}, {@link Text}, {@link Image}, {@link Point3D} or to an array of such elements. If it is a free 2D point, then it can be dragged around later and will overwrite the transformed coordinates.  */
    applyOnce(p: Point | number[]): void;
    /** Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation after calling bindTo, a call of board.update() has to follow. <p> The transformation is simply appended to the existing list of transformations of the object. It is not fused (melt) with an existing transformation.  */
    bindTo(el: number[] | Object): void;
    /** Create a copy of the transformation in case it is static, i.e. if the transformation matrix does not depend on other elements. <p> If the transformation matrix is not static, null will be returned.  */
    clone(): Transformation;
    /** Combine two transformations to one transformation. This only works if both of transformation matrices consist of numbers solely, and do not contain functions. Multiplies the transformation with a transformation t from the left. i.e. (this) = (t) join (this)  */
    melt(t: Transformation): void;
    /** Binds a transformation to a GeometryElement or an array of elements. In every update of the GeometryElement(s), the transformation is executed. That means, in order to immediately apply the transformation after calling meltTo, a call of board.update() has to follow. <p> In case the last transformation of the element and this transformation are static, i.e. the transformation matrices do not depend on other elements, the transformation will be fused into (multiplied with) the last transformation of the element. Thus, the list of transformations is kept small. If the transformation will be the first transformation ot the element, it will be cloned to prevent side effects.  */
    meltTo(el: number[] | Object): void;
    /** Empty method. Unused.  */
    setAttribute(term: Object): void;
    /** Set the 3D transformation matrix for different types of standard transforms.  */
    setMatrix3D(board: Board, type: string, params: number[]): void;
    /** Updates the numerical data for the transformation, i.e. the entry of the subobject matrix.  */
    update(): void;
}
export interface Transform3DAttributes extends TransformationAttributes {
}
export interface Transform3D extends Transformation {
    /** sets an arbitrary number of attributes for this Transform3D element*/ setAttribute(attrs: Transform3DAttributes): void;
}
export interface TransformPointAttributes extends PointAttributes {
}
export interface TransformPoint extends Point {
    /** sets an arbitrary number of attributes for this TransformPoint element*/ setAttribute(attrs: TransformPointAttributes): void;
}
export interface TransformPoint3DAttributes extends Point3DAttributes {
}
export interface TransformPoint3D extends Point3D {
    /** sets an arbitrary number of attributes for this TransformPoint3D element*/ setAttribute(attrs: TransformPoint3DAttributes): void;
}
export interface Segment3DAttributes extends Line3DAttributes {
}
export interface Segment3D extends Line3D {
    /** sets an arbitrary number of attributes for this Segment3D element*/ setAttribute(attrs: Segment3DAttributes): void;
}
export interface TranslateAttributes extends TransformationAttributes {
}
export interface Translate extends Transformation {
    /** sets an arbitrary number of attributes for this Translate element*/ setAttribute(attrs: TranslateAttributes): void;
}
export interface RotateAttributes extends TransformationAttributes {
}
export interface Rotate extends Transformation {
    /** sets an arbitrary number of attributes for this Rotate element*/ setAttribute(attrs: RotateAttributes): void;
}
export interface ScaleAttributes extends TransformationAttributes {
}
export interface Scale extends Transformation {
    /** sets an arbitrary number of attributes for this Scale element*/ setAttribute(attrs: ScaleAttributes): void;
}
export interface Translate3DAttributes extends Transform3DAttributes {
}
export interface Translate3D extends Transform3D {
    /** sets an arbitrary number of attributes for this Translate3D element*/ setAttribute(attrs: Translate3DAttributes): void;
}
export interface Rotate3DAttributes extends Transform3DAttributes {
}
export interface Rotate3D extends Transform3D {
    /** sets an arbitrary number of attributes for this Rotate3D element*/ setAttribute(attrs: Rotate3DAttributes): void;
}
export interface RotateX3DAttributes extends Transform3DAttributes {
}
export interface RotateX3D extends Transform3D {
    /** sets an arbitrary number of attributes for this RotateX3D element*/ setAttribute(attrs: RotateX3DAttributes): void;
}
export interface RotateY3DAttributes extends Transform3DAttributes {
}
export interface RotateY3D extends Transform3D {
    /** sets an arbitrary number of attributes for this RotateY3D element*/ setAttribute(attrs: RotateY3DAttributes): void;
}
export interface RotateZ3DAttributes extends Transform3DAttributes {
}
export interface RotateZ3D extends Transform3D {
    /** sets an arbitrary number of attributes for this RotateZ3D element*/ setAttribute(attrs: RotateZ3DAttributes): void;
}
export interface Scale3DAttributes extends Transform3DAttributes {
}
export interface Scale3D extends Transform3D {
    /** sets an arbitrary number of attributes for this Scale3D element*/ setAttribute(attrs: Scale3DAttributes): void;
}
/** A wrapper for the various math routines provided by JSXGraph.  For example:
            ```js
            let cross = JsxMath.Matrix.crossProduct(a,b)
            ```
        */
export declare let JsxMath: {
    Matrix: {
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(v1: number[], v2: number[]): number[];
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        frustum(left: number, right: number, top: number, bottom: number, near: number, far: number): number[][];
        /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
        identity(m: number, n: number): number[][];
        /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
        innerProduct(v1: number[], v2: number[]): number[];
        /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
        inverse(mat: number[][]): number[][];
        /** Computes the product of the two matrices mat1*mat2. */
        matMatMult(mat1: number[][], mat2: number[][]): number[][];
        /** Initializes a matrix as an array of rows with the given value. */
        matrix(nRows: number, mCols: number, init: number): number[][];
        /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
        matVecMult(mat: matAny, vec: number[]): number[];
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov: number, ratio: number, near: number, far: number): number[][];
        /** Transposes a matrix given as a two dimensional array. */
        transpose(mat: matAny): number[][];
        /** Initializes a vector of size n wih coefficients set to the given value. */
        vector(n: number, init: number): number[];
    };
    Geometry: {
        affineDistance(): any;
        affineRatio(): any;
        angle(): any;
        angleBisector(): any;
        bezierArc(): any;
        calcLabelQuadrant(): any;
        calcLineDelimitingPoints(): any;
        calcStraight(): any;
        circumcenter(): any;
        circumcenterMidpoint(): any;
        det3p(): any;
        distance(): any;
        distPointLine(): any;
        GrahamScan(): any;
        intersectionFunction(): any;
        isSameDir(): any;
        isSameDirection(): any;
        meet(): any;
        meetBezierCurveRedBlueSegments(): any;
        meetBeziersegmentBeziersegment(): any;
        meetCircleCircle(): any;
        meetCurveCurve(): any;
        meetCurveLine(): any;
        meetCurveLineContinuous(): any;
        meetCurveLineDiscrete(): any;
        meetCurveRedBlueSegments(): any;
        meetLineBoard(): any;
        meetLineCircle(): any;
        meetLineLine(): any;
        meetPathPath(): any;
        meetPolygonLine(): any;
        meetSegmentSegment(): any;
        perpendicular(): any;
        pnpoly(): any;
        projectCoordsToBeziersegment(): any;
        projectCoordsToCurve(): any;
        projectCoordsToPolygon(): any;
        projectCoordsToSegment(): any;
        projectPointToBoard(): any;
        projectPointToCircle(): any;
        projectPointToCurve(): any;
        projectPointToLine(): any;
        projectPointToPoint(): any;
        projectPointToTurtle(): any;
        rad(): any;
        reflection(): any;
        reuleauxPolygon(): any;
        rotation(): any;
        signedPolygon(): any;
        signedTriangle(): any;
        sortVertices(): any;
        trueAngle(): any;
        windingNumber(): any;
    };
    Math: {
        /** Hyperbolic arc-cosine of a number. */
        acosh(x: number): number;
        /** Computes the inverse cotangent of x. */
        acot(x: number): any;
        /** Logical operator: a && b? */
        and(a: Boolean, b: Boolean): any;
        /** Hyperbolic arcsine of a number */
        asinh(x: number): any;
        /** Compute a * x + y for a scalar a and vectors x and y. */
        axpy(a: number, x: number, y: number): any;
        /** Computes the binomial coefficient n over k. */
        binomial(n: number, k: number): any;
        /** Computes cube root of real number Polyfill for Math.cbrt(). */
        cbrt(x: number): any;
        /** Clamp x within the interval [a, b]. */
        clamp(x: number, a: number, b: number): number;
        /** Calculates the cosine hyperbolicus of x. */
        cosh(x: number): any;
        /** Computes the cotangent of x. */
        cot(x: number): any;
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(c1: number[], c2: number[]): any;
        /** Convert a floating point number to sign + integer + fraction. */
        decToFraction(x: number, order: number): any;
        /** Logical test: a === b? */
        eq(a: number, b: number): any;
        /** Error function, see https://en.wikipedia.org/wiki/Error_function. */
        erf(x: number): any;
        /** Complementary error function, i.e. */
        erfc(x: number): any;
        /** Inverse of error function */
        erfi(x: number): any;
        /** Compute the factorial of a positive integer. */
        factorial(n: number): any;
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        frustum(l: number, r: number, t: number, b: number, n: number, f: number): any;
        /** Gamma function for real parameters by Lanczos approximation. */
        gamma(z: number): any;
        /** Greatest common divisor (gcd) of two numbers. */
        gcd(a: number, b: number): any;
        /** Logical test: a >= b? */
        geq(a: number, b: number): any;
        /** Logical test: a > b? */
        gt(a: number, b: number): any;
        /** Heaviside unit step function. */
        hstep(x: number): any;
        /** Returns sqrt(a * a + b * b) for a variable number of arguments. */
        hypot(a: number): any;
        /** Generates an identity matrix. */
        identity(n: number, m: number): any;
        /** Inner product of two vectors a and b. */
        innerProduct(a: number[], b: number[], n?: number): any;
        /** Compute the inverse of an (n x n)-matrix by Gauss elimination. */
        inverse(A: number[][]): any;
        /** Least common multiple (lcm) of two numbers. */
        lcm(a: number, b: number): any;
        /** Logical test: a <= b? */
        leq(a: number, b: number): any;
        /** Logarithm to arbitrary base b. */
        log(x: number, b?: number): any;
        /** Logarithm to base 10. */
        log10(x: number): any;
        /** Logarithm to base 2. */
        log2(x: number): any;
        /** Logical test: a < b? */
        lt(a: number, b: number): any;
        /** Compute the sum of two matrices: mat1 + mat2. */
        matMatAdd(mat1: number[][], mat2: number[][]): any;
        /** Computes the product of the two matrices: mat1 * mat2. */
        matMatMult(mat1: number[][], mat2: number[][]): any;
        /** Multiply a matrix mat by a scalar alpha: mat * scalar */
        matNumberMult(mat: number[][], alpha: number): any;
        /** Initializes a matrix as an array of rows with the given value. */
        matrix(n: number, m: number, init: number): any;
        /** Multiplies a vector vec to a matrix mat: mat * vec. */
        matVecMult(mat: number[][], vec: number[]): any;
        /** The JavaScript implementation of the % operator returns the symmetric modulo. */
        mod(a: number, m: number): any;
        /** Normal distribution function */
        ndtr(x: number): any;
        /** Inverse of normal distribution function */
        ndtri(x: number): any;
        /** Logical test: a !== b? */
        neq(a: Boolean, b: Boolean): any;
        /** Euclidean norm of a vector. */
        norm(a: number, n: number): any;
        /** Normalize the standard form [c, b0, b1, a, k, r, q0, q1]. */
        normalize(stdform: number[]): any;
        /** Logical operator: !a? */
        not(a: Boolean): any;
        /** Compute n-th real root of a real number. */
        nthroot(x: number, n: number): any;
        /** Logical operator: a || b? */
        or(a: Boolean, b: Boolean): any;
        /** Compute base to the power of exponent. */
        pow(base: number, exponent: number): any;
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov: number[][], ratio: number, n: number, f: number): any;
        /** Compute base to the power of the rational exponent m / n. */
        ratpow(base: number, m: number, n: number): any;
        /** Determine the relative difference between two numbers. */
        relDif(a: number, b: number): any;
        /** Special use of Math.round function to round not only to integers but also to chosen decimal values. */
        roundToStep(value: number, step: number, min: number, max: number): any;
        /** The sign() function returns the sign of a number, indicating whether the number is positive, negative or zero. */
        sign(x: number): any;
        /** Sine hyperbolicus of x. */
        sinh(x: number): any;
        /** A square & multiply algorithm to compute base to the power of exponent. */
        squampow(base: number, exponent: number): any;
        /** Converts a two-dimensional array to a one-dimensional Float32Array that can be processed by WebGL. */
        toGL(m: number[]): any;
        /** Trace of a square matrix, given as a two-dimensional array. */
        trace(M: number[][]): any;
        /** Transposes a matrix given as a two-dimensional array. */
        transpose(M: number[][]): any;
        /** Multiplies a vector vec to a matrix mat from the left: vec * mat. */
        vecMatMult(vec: number[], mat: number[][]): any;
        /** Initializes a vector of size n wih coefficients set to the init value (default 0) */
        vector(n: number, init?: number): any;
        /** Theorem of Vieta: Given a set of simple zeroes x_0, . */
        Vieta(x: number): any;
        /** Translate x into the interval [a, b) by adding a multiple of b - a. */
        wrap(x: number, a: number, b: number): any;
        /** A way of clamping a periodic variable. */
        wrapAndClamp(x: number, a: number, b: number, period: number): any;
        /** Logical operator: either a or b? */
        xor(a: Boolean, b: Boolean): any;
    };
    Numerics: {
        bezier(points: Point[]): any;
        bspline(points: Point[], order: number): any;
        CardinalSpline(points: Point[], tau: number | Function): any;
    };
    Statistics: {
        /** Generate value of a standard normal random variable with given mean and standard deviation.
                                          See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
        randomNormal(mean: number, stdDev: number): any;
        /** Generate value of a uniform distributed random variable in the interval [a, b]. */
        randomUniform(a: number, b: number): any;
        /** Generate value of a random variable with exponential distribution.
                                           See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                           Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
        randomExponential(lambda: number): any;
        /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                               See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                               Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
        randomGamma(shape: number, scale?: number, threshold?: number): any;
        /** Generate value of a random variable with Pareto distribution with shape gamma and scale k.
                                          See {@link https://en.wikipedia.org/wiki/Pareto_distribution}. */
        randomPareto(shape: number, scale?: number, threshold?: number): any;
        /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                           See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
        randomBeta(alpha: number, beta: number): any;
        /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
        randomChisquare(k: number): any;
        /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/F-distribution}. */
        randomF(d1: number, d2: number): any;
        /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
        randomT(v: number): any;
        /** Generate values for a random variable in binomial distribution with parameters n and p
                                           See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
        randomBinomial(n: number, p: number): any;
        /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                           See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
        randomGeometric(p: number): any;
        /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                           See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
        randomPoisson(mu: number): any;
        /** Generate values for a random variable in hypergeometric distribution.
                                           See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                           Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                           <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
        randomHypergeometric(good: number, bad: number, samples: number): any;
        /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
        histogram(data: number[], bins?: number, range?: boolean | [number, number], density?: boolean, cumulative?: boolean): any;
        /** The P-th percentile ( 0 < P ≤ 100 ) of a list of N ordered values (sorted from least to greatest) is the smallest value in the list such that no more than P percent of the data is strictly less than the value and at least P percent of the data is less than or equal to that value. */
        percentile(data: number[], ranges: number[]): any;
    };
};
/** This wraps the JSX library and the constructor is equivalent to the `initBoard()` method.

 * ```js

 * let TSX = new TSXBoard('jxgbox)`

 * ```

 * */
export declare class TSXBoard {
    private _jBoard;
    private _jView3d;
    private printLineNumber;
    private currentCanvas;
    private boardList;
    private defaultAttrs;
    /** Store a reference to every board in this central list. */
    static get boards(): any;
    /** Constant: screen coordinates in pixel relative to the upper left corner of the div element. */
    static get COORDS_BY_SCREEN(): any;
    /** Constant: user coordinates relative to the coordinates system defined by the bounding box. */
    static get COORDS_BY_USER(): any;
    /** Associative array that keeps track of all constructable elements registered via JXG.registerElement. */
    static get elements(): any;
    /** The FileReader object bundles the file input capabilities of JSXGraph. */
    static get FileReader(): any;
    /** Internet Explorer version. */
    static get ieVersion(): any;
    /** A document/window environment is available. */
    static get isBrowser(): any;
    /** Constant: the small gray version indicator in the top left corner of every JSXGraph board (if showCopyright is not set to false on board creation). */
    static get licenseText(): any;
    /** Default color palette. */
    static get palette(): any;
    /** Bang Wong color palette, optimized for various type of color blindness. */
    static get paletteWong(): any;
    /** Store the available file readers in this structure. */
    static get readers(): any;
    /** Holds all possible properties and the according validators for geometry elements. */
    static get Validator(): any;
    /** Constant: the currently used JSXGraph version. */
    static get version(): any;
    constructor(canvas?: string, attributes?: BoardAttributes);
    /** test for empty object {} */
    isEmptyObject(obj: Object): Boolean;
    defaultAttributes(attrs?: Object): Object;
    isAttribute(last: any): Boolean;
    Print(...args: any[]): void;
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
    useMathJax(): void;
    /** sets the projection to parallel or perspective.  Possible values are 'centeral' or 'parallel'. */
    projection3D(setting: 'parallel' | 'central'): void;
    /** Add the default x- and y-axis and grid to the construction,, equivalent to using the code below.

     * ```js

     * TSX.axis([0,0],[1,0]);

     * TSX.axis([0,0],[0,1]);

     * ```

     */
    addAxis(): void;
    /**  Set infobox visible / invisible. */
    displayInfobox(val: Boolean): void;
    /** Sets an arbitrary number of attributes.  Use an object with key-value pairs.

     * ```js

     * TSX.board.setAttribute({axis:true});    // turn on the default axis

     * ```

     */
    /** Zooms into the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY

     * and applies the zoom. The zoom operation is centered at x, y. */
    zoomIn(x: number, y: number): any;
    /** Zooms out of the board by the factors board.attr.zoom.factorX and board.attr.zoom.factorY and applies the zoom.*/
    zoomOut(x: number, y: number): any;
    /** Sets the zoom level to fX resp fY.*/
    setZoom(fX: number, fY: number): any;
    /** Reset the zoom level to the original zoom level from initBoard(); Additionally, if the board as been initialized with a boundingBox(which is the default ), restore the viewport to the original viewport during initialization.*/
    zoom100(): any;
    /** Set the bounding box of the board. */
    setBoundingBox(box: number[], keepAspectRatio?: Boolean, setZoom?: 'reset' | 'keep' | 'update'): Object;
    /** Get the bounding box of the board. */
    getBoundingBox(): number[];
    /** set Katex as default for board (names, labels, everything).  useKatex() need only be set ONCE, no way to unset. the text element has a 'useKatex' attribute that lets you turn Katex on and off for individual text fields. */
    useKatex(): void;
    /** Add all possible event handlers to the board object that move objects, i.e. */
    addEventHandlers(): any;
    /**    Register keyboard event handlers. */
    addKeyboardEventHandlers(): any;
    /** Adds a grid to the board according to the settings given in board.options. For more control, use the TSX.grid object.*/
    addGrid(): any;
    /** Event handlers for the board (rather than for individual elements).

    *```js

    *    TSX.board.on('pointerdown',pointerDown)

    *    //equivalent to:   addEventListener("pointerdown", pointerDown)

    *```

    */
    on(event: string, handler: Function): void;
    /** given a PointerEvent (eg: TSX.on('down', (e:Event) ... ), returns the mouse coordinates [x,y] in JSXGraph coordinates.  */
    getMouseCoords(e: Event): number[];
    /** Add fullscreen events which update the CSS transformation matrix to correct the mouse/ touch / pointer positions in case of CSS transformations..*/
    addFullscreenEventHandlers(): any;
    /** Add user activity to the array 'board.userLog'.*/
    addLogEntry(type: string, obj: Object, pos: number): any;
    /** Registers mouse move, down and wheel event handlers.*/
    addMouseEventHandlers(): any;
    /** Registers pointer event handlers.*/
    addPointerEventHandlers(): any;
    /** Add resize related event handlers*/
    addResizeEventHandlers(): any;
    /** Register touch start and move and gesture start and change event handlers.*/
    addTouchEventHandlers(): any;
    /** Registers pointer event handlers.*/
    addWheelEventHandlers(): any;
    /** General purpose animation function.*/
    animate(): any;
    /** Apply update on all objects with the new zoom - factors.*/
    applyZoom(): any;
    /** Calculates adequate snap sizes.*/
    calculateSnapSizes(): any;
    /** Delete the elements drawn as part of a trace of an element.*/
    clearTraces(): any;
    /** Handler for click on down arrow in the navigation bar*/
    clickDownArrow(): any;
    /** Handler for click on left arrow in the navigation bar*/
    clickLeftArrow(): any;
    /** Handler for click on right arrow in the navigation bar*/
    clickRightArrow(): any;
    /** Handler for click on up arrow in the navigation bar*/
    clickUpArrow(): any;
    /** Creates a new geometric element of type elementType.*/
    create(elementType: string, parents: string, attributes: Object): any;
    /** Deprecated name for JXG.Board.create.*/
    createElement(): any;
    /** Function to animate a curve rolling on another curve.*/
    createRoulette(c1: Object, c2: Object, start_c1: number, stepsize: number, direction: number, time: number, pointlist: Object[]): any;
    /** Remove highlighting of all elements.*/
    dehighlightAll(): any;
    /** Initializes color blindness simulation.*/
    emulateColorblindness(deficiency: string): any;
    /** After construction of the object the visibility is set and the label is constructed if necessary.*/
    finalizeAdding(obj: Object): any;
    /** If fullscreen mode is toggled, the possible CSS transformations which are applied to the JSXGraph canvas have to be reread.*/
    fullscreenListener(evt: Event): any;
    /** Runs through all elements and calls their update() method and update the conditions.*/
    fullUpdate(): any;
    /** Generates unique id for a board.*/
    generateId(): any;
    /** Generates an unique name for the given object.*/
    generateName(object: Object): any;
    /** Triggered on iOS / Safari while the user inputs a gesture(e.g.*/
    gestureChangeListener(evt: Event): any;
    /** Called by iOS / Safari as soon as the user starts a gesture.*/
    gestureStartListener(evt: Event): any;
    /** Collects all elements under current mouse position.*/
    getAllObjectsUnderMouse(evt: Event): any;
    /** Collects all elements under current mouse position plus current user coordinates of mouse cursor.*/
    getAllUnderMouse(evt: Event): any;
    /** Calculates mouse coordinates relative to the boards container.*/
    getCoordsTopLeftCorner(): any;
    /** Get the position of the pointing device in screen coordinates, relative to the upper left corner of the host tag.*/
    getMousePosition(e: Event, i: number): any;
    /** This method calculates the user coords of the current mouse coordinates.*/
    getUsrCoordsOfMouse(evt: Event): any;
    /** Checks if the given point is inside the boundingbox.*/
    hasPoint(x: number, y: number): any;
    /** Changes the text of the info box to what is provided via text.*/
    highlightCustomInfobox(text: string, el: Object): any;
    /** Changes the text of the info box to show the given coordinates.*/
    highlightInfobox(x: number, y: number, el?: Object): any;
    /** Initialize some objects which are contained in every GEONExT construction by default, but are not contained in the gxt files.*/
    initGeonextBoard(): any;
    /** Initialize the info box object which is used to display the coordinates of points near the mouse pointer,*/
    initInfobox(attributes: Object): any;
    /** Collects all elements below the current mouse pointer and fulfilling the following constraints: isDraggable, visible, not fixed, not frozen*/
    initMoveObject(x: number, y: number, evt: Event, type: string): any;
    /** Initiate moving the origin.. This is used in mouseDown and touchStart listeners. */
    initMoveOrigin(x: number, y: number): any;
    /** Allow moving of JSXGraph elements with arrow keys.*/
    keyDownListener(evt: Event): any;
    /** Event listener for SVG elements getting focus.*/
    keyFocusInListener(evt: Event): any;
    /** Event listener for SVG elements losing focus.*/
    keyFocusOutListener(evt: Event): any;
    /** Migrate the dependency properties of the point src to the point dest and delete the point src.*/
    migratePoint(src: Object, dest: Object, copyName: string): any;
    /** This method is called by the browser when the mouse device clicks on the screen.*/
    mouseClickListener(evt: Event): any;
    /** This method is called by the browser when the mouse device double clicks on the screen.*/
    mouseDblClickListener(evt: Event): any;
    /** This method is called by the browser when the mouse button is clicked.*/
    mouseDownListener(evt: Event): any;
    /** This method is called by the browser when the mouse is moved.*/
    mouseMoveListener(evt: Event): any;
    /** This method is called by the browser when the mouse button is released.*/
    mouseUpListener(evt: Event): any;
    /** Handler for mouse wheel events.*/
    mouseWheelListener(evt: Event): any;
    /** Moves an object.*/
    moveObject(x: number, y: number, o: Object, evt: Event, type: string): any;
    /** Moves the origin and initializes an update of all elements.*/
    moveOrigin(x: number, y: number): any;
    /** This method is called by the browser when a pointer device clicks on the screen. */
    pointerClickListener(evt: Event): any;
    /**     This method is called by the browser when a pointer device double clicks on the screen.*/
    pointerDblClickListener(evt: Event): any;
    /** This method is called by the browser when a pointing device is pressed on the screen.*/
    pointerDownListener(evt: Event, object: Object, allowDefaultEventHandling: Boolean): any;
    /** Triggered by the pointerleave event.*/
    pointerLeaveListener(evt: Event): any;
    /** Called periodically by the browser while the user moves a pointing device across the screen.*/
    pointerMoveListener(evt: Event): any;
    /** Triggered as soon as the user stops touching the device with at least one finger.*/
    pointerUpListener(evt: Event): any;
    /** Sets for all objects the needsUpdate flag to 'true'.*/
    prepareUpdate(drag: Object): any;
    /** Update the container before and after printing.*/
    printListener(evt: Event): any;
    /** Wrapper for printListener to be used in mediaQuery matches.*/
    printListenerMatch(mql: any): any;
    /** Removes the ancestors of an object an the object itself from board and renderer.*/
    removeAncestors(object: Object): any;
    /** Deletes a board from the list of dependent boards.*/
    removeChild(): any;
    /** Remove all event handlers from the board object*/
    removeEventHandlers(): any;
    /** Remove all registered event handlers regarding fullscreen mode.*/
    removeFullscreenEventHandlers(): any;
    /** Removes all grids assigned to this board.*/
    removeGrids(): any;
    /** Please use JXG.Board.off instead.*/
    removeHook(id: string): any;
    /** Remove all registered touch event handlers.*/
    removeKeyboardEventHandlers(): any;
    /** De - register mouse event handlers.*/
    removeMouseEventHandlers(): any;
    /** Removes object from board and renderer.*/
    removeObject(object: any | any[], saveMethod?: Boolean): any;
    /** Remove MSPointer * Event handlers.*/
    removePointerEventHandlers(): any;
    /** Remove resize related event handlers*/
    removeResizeEventHandlers(): any;
    /** Remove all registered touch event handlers.*/
    removeTouchEventHandlers(): any;
    /** Change the height and width of the board's container.*/
    resizeContainer(canvasWidth: number, canvasHeight: number, dontset: Boolean, dontSetBoundingBox: Boolean): any;
    /** Fallback solutions if there is no resizeObserver available in the browser.*/
    resizeListener(): any;
    /** Listener to watch for scroll events.*/
    scrollListener(evt: Event): any;
    /** Select a single or multiple elements at once.*/
    select(str: string, onlyByIdOrName: Boolean): any;
    /** Sets an arbitrary number of attributes.*/
    setAttribute(attributes: BoardAttributes): any;
    /** Composes an id for an element.*/
    setId(obj: Object, type: number): any;
    /** Lists the dependencies graph in a new HTML - window.*/
    showDependencies(): any;
    /** Lists the XML code of the construction in a new HTML - window.*/
    showXML(): any;
    /** Watch for changes of the visibility of the JSXGraph container element.*/
    startIntersectionObserver(): any;
    /** Start observer which reacts to size changes of the JSXGraph container div element.*/
    startResizeObserver(): any;
    /** Start selection mode.*/
    startSelectionMode(): any;
    /** Cancels all running animations.*/
    stopAllAnimation(): any;
    /** Stop the intersection observer*/
    stopIntersectionObserver(): any;
    /** Stops the resize observer.*/
    stopResizeObserver(): any;
    /** Finalize the selection: disable selection mode and return (this._jBoard as any). the coordinates of the selection rectangle.*/
    stopSelectionMode(): any;
    /** Suppresses the default event handling.*/
    suppressDefault(e: Event): any;
    /** Stop updates of the board.*/
    suspendUpdate(): any;
    /** Expand the JSXGraph construction to fullscreen.*/
    toFullscreen(id: string): any;
    /** Triggered as soon as the user stops touching the device with at least one finger.*/
    touchEndListener(evt: Event): any;
    /** Called periodically by the browser while the user moves his fingers across the device.*/
    touchMoveListener(evt: Event): any;
    /** This method is called by the browser when a finger touches the surface of the touch - device.*/
    touchStartListener(evt: Event): any;
    /** Moves elements in multitouch mode.*/
    twoFingerMove(p1: number[], p2: number[], o: Object, evt: Event): any;
    /** Moves, rotates and scales a line or polygon with two fingers.*/
    twoFingerTouchObject(tar: number[], drag: Object, id: string): any;
    /** Enable updates of the board.*/
    unsuspendUpdate(): any;
    /** Runs through most elements and calls their update() method and update the conditions.*/
    update(drag?: Object): any;
    /** updates conditions*/
    updateConditions(): any;
    /** Update the width and height of the JSXGraph container div element.*/
    updateContainerDims(width: number, height: number): any;
    /** Update the coords object of all elements which possess this property.*/
    updateCoords(): any;
    /** Update CSS transformations of type scaling.*/
    updateCSSTransforms(): any;
    /** Runs through all elements and calls their update() method.*/
    updateElements(drag?: Object): any;
    /** Runs through all hooked functions and calls them.*/
    updateHooks(m: any): any;
    /** Updates and displays a little info box to show coordinates of current selected points.*/
    updateInfobox(el: Object): any;
    /** Runs through all elements and calls their update() method.*/
    updateRenderer(): any;
    /** Runs through all elements and calls their update() method.*/
    updateRendererCanvas(): any;
    /** Zooms the board so every visible point is shown.*/
    zoomAllPoints(): any;
    /** Reset the bounding box and the zoom level to 100 % such that a given set of elements is within the board's viewport.*/
    zoomElements(elements: any): any;
    /** Sets camera view to the given values. */
    /** Sets camera view to the given values. */
    setView(az: number, el: number, r?: number): any;
    /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.
               
   *```js
   TSX.Point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
   TSX.Point([3,3]),{fixed:true, showInfobox:true}
   TSX.Point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
   TSX.Point([1,2,2])  // three axis definition - [z,x,y]
               
   *```
               
    also create points with Intersection, Midpoint, TransformPoint, Circumcenter, Glider, TransformPoint, and others. */
    Point(position: pointAddr, attributes?: PointAttributes): Point;
    /** Line has two signatures.
    *```
   *```
    #1  Create a line defined by two points (or point addresses)
   
   *```js
   TSX.Line([3,2],[3,3],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
   let P1 = TSX.Point([3,2])
   TSX.Line(p1,[3,3])
   
   *```
    */
    Line(p1: Point | pointAddr, p2: Point | pointAddr, attributes?: LineAttributes): Line;
    /** Line has two signatures.
    *```
   *```
    #2 Create a line for the equation a*x+b*y+c*z = 0',
   
   *```js
   TSX.Line(2,3,1)   // create a line for the equation a*x+b*y+c*z = 0
   
   *```
    */
    Line(A: number | Function, B: number | Function, C: number | Function, attributes?: LineAttributes): Line;
    /** create a chart */
    Chart(f: number[], attributes?: ChartAttributes): Chart;
    /** A circle can be constructed by providing a center and a point on the circle,
                   or a center and a radius (given as a number, function, line, or circle).
                   If the radius is a negative value, its absolute values is taken.
          
   *```js
          TSX.Circle(P1,1])
          TSX.Circle([0,0],[1,0])
          
   *```
          
   Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle.
    *```
   *```
     */
    Circle(centerPoint: Point | pointAddr | Function, remotePoint: Point | pointAddr | Line | number | Function | Circle, attributes?: CircleAttributes): Circle;
    /** A circle can be constructed by providing a center and a point on the circle,
                   or a center and a radius (given as a number, function, line, or circle).
                   If the radius is a negative value, its absolute values is taken.
          
   *```js
          TSX.Circle(P1,1])
          TSX.Circle([0,0],[1,0])
          
   *```
          
   Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle.
    *```
   *```
     */
    Circle(initial: Circle, transform: Transformation, attributes?: CircleAttributes): Circle;
    /** In 3D space, a circle consists of all points on a given plane with a given distance from a given point.
                       The given point is called the center, and the given distance is called the radius.
                       A circle can be constructed by providing a center, a normal vector (either homogenous or cartesian),
                       and a radius (given as a number or function).
                       
   *```js
   let a = TSX.Point3D([-3, 0, 0])
   let circle = TSX.Circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
   ```
    */
    Circle3D(center: Point3D, normal: number[] | Function, radius: number | Function, attributes?: Circle3DAttributes): Circle3D;
    /** Plot a set of points or a function from arrays X and Y
    *```
   *```
     */
    Curve(xArray: number[] | Function, yArray: number[] | Function, attributes?: CurveAttributes): Curve;
    /** Plot a set of points or a function from arrays X and Y
    *```
   *```
     */
    Curve(xArray: number[] | Function, yArray: number[] | Function, left: NumberFunction, right: NumberFunction, attributes?: CurveAttributes): Curve;
    /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points.
    *```
   *```
    FX(u), FY(u), FZ(u) are functions returning a number, range is the array containing lower and upper bound for the range of the parameter u. range may also be a function returning an array of length two. */
    Curve3D(Fx: (x: number) => number, Fy: (y: number) => number, Fz: (z: number) => number, range: pointAddr3D, attributes?: Curve3DAttributes): Curve3D;
    /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points.
    *```
   *```
    A function of one variable returns an array of [x,y,z] values. */
    Curve3D(Fxyz: (x: number) => [number, number, number] | number[], range: pointAddr3D, attributes?: Curve3DAttributes): Curve3D;
    /** Three signatures: A curve in 3D is given by a function returning [x,y,z], three functions returning [x], [y],and [z], or three arrays containing coordinate points.
    *```
   *```
    A curve is drawn through the XYZ points described by three arrays. */
    Curve3D(X: number[], Y: number[], Z: number[], attributes?: Curve3DAttributes): Curve3D;
    /** This element is used to provide a constructor for arbitrary content in an SVG foreignObject container.
   ```js
   TSX.ForeignObject(
       `<video width="300" height="200" src="https://eucbeniki.sio.si/vega2/278/Video_metanje_oge_.mp4" type="html5video" controls>`,
       [0, -3], [9, 6],
       {layer: 8, fixed: true})
   ```
                 */
    ForeignObject(content: string, position: number[], size?: number[] | null, attributes?: ForeignObjectAttributes): ForeignObject;
    /** Array of Points */
    Group(pointArray: Point[] | Polygon, attributes?: GroupAttributes): Group;
    /** Display an image.  The first element is the location URL of the image.
               A collection of space icons is provided, press CTRL+I to show the list.
               The second parameter sets the lower left point of the image.
               The optional third parameter sets the size multiplier of the image, default is [1,1].
               
   If you want to move the image, just tie the image to a point, maybe at the center of the image.
               For more flexibility, see TSX.Rotate() and TSX.Translate().  Also, you can fade the image with opacity.
               
   *```js
               TSX.Image('icons/earth.png', [0, 0],[2,2])
               let p1 = TSX.Point([3, 2], { opacity: .1 })
               TSX.Image('icons/moon-full-moon.png', [()=>p1.X(),()=>p1.Y()])
               
   *```
    *```
   *```
     */
    Image(url: SpaceIcon, lowerLeft: pointAddr, widthHeight?: [number, number], attributes?: ImageAttributes): Image;
    /** Display an image.  The first element is the location URL of the image.
               A collection of space icons is provided, press CTRL+I to show the list.
               The second parameter sets the lower left point of the image.
               The optional third parameter sets the size multiplier of the image, default is [1,1].
               
   If you want to move the image, just tie the image to a point, maybe at the center of the image.
               For more flexibility, see TSX.Rotate() and TSX.Translate().  Also, you can fade the image with opacity.
               
   *```js
               TSX.Image('icons/earth.png', [0, 0],[2,2])
               let p1 = TSX.Point([3, 2], { opacity: .1 })
               TSX.Image('icons/moon-full-moon.png', [()=>p1.X(),()=>p1.Y()])
               
   *```
    *```
   *```
     */
    Image(url: string, lowerLeft: pointAddr, widthHeight?: [number, number], attributes?: ImageAttributes): Image;
    /** An implicit curve is a plane curve defined by an implicit equation relating two coordinate variables, commonly x and y. For example, the unit circle is defined by the implicit equation x2 + y2 = 1. In general, every implicit curve is defined by an equation of the form f(x, y) = 0 for some function f of two variables.  IMPLICIT means that the equation is not expressed as a solution for either x in terms of y or vice versa.
    *```
   *```
     */
    ImplicitCurve(f: Function | String, attributes?: ImplicitCurveAttributes): ImplicitCurve;
    /** An implicit curve is a plane curve defined by an implicit equation relating two coordinate variables, commonly x and y. For example, the unit circle is defined by the implicit equation x2 + y2 = 1. In general, every implicit curve is defined by an equation of the form f(x, y) = 0 for some function f of two variables.  IMPLICIT means that the equation is not expressed as a solution for either x in terms of y or vice versa.
    *```
   *```
     */
    ImplicitCurve(f: Function | String, dfx: Function | String, dfy: Function | String, attributes?: ImplicitCurveAttributes): ImplicitCurve;
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    IntersectionCircle3D(sphere1: Sphere3D, sphere: Sphere3D | Plane3D, attributes?: IntersectionCircle3DAttributes): IntersectionCircle3D;
    /** The circle that is the intersection of two elements (plane3d or sphere3d) in 3D. */
    IntersectionLine3D(plane1: Sphere3D | Plane3D, plane2: Plane3D, attributes?: IntersectionLine3DAttributes): IntersectionLine3D;
    /** Two signatures: A line in 3D is given by two points, or one point and a direction vector.
    *```
   *```
    The 3D line is defined by two 3D points (Point3D): The points can be either existing points or coordinate arrays of the form [x, y, z]. */
    Line3D(point1: Point3D | pointAddr3D, pointDir: Point3D | pointAddr3D, attributes?: Line3DAttributes): Line3D;
    /** Two signatures: A line in 3D is given by two points, or one point and a direction vector.
    *```
   *```
    The 3D line is defined by a point (or coordinate array [x, y, z]) a direction given as array [x, y, z] and an optional range given as array [s, e]. The default value for the range is [-Infinity, Infinity]. */
    Line3D(point: Point3D | pointAddr3D, direction: Line3D | pointAddr3D, range: number[] | pointAddr, attributes?: Line3DAttributes): Line3D;
    /** A 3D plane is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Plane3D(point: Point3D | number[] | Function, direction1: number[] | Function, direction2: number[] | Function, range1?: pointAddr, range2?: pointAddr, attributes?: Plane3DAttributes): Plane3D;
    /** A 3D plane is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Plane3D(point: Point3D | number[] | Function, direction1: number[] | Function | Function[], direction2: number[] | Function | Function[], range1?: pointAddr, range2?: pointAddr, attributes?: Plane3DAttributes): Plane3D;
    /** A 3D plane is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Plane3D(point1: Point3D, point2: Point3D, point3: Point3D, range1?: pointAddr, range2?: pointAddr, attributes?: Plane3DAttributes): Plane3D;
    /** A 3D plane is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Plane3D(point1: Point3D, point2: Point3D, point3: Point3D, attributes?: Plane3DAttributes): Plane3D;
    /** This element is used to provide a constructor for a 3D Point.
    *```
   *```
     */
    Point3D(xyz: number[], attributes?: Point3DAttributes): Point3D;
    /** This element is used to provide a constructor for a 3D Point.
    *```
   *```
     */
    Point3D(fn: () => number[] | [number, number, number], attributes?: Point3DAttributes): Point3D;
    /** Array of Points */
    Polygon(vertices: Point[] | pointAddr[] | Function, attributes?: PolygonAttributes): Polygon;
    /** A polygon is a sequence of points connected by lines, with the last point connecting back to the first one. The points are given by a list of Point3D objects or a list of coordinate arrays. Each two consecutive points of the list define a line. */
    Polygon3D(vertices: Point3D[] | pointAddr3D[] | Function, attributes?: Polygon3DAttributes): Polygon3D;
    /** Display a message
                                   
   *```js
   TSX.Text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
   TSX.Text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
   TSX.Text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })
                                   
   *``` */
    Text(position: Point | pointAddr, label: string | Function, attributes?: TextAttributes): Text;
    /** Create a 3D text object.  The text is positioned at the given point in 3D space.
                       The text can be a string or a function that returns a string.  If the optional 'slide' element is
                       provided, then the text is a slider on that element
                       
   *```js
       TSX.Text3D([0, 0, 0], 'origin')
   
       let a = TSX.Point3D([-3, 0, 0])
       let circle = TSX.Circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
       TSX.Text3D([0, 0, 0], 'slider', circle)
    
    *```
   *```
     */
    Text3D(position: Point3D | number[] | Function, text: string | Function, attributes?: Text3DAttributes): Text3D;
    /** Create a 3D text object.  The text is positioned at the given point in 3D space.
                       The text can be a string or a function that returns a string.  If the optional 'slide' element is
                       provided, then the text is a slider on that element
                       
   *```js
       TSX.Text3D([0, 0, 0], 'origin')
   
       let a = TSX.Point3D([-3, 0, 0])
       let circle = TSX.Circle3D(a, [1, 1, 1], 2, { strokeWidth: 5, strokeColor: 'blue' })
       TSX.Text3D([0, 0, 0], 'slider', circle)
    
    *```
   *```
     */
    Text3D(position: Point3D | number[] | Function, text: string | Function, slide: GeometryElement3D, attributes?: Text3DAttributes): Text3D;
    /** Ticks are used as distance markers on a line or curve. They are mainly used for axis elements and slider elements.  */
    Ticks(line: Line, attributes?: TicksAttributes): Ticks;
    Sector(P1: Point | pointAddr, P2: Point | pointAddr, P3: Point | pointAddr, attributes?: SectorAttributes): Sector;
    Vectorfield(fxfy: Function[], horizontalMesh?: number[], verticalMesh?: number[], attributes?: VectorfieldAttributes): Vectorfield;
    /** The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
   ```js
   TSX.Angle(p1,p2,p3)                                  // angle from 3 points
   TSX.Angle(l1, l2, [5.5, 0], [4, 3], { radius: 1 })   // 2 lines, two directions
   TSX.Angle(l1, l2, 1, -1, { radius: 2 })              // 2 lines two +/- values
   ```
                As opposed to the sector, an angle has two angle points and no radius point.
    
    type=='sector': Sector is displayed.
    
    type=='square': a parallelogram is displayed.
    
    type=='auto':  a square is displayed if the angle is near orthogonal.
    *```
   *```
     */
    Angle(from: Point | pointAddr, around: Point | pointAddr, to: Point | pointAddr, attributes?: AngleAttributes): Angle;
    /** The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
   ```js
   TSX.Angle(p1,p2,p3)                                  // angle from 3 points
   TSX.Angle(l1, l2, [5.5, 0], [4, 3], { radius: 1 })   // 2 lines, two directions
   TSX.Angle(l1, l2, 1, -1, { radius: 2 })              // 2 lines two +/- values
   ```
                As opposed to the sector, an angle has two angle points and no radius point.
    
    type=='sector': Sector is displayed.
    
    type=='square': a parallelogram is displayed.
    
    type=='auto':  a square is displayed if the angle is near orthogonal.
    *```
   *```
     */
    Angle(line1: Line | [Point | pointAddr, Point | pointAddr], line2: Line | [Point | pointAddr, Point | pointAddr], direction1: [number, number], direction2: [number, number], attributes?: AngleAttributes): Angle;
    /** The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
   ```js
   TSX.Angle(p1,p2,p3)                                  // angle from 3 points
   TSX.Angle(l1, l2, [5.5, 0], [4, 3], { radius: 1 })   // 2 lines, two directions
   TSX.Angle(l1, l2, 1, -1, { radius: 2 })              // 2 lines two +/- values
   ```
                As opposed to the sector, an angle has two angle points and no radius point.
    
    type=='sector': Sector is displayed.
    
    type=='square': a parallelogram is displayed.
    
    type=='auto':  a square is displayed if the angle is near orthogonal.
    *```
   *```
     */
    Angle(line1: Line | [Point | pointAddr, Point | pointAddr], line2: Line | [Point | pointAddr, Point | pointAddr], dirPlusMinus1: number, dirPlusMinus2: number, attributes?: AngleAttributes): Angle;
    /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).
                               
   *```js
                               let arc = TSX.Arc([-8,5],[-4,5],[-9,9]])
                               
   *```
                               
    To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
    Arc(origin: Point | pointAddr, from: Point | pointAddr, to: Point | pointAddr, attributes?: ArcAttributes): Arc;
    /** Arrow defined by two points (like a Segment) with arrow at P2
                               
   *```js
                               
    let arrow = TSX.Arrow([-8,5],[-4,5])
                               
   *```
                               
    */
    Arrow(p1: Point | pointAddr, p2: Point | pointAddr, attributes?: ArrowAttributes): Arrow;
    /** A line parallel to a given line (or two points), through a point.
    *```
   *```
     */
    Parallel(line: Line | [Point, Point], point: Point | pointAddr, attributes?: ParallelAttributes): Parallel;
    /** A line parallel to a given line (or two points), through a point.
    *```
   *```
     */
    Parallel(lineP1: Point | pointAddr, lineP2: Point | pointAddr, Point: Point | pointAddr, attributes?: ParallelAttributes): Parallel;
    /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
    ArrowParallel(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: ArrowParallelAttributes): ArrowParallel;
    /** Create an Axis with two points (like a Line) */
    Axis(p1: Point | pointAddr, p2: Point | pointAddr, attributes?: AxisAttributes): Axis;
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
    BezierCurve(points: Point[], attributes?: BezierCurveAttributes): Curve;
    /** Bisect an Angle defined with three points A,B,C, and divides the angle ABC into two equal sized parts. */
    Bisector(A: Point | pointAddr, B: Point | pointAddr, C: Point | pointAddr, attributes?: BisectorAttributes): Bisector;
    /** Bisect a Line defined with two points */
    Bisectorlines(l1: Line, l2: Line, attributes?: BisectorlinesAttributes): Bisectorlines;
    /** Create a button.
   ```js
       let toggleValue = false   // button toggles this value and updates board
       let butt = TSX.Button([0, 0], 'Toggle', () => {
           toggleValue = !toggleValue;
           butt.rendNodeButton.innerHTML = toggleValue ? 'On' : 'Off';
           butt.rendNodeButton.style.backgroundColor = toggleValue ? 'lightgreen' : 'salmon';
       });
       TSX.circle([0, 0], 1, { visible: () => toggleValue });  // sees update
   ```
    */
    Button(position: pointAddr, label: string | Function, handler: Function, attributes?: ButtonAttributes): Button;
    Cardinalspline(data: Point[] | number[][], funct: Function, splineType: `uniform` | `centripetal`, attributes?: CardinalsplineAttributes): Curve;
    Checkbox(position: pointAddr, label: string | Function, attributes?: CheckboxAttributes): Checkbox;
    /** Creates a Point at the center of a circle defined by 3 points */
    Circumcenter(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: CircumcenterAttributes): Circumcenter;
    /** Draw a circle defined by 3 points */
    Circumcircle(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: CircumcircleAttributes): Circumcircle;
    /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
    CircumcircleArc(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: CircumcircleArcAttributes): CircumcircleArc;
    /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
    CircumcircleSector(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: CircumcircleSectorAttributes): CircumcircleSector;
    Comb(p1: Point | pointAddr, p2: Point | pointAddr, attributes?: CombAttributes): Comb;
    /** Create a generic conic section either by five points or the six numeric coefficients of the general conic's equation.
    *```
   *```
    Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
    Conic(A: Point | pointAddr, B: Point | pointAddr, C: Point | pointAddr, D: Point | pointAddr, E: Point | pointAddr, attributes?: ConicAttributes): Conic;
    /** Create a generic conic section either by five points or the six numeric coefficients of the general conic's equation.
    *```
   *```
    Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
    Conic(A: number, B: number, C: number, D: number, E: number, F: number, attributes?: ConicAttributes): Conic;
    CurveDifference(curve1: Curve | Circle | Polygon | Inequality, curve2: Curve | Circle | Polygon | Inequality, attributes?: CurveDifferenceAttributes): CurveDifference;
    CurveIntersection(curve1: Curve | Circle | Polygon | Inequality, curve2: Curve | Circle | Polygon | Inequality, attributes?: CurveIntersectionAttributes): CurveIntersection;
    CurveUnion(curve1: Curve | Circle | Polygon | Inequality, curve2: Curve | Circle | Polygon | Inequality, attributes?: CurveUnionAttributes): CurveUnion;
    Derivative(curve: Curve, attributes?: DerivativeAttributes): Derivative;
    /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                           Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).
    *```
   *```
    Two points plus a radius */
    Ellipse(p1: Point | pointAddr, p2: Point | pointAddr, radius: Point | pointAddr | number | Function, attributes?: EllipseAttributes): Ellipse;
    /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                           Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).
    *```
   *```
    Two points plus a radius, with start and end  */
    Ellipse(p1: Point | pointAddr, p2: Point | pointAddr, radius: Point | pointAddr | number | Function, start?: number | Function, end?: number | Function, attributes?: EllipseAttributes): Ellipse;
    /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                           Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).
    *```
   *```
    Three Points */
    Ellipse(focalPoint1: Point | pointAddr, focalPoint2: Point | pointAddr, outerPoint: Point | pointAddr, attributes?: EllipseAttributes): Ellipse;
    /** Two methods to create an ellipse;An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.
                           Start and End are optional parameters for the curve start (default 0) and end (default 2*PI).
    *```
   *```
    Three Points, with  start and end. */
    Ellipse(focalPoint1: Point | pointAddr, focalPoint2: Point | pointAddr, outerPoint: Point | pointAddr, start?: number | Function, end?: number | Function, attributes?: EllipseAttributes): Ellipse;
    /** A 3D parametric surface visualizes a map (u, v) → [X(u, v), Y(u, v), Z(u, v)].
    *```
   *```
    FX(u,v), FY(u,v), FZ(u,v) are functions returning a number for [x,y,z],
   - rangeU is the array containing lower and upper bound for the range of parameter u,
   - rangeV is the array containing lower and upper bound for the range of parameter v.
   
   rangeU and rangeV may also be functions returning an array of length two. */
    ParametricSurface3D(FX: (u: number, v: number) => number, FY: (u: number, v: number) => number, FZ: (u: number, v: number) => number, rangeU: number[] | (() => number[]), rangeV: number[] | (() => number[]), attributes?: ParametricSurface3DAttributes): ParametricSurface3D;
    /** A 3D parametric surface visualizes a map (u, v) → [X(u, v), Y(u, v), Z(u, v)].
    *```
   *```
    F(u,v) is a function returning a number array [x,y,z],
   - rangeU is the array containing lower and upper bound for the range of parameter u,
   - rangeV is the array containing lower and upper bound for the range of parameter v.
   
   rangeU and rangeV may also be functions returning an array of length two. */
    ParametricSurface3D(F: (u: number, v: number) => number[], rangeU: number[] | (() => number[]), rangeV: number[] | (() => number[]), attributes?: ParametricSurface3DAttributes): ParametricSurface3D;
    /** Functiongraph visualizes a map x → f(x).  It is a wrapper for element Curve. The graph is drawn for x in the interval [a,b] default -10 to 10.
   ```js
   let f = TSX.Functiongraph((x: number) => 3 * Math.pow(x, 2))
   ``` */
    Functiongraph(funct: (x: number) => number, leftBorder?: number, rightBorder?: number, attributes?: FunctiongraphAttributes): Curve;
    /** A 3D functiongraph visualizes a map (x, y) → f(x, y).  */
    Functiongraph3D(xyFunction: (x: number, y: number) => number, xRange: NumberFunction[], yRange: NumberFunction[], attributes?: Functiongraph3DAttributes): Functiongraph3D;
    /** A point bound to a GeometryElement like Line, Circle, or Curve, with  optionally a starting point defined by [X,Y]
   ```js
   let c1 = TSX.Circle(a, 1)
   let g1 = TSX.Glider(c1)
   let g2 = TSX.Glider(c1,[0,0])  // includes initial point
   ```
    *```
   *```
     */
    Glider(hostElement: Line | Circle | Curve | Reflection, attributes?: GliderAttributes): Glider;
    /** A point bound to a GeometryElement like Line, Circle, or Curve, with  optionally a starting point defined by [X,Y]
   ```js
   let c1 = TSX.Circle(a, 1)
   let g1 = TSX.Glider(c1)
   let g2 = TSX.Glider(c1,[0,0])  // includes initial point
   ```
    *```
   *```
     */
    Glider(hostElement: Line | Circle | Curve | Reflection, initialPosition: number[], attributes?: GliderAttributes): Glider;
    /** Glider3D is an alias for JSXGraph's Point3D(). */
    Glider3D(element: Curve3D | Line3D | Sphere3D, initial?: number[], attributes?: Glider3DAttributes): Point3D;
    /** Creates a grid to support the user with element placement or to improve determination of position.
    *```
   *```
     */
    Grid(axis1: Axis, axis2: Axis, attributes?: GridAttributes): Grid;
    /** Creates a grid to support the user with element placement or to improve determination of position.
    *```
   *```
     */
    Grid(attributes?: GridAttributes): Grid;
    Hatch(line: Line | [Point | pointAddr, Point | pointAddr], numberHatches: number, attributes?: HatchAttributes): Hatch;
    Hyperbola(point1: Point | pointAddr, point2: Point | pointAddr, point3: Point | pointAddr | number, start?: number, end?: number, attributes?: HyperbolaAttributes): Hyperbola;
    Incenter(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: IncenterAttributes): Incenter;
    Incircle(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: IncircleAttributes): Incircle;
    Inequality(boundaryLine: Line | [Point | pointAddr, Point | pointAddr] | Curve, attributes?: InequalityAttributes): Inequality;
    Input(position: Point | pointAddr, label: string | Function, initial?: String, attributes?: InputAttributes): Input;
    Integral(range: number[], curve: Curve, attributes?: IntegralAttributes): Integral;
    /** A point intersecting two 1-dimensional elements. It is one point of the set consisting of the intersection points of the two elements.  The third parameter `i` selects the positive square root when 0, the negative square root when 1
    *```
   *```
     */
    Intersection(element1: Line | Circle | Curve | Polygon | PolygonalChain, element2: Line | Circle | Curve | Polygon | PolygonalChain, i?: number | Function, attributes?: IntersectionAttributes): Intersection;
    /** A point intersecting two 1-dimensional elements. It is one point of the set consisting of the intersection points of the two elements.  The third parameter `i` selects the positive square root when 0, the negative square root when 1
    *```
   *```
     */
    Intersection(element1: Line | Circle | Curve | Polygon | PolygonalChain, element2: Line | Circle | Curve | Polygon | PolygonalChain, attributes?: IntersectionAttributes): Intersection;
    /** Creates a Legend for a Chart Element
                                   
   *```js
   * let labels = ['a','b','c']
   * let colors = ['red','green','blue']
   * let legend = TSX.Legend([2,2],labels,colors)
   *```
                                   
    */
    Legend(lowerLeft: pointAddr, labels: string[], colors: string[], attributes?: LegendAttributes): Legend;
    Locus(point: Point, attributes?: LocusAttributes): Locus;
    MajorArc(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: MajorArcAttributes): MajorArc;
    MajorSector(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: MajorSectorAttributes): MajorSector;
    /** Display measurements of geometric properties and the arithmetic operations of measurements. Under the hood this is a text element which has a method Value. The text to be displayed is the result of the evaluation of a prefix expression, see JXG.PrefixParser.
   ```js
    let p = TSX.Point([4, 9]);
    let c = TSX.Circle([4, 7], p);
    TSX.Measurement([4, 4], 'Area', c, { visible: true, prefix: 'area: ', baseUnit: 'cm' });
    TSX.Measurement([4, 3], 'Radius', c, { prefix: 'radius: ', baseUnit: 'cm' });
   ```
    */
    Measurement(locn: Point | pointAddr, measure: string, element: Line | Circle | Curve | Slider, attributes?: MeasurementAttributes): Measurement;
    /** A 3D mesh is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Mesh3D(point: Point3D | number[] | Function, direction1: number[] | Function, direction2: number[] | Function, range1?: pointAddr, range2?: pointAddr, attributes?: Mesh3DAttributes): Mesh3D;
    /** A 3D mesh is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Mesh3D(point: Point3D | number[] | Function, direction1: number[] | Function | Function[], direction2: number[] | Function | Function[], range1?: pointAddr, range2?: pointAddr, attributes?: Mesh3DAttributes): Mesh3D;
    /** A 3D mesh is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Mesh3D(point1: Point3D, point2: Point3D, point3: Point3D, range1?: pointAddr, range2?: pointAddr, attributes?: Mesh3DAttributes): Mesh3D;
    /** A 3D mesh is defined either by a point and two linearly independent vectors, or by three points.
    *```
   *```
     */
    Mesh3D(point1: Point3D, point2: Point3D, point3: Point3D, attributes?: Mesh3DAttributes): Mesh3D;
    /** A point in the middle of two given points or a line segment.
    *```
   *```
     */
    Midpoint(p1: Point, p2: Point, attributes?: MidpointAttributes): Midpoint;
    /** A point in the middle of two given points or a line segment.
    *```
   *```
     */
    Midpoint(line: Line, attributes?: MidpointAttributes): Midpoint;
    MinorArc(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: MinorArcAttributes): MinorArc;
    MinorSector(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: MinorSectorAttributes): MinorSector;
    MirrorElement(element: Point | Line | Circle | Curve | Polygon, acrossPoint: Point | pointAddr, attributes?: MirrorElementAttributes): MirrorElement;
    MirrorPoint(p1: Point, p2: Point, attributes?: MirrorPointAttributes): MirrorPoint;
    NonReflexAngle(point1: Point, point2: Point, point3: Point, attributes?: NonReflexAngleAttributes): NonReflexAngle;
    /** A line through a given point on an element of type line, circle, curve, or turtle and orthogonal (at right angle) to that object.
    *```
   *```
     */
    Normal(object: Line | Circle | Curve, point: Point, attributes?: NormalAttributes): Normal;
    /** A line through a given point on an element of type line, circle, curve, or turtle and orthogonal (at right angle) to that object.
    *```
   *```
     */
    Normal(glider: Glider, attributes?: NormalAttributes): Normal;
    /** An `orthogonalprojection` is a locked point determined by projecting a point orthogonally onto a line.
   ```js
   let s1 = TSX.Segment(p1, p2)
   let p3 = TSX.Point([0, -1])
   TSX.Orthogonalprojection(p3, s1)
   ``` */
    Orthogonalprojection(point: Point | pointAddr, line: Line | [Point | pointAddr, Point | pointAddr], attributes?: OrthogonalprojectionAttributes): Orthogonalprojection;
    OtherIntersection(element1: Line | Circle, element2: Line | Circle, firstIntersection: Point, attributes?: OtherIntersectionAttributes): Point;
    Parabola(focalPoint: Point | pointAddr, line: Line | [Point | pointAddr, Point | pointAddr], attributes?: ParabolaAttributes): Parabola;
    /** A parallel point is given by three points, or a line and a point. Taking the Euclidean vector from the first to the second point, the parallel point is determined by adding that vector to the third point. The line determined by the first two points is parallel to the line determined by the third point and the constructed point.
    *```
   *```
     */
    Parallelpoint(line: Line | [Point, Point], point: Point | pointAddr, attributes?: ParallelpointAttributes): Parallelpoint;
    /** A parallel point is given by three points, or a line and a point. Taking the Euclidean vector from the first to the second point, the parallel point is determined by adding that vector to the third point. The line determined by the first two points is parallel to the line determined by the third point and the constructed point.
    *```
   *```
     */
    Parallelpoint(P1: Point, P2: Point, P3: Point, attributes?: ParallelpointAttributes): Parallelpoint;
    /** Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number.
    *```
   *```
     */
    Segment(P1: Point | pointAddr, P2: Point | pointAddr, attributes?: SegmentAttributes): Segment;
    /** Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number.
    *```
   *```
     */
    Segment(P1: Point | pointAddr, P2: Point | pointAddr, length: number | Function, attributes?: SegmentAttributes): Segment;
    Parallelogram(p1: Point | pointAddr, p2: Point | pointAddr, p3: Point | pointAddr, attributes?: ParallelogramAttributes): Parallelogram;
    /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
    Perpendicular(line: Line | [Point | pointAddr, Point | pointAddr], point: Point | pointAddr, attributes?: PerpendicularAttributes): Perpendicular;
    /** Create a point on a line where a perpendicular to a given point would intersect that line. */
    PerpendicularPoint(line: Line | [Point | pointAddr, Point | pointAddr], point: Point | pointAddr, attributes?: PerpendicularPointAttributes): PerpendicularPoint;
    /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
    PerpendicularSegment(line: Line | [Point | pointAddr, Point | pointAddr], point: Point | pointAddr, attributes?: PerpendicularSegmentAttributes): PerpendicularSegment;
    PolarLine(conic: Conic | Circle, point: Point, attributes?: PolarLineAttributes): PolarLine;
    PolePoint(conic: Conic | Circle, line: Line, attributes?: PolePointAttributes): PolePoint;
    /** A polygonal chain is a connected series of line segments (borders). It is determined by a list of points or a list of coordinate arrays or a function returning a list of coordinate arrays.
                               Each two consecutive points of the list define a line. In JSXGraph, a polygonal chain is simply realized as polygon without the last - closing - point. This may lead to unexpected results. Polygonal chains can be distinguished from polygons by the attribute 'elType' which is 'polygonalchain' for the first and 'polygon' for the latter. */
    PolygonalChain(pointArray: Point[] | pointAddr[] | Function, attributes?: PolygonalChainAttributes): PolygonalChain;
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
    Polyhedron3D(vertexList: (Point3D | pointAddr3D)[], faceArray: number[][], attributes?: Polyhedron3DAttributes): Polyhedron3D;
    RadicalAxis(circle1: Circle, circle2: Circle, attributes?: RadicalAxisAttributes): RadicalAxis;
    /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
    Reflection(object: Point | Line | Circle | Curve | Polygon | Arc | Sector, reflectLine: Line, attributes?: ReflectionAttributes): Reflection;
    ReflexAngle(point1: Point, point2: Point, point3: Point, attributes?: ReflexAngleAttributes): ReflexAngle;
    RegularPolygon(P1: Point | pointAddr, P2: Point | pointAddr, nVertices: number, attributes?: RegularPolygonAttributes): RegularPolygon;
    /** Visualize the Riemann sum which is an approximation of an integral by a finite sum. It is realized as a special curve. The returned element has the method Value() which returns the sum of the areas of the bars.
   
                           In case of type 'simpson' and 'trapezoidal', the horizontal line approximating the function value is replaced by a parabola or a secant. IN case of 'simpson', the parabola is approximated visually by a polygonal chain of fixed step width. */
    Riemannsum(funct: Function | number[], nBars: Function | number, type?: 'left' | 'right' | 'middle' | 'lower' | 'upper' | 'random' | 'simpson' | 'trapezoidal', leftBorder?: number | Function, rightBorder?: number | Function, attributes?: RiemannsumAttributes): Riemannsum;
    Semicircle(P1: Point | pointAddr, P2: Point | pointAddr, attributes?: SemicircleAttributes): Semicircle;
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
    Slider(StartPoint: Point | pointAddr, EndPoint: Point | pointAddr, minimum_initial_maximum: [number, number, number], attributes?: SliderAttributes): Slider;
    Slopefield(func: Function, xData: NumberFunction[], yData: NumberFunction[], attributes?: SlopefieldAttributes): Slopefield;
    /** A slope triangle is an imaginary triangle that helps you find the slope of a line or a line segment (use the method '.Value()' ). The hypotenuse of the triangle (the diagonal) is the line you are interested in finding the slope of. The two 'legs' of the triangle are the 'rise' and 'run' used in the slope formula.
    *```
   *```
     */
    Slopetriangle(tangent: Point | Tangent, attributes?: SlopetriangleAttributes): Slopetriangle;
    /** A slope triangle is an imaginary triangle that helps you find the slope of a line or a line segment (use the method '.Value()' ). The hypotenuse of the triangle (the diagonal) is the line you are interested in finding the slope of. The two 'legs' of the triangle are the 'rise' and 'run' used in the slope formula.
    *```
   *```
     */
    Slopetriangle(line: Line, point: Point, attributes?: SlopetriangleAttributes): Slopetriangle;
    /** Customized text elements for displaying measurements of JSXGraph elements, Examples are length of a segment, perimeter or area of a circle or polygon (including polygonal chain), slope of a line, value of an angle, and coordinates of a point. */
    Smartlabel(parent: Point | Line | Circle | Polygon | Angle, attributes?: SmartlabelAttributes): Smartlabel;
    /** Customized text elements for displaying measurements of JSXGraph elements, Examples are length of a segment, perimeter or area of a circle or polygon (including polygonal chain), slope of a line, value of an angle, and coordinates of a point. */
    Smartlabel(parent: Point | Line | Circle | Polygon | Angle, Txt: string | Function, attributes?: SmartlabelAttributes): Smartlabel;
    /**  sphere consists of all points with a given distance from a given point. The given point is called the center, and the given distance is called the radius. */
    Sphere3D(center: Point3D | pointAddr3D, radius: Point3D | number | pointAddr3D, attributes?: Sphere3DAttributes): Sphere3D;
    Spline(points: Point[] | number[][], attributes?: SplineAttributes): Curve;
    /** A step function is a function graph that is piecewise constant. In case the data points should be updated after creation time, they can be accessed by curve.xterm and curve.yterm.
   ```js
   let  curve = TSX.Stepfunction([0,1,2,3,4,5], [1,3,0,2,2,1]);
   ```
    */
    Stepfunction(X: number[], Y: number[], attributes?: StepfunctionAttributes): Stepfunction;
    /** A tangent to a point on a line, circle, or curve.  Usually the point is a Glider.
    *```
   *```
     */
    Tangent(point: Glider, attributes?: TangentAttributes): Tangent;
    /** A tangent to a point on a line, circle, or curve.  Usually the point is a Glider.
    *```
   *```
     */
    Tangent(point: Point, curve: Line | Circle | Curve, attributes?: TangentAttributes): Tangent;
    /** Construct the tangent line through a point to a conic or a circle. There will be either two, one or no such tangent, depending if the point is outside of the conic, on the conic, or inside of the conic. Similar to the intersection of a line with a circle, the specific tangent can be chosen with a third (optional) parameter number. */
    TangentTo(conic: Conic | Circle, point: Point | pointAddr, N?: number, attributes?: TangentToAttributes): TangentTo;
    Tapemeasure(P1: Point | pointAddr, P2: Point | pointAddr, attributes?: TapemeasureAttributes): Tapemeasure;
    /** This element is used to provide a constructor for trace curve (simple locus curve).  Given a glider (or slider) and a point controlled by the glider, this element draws the curve that the point will follow when the glider is manipulated.  Use the {trace:true} attribute on the point to mark breadcrumbs along this curve. */
    Tracecurve(glider: Glider, point: Point, attributes?: TracecurveAttributes): Tracecurve;
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
    TransformPoint(point: Point, transform: Transformation | Transformation[], attributes?: TransformPointAttributes): Point;
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
    TransformPoint3D(point: Point3D, transform: Transform3D | Transform3D[], attributes?: TransformPoint3DAttributes): Point3D;
    /** Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number.
    *```
   *```
     */
    Segment3D(P1: Point | pointAddr, P2: Point | pointAddr, attributes?: Segment3DAttributes): Segment3D;
    /** Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number.
    *```
   *```
     */
    Segment3D(P1: Point | pointAddr, P2: Point | pointAddr, length: number | Function, attributes?: Segment3DAttributes): Segment3D;
    /** Create a Transformation object with Translate properties. */
    Translate(dx: number | Function, dy: number | Function, attributes?: TranslateAttributes): Transformation;
    /** Create a Transformation object with Rotate properties. */
    Rotate(angle: number | Function, around: Point | pointAddr, attributes?: RotateAttributes): Transformation;
    /** Create a Transformation object with Scale properties.  Scaling is relative to [0,0]. */
    Scale(xMultiplier: number | Function, yMultiplier: number | Function, attributes?: ScaleAttributes): Transformation;
    /** Create a Transform3D object with Translate properties. */
    Translate3D(dx: number | Function, dy: number | Function, dz: number | Function, attributes?: Translate3DAttributes): Transform3D;
    /** Create a Transform3D object with Rotate properties around the normal vector N. */
    Rotate3D(angle: number | Function, n: number[], attributes?: Rotate3DAttributes): Transform3D;
    /** Create a Transform3D object with Rotate properties around the X axis. */
    RotateX3D(angle: number | Function, attributes?: RotateX3DAttributes): Transform3D;
    /** Create a Transform3D object with Rotate properties around the Y axis. */
    RotateY3D(angle: number | Function, attributes?: RotateY3DAttributes): Transform3D;
    /** Create a Transform3D object with Rotate properties around the Z axis. */
    RotateZ3D(angle: number | Function, attributes?: RotateZ3DAttributes): Transform3D;
    /** Create a Transformation object with Scale properties.  Scaling is relative to [0,0,0]. */
    Scale3D(xMultiplier: number | Function, yMultiplier: number | Function, zMultiplier: number | Function, attributes?: Scale3DAttributes): Transform3D;
}
interface MeshAttributes extends CurveAttributes {
    /** A Mesh3D is attached to a Plane3D. */
    visible?: Boolean | Function;
}
interface VisitAttributes {
    callback?: Function;
    effect?: "==" | "<>" | "<" | ">";
    repeat?: number;
}
export {};
