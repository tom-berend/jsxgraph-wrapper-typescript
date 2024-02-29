
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

//   Generated on February 29, 2024, 8:17 pm


export namespace TSX {

    interface GeometryElementAttributes {
        /** Color of the element. */
        color?: String
        /** Opacity of the element (between 0 and 1). */
        opacity?: Number
        /** The fill color of this geometry element. */
        fillColor?: String
        /** Opacity for fill color. */
        fillOpacity?: Number
        /** The stroke color of the given geometry element. */
        strokeColor?: String
        /** Opacity for element's stroke color. */
        strokeOpacity?: Number
        /** Width of the element's stroke. */
        strokeWidth?: Number
        /** If false the element won't be visible on the board, otherwise it is shown. */
        visible?: Boolean
        /** Determines the elements border-style. Possible values are: 0 for a solid line 1 for a dotted line 2 for a line with small dashes 3 for a line with medium dashes 4 for a line with big dashes 5 for a line with alternating medium and big dashes and large gaps 6 for a line with alternating medium and big dashes and small gaps 7 for a dotted line. Needs JXG.GeometryElement#linecap set to ”round” for round dots.The dash patterns are defined in JXG.AbstractRenderer#dashArray. */
        dash?: Number
        /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
        fixed?: Boolean
        /** If true a label will display the element's name. */
        withLabel?: Boolean
        /** Attributes for the line label. */
        label?: LabelAttributes
        /** If enabled:true the (stroke) element will get a customized shadow.Customize color and opacity: If the object's RGB stroke color is [r,g,b] and its opacity is op, and the shadow parameters color is given as [r', g', b'] and opacity as op' the shadow will receive the RGB color[blend*r + r', blend*g + g', blend*b + b']and its opacity will be equal to op * op'. Further, the parameters blur and offset can be adjusted.This attribute is only available with SVG, not with canvas. */
        shadow?: Object
        /** If true, KaTeX will be used to render the input string. */
        useKatex?: Boolean
        /** Set display name  */
        name?: String
    }

    interface GeometryElement3DAttributes {
        /** Set whether the element is visibledisplay name  */
        visible?: Boolean
    }

    interface BoardAttributes {
    }

    interface InfoboxAttributes {
        /** Horizontal offset in pixel of the infobox text from its anchor point. */
        distanceX?: Number
        /** Vertical offset in pixel of the infobox text from its anchor point. */
        distanceY?: Number
        /** Internationalization support for infobox text. */
        intl?: object
    }

    interface CAttributes {
    }

    interface CAAttributes {
    }

    interface ChartAttributes extends GeometryElementAttributes {
        /** Select type of chart. */
        chartStyle?: `bar` | `line`
        /**  */
        width?: Number
        /**  */
        labels?: any[]
        /**  */
        colorArray?: string[]
        /**  */
        label?: LabelAttributes
    }

    interface CircleAttributes extends GeometryElementAttributes {
        /** Attributes for center point. */
        center?: GeometryElementAttributes
        /** If true, moving the mouse over inner points triggers hasPoint. */
        hasInnerPoints?: Boolean
        /** Attributes for circle label. */
        label?: LabelAttributes
        /** Attributes for center point. */
        point?: Point
        /** Attributes for center point. */
        point2?: Point
    }

    interface ComplexAttributes {
    }

    interface CompositionAttributes {
    }

    interface CoordsAttributes {
    }

    interface CurveAttributes extends GeometryElementAttributes {
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
        /** Number of points used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is false. */
        numberPointsHigh?: Number
        /** Number of points used for plotting triggered by move events (i.e. lower quality plotting but fast) in case Curve#doAdvancedPlot is false. */
        numberPointsLow?: Number
        /** Select the version of the plot algorithm.Version 1 is very outdatedVersion 2 is the default version in JSXGraph v0.99.*, v1.0, and v1.1, v1.2.0Version 3 is an internal version that was never published ina stable version.Version 4 is available since JSXGraph v1.2.0Version 4 plots correctly logarithms if the function term is supplied as string (i.e. as JessieCode) */
        plotVersion?: Number
        /** Apply Ramer-Douglas-Peuker smoothing. */
        RDPsmoothing?: Boolean
        /** Recursion depth used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is true. */
        recursionDepthHigh?: Number
        /** Number of points used for plotting triggered by move events in case (i.e. lower quality plotting but fast) Curve#doAdvancedPlot is true. */
        recursionDepthLow?: Number
    }

    interface Curve3DAttributes extends CurveAttributes {
    }

    interface DumpAttributes {
    }

    interface ForeignObjectAttributes {
        /** List of attractor elements. If the distance of the foreignobject is less than attractorDistance the foreignobject is made to glider of this element. */
        attractors?: Element[]
    }

    interface GroupAttributes extends GeometryElementAttributes {
    }

    interface ImageAttributes extends GeometryElementAttributes {
        /** List of attractor elements. If the distance of the image is less than attractorDistance the image is made to glider of this element. */
        attractors?: Element[]
        /** Defines the CSS class used by the image. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. opacity. The default CSS class is defined in jsxgraph.css. */
        cssClass?: String
        /** Defines the CSS class used by the image when highlighted. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. highlightFillOpacity. The default CSS class is defined in jsxgraph.css. */
        highlightCssClass?: String
        /** Image rotation in degrees. */
        rotate?: Number
        /** Defines together with Image#snapSizeY the grid the image snaps on to. The image will only snap on user coordinates which are integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the board. */
        snapSizeX?: Number
        /** Defines together with Image#snapSizeX the grid the image snaps on to. The image will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the board. */
        snapSizeY?: Number
    }

    interface ImplicitcurveAttributes extends GeometryElementAttributes {
        /** Horizontal resolution: distance (in pixel) between vertical lines to search for components of the implicit curve. */
        resolution_outer?: Number
        /** Vertical resolution (in pixel) to search for components of the implicit curve. */
        resolution_inner?: Number
        /** Angle α0 between two successive tangents: determines the smoothness of the curve. */
        alpha_0?: Number
        /** Initial step width (in user units). */
        h_initial?: Number
        /** Maximum step width (in user units). */
        h_max?: Number
        /** Half of the box size (in user units) to search for existing line segments in the quadtree. */
        qdt_box?: Number
    }

    interface LegendAttributes {
    }

    interface LineAttributes extends GeometryElementAttributes {
        /** Configure the arrow head at the position of its first point or the corresponding intersection with the canvas borderIn case firstArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value }type=7 is the default for curves if firstArrow: true */
        firstArrow?: Boolean | Object
        /** Attributes for the line label. */
        label?: LabelAttributes
        /** Configure the arrow head at the position of its second point or the corresponding intersection with the canvas border.In case lastArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line.// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value is 6. }type=7 is the default for curves if lastArrow: true */
        lastArrow?: Boolean | Object
        /** This number (pixel value) controls where infinite lines end at the canvas border. If zero, the line ends exactly at the border, if negative there is a margin to the inside, if positive the line ends outside of the canvas (which is invisible). */
        margin?: Number
        /** Attributes for first defining point of the line. */
        point1?: Point
        /** Attributes for second defining point of the line. */
        point2?: Point
        /** Defines together with Point#snapSizeY the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the board. */
        snapSizeX?: Number
        /** Defines together with Point#snapSizeX the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the board. */
        snapSizeY?: Number
        /** If set to true, the point will snap to a grid defined by Point#snapSizeX and Point#snapSizeY. */
        snapToGrid?: Boolean
        /** If true, line stretches infinitely in direction of its first point. Otherwise it ends at point1. */
        straightFirst?: Boolean
        /** If true, line stretches infinitely in direction of its second point. Otherwise it ends at point2. */
        straightLast?: Boolean
        /** Attributes for ticks of the line. */
        ticks?: Object
        /** If set to true, Line#firstArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
        touchFirstPoint?: Boolean
        /** If set to true, Line#lastArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
        touchLastPoint?: Boolean
    }

    interface Line3DAttributes extends GeometryElement3DAttributes {
        /**  */
        strokeColor?: String
    }

    interface PointAttributes extends GeometryElementAttributes {
        /** There are different point styles which differ in appearance. Posssible values are Value InputOutput crossx circleo square, [][] plus+ minus- divide| diamond<> triangleup^, a, A triangledownv triangleleft< triangleright> */
        face?: String
        /** If true, the infobox is shown on mouse/pen over, if false not. If the value is 'inherit', the value of JXG.Board#showInfobox is taken. true | false | 'inherit' */
        showInfobox?: Boolean | String
        /** This attribute was used to determined the point layout. It was derived from GEONExT and was replaced by Point#face and Point#size. */
        style?: Number
    }

    interface Point3DAttributes extends GeometryElement3DAttributes {
    }

    interface PolygonAttributes extends GeometryElementAttributes {
        /** Attributes for the polygon border lines. */
        borders?: Line
        /** If true, moving the mouse over inner points triggers hasPoint. */
        hasInnerPoints?: Boolean
        /** By default, the strokewidths of the borders of a polygon are not changed during highlighting (only strokeColor and strokeOpacity are changed to highlightStrokeColor, and highlightStrokeOpacity). However, strokewidth is changed to highlightStrokewidth if an individual border gets the focus.With this attribute set to true, also the borders change strokeWidth if the polygon itself gets the focus. */
        highlightByStrokeWidth?: Boolean
        /** Attributes for the polygon label. */
        label?: LabelAttributes
        /** Attributes for the polygon vertices. */
        vertices?: Point
        /** Is the polygon bordered by lines? */
        withLines?: Boolean
    }

    interface TextAttributes extends GeometryElementAttributes {
        /** Anchor element Point, Text or Image of the text. */
        anchor?: Object
        /** The horizontal alignment of the text. */
        anchorX?: String
        /** The vertical alignment of the text. */
        anchorY?: String
        /** List of attractor elements. */
        attractors?: Element[]
        /** CSS class of the text in non-highlighted view. */
        cssClass?: String
        /** Default CSS properties of the HTML text element. */
        cssDefaultStyle?: String
        /** CSS properties of the HTML text element. */
        cssStyle?: String
        /** Used to round texts given by a number. */
        digits?: Number
        /** Determines the rendering method of the text. */
        display?: String
        /** Sensitive area for dragging the text. */
        dragArea?: String
        /** The font size in pixels. */
        fontSize?: Number
        /** CSS unit for the font size of a text element. */
        fontUnit?: String
        /** CSS class of the text in highlighted view. */
        highlightCssClass?: String
        /** Default CSS properties of the HTML text element in case of highlighting. */
        highlightCssDefaultStyle?: String
        /** CSS properties of the HTML text element in case of highlighting. */
        highlightCssStyle?: String
        /** Internationalization support for texts consisting of a number only. */
        intl?: object
        /** If enabled, the text will be handled as label. */
        isLabel?: Boolean
        /** Object or function returning an object that contains macros for KaTeX */
        katexMacros?: Object
        /** If set to true, the text is parsed and evaluated. */
        parse?: Boolean
        /** Text rotation in degrees. */
        rotate?: Number
        /** Defines together with Text#snapSizeY the grid the text snaps on to. */
        snapSizeX?: Number
        /** Defines together with Text#snapSizeX the grid the text snaps on to. */
        snapSizeY?: Number
        /** If true, the input will be given to ASCIIMathML before rendering. */
        useASCIIMathML?: Boolean
        /** If set to true and caja's sanitizeHTML function can be found it will be used to sanitize text output. */
        useCaja?: Boolean
        /** If true, KaTeX will be used to render the input string. */
        useKatex?: Boolean
        /** If true, MathJax will be used to render the input string. */
        useMathJax?: Boolean
    }

    interface TicksAttributes extends GeometryElementAttributes {
        /** Determine the position of the tick with value 0. 'left' means point1 of the line, 'right' means point2, and 'middle' is equivalent to the midpoint of the defining points. This attribute is ignored if the parent line is of type axis. */
        anchor?: String
        /** Format tick labels that were going to have scientific notation like 5.00e+6 to look like 5•10⁶. */
        beautifulScientificTickLabels?: Boolean
        /** If a label exceeds Ticks#maxLabelLength this determines the number of digits used to shorten the tick label. */
        digits?: Number
        /** Draw labels yes/no */
        drawLabels?: Boolean
        /** Draw the zero tick, that lies at line.point1? */
        drawZero?: Boolean
        /** Tick face for major ticks of finite length.By default (face: '|') this is a straight line. Possible other values are ''. These faces are used in JXG.Hatch for hatch marking parallel lines. */
        face?: String
        /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). The third parameter is a null, number or a string. In the latter two cases, this value is taken. Returns a string. */
        generateLabelText?: Function
        /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). */
        generateLabelValue?: Function
        /** If true, ignore the tick endings attribute for infinite (full height) ticks. This affects major and minor ticks. */
        ignoreInfiniteTickEndings?: Boolean
        /** Whether line boundaries should be included or not in the lower and upper bounds when creating ticks. In mathematical terms: if a segment considered as interval is open (includeBoundaries:false) or closed (includeBoundaries:true). In case of open interval, the interval is shortened by a small ε. */
        includeBoundaries?: Boolean
        /** Let JSXGraph determine the distance between ticks automatically. If true, the attribute ticksDistance is ignored. The distance between ticks is affected by the size of the board and the attribute minTicksDistance (in pixel). */
        insertTicks?: Boolean
        /** Internationalization support for ticks labels. */
        intl?: Object
        /** Attributes for the ticks labels */
        label?: LabelAttributes
        /** User defined labels for special ticks. Instead of the i-th tick's position, the i-th string stored in this array is shown. If the number of strings in this array is less than the number of special ticks, the tick's position is shown as a fallback. */
        labels?: String[]
        /** Total height of a major tick. If negative the full height of the board is taken. */
        majorHeight?: Number
        /** Decides in which direction major ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
        majorTickEndings?: [Number, Number]
        /** The maximum number of characters a tick label can use. */
        maxLabelLength?: Number
        /** Total height of a minor tick. If negative the full height of the board is taken. */
        minorHeight?: Number
        /** The number of minor ticks between two major ticks. */
        minorTicks?: Number
        /** Minimum distance in pixel of equidistant ticks in case insertTicks==true. */
        minTicksDistance?: Number
        /** If a label exceeds Ticks#maxLabelLength this determines the precision used to shorten the tick label. Deprecated! Replaced by the attribute digits. */
        precision?: Number
        /** Scale the ticks but not the tick labels. */
        scale?: Number
        /** A string that is appended to every tick, used to represent the scale factor given in Ticks#scale. */
        scaleSymbol?: String
        /** Decides in which direction minor ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
        tickEndings?: [Number, Number]
        /** The default distance (in user coordinates, notpixels) between two ticks. Please be aware that this value does not have to be used if Ticks#insertTicks is set to true. */
        ticksDistance?: Number
        /** By default, i.e. if ticksPerLabel==false, labels are generated for major ticks, only. If ticksPerLabel is set to a(n integer) number, this denotes the number of minor ticks between two labels. */
        ticksPerLabel?: String
        /** Set the ticks type. Possible values are 'linear' or 'polar'. */
        type?: String
        /** Use the unicode character 0x2212, i.e. the HTML entity &minus; as minus sign. That is −1 instead of -1. */
        useUnicodeMinus?: Boolean
    }

    interface TurtleAttributes extends GeometryElementAttributes {
        /** Attributes for the turtle arrow. */
        arrow?: Curve
    }

    interface SectorAttributes extends CurveAttributes {
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

    interface VectorfieldAttributes extends CurveAttributes {
        /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
        arrowhead?: Object
        /** Scaling factor of the vectors. This in contrast to slope fields, where this attribute sets the vector to the given length. */
        scale?: Object
    }

    interface AngleAttributes extends SectorAttributes {
        /** Attributes for sub-element arc. In general, the arc will run through the first point and thus will not have the same radius as the angle sector. */
        arc?: Arc
        /** Attributes of the dot point marking right angles. */
        dot?: Object
        /** Sensitivity (in degrees) to declare an angle as right angle. If the angle measure is inside this distance from a rigth angle, the orthoType of the angle is used for display. */
        orthoSensitivity?: Number
        /** Display type of the angle field in case of a right angle. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
        orthoType?: String
        /**  */
        pointsquare?: Object
        /** Radius of the sector, displaying the angle. The radius can be given as number (in user coordinates) or as string 'auto'. In the latter case, the angle is set to an value between 20 and 50 px. */
        radius?: Number
        /**  */
        radiuspoint?: Object
        /** Display type of the angle field. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
        type?: String
    }

    interface ArcAttributes extends CurveAttributes {
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
    }

    interface ArrowAttributes extends LineAttributes {
    }

    interface ParallelAttributes extends LineAttributes {
        /** Attributes of helper point of normal. */
        point?: Point
    }

    interface ArrowparallelAttributes extends ParallelAttributes {
    }

    interface AxisAttributes extends LineAttributes {
        /** Attributes for the axis label. */
        label?: LabelAttributes
        /** Attributes for first point the axis. */
        point1?: Point
        /** Attributes for second point the axis. */
        point2?: Point
        /** Attributes for ticks of the axis. */
        ticks?: Ticks
    }

    interface BisectorAttributes extends LineAttributes {
        /** Attributes for the helper point of the bisector. */
        point?: Point
    }

    interface BisectorlinesAttributes extends CompositionAttributes {
        /** Attributes for first line. */
        line1?: Line
        /** Attributes for second line. */
        line2?: Line
    }

    interface ButtonAttributes extends TextAttributes {
        /** Control the attribute ”disabled” of the HTML button. */
        disabled?: Boolean
    }

    interface CardinalsplineAttributes extends CurveAttributes {
        /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
        createPoints?: Boolean
        /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
        isArrayOfCoordinates?: Boolean
        /** Attributes for the points generated by Cardinalspline in cases createPoints is set to true */
        points?: Object
    }

    interface CheckboxAttributes extends TextAttributes {
        /** Control the attribute ”checked” of the HTML checkbox. */
        checked?: Boolean
        /** Control the attribute ”disabled” of the HTML checkbox. */
        disabled?: Boolean
    }

    interface CircumcenterAttributes extends PointAttributes {
    }

    interface CircumcircleAttributes extends CircleAttributes {
        /** Attributes for center point. */
        center?: Point
    }

    interface CircumcircleArcAttributes extends ArcAttributes {
        /** Attributes for center point. */
        center?: Point
    }

    interface CircumcircleSectorAttributes extends SectorAttributes {
    }

    interface CombAttributes extends CurveAttributes {
        /** Angle - given in radians - under which comb elements are positioned. */
        angle?: Number
        /** Frequency of comb elements. */
        frequency?: Number
        /** Attributes for first defining point of the comb. */
        point1?: Point
        /** Attributes for second defining point of the comb. */
        point2?: Point
        /** Should the comb go right to left instead of left to right. */
        reverse?: Boolean
        /** Width of the comb. */
        width?: Number
    }

    interface ConicAttributes extends CurveAttributes {
        /** Attributes for center point. */
        center?: Point
        /** Attributes for foci points. */
        foci?: Point
        /** Attributes for parabola line in case the line is given by two points or coordinate pairs. */
        line?: Line
        /** Attributes for five points defining the conic, if some of them are given as coordinates. */
        point?: Point
    }

    interface CurveDifferenceAttributes extends CurveAttributes {
    }

    interface CurveIntersectionAttributes extends CurveAttributes {
    }

    interface CurveUnionAttributes extends CurveAttributes {
    }

    interface DerivativeAttributes extends CurveAttributes {
    }

    interface EllipseAttributes extends ConicAttributes {
    }

    interface ParametricSurface3DAttributes extends Curve3DAttributes {
        /** Number of intervals the mesh is divided into in direction of parameter u. */
        stepsU?: Number
        /** Number of intervals the mesh is divided into in direction of parameter v. */
        stepsV?: Number
    }

    interface FunctiongraphAttributes extends CurveAttributes {
    }

    interface Functiongraph3DAttributes extends Curve3DAttributes {
    }

    interface GliderAttributes extends PointAttributes {
    }

    interface GridAttributes extends CurveAttributes {
        /**  */
        snapSizeX?: Boolean
        /**  */
        snapSizeY?: Boolean
        /**  */
        snapToGrid?: Boolean
    }

    interface HatchAttributes extends TicksAttributes {
    }

    interface HyperbolaAttributes extends ConicAttributes {
    }

    interface IncenterAttributes extends PointAttributes {
    }

    interface IncircleAttributes extends CircleAttributes {
        /** Attributes of circle center. */
        center?: Point
    }

    interface InequalityAttributes extends CurveAttributes {
        /** By default an inequality is less (or equal) than. Set inverse to true will consider the inequality greater (or equal) than. */
        inverse?: Boolean
    }

    interface InputAttributes extends TextAttributes {
        /** Control the attribute ”disabled” of the HTML input field. */
        disabled?: Boolean
        /** Control the attribute ”maxlength” of the HTML input field. */
        maxlength?: Number
    }

    interface IntegralAttributes extends CurveAttributes {
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

    interface IntersectionAttributes extends GeometryElementAttributes {
        /**  */
        alwaysIntersect?: Boolean
    }

    interface LabelAttributes extends TextAttributes {
    }

    interface LocusAttributes extends CurveAttributes {
    }

    interface MajorArcAttributes extends CurveAttributes {
    }

    interface MajorSectorAttributes extends CurveAttributes {
    }

    interface MetapostsplineAttributes extends CurveAttributes {
        /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
        createPoints?: Boolean
        /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
        isArrayOfCoordinates?: Boolean
        /** Attributes for the points generated by Metapost spline in cases createPoints is set to true */
        points?: Object
    }

    interface MidpointAttributes extends PointAttributes {
    }

    interface MinorArcAttributes extends CurveAttributes {
    }

    interface MinorSectorAttributes extends CurveAttributes {
    }

    interface mirrorelementAttributes extends GeometryElementAttributes {
        /** Attributes of circle center, i.e. the center of the circle, if a circle is the mirror element and the transformation type is 'Euclidean' */
        center?: Point
        /** Attributes of mirror point, i.e. the point along which the element is mirrored. */
        point?: Point
        /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the mirror element of a circle is again a circle, otherwise it is a conic section. */
        type?: String
    }

    interface MirrorpointAttributes extends PointAttributes {
    }

    interface NonReflexAngleAttributes extends AngleAttributes {
    }

    interface NormalAttributes extends LineAttributes {
        /** Attributes of helper point of normal. */
        point?: Point
    }

    interface OrthogonalprojectionAttributes extends PointAttributes {
    }

    interface OtherIntersectionAttributes extends PointAttributes {
    }

    interface ParabolaAttributes extends ConicAttributes {
    }

    interface ParallelpointAttributes extends PointAttributes {
    }

    interface SegmentAttributes extends LineAttributes {
    }

    interface ParallelogramAttributes extends PolygonAttributes {
        /** Attributes of helper point of normal. */
        parallelpoint?: DisplayPoint
    }

    interface PerpendicularAttributes extends SegmentAttributes {
    }

    interface PerpendicularPointAttributes extends PointAttributes {
    }

    interface PerpendicularSegmentAttributes extends SegmentAttributes {
    }

    interface PolarLineAttributes extends LineAttributes {
    }

    interface PolePointAttributes extends PointAttributes {
    }

    interface PolygonalChainAttributes extends PolygonAttributes {
    }

    interface RadicalAxisAttributes extends LineAttributes {
    }

    interface ReflectionAttributes extends GeometryElementAttributes {
        /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the reflected element of a circle is again a circle, otherwise it is a conic section. */
        type?: String
    }

    interface ReflexAngleAttributes extends AngleAttributes {
    }

    interface RegularPolygonAttributes extends PolygonAttributes {
        /** Attributes for the polygon border lines. */
        borders?: Line
        /** If true, moving the mouse over inner points triggers hasPoint. */
        hasInnerPoints?: Boolean
        /** Attributes for the polygon vertices. */
        vertices?: Point
        /** Is the polygon bordered by lines? */
        withLines?: Boolean
    }

    interface RiemannsumAttributes extends CurveAttributes {
    }

    interface SemicircleAttributes extends ArcAttributes {
        /** Attributes for center point of the semicircle. */
        center?: Point
    }

    interface SliderAttributes extends GliderAttributes {
        /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
        stepWidth?: Number
        /** Attributes for the base line of the slider. */
        baseline?: Line
        /** The number of digits of the slider value displayed in the optional text. */
        digits?: Number
        /** Attributes for the highlighting line of the slider. */
        highline?: Line
        /** Internationalization support for slider labels. */
        intl?: object
        /** Attributes for the slider label. */
        label?: LabelAttributes
        /** If true, 'up' events on the baseline will trigger slider moves. */
        moveOnUp?: Boolean
        /** Attributes for first (left) helper point defining the slider position. */
        point1?: Point
        /** Attributes for second (right) helper point defining the slider position. */
        point2?: Point
        /** If not null, this is appended to the value and to unitLabel in the slider label. Possible types: string, number or function. */
        postLabel?: String
        /** The precision of the slider value displayed in the optional text. Replaced by the attribute ”digits”. */
        precision?: Number
        /** Size of slider point. */
        size?: Number
        /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
        snapValueDistance?: Number
        /** List of values to snap to. If the glider is within snapValueDistance (in user coordinate units) of one of these points, then the glider snaps to that point. */
        snapValues?: [Number, Number]
        /** The slider only returns integer multiples of this value, e.g. for discrete values set this property to 1. For continuous results set this to -1. */
        snapWidth?: Number
        /** If not null, this replaces the part ”name = ” in the slider label. Possible types: string, number or function. */
        suffixLabel?: String
        /** Attributes for the ticks of the base line of the slider. */
        ticks?: Ticks
        /** If not null, this is appended to the value in the slider label. Possible types: string, number or function. */
        unitLabel?: String
        /** Show slider label. */
        withLabel?: Boolean
        /** Show slider ticks. */
        withTicks?: Boolean
    }

    interface SlopefieldAttributes extends VectorfieldAttributes {
        /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
        arrowhead?: Object
        /** Set length of the vectors in user coordinates. This in contrast to vector fields, where this attribute just scales the vector. */
        scale?: Object
    }

    interface SlopetriangleAttributes extends LineAttributes {
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

    interface SmartlabelAttributes extends TextAttributes {
        /** CSS classes for the smart label. Available classes are:'smart-label-solid''smart-label-outline''smart-label-pure'By default, an additional class is given specific for the element type. Available classes are 'smart-label-angle', 'smart-label-circle', 'smart-label-line', 'smart-label-point', 'smart-label-polygon'. */
        cssClass?: String
        /** Display of point coordinates either as row vector or column vector. Available values are 'row' or 'column'. */
        dir?: String
        /** CSS classes for the smart label when highlighted. */
        highlightCssClass?: String
        /** Type of measurement. Available values are: 'deg', 'rad' for angles'area', 'perimeter', 'radius' for circles'length', 'slope' for lines'area', 'perimeter' for polygonsDependent on this value, i.e. the type of measurement, the label is positioned differently on the object. */
        measure?: String
        /** Prefix text for the smartlabel. Comes before the measurement value. */
        prefix?: String
        /** Suffix text for the smartlabel. Comes after unit. */
        suffix?: String
        /** Measurement unit appended to the output text. For areas, the unit is squared automatically. Comes directly after the measurement value. */
        unit?: String
    }

    interface SplineAttributes extends CurveAttributes {
    }

    interface StepfunctionAttributes extends CurveAttributes {
    }

    interface TangentAttributes extends LineAttributes {
    }

    interface TapemeasureAttributes extends SegmentAttributes {
        /** The precision of the tape measure value displayed in the optional text. */
        digits?: Number
        /** Attributes for the tape measure label. */
        label?: LabelAttributes
        /** Attributes for first helper point defining the tape measure position. */
        point1?: Point
        /** Attributes for second helper point defining the tape measure position. */
        point2?: Point
        /** The precision of the tape measure value displayed in the optional text. Replaced by the attribute digits */
        precision?: Number
        /** Text rotation in degrees. */
        rotate?: Number
        /** Attributes for the ticks of the tape measure. */
        ticks?: Ticks
        /** Show tape measure label. */
        withLabel?: Boolean
        /** Show tape measure ticks. */
        withTicks?: Boolean
    }

    interface TracecurveAttributes extends CurveAttributes {
        /** The number of evaluated data points. */
        numberPoints?: Number
    }

    interface TransformAttributes extends GeometryElementAttributes {
    }

    interface View3DAttributes extends GeometryElement3DAttributes {
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

    interface MatrixAttributes extends MathAttributes {
    }

    interface NumericsAttributes extends MathAttributes {
    }

    type NumberFunction = Number | Function

    /** A 'point' has a position in space.  The only characteristic that distinguishes one point from another is its position. */
    type point = NumberFunction[]

    type Pointpoint = Point | point  // so I can have an array of them


    /** A Vector has both magnitude and direction, but no fixed position in space. */
    type Vec2 = [number, number]

    type line = [Point | point, Point | point]


    // to define 'matAny' (eg: 2x3 array) we need three steps
    type arrayNumber = Number[]
    type arrayNumber2 = arrayNumber | Number
    type matAny = arrayNumber2[]

    // there is no constructor for labels, but we need the attributes anyhow for Tick, etc.
    interface LabelAttributes extends TextAttributes {
        /** Automatic position of label text.*/
        autoPosition?: Boolean
        /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. */
        autoPositionMaxDistance?: Number
        /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element.*/
        autoPositionMinDistance?: Number
        /** Label offset from label anchor. */
        offset?: [Number, Number]
        /** Possible string values for the position of a label for label anchor points.  First and Last are only for lines. */
        position?: 'first' | 'last' | 'lft' | 'rt' | 'top' | 'bot' | 'ulft' | 'urt' | 'llft' | 'lrt'
    }

    interface DisplayPoint extends ParallelpointAttributes {
        size?: Number
        face?: String
    }

    // utility function for determining whether an object is a JSX object (or part of this wrapper)
    function isJSXAttribute(maybe: any): Boolean {
        return (typeof (maybe) == 'object' && !Array.isArray(maybe) && !('elValue' in maybe) && !('elType' in maybe))
    }


    /**
    *  Constant: user coordinates relative to the coordinates system defined by the bounding box.
    */
    const COORDS_BY_USER = 0x0001
    /**
     *  Constant: screen coordinates in pixel relative to the upper left corner of the div element.
     */
    const COORDS_BY_SCREEN = 0x0002


    interface MathAttributes {
    }

    interface InitBoardAttributes {
        /** Time (in msec) between two animation steps. */
        animationDelay?: Number
        /** Show default axis. */
        axis?: Boolean
        /** Bounding box of the visible area in user coordinates. [left,top,right,bottom] */
        boundingbox?: [Number, Number, Number, Number]
        /** Enable browser scrolling on touch interfaces if the user double taps into an empty region of the board. */
        browserPan?: Boolean
        //    /** Attributes for the default axes in case of the attribute axis:true in JXG.JSXGraph#initBoard. */
        //    defaultAxes?: Object
        //    /** Description string for the board. */
        //    description?: String
        //    /** Supply the document object. */
        //    document?: String
        //    /** Control the possibilities for dragging objects. */
        //    drag?: Object
        /** Attribute(s) to control the fullscreen icon. */
        fullscreen?: Object
        /** Show grid? */
        grid?: Boolean
        //    /** If set true and hasPoint() is true for both an element and it's label, the element (and not the label) is taken as drag element. */
        //    ignoreLabels?: Boolean
        //    /** Support for internationalization of number formatting. */
        //    intl?: Object
        /** If set to true, the ratio between horizontal and vertical unit sizes stays constant - independent of size changes of the hosting HTML div element. */
        keepAspectRatio?: Boolean
        //    /** Control using the keyboard to change the construction. */
        //    keyboard?: Object
        //    /** If enabled, user activities are logged in array "board.userLog". */
        //    logging?: Boolean
        //    /** Maximal bounding box of the visible area in user coordinates. */
        //    maxBoundingBox?: [Number,Number,Number,Number]
        /** Maximum frame rate of the board, i.e. */
        maxFrameRate?: Number
        //    /** Maximum number of digits in automatic label generation. */
        //    maxNameLength?: Number
        //    /** Change redraw strategy in SVG rendering engine. */
        //    moveTarget?: Object
        //    /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
        //    offsetX?: Number
        //    /** A number that will be added to the absolute position of the board used in mouse coordinate calculations in JXG.Board#getCoordsTopLeftCorner. */
        //    offsetY?: Number
        //    /** Control the possibilities for panning interaction (i.e. */
        //    pan?: Object
        /** Allow user interaction by registering mouse, pointer, keyboard or touch events. */
        registerEvents?: Object
        /** Listen to fullscreen event. */
        registerFullscreenEvent?: Boolean
        /** Listen to resize events, i.e. */
        registerResizeEvent?: Boolean
        /** Control if JSXGraph reacts to resizing of the JSXGraph container element by the user / browser. */
        resize?: Boolean
        //    /** Attributes to control the screenshot function. */
        //    screenshot?: Object
        //    /** Control the possibilities for a selection rectangle. */
        //    selection?: Object
        //    /** Show a button which allows to clear all traces of a board. */
        //    showClearTraces?: Boolean
        /** Show copyright string in canvas. */
        showCopyright?: Boolean
        /** Show a button in the navigation bar to start fullscreen mode. */
        showFullscreen?: Boolean
        //    /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to 'inherit'. */
        //    showInfobox?: Boolean
        /** Display of navigation arrows and zoom buttons in the navigation bar. */
        showNavigation?: Boolean
        /** Show a button in the navigation bar to force reload of a construction. */
        showReload?: Boolean
        /** Show a button in the navigation bar to enable screenshots. */
        showScreenshot?: Boolean
        /** Display of zoom buttons in the navigation bar. */
        showZoom?: Boolean
        /** set a visual theme for the board */
        theme?: String
        //    /** If true the first element of the set JXG.board.objects having hasPoint==true is taken as drag element. */
        //    takeFirst?: Number
        //    /** If true, when read from a file or string - the size of the div can be changed by the construction text. */
        //    takeSizeFromFile?: Number
        //    /** Title string for the board. */
        //    title?: String
        //    /** Control the possibilities for zoom interaction. */
        //    zoom?: Object
        //    /** Zoom factor in horizontal direction. */
        //    zoomX?: Number
        //    /** Zoom factor in vertical direction. */
        //    zoomY?: Number
    }


    export class Math {
        static board: JSXBoard

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


    /** Initialize a new board. */

    export class JSXGraph {

        initBoard(html: string, attributes?: InitBoardAttributes): JSXBoard {
            const newBoard = new JSXBoard()
            newBoard.board = (window as any).JXG.JSXGraph.initBoard(html, attributes) as unknown as JSXBoard
            Math.board = newBoard.board  // make a copy for Math and its decendents
            return newBoard
        }

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
        public get version(): String {
            return (window as any).JXG.version as string
        }


        /** Delete a board and all its contents. */
        freeBoard(board: JSXBoard): void {
            (window as any).JXG.JSXGraph.freeBoard(board)
        }



        // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
        static dereference(params: any | any[]): any[] {
            let ret: any
            if (Array.isArray(params)) {
                ret = params.map((x) => (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x)
            } else {
                ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params
            }
            return ret
        }
    }
    interface ConicIface {
        z_ignore: Object,
        /** Line defined by solution to a*z + b*y +c*y== 0 */
        line(a: Number | Function, b: Number | Function, c: Number | Function, attributes?: LineAttributes): Line
        /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
        fivePoints(A: Point | point, B: Point | point, C: Point | point, D: Point | point, E: Point | point, attributes?: ConicAttributes): Conic
        /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
        sixNumbers(A: Number, B: Number, C: Number, D: Number, E: Number, F: Number, attributes?: ConicAttributes): Conic
        /** An Ellipse from 3 points */
        threePoints(focalPoint1: Point | point, focalPoint2: Point | point, outerPoint: Point | point, attributes?: EllipseAttributes): Ellipse
        /** Three Points, plus start and end. */
        ellipseArc(focalPoint1: Point | point, focalPoint2: Point | point, outerPoint: Point | point, startAngle: Number | Function, endAngle: Number | Function, attributes?: ConicAttributes): Conic
    }

    interface TransformIface {
        z_ignore: Object,
        /** Move a distance from a point */
        translate(x: Number | Function, y: Number | Function, attributes?: TransformAttributes): Transform
        /** Increase distance from a point by a factor */
        scale(x: number | Function, y: number | Function, attributes?: TransformAttributes): Transform
        /** Rotate by angle around a point */
        rotate(angle: Number | Function, point?: Point | point, attributes?: TransformAttributes): Transform
        /** Reflect around a line */
        reflect(x: Number | Function, y: Number | Function, attributes?: TransformAttributes): Transform
        /** Move proportionally to distance */
        shear(x: Number | Function, y: Number | Function, attributes?: TransformAttributes): Transform
        /** Transform using a MAT3 */
        generic(a: Number, b: Number, c: Number, d: Number, e: Number, f: Number, g: Number, h: Number, i: Number, attributes?: TransformAttributes): Transform
        /** A new Point from a Point and Transform */
        point(p: Point | point, t: Transform | Transform[], attributes?: PointAttributes): Point
        /** A new Circle from a Circle and Transform */
        circle(c: Circle, t: Transform | Transform[], attributes?: CircleAttributes): Circle
        /** A new Curve from a Curve and Transform */
        curve(c: Curve, t: Transform | Transform[], attributes?: CurveAttributes): Curve
    }

    interface MatrixMathIface {
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(c1: matAny, c2: matAny): matAny,
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        frustum(left: Number, right: Number, top: Number, bottom: Number, near: Number, far: Number): matAny,
        /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
        identity(m: number, n: number): matAny,
        /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
        innerProduct(v1: number[], v2: number[]): Number,
        /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
        inverse(mat: matAny): matAny,
        /** Computes the product of the two matrices mat1*mat2. */
        matMatMult(mat1: matAny, mat2: matAny): matAny,
        /** Initializes a matrix as an array of rows with the given value. */
        matrix(nRows: number, mCols: number, init: number): matAny,
        /** Multiplies a vector vec to a matrix mat: mat * vec. */
        matVecMult(mat: matAny, vec: number[]): Number[],
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov: Number, ratio: Number, near: Number, far: Number): matAny,
        /** Transposes a matrix given as a two dimensional array. */
        transpose(mat: matAny): matAny,
        /** Initializes a vector of size n wih coefficients set to the given value. */
        vector(n: number, init: number): Number[],
    }

    interface NumericsMathIface {
        CardinalSpline(pointArray: Point[], tau: Function): Function[],
    }



    export class JSXBoard {
        board: JSXBoard | null
        private printLineNumber: number = 0   // added a print() function, this tracks the line#
        private defaultAttrs: Object = {}   // hold defaults from setDefaultAttributes()

        public get defaultAxes(): GeometryElement {
            return (this.board as any).defaultAxes as GeometryElement
        }

        public get canvasWidth(): number {
            return (this.board as any).canvasWidth as number
        }
        public get canvasHeight(): number {
            return (this.board as any).canvasHeight as number
        }

        /** allows setting default attributes by class or across the board */
        public setDefaultAttributes(attrs: Object) {
            this.defaultAttrs = attrs
        }

        // add in any default attributes
        private defaultAttributes(attrs: Object) {
            for (const property in this.defaultAttrs) {
                if (!attrs.hasOwnProperty(property)) {   // if the user has not specified a value for this property
                    (attrs as any)[property] = (this.defaultAttrs as any)[property]
                }
            }
            return attrs
        }




        /** get a 2D canvas context (warning: cannot mix SVG and canvas) */
        public getCanvasCTX(): CanvasRenderingContext2D {
            const boardID = (this.board as any).container
            const div = (document as any).getElementById(boardID);
            (window as any).JXG.CanvasRenderer(div, [this.canvasWidth, this.canvasHeight]);
            return (window as any).JXG.context as CanvasRenderingContext2D
        }




        setBoundingBox(left: Number, top: Number, right: Number, bottom: Number): JSXBoard {
            return (this.board! as any).setBoundingBox([left, top, right, bottom])
        }

        getBoundingBox(): [number, number] {
            return (this.board! as any).getBoundingBox()
        }

        addGrid(): JSXBoard {
            return (this.board! as any).addGrid()
        }
        removeGrids(): Board {
            return (this.board! as any).removeGrids() // Note: remove GRIDS, not GRID
        }
        addAxis(): Board {
            (this as any).axis([0, 0], [1, 0]);
            (this as any).axis([0, 0], [0, 1]);
            return (this as any as Board);
        }

        setAttribute(attrs: object): Board {
            return (this.board! as any).setAttribute(attrs)
        }


        // removeObject(object:Board,testForChildren:Boolean=false)


        /** Legacy method to create elements. */
        create(elType: string, params: any[] = [], attributes: Object = {}): GeometryElement {
            let newObject = (this.board as any).create(elType, params, attributes)
            let newElement = new GeometryElement(newObject as GeometryElement);
            return newElement
        }

        /** force board update */
        update(): void {
            (this.board as any).update()
        }


        on(event: string, handler: (e: Event) => void, context?: unknown): void {
            // JSXGraph doesn't share keyboard events, but I want them
            if (event == 'keypress' || event == 'keydown' || event == 'keyup') {
                (window as any).document.addEventListener(event, handler)
            } else {
                (this.board as any).on(event, handler, context)
            }
        }

        // I cannot figure out how to get the keybard to respond.  mouse works fine
        // addKeyboardEventHandlers():void{
        //     (this.board as any).addKeyboardEventHandlers()
        // }

        public print(...args: any[]) {
            let bbox = (this.board as any).getBoundingBox()   // get every time, in case setBoundingBox()
            let left = bbox[0] // align x to left border
            let lineHeight = (bbox[1] - bbox[3]) / 20  //
            let top = bbox[1] - (2 * lineHeight) - (this.printLineNumber * lineHeight)  // align y to top border

            let helper = (stringText: string, item: any): string => {
                if (typeof item == null) {
                    stringText += 'null, ';
                } else if (typeof item == 'string') {
                    stringText += '\'' + item + '\'';
                } else if (typeof item == 'number') {
                    stringText += item.toFixed(1);
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

            (this.board as any).create('text', this.dereference([left, top, stringText]), { fontSize: 10, strokeColor: 'blue', fontUnits: 'EM' })
            this.printLineNumber += 1
        }



        suspendUpdate(): void {
            (this.board as any).suspendUpdate()
        }

        unsuspendUpdate(): void {
            (this.board as any).unsuspendUpdate()
        }

        // utility to dereference parameter- if they use TSXGraph objects then  use the JSXGraph objects instead
        private dereference(params: any | any[]): any[] {
            let ret: any
            if (Array.isArray(params)) {
                ret = params.map((x) => (typeof x == 'object' && x.hasOwnProperty('elValue')) ? x.elValue : x)
            } else {
                ret = (typeof params == 'object' && params.hasOwnProperty('elValue')) ? params.elValue : params
            }
            return ret
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
        conic: ConicIface
        /** This element is used to provide projective transformations. */
        transform: TransformIface
        MatrixMath: MatrixMathIface
        NumericsMath: NumericsMathIface

        constructor() {
            this.board = null


            this.conic = {
                /** @protected */
                z_ignore: {},
                /** Line defined by solution to a*z + b*y +c*y== 0 */
                line(a: Number | Function, b: Number | Function, c: Number | Function, attributes: LineAttributes = {}): Line {
                    let newObject = (this.z_ignore as any).board.create('line', (this.z_ignore as any).dereference([a, b, c]), (this.z_ignore as any).defaultAttributes(attributes))
                    return new Line(newObject as Line)
                },
                /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
                fivePoints(A: Point | point, B: Point | point, C: Point | point, D: Point | point, E: Point | point, attributes: ConicAttributes = {}): Conic {
                    let newObject = ((this.z_ignore as any).board as any).create('Conic', (this.z_ignore as any).dereference([A, B, C, D, E,]), (this.z_ignore as any).defaultAttributes(attributes))
                    return new Conic(newObject as Conic)
                },
                /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
                sixNumbers(A: Number, B: Number, C: Number, D: Number, E: Number, F: Number, attributes: ConicAttributes = {}): Conic {
                    let newObject = ((this.z_ignore as any).board as any).create('Conic', (this.z_ignore as any).dereference([A, B, C, D, E, F,]), (this.z_ignore as any).defaultAttributes(attributes))
                    return new Conic(newObject as Conic)
                },
                /** An Ellipse from 3 points */
                threePoints(focalPoint1: Point | point, focalPoint2: Point | point, outerPoint: Point | point, attributes: EllipseAttributes = {}): Ellipse {
                    let newObject = (this.z_ignore as any).board.create('ellipse', (this.z_ignore as any).dereference([focalPoint1, focalPoint2, outerPoint]), (this.z_ignore as any).defaultAttributes(attributes))
                    return new Ellipse(newObject as Ellipse)
                },
                /** Three Points, plus start and end. */
                ellipseArc(focalPoint1: Point | point, focalPoint2: Point | point, outerPoint: Point | point, startAngle: Number | Function, endAngle: Number | Function, attributes: ConicAttributes = {}): Conic {
                    let newObject = (this.z_ignore as any).board.create('ellipse', (this.z_ignore as any).dereference([focalPoint1, focalPoint2, outerPoint, startAngle, endAngle]), (this.z_ignore as any).defaultAttributes(attributes))
                    return new Conic(newObject as Conic)
                },
            }
            this.conic.z_ignore = this
            this.transform = {
                /** @protected */
                z_ignore: {},
                /** Move a distance from a point */
                translate(x: Number | Function, y: Number | Function, attributes: TransformAttributes = {}): Transform {
                    let newObject = ((this.z_ignore as any).board as any).create('Transform', (this.z_ignore as any).dereference([x, y,]), (this.z_ignore as any).defaultAttributes({ type: 'translate' }))
                    return new Transform(newObject as Transform)
                },
                /** Increase distance from a point by a factor */
                scale(x: number | Function, y: number | Function, attributes: TransformAttributes = {}): Transform {
                    let newObject = ((this.z_ignore as any).board as any).create('Transform', (this.z_ignore as any).dereference([x, y,]), (this.z_ignore as any).defaultAttributes({ type: 'scale' }))
                    return new Transform(newObject as Transform)
                },
                /** Rotate by angle around a point */
                rotate(angle: Number | Function, point: Point | point = [0, 0], attributes: TransformAttributes = {}): Transform {
                    let newObject = ((this.z_ignore as any).board as any).create('Transform', (this.z_ignore as any).dereference([angle, point,]), (this.z_ignore as any).defaultAttributes({ type: 'rotate' }))
                    return new Transform(newObject as Transform)
                },
                /** Reflect around a line */
                reflect(x: Number | Function, y: Number | Function, attributes: TransformAttributes = {}): Transform {
                    let newObject = ((this.z_ignore as any).board as any).create('Transform', (this.z_ignore as any).dereference([x, y,]), (this.z_ignore as any).defaultAttributes({ type: 'reflect' }))
                    return new Transform(newObject as Transform)
                },
                /** Move proportionally to distance */
                shear(x: Number | Function, y: Number | Function, attributes: TransformAttributes = {}): Transform {
                    let newObject = ((this.z_ignore as any).board as any).create('Transform', (this.z_ignore as any).dereference([x, y,]), (this.z_ignore as any).defaultAttributes({ type: 'shear' }))
                    return new Transform(newObject as Transform)
                },
                /** Transform using a MAT3 */
                generic(a: Number, b: Number, c: Number, d: Number, e: Number, f: Number, g: Number, h: Number, i: Number, attributes: TransformAttributes = {}): Transform {
                    let newObject = ((this.z_ignore as any).board as any).create('Transform', (this.z_ignore as any).dereference([a, b, c, d, e, f, g, h, i,]), (this.z_ignore as any).defaultAttributes({ type: 'generic' }))
                    return new Transform(newObject as Transform)
                },
                /** A new Point from a Point and Transform */
                point(p: Point | point, t: Transform | Transform[], attributes: PointAttributes = {}): Point {
                    let newObject = ((this.z_ignore as any).board as any).create('Point', [JSXGraph.dereference(p), JSXGraph.dereference(t),], attributes)
                    return new Point(newObject as Point)
                },
                /** A new Circle from a Circle and Transform */
                circle(c: Circle, t: Transform | Transform[], attributes: CircleAttributes = {}): Circle {
                    let newObject = ((this.z_ignore as any).board as any).create('Circle', JSXGraph.dereference([c, t]), attributes)
                    return new Circle(newObject as Circle)
                },
                /** A new Curve from a Curve and Transform */
                curve(c: Curve, t: Transform | Transform[], attributes: CurveAttributes = {}): Curve {
                    let newObject = ((this.z_ignore as any).board as any).create('Curve', JSXGraph.dereference([c, t]), attributes)
                    return new Curve(newObject as Curve)
                },
            }
            this.transform.z_ignore = this
            this.MatrixMath = {
                /** Calculates the cross product of two vectors both of length three. */
                crossProduct(c1: matAny, c2: matAny): matAny { return (window as any).JXG.Math.crossProduct(c1, c2) as matAny },
                /** Generates a 4x4 matrix for 3D to 2D projections. */
                frustum(left: Number, right: Number, top: Number, bottom: Number, near: Number, far: Number): matAny { return (window as any).JXG.Math.frustum(left, right, top, bottom, near, far) as matAny },
                /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
                identity(m: number, n: number): matAny { return (window as any).JXG.Math.identity(m, n) as matAny },
                /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
                innerProduct(v1: number[], v2: number[]): Number { return (window as any).JXG.Math.innerProduct(v1, v2) as Number },
                /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
                inverse(mat: matAny): matAny { return (window as any).JXG.Math.inverse(mat) as matAny },
                /** Computes the product of the two matrices mat1*mat2. */
                matMatMult(mat1: matAny, mat2: matAny): matAny { return (window as any).JXG.Math.matMatMult(mat1, mat2) as matAny },
                /** Initializes a matrix as an array of rows with the given value. */
                matrix(nRows: number, mCols: number, init: number): matAny { return (window as any).JXG.Math.matrix(nRows, mCols, init) as matAny },
                /** Multiplies a vector vec to a matrix mat: mat * vec. */
                matVecMult(mat: matAny, vec: number[]): Number[] { return (window as any).JXG.Math.matVecMult(mat, vec) as Number[] },
                /** Generates a 4x4 matrix for 3D to 2D projections. */
                projection(fov: Number, ratio: Number, near: Number, far: Number): matAny { return (window as any).JXG.Math.projection(fov, ratio, near, far) as matAny },
                /** Transposes a matrix given as a two dimensional array. */
                transpose(mat: matAny): matAny { return (window as any).JXG.Math.transpose(mat) as matAny },
                /** Initializes a vector of size n wih coefficients set to the given value. */
                vector(n: number, init: number): Number[] { return (window as any).JXG.Math.vector(n, init) as Number[] },
            }

            this.NumericsMath = {
                CardinalSpline(pointArray: Point[], tau: Function): Function[] { return (window as any).JXG.Math.Numerics.CardinalSpline(JSXGraph.dereference(pointArray), tau) as Function[] },
            }

        }

        /** create a chart  Constructor for a chart.*/
        chart(f: Number[], attributes: ChartAttributes = {}): Chart {
            let newObject = (this.board as any).create('Chart', this.dereference([f,]), this.defaultAttributes(attributes))
            return new Chart(newObject as Chart)
        }


        /**   This element is used to provide a constructor for a circle.*/
        circle(centerPoint: Point | point, remotePoint: Point | point | Line | line | Number | Function | Circle, attributes: CircleAttributes = {}): Circle {
            let newObject: any  // special case for circle with immediate segment eg:  circle(point,[[1,2],[3,4]]  )
            if (Array.isArray(remotePoint) && Array.isArray(remotePoint[0]) && Array.isArray(remotePoint[1])) {
                newObject = (this.board as any).create(`circle`, this.dereference([centerPoint, remotePoint[0], remotePoint[1]]), this.defaultAttributes(attributes))
            } else {
                newObject = (this.board as any).create(`circle`, this.dereference([centerPoint, remotePoint]), this.defaultAttributes(attributes))
            }
            return new Circle(newObject as Circle)
        }


        /**   This element is used to provide a constructor for curve, which is just a wrapper for element Curve. A curve is a mapping from R to R^2. t mapsto (x(t),y(t)). The graph is drawn for t in the interval [a,b]. The following types of curves can be plotted: parametric curves: t mapsto (x(t),y(t)), where x() and y() are univariate functions. polar curves: curves commonly written with polar equations like spirals and cardioids. data plots: plot line segments through a given list of coordinates.*/
        curve(xArray: Number[] | Function, yArray: Number[] | Function, left: NumberFunction = -5, right: NumberFunction = 5, attributes: CurveAttributes = {}): Curve {
            let newObject = (this.board as any).create('Curve', this.dereference([xArray, yArray, left, right,]), this.defaultAttributes(attributes))
            return new Curve(newObject as Curve)
        }


        /** Array of Points  This element combines a given set of JXG.Point elements to a group. The elements of the group and dependent elements can be translated, rotated and scaled by dragging one of the group elements.*/
        group(pointArray: Point[], attributes: GroupAttributes = {}): Group {
            let newObject = (this.board as any).create('Group', this.dereference([pointArray,].flat()), this.defaultAttributes(attributes))
            return new Group(newObject as Group)
        }


        /**   Displays an image.*/
        image(url: String, lowerLeft: point, widthHeight: [Number, Number], attributes: ImageAttributes = {}): Image {
            let newObject = (this.board as any).create('Image', this.dereference([url, lowerLeft, widthHeight,]), this.defaultAttributes(attributes))
            return new Image(newObject as Image)
        }

        /** An implicit curve is a plane curve defined by an implicit equation relating two coordinate variables, commonly x and y. For example, the unit circle is defined by the implicit equation x2 + y2 = 1. In general, every implicit curve is defined by an equation of the form f(x, y) = 0 for some function f of two variables. */
        implicitcurve(f: Function | String, attributes?: ImplicitcurveAttributes): Implicitcurve
        implicitcurve(f: Function | String, dfx: Function | String, dfy: Function | String, attributes?: ImplicitcurveAttributes): Implicitcurve

        // implementation of signature,  hidden from user
        implicitcurve(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Implicitcurve {
            let newObject: Implicitcurve = {} as Implicitcurve // just so it is initialized
            if (arguments.length == 1) {

                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = (this.board as any).create('implicitcurve', this.dereference([]), this.defaultAttributes(a)) // as unknown as Implicitcurve
                } else {
                    newObject = (this.board as any).create('implicitcurve', this.dereference([a,]), this.defaultAttributes({})) // as Implicitcurve
                }
            }
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('implicitcurve', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Implicitcurve
                } else {
                    newObject = (this.board as any).create('implicitcurve', this.dereference([a, b,]), this.defaultAttributes({})) // as Implicitcurve
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('implicitcurve', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Implicitcurve
                } else {
                    newObject = (this.board as any).create('implicitcurve', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Implicitcurve
                }
            }
            return new Implicitcurve(newObject as Implicitcurve)
        }

        /**   This element is used to provide a constructor for a general line. A general line is given by two points. By setting additional properties a line can be used as an arrow and/or axis.  Look at .conic.line() for a line defined by the equation 'az +bx +cy = 0'*/
        line(p1: Point | point, p2: Point | point, attributes: LineAttributes = {}): Line {
            let newObject = (this.board as any).create('Line', this.dereference([p1, p2,]), this.defaultAttributes(attributes))
            return new Line(newObject as Line)
        }


        /**   Create a point. If any parent elements
                           are functions or the attribute 'fixed' is true
                           then point will be constrained.

        JSX.point([3,2], {strokeColor:'blue',strokeWidth:5, strokeOpacity:.5})

        JSX.point([3,3]), {fixed:true, showInfobox:true}

        JSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1

        also create points with Intersection, Midpoint, Transform.Point, Circumcenter, Glider, and others.
                           .*/
        point(position: [Number, Number] | NumberFunction[], attributes: PointAttributes = {}): Point {
            let newObject = (this.board as any).create('Point', position, this.defaultAttributes(attributes))
            return new Point(newObject as Point)
        }


        /** Array of Points  A polygon is an area enclosed by a set of border lines which are determined by a list of points or a list of coordinate arrays or a function returning a list of coordinate arrays. Each two consecutive points of the list define a line.*/
        polygon(pointArray: Pointpoint[], attributes: PolygonAttributes = {}): Polygon {
            let newObject = (this.board as any).create('Polygon', this.dereference([pointArray,].flat()), this.defaultAttributes(attributes))
            return new Polygon(newObject as Polygon)
        }


        /**   Construct and handle texts. The coordinates can either be abslute (i.e. respective to the coordinate system of the board) or be relative to the coordinates of an element given in Text#anchor. HTML, MathJaX, KaTeX and GEONExT syntax can be handled. There are two ways to display texts: using the text element of the renderer (canvas or svg). In most cases this is the suitable approach if speed matters. However, advanced rendering like MathJax, KaTeX or HTML/CSS are not possible. using HTML <div>. This is the most flexible approach. The drawback is that HTML can only be display ”above” the geometry elements. If HTML should be displayed in an inbetween layer, conder to use an element of type ForeignObject (available in svg renderer, only).*/
        text(x: Number | Function, y: Number | Function, string: String | Function, attributes: TextAttributes = {}): Text {
            let newObject = (this.board as any).create('Text', this.dereference([x, y, string,]), this.defaultAttributes(attributes))
            return new Text(newObject as Text)
        }


        /**   A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc.*/
        sector(P1: Point | point, P2: Point | point, P3: Point | point, attributes: SectorAttributes = {}): Sector {
            let newObject = (this.board as any).create('Sector', this.dereference([P1, P2, P3,]), this.defaultAttributes(attributes))
            return new Sector(newObject as Sector)
        }


        /**   Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2.*/
        vectorfield(fxfy: Function[], horizontalMesh: Number[] = [-6, 25, 6], verticalMesh: Number[] = [-6, 25, 6], attributes: VectorfieldAttributes = {}): Vectorfield {
            let newObject = (this.board as any).create('Vectorfield', this.dereference([fxfy, horizontalMesh, verticalMesh,]), this.defaultAttributes(attributes))
            return new Vectorfield(newObject as Vectorfield)
        }

        /** The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
                    As opposed to the sector, an angle has two angle points and no radius point.

        type=='sector': Sector is displayed.

        type=='square': a parallelogram is displayed.

        type=='auto':  a square is displayed if the angle is near orthogonal.

        If no name is provided the angle label is automatically set to a lower greek letter. */
        angle(from: Point | point, around: Point | point, to: Point | point, attributes?: AngleAttributes): Angle
        angle(line1: Line | line, line2: Line | line, direction1: [Number, Number], direction2: [Number, Number], attributes?: AngleAttributes): Angle
        angle(line1: Line | line, line2: Line | line, dirPlusMinus1: Number, dirPlusMinus2: Number, attributes?: AngleAttributes): Angle

        // implementation of signature,  hidden from user
        angle(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Angle {
            let newObject: Angle = {} as Angle // just so it is initialized
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('angle', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Angle
                } else {
                    newObject = (this.board as any).create('angle', this.dereference([a, b,]), this.defaultAttributes({})) // as Angle
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('angle', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Angle
                } else {
                    newObject = (this.board as any).create('angle', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Angle
                }
            }
            if (arguments.length == 4) {

                // if((typeof (arguments[3])) == 'object' && !Array.isArray(arguments[3]) && !('elValue' in arguments[3]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(d)) {
                    newObject = (this.board as any).create('angle', this.dereference([a, b, c,]), this.defaultAttributes(d)) // as unknown as Angle
                } else {
                    newObject = (this.board as any).create('angle', this.dereference([a, b, c, d,]), this.defaultAttributes({})) // as Angle
                }
            }
            if (arguments.length == 5) {

                // if((typeof (arguments[4])) == 'object' && !Array.isArray(arguments[4]) && !('elValue' in arguments[4]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(e)) {
                    newObject = (this.board as any).create('angle', this.dereference([a, b, c, d,]), this.defaultAttributes(e)) // as unknown as Angle
                } else {
                    newObject = (this.board as any).create('angle', this.dereference([a, b, c, d, e,]), this.defaultAttributes({})) // as Angle
                }
            }
            return new Angle(newObject as Angle)
        }

        /** Create an Arc with three points  An arc is a segment of the circumference of a circle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc.*/
        arc(p1: Point | point, p2: Point | point, p3: Point | point, attributes: ArcAttributes = {}): Arc {
            let newObject = (this.board as any).create('Arc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Arc(newObject as Arc)
        }


        /** Arrow defined by two points (like a Segment) with arrow at P2  This element is used to provide a constructor for arrow, which is just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to false and Line#lastArrow set to true.*/
        arrow(p1: Point | point, p2: Point | point, attributes: ArrowAttributes = {}): Arrow {
            let newObject = (this.board as any).create('Arrow', this.dereference([p1, p2,]), this.defaultAttributes(attributes))
            return new Arrow(newObject as Arrow)
        }

        /** A line parallel to a given line, through a point. */
        parallel(line: Line | [Point, Point], point: Point | point, attributes?: ParallelAttributes): Parallel
        parallel(lineP1: Point | point, lineP2: Point | point, Point: Point | point, attributes?: ParallelAttributes): Parallel

        // implementation of signature,  hidden from user
        parallel(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Parallel {
            let newObject: Parallel = {} as Parallel // just so it is initialized
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('parallel', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Parallel
                } else {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b,]), this.defaultAttributes({})) // as Parallel
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Parallel
                } else {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Parallel
                }
            }
            if (arguments.length == 4) {

                // if((typeof (arguments[3])) == 'object' && !Array.isArray(arguments[3]) && !('elValue' in arguments[3]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(d)) {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b, c,]), this.defaultAttributes(d)) // as unknown as Parallel
                } else {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b, c, d,]), this.defaultAttributes({})) // as Parallel
                }
            }
            if (arguments.length == 5) {

                // if((typeof (arguments[4])) == 'object' && !Array.isArray(arguments[4]) && !('elValue' in arguments[4]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(e)) {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b, c, d,]), this.defaultAttributes(e)) // as unknown as Parallel
                } else {
                    newObject = (this.board as any).create('parallel', this.dereference([a, b, c, d, e,]), this.defaultAttributes({})) // as Parallel
                }
            }
            return new Parallel(newObject as Parallel)
        }

        /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2.  An arrow parallel is a segment with an arrow attached which is parallel through a given segment, given by its defining two points, through a given point.*/
        arrowparallel(p1: Point | point, p2: Point | point, p3: Point | point, attributes: ArrowparallelAttributes = {}): Arrowparallel {
            let newObject = (this.board as any).create('Arrowparallel', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Arrowparallel(newObject as Arrowparallel)
        }


        /** Create an Axis with two points (like a Line)  This element is used to provide a constructor for an axis. It's strictly spoken just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to true. Additionally Line#lastArrow is set to true and default Ticks will be created.*/
        axis(p1: Point | point, p2: Point | point, attributes: AxisAttributes = {}): Axis {
            let newObject = (this.board as any).create('Axis', this.dereference([p1, p2,]), this.defaultAttributes(attributes))
            return new Axis(newObject as Axis)
        }


        /** Bisect an Angle defined with three points  A bisector is a line which divides an angle into two equal angles. It is given by three points A, B, and C and divides the angle ABC into two equal sized parts.*/
        bisector(p1: Point, p2: Point, p3: Point, attributes: BisectorAttributes = {}): Bisector {
            let newObject = (this.board as any).create('Bisector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Bisector(newObject as Bisector)
        }


        /** Bisect a Line defined with two points  Bisector lines are similar to Bisector but take two lines as parent elements. The resulting element is a composition of two lines.*/
        bisectorlines(l1: Line, l2: Line, attributes: BisectorlinesAttributes = {}): Bisectorlines {
            let newObject = (this.board as any).create('Bisectorlines', this.dereference([l1, l2,]), this.defaultAttributes(attributes))
            return new Bisectorlines(newObject as Bisectorlines)
        }


        /** create a button  This element is used to provide a constructor for special texts containing a form button element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML button element can be accessed through the sub-object 'rendNodeButton', e.g. to add event listeners.*/
        button(x: Number | Function, y: Number | Function, label: String, handler: Function, attributes: ButtonAttributes = {}): Button {
            let newObject = (this.board as any).create('button', [x, y, label], this.defaultAttributes(attributes))
            return new Button(newObject as Button)
        }


        /**   This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n.*/
        cardinalspline(data: Point[] | number[][], funct: Function, splineType: `uniform` | `centripetal`, attributes: CardinalsplineAttributes = {}): Curve {
            let newObject = (this.board as any).create('Cardinalspline', this.dereference([data, funct, splineType,]), this.defaultAttributes(attributes))
            return new Curve(newObject as Curve)
        }


        /**   This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners.*/
        checkbox(x: Number | Function, y: Number | Function, label: String | Function, attributes: CheckboxAttributes = {}): Checkbox {
            let newObject = (this.board as any).create('Checkbox', this.dereference([x, y, label,]), this.defaultAttributes(attributes))
            return new Checkbox(newObject as Checkbox)
        }


        /** Creates a Point at the center of a circle defined by 3 points  Constructs the midpoint of a Circumcircle. Like the circumcircle the circumcenter is constructed by providing three points.*/
        circumcenter(p1: Point | point, p2: Point | point, p3: Point | point, attributes: CircumcenterAttributes = {}): Circumcenter {
            let newObject = (this.board as any).create('Circumcenter', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Circumcenter(newObject as Circumcenter)
        }


        /** Draw a circle defined by 3 points  A circumcircle is given by three points which are all lying on the circle.*/
        circumcircle(p1: Point | point, p2: Point | point, p3: Point | point, attributes: CircumcircleAttributes = {}): Circumcircle {
            let newObject = (this.board as any).create('Circumcircle', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Circumcircle(newObject as Circumcircle)
        }


        /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points  A circumcircle arc is an Arc defined by three points. All three points lie on the arc.*/
        circumcircleArc(p1: Point | point, p2: Point | point, p3: Point | point, attributes: CircumcircleArcAttributes = {}): CircumcircleArc {
            let newObject = (this.board as any).create('CircumcircleArc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new CircumcircleArc(newObject as CircumcircleArc)
        }


        /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points  A circumcircle sector is different from a Sector mostly in the way the parent elements are interpreted. At first, the circum centre is determined from the three given points. Then the sector is drawn from p1 through p2 to p3.*/
        circumcircleSector(p1: Point | point, p2: Point | point, p3: Point | point, attributes: CircumcircleSectorAttributes = {}): CircumcircleSector {
            let newObject = (this.board as any).create('CircumcircleSector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new CircumcircleSector(newObject as CircumcircleSector)
        }


        /**   A comb to display domains of inequalities.*/
        comb(p1: Point | point, p2: Point | point, attributes: CombAttributes = {}): Comb {
            let newObject = (this.board as any).create('Comb', this.dereference([p1, p2,]), this.defaultAttributes(attributes))
            return new Comb(newObject as Comb)
        }


        /**   Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve.*/
        curveDifference(curve1: GeometryElement, curve2: GeometryElement, attributes: CurveDifferenceAttributes = {}): CurveDifference {
            let newObject = (this.board as any).create('CurveDifference', this.dereference([curve1, curve2,]), this.defaultAttributes(attributes))
            return new CurveDifference(newObject as CurveDifference)
        }


        /**   Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve.*/
        curveIntersection(curve1: GeometryElement, curve2: GeometryElement, attributes: CurveIntersectionAttributes = {}): CurveIntersection {
            let newObject = (this.board as any).create('CurveIntersection', this.dereference([curve1, curve2,]), this.defaultAttributes(attributes))
            return new CurveIntersection(newObject as CurveIntersection)
        }


        /**   Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve.*/
        curveUnion(curve1: GeometryElement, curve2: GeometryElement, attributes: CurveUnionAttributes = {}): CurveUnion {
            let newObject = (this.board as any).create('CurveUnion', this.dereference([curve1, curve2,]), this.defaultAttributes(attributes))
            return new CurveUnion(newObject as CurveUnion)
        }

        derivative(curve: Curve, attributes: DerivativeAttributes = {}): Derivative {
            let newObject = (this.board as any).create('Derivative', this.dereference([curve,]), this.defaultAttributes(attributes))
            return new Derivative(newObject as Derivative)
        }


        /** Two Points and Radius  This element is used to provide a constructor for an ellipse. An ellipse is given by two points (the foci) and a third point on the ellipse or the length of the major axis.*/
        ellipse(p1: Point | point, pointO: Point | point, radius: Number | Function, attributes: EllipseAttributes = {}): Ellipse {
            let newObject = (this.board as any).create('Ellipse', this.dereference([p1, pointO, radius,]), this.defaultAttributes(attributes))
            return new Ellipse(newObject as Ellipse)
        }


        /**   This element is used to provide a constructor for functiongraph, which is just a wrapper for element Curve with JXG.Curve#X() set to x. The graph is drawn for x in the interval [a,b].*/
        functiongraph(funct: Function, leftBorder?: Number, rightBorder?: Number, attributes: FunctiongraphAttributes = {}): Functiongraph {
            let newObject = (this.board as any).create('Functiongraph', this.dereference([funct, leftBorder, rightBorder,]), this.defaultAttributes(attributes))
            return new Functiongraph(newObject as Functiongraph)
        }

        /** A GeometryElement like Line, Circle, or Curve, and optionally a starting point defined by X,Y */
        glider(hostElement: GeometryElement, attributes?: GliderAttributes): Glider
        glider(x: Number, y: Number, hostElement: GeometryElement, attributes?: GliderAttributes): Glider

        // implementation of signature,  hidden from user
        glider(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Glider {
            let newObject: Glider = {} as Glider // just so it is initialized
            if (arguments.length == 1) {

                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = (this.board as any).create('glider', this.dereference([]), this.defaultAttributes(a)) // as unknown as Glider
                } else {
                    newObject = (this.board as any).create('glider', this.dereference([a,]), this.defaultAttributes({})) // as Glider
                }
            }
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('glider', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Glider
                } else {
                    newObject = (this.board as any).create('glider', this.dereference([a, b,]), this.defaultAttributes({})) // as Glider
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('glider', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Glider
                } else {
                    newObject = (this.board as any).create('glider', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Glider
                }
            }
            return new Glider(newObject as Glider)
        }

        /**   Creates a grid to support the user with element placement.*/
        grid(showGrid: Boolean = true, attributes: GridAttributes = {}): Grid {
            let newObject = (this.board as any).create('Grid', this.dereference([showGrid,]), this.defaultAttributes(attributes))
            return new Grid(newObject as Grid)
        }


        /**   Hatches can be used to mark congruent lines or curves.*/
        hatch(line: Line | line, numberHatches: Number, attributes: HatchAttributes = {}): Hatch {
            let newObject = (this.board as any).create('Hatch', this.dereference([line, numberHatches,]), this.defaultAttributes(attributes))
            return new Hatch(newObject as Hatch)
        }


        /**   This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis.*/
        hyperbola(point1: Point | point, point2: Point | point, point3: Point | point | Number, start: Number = -3.14, end: Number = 3.14, attributes: HyperbolaAttributes = {}): Hyperbola {
            let newObject = (this.board as any).create('Hyperbola', this.dereference([point1, point2, point3, start, end,]), this.defaultAttributes(attributes))
            return new Hyperbola(newObject as Hyperbola)
        }


        /**   Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html*/
        incenter(p1: Point | point, p2: Point | point, p3: Point | point, attributes: IncenterAttributes = {}): Incenter {
            let newObject = (this.board as any).create('Incenter', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Incenter(newObject as Incenter)
        }


        /**   An incircle is given by three points.*/
        incircle(p1: Point | point, p2: Point | point, p3: Point | point, attributes: IncircleAttributes = {}): Incircle {
            let newObject = (this.board as any).create('Incircle', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Incircle(newObject as Incircle)
        }


        /**   Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y*/
        inequality(boundaryLine: Line | line | Curve, attributes: InequalityAttributes = {}): Inequality {
            let newObject = (this.board as any).create('Inequality', this.dereference([boundaryLine,]), this.defaultAttributes(attributes))
            return new Inequality(newObject as Inequality)
        }


        /**   This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners.*/
        input(x: Number | Function, y: Number | Function, prompt: String, initial: String, attributes: InputAttributes = {}): Input {
            let newObject = (this.board as any).create('Input', this.dereference([x, y, prompt, initial,]), this.defaultAttributes(attributes))
            return new Input(newObject as Input)
        }


        /**   This element is used to visualize the integral of a given curve over a given interval.*/
        integral(range: Number[], curve: Curve, attributes: IntegralAttributes = {}): Integral {
            let newObject = (this.board as any).create('Integral', this.dereference([range, curve,]), this.defaultAttributes(attributes))
            return new Integral(newObject as Integral)
        }


        /**   An intersection point is a point which lives on two JSXGraph elements, i.e. it is one point of the set consisting of the intersection points of the two elements. The following element types can be (mutually) intersected: line, circle, curve, polygon, polygonal chain.*/
        intersection(element1: Line | Circle, element2: Line | Circle, attributes: IntersectionAttributes = {}): Point {
            let newObject = (this.board as any).create('intersection', this.dereference([element1, element2, 0]), this.defaultAttributes(attributes))
            return new Point(newObject as Point)
        }


        /**   A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc.*/
        majorArc(p1: Point | point, p2: Point | point, p3: Point | point, attributes: MajorArcAttributes = {}): MajorArc {
            let newObject = (this.board as any).create('MajorArc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new MajorArc(newObject as MajorArc)
        }


        /**   A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        majorSector(p1: Point | point, p2: Point | point, p3: Point | point, attributes: MajorSectorAttributes = {}): MajorSector {
            let newObject = (this.board as any).create('MajorSector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new MajorSector(newObject as MajorSector)
        }

        /** A point in the middle of two given points or a line segment. */
        midpoint(p1: Point, p2: Point, attributes?: MidpointAttributes): Midpoint
        midpoint(line: Line, attributes?: MidpointAttributes): Midpoint

        // implementation of signature,  hidden from user
        midpoint(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Midpoint {
            let newObject: Midpoint = {} as Midpoint // just so it is initialized
            if (arguments.length == 1) {

                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = (this.board as any).create('midpoint', this.dereference([]), this.defaultAttributes(a)) // as unknown as Midpoint
                } else {
                    newObject = (this.board as any).create('midpoint', this.dereference([a,]), this.defaultAttributes({})) // as Midpoint
                }
            }
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('midpoint', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Midpoint
                } else {
                    newObject = (this.board as any).create('midpoint', this.dereference([a, b,]), this.defaultAttributes({})) // as Midpoint
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('midpoint', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Midpoint
                } else {
                    newObject = (this.board as any).create('midpoint', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Midpoint
                }
            }
            return new Midpoint(newObject as Midpoint)
        }

        /**   A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc.*/
        minorArc(p1: Point | point, p2: Point | point, p3: Point | point, attributes: MinorArcAttributes = {}): MinorArc {
            let newObject = (this.board as any).create('MinorArc', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new MinorArc(newObject as MinorArc)
        }


        /**   A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        minorSector(p1: Point | point, p2: Point | point, p3: Point | point, attributes: MinorSectorAttributes = {}): MinorSector {
            let newObject = (this.board as any).create('MinorSector', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new MinorSector(newObject as MinorSector)
        }


        /**   A mirror element of a point, line, circle, curve, polygon will be constructed.*/
        mirrorelement(element: Point | Line | Circle | Curve | Polygon, acrossPoint: Point | point, attributes: mirrorelementAttributes = {}): mirrorelement {
            let newObject = (this.board as any).create('mirrorelement', this.dereference([element, acrossPoint,]), this.defaultAttributes(attributes))
            return new mirrorelement(newObject as mirrorelement)
        }


        /**   A mirror point will be constructed.*/
        mirrorpoint(p1: Point, p2: Point, attributes: MirrorpointAttributes = {}): Mirrorpoint {
            let newObject = (this.board as any).create('Mirrorpoint', this.dereference([p1, p2,]), this.defaultAttributes(attributes))
            return new Mirrorpoint(newObject as Mirrorpoint)
        }


        /**   A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        nonReflexAngle(point1: Point, point2: Point, point3: Point, attributes: NonReflexAngleAttributes = {}): NonReflexAngle {
            let newObject = (this.board as any).create('NonReflexAngle', this.dereference([point1, point2, point3,]), this.defaultAttributes(attributes))
            return new NonReflexAngle(newObject as NonReflexAngle)
        }

        /** A line through a given point on an element of type line, circle, curve, or turtle and orthogonal (at right angle) to that object. */
        normal(object: Line | Circle | Curve | Turtle, point: Point, attributes?: NormalAttributes): Normal
        normal(glider: Glider, attributes?: NormalAttributes): Normal

        // implementation of signature,  hidden from user
        normal(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Normal {
            let newObject: Normal = {} as Normal // just so it is initialized
            if (arguments.length == 1) {

                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = (this.board as any).create('normal', this.dereference([]), this.defaultAttributes(a)) // as unknown as Normal
                } else {
                    newObject = (this.board as any).create('normal', this.dereference([a,]), this.defaultAttributes({})) // as Normal
                }
            }
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('normal', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Normal
                } else {
                    newObject = (this.board as any).create('normal', this.dereference([a, b,]), this.defaultAttributes({})) // as Normal
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('normal', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Normal
                } else {
                    newObject = (this.board as any).create('normal', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Normal
                }
            }
            return new Normal(newObject as Normal)
        }

        /**   This is used to construct a point that is the orthogonal projection of a point to a line.*/
        orthogonalprojection(point: Point | point, line: Line | line, attributes: OrthogonalprojectionAttributes = {}): Orthogonalprojection {
            let newObject = (this.board as any).create('Orthogonalprojection', this.dereference([point, line,]), this.defaultAttributes(attributes))
            return new Orthogonalprojection(newObject as Orthogonalprojection)
        }


        /**   This element is used to provide a constructor for the ”other” intersection point.*/
        otherIntersection(element1: Line | Circle, element2: Line | Circle, firstIntersection: Point, attributes: OtherIntersectionAttributes = {}): Point {
            let newObject = (this.board as any).create('otherintersection', this.dereference([element1, element2, firstIntersection]), attributes)
            return new Point(newObject as Point)
        }


        /**   This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix).*/
        parabola(focalPoint: Point | point, line: Line | line, attributes: ParabolaAttributes = {}): Parabola {
            let newObject = (this.board as any).create('Parabola', this.dereference([focalPoint, line,]), this.defaultAttributes(attributes))
            return new Parabola(newObject as Parabola)
        }


        /**   This element is used to provide a constructor for a segment. It's strictly spoken just a wrapper for element Line with Line#straightFirst and Line#straightLast properties set to false. If there is a third variable then the segment has a fixed length (which may be a function, too).*/
        segment(P1: Point | point, P2: Point | point, attributes: SegmentAttributes = {}): Segment {
            let newObject = (this.board as any).create('Segment', this.dereference([P1, P2,]), this.defaultAttributes(attributes))
            return new Segment(newObject as Segment)
        }


        /**   */
        parallelogram(p1: Point | point, p2: Point | point, p3: Point | point, attributes: ParallelogramAttributes = {}): Parallelogram {
            let newObject = (this.board as any).create('Parallelogram', this.dereference([p1, p2, p3,]), this.defaultAttributes(attributes))
            return new Parallelogram(newObject as Parallelogram)
        }


        /**   This element is used to provide a constructor for a perpendicular.*/
        perpendicular(line: Line | line, point: Point | point, attributes: PerpendicularAttributes = {}): Perpendicular {
            let newObject = (this.board as any).create('Perpendicular', this.dereference([line, point,]), this.defaultAttributes(attributes))
            return new Perpendicular(newObject as Perpendicular)
        }


        /**   This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle.*/
        polarLine(conic: Conic | Circle, point: Point, attributes: PolarLineAttributes = {}): PolarLine {
            let newObject = (this.board as any).create('PolarLine', this.dereference([conic, point,]), this.defaultAttributes(attributes))
            return new PolarLine(newObject as PolarLine)
        }


        /**   This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle.*/
        polePoint(conic: Conic | Circle, line: Line, attributes: PolePointAttributes = {}): PolePoint {
            let newObject = (this.board as any).create('PolePoint', this.dereference([conic, line,]), this.defaultAttributes(attributes))
            return new PolePoint(newObject as PolePoint)
        }


        /**   A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector.*/
        reflexAngle(point1: Point, point2: Point, point3: Point, attributes: ReflexAngleAttributes = {}): ReflexAngle {
            let newObject = (this.board as any).create('ReflexAngle', this.dereference([point1, point2, point3,]), this.defaultAttributes(attributes))
            return new ReflexAngle(newObject as ReflexAngle)
        }


        /**   Constructs a regular polygon. It needs two points which define the base line and the number of vertices.*/
        regularPolygon(P1: Point | point, P2: Point | point, nVertices: Number, attributes: RegularPolygonAttributes = {}): RegularPolygon {
            let newObject = (this.board as any).create('RegularPolygon', this.dereference([P1, P2, nVertices,]), this.defaultAttributes(attributes))
            return new RegularPolygon(newObject as RegularPolygon)
        }


        /**   A slider can be used to choose values from a given range of numbers.*/
        slider(StartPoint: Point | point, EndPoint: Point | point, minimum_initial_maximum: [number, number, number], attributes: SliderAttributes = {}): Slider {
            let newObject = (this.board as any).create('Slider', this.dereference([StartPoint, EndPoint, minimum_initial_maximum,]), this.defaultAttributes(attributes))
            return new Slider(newObject as Slider)
        }

        /** A slope triangle is an imaginary triangle that helps you find the slope of a line or a line segment (use the method '.Value()' ). The hypotenuse of the triangle (the diagonal) is the line you are interested in finding the slope of. The two 'legs' of the triangle are the 'rise' and 'run' used in the slope formula. */
        slopetriangle(tangent: Tangent, attributes?: SlopetriangleAttributes): Slopetriangle
        slopetriangle(line: Line, point: Point, attributes?: SlopetriangleAttributes): Slopetriangle

        // implementation of signature,  hidden from user
        slopetriangle(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any): Slopetriangle {
            let newObject: Slopetriangle = {} as Slopetriangle // just so it is initialized
            if (arguments.length == 1) {

                // if((typeof (arguments[0])) == 'object' && !Array.isArray(arguments[0]) && !('elValue' in arguments[0]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(a)) {
                    newObject = (this.board as any).create('slopetriangle', this.dereference([]), this.defaultAttributes(a)) // as unknown as Slopetriangle
                } else {
                    newObject = (this.board as any).create('slopetriangle', this.dereference([a,]), this.defaultAttributes({})) // as Slopetriangle
                }
            }
            if (arguments.length == 2) {

                // if((typeof (arguments[1])) == 'object' && !Array.isArray(arguments[1]) && !('elValue' in arguments[1]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(b)) {
                    newObject = (this.board as any).create('slopetriangle', this.dereference([a,]), this.defaultAttributes(b)) // as unknown as Slopetriangle
                } else {
                    newObject = (this.board as any).create('slopetriangle', this.dereference([a, b,]), this.defaultAttributes({})) // as Slopetriangle
                }
            }
            if (arguments.length == 3) {

                // if((typeof (arguments[2])) == 'object' && !Array.isArray(arguments[2]) && !('elValue' in arguments[2]) && !('elType' in arguments[2])) {   // arguments counts from zero
                if (isJSXAttribute(c)) {
                    newObject = (this.board as any).create('slopetriangle', this.dereference([a, b,]), this.defaultAttributes(c)) // as unknown as Slopetriangle
                } else {
                    newObject = (this.board as any).create('slopetriangle', this.dereference([a, b, c,]), this.defaultAttributes({})) // as Slopetriangle
                }
            }
            return new Slopetriangle(newObject as Slopetriangle)
        }

        /**   With the element tangent the slope of a line, circle, or curve in a certain point can be visualized. A tangent is always constructed by a glider on a line, circle, or curve and describes the tangent in the glider point on that line, circle, or curve.*/
        tangent(glider: Glider, attributes: TangentAttributes = {}): Tangent {
            let newObject = (this.board as any).create('Tangent', this.dereference([glider,]), this.defaultAttributes(attributes))
            return new Tangent(newObject as Tangent)
        }


        /**   A tape measure can be used to measure distances between points.*/
        tapemeasure(P1: Point | point, P2: Point | point, attributes: TapemeasureAttributes = {}): Tapemeasure {
            let newObject = (this.board as any).create('Tapemeasure', this.dereference([P1, P2,]), this.defaultAttributes(attributes))
            return new Tapemeasure(newObject as Tapemeasure)
        }


        /**   This element is used to provide a constructor for trace curve (simple locus curve), which is realized as a special curve.*/
        tracecurve(glider: Glider, point: Point, attributes: TracecurveAttributes = {}): Tracecurve {
            let newObject = (this.board as any).create('Tracecurve', this.dereference([glider, point,]), this.defaultAttributes(attributes))
            return new Tracecurve(newObject as Tracecurve)
        }


        /** Here, lower is an array of the form [x, y] and dim is an array of the form [w, h]. The arrays [x, y] and [w, h] define the 2D frame into which the 3D cube is (roughly) projected. If the view azimuth=0 and elevation=0, the 3D view will cover a rectangle with lower left corner [x,y] and side lengths [w, h] of the board. The 'cube' is of the form [[x1, x2], [y1, y2], [z1, z2]] which determines the coordinate ranges of the 3D cube.   This element creates a 3D view.*/
        view3D(x: Number = -13, y: Number = -10, w: Number = 20, h: Number = 20, xBounds: Number[] = [-5, 5], yBounds: Number[] = [-5, 5], zBounds: Number[] = [-5, 5], attributes: View3DAttributes = {
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
        },): View3D {
            let newObject = (this.board as any).create('view3D', [[x, y], [w, h], [xBounds, yBounds, zBounds]], attributes)
            return new View3D(newObject as View3D)
        }

    }

    export class GeometryElement {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /**  */
        public get x(): GeometryElement {
            return (this.elValue as any).x as GeometryElement
        }

        /**  */
        public get y(): GeometryElement {
            return (this.elValue as any).y as GeometryElement
        }

        /**  */
        public get elType(): String {
            return (this.elValue as any).elType as String
        }

        /**  */
        public get name(): String {
            return (this.elValue as any).name as String
        }

        /**  */
        public get isDraggable(): Boolean {
            return (this.elValue as any).isDraggable as Boolean
        }
        public set isDraggable(param: Boolean) {
            (this.elValue as any).isDraggable = param
        }

        /** Add an element as a child to the current element. */
        addChild(): GeometryElement {
            return (this.elValue as any).addChild() as GeometryElement
        }

        /** Alias of JXG.EventEmitter.on. */
        addEvent(): Number {
            return (this.elValue as any).addEvent() as Number
        }

        /** Adds ids of elements to the array this.parents. */
        addParents(): Object {
            return (this.elValue as any).addParents() as Object
        }

        /** Rotate texts or images by a given degree. */
        addRotation(): String {
            return (this.elValue as any).addRotation() as String
        }

        /** Adds ticks to this line or curve. */
        addTicks(): String {
            return (this.elValue as any).addTicks() as String
        }

        /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
        animate(): GeometryElement {
            return (this.elValue as any).animate() as GeometryElement
        }

        /** Dimensions of the smallest rectangle enclosing the element. */
        bounds(): Number[] {
            return (this.elValue as any).bounds() as Number[]
        }

        /** Removes all objects generated by the trace function. */
        clearTrace(): GeometryElement {
            return (this.elValue as any).clearTrace() as GeometryElement
        }

        /** Copy the element to background. */
        cloneToBackground(): GeometryElement {
            return (this.elValue as any).cloneToBackground() as GeometryElement
        }

        /** Creates a label element for this geometry element. */
        createLabel(): boolean {
            return (this.elValue as any).createLabel() as boolean
        }

        /** Format a number according to the locale set in the attribute ”intl”. */
        formatNumberLocale(): String | Number {
            return (this.elValue as any).formatNumberLocale() as String | Number
        }

        /** Array of strings containing the polynomials defining the element. */
        generatePolynomial(): Number[] {
            return (this.elValue as any).generatePolynomial() as Number[]
        }

        /** Get the value of the property key. */
        getAttribute(): Object {
            return (this.elValue as any).getAttribute() as Object
        }

        /** Retrieve a copy of the current visProp. */
        getAttributes(): Object {
            return (this.elValue as any).getAttributes() as Object
        }

        /** Returns the elements name. */
        getName(): String {
            return (this.elValue as any).getName() as String
        }

        /** List of the element ids resp. */
        getParents(): Number[] {
            return (this.elValue as any).getParents() as Number[]
        }

        /** Deprecated alias for JXG.GeometryElement#getAttribute. */
        getProperty(): Number[] {
            return (this.elValue as any).getProperty() as Number[]
        }

        /** The type of the element as used in JXG.Board#create. */
        getType(): String {
            return (this.elValue as any).getType() as String
        }

        /** Move an element to its nearest grid point. */
        handleSnapToGrid(): GeometryElement {
            return (this.elValue as any).handleSnapToGrid() as GeometryElement
        }

        /** Checks whether (x,y) is near the element. */
        hasPoint(x: number, y: number): Boolean {
            return (this.elValue as any).hasPoint(x, y) as Boolean
        }

        /** Hide the element. */
        hide(): GeometryElement {
            return (this.elValue as any).hide() as GeometryElement
        }

        /** Hide the element. */
        hideElement(): GeometryElement {
            return (this.elValue as any).hideElement() as GeometryElement
        }

        /**  */
        labelColor(): Board {
            return (this.elValue as any).labelColor() as Board
        }

        /** Uses the ”normal” properties of the element. */
        noHighlight(): Board {
            return (this.elValue as any).noHighlight() as Board
        }

        /** Removes the element from the construction. */
        remove(): Object {
            return (this.elValue as any).remove() as Object
        }

        /** Removes all ticks from a line or curve. */
        removeAllTicks(): Object {
            return (this.elValue as any).removeAllTicks() as Object
        }

        /** Remove an element as a child from the current element. */
        removeChild(): Object {
            return (this.elValue as any).removeChild() as Object
        }

        /** Alias of JXG.EventEmitter.off. */
        removeEvent(): Number {
            return (this.elValue as any).removeEvent() as Number
        }

        /** Removes ticks identified by parameter named tick from this line or curve. */
        removeTicks(): Object {
            return (this.elValue as any).removeTicks() as Object
        }

        /** Determines whether the element has arrows at start or end of the arc. */
        setArrow(): GeometryElement {
            return (this.elValue as any).setArrow() as GeometryElement
        }

        /** Sets an arbitrary number of attributes. */
        setAttribute(attrs: GeometryElementAttributes): void {
            return (this.elValue as any).setAttribute(attrs) as void
        }

        /** Sets a label and its text If label doesn't exist, it creates one */
        setLabel(): Object {
            return (this.elValue as any).setLabel() as Object
        }

        /** Updates the element's label text, strips all html. */
        setLabelText(): Object {
            return (this.elValue as any).setLabelText() as Object
        }

        /** Updates the element's label text and the element's attribute ”name”, strips all html. */
        setName(): Object {
            return (this.elValue as any).setName() as Object
        }

        /** Sets ids of elements to the array this.parents. */
        setParents(): Object {
            return (this.elValue as any).setParents() as Object
        }

        /** Translates the object by (x, y). */
        setPosition(transform: Transform): GeometryElement {
            return (this.elValue as any).setPosition(COORDS_BY_USER, transform) as GeometryElement
        }

        /** Moves an element by the difference of two coordinates. */
        setPositionDirectly(x: number, y: number): GeometryElement {
            return (this.elValue as any).setPositionDirectly(COORDS_BY_USER, [x, y]) as GeometryElement
        }

        /** Deprecated alias for JXG.GeometryElement#setAttribute. */
        setProperty(): GeometryElement {
            return (this.elValue as any).setProperty() as GeometryElement
        }

        /** Make the element visible. */
        show(): GeometryElement {
            return (this.elValue as any).show() as GeometryElement
        }

        /** Make the element visible. */
        showElement(): GeometryElement {
            return (this.elValue as any).showElement() as GeometryElement
        }

        /** Snaps the element to points. */
        snapToPoints(): GeometryElement {
            return (this.elValue as any).snapToPoints() as GeometryElement
        }

        /** Checks if locale is enabled in the attribute. */
        useLocale(): Boolean {
            return (this.elValue as any).useLocale() as Boolean
        }
    }

    export class GeometryElement3D {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /**  */
        public get element2D(): Number[] {
            return (this.elValue as any).element2D as Number[]
        }

        /**  */
        public get is3D(): Boolean {
            return (this.elValue as any).is3D as Boolean
        }

        /**  */
        public get view(): View3D {
            return (this.elValue as any).view as View3D
        }

        /**  */
        public get strokeColor(): String {
            return (this.elValue as any).strokeColor as String
        }

        /**  */
        public get strokeWidth(): Number {
            return (this.elValue as any).strokeWidth as Number
        }

        /**  */
        public get fillColor(): String {
            return (this.elValue as any).fillColor as String
        }

        /**  */
        public get visible(): Boolean {
            return (this.elValue as any).visible as Boolean
        }
    }

    export class Board {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }
    }

    export class Infobox {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }
    }

    export class CA {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
        expandDerivatives(): any {
            return (this.elValue as any).expandDerivatives() as any
        }

        /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
        setMath(): any {
            return (this.elValue as any).setMath() as any
        }
    }

    export class Chart extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get elements(): any[] {
            return (this.elValue as any).elements as any[]
        }

        /** Create bar chart defined by two data arrays. */
        drawBar(): any[] {
            return (this.elValue as any).drawBar() as any[]
        }

        /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
        drawFit(): Curve {
            return (this.elValue as any).drawFit() as Curve
        }

        /** Create line chart defined by two data arrays. */
        drawLine(): Curve {
            return (this.elValue as any).drawLine() as Curve
        }

        /** Create pie chart. */
        drawPie(): Object {
            return (this.elValue as any).drawPie() as Object
        }

        /** Create chart consisting of JSXGraph points. */
        drawPoints(): Number[] {
            return (this.elValue as any).drawPoints() as Number[]
        }

        /** Create radar chart. */
        drawRadar(): Object {
            return (this.elValue as any).drawRadar() as Object
        }

        /** Create line chart that consists of a natural spline curve defined by two data arrays. */
        drawSpline(): Curve {
            return (this.elValue as any).drawSpline() as Curve
        }

        /** Template for dynamic charts update. */
        updateDataArray(): Chart {
            return (this.elValue as any).updateDataArray() as Chart
        }
    }

    export class Circle extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /** Circle area */
        Area(): Number {
            return (this.elValue as any).Area() as Number
        }

        /** Perimeter (circumference) of circle. */
        Perimeter(): Number {
            return (this.elValue as any).Perimeter() as Number
        }

        /** Calculates the radius of the circle. */
        Radius(): Number {
            return (this.elValue as any).Radius() as Number
        }

        /** Treats the circle as parametric curve and calculates its X coordinate. */
        X(): Number {
            return (this.elValue as any).X() as Number
        }

        /** Treats the circle as parametric curve and calculates its Y coordinate. */
        Y(): Number {
            return (this.elValue as any).Y() as Number
        }

        /** Treat the circle as parametric curve and calculates its Z coordinate. */
        Z(): Number {
            return (this.elValue as any).Z() as Number
        }
    }

    export class Complex {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /**  */
        public get absval(): Number {
            return (this.elValue as any).absval as Number
        }

        /**  */
        public get angle(): Number {
            return (this.elValue as any).angle as Number
        }

        /**  */
        public get imaginary(): Number {
            return (this.elValue as any).imaginary as Number
        }

        /**  */
        public get isComplex(): Boolean {
            return (this.elValue as any).isComplex as Boolean
        }

        /**  */
        public get real(): Number {
            return (this.elValue as any).real as Number
        }

        /** Add another complex number to this complex number. */
        add(): Complex {
            return (this.elValue as any).add() as Complex
        }

        /** Conjugate a complex number in place. */
        conj(): Complex {
            return (this.elValue as any).conj() as Complex
        }

        /** Divide this complex number by the given complex number. */
        div(): Complex {
            return (this.elValue as any).div() as Complex
        }

        /** Multiply another complex number to this complex number. */
        mult(): Complex {
            return (this.elValue as any).mult() as Complex
        }

        /** Subtract another complex number from this complex number. */
        sub(): Complex {
            return (this.elValue as any).sub() as Complex
        }

        /** Converts a complex number into a string. */
        toString(): String {
            return (this.elValue as any).toString() as String
        }
    }

    export class Composition {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /** Adds an element to the composition container. */
        add(): Boolean {
            return (this.elValue as any).add() as Boolean
        }

        /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
        fullUpdate(): Boolean {
            return (this.elValue as any).fullUpdate() as Boolean
        }

        /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
        highlight(): Boolean {
            return (this.elValue as any).highlight() as Boolean
        }

        /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
        noHighlight(): Boolean {
            return (this.elValue as any).noHighlight() as Boolean
        }

        /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
        prepareUpdate(): Boolean {
            return (this.elValue as any).prepareUpdate() as Boolean
        }

        /** Remove an element from the composition container. */
        remove(): Boolean {
            return (this.elValue as any).remove() as Boolean
        }

        /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
        setParents(): any {
            return (this.elValue as any).setParents() as any
        }

        /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
        updateRenderer(): any {
            return (this.elValue as any).updateRenderer() as any
        }
    }

    export class Coords {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /**  */
        public get board(): Board {
            return (this.elValue as any).board as Board
        }

        /**  */
        public get emitter(): boolean {
            return (this.elValue as any).emitter as boolean
        }

        /**  */
        public get scrCoords(): Number[] {
            return (this.elValue as any).scrCoords as Number[]
        }

        /**  */
        public get usrCoords(): Number[] {
            return (this.elValue as any).usrCoords as Number[]
        }

        /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
        isReal(): Boolean {
            return (this.elValue as any).isReal() as Boolean
        }

        /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
        setCoordinates(): Coords {
            return (this.elValue as any).setCoordinates() as Coords
        }
    }

    export class Curve extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get dataX(): Number[] {
            return (this.elValue as any).dataX as Number[]
        }
        public set dataX(param: Number[]) {
            (this.elValue as any).dataX = param
        }

        /**  */
        public get dataY(): Number[] {
            return (this.elValue as any).dataY as Number[]
        }
        public set dataY(param: Number[]) {
            (this.elValue as any).dataY = param
        }

        /**  */
        public get ticks(): Number[] {
            return (this.elValue as any).ticks as Number[]
        }

        /** Allocate points in the Coords array this.points */
        allocatePoints(): Number[] {
            return (this.elValue as any).allocatePoints() as Number[]
        }

        /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
        generateTerm(): Number[] {
            return (this.elValue as any).generateTerm() as Number[]
        }

        /** Gives the default value of the right bound for the curve. */
        maxX(): Number {
            return (this.elValue as any).maxX() as Number
        }

        /** Gives the default value of the left bound for the curve. */
        minX(): Number {
            return (this.elValue as any).minX() as Number
        }

        /** Shift the curve by the vector 'where'. */
        moveTo(): Curve {
            return (this.elValue as any).moveTo() as Curve
        }

        /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
        notifyParents(): Curve {
            return (this.elValue as any).notifyParents() as Curve
        }

        /** Computes the curve path */
        updateCurve(): Curve {
            return (this.elValue as any).updateCurve() as Curve
        }

        /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
        updateDataArray(func: Function): void {
            return (this.elValue as any).updateDataArray(func) as void
        }

        /** Updates the visual contents of the curve. */
        updateRenderer(): Curve {
            return (this.elValue as any).updateRenderer() as Curve
        }

        /** Applies the transformations of the curve to the given point p. */
        updateTransform(): Point {
            return (this.elValue as any).updateTransform() as Point
        }

        /** The parametric function which defines the x-coordinate of the curve. */
        X(): Number {
            return (this.elValue as any).X() as Number
        }

        /** The parametric function which defines the y-coordinate of the curve. */
        Y(): Number {
            return (this.elValue as any).Y() as Number
        }

        /** Treat the curve as curve with homogeneous coordinates. */
        Z(): Number {
            return (this.elValue as any).Z() as Number
        }
    }

    export class Curve3D extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /** Function which maps u to x; i.e. */
        X(): any {
            return (this.elValue as any).X() as any
        }

        /** Function which maps u to y; i.e. */
        Y(): any {
            return (this.elValue as any).Y() as any
        }

        /** Function which maps u to z; i.e. */
        Z(): any {
            return (this.elValue as any).Z() as any
        }
    }

    export class Dump {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /** Adds markers to every element of the board */
        addMarkers(): Dump {
            return (this.elValue as any).addMarkers() as Dump
        }

        /** Converts an array of different values into a parameter string that can be used by the code generators. */
        arrayToParamStr(): Dump {
            return (this.elValue as any).arrayToParamStr() as Dump
        }

        /** Removes markers from every element on the board. */
        deleteMarkers(): Dump {
            return (this.elValue as any).deleteMarkers() as Dump
        }

        /** Generate a save-able structure with all elements. */
        dump(): Dump {
            return (this.elValue as any).dump() as Dump
        }

        /** Eliminate default values given by JXG.Options from the attributes object. */
        minimizeObject(): Dump {
            return (this.elValue as any).minimizeObject() as Dump
        }

        /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
        prepareAttributes(): Dump {
            return (this.elValue as any).prepareAttributes() as Dump
        }

        /** Stringifies a string, i.e. */
        str(): Dump {
            return (this.elValue as any).str() as Dump
        }

        /** Saves the construction in board to JavaScript. */
        toJavaScript(): Dump {
            return (this.elValue as any).toJavaScript() as Dump
        }

        /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
        toJCAN(): Dump {
            return (this.elValue as any).toJCAN() as Dump
        }

        /** Saves the construction in board to JessieCode. */
        toJessie(): Dump {
            return (this.elValue as any).toJessie() as Dump
        }
    }

    export class ForeignObject {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /**  */
        public get content(): Number[] {
            return (this.elValue as any).content as Number[]
        }

        /**  */
        public get size(): Number[] {
            return (this.elValue as any).size as Number[]
        }

        /** Returns the height of the foreignObject in user coordinates. */
        H(): number {
            return (this.elValue as any).H() as number
        }

        /** Checks whether (x,y) is over or near the image; */
        hasPoint(): Boolean {
            return (this.elValue as any).hasPoint() as Boolean
        }

        /** Set the width and height of the foreignObject. */
        setSize(): ForeignObject {
            return (this.elValue as any).setSize() as ForeignObject
        }

        /** Returns the width of the foreignObject in user coordinates. */
        W(): number {
            return (this.elValue as any).W() as number
        }
    }

    export class Group extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get coords(): Object {
            return (this.elValue as any).coords as Object
        }

        /** Adds all points in a group to this group. */
        addGroup(): Group {
            return (this.elValue as any).addGroup() as Group
        }

        /** Adds ids of elements to the array this.parents. */
        addParents(): Object {
            return (this.elValue as any).addParents() as Object
        }

        /** Adds an Point to this group. */
        addPoint(): Group {
            return (this.elValue as any).addPoint() as Group
        }

        /** Adds multiple points to this group. */
        addPoints(): Group {
            return (this.elValue as any).addPoints() as Group
        }

        /** Adds a point to the set of rotation points of the group. */
        addRotationPoint(): Group {
            return (this.elValue as any).addRotationPoint() as Group
        }

        /** Adds a point to the set of the scale points of the group. */
        addScalePoint(): Group {
            return (this.elValue as any).addScalePoint() as Group
        }

        /** List of the element ids resp. */
        getParents(): Number[] {
            return (this.elValue as any).getParents() as Number[]
        }

        /** Removes a point from the group. */
        removePoint(): Group {
            return (this.elValue as any).removePoint() as Group
        }

        /** Removes the rotation property from a point of the group. */
        removeRotationPoint(): Group {
            return (this.elValue as any).removeRotationPoint() as Group
        }

        /** Removes the scaling property from a point of the group. */
        removeScalePoint(): Group {
            return (this.elValue as any).removeScalePoint() as Group
        }

        /** Removes the translation property from a point of the group. */
        removeTranslationPoint(): Group {
            return (this.elValue as any).removeTranslationPoint() as Group
        }

        /** Sets ids of elements to the array this.parents. */
        setParents(): Object {
            return (this.elValue as any).setParents() as Object
        }

        /**  */
        setProperty(): Group {
            return (this.elValue as any).setProperty() as Group
        }

        /** Sets the center of rotation for the group. */
        setRotationCenter(): Group {
            return (this.elValue as any).setRotationCenter() as Group
        }

        /** Sets the rotation points of the group. */
        setRotationPoints(): Group {
            return (this.elValue as any).setRotationPoints() as Group
        }

        /** Sets the center of scaling for the group. */
        setScaleCenter(): Group {
            return (this.elValue as any).setScaleCenter() as Group
        }

        /** Sets the scale points of the group. */
        setScalePoints(): Group {
            return (this.elValue as any).setScalePoints() as Group
        }

        /** Sets the translation points of the group. */
        setTranslationPoints(): Group {
            return (this.elValue as any).setTranslationPoints() as Group
        }

        /** Releases all elements of this group. */
        ungroup(): Group {
            return (this.elValue as any).ungroup() as Group
        }
    }

    export class Image extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get size(): Number[] {
            return (this.elValue as any).size as Number[]
        }

        /**  */
        public get url(): string {
            return (this.elValue as any).url as string
        }

        /** Returns the height of the image in user coordinates. */
        H(): number {
            return (this.elValue as any).H() as number
        }

        /** Checks whether (x,y) is over or near the image; */
        hasPoint(): Boolean {
            return (this.elValue as any).hasPoint() as Boolean
        }

        /** Set the width and height of the image. */
        setSize(): GeometryElement {
            return (this.elValue as any).setSize() as GeometryElement
        }

        /** Returns the width of the image in user coordinates. */
        W(): number {
            return (this.elValue as any).W() as number
        }
    }

    export class Implicitcurve extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }
    }

    export class Legend {
        elValue: Object = {}
        constructor(elValue: any) {
            this.elValue = elValue
        }

        /**  */
        public get colors(): Number[] {
            return (this.elValue as any).colors as Number[]
        }

        /**  */
        public get labels(): Number[] {
            return (this.elValue as any).labels as Number[]
        }

        /**  */
        public get rowHeight(): Number {
            return (this.elValue as any).rowHeight as Number
        }

        /**  */
        public get style(): String {
            return (this.elValue as any).style as String
        }
    }

    export class Line extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get defaultTicks(): Ticks {
            return (this.elValue as any).defaultTicks as Ticks
        }

        /**  */
        public get parentPolygon(): Polygon {
            return (this.elValue as any).parentPolygon as Polygon
        }

        /** Attributes for first defining point of the line. */
        public get point1(): Point {
            return (this.elValue as any).point1 as Point
        }

        /** Attributes for second defining point of the line. */
        public get point2(): Point {
            return (this.elValue as any).point2 as Point
        }

        /** Attributes for ticks of the line. */
        public get ticks(): Number[] {
            return (this.elValue as any).ticks as Number[]
        }

        /** Determines the angle between the positive x axis and the line. */
        getAngle(): Number {
            return (this.elValue as any).getAngle() as Number
        }

        /** Calculates the y intersect of the line. */
        getRise(): Number {
            return (this.elValue as any).getRise() as Number
        }

        /** Alias for line.Slope */
        getSlope(): Number {
            return (this.elValue as any).getSlope() as Number
        }

        /** Checks whether (x,y) is near the line. */
        hasPoint(): Boolean {
            return (this.elValue as any).hasPoint() as Boolean
        }

        /** The distance between the two points defining the line. */
        L(): Number {
            return (this.elValue as any).L() as Number
        }

        /** Calculates the slope of the line. */
        Slope(): Number {
            return (this.elValue as any).Slope() as Number
        }

        /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
        X(): number {
            return (this.elValue as any).X() as number
        }

        /** Treat the line as parametric curve in homogeneous coordinates. */
        Y(): number {
            return (this.elValue as any).Y() as number
        }

        /** Treat the line as parametric curve in homogeneous coordinates. */
        Z(): number {
            return (this.elValue as any).Z() as number
        }
    }

    export class Line3D extends GeometryElement3D {
        constructor(elValues: GeometryElement3D) {
            super(elValues)
        }

        /**  */
        public get direction(): Number[] | Function {
            return (this.elValue as any).direction as Number[] | Function
        }

        /**  */
        public get point(): Point3D {
            return (this.elValue as any).point as Point3D
        }

        /**  */
        public get point1(): Point3D {
            return (this.elValue as any).point1 as Point3D
        }

        /**  */
        public get point2(): Point3D {
            return (this.elValue as any).point2 as Point3D
        }

        /**  */
        public get range(): Number[] {
            return (this.elValue as any).range as Number[]
        }
    }

    export class Point extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        coords(): Number[] {
            return (this.elValue as any).coords() as Number[]
        }

        /**  */
        distance(toPoint: Point | point): number {
            return (this.elValue as any).Dist(JSXGraph.dereference(toPoint)) as number
        }

        /** Set the face of a point element. */
        face(style: 'cross' | 'circle' | 'square' | 'plus' | 'minus' | 'diamond'): Boolean {
            return (this.elValue as any).face(style) as Boolean
        }

        /** Updates the position of the point. */
        update(): number[] {
            return (this.elValue as any).update() as number[]
        }

        /**  */
        X(): number {
            return (this.elValue as any).X() as number
        }

        /**  */
        Y(): number {
            return (this.elValue as any).Y() as number
        }

        /**  */
        Z(): number {
            return (this.elValue as any).Z() as number
        }
    }

    export class Point3D extends GeometryElement3D {
        constructor(elValues: GeometryElement3D) {
            super(elValues)
        }

        /**  */
        public get slide(): GeometryElement3D {
            return (this.elValue as any).slide as GeometryElement3D
        }

        /** Set the position of a 3D point. */
        setPosition(): Point3D {
            return (this.elValue as any).setPosition() as Point3D
        }

        /** Get x-coordinate of a 3D point. */
        X(): number {
            return (this.elValue as any).X() as number
        }

        /** Get y-coordinate of a 3D point. */
        Y(): number {
            return (this.elValue as any).Y() as number
        }

        /** Get z-coordinate of a 3D point. */
        Z(): number {
            return (this.elValue as any).Z() as number
        }
    }

    export class Polygon extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /** Attributes for the polygon border lines. */
        public get borders(): Number[] {
            return (this.elValue as any).borders as Number[]
        }

        /** Attributes for the polygon vertices. */
        public get vertices(): Number[] {
            return (this.elValue as any).vertices as Number[]
        }

        /** Uses the boards renderer to update the polygon. */
        updateRenderer(): any {
            return (this.elValue as any).updateRenderer() as any
        }
    }

    export class Text extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get size(): Number[] {
            return (this.elValue as any).size as Number[]
        }

        /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
        bounds(): Number[] {
            return (this.elValue as any).bounds() as Number[]
        }

        /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
        crudeSizeEstimate(): Number[] {
            return (this.elValue as any).crudeSizeEstimate() as Number[]
        }

        /** Returns the value of the attribute ”anchorX”. */
        getAnchorX(): Number {
            return (this.elValue as any).getAnchorX() as Number
        }

        /** Returns the value of the attribute ”anchorY”. */
        getAnchorY(): Number {
            return (this.elValue as any).getAnchorY() as Number
        }

        /** Return the width of the text element. */
        getSize(): Number[] {
            return (this.elValue as any).getSize() as Number[]
        }

        /** Replace _{} by <sub> */
        replaceSub(): String {
            return (this.elValue as any).replaceSub() as String
        }

        /** Replace ^{} by <sup> */
        replaceSup(): String {
            return (this.elValue as any).replaceSup() as String
        }

        /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
        setAutoPosition(): Text {
            return (this.elValue as any).setAutoPosition() as Text
        }

        /** Move the text to new coordinates. */
        setCoords(x: Number, y: Number): object {
            return (this.elValue as any).setCoords(x, y) as object
        }

        /** Defines new content. */
        setText(newText: String): Text {
            return (this.elValue as any).setText(newText) as Text
        }

        /** Defines new content but converts < and > to HTML entities before updating the DOM. */
        setTextJessieCode(): this {
            return (this.elValue as any).setTextJessieCode() as this
        }

        /** Evaluates the text. */
        update(): this {
            return (this.elValue as any).update() as this
        }

        /** Recompute the width and the height of the text box. */
        updateSize(): this {
            return (this.elValue as any).updateSize() as this
        }

        /** Decode unicode entities into characters. */
        utf8_decode(): String {
            return (this.elValue as any).utf8_decode() as String
        }
    }

    export class Ticks extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        public get board(): Board {
            return (this.elValue as any).board as Board
        }

        /**  */
        public get equidistant(): Boolean {
            return (this.elValue as any).equidistant as Boolean
        }

        /**  */
        public get fixedTicks(): Number[] {
            return (this.elValue as any).fixedTicks as Number[]
        }

        /**  */
        public get labelCounter(): number {
            return (this.elValue as any).labelCounter as number
        }

        /** User defined labels for special ticks. */
        public get labels(): Number[] {
            return (this.elValue as any).labels as Number[]
        }

        /**  */
        public get labelsData(): Number[] {
            return (this.elValue as any).labelsData as Number[]
        }

        /**  */
        public get line(): Line {
            return (this.elValue as any).line as Line
        }

        /**  */
        public get ticks(): Number[] {
            return (this.elValue as any).ticks as Number[]
        }

        /** Formats label texts to make labels displayed in scientific notation look beautiful. */
        beautifyScientificNotationLabel(): String {
            return (this.elValue as any).beautifyScientificNotationLabel() as String
        }

        /** Checks whether (x,y) is near the line. */
        hasPoint(): Boolean {
            return (this.elValue as any).hasPoint() as Boolean
        }

        /** Sets x and y coordinate of the tick. */
        setPositionDirectly(): Ticks {
            return (this.elValue as any).setPositionDirectly() as Ticks
        }

        /** Uses the boards renderer to update the arc. */
        updateRenderer(): Ticks {
            return (this.elValue as any).updateRenderer() as Ticks
        }
    }

    export class Turtle extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /** Move the turtle backwards. */
        back(): Turtle {
            return (this.elValue as any).back() as Turtle
        }

        /** Alias for JXG.Turtle#back */
        bk(): Turtle {
            return (this.elValue as any).bk() as Turtle
        }

        /** Removes the turtle curve from the board. */
        clean(): Turtle {
            return (this.elValue as any).clean() as Turtle
        }

        /** Removes the turtle completely and resets it to its initial position and direction. */
        clearScreen(): Turtle {
            return (this.elValue as any).clearScreen() as Turtle
        }

        /** Alias for JXG.Turtle#clearScreen */
        cs(): Number {
            return (this.elValue as any).cs() as Number
        }

        /** The ”co”-coordinate of the turtle curve at position t is returned. */
        evalAt(): Number {
            return (this.elValue as any).evalAt() as Number
        }

        /** Alias for JXG.Turtle#forward */
        fd(): Turtle {
            return (this.elValue as any).fd() as Turtle
        }

        /** Move the turtle forward. */
        forward(): Turtle {
            return (this.elValue as any).forward() as Turtle
        }

        /** Get most recently set turtle color. */
        getHighlightPenColor(): Boolean {
            return (this.elValue as any).getHighlightPenColor() as Boolean
        }

        /** Get most recently set turtle color. */
        getPenColor(): Boolean {
            return (this.elValue as any).getPenColor() as Boolean
        }

        /** Get most recently set turtle size (in pixel). */
        getPenSize(): Boolean {
            return (this.elValue as any).getPenSize() as Boolean
        }

        /** Checks whether (x,y) is near the curve. */
        hasPoint(): Boolean {
            return (this.elValue as any).hasPoint() as Boolean
        }

        /** Sets the visibility of the turtle head to false, */
        hideTurtle(): Turtle {
            return (this.elValue as any).hideTurtle() as Turtle
        }

        /** Moves the turtle to position [0,0]. */
        home(): Turtle {
            return (this.elValue as any).home() as Turtle
        }

        /** Alias for JXG.Turtle#hideTurtle */
        ht(): Turtle {
            return (this.elValue as any).ht() as Turtle
        }

        /** Rotate the turtle direction to the right. */
        left(): Turtle {
            return (this.elValue as any).left() as Turtle
        }

        /** Rotates the turtle into a new direction. */
        lookTo(): Turtle {
            return (this.elValue as any).lookTo() as Turtle
        }

        /** Alias for JXG.Turtle#left */
        lt(): Turtle {
            return (this.elValue as any).lt() as Turtle
        }

        /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
        maxX(): Turtle {
            return (this.elValue as any).maxX() as Turtle
        }

        /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
        minX(): Turtle {
            return (this.elValue as any).minX() as Turtle
        }

        /** Moves the turtle to a given coordinate pair. */
        moveTo(): Turtle {
            return (this.elValue as any).moveTo() as Turtle
        }

        /** Alias for JXG.Turtle#penDown */
        pd(): Turtle {
            return (this.elValue as any).pd() as Turtle
        }

        /** Pen down, continues visible drawing */
        penDown(): Turtle {
            return (this.elValue as any).penDown() as Turtle
        }

        /** Pen up, stops visible drawing */
        penUp(): Turtle {
            return (this.elValue as any).penUp() as Turtle
        }

        /** Alias for JXG.Turtle#popTurtle */
        pop(): Turtle {
            return (this.elValue as any).pop() as Turtle
        }

        /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
        popTurtle(): Turtle {
            return (this.elValue as any).popTurtle() as Turtle
        }

        /** Alias for JXG.Turtle#penUp */
        pu(): Turtle {
            return (this.elValue as any).pu() as Turtle
        }

        /** Alias for JXG.Turtle#pushTurtle */
        push(): Turtle {
            return (this.elValue as any).push() as Turtle
        }

        /** Pushes the position of the turtle on the stack. */
        pushTurtle(): Turtle {
            return (this.elValue as any).pushTurtle() as Turtle
        }

        /** Rotate the turtle direction to the right */
        right(): Turtle {
            return (this.elValue as any).right() as Turtle
        }

        /** Alias for JXG.Turtle#right */
        rt(): Turtle {
            return (this.elValue as any).rt() as Turtle
        }

        /** Sets the highlight pen color. */
        setHighlightPenColor(): Turtle {
            return (this.elValue as any).setHighlightPenColor() as Turtle
        }

        /** Sets the pen color. */
        setPenColor(): Turtle {
            return (this.elValue as any).setPenColor() as Turtle
        }

        /** Sets the pen size. */
        setPenSize(): Turtle {
            return (this.elValue as any).setPenSize() as Turtle
        }

        /** Moves the turtle without drawing to a new position */
        setPos(): Turtle {
            return (this.elValue as any).setPos() as Turtle
        }

        /** Sets the visibility of the turtle head to true, */
        showTurtle(): Turtle {
            return (this.elValue as any).showTurtle() as Turtle
        }

        /** Alias for JXG.Turtle#showTurtle */
        st(): Number {
            return (this.elValue as any).st() as Number
        }

        /** if t is not supplied the x-coordinate of the turtle is returned. */
        X(): Number {
            return (this.elValue as any).X() as Number
        }

        /** if t is not supplied the y-coordinate of the turtle is returned. */
        Y(): Number {
            return (this.elValue as any).Y() as Number
        }

        /**  */
        Z(): Number {
            return (this.elValue as any).Z() as Number
        }
    }

    export class Sector extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /**  */
        public get point1(): Point {
            return (this.elValue as any).point1 as Point
        }

        /**  */
        public get point2(): Point {
            return (this.elValue as any).point2 as Point
        }

        /**  */
        public get point3(): Point {
            return (this.elValue as any).point3 as Point
        }

        /**  */
        public get point4(): Point {
            return (this.elValue as any).point4 as Point
        }

        /** Checks whether (x,y) is within the area defined by the sector. */
        hasPointSector(): Boolean {
            return (this.elValue as any).hasPointSector() as Boolean
        }

        /** Returns the radius of the sector. */
        Radius(): Number {
            return (this.elValue as any).Radius() as Number
        }
    }

    export class Vectorfield extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /** Set the defining functions of vector field. */
        setF(): Object {
            return (this.elValue as any).setF() as Object
        }
    }

    export class Angle extends Sector {
        constructor(elValues: Sector) {
            super(elValues)
        }

        /**  */
        public get point(): Point {
            return (this.elValue as any).point as Point
        }

        /** Frees an angle from a prescribed value. */
        free(): Object {
            return (this.elValue as any).free() as Object
        }

        /** Set an angle to a prescribed value given in radians. */
        setAngle(): Object {
            return (this.elValue as any).setAngle() as Object
        }

        /** Returns the value of the angle. */
        Value(): Number {
            return (this.elValue as any).Value() as Number
        }
    }

    export class Arc extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /**  */
        public get anglepoint(): Point {
            return (this.elValue as any).anglepoint as Point
        }

        /**  */
        public get radiuspoint(): Point {
            return (this.elValue as any).radiuspoint as Point
        }

        /**  */
        getRadius(): Number {
            return (this.elValue as any).getRadius() as Number
        }

        /** Checks whether (x,y) is within the sector defined by the arc. */
        hasPointSector(): Boolean {
            return (this.elValue as any).hasPointSector() as Boolean
        }

        /** Determines the arc's current radius. */
        Radius(): Number {
            return (this.elValue as any).Radius() as Number
        }

        /** Returns the length of the arc or the value of the angle spanned by the arc. */
        Value(): Number {
            return (this.elValue as any).Value() as Number
        }
    }

    export class Arrow extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Parallel extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Arrowparallel extends Parallel {
        constructor(elValues: Parallel) {
            super(elValues)
        }
    }

    export class Axis extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }

        /**  */
        public get defaultTicks(): Ticks {
            return (this.elValue as any).defaultTicks as Ticks
        }
    }

    export class Bisector extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Bisectorlines extends Composition {
        constructor(elValues: Composition) {
            super(elValues)
        }
    }

    export class Button extends Text {
        constructor(elValues: Text) {
            super(elValues)
        }
    }

    export class Cardinalspline extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Checkbox extends Text {
        constructor(elValues: Text) {
            super(elValues)
        }

        /** Returns the value of the checkbox element */
        Value(): String {
            return (this.elValue as any).Value() as String
        }
    }

    export class Circumcenter extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class Circumcircle extends Circle {
        constructor(elValues: Circle) {
            super(elValues)
        }
    }

    export class CircumcircleArc extends Arc {
        constructor(elValues: Arc) {
            super(elValues)
        }
    }

    export class CircumcircleSector extends Sector {
        constructor(elValues: Sector) {
            super(elValues)
        }

        /**  */
        public get center(): Circumcenter {
            return (this.elValue as any).center as Circumcenter
        }
    }

    export class Comb extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Conic extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class CurveDifference extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class CurveIntersection extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class CurveUnion extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Derivative extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Ellipse extends Conic {
        constructor(elValues: Conic) {
            super(elValues)
        }
    }

    export class ParametricSurface3D extends Curve3D {
        constructor(elValues: Curve3D) {
            super(elValues)
        }
    }

    export class Functiongraph extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Functiongraph3D extends Curve3D {
        constructor(elValues: Curve3D) {
            super(elValues)
        }
    }

    export class Glider extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }

        /** Animate the point. */
        startAnimation(direction: Number, stepCount: Number, delayMSec: Number): void {
            return (this.elValue as any).startAnimation(direction, stepCount, delayMSec) as void
        }
    }

    export class Grid extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Hatch extends Ticks {
        constructor(elValues: Ticks) {
            super(elValues)
        }

        /**  */
        public get ticksDistance(): Number {
            return (this.elValue as any).ticksDistance as Number
        }
    }

    export class Hyperbola extends Conic {
        constructor(elValues: Conic) {
            super(elValues)
        }
    }

    export class Incenter extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class Incircle extends Circle {
        constructor(elValues: Circle) {
            super(elValues)
        }
    }

    export class Inequality extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Input extends Text {
        constructor(elValues: Text) {
            super(elValues)
        }

        /** Sets value of the input element. */
        set(): GeometryElement {
            return (this.elValue as any).set() as GeometryElement
        }

        /** Returns the value (content) of the input element */
        Value(): String {
            return (this.elValue as any).Value() as String
        }
    }

    export class Integral extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /** Attributes of the (left) base point of the integral. */
        public get baseLeft(): Point {
            return (this.elValue as any).baseLeft as Point
        }

        /** Attributes of the (right) base point of the integral. */
        public get baseRight(): Point {
            return (this.elValue as any).baseRight as Point
        }

        /** Attributes of the (left) starting point of the integral. */
        public get curveLeft(): Point {
            return (this.elValue as any).curveLeft as Point
        }

        /** Attributes of the (right) end point of the integral. */
        public get curveRight(): Point {
            return (this.elValue as any).curveRight as Point
        }

        /** Returns the current value of the integral. */
        Value(): Point {
            return (this.elValue as any).Value() as Point
        }
    }

    export class Intersection extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }
    }

    export class Label extends Text {
        constructor(elValues: Text) {
            super(elValues)
        }
    }

    export class Locus extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /**  */
        public get ctime(): Number {
            return (this.elValue as any).ctime as Number
        }

        /**  */
        public get eq(): String {
            return (this.elValue as any).eq as String
        }
    }

    export class MajorArc extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class MajorSector extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Metapostspline extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Midpoint extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class MinorArc extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class MinorSector extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class mirrorelement extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }
    }

    export class Mirrorpoint extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class NonReflexAngle extends Angle {
        constructor(elValues: Angle) {
            super(elValues)
        }
    }

    export class Normal extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Orthogonalprojection extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class OtherIntersection extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class Parabola extends Conic {
        constructor(elValues: Conic) {
            super(elValues)
        }
    }

    export class Parallelpoint extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class Segment extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Parallelogram extends Polygon {
        constructor(elValues: Polygon) {
            super(elValues)
        }
    }

    export class Perpendicular extends Segment {
        constructor(elValues: Segment) {
            super(elValues)
        }
    }

    export class PerpendicularPoint extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class PerpendicularSegment extends Segment {
        constructor(elValues: Segment) {
            super(elValues)
        }

        /**  */
        public get point(): PerpendicularPoint {
            return (this.elValue as any).point as PerpendicularPoint
        }
    }

    export class PolarLine extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class PolePoint extends Point {
        constructor(elValues: Point) {
            super(elValues)
        }
    }

    export class PolygonalChain extends Polygon {
        constructor(elValues: Polygon) {
            super(elValues)
        }
    }

    export class RadicalAxis extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Reflection extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }
    }

    export class ReflexAngle extends Angle {
        constructor(elValues: Angle) {
            super(elValues)
        }
    }

    export class RegularPolygon extends Polygon {
        constructor(elValues: Polygon) {
            super(elValues)
        }
    }

    export class Riemannsum extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }

        /** Returns the value of the Riemann sum, i.e. */
        Value(): Number {
            return (this.elValue as any).Value() as Number
        }
    }

    export class Semicircle extends Arc {
        constructor(elValues: Arc) {
            super(elValues)
        }

        /**  */
        public get midpoint(): Midpoint {
            return (this.elValue as any).midpoint as Midpoint
        }
    }

    export class Slider extends Glider {
        constructor(elValues: Glider) {
            super(elValues)
        }

        /** Sets the maximum value of the slider. */
        setMax(): Object {
            return (this.elValue as any).setMax() as Object
        }

        /** Sets the minimum value of the slider. */
        setMin(): Object {
            return (this.elValue as any).setMin() as Object
        }

        /** Sets the value of the slider. */
        setValue(): Object {
            return (this.elValue as any).setValue() as Object
        }

        /** Returns the current slider value. */
        Value(): number {
            return (this.elValue as any).Value() as number
        }
    }

    export class Slopefield extends Vectorfield {
        constructor(elValues: Vectorfield) {
            super(elValues)
        }

        /** Set the defining functions of slope field. */
        setF(): Object {
            return (this.elValue as any).setF() as Object
        }
    }

    export class Slopetriangle extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }

        /** Returns the value of the slope triangle, that is the slope of the tangent. */
        Value(): Number {
            return (this.elValue as any).Value() as Number
        }
    }

    export class Smartlabel extends Text {
        constructor(elValues: Text) {
            super(elValues)
        }
    }

    export class Spline extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Stepfunction extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Tangent extends Line {
        constructor(elValues: Line) {
            super(elValues)
        }
    }

    export class Tapemeasure extends Segment {
        constructor(elValues: Segment) {
            super(elValues)
        }

        /** Returns the length of the tape measure. */
        Value(): Number {
            return (this.elValue as any).Value() as Number
        }
    }

    export class Tracecurve extends Curve {
        constructor(elValues: Curve) {
            super(elValues)
        }
    }

    export class Transform extends GeometryElement {
        constructor(elValues: GeometryElement) {
            super(elValues)
        }

        /**  */
        applyOnce(element: GeometryElement): void {
            return (this.elValue as any).applyOnce(JSXGraph.dereference(element)) as void
        }

        /**  */
        bindTo(element: GeometryElement): void {
            return (this.elValue as any).bindTo(JSXGraph.dereference(element)) as void
        }

        /**  */
        setMatrix(): Transform {
            return (this.elValue as any).setMatrix() as Transform
        }
    }

    export class View3D extends GeometryElement3D {
        constructor(elValues: GeometryElement3D) {
            super(elValues)
        }

        /**  */
        public get matrix3D(): Object {
            return (this.elValue as any).matrix3D as Object
        }

        /**  */
        point3D(xyz: NumberFunction[] | Function, attributes: Object = {}): Point3D {
            return (this.elValue as any).create("point3d", [xyz], attributes) as Point3D
        }

        /**  */
        line3D(point1: NumberFunction[] | Point3D, point2: NumberFunction[] | Point3D, attributes: Object = {}): Line3D {
            return (this.elValue as any).create("line3d", JSXGraph.dereference([point1, point2]), attributes) as Line3D
        }

        /**  */
        curve3D(xFunction: Function, yFunction: Function, zFunction: Function, range: NumberFunction[], attributes: Object = {}): Curve3D {
            return (this.elValue as any).create("curve3d", JSXGraph.dereference([xFunction, yFunction, zFunction, range]), attributes) as Curve3D
        }

        /**  */
        functiongraph3D(xyFunction: Function, xRange: NumberFunction[], yRange: NumberFunction[], attributes: Object = {}): Functiongraph3D {
            return (this.elValue as any).create("functiongraph3d", JSXGraph.dereference([xyFunction, xRange, yRange]), attributes) as Functiongraph3D
        }

        /**  */
        parametricsurface3D(xFunction: Function, yFunction: Function, zFunction: Function, xRange: NumberFunction[], yRange: NumberFunction[], attributes: Object = {}): Curve3D {
            return (this.elValue as any).create("parametricsurface3d", JSXGraph.dereference([xFunction, yFunction, zFunction, xRange, yRange]), attributes) as Curve3D
        }

        /**  */
        animateAzimuth(): Object {
            return (this.elValue as any).animateAzimuth() as Object
        }

        /** Creates a new 3D element of type elementType. */
        create(): Object {
            return (this.elValue as any).create() as Object
        }

        /** Intersect a ray with the bounding cube of the 3D view. */
        intersectionLineCube(): Number[] {
            return (this.elValue as any).intersectionLineCube() as Number[]
        }

        /**  */
        intersectionPlanePlane(): Number[] {
            return (this.elValue as any).intersectionPlanePlane() as Number[]
        }

        /** Test if coordinates are inside of the bounding cube. */
        isInCube(): Number[] {
            return (this.elValue as any).isInCube() as Number[]
        }

        /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
        project2DTo3DPlane(): Number[] {
            return (this.elValue as any).project2DTo3DPlane() as Number[]
        }

        /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
        project2DTo3DVertical(): Number[] {
            return (this.elValue as any).project2DTo3DVertical() as Number[]
        }

        /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
        project3DTo2D(): Number[] {
            return (this.elValue as any).project3DTo2D() as Number[]
        }

        /** Limit 3D coordinates to the bounding cube. */
        project3DToCube(): GeometryElement3D | Composition {
            return (this.elValue as any).project3DToCube() as GeometryElement3D | Composition
        }

        /** Select a single or multiple elements at once. */
        select(): GeometryElement3D | Composition {
            return (this.elValue as any).select() as GeometryElement3D | Composition
        }

        /**  */
        stopAzimuth(): any {
            return (this.elValue as any).stopAzimuth() as any
        }
    }
}