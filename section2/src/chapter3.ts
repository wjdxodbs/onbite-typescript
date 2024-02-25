// object
// 구조적 타입 시스템
let user: {
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "정태윤",
};

user = {
  name: "홍길동",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};
