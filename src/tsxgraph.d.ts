export declare namespace TXG {
    interface GeometryElementAttributes {
        /** used by V2 vector math library */
        scaleXY?: Number;
        /** Color of the element. */
        color?: string | Function;
        /** Opacity of the element (between 0 and 1). */
        opacity?: number | Function;
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
        /** If false the element won't be visible on the board, otherwise it is shown. */
        visible?: Boolean | Function;
        /** Determines the elements border-style. Possible values are: 0 for a solid line 1 for a dotted line 2 for a line with small dashes 3 for a line with medium dashes 4 for a line with big dashes 5 for a line with alternating medium and big dashes and large gaps 6 for a line with alternating medium and big dashes and small gaps 7 for a dotted line. Needs JXG.GeometryElement#linecap set to ”round” for round dots.The dash patterns are defined in JXG.AbstractRenderer#dashArray. */
        dash?: Number;
        /** If true the element is fixed and can not be dragged around. The element will be repositioned on zoom and moveOrigin events. */
        fixed?: Boolean;
        /** If true a label will display the element's name. */
        withLabel?: Boolean;
        /** Display tag for this element. */
        labeled?: string | Function;
        /** Display tag for this element. */
        labelled?: string | Function;
        /** Attributes for the line label. */
        label?: LabelAttributes;
        /** If enabled:true the (stroke) element will get a customized shadow.Customize color and opacity: If the object's RGB stroke color is [r,g,b] and its opacity is op, and the shadow parameters color is given as [r', g', b'] and opacity as op' the shadow will receive the RGB color[blend*r + r', blend*g + g', blend*b + b']and its opacity will be equal to op * op'. Further, the parameters blur and offset can be adjusted.This attribute is only available with SVG, not with canvas. */
        shadow?: Object;
        /** If true, KaTeX will be used to render the input string. */
        useKatex?: Boolean;
        /** Snaps the element or its parents to the grid. Currently only relevant for points, circles, and lines. Points are snapped to grid directly, on circles and lines it's only the parent points that are snapped */
        snapToGrid?: Boolean;
        /** If some size of an element is controlled by a function, like the circle radius or segments of fixed length, this attribute controls what happens if the value is negative. By default, the absolute value is taken. If true, the maximum of 0 and the value is used. */
        nonnegativeOnly?: Boolean;
        /** Draw label for this Element? */
        drawLabels?: Boolean;
        /** Control the attribute ”checked” of the HTML checkbox. */
        checked?: Boolean;
        /** Size in pixels */
        size?: Number;
        /** Tick face for major ticks of finite length.By default (face: '|') this is a straight line. Possible other values are ''. These faces are used in JXG.Hatch for hatch marking parallel lines. */
        face?: String;
        /** Include the the zero line in the grid */
        drawZero?: Boolean;
        /** The stroke color of the given geometry element when the user moves the mouse over it. */
        highlightStrokeColor?: String;
        /** Opacity for stroke color when the object is highlighted. */
        highlightStrokeOpacity?: Number;
        /** Width of the element's stroke when the mouse is pointed over it. */
        highlightStrokeWidth?: Number;
        /** Controls if an element can get the focus with the tab key. tabindex corresponds to the HTML attribute of the same name. See descriptiona at MDN. The additional value ”null” completely disables focus of an element. The value will be ignored if keyboard control of the board is not enabled or the element is fixed or not visible. */
        tabindex?: Number;
        /** Set display name  */
        name?: String;
    }
    interface GeometryElement3DAttributes {
        /** used by V2 vector math library */
        scaleXY?: Number;
        /** Set whether the element is visibledisplay name  */
        visible?: Boolean;
    }
    interface ChartAttributes extends GeometryElementAttributes {
        /** Select type of chart. */
        chartStyle?: `bar` | `line`;
        /**  */
        width?: Number;
        /**  */
        labels?: any[];
        /**  */
        colorArray?: string[];
        /**  */
        label?: LabelAttributes;
    }
    interface CircleAttributes extends GeometryElementAttributes {
        /** Attributes for center point. */
        center?: GeometryElementAttributes;
        /** If true, moving the mouse over inner points triggers hasPoint. */
        hasInnerPoints?: Boolean;
        /** Attributes for center point. */
        point?: Point;
        /** Attributes for center point. */
        point2?: Point;
    }
    interface CompositionAttributes {
        /** used by V2 vector math library */
        scaleXY?: Number;
    }
    interface CurveAttributes extends GeometryElementAttributes {
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
        /** Number of points used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is false. */
        numberPointsHigh?: Number;
        /** Number of points used for plotting triggered by move events (i.e. lower quality plotting but fast) in case Curve#doAdvancedPlot is false. */
        numberPointsLow?: Number;
        /** Select the version of the plot algorithm.Version 1 is very outdatedVersion 2 is the default version in JSXGraph v0.99.*, v1.0, and v1.1, v1.2.0Version 3 is an internal version that was never published ina stable version.Version 4 is available since JSXGraph v1.2.0Version 4 plots correctly logarithms if the function term is supplied as string (i.e. as JessieCode) */
        plotVersion?: Number;
        /** Apply Ramer-Douglas-Peuker smoothing. */
        RDPsmoothing?: Boolean;
        /** Recursion depth used for plotting triggered by up events (i.e. high quality plotting) in case Curve#doAdvancedPlot is true. */
        recursionDepthHigh?: Number;
        /** Number of points used for plotting triggered by move events in case (i.e. lower quality plotting but fast) Curve#doAdvancedPlot is true. */
        recursionDepthLow?: Number;
    }
    interface BezierCurveAttributes extends CurveAttributes {
    }
    interface GroupAttributes extends CompositionAttributes {
    }
    interface ImageAttributes extends GeometryElementAttributes {
        /** List of attractor elements. If the distance of the image is less than attractorDistance the image is made to glider of this element. */
        attractors?: Element[];
        /** Defines the CSS class used by the image. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. opacity. The default CSS class is defined in jsxgraph.css. */
        cssClass?: String;
        /** Defines the CSS class used by the image when highlighted. CSS attributes defined in this class will overwrite the corresponding JSXGraph attributes, e.g. highlightFillOpacity. The default CSS class is defined in jsxgraph.css. */
        highlightCssClass?: String;
        /** Image rotation in degrees. */
        rotate?: Number;
        /** Defines together with Image#snapSizeY the grid the image snaps on to. The image will only snap on user coordinates which are integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the board. */
        snapSizeX?: Number;
        /** Defines together with Image#snapSizeX the grid the image snaps on to. The image will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the board. */
        snapSizeY?: Number;
    }
    interface ImplicitcurveAttributes extends GeometryElementAttributes {
        /** Horizontal resolution: distance (in pixel) between vertical lines to search for components of the implicit curve. */
        resolution_outer?: Number;
        /** Vertical resolution (in pixel) to search for components of the implicit curve. */
        resolution_inner?: Number;
        /** Angle α0 between two successive tangents: determines the smoothness of the curve. */
        alpha_0?: Number;
        /** Initial step width (in user units). */
        h_initial?: Number;
        /** Maximum step width (in user units). */
        h_max?: Number;
        /** Half of the box size (in user units) to search for existing line segments in the quadtree. */
        qdt_box?: Number;
    }
    interface LineAttributes extends GeometryElementAttributes {
        /** Configure the arrow head at the position of its first point or the corresponding intersection with the canvas borderIn case firstArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value }type=7 is the default for curves if firstArrow: true */
        firstArrow?: Boolean | Object;
        /** Attributes for the line label. */
        label?: LabelAttributes;
        /** Configure the arrow head at the position of its second point or the corresponding intersection with the canvas border.In case lastArrow is an object it has the sub-attributes:{type: 1, // possible values are 1, 2, ..., 7. Default value is 1.size: 6, // size of the arrow head. Default value is 6.// This value is multiplied with the strokeWidth of the line.// Exception: for type=7 size is ignoredhighlightSize: 6, // size of the arrow head in case the element is highlighted. Default value is 6. }type=7 is the default for curves if lastArrow: true */
        lastArrow?: Boolean | Object;
        /** This number (pixel value) controls where infinite lines end at the canvas border. If zero, the line ends exactly at the border, if negative there is a margin to the inside, if positive the line ends outside of the canvas (which is invisible). */
        margin?: Number;
        /** Attributes for first defining point of the line. */
        point1?: PointAttributes;
        /** Attributes for second defining point of the line. */
        point2?: PointAttributes;
        /** Defines together with Point#snapSizeY the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default x axes of the board. */
        snapSizeX?: Number;
        /** Defines together with Point#snapSizeX the grid the point snaps on to. The point will only snap on integer multiples to snapSizeX in x and snapSizeY in y direction. If this value is equal to or less than 0, it will use the grid displayed by the major ticks of the default ticks of the default y axes of the board. */
        snapSizeY?: Number;
        /** If set to true, the point will snap to a grid defined by Point#snapSizeX and Point#snapSizeY. */
        snapToGrid?: Boolean;
        /** If true, line stretches infinitely in direction of its first point. Otherwise it ends at point1. */
        straightFirst?: Boolean;
        /** If true, line stretches infinitely in direction of its second point. Otherwise it ends at point2. */
        straightLast?: Boolean;
        /** Attributes for ticks of the line. */
        ticks?: Object;
        /** If set to true, Line#firstArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
        touchFirstPoint?: Boolean;
        /** If set to true, Line#lastArrow is set to true and the point is visible, the arrow head will just touch the circle line of the start point of the line. */
        touchLastPoint?: Boolean;
    }
    interface PointAttributes extends GeometryElementAttributes {
        /** There are different point styles which differ in appearance. Posssible values are Value InputOutput crossx circleo square, [][] plus+ minus- divide| diamond<> triangleup^, a, A triangledownv triangleleft< triangleright> */
        face?: String;
        /** If true, the infobox is shown on mouse/pen over, if false not. If the value is 'inherit', the value of JXG.Board#showInfobox is taken. true | false | 'inherit' */
        showInfobox?: Boolean | String;
        /** If set to true, the point will snap to a grid of integer multiples of Point#snapSizeX and Point#snapSizeY (in user coordinates).The coordinates of the grid points are either integer multiples of snapSizeX and snapSizeY (given in user coordinates, not pixels) or are the intersection points of the major ticks of the boards default axes in case that snapSizeX, snapSizeY are negative. */
        snapToGrid?: Boolean;
        /** This attribute was used to determined the point layout. It was derived from GEONExT and was replaced by Point#face and Point#size. */
        style?: Number;
    }
    interface PolygonAttributes extends GeometryElementAttributes {
        /** Attributes for the polygon border lines. */
        borders?: Line;
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
    interface TextAttributes extends GeometryElementAttributes {
        /** Anchor element Point, Text or Image of the text. */
        anchor?: Object;
        /** The horizontal alignment of the text. */
        anchorX?: String;
        /** The vertical alignment of the text. */
        anchorY?: String;
        /** List of attractor elements. */
        attractors?: Element[];
        /** CSS class of the text in non-highlighted view. */
        cssClass?: String;
        /** Default CSS properties of the HTML text element. */
        cssDefaultStyle?: String;
        /** CSS properties of the HTML text element. */
        cssStyle?: String;
        /** Used to round texts given by a number. */
        digits?: Number;
        /** Determines the rendering method of the text. */
        display?: String;
        /** Sensitive area for dragging the text. */
        dragArea?: String;
        /** The font size in pixels. */
        fontSize?: Number;
        /** CSS unit for the font size of a text element. */
        fontUnit?: String;
        /** CSS class of the text in highlighted view. */
        highlightCssClass?: String;
        /** Default CSS properties of the HTML text element in case of highlighting. */
        highlightCssDefaultStyle?: String;
        /** CSS properties of the HTML text element in case of highlighting. */
        highlightCssStyle?: String;
        /** Internationalization support for texts consisting of a number only. */
        intl?: object;
        /** If enabled, the text will be handled as label. */
        isLabel?: Boolean;
        /** Object or function returning an object that contains macros for KaTeX */
        katexMacros?: Object;
        /** If set to true, the text is parsed and evaluated. */
        parse?: Boolean;
        /** Text rotation in degrees. */
        rotate?: Number;
        /** Defines together with Text#snapSizeY the grid the text snaps on to. */
        snapSizeX?: Number;
        /** Defines together with Text#snapSizeX the grid the text snaps on to. */
        snapSizeY?: Number;
        /** If true, the input will be given to ASCIIMathML before rendering. */
        useASCIIMathML?: Boolean;
        /** If set to true and caja's sanitizeHTML function can be found it will be used to sanitize text output. */
        useCaja?: Boolean;
        /** If true, KaTeX will be used to render the input string. */
        useKatex?: Boolean;
        /** If true, MathJax will be used to render the input string. */
        useMathJax?: Boolean;
    }
    interface TicksAttributes extends GeometryElementAttributes {
        /** Determine the position of the tick with value 0. 'left' means point1 of the line, 'right' means point2, and 'middle' is equivalent to the midpoint of the defining points. This attribute is ignored if the parent line is of type axis. */
        anchor?: String;
        /** Format tick labels that were going to have scientific notation like 5.00e+6 to look like 5•10⁶. */
        beautifulScientificTickLabels?: Boolean;
        /** If a label exceeds Ticks#maxLabelLength this determines the number of digits used to shorten the tick label. */
        digits?: Number;
        /** Draw labels yes/no */
        drawLabels?: Boolean;
        /** Draw the zero tick, that lies at line.point1? */
        drawZero?: Boolean;
        /** Tick face for major ticks of finite length.By default (face: '|') this is a straight line. Possible other values are ''. These faces are used in JXG.Hatch for hatch marking parallel lines. */
        face?: String;
        /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). The third parameter is a null, number or a string. In the latter two cases, this value is taken. Returns a string. */
        generateLabelText?: Function;
        /** A function that expects two JXG.Coords, the first one representing the coordinates of the tick that is to be labeled, the second one the coordinates of the center (the tick with position 0). */
        generateLabelValue?: Function;
        /** If true, ignore the tick endings attribute for infinite (full height) ticks. This affects major and minor ticks. */
        ignoreInfiniteTickEndings?: Boolean;
        /** Whether line boundaries should be included or not in the lower and upper bounds when creating ticks. In mathematical terms: if a segment considered as interval is open (includeBoundaries:false) or closed (includeBoundaries:true). In case of open interval, the interval is shortened by a small ε. */
        includeBoundaries?: Boolean;
        /** Let JSXGraph determine the distance between ticks automatically. If true, the attribute ticksDistance is ignored. The distance between ticks is affected by the size of the board and the attribute minTicksDistance (in pixel). */
        insertTicks?: Boolean;
        /** Internationalization support for ticks labels. */
        intl?: Object;
        /** Attributes for the ticks labels */
        label?: LabelAttributes;
        /** User defined labels for special ticks. Instead of the i-th tick's position, the i-th string stored in this array is shown. If the number of strings in this array is less than the number of special ticks, the tick's position is shown as a fallback. */
        labels?: String[];
        /** Total height of a major tick. If negative the full height of the board is taken. */
        majorHeight?: Number;
        /** Decides in which direction major ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
        majorTickEndings?: [Number, Number];
        /** The maximum number of characters a tick label can use. */
        maxLabelLength?: Number;
        /** Total height of a minor tick. If negative the full height of the board is taken. */
        minorHeight?: Number;
        /** The number of minor ticks between two major ticks. */
        minorTicks?: Number;
        /** Minimum distance in pixel of equidistant ticks in case insertTicks==true. */
        minTicksDistance?: Number;
        /** Scale the ticks but not the tick labels. */
        scale?: Number;
        /** A string that is appended to every tick, used to represent the scale factor given in Ticks#scale. */
        scaleSymbol?: String;
        /** Decides in which direction minor ticks are visible. Possible values are either the constants 0=false or 1=true or a function returning 0 or 1.In case of [0,1] the tick is only visible to the right of the line. In case of [1,0] the tick is only visible to the left of the line. */
        tickEndings?: [Number, Number];
        /** The default distance (in user coordinates, notpixels) between two ticks. Please be aware that this value does not have to be used if Ticks#insertTicks is set to true. */
        ticksDistance?: Number;
        /** By default, i.e. if ticksPerLabel==false, labels are generated for major ticks, only. If ticksPerLabel is set to a(n integer) number, this denotes the number of minor ticks between two labels. */
        ticksPerLabel?: String;
        /** Set the ticks type. Possible values are 'linear' or 'polar'. */
        type?: String;
        /** Use the unicode character 0x2212, i.e. the HTML entity &minus; as minus sign. That is −1 instead of -1. */
        useUnicodeMinus?: Boolean;
    }
    interface SectorAttributes extends CurveAttributes {
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
    interface VectorfieldAttributes extends CurveAttributes {
        /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
        arrowhead?: Object;
        /** Scaling factor of the vectors. This in contrast to slope fields, where this attribute sets the vector to the given length. */
        scale?: Object;
    }
    interface AngleAttributes extends SectorAttributes {
        /** Attributes for sub-element arc. In general, the arc will run through the first point and thus will not have the same radius as the angle sector. */
        arc?: Arc;
        /** Attributes of the dot point marking right angles. */
        dot?: Object;
        /** Sensitivity (in degrees) to declare an angle as right angle. If the angle measure is inside this distance from a rigth angle, the orthoType of the angle is used for display. */
        orthoSensitivity?: Number;
        /** Display type of the angle field in case of a right angle. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
        orthoType?: String;
        /**  */
        pointsquare?: Object;
        /** Radius of the sector, displaying the angle. The radius can be given as number (in user coordinates) or as string 'auto'. In the latter case, the angle is set to an value between 20 and 50 px. */
        radius?: Number;
        /**  */
        radiuspoint?: Object;
        /** Display type of the angle field. Possible values are 'sector' or 'sectordot' or 'square' or 'none'. */
        type?: String;
    }
    interface ArcAttributes extends CurveAttributes {
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
    interface ArrowAttributes extends LineAttributes {
    }
    interface ParallelAttributes extends LineAttributes {
        /** Attributes of helper point of normal. */
        point?: Point;
    }
    interface ArrowparallelAttributes extends ParallelAttributes {
    }
    interface AxisAttributes extends LineAttributes {
        /** Attributes for the axis label. */
        label?: LabelAttributes;
        /** Attributes for first point the axis. */
        point1?: LineAttributes;
        /** Attributes for second point the axis. */
        point2?: LineAttributes;
        /** Attributes for ticks of the axis. */
        ticks?: TicksAttributes;
    }
    interface BisectorAttributes extends LineAttributes {
        /** Attributes for the helper point of the bisector. */
        point?: Point;
    }
    interface BisectorlinesAttributes extends CompositionAttributes {
        /** Attributes for first line. */
        line1?: Line;
        /** Attributes for second line. */
        line2?: Line;
    }
    interface ButtonAttributes extends TextAttributes {
        /** Control the attribute ”disabled” of the HTML button. */
        disabled?: Boolean;
    }
    interface CardinalsplineAttributes extends CurveAttributes {
        /** Controls if the data points of the cardinal spline when given as arrays should be converted into JXG.Points. */
        createPoints?: Boolean;
        /** If set to true, the supplied coordinates are interpreted as [[x_0, y_0], [x_1, y_1], p, ...]. Otherwise, if the data consists of two arrays of equal length, it is interpreted as [[x_o x_1, ..., x_n], [y_0, y_1, ..., y_n]] */
        isArrayOfCoordinates?: Boolean;
        /** Attributes for the points generated by Cardinalspline in cases createPoints is set to true */
        points?: Object;
    }
    interface CheckboxAttributes extends TextAttributes {
        /** Control the attribute ”checked” of the HTML checkbox. */
        checked?: Boolean;
        /** Control the attribute ”disabled” of the HTML checkbox. */
        disabled?: Boolean;
    }
    interface CircumcenterAttributes extends PointAttributes {
    }
    interface CircumcircleAttributes extends CircleAttributes {
        /** Attributes for center point. */
        center?: GeometryElementAttributes;
    }
    interface CircumcircleArcAttributes extends ArcAttributes {
        /** Attributes for center point. */
        center?: Point;
    }
    interface CircumcircleSectorAttributes extends SectorAttributes {
    }
    interface CombAttributes extends CurveAttributes {
        /** Angle - given in radians - under which comb elements are positioned. */
        angle?: Number;
        /** Frequency of comb elements. */
        frequency?: Number;
        /** Attributes for first defining point of the comb. */
        point1?: LineAttributes;
        /** Attributes for second defining point of the comb. */
        point2?: LineAttributes;
        /** Should the comb go right to left instead of left to right. */
        reverse?: Boolean;
        /** Width of the comb. */
        width?: Number;
    }
    interface ConicAttributes extends CurveAttributes {
        /** Attributes for center point. */
        center?: Point;
        /** Attributes for foci points. */
        foci?: Point;
        /** Attributes for parabola line in case the line is given by two points or coordinate pairs. */
        line?: Line;
        /** Attributes for five points defining the conic, if some of them are given as coordinates. */
        point?: Point;
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
    interface FunctiongraphAttributes extends CurveAttributes {
    }
    interface GliderAttributes extends PointAttributes {
    }
    interface GridAttributes extends CurveAttributes {
        /** Include the the zero line in the grid */
        drawZero?: Boolean;
        /** Include the the boundary lines in the grid */
        includeBoundaries?: Boolean;
        /** Attributes for Major Grid Elements */
        major?: GeometryElementAttributes;
        /** Attributes for Minor Grid Elements */
        minor?: GeometryElementAttributes;
        /** Number of elements in minor grid between elements of the major grid. */
        minorElements?: Number | 'auto';
        /**  */
        snapSizeX?: Boolean;
        /**  */
        snapSizeY?: Boolean;
        /**  */
        snapToGrid?: Boolean;
    }
    interface HatchAttributes extends TicksAttributes {
    }
    interface HyperbolaAttributes extends ConicAttributes {
    }
    interface IncenterAttributes extends PointAttributes {
    }
    interface IncircleAttributes extends CircleAttributes {
        /** Attributes of circle center. */
        center?: GeometryElementAttributes;
    }
    interface InequalityAttributes extends CurveAttributes {
        /** By default an inequality is less (or equal) than. Set inverse to true will consider the inequality greater (or equal) than. */
        inverse?: Boolean;
    }
    interface InputAttributes extends TextAttributes {
        /** Control the attribute ”disabled” of the HTML input field. */
        disabled?: Boolean;
        /** Control the attribute ”maxlength” of the HTML input field. */
        maxlength?: Number;
    }
    interface IntegralAttributes extends CurveAttributes {
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
    interface IntersectionAttributes extends PointAttributes {
        /**  */
        alwaysIntersect?: Boolean;
    }
    interface LabelAttributes extends TextAttributes {
    }
    interface MajorArcAttributes extends CurveAttributes {
    }
    interface MajorSectorAttributes extends CurveAttributes {
    }
    interface MidpointAttributes extends PointAttributes {
    }
    interface MinorArcAttributes extends CurveAttributes {
    }
    interface MinorSectorAttributes extends CurveAttributes {
    }
    interface mirrorelementAttributes extends GeometryElementAttributes {
        /** Attributes of circle center, i.e. the center of the circle, if a circle is the mirror element and the transformation type is 'Euclidean' */
        center?: Point;
        /** Attributes of mirror point, i.e. the point along which the element is mirrored. */
        point?: Point;
        /** Type of transformation. Possible values are 'Euclidean', 'projective'.If the value is 'Euclidean', the mirror element of a circle is again a circle, otherwise it is a conic section. */
        type?: String;
    }
    interface MirrorpointAttributes extends PointAttributes {
    }
    interface NonReflexAngleAttributes extends AngleAttributes {
    }
    interface NormalAttributes extends LineAttributes {
        /** Attributes of helper point of normal. */
        point?: Point;
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
        parallelpoint?: DisplayPoint;
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
        type?: String;
    }
    interface ReflexAngleAttributes extends AngleAttributes {
    }
    interface RegularPolygonAttributes extends PolygonAttributes {
        /** Attributes for the polygon border lines. */
        borders?: Line;
        /** If true, moving the mouse over inner points triggers hasPoint. */
        hasInnerPoints?: Boolean;
        /** Attributes for the polygon vertices.   eg: {vertices: { opacity: 0 }}, */
        vertices?: GeometryElementAttributes;
        /** Is the polygon bordered by lines? */
        withLines?: Boolean;
    }
    interface SemicircleAttributes extends ArcAttributes {
        /** Attributes for center point of the semicircle. */
        center?: Point;
    }
    interface SliderAttributes extends GliderAttributes {
        /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
        stepWidth?: Number;
        /** Attributes for the base line of the slider. */
        baseline?: GeometryElementAttributes;
        /** Attributes for the highlighting line of the slider. */
        highline?: GeometryElementAttributes;
        /** The number of digits of the slider value displayed in the optional text. */
        digits?: Number;
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
        /** Size of slider point. */
        size?: Number;
        /** If the difference between the slider value and one of the elements of snapValues is less than this number (in user coordinate units), the slider will snap to that value. */
        snapValueDistance?: Number;
        /** List of values to snap to. If the glider is within snapValueDistance (in user coordinate units) of one of these points, then the glider snaps to that point. */
        snapValues?: [Number, Number];
        /** The slider only returns integer multiples of this value, e.g. for discrete values set this property to 1. For continuous results set this to -1. */
        snapWidth?: Number;
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
    interface SlopefieldAttributes extends VectorfieldAttributes {
        /** Customize arrow heads of vectors. Be careful! If enabled this will slow down the performance. Fields are:enabled: Booleansize: length of the arrow head legs (in pixel)angle: angle of the arrow head legs In radians. */
        arrowhead?: Object;
        /** Set length of the vectors in user coordinates. This in contrast to vector fields, where this attribute just scales the vector. */
        scale?: Object;
    }
    interface SlopetriangleAttributes extends LineAttributes {
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
    interface SplineAttributes extends CurveAttributes {
    }
    interface TangentAttributes extends LineAttributes {
    }
    interface TapemeasureAttributes extends SegmentAttributes {
        /** The precision of the tape measure value displayed in the optional text. */
        digits?: Number;
        /** Attributes for the tape measure label. */
        label?: LabelAttributes;
        /** Attributes for first helper point defining the tape measure position. */
        point1?: LineAttributes;
        /** Attributes for second helper point defining the tape measure position. */
        point2?: LineAttributes;
        /** The precision of the tape measure value displayed in the optional text. Replaced by the attribute digits */
        precision?: Number;
        /** Text rotation in degrees. */
        rotate?: Number;
        /** Attributes for the ticks of the tape measure. */
        ticks?: Ticks;
        /** Show tape measure label. */
        withLabel?: Boolean;
        /** Show tape measure ticks. */
        withTicks?: Boolean;
    }
    interface TracecurveAttributes extends CurveAttributes {
        /** The number of evaluated data points. */
        numberPoints?: Number;
    }
    interface TransformAttributes extends GeometryElementAttributes {
    }
    interface View3DAttributes extends GeometryElement3DAttributes {
        /** Choose the projection type to be used: `parallel` or `central`. `parallel` is parallel projection, also called orthographic projection.   `central` is central projection, also called perspective projection */
        projection?: `parallel` | `central`;
        /** Support occlusion by ordering points? */
        depthorderpoints?: Boolean;
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
    }
    type NumberFunction = Number | Function;
    /** A 'point' has a position in space.  The only characteristic that distinguishes one point from another is its position. */
    type point = [NumberFunction, NumberFunction] | NumberFunction[];
    type line = [Point | point, Point | point];
    type arrayNumber = Number[];
    type arrayNumber2 = arrayNumber | Number;
    type matAny = arrayNumber2[];
    interface LabelAttributes extends TextAttributes {
        /** Automatic position of label text.*/
        autoPosition?: Boolean;
        /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element. */
        autoPositionMaxDistance?: Number;
        /** The auto position algorithm tries to put a label to a conflict-free position around it's anchor element.*/
        autoPositionMinDistance?: Number;
        /** Label offset from label anchor. */
        offset?: [Number, Number];
        /** Possible string values for the position of a label for label anchor points.  First and Last are only for lines. */
        position?: 'first' | 'last' | 'lft' | 'rt' | 'top' | 'bot' | 'ulft' | 'urt' | 'llft' | 'lrt';
    }
    interface DisplayPoint extends ParallelpointAttributes {
        size?: Number;
        face?: String;
    }
    interface VertexAttributes {
        visible?: Boolean;
    }
    interface PanAttributes {
        enabled?: Boolean;
        needTwoFingers?: Boolean;
    }
    interface InitBoardAttributes {
        /** Time (in msec) between two animation steps. */
        animationDelay?: Number;
        /** Show default axis. */
        axis?: boolean;
        /** Bounding box of the visible area in user coordinates. [left,top,right,bottom] */
        boundingbox?: [Number, Number, Number, Number];
        /** Enable browser scrolling on touch interfaces if the user double taps into an empty region of the board. */
        browserPan?: Boolean;
        /** Attributes for the default axes in case of the attribute axis:true in JXG.JSXGraph#initBoard. */
        defaultAxes?: {
            x?: AxisAttributes;
            y?: AxisAttributes;
        };
        /** if grid true, then draw the zeroGrid? */
        drawZero?: Boolean;
        /** Attribute(s) to control the fullscreen icon. */
        fullscreen?: Object;
        /** Show grid? */
        grid?: Boolean;
        /** If set to true, the ratio between horizontal and vertical unit sizes stays constant - independent of size changes of the hosting HTML div element. */
        keepAspectRatio?: Boolean;
        /** Maximum frame rate of the board, i.e. */
        maxFrameRate?: Number;
        /** Control the possibilities for panning interaction (i.e. */
        pan?: PanAttributes;
        /** Allow user interaction by registering mouse, pointer, keyboard or touch events. */
        registerEvents?: Object;
        /** Listen to fullscreen event. */
        registerFullscreenEvent?: Boolean;
        /** Listen to resize events, i.e. */
        registerResizeEvent?: Boolean;
        /** Control if JSXGraph reacts to resizing of the JSXGraph container element by the user / browser. */
        resize?: PanAttributes;
        /** Show copyright string in canvas. */
        showCopyright?: Boolean;
        /** Show a button in the navigation bar to start fullscreen mode. */
        showFullscreen?: Boolean;
        /** If true, the infobox is shown on mouse/pen over for all points which have set their attribute showInfobox to 'inherit'. */
        showInfobox?: Boolean;
        /** Display of navigation arrows and zoom buttons in the navigation bar. */
        showNavigation?: Boolean;
        /** Show a button in the navigation bar to force reload of a construction. */
        showReload?: Boolean;
        /** Show a button in the navigation bar to enable screenshots. */
        showScreenshot?: Boolean;
        /** Display of zoom buttons in the navigation bar. */
        showZoom?: Boolean;
        /** set a visual theme for the board */
        theme?: String;
        /** Control the possibilities for zoom interaction. */
        zoom?: PanAttributes;
    }
    export class JSXMath {
        static board: TSXBoard;
    }
    export class IntervalArithmetic {
    }
    export class PolyMonomial {
    }
    export class PolyPolynomial {
    }
    export class Symbolic {
    }
    /** JSXGraph library wrapped in TypeScript */
    export class TSXGraph {
        static defaultAttrs: Object;
        /** Initialize a new board. */
        static initBoard(html: string, attributes?: InitBoardAttributes): TSXBoard;
        static freeBoard(board: TSXBoard): void;
        static dereference(params: any | any[]): any[];
        static defaultAttributes(attrs: Object): Object;
    }
    export type spaceIcon = 'icons/alien-1.png' | 'icons/alien-2.png' | 'icons/alien-3.png' | 'icons/alien-4.png' | 'icons/alien-5.png' | 'icons/alien-abduction.png' | 'icons/alien-ship-2.png' | 'icons/alien-ship-beam.png' | 'icons/alien-ship.png' | 'icons/asteroid-2.png' | 'icons/asteroid.png' | 'icons/astronaut-helmet.png' | 'icons/atom.png' | 'icons/atronaut.png' | 'icons/bb-8.png' | 'icons/big-dipper.png' | 'icons/black-hole.png' | 'icons/brain-slug.png' | 'icons/cassiopeia.png' | 'icons/chewbacca.png' | 'icons/comet.png' | 'icons/cylon-raider.png' | 'icons/darth-vader.png' | 'icons/death-star.png' | 'icons/earth.png' | 'icons/falling-asteroid.png' | 'icons/falling-space-capsule.png' | 'icons/falling-star.png' | 'icons/flag.png' | 'icons/fly\ icon\ licence.png' | 'icons/flyicon.png' | 'icons/galaxy.png' | 'icons/intl-space-station.png' | 'icons/jupiter.png' | 'icons/landing-space-capsule.png' | 'icons/laser-gun.png' | 'icons/mars.png' | 'icons/millennium-falcon.png' | 'icons/mission-control.png' | 'icons/moon-full-almost.png' | 'icons/moon-full-moon.png' | 'icons/moon-last-quarter.png' | 'icons/moon-new-moon.png' | 'icons/moon-waning-cresent.png' | 'icons/moon-waning-gibbous.png' | 'icons/morty.png' | 'icons/neptune.png' | 'icons/pluto.png' | 'icons/princess-leia.png' | 'icons/rick.png' | 'icons/ring-ship.png' | 'icons/rocket-launch.png' | 'icons/rocket.png' | 'icons/satellite.png' | 'icons/saturn.png' | 'icons/solar-system.png' | 'icons/space-capsule.png' | 'icons/space-cockpit.png' | 'icons/space-invader.png' | 'icons/space-observatory.png' | 'icons/space-rocket.png' | 'icons/space-rover-1.png' | 'icons/space-rover-2.png' | 'icons/space-satellite-dish.png' | 'icons/space-ship_1.png' | 'icons/space-ship_2.png' | 'icons/space-ship_3.png' | 'icons/space-ship.png' | 'icons/space-shuttle-launch.png' | 'icons/space-shuttle.png' | 'icons/sputnick-1.png' | 'icons/sputnick-2.png' | 'icons/star.png' | 'icons/stars.png' | 'icons/stormtrooper.png' | 'icons/sun.png' | 'icons/telescope.png' | 'icons/uranus.png' | 'icons/venus.png' | 'icons/moon-dreamy.png';
    interface ConicIface {
        z_ignore: Object;
        /** Line defined by solution to a*x + b*y = c */
        line(a: Number | Function, b: Number | Function, c?: Number | Function, attributes?: LineAttributes): Line;
        /** Just as two (distinct) points determine a line, five points (no three collinear) determine a conic. */
        fivePoints(A: Point | point, B: Point | point, C: Point | point, D: Point | point, E: Point | point, attributes?: ConicAttributes): Conic;
        /** Build a plane algebraic curve from six numbers that satisfies Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, and A,B,C not all zero.  This might be a circle, ellipse, parabola, or hyperbola. */
        sixNumbers(A: Number, B: Number, C: Number, D: Number, E: Number, F: Number, attributes?: ConicAttributes): Conic;
        /** An Ellipse from 3 points */
        threePoints(focalPoint1: Point | point, focalPoint2: Point | point, outerPoint: Point | point, attributes?: EllipseAttributes): Ellipse;
        /** Three Points, plus start and end. */
        ellipseArc(focalPoint1: Point | point, focalPoint2: Point | point, outerPoint: Point | point, startAngle: Number | Function, endAngle: Number | Function, attributes?: EllipseAttributes): Ellipse;
    }
    interface TransformIface {
        z_ignore: Object;
        /** Move a distance from a point */
        translate(x: Number | Function, y: Number | Function, attributes?: TransformAttributes): Transform;
        /** Increase distance from a point by a factor */
        scale(x: number | Function, y: number | Function, attributes?: TransformAttributes): Transform;
        /** Rotate by angle around a point */
        rotate(angle: Number | Function, point?: Point | point, attributes?: TransformAttributes): Transform;
        /** Reflect around a line */
        reflect(x: Number | Function, y: Number | Function, attributes?: TransformAttributes): Transform;
        /** Move proportionally to distance */
        shear(x: Number | Function, y: Number | Function, attributes?: TransformAttributes): Transform;
        /** Transform using a MAT3 */
        generic(a: Number, b: Number, c: Number, d: Number, e: Number, f: Number, g: Number, h: Number, i: Number, attributes?: TransformAttributes): Transform;
        /** A new Point from a Point and Transform */
        point(p: Point | point, t: Transform | Transform[], attributes?: PointAttributes): Point;
        /** A new Circle from a Circle and Transform */
        circle(c: Circle, t: Transform | Transform[], attributes?: CircleAttributes): Circle;
        /** A new Curve from a Curve and Transform */
        curve(c: Curve, t: Transform | Transform[], attributes?: CurveAttributes): Curve;
    }
    interface JSXMathJSXMathIface {
    }
    interface MatrixJSXMathIface {
        /** Calculates the cross product of two vectors both of length three. */
        crossProduct(c1: matAny, c2: matAny): matAny;
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        frustum(left: Number, right: Number, top: Number, bottom: Number, near: Number, far: Number): matAny;
        /** Generates an identity matrix of size m x n.  (Yes it is possible to have a non-square identity matrix) */
        identity(m: number, n: number): matAny;
        /** Inner product of two vectors a and b.  Inner product is a generalization of Dot product for an arbitrary vector space. */
        innerProduct(v1: number[], v2: number[]): number;
        /** Compute the inverse of an nxn matrix with Gauss elimination.  Returns [] if there is a singularity. */
        inverse(mat: matAny): matAny;
        /** Computes the product of the two matrices mat1*mat2. */
        matMatMult(mat1: matAny, mat2: matAny): matAny;
        /** Initializes a matrix as an array of rows with the given value. */
        matrix(nRows: number, mCols: number, init: number): matAny;
        /** Multiplies a vector vec to a matrix mat: mat * vec.  The matrix is a two-dimensional array of numbers. The inner arrays describe the columns, the outer ones the matrix rows. eg: [[2,1],[3,2]] where [2,1] is the first colummn. */
        matVecMult(mat: matAny, vec: number[]): number[];
        /** Generates a 4x4 matrix for 3D to 2D projections. */
        projection(fov: Number, ratio: Number, near: Number, far: Number): matAny;
        /** Transposes a matrix given as a two dimensional array. */
        transpose(mat: matAny): matAny;
        /** Initializes a vector of size n wih coefficients set to the given value. */
        vector(n: number, init: number): number[];
    }
    interface GeometryJSXMathIface {
        affineDistance(): Number[];
        affineRatio(): Number[];
        angle(): Number[];
        angleBisector(): Number[];
        bezierArc(): Number[];
        calcLabelQuadrant(): Number[];
        calcLineDelimitingPoints(): Number[];
        calcStraight(): Number[];
        circumcenter(): Number[];
        circumcenterMidpoint(): Number[];
        det3p(): Number[];
        distance(): Number[];
        distPointLine(): Number[];
        GrahamScan(): Number[];
        intersectionFunction(): Number[];
        isSameDir(): Number[];
        isSameDirection(): Number[];
        meet(): Number[];
        meetBezierCurveRedBlueSegments(): Number[];
        meetBeziersegmentBeziersegment(): Number[];
        meetCircleCircle(): Number[];
        meetCurveCurve(): Number[];
        meetCurveLine(): Number[];
        meetCurveLineContinuous(): Number[];
        meetCurveLineDiscrete(): Number[];
        meetCurveRedBlueSegments(): Number[];
        meetLineBoard(): Number[];
        meetLineCircle(): Number[];
        meetLineLine(): Number[];
        meetPathPath(): Number[];
        meetPolygonLine(): Number[];
        meetSegmentSegment(): Number[];
        perpendicular(): Number[];
        pnpoly(): Number[];
        projectCoordsToBeziersegment(): Number[];
        projectCoordsToCurve(): Number[];
        projectCoordsToPolygon(): Number[];
        projectCoordsToSegment(): Number[];
        projectPointToBoard(): Number[];
        projectPointToCircle(): Number[];
        projectPointToCurve(): Number[];
        projectPointToLine(): Number[];
        projectPointToPoint(): Number[];
        projectPointToTurtle(): Number[];
        rad(): Number[];
        reflection(): Number[];
        reuleauxPolygon(): Number[];
        rotation(): Number[];
        signedPolygon(): Number[];
        signedTriangle(): Number[];
        sortVertices(): Number[];
        trueAngle(): Number[];
        windingNumber(): Number[];
    }
    interface NumericsJSXMathIface {
        bezier(points: Point[]): [Function, Function, number, Function];
        bspline(points: Point[], order: number): any[];
        CardinalSpline(points: Point[], tau: number | Function): Function[];
    }
    interface StatisticsJSXMathIface {
        /** Generate value of a standard normal random variable with given mean and standard deviation.
                                          See {@link https://en.wikipedia.org/wiki/Normal_distribution} */
        randomNormal(mean: number, stdDev: number): number;
        /** Generate value of a uniform distributed random variable in the interval [a, b]. */
        randomUniform(a: number, b: number): number;
        /** Generate value of a random variable with exponential distribution.
                                           See {@link https://en.wikipedia.org/wiki/Exponential_distribution}.
                                           Algorithm: D.E. Knuth, TAOCP 2, p. 128. */
        randomExponential(lambda: number): number;
        /** Generate value of a random variable with gamma distribution of order alpha.  Default scale is 1. Default threshold is 0.
                                          See {@link https://en.wikipedia.org/wiki/Gamma_distribution}.
                                          Algorithm: D.E. Knuth, TAOCP 2, p. 129. */
        randomGamma(shape: number, scale?: number, threshold?: number): number;
        /** Generate value of a random variable with beta distribution with shape parameters alpha and beta.
                                           See {@link https://en.wikipedia.org/wiki/Beta_distribution}. */
        randomBeta(alpha: number, beta: number): number;
        /** Generate value of a random variable with chi-square distribution with k (>0) degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Chi-squared_distribution}. */
        randomChisquare(k: number): number;
        /** Generate value of a random variable with F-distribution with d1 and d2 degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/F-distribution}. */
        randomF(d1: number, d2: number): number;
        /** Generate value of a random variable with Students-t-distribution with v degrees of freedom.
                                           See {@link https://en.wikipedia.org/wiki/Student%27s_t-distribution}. */
        randomT(v: number): number;
        /** Generate values for a random variable in binomial distribution with parameters n and p
                                           See {@link https://en.wikipedia.org/wiki/Binomial_distribution}. */
        randomBinomial(n: number, p: number): number;
        /** Generate values for a random variable in geometric distribution with propability <i>p</i>.
                                           See {@link https://en.wikipedia.org/wiki/Geometric_distribution}. */
        randomGeometric(p: number): number;
        /** Generate values for a random variable in Poisson distribution with mean <i>mu</i>..
                                           See {@link https://en.wikipedia.org/wiki/Poisson_distribution}. */
        randomPoisson(mu: number): number;
        /** Generate values for a random variable in hypergeometric distribution.
                                           See {@link https://en.wikipedia.org/wiki/Hypergeometric_distribution}
                                           Samples are drawn from a hypergeometric distribution with specified parameters, <i>good</i> (ways to make a good selection),
                                           <i>bad</i> (ways to make a bad selection), and <i>samples</i> (number of items sampled, which is less than or equal to <i>good + bad</i>). */
        randomHypergeometric(good: number, bad: number, samples: number): number;
        /** Compute the histogram of a dataset.  Range can be false or [min(x), max(x)]. If density is true then normalize the counts by dividing by sum(counts). Returns [number[],number[]], the first array contains start value of bins, the second array countains the counts. */
        histogram(data: number[], bins?: number, range?: boolean | [number, number], density?: boolean, cumulative?: boolean): [number[], number[]];
        /** Determines the absolute value of every given value.  */
        abs(arr: number[] | number): Number[] | Number;
    }
    export class TSXBoard {
        board: TSXBoard | null;
        private printLineNumber;
        /** Version of underlying JSX library */
        get version(): String;
        get defaultAxes(): GeometryElement;
        get canvasWidth(): number;
        get canvasHeight(): number;
        /** allows setting default attributes by class or across the board */
        setDefaultAttributes(attrs: Object): void;
        /** get a 2D canvas context (warning: cannot mix SVG and canvas) */
        getCanvasCTX(): CanvasRenderingContext2D;
        setBoundingBox(left: Number, top: Number, right: Number, bottom: Number): TSXBoard;
        getBoundingBox(): [number, number];
        addGrid(): TSXBoard;
        removeGrids(): TSXBoard;
        addAxis(): Board;
        setAttribute(attrs: object): Board;
        /** Legacy method to create elements. */
        create(elType: string, params?: any[], attributes?: Object): GeometryElement;
        /** force board update */
        update(): void;
        /** run through the board and call update() on each element */
        updateElements(): void;
        on(event: string, handler: (e: Event) => void, context?: unknown): void;
        print(...args: any[]): void;
        suspendUpdate(): void;
        unsuspendUpdate(): void;
        private dereference;
        /** new Points from point, angle, and distance.  Angle is in radians. */
        V2AngleDistance(origin: TXG.Point, distance: number, angle: number, dest?: TXG.Point): TXG.Point;
        /**  */
        conic: ConicIface;
        /** This element is used to provide projective transformations. */
        transform: TransformIface;
        JSXMathMath: JSXMathJSXMathIface;
        MatrixMath: MatrixJSXMathIface;
        GeometryMath: GeometryJSXMathIface;
        NumericsMath: NumericsJSXMathIface;
        StatisticsMath: StatisticsJSXMathIface;
        constructor();
        /** create a chart */
        chart(f: Number[], attributes?: ChartAttributes): Chart;
        /** A circle can be constructed by providing a center and a point on the circle,
                                or a center and a radius (given as a number, function, line, or circle).
                                If the radius is a negative value, its absolute values is taken.

       *```js
                       TSX.circle(P1,1])
                       TSX.circle([0,0],[1,0])

       *```

       Also see: Circumcircle is a circle described by three points.  An Arc is a segment of a circle. */
        circle(centerPoint: Point | point, remotePoint: Point | point | Line | line | Number | Function | Circle, attributes?: CircleAttributes): Circle;
        /** Plot a set of points or a function from arrays X and Y */
        curve(xArray: number[], yArray: number[], attributes?: CurveAttributes): Curve;
        curve(xArray: Function, yArray: Function, attributes?: CurveAttributes): Curve;
        curve(xArray: number[] | Function, yArray: number[] | Function, left: NumberFunction, right: NumberFunction, attributes?: CurveAttributes): Curve;
        /** A cubic bezier curve.  The input is 3k + 1 points; those at positions k mod 3 = 0 (eg: 0, 3, 6 are the data points, the two points between each data points are the control points.

       *```js
           let points: TXG.Point[] = []
           points.push(TSX.point([-2, -1], { size: 4, color: 'blue', name: '0' }))

           points.push(TSX.point([-2, -2.5], { name: '1' }))
           points.push(TSX.point([-1, -2.5], { name: '2' }))

           points.push(TSX.point([2, -2], { size: 4, color: 'blue', name: '3' }))

           let curve = TSX.bezierCurve(points, { strokeColor: 'orange', strokeWidth: 5, fixed: false }); // Draggable curve

           // 'BezierCurve()' is just a shorthand for the following two lines:
           // let bz = TSX.NumericsMath.bezier(points)
           // let curve = TSX.curve(bz[0], bz[1])

       *```

                        */
        bezierCurve(points: Point[], attributes?: BezierCurveAttributes): Curve;
        /** Array of Points */
        group(pointArray: Point[], attributes?: GroupAttributes): Group;
        /** Display an image.  The first element is the location URL of the image.
                       A collection of space icons is provided, press CTRL+I to show the list.
                       The second parameter sets the lower left point of the image, you may need to shift the image location to center it.

       *```js
                       TSX.image('../icons/sun.png',[0,0])
                       let P1 = TSX.point([3,2],{opacity:0})
                       TSX.image(p1,[3-offest,3-offset])

       *``` */
        image(url: String | spaceIcon, lowerLeft: point, widthHeight?: [Number, Number], attributes?: ImageAttributes): Image;
        /** An implicit curve is a plane curve defined by an implicit equation relating two coordinate variables, commonly x and y. For example, the unit circle is defined by the implicit equation x2 + y2 = 1. In general, every implicit curve is defined by an equation of the form f(x, y) = 0 for some function f of two variables.  IMPLICIT means that the equation is not expressed as a solution for either x in terms of y or vice versa. */
        implicitcurve(f: Function | String, attributes?: ImplicitcurveAttributes): Implicitcurve;
        implicitcurve(f: Function | String, dfx: Function | String, dfy: Function | String, attributes?: ImplicitcurveAttributes): Implicitcurve;
        /** This element is used to provide a constructor for a general line given by two points.
                                       By setting additional properties a line can be used as an arrow and/or axis.

       *```js
                                       TSX.line([3,2],[3,3],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
                                       let P1 = TSX.point([3,2])
                                       TSX.line(p1,[3,3])

       *```

        also create lines with Segment, Arrow, Transform.Point, Circumcenter, Glider, and others.
                                        Look at .conic.line() for a line defined by the equation 'az +bx +cy = 0'
                           */
        line(p1: Point | point, p2: Point | point, attributes?: LineAttributes): Line;
        /** Create a point. If any parent elements are functions or the attribute 'fixed' is true then point will be constrained.

       *```js
                    TSX.point([3,2],{strokeColor:'blue',strokeWidth:5,strokeOpacity:.5})
                    TSX.point([3,3]),{fixed:true, showInfobox:true}
                    TSX.point([()=>p1.X()+2,()=>p1.Y()+2]) // 2 up 2 right from p1
                    TSX.point([1,2,2])  // three axis definition - [z,x,y]

       *```

        also create points with Intersection, Midpoint, Transform.Point, Circumcenter, Glider, and others. */
        point(position: NumberFunction[], attributes?: PointAttributes): Point;
        /** Array of Points */
        polygon(pointArray: Point[] | point[], attributes?: PolygonAttributes): Polygon;
        /** Display a message

       *```js
                                       TSX.text([3,2],[3,3], {fontSize:20, strokeColor:'blue'})
                                       TSX.text([0, 4], () => 'BD ' + B.distance(D).toFixed(2))
                                       TSX.text([-4, 2], '\pm\sqrt{a^2 + b^2}', { useKatex: true })

       *``` */
        text(position: Point | point, label: String | Function, attributes?: TextAttributes): Text;
        /** A circular sector is a subarea of the area enclosed by a circle. It is enclosed by two radii and an arc. */
        sector(P1: Point | point, P2: Point | point, P3: Point | point, attributes?: SectorAttributes): Sector;
        /** Vector field. Plot a vector field either given by two functions f1(x, y) and f2(x,y) or by a function f(x, y) returning an array of size 2. */
        vectorfield(fxfy: Function[], horizontalMesh?: Number[], verticalMesh?: Number[], attributes?: VectorfieldAttributes): Vectorfield;
        /** The angle element is used to denote an angle defined by three points (from, around,to), or two lines and two directions (either points or plus-or-minus 1 to indicate direction.
                    As opposed to the sector, an angle has two angle points and no radius point.

        type=='sector': Sector is displayed.

        type=='square': a parallelogram is displayed.

        type=='auto':  a square is displayed if the angle is near orthogonal.

        If no name is provided the angle label is automatically set to a lower greek letter. */
        angle(from: Point | point, around: Point | point, to: Point | point, attributes?: AngleAttributes): Angle;
        angle(line1: Line | line, line2: Line | line, direction1: [Number, Number], direction2: [Number, Number], attributes?: AngleAttributes): Angle;
        angle(line1: Line | line, line2: Line | line, dirPlusMinus1: Number, dirPlusMinus2: Number, attributes?: AngleAttributes): Angle;
        /** Create a circular Arc defined by three points (because a circle can be defined by three points - see circumcircle).

       *```js
                                   let arc = TSX.arc([-8,5],[-4,5],[-9,9]])

       *```

        To create an arc with origin, startpoint, and angle, look at MajorArc/MinorArc. */
        arc(origin: Point | point, from: Point | point, to: Point | point, attributes?: ArcAttributes): Arc;
        /** Arrow defined by two points (like a Segment) with arrow at P2

       *```js

        let arrow = TSX.arrow([-8,5],[-4,5])

       *```

        */
        arrow(p1: Point | point, p2: Point | point, attributes?: ArrowAttributes): Arrow;
        /** A line parallel to a given line (or two points), through a point. */
        parallel(line: Line | [Point, Point], point: Point | point, attributes?: ParallelAttributes): Parallel;
        parallel(lineP1: Point | point, lineP2: Point | point, Point: Point | point, attributes?: ParallelAttributes): Parallel;
        /** Create an Arrow parallel to a segment. The constructed arrow contains p3 and has the same slope as the line through p1 and p2. */
        arrowparallel(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: ArrowparallelAttributes): Arrowparallel;
        /** Create an Axis with two points (like a Line) */
        axis(p1: Point | point, p2: Point | point, attributes?: AxisAttributes): Axis;
        /** Bisect an Angle defined with three points */
        bisector(p1: Point, p2: Point, p3: Point, attributes?: BisectorAttributes): Bisector;
        /** Bisect a Line defined with two points */
        bisectorlines(l1: Line, l2: Line, attributes?: BisectorlinesAttributes): Bisectorlines;
        /** create a button */
        button(position: NumberFunction[], label: String, handler: Function, attributes?: ButtonAttributes): Button;
        /** This element is used to provide a constructor for cardinal spline curves. Create a dynamic cardinal spline interpolated curve given by sample points p_1 to p_n. */
        cardinalspline(data: Point[] | number[][], funct: Function, splineType: `uniform` | `centripetal`, attributes?: CardinalsplineAttributes): Curve;
        /** This element is used to provide a constructor for special texts containing a form checkbox element. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML checkbox element can be accessed through the sub-object 'rendNodeCheck', e.g. to add event listeners. */
        checkbox(position: NumberFunction[], label: String | Function, attributes?: CheckboxAttributes): Checkbox;
        /** Creates a Point at the center of a circle defined by 3 points */
        circumcenter(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: CircumcenterAttributes): Circumcenter;
        /** Draw a circle defined by 3 points */
        circumcircle(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: CircumcircleAttributes): Circumcircle;
        /** Draw an arc from P1 to P3 (missing P3 to P1) defined by 3 points */
        circumcircleArc(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: CircumcircleArcAttributes): CircumcircleArc;
        /** Creates a CircumCenter and draws a sector from P1 to P3 (missing P3 to P1) defined by 3 points */
        circumcircleSector(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: CircumcircleSectorAttributes): CircumcircleSector;
        /** A comb to display domains of inequalities. */
        comb(p1: Point | point, p2: Point | point, attributes?: CombAttributes): Comb;
        /** Difference of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
        curveDifference(curve1: GeometryElement, curve2: GeometryElement, attributes?: CurveDifferenceAttributes): CurveDifference;
        /** Intersection of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
        curveIntersection(curve1: GeometryElement, curve2: GeometryElement, attributes?: CurveIntersectionAttributes): CurveIntersection;
        /** Union of two closed path elements. The elements may be of type curve, circle, polygon, inequality. If one element is a curve, it has to be closed. The resulting element is of type curve. */
        curveUnion(curve1: GeometryElement, curve2: GeometryElement, attributes?: CurveUnionAttributes): CurveUnion;
        /** This element is used to provide a constructor for the graph showing the (numerical) derivative of a given curve. */
        derivative(curve: Curve, attributes?: DerivativeAttributes): Derivative;
        /** Two Points and Radius */
        ellipse(p1: Point | point, p2: Point | point, radius: Number | Function, attributes?: EllipseAttributes): Ellipse;
        /** A wrapper for element Curve with X() set to x. The graph is drawn for x in the interval [a,b] default -10 to 10.
       ```js
       let f = TSX.functiongraph((x: number) => 3 * Math.pow(x, 2))
       ``` */
        functiongraph(funct: Function, leftBorder?: Number, rightBorder?: Number, attributes?: FunctiongraphAttributes): Functiongraph;
        /** A GeometryElement like Line, Circle, or Curve, and optionally a starting point defined by [X,Y] */
        glider(hostElement: GeometryElement, attributes?: GliderAttributes): Glider;
        glider(hostElement: GeometryElement, initialPosition: number[], attributes?: GliderAttributes): Glider;
        glider(attributes?: GliderAttributes): Glider;
        /** Creates a grid to support the user with element placement or to improve determination of position. */
        grid(axis1: Axis, axis2: Axis, attributes?: GridAttributes): Grid;
        grid(attributes?: GridAttributes): Grid;
        /** Hatches can be used to mark congruent lines or curves. */
        hatch(line: Line | line, numberHatches: Number, attributes?: HatchAttributes): Hatch;
        /** This element is used to provide a constructor for an hyperbola. An hyperbola is given by two points (the foci) and a third point on the hyperbola or the length of the major axis. */
        hyperbola(point1: Point | point, point2: Point | point, point3: Point | point | Number, start?: Number, end?: Number, attributes?: HyperbolaAttributes): Hyperbola;
        /** Constructs the incenter of the triangle described by the three given points. https://mathworld.wolfram.com/Incenter.html */
        incenter(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: IncenterAttributes): Incenter;
        /** An incircle is given by three points. */
        incircle(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: IncircleAttributes): Incircle;
        /** Creates an area indicating the solution of a linear inequality or an inequality of a function graph, i.e. an inequality of type y */
        inequality(boundaryLine: Line | line | Curve, attributes?: InequalityAttributes): Inequality;
        /** This element is used to provide a constructor for special texts containing a HTML form input element. If the width of element is set with the attribute ”cssStyle”, the width of the label must be added. For this element, the attribute ”display” has to have the value 'html' (which is the default). The underlying HTML input field can be accessed through the sub-object 'rendNodeInput', e.g. to add event listeners. */
        input(position: Point | point, label: String | Function, initial: String, attributes?: InputAttributes): Input;
        /** This element is used to visualize the integral of a given curve over a given interval. */
        integral(range: Number[], curve: Curve, attributes?: IntegralAttributes): Integral;
        /** An intersection point is a point which lives on two JSXGraph elements, i.e. it is one point of the set consisting of the intersection points of the two elements. The following element types can be (mutually) intersected: line, circle, curve, polygon, polygonal chain. */
        intersection(element1: Line | Circle | Curve, element2: Line | Circle, attributes?: IntersectionAttributes): Point;
        /** A major arc is a segment of the circumference of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
        majorArc(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: MajorArcAttributes): MajorArc;
        /** A major sector is a sector of a circle having measure greater than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        majorSector(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: MajorSectorAttributes): MajorSector;
        /** A point in the middle of two given points or a line segment. */
        midpoint(p1: Point, p2: Point, attributes?: MidpointAttributes): Midpoint;
        midpoint(line: Line, attributes?: MidpointAttributes): Midpoint;
        /** A minor arc is a segment of the circumference of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the arc. */
        minorArc(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: MinorArcAttributes): MinorArc;
        /** A minor sector is a sector of a circle having measure less than or equal to 180 degrees (pi radians). It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        minorSector(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: MinorSectorAttributes): MinorSector;
        /** A mirror element of a point, line, circle, curve, polygon will be constructed. */
        mirrorelement(element: Point | Line | Circle | Curve | Polygon, acrossPoint: Point | point, attributes?: mirrorelementAttributes): mirrorelement;
        /** A mirror point will be constructed. */
        mirrorpoint(p1: Point, p2: Point, attributes?: MirrorpointAttributes): Mirrorpoint;
        /** A non-reflex angle is the acute or obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        nonReflexAngle(point1: Point, point2: Point, point3: Point, attributes?: NonReflexAngleAttributes): NonReflexAngle;
        /** A line through a given point on an element of type line, circle, curve, or turtle and orthogonal (at right angle) to that object. */
        normal(object: Line | Circle | Curve, point: Point, attributes?: NormalAttributes): Normal;
        normal(glider: Glider, attributes?: NormalAttributes): Normal;
        /** This is used to construct a point that is the orthogonal projection of a point to a line. */
        orthogonalprojection(point: Point | point, line: Line | line, attributes?: OrthogonalprojectionAttributes): Orthogonalprojection;
        /** This element is used to provide a constructor for the ”other” intersection point. */
        otherIntersection(element1: Line | Circle, element2: Line | Circle, firstIntersection: Point, attributes?: OtherIntersectionAttributes): Point;
        /** This element is used to provide a constructor for a parabola. A parabola is given by one point (the focus) and a line (the directrix). */
        parabola(focalPoint: Point | point, line: Line | line, attributes?: ParabolaAttributes): Parabola;
        /** A parallel point is given by three points, or a line and a point. Taking the Euclidean vector from the first to the second point, the parallel point is determined by adding that vector to the third point. The line determined by the first two points is parallel to the line determined by the third point and the constructed point. */
        parallelpoint(line: Line | [Point, Point], point: Point | point, attributes?: ParallelpointAttributes): Parallelpoint;
        parallelpoint(P1: Point, P2: Point, P3: Point, attributes?: ParallelpointAttributes): Parallelpoint;
        /** Create a line segment between two points. If there is a third variable then the segment has a fixed length (which may be a function) determined by the absolute value of that number. */
        segment(P1: Point | point, P2: Point | point, attributes?: SegmentAttributes): Segment;
        segment(P1: Point | point, P2: Point | point, length: number | Function, attributes?: SegmentAttributes): Segment;
        /**  */
        parallelogram(p1: Point | point, p2: Point | point, p3: Point | point, attributes?: ParallelogramAttributes): Parallelogram;
        /** Create a line orthogonal to a given line and containing a given point. If you want a Perpendicular to a Curve, look at Normal(). */
        perpendicular(line: Line | line, point: Point | point, attributes?: PerpendicularAttributes): Perpendicular;
        /** Create a point on a line where a perpendicular to a given point would intersect that line. */
        perpendicularPoint(line: Line | line, point: Point | point, attributes?: PerpendicularPointAttributes): PerpendicularPoint;
        /** Create a segment orthogonal to a given line and containing a given point.  If you want a Perpendicular to a Curve, look at Normal(). */
        perpendicularSegment(line: Line | line, point: Point | point, attributes?: PerpendicularSegmentAttributes): PerpendicularSegment;
        /** This element is used to provide a constructor for the polar line of a point with respect to a conic or a circle. */
        polarLine(conic: Conic | Circle, point: Point, attributes?: PolarLineAttributes): PolarLine;
        /** This element is used to provide a constructor for the pole point of a line with respect to a conic or a circle. */
        polePoint(conic: Conic | Circle, line: Line, attributes?: PolePointAttributes): PolePoint;
        /** Array of Points */
        polygonalChain(pointArray: Point[] | point[], attributes?: PolygonalChainAttributes): PolygonalChain;
        /** This element is used to provide a constructor for the radical axis with respect to two circles with distinct centers. The angular bisector of the polar lines of the circle centers with respect to the other circle is always the radical axis. The radical axis passes through the intersection points when the circles intersect. When a circle about the midpoint of circle centers, passing through the circle centers, intersects the circles, the polar lines pass through those intersection points. */
        radicalAxis(circle1: Circle, circle2: Circle, attributes?: RadicalAxisAttributes): RadicalAxis;
        /** A reflected element (point, polygon, line or curve) from an object of the same type and a line of reflection. */
        reflection(object: Point | Line | Curve | Polygon, reflectLine: Line, attributes?: ReflectionAttributes): Reflection;
        /** A reflex angle is the neither acute nor obtuse instance of an angle. It is defined by a center, one point that defines the radius, and a third point that defines the angle of the sector. */
        reflexAngle(point1: Point, point2: Point, point3: Point, attributes?: ReflexAngleAttributes): ReflexAngle;
        /** Constructs a regular polygon. It needs two points which define the base line and the number of vertices. */
        regularPolygon(P1: Point | point, P2: Point | point, nVertices: Number, attributes?: RegularPolygonAttributes): RegularPolygon;
        /** A semicircle is a special arc defined by two points. The arc hits both points. */
        semicircle(P1: Point | point, P2: Point | point, attributes?: SemicircleAttributes): Semicircle;
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
        slider(StartPoint: Point | point, EndPoint: Point | point, minimum_initial_maximum: [number, number, number], attributes?: SliderAttributes): Slider;
        /** Slope field. Plot a slope field given by a function f(x, y) returning a number. */
        slopefield(func: Function, xData: NumberFunction[], yData: NumberFunction[], attributes?: SlopefieldAttributes): Slopefield;
        /** A slope triangle is an imaginary triangle that helps you find the slope of a line or a line segment (use the method '.Value()' ). The hypotenuse of the triangle (the diagonal) is the line you are interested in finding the slope of. The two 'legs' of the triangle are the 'rise' and 'run' used in the slope formula. */
        slopetriangle(tangent: Point | Tangent, attributes?: SlopetriangleAttributes): Slopetriangle;
        slopetriangle(line: Line, point: Point, attributes?: SlopetriangleAttributes): Slopetriangle;
        /** This element is used to provide a constructor for (natural) cubic spline curves. Create a dynamic spline interpolated curve given by sample points p_1 to p_n. */
        spline(points: Point[] | number[][], attributes?: SplineAttributes): Curve;
        /** A tangent to a point on a line, circle, or curve.  Usually the point is a Glider. */
        tangent(point: Glider, attributes?: TangentAttributes): Tangent;
        tangent(point: Point, curve: Line | Circle | Curve, attributes?: TangentAttributes): Tangent;
        /** A tape measure can be used to measure distances between points. */
        tapemeasure(P1: Point | point, P2: Point | point, attributes?: TapemeasureAttributes): Tapemeasure;
        /** This element is used to provide a constructor for trace curve (simple locus curve), which is realized as a special curve. */
        tracecurve(glider: Glider, point: Point, attributes?: TracecurveAttributes): Tracecurve;
        /** Here, lower is an array of the form [x, y] and dim is an array of the form [w, h]. The arrays [x, y] and [w, h] define the 2D frame into which the 3D cube is (roughly) projected. If the view azimuth=0 and elevation=0, the 3D view will cover a rectangle with lower left corner [x,y] and side lengths [w, h] of the board. The 'cube' is of the form [[x1, x2], [y1, y2], [z1, z2]] which determines the coordinate ranges of the 3D cube.  */
        view3D(x?: Number, y?: Number, w?: Number, h?: Number, xBounds?: Number[], yBounds?: Number[], zBounds?: Number[], attributes?: View3DAttributes): View3D;
    }
    export class GeometryElement {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get x(): GeometryElement;
        /**  */
        get y(): GeometryElement;
        /**  */
        get elType(): String;
        /**  */
        get name(): String;
        /**  */
        get isDraggable(): Boolean;
        set isDraggable(param: Boolean);
        /** Removes all ticks from a line or curve. */
        removeAllTicks(): Object;
        /** Add an element as a child to the current element. */
        addChild(): GeometryElement;
        /** Adds ids of elements to the array this.parents. */
        addParents(parents: GeometryElement[]): Object;
        /** Rotate texts or images by a given degree. */
        addRotation(): String;
        /** Adds ticks to this line or curve. */
        addTicks(): String;
        /** Animates properties for that object like stroke or fill color, opacity and maybe even more later. */
        animate(): GeometryElement;
        /** Dimensions of the smallest rectangle enclosing the element. */
        bounds(): Number[];
        /** Removes all objects generated by the trace function. */
        clearTrace(): GeometryElement;
        /** Copy the element to background. */
        cloneToBackground(): GeometryElement;
        /** Creates a label element for this geometry element. */
        createLabel(): boolean;
        /** Format a number according to the locale set in the attribute ”intl”. */
        formatNumberLocale(): String | Number;
        /** Array of strings containing the polynomials defining the element. */
        generatePolynomial(): Number[];
        /** Get the value of the property key. */
        getAttribute(): Object;
        /** Retrieve a copy of the current visProp. */
        getAttributes(): Object;
        /** Returns the elements name. */
        getName(): String;
        /** List of the element ids resp. */
        getParents(): Number[];
        /** Deprecated alias for JXG.GeometryElement#getAttribute. */
        getProperty(): Number[];
        /** The type of the element as used in JXG.Board#create. */
        getType(): String;
        /** Move an element to its nearest grid point. */
        handleSnapToGrid(): GeometryElement;
        /** Checks whether (x,y) is near the element. */
        hasPoint(x: number, y: number): Boolean;
        /** Hide the element. */
        hide(): GeometryElement;
        /** Hide the element. */
        hideElement(): GeometryElement;
        /**  */
        labelColor(): Board;
        /** Uses the ”normal” properties of the element. */
        noHighlight(): Board;
        /** Removes the element from the construction. */
        remove(): Object;
        /** Remove an element as a child from the current element. */
        removeChild(): Object;
        /** Alias of JXG.EventEmitter.off. */
        removeEvent(): Number;
        /** Removes ticks identified by parameter named tick from this line or curve. */
        removeTicks(): Object;
        /** Determines whether the element has arrows at start or end of the arc. */
        setArrow(): GeometryElement;
        /** Sets an arbitrary number of attributes. */
        setAttribute(attrs: GeometryElementAttributes): void;
        /** Sets a label and its text If label doesn't exist, it creates one */
        setLabel(): Object;
        /** Updates the element's label text, strips all html. */
        setLabelText(): Object;
        /** Updates the element's label text and the element's attribute ”name”, strips all html. */
        setName(): Object;
        /** Sets ids of elements to the array this.parents. */
        setParents(): Object;
        /** Translates the object by (x, y). */
        setPosition(transform: Transform): GeometryElement;
        /** Moves an element by the difference of two coordinates. */
        setPositionDirectly(address: number[]): Point;
        /** Deprecated alias for JXG.GeometryElement#setAttribute. */
        setProperty(): GeometryElement;
        /** Make the element visible. */
        show(): GeometryElement;
        /** Make the element visible. */
        showElement(): GeometryElement;
        /** Snaps the element to points. */
        snapToPoints(): GeometryElement;
        /** Checks if locale is enabled in the attribute. */
        useLocale(): Boolean;
        /**  */
        on(event: string, handler: Function): any;
    }
    export class GeometryElement3D {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get element2D(): Number[];
        /**  */
        get is3D(): Boolean;
        /**  */
        get view(): View3D;
        /**  */
        get strokeColor(): String;
        /**  */
        get strokeWidth(): Number;
        /**  */
        get size(): Number;
        /**  */
        get fillColor(): String;
        /**  */
        get visible(): Boolean;
    }
    export class Board {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Infobox {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
    }
    export class CA {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /** f = map (x) -> x*sin(x); Usages: h = D(f, x); h = map (x) -> D(f, x); or D(x^2, x); */
        expandDerivatives(): any;
        /** Declare all subnodes as math nodes, i.e recursively set node.isMath = true; */
        setMath(): any;
    }
    export class Chart extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get elements(): any[];
        /** Create bar chart defined by two data arrays. */
        drawBar(): any[];
        /** Create line chart where the curve is given by a regression polynomial defined by two data arrays. */
        drawFit(): Curve;
        /** Create line chart defined by two data arrays. */
        drawLine(): Curve;
        /** Create pie chart. */
        drawPie(): Object;
        /** Create chart consisting of JSXGraph points. */
        drawPoints(): Number[];
        /** Create radar chart. */
        drawRadar(): Object;
        /** Create line chart that consists of a natural spline curve defined by two data arrays. */
        drawSpline(): Curve;
        /** Template for dynamic charts update. */
        updateDataArray(): Chart;
    }
    export class Circle extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /** Circle area */
        Area(): Number;
        /** Perimeter (circumference) of circle. */
        Perimeter(): Number;
        /** Calculates the radius of the circle. */
        Radius(): Number;
        /** Treats the circle as parametric curve and calculates its X coordinate. */
        X(): Number;
        /** Treats the circle as parametric curve and calculates its Y coordinate. */
        Y(): Number;
        /** Treat the circle as parametric curve and calculates its Z coordinate. */
        Z(): Number;
    }
    export class Circle3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Complex {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get absval(): Number;
        /**  */
        get angle(): Number;
        /**  */
        get imaginary(): Number;
        /**  */
        get isComplex(): Boolean;
        /**  */
        get real(): Number;
        /** Add another complex number to this complex number. */
        add(): Complex;
        /** Conjugate a complex number in place. */
        conj(): Complex;
        /** Divide this complex number by the given complex number. */
        div(): Complex;
        /** Multiply another complex number to this complex number. */
        mult(): Complex;
        /** Subtract another complex number from this complex number. */
        sub(): Complex;
        /** Converts a complex number into a string. */
        toString(): String;
    }
    export class Composition {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /** Adds an element to the composition container. */
        add(): Boolean;
        /** Invokes fullUpdate for every stored element with a fullUpdate method and hands over the given arguments. */
        fullUpdate(): Boolean;
        /** Invokes highlight for every stored element with a highlight method and hands over the given arguments. */
        highlight(): Boolean;
        /** Invokes noHighlight for every stored element with a noHighlight method and hands over the given arguments. */
        noHighlight(): Boolean;
        /** Invokes prepareUpdate for every stored element with a prepareUpdate method and hands over the given arguments. */
        prepareUpdate(): Boolean;
        /** Remove an element from the composition container. */
        remove(): Boolean;
        /** Invokes setParents for every stored element with a setParents method and hands over the given arguments. */
        setParents(): any;
        /** Invokes updateRenderer for every stored element with a updateRenderer method and hands over the given arguments. */
        updateRenderer(): any;
    }
    export class Coords {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get board(): Board;
        /**  */
        get emitter(): boolean;
        /**  */
        get scrCoords(): Number[];
        /**  */
        get usrCoords(): Number[];
        /** Test if one of the usrCoords is NaN or the coordinates are infinite. */
        isReal(): Boolean;
        /** Set coordinates by either user coordinates or screen coordinates and recalculate the other one. */
        setCoordinates(): Coords;
    }
    export class Curve extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get dataX(): Number[];
        set dataX(param: Number[]);
        /**  */
        get dataY(): Number[];
        set dataY(param: Number[]);
        /**  */
        get ticks(): Number[];
        /** Allocate points in the Coords array this.points */
        allocatePoints(): Number[];
        /** Converts the JavaScript/JessieCode/GEONExT syntax of the defining function term into JavaScript. */
        generateTerm(): Number[];
        /** Gives the default value of the right bound for the curve. */
        maxX(): Number;
        /** Gives the default value of the left bound for the curve. */
        minX(): Number;
        /** Shift the curve by the vector 'where'. */
        moveTo(): Curve;
        /** Finds dependencies in a given term and notifies the parents by adding the dependent object to the found objects child elements. */
        notifyParents(): Curve;
        /** Computes the curve path */
        updateCurve(): Curve;
        /** For dynamic dataplots updateCurve can be used to compute new entries for the arrays JXG.Curve#dataX and JXG.Curve#dataY. */
        updateDataArray(func: Function): void;
        /** Updates the visual contents of the curve. */
        updateRenderer(): Curve;
        /** Applies the transformations of the curve to the given point p. */
        updateTransform(): Point;
        /** The parametric function which defines the x-coordinate of the curve. */
        X(): Number;
        /** The parametric function which defines the y-coordinate of the curve. */
        Y(): Number;
        /** Treat the curve as curve with homogeneous coordinates. */
        Z(): Number;
    }
    export class BezierCurve extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Curve3D extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /** Function which maps u to x; i.e. */
        X(): any;
        /** Function which maps u to y; i.e. */
        Y(): any;
        /** Function which maps u to z; i.e. */
        Z(): any;
    }
    export class Dump {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /** Adds markers to every element of the board */
        addMarkers(): Dump;
        /** Converts an array of different values into a parameter string that can be used by the code generators. */
        arrayToParamStr(): Dump;
        /** Removes markers from every element on the board. */
        deleteMarkers(): Dump;
        /** Generate a save-able structure with all elements. */
        dump(): Dump;
        /** Eliminate default values given by JXG.Options from the attributes object. */
        minimizeObject(): Dump;
        /** Prepare the attributes object for an element to be dumped as JavaScript or JessieCode code. */
        prepareAttributes(): Dump;
        /** Stringifies a string, i.e. */
        str(): Dump;
        /** Saves the construction in board to JavaScript. */
        toJavaScript(): Dump;
        /** Converts a JavaScript object into a JCAN (JessieCode Attribute Notation) string. */
        toJCAN(): Dump;
        /** Saves the construction in board to JessieCode. */
        toJessie(): Dump;
    }
    export class ForeignObject {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get content(): Number[];
        /**  */
        get size(): Number[];
        /** Returns the height of the foreignObject in user coordinates. */
        H(): number;
        /** Checks whether (x,y) is over or near the image; */
        hasPoint(): Boolean;
        /** Set the width and height of the foreignObject. */
        setSize(): ForeignObject;
        /** Returns the width of the foreignObject in user coordinates. */
        W(): number;
    }
    export class Group extends Composition {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get coords(): Object;
        /** Adds all points in a group to this group. */
        addGroup(group: Group): Group;
        /** Adds ids of elements to the array this.parents. */
        addParents(parents: GeometryElement[]): Object;
        /** Adds an Point to this group. */
        addPoint(point: Point | point): Group;
        /** Adds multiple points to this group. */
        addPoints(points: Point[]): Group;
        /** Adds a point to the set of rotation points of the group. */
        addRotationPoint(): Group;
        /** Adds a point to the set of the scale points of the group. */
        addScalePoint(): Group;
        /** List of the element ids resp. */
        getParents(): Number[];
        /** Removes a point from the group. */
        removePoint(): Group;
        /** Removes the rotation property from a point of the group. */
        removeRotationPoint(): Group;
        /** Removes the scaling property from a point of the group. */
        removeScalePoint(): Group;
        /** Removes the translation property from a point of the group. */
        removeTranslationPoint(): Group;
        /** Sets ids of elements to the array this.parents. */
        setParents(): Object;
        /**  */
        setProperty(): Group;
        /** Sets the center of rotation for the group. */
        setRotationCenter(): Group;
        /** Sets the rotation points of the group. */
        setRotationPoints(): Group;
        /** Sets the center of scaling for the group. */
        setScaleCenter(): Group;
        /** Sets the scale points of the group. */
        setScalePoints(): Group;
        /** Sets the translation points of the group. */
        setTranslationPoints(): Group;
        /** Releases all elements of this group. */
        ungroup(): Group;
    }
    export class Image extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get size(): Number[];
        /**  */
        get url(): string;
        /** Returns the height of the image in user coordinates. */
        H(): number;
        /** Checks whether (x,y) is over or near the image; */
        hasPoint(): Boolean;
        /** Set the width and height of the image. */
        setSize(): GeometryElement;
        /** Returns the width of the image in user coordinates. */
        W(): number;
    }
    export class Implicitcurve extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Intersectioncircle3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Legend {
        elValue: Object;
        tsxBoard: TSXBoard;
        scaleXY: number;
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get colors(): Number[];
        /**  */
        get labels(): Number[];
        /**  */
        get rowHeight(): Number;
        /**  */
        get style(): String;
    }
    export class Line extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get defaultTicks(): Ticks;
        /**  */
        get parentPolygon(): Polygon;
        /** Attributes for first defining point of the line. */
        get point1(): Point;
        /** Attributes for second defining point of the line. */
        get point2(): Point;
        /** Attributes for ticks of the line. */
        get ticks(): Number[];
        /** Determines the angle between the positive x axis and the line. */
        getAngle(): Number;
        /** Calculates the y intersect of the line. */
        getRise(): Number;
        /** Alias for line.Slope */
        getSlope(): Number;
        /** Checks whether (x,y) is near the line. */
        hasPoint(): Boolean;
        /** The distance between the two points defining the line. */
        L(): Number;
        /** Calculates the slope of the line. */
        Slope(): Number;
        /** Treat the line as parametric curve in homogeneous coordinates, where the parameter t runs from 0 to 1. */
        X(): number;
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Y(): number;
        /** Treat the line as parametric curve in homogeneous coordinates. */
        Z(): number;
    }
    export class Line3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get direction(): number[] | Function;
        /**  */
        get point(): Point3D;
        /**  */
        get point1(): Point3D;
        /**  */
        get point2(): Point3D;
        /**  */
        get range(): Number[];
    }
    export class Plane3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get d(): Number[];
        /**  */
        get direction1(): number[] | Function;
        /**  */
        get direction2(): number[] | Function;
        /**  */
        get normal(): Number[];
        /**  */
        get point(): Point3D;
        /**  */
        get range1(): Number[];
        /**  */
        get range2(): Number[];
        /**  */
        get vec1(): Number[];
        /**  */
        get vec2(): Number[];
        /**  */
        get vec3(): Number[];
    }
    export class Point extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        coords(): Number[];
        /**  */
        distance(toPoint: Point | point): number;
        /** Set the face of a point element. */
        face(style: 'cross' | 'circle' | 'square' | 'plus' | 'minus' | 'diamond'): Boolean;
        /** Updates the position of the point. */
        update(): number[];
        /**  */
        X(): number;
        /**  */
        Y(): number;
        /**  */
        Z(): number;
        /** Moves an element towards coordinates, optionally tweening over time.  Time is in ms.  WATCH OUT, there
                               is no AWAIT for the tween to finish, a second moveTo() starts immediately. EG:

       ```js

       P.moveTo([A.X(), A.Y()], 5000)

       ``` */
        moveTo(p: number[], time?: number): any;
        /** Point location in vector form [n,n] */
        XY(): [number, number];
    }
    export class Point3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get slide(): GeometryElement3D;
        /** Set the position of a 3D point. */
        setPosition(coords: number[], noEvent?: boolean): Point3D;
        /** Get x-coordinate of a 3D point. */
        X(): number;
        /** Get y-coordinate of a 3D point. */
        Y(): number;
        /** Get z-coordinate of a 3D point. */
        Z(): number;
    }
    export class Polygon extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /** Attributes for the polygon border lines. */
        get borders(): Number[];
        /** Attributes for the polygon vertices. */
        get vertices(): VertexAttributes;
        /** Uses the boards renderer to update the polygon. */
        updateRenderer(): any;
    }
    export class Polygon3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Text extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get size(): Number[];
        /** Returns the bounding box of the text element in user coordinates as an array of length 4: [upper left x, upper left y, lower right x, lower right y]. */
        bounds(): Number[];
        /** A very crude estimation of the dimensions of the textbox in case nothing else is available. */
        crudeSizeEstimate(): Number[];
        /** Returns the value of the attribute ”anchorX”. */
        getAnchorX(): Number;
        /** Returns the value of the attribute ”anchorY”. */
        getAnchorY(): Number;
        /** Return the width of the text element. */
        getSize(): Number[];
        /** Replace _{} by <sub> */
        replaceSub(): String;
        /** Replace ^{} by <sup> */
        replaceSup(): String;
        /** Sets the offset of a label element to the position with the least number of overlaps with other elements, while retaining the distance to its anchor element. */
        setAutoPosition(): Text;
        /** Move the text to new coordinates. */
        setCoords(x: Number, y: Number): object;
        /** Defines new content. */
        setText(newText: String): Text;
        /** Defines new content but converts < and > to HTML entities before updating the DOM. */
        setTextJessieCode(): this;
        /** Evaluates the text. */
        update(): this;
        /** Recompute the width and the height of the text box. */
        updateSize(): this;
        /** Decode unicode entities into characters. */
        utf8_decode(): String;
    }
    export class Ticks extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get equidistant(): Boolean;
        /**  */
        get fixedTicks(): Number[];
        /**  */
        get labelCounter(): number;
        /** User defined labels for special ticks. */
        get labels(): Number[];
        /**  */
        get labelsData(): Number[];
        /**  */
        get line(): Line;
        /**  */
        get ticks(): Number[];
        /** Formats label texts to make labels displayed in scientific notation look beautiful. */
        beautifyScientificNotationLabel(): String;
        /** Checks whether (x,y) is near the line. */
        hasPoint(): Boolean;
        /** Sets x and y coordinate of the tick. */
        setPositionDirectly(): Point;
        /** Uses the boards renderer to update the arc. */
        updateRenderer(): Ticks;
    }
    export class Turtle extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /** Move the turtle backwards. */
        back(): Turtle;
        /** Alias for JXG.Turtle#back */
        bk(): Turtle;
        /** Removes the turtle curve from the board. */
        clean(): Turtle;
        /** Removes the turtle completely and resets it to its initial position and direction. */
        clearScreen(): Turtle;
        /** Alias for JXG.Turtle#clearScreen */
        cs(): Number;
        /** The ”co”-coordinate of the turtle curve at position t is returned. */
        evalAt(): Number;
        /** Alias for JXG.Turtle#forward */
        fd(): Turtle;
        /** Move the turtle forward. */
        forward(): Turtle;
        /** Get most recently set turtle color. */
        getHighlightPenColor(): Boolean;
        /** Get most recently set turtle color. */
        getPenColor(): Boolean;
        /** Get most recently set turtle size (in pixel). */
        getPenSize(): Boolean;
        /** Checks whether (x,y) is near the curve. */
        hasPoint(): Boolean;
        /** Sets the visibility of the turtle head to false, */
        hideTurtle(): Turtle;
        /** Moves the turtle to position [0,0]. */
        home(): Turtle;
        /** Alias for JXG.Turtle#hideTurtle */
        ht(): Turtle;
        /** Rotate the turtle direction to the right. */
        left(): Turtle;
        /** Rotates the turtle into a new direction. */
        lookTo(): Turtle;
        /** Alias for JXG.Turtle#left */
        lt(): Turtle;
        /** Gives the upper bound of the parameter if the turtle is treated as parametric curve. */
        maxX(): Turtle;
        /** Gives the lower bound of the parameter if the turtle is treated as parametric curve. */
        minX(): Turtle;
        /** Moves the turtle to a given coordinate pair. */
        moveTo(): Turtle;
        /** Alias for JXG.Turtle#penDown */
        pd(): Turtle;
        /** Pen down, continues visible drawing */
        penDown(): Turtle;
        /** Pen up, stops visible drawing */
        penUp(): Turtle;
        /** Alias for JXG.Turtle#popTurtle */
        pop(): Turtle;
        /** Gets the last position of the turtle on the stack, sets the turtle to this position and removes this position from the stack. */
        popTurtle(): Turtle;
        /** Alias for JXG.Turtle#penUp */
        pu(): Turtle;
        /** Alias for JXG.Turtle#pushTurtle */
        push(): Turtle;
        /** Pushes the position of the turtle on the stack. */
        pushTurtle(): Turtle;
        /** Rotate the turtle direction to the right */
        right(): Turtle;
        /** Alias for JXG.Turtle#right */
        rt(): Turtle;
        /** Sets the highlight pen color. */
        setHighlightPenColor(): Turtle;
        /** Sets the pen color. */
        setPenColor(): Turtle;
        /** Sets the pen size. */
        setPenSize(): Turtle;
        /** Moves the turtle without drawing to a new position */
        setPos(): Turtle;
        /** Sets the visibility of the turtle head to true, */
        showTurtle(): Turtle;
        /** Alias for JXG.Turtle#showTurtle */
        st(): Number;
        /** if t is not supplied the x-coordinate of the turtle is returned. */
        X(): Number;
        /** if t is not supplied the y-coordinate of the turtle is returned. */
        Y(): Number;
        /**  */
        Z(): Number;
    }
    export class Sector extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get point1(): Point;
        /**  */
        get point2(): Point;
        /**  */
        get point3(): Point;
        /**  */
        get point4(): Point;
        /** Checks whether (x,y) is within the area defined by the sector. */
        hasPointSector(): Boolean;
        /** Returns the radius of the sector. */
        Radius(): Number;
    }
    export class Vectorfield extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /** Set the defining functions of vector field. */
        setF(): Object;
    }
    export class Angle extends Sector {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get point(): Point;
        /** Frees an angle from a prescribed value. */
        free(): Object;
        /** Set an angle to a prescribed value given in radians. */
        setAngle(angle: number | Function): Object;
        /** Returns the value of the angle. */
        Value(): Number;
    }
    export class Arc extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get anglepoint(): Point;
        /**  */
        get radiuspoint(): Point;
        /**  */
        getRadius(): Number;
        /** Checks whether (x,y) is within the sector defined by the arc. */
        hasPointSector(): Boolean;
        /** Determines the arc's current radius. */
        Radius(): Number;
        /** Returns the length of the arc or the value of the angle spanned by the arc. */
        Value(): Number;
    }
    export class Arrow extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Parallel extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Arrowparallel extends Parallel {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Axis extends Line {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get defaultTicks(): Ticks;
    }
    export class Bisector extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Bisectorlines extends Composition {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Button extends Text {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get rendNodeButton(): HTMLButtonElement;
        /** Add an event to trigger when button is pressed.
       ```js
           let isLeftRight = true;
           let buttonMove = TSX.button([-2, 4], 'initial',
               // use the button() codeblock to change the text and control a flag
               () => { isLeftRight = !isLeftRight;
                    buttonMove.rendNodeButton.innerHTML = isLeftRight ? 'left' : 'right' })
           // use onClick() to add actions to the button
           buttonMove.onClick(() => {isLeftRight ? P.moveTo(up, 1000) : P.moveTo(dn, 1000)})
       ``` */
        onClick(action: Function): void;
    }
    export class Cardinalspline extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Checkbox extends Text {
        constructor(className: string, params: any[], attrs: Object);
        /** Returns the value of the checkbox element */
        Value(): Boolean;
        /**  */
        onChange(action: Function): void;
    }
    export class Circumcenter extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Circumcircle extends Circle {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class CircumcircleArc extends Arc {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class CircumcircleSector extends Sector {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get center(): Circumcenter;
    }
    export class Comb extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Conic extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class CurveDifference extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class CurveIntersection extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class CurveUnion extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Derivative extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Ellipse extends Conic {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class ParametricSurface3D extends Curve3D {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Functiongraph extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Functiongraph3D extends Curve3D {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Glider extends Point {
        constructor(className: string, params: any[], attrs: Object);
        /** Animate the point. */
        startAnimation(direction: Number, stepCount: Number, delayMSec: Number): void;
    }
    export class Grid extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Hatch extends Ticks {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get ticksDistance(): Number;
    }
    export class Hyperbola extends Conic {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Incenter extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Incircle extends Circle {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Inequality extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Input extends Text {
        constructor(className: string, params: any[], attrs: Object);
        /** Sets value of the input element. */
        set(value: String): GeometryElement;
        /** Returns the value (content) of the input element */
        Value(): string;
        /**  */
        onChange(action: Function): void;
    }
    export class Integral extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /** Attributes of the (left) base point of the integral. */
        get baseLeft(): Point;
        /** Attributes of the (right) base point of the integral. */
        get baseRight(): Point;
        /** Attributes of the (left) starting point of the integral. */
        get curveLeft(): Point;
        /** Attributes of the (right) end point of the integral. */
        get curveRight(): Point;
        /** Returns the current value of the integral. */
        Value(): Point;
    }
    export class Intersection extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Label extends Text {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Locus extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get ctime(): Number;
        /**  */
        get eq(): String;
    }
    export class MajorArc extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class MajorSector extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Metapostspline extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Midpoint extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class MinorArc extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class MinorSector extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class mirrorelement extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Mirrorpoint extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class NonReflexAngle extends Angle {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Normal extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Orthogonalprojection extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class OtherIntersection extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Parabola extends Conic {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Parallelpoint extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Segment extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Parallelogram extends Polygon {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Perpendicular extends Segment {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class PerpendicularPoint extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class PerpendicularSegment extends Segment {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get point(): PerpendicularPoint;
    }
    export class PolarLine extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class PolePoint extends Point {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class PolygonalChain extends Polygon {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class RadicalAxis extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Reflection extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class ReflexAngle extends Angle {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class RegularPolygon extends Polygon {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Riemannsum extends Curve {
        constructor(className: string, params: any[], attrs: Object);
        /** Returns the value of the Riemann sum, i.e. */
        Value(): Number;
    }
    export class Semicircle extends Arc {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get midpoint(): Midpoint;
    }
    export class Slider extends Glider {
        constructor(className: string, params: any[], attrs: Object);
        /** Sets the maximum value of the slider. */
        setMax(value: number): Object;
        /** Sets the minimum value of the slider. */
        setMin(value: number): Object;
        /** Sets the value of the slider. */
        setValue(value: number): Object;
        /** Returns the current slider value. */
        Value(): number;
        /**  */
        onChange(action: Function): void;
    }
    export class Slopefield extends Vectorfield {
        constructor(className: string, params: any[], attrs: Object);
        /** Set the defining functions of slope field. */
        setF(): Object;
    }
    export class Slopetriangle extends Line {
        constructor(className: string, params: any[], attrs: Object);
        /** Returns the value of the slope triangle, that is the slope of the tangent. */
        Value(): Number;
    }
    export class Smartlabel extends Text {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Sphere3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Spline extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Stepfunction extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Tangent extends Line {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Tapemeasure extends Segment {
        constructor(className: string, params: any[], attrs: Object);
        /** Returns the length of the tape measure. */
        Value(): Number;
    }
    export class Tracecurve extends Curve {
        constructor(className: string, params: any[], attrs: Object);
    }
    export class Transform extends GeometryElement {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        applyOnce(element: GeometryElement): void;
        /**  */
        bindTo(element: GeometryElement): void;
        /**  */
        setMatrix(): Transform;
    }
    export class View3D extends GeometryElement3D {
        constructor(className: string, params: any[], attrs: Object);
        /**  */
        get matrix3D(): Object;
        /** This element is used to provide a constructor for a 3D Point. */
        point3D(xyz: NumberFunction[] | Function, attributes?: Object): Point3D;
        /** This element is used to provide a constructor for a 3D line. */
        line3D(point1: NumberFunction[] | Point3D, point2: NumberFunction[] | Point3D, attributes?: Object): Line3D;
        /** This element creates a 3D parametric curve. */
        curve3D(xFunction: Function, yFunction: Function, zFunction: Function, range: NumberFunction[], attributes?: Object): Curve3D;
        /**  */
        sphere3D(center: number[] | Point3D, radius: number | number[] | Point3D, attributes?: Object): Sphere3D;
        /**  */
        polygon3D(points: Point3D[], attributes?: Object): Sphere3D;
        /** In 3D space, a circle consists of all points on a given plane with a given distance from a given point. The given point is called the center, and the given distance is called the radius. A circle can be constructed by providing a center, a normal vector, and a radius (given as a number or function). */
        circle3D(point: Point3D, normal: number[], radius: number, attributes?: Object): Circle3D;
        /** Create a 3D plane object defined by a point and two directions, and extending negative and positive distanced in those directions by a range.  Remember to set visible:true.

       *```js

        let pnt = [[-1, 1, 1]]
        let axis1 = [0, 1, 0], axis2 = [0, 0, 1]
        let range1 = [0,3], range2 = [0,3]
        view.plane3D'(pnt, axis1, axis2, range1, range2,
               { fillColor: 'red', gradientSecondColor: 'blue', fillOpacity: .5, strokeColor: 'blue',
                gradient: 'linear', visible:true })

       ``` */
        plane3D(point: Point3D | number[], axis1: number[], axis2: number[], range1: number[], range2: number[], attributes?: Object): Plane3D;
        /**  */
        functiongraph3D(xyFunction: Function, xRange: NumberFunction[], yRange: NumberFunction[], attributes?: Object): Functiongraph3D;
        /**  */
        parametricsurface3D(xFunction: Function, yFunction: Function, zFunction: Function, xRange: NumberFunction[], yRange: NumberFunction[], attributes?: Object): Curve3D;
        /**  */
        intersectioncircle3D(sphere1: Sphere3D, sphere2: Sphere3D, attributes?: Object): Circle3D;
        /**  */
        intersectionline3D(plane1: Plane3D, plane2: Plane3D, attributes?: Object): Line3D;
        /**  */
        animateAzimuth(): Object;
        /** Creates a new 3D element of type elementType. */
        create(): Object;
        /** Intersect a ray with the bounding cube of the 3D view. */
        intersectionLineCube(): Number[];
        /**  */
        intersectionPlanePlane(): Number[];
        /** Test if coordinates are inside of the bounding cube. */
        isInCube(): Number[];
        /** Project a 2D coordinate to the plane defined by point ”foot” and the normal vector `normal`. */
        project2DTo3DPlane(): Number[];
        /** Project a 2D coordinate to a new 3D position by keeping the 3D x, y coordinates and changing only the z coordinate. */
        project2DTo3DVertical(): Number[];
        /** Project 3D coordinates to 2D board coordinates The 3D coordinates are provides as three numbers x, y, z or one array of length 3. */
        project3DTo2D(): Number[];
        /** Limit 3D coordinates to the bounding cube. */
        project3DToCube(): GeometryElement3D | Composition;
        /** Select a single or multiple elements at once. */
        select(): GeometryElement3D | Composition;
        /**  */
        stopAzimuth(): any;
    }
    export {};
}
