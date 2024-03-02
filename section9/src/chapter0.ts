// 조건부 타입
type A = number extends string ? string : number;

interface ObjA {
  a: number;
}

interface ObjB {
  a: number;
  b: number;
}

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> = "1";
let varB: StringNumberSwitch<string> = 1;

const removeSpaces = <T>(text: T): T extends string ? string : undefined => {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any;
  }
};

let result = removeSpaces("hi im  winterlood");
