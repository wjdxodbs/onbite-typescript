// 인터페이스
// 타입에 이름을 지어주는 또 다른 문법
// + 객체의 구조를 정의하는데 특화된 문법 (상속, 합침 등의 특수한 기능을 제공함)

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Func = {
//   (): void;
// };

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "이정환",
  // age: 27,
  sayHi: function (a?: number, b?: number) {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);

// person.name = '정태윤'
