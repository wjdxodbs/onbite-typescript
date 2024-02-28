// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["12", "24"],
};

// 인덱스 시그니쳐
interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key: 1,
  key2: 2,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

// 제네릭 인터페이스의 활용 예시
// 유저 관리 프로그램
// 유저 구분 : 학생 유저 / 개발자 유저
interface Student {
  type: "student";
  school: string;
}

interface Dev {
  type: "dev";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const goToSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
};

const devUser: User<Dev> = {
  name: "정태윤",
  profile: {
    type: "dev",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "원광대학교",
  },
};
