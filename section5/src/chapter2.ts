// 선언 합침

interface Person {
  name: string;
}

interface Person {
  // name:number
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

interface Lib {
  c: string;
}

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
