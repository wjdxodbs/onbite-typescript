// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "이정환",
  // age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = '정태윤'
