// void -> 아무것도 없음을 의미하는 타입

const func1 = (): string => {
  return "hello";
};

const func2 = (): void => {
  console.log("hello");
};

let a: void;
// a = 1
// a = 'hello'
// a = {}
a = undefined;
// a = null

// never -> 불가능한 타입

const func3 = (): never => {
  while (true) {}
};

const func4 = (): never => {
  throw new Error();
};

let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
