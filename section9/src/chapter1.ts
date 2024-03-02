// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number> = "1";
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string | number -> number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// StringNumberSwitch<number, string> |
// StringNumberSwitch<string, string> |
// StringNumberSwitch<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean -> number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
