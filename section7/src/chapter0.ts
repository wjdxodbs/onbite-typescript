// 제네릭 - 일반적인, 포괄적인

// 제네릭 함수
// function func<T>(value: T): T {
//   return value;
// }

const func = <T>(value: T): T => {
  return value;
};

let num = func(10);
let bool = func(true);
let str = func("str");
let arr = func<[number, number, number]>([1, 2, 3]);
