// Exclude<T, U>
// -> 제외하다, 추방하다
// -> T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;
// 1 단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2 단계
// string | never -> string

type A = Exclude<string | boolean, boolean>;

// Extract<T, U>
// -> T에서 U를 추출하는 타입

type Extract<T, U> = T extends U ? T : never;
// 1 단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2 단계
// never | boolean -> boolean

type B = Extract<string | boolean, boolean>;

// ReturnType
// -> 함수의 반환값 타입을 추출하는 타입

const funcA = () => "hello";
const funcB = () => 10;

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
