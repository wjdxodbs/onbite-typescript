// keyof 연산자
// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

const getPropertyKey = (person: Person, key: keyof Person) => {
  return person[key];
};

const person = {
  name: "정태윤",
  age: 27,
};
