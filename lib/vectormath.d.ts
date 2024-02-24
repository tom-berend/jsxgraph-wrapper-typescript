/*********************
 * see:  https://github.com/matthiasferch/tsm
 *
 * V2
 * v3
 * V4
 * M2
 * M3
 * M4
 * quat
 *
 */
export declare class V2 {
    get x(): number;
    get y(): number;
    get xy(): [number, number];
    set x(value: number);
    set y(value: number);
    set xy(values: [number, number]);
    static readonly zero: V2;
    static readonly one: V2;
    static cross(vector: V2, vector2: V2, dest?: V3): V3;
    static dot(vector: V2, vector2: V2): number;
    static distance(vector: V2, vector2: V2): number;
    static squaredDistance(vector: V2, vector2: V2): number;
    static direction(vector: V2, vector2: V2, dest?: V2): V2;
    static mix(vector: V2, vector2: V2, time: number, dest?: V2): V2;
    static sum(vector: V2, vector2: V2, dest?: V2): V2;
    static difference(vector: V2, vector2: V2, dest?: V2): V2;
    static product(vector: V2, vector2: V2, dest?: V2): V2;
    static quotient(vector: V2, vector2: V2, dest?: V2): V2;
    private values;
    constructor(values?: [number, number]);
    at(index: number): number;
    reset(): void;
    copy(dest?: V2): V2;
    negate(dest?: V2): V2;
    equals(vector: V2, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: V2): V2;
    subtract(vector: V2): V2;
    multiply(vector: V2): V2;
    divide(vector: V2): V2;
    scale(value: number, dest?: V2): V2;
    normalize(dest?: V2): V2;
    multiplyMat2(matrix: M2, dest?: V2): V2;
    multiplyMat3(matrix: M3, dest?: V2): V2;
}
export declare class V3 {
    get x(): number;
    get y(): number;
    get z(): number;
    get xy(): [number, number];
    get xyz(): [number, number, number];
    set x(value: number);
    set y(value: number);
    set z(value: number);
    set xy(values: [number, number]);
    set xyz(values: [number, number, number]);
    static readonly zero: V3;
    static readonly one: V3;
    static readonly up: V3;
    static readonly right: V3;
    static readonly forward: V3;
    static cross(vector: V3, vector2: V3, dest?: V3): V3;
    static dot(vector: V3, vector2: V3): number;
    static distance(vector: V3, vector2: V3): number;
    static squaredDistance(vector: V3, vector2: V3): number;
    static direction(vector: V3, vector2: V3, dest?: V3): V3;
    static mix(vector: V3, vector2: V3, time: number, dest?: V3): V3;
    static sum(vector: V3, vector2: V3, dest?: V3): V3;
    static difference(vector: V3, vector2: V3, dest?: V3): V3;
    static product(vector: V3, vector2: V3, dest?: V3): V3;
    static quotient(vector: V3, vector2: V3, dest?: V3): V3;
    private values;
    constructor(values?: [number, number, number]);
    at(index: number): number;
    reset(): void;
    copy(dest?: V3): V3;
    negate(dest?: V3): V3;
    equals(vector: V3, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: V3): V3;
    subtract(vector: V3): V3;
    multiply(vector: V3): V3;
    divide(vector: V3): V3;
    scale(value: number, dest?: V3): V3;
    normalize(dest?: V3): V3;
    multiplyByMat3(matrix: M3, dest?: V3): V3;
    multiplyByQuat(quaternion: Quat, dest?: V3): V3;
    toQuat(dest?: Quat): Quat;
}
export declare class V4 {
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    get xy(): [number, number];
    get xyz(): [number, number, number];
    get xyzw(): [number, number, number, number];
    set x(value: number);
    set y(value: number);
    set z(value: number);
    set w(value: number);
    set xy(values: [number, number]);
    set xyz(values: [number, number, number]);
    set xyzw(values: [number, number, number, number]);
    get r(): number;
    get g(): number;
    get b(): number;
    get a(): number;
    get rg(): [number, number];
    get rgb(): [number, number, number];
    get rgba(): [number, number, number, number];
    set r(value: number);
    set g(value: number);
    set b(value: number);
    set a(value: number);
    set rg(values: [number, number]);
    set rgb(values: [number, number, number]);
    set rgba(values: [number, number, number, number]);
    static readonly zero: V4;
    static readonly one: V4;
    static mix(vector: V4, vector2: V4, time: number, dest?: V4): V4;
    static sum(vector: V4, vector2: V4, dest?: V4): V4;
    static difference(vector: V4, vector2: V4, dest?: V4): V4;
    static product(vector: V4, vector2: V4, dest?: V4): V4;
    static quotient(vector: V4, vector2: V4, dest?: V4): V4;
    private values;
    constructor(values?: [number, number, number, number]);
    at(index: number): number;
    reset(): void;
    copy(dest?: V4): V4;
    negate(dest?: V4): V4;
    equals(vector: V4, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: V4): V4;
    subtract(vector: V4): V4;
    multiply(vector: V4): V4;
    divide(vector: V4): V4;
    scale(value: number, dest?: V4): V4;
    normalize(dest?: V4): V4;
    multiplyMat4(matrix: M4, dest?: V4): V4;
}
export declare class M2 {
    static readonly identity: M2;
    static product(m1: M2, m2: M2, result: M2): M2;
    private values;
    constructor(values?: number[]);
    at(index: number): number;
    init(values: number[]): M2;
    reset(): void;
    copy(dest?: M2): M2;
    all(): number[];
    row(index: number): number[];
    col(index: number): number[];
    equals(matrix: M2, threshold?: number): boolean;
    determinant(): number;
    setIdentity(): M2;
    transpose(): M2;
    inverse(): M2;
    multiply(matrix: M2): M2;
    rotate(angle: number): M2;
    multiplyVec2(vector: V2, result: V2): V2;
    scale(vector: V2): M2;
}
export declare class M3 {
    static readonly identity: M3;
    static product(m1: M3, m2: M3, result: M3): M3;
    private values;
    constructor(values?: number[]);
    at(index: number): number;
    init(values: number[]): M3;
    reset(): void;
    copy(dest?: M3): M3;
    all(): number[];
    row(index: number): number[];
    col(index: number): number[];
    equals(matrix: M3, threshold?: number): boolean;
    determinant(): number;
    setIdentity(): M3;
    transpose(): M3;
    inverse(): M3;
    multiply(matrix: M3): M3;
    multiplyVec2(vector: V2, result: V2): V2;
    multiplyVec3(vector: V3, result: V3): V3;
    toMat4(result: M4): M4;
    toQuat(): Quat;
    rotate(angle: number, axis: V3): M3;
}
export declare class M4 {
    static readonly identity: M4;
    static frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): M4;
    static perspective(fov: number, aspect: number, near: number, far: number): M4;
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): M4;
    static lookAt(position: V3, target: V3, up?: V3): M4;
    static product(m1: M4, m2: M4, result: M4): M4;
    private values;
    constructor(values?: number[]);
    at(index: number): number;
    init(values: number[]): M4;
    reset(): void;
    copy(dest?: M4): M4;
    all(): number[];
    row(index: number): number[];
    col(index: number): number[];
    equals(matrix: M4, threshold?: number): boolean;
    determinant(): number;
    setIdentity(): M4;
    transpose(): M4;
    inverse(): M4;
    multiply(matrix: M4): M4;
    multiplyVec3(vector: V3): V3;
    multiplyVec4(vector: V4, dest?: V4): V4;
    toMat3(): M3;
    toInverseMat3(): M3;
    translate(vector: V3): M4;
    scale(vector: V3): M4;
    rotate(angle: number, axis: V3): M4;
}
export declare class Quat {
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    get xy(): [number, number];
    get xyz(): [number, number, number];
    get xyzw(): [number, number, number, number];
    set x(value: number);
    set y(value: number);
    set z(value: number);
    set w(value: number);
    set xy(values: [number, number]);
    set xyz(values: [number, number, number]);
    set xyzw(values: [number, number, number, number]);
    static readonly identity: Quat;
    static readonly zero: Quat;
    static dot(q1: Quat, q2: Quat): number;
    static sum(q1: Quat, q2: Quat, dest?: Quat): Quat;
    static product(q1: Quat, q2: Quat, dest?: Quat): Quat;
    static cross(q1: Quat, q2: Quat, dest?: Quat): Quat;
    static shortMix(q1: Quat, q2: Quat, time: number, dest?: Quat): Quat;
    static mix(q1: Quat, q2: Quat, time: number, dest?: Quat): Quat;
    static fromAxisAngle(axis: V3, angle: number, dest?: Quat): Quat;
    private values;
    constructor(values?: [number, number, number, number]);
    at(index: number): number;
    reset(): void;
    copy(dest?: Quat): Quat;
    roll(): number;
    pitch(): number;
    yaw(): number;
    equals(vector: Quat, threshold?: number): boolean;
    setIdentity(): Quat;
    calculateW(): Quat;
    inverse(): Quat;
    conjugate(): Quat;
    length(): number;
    normalize(dest?: Quat): Quat;
    add(other: Quat): Quat;
    multiply(other: Quat): Quat;
    multiplyVec3(vector: V3, dest?: V3): V3;
    toMat3(dest?: M3): M3;
    toMat4(dest?: M4): M4;
}
