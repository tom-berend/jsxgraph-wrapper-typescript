export declare namespace TXG {
    /** 2-element array eg: [X,Y], either number or function
     * eg: [3.2, 2.5]  or  [3.2, ()=>P1.X()]
     */
    type XY = [number | Function, number | Function];
    /** 3-element array eg: [Z,X,Y], either number or function
     * eg: [1, 3.2, 2.5]  or  [1, 3.2, ()=>P1.X()]
    */
    type XYZ = [number | Function, number | Function, number | Function];
    type number_and_Transform = [number | Function, Transform];
    type fn_and_Point = [Function, Point];
    type Point_and_Transform = [Point, Transform];
    type X_Y_Message = [number | Function, number | Function, any];
    type Point_and_Point = [XY | Point, XY | Point];
    type fnXYZ = [Function];
    type Center_and_Point = [Point | XY, Point | XY];
    type Point_and_Radius = [Point, number];
    type Point_and_Line = [Point, Line];
    type Point_and_Circle = [Point, Circle];
    interface GeometryElementAttributes {
    }
    interface PointAttributes {
        color?: string;
        name?: string;
        fixed?: boolean;
    }
    interface TextAttributes {
    }
    interface GliderAttributes extends PointAttributes {
    }
    interface SliderAttributes extends GliderAttributes {
    }
    interface LineAttributes {
    }
    interface CircleAttributes {
        x?: number;
        y?: number;
    }
    interface TransformAttributes {
        type: 'translate' | 'scale' | 'reflect' | 'rotate' | 'shear' | 'generic';
        params?: XY | number[] | Line | JSXAngle;
    }
    interface AngleAttributes {
        x?: number;
        y?: number;
    }
    interface ChartAttributes {
        chartStyle?: 'bar' | 'line';
        width?: number;
        labels?: any[];
        colorArray?: string[];
        label?: any;
    }
    interface CompositionAttributes {
    }
    interface BisectorlinesAttributes extends CompositionAttributes {
    }
    interface View3dAttributes extends GeometryElementAttributes {
    }
    class Transform {
        elValue: any;
        constructor(elValue: any);
    }
    class Chart {
        elValue: any;
        constructor(elValue: any);
    }
    class Composition {
        elValue: any;
        constructor(elValue: any);
    }
    class GeometryElement {
        protected elValue: GeometryElement;
        constructor(elValue: GeometryElement);
        setElement(value: any): void;
        /** returns the current positon  X value */
        X(): number;
        Y(): number;
        /** This is a JSDoc comment */
        genericMethod1(msg: string): void;
        genericMethod2(msg: string): void;
    }
    class JSXBoard {
        board: JSXBoard | null;
        constructor();
        private create;
        private dereference;
        /** This is a JSDoc comment for Transform */
        transform(params: fn_and_Point | Point_and_Transform, attributes: TransformAttributes): Transform;
        /** This is a JSDoc comment for Text */
        text(params: X_Y_Message, attributes?: TextAttributes): Text;
        /** This is a JSDoc comment for Point */
        point(params: XY | XYZ | number_and_Transform | Point_and_Transform, attributes?: PointAttributes): Point;
        /** This is a JSDoc comment for Glider */
        glider(params: any[], attributes?: GliderAttributes): Glider;
        /** This is a JSDoc comment for Slider */
        slider(params: any[], attributes?: SliderAttributes): Slider;
        /** This is a JSDoc comment for Bisectorlines */
        bisectorlines(params: any[], attributes?: BisectorlinesAttributes): Bisectorlines;
        /** This is a JSDoc comment for Line */
        line(params: [Point, Transform] | Point_and_Point | XYZ | fnXYZ, attributes?: LineAttributes): Line;
        /** This is a JSDoc comment for Circle */
        circle(params: Center_and_Point | Point_and_Radius | Point_and_Line | Point_and_Circle, attributes?: CircleAttributes): Circle;
        /** This is a JSDoc comment for Chart */
        chart(params: any[], attributes?: ChartAttributes): Chart;
        /** This is a JSDoc comment for Angle */
        angle(params: XY | XYZ | number_and_Transform, attributes?: AngleAttributes): Point;
        view3d(params: any[], attributes?: View3dAttributes): View3d;
    }
    class Text extends GeometryElement {
        constructor(elValues: GeometryElement);
        setText(msg: any): void;
    }
    class Point extends GeometryElement {
        constructor(elValue: GeometryElement);
        /** Convert the point to intersection point and update the construction.*/
        makeIntersection(el1: string | GeometryElement, el2: string | GeometryElement, i: string | GeometryElement, j: string | GeometryElement): void;
    }
    class Glider extends Point {
        constructor(elValues: GeometryElement);
        startAnimation(direction: number | Function, stepCount: number | Function, delay: number | Function): void;
    }
    class Slider extends Glider {
        constructor(elValues: GeometryElement);
    }
    class Line extends GeometryElement {
        constructor(elValues: GeometryElement);
        /** defaultTicks documentation */
        get defaultTicks(): number;
        /** Line Angle() documentation */
        getAngle(): number;
    }
    class Circle extends GeometryElement {
        constructor(elValues: GeometryElement);
    }
    class JSXAngle extends GeometryElement {
        constructor(elValues: GeometryElement);
    }
    class Bisectorlines extends Composition {
        constructor(elValues: GeometryElement);
    }
    class View3d extends GeometryElement {
        constructor(elValues: GeometryElement);
    }
    /** Initialize a new board. */
    export function initBoard(html: string, attributes?: Object): JSXBoard;
    /** Delete a board and all its contents. */
    export function freeBoard(board: JSXBoard): void;
    /** Load a board from a file containing a construction made with either GEONExT, Intergeo, Geogebra, or Cinderella. */
    export function loadBoardFromFile(html: string, file: string, format: string, attributes: Object, callback: Function): void;
    /** Load a board from a base64 encoded string containing a construction made with either GEONExT, Intergeo, Geogebra, or Cinderella. */
    export function loadBoardFromString(html: string, base64String: string, format: string, attributes: Object, callback: Function): void;
    export class Complex {
        private elValue;
        constructor(x: number, y: number);
        get imaginary(): number;
        get real(): number;
        get absval(): number;
        /** This is the descriptin of ADD in the wrap method */
        add(c: Complex): Complex;
        conj(): Complex;
        div(c: Complex): Complex;
        mult(c: Complex): Complex;
        sub(c: Complex): Complex;
        toString(): String;
    }
    export {};
}
