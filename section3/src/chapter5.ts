// 타입 추론
let a: number = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

const func = (message = "hello") => {
  return "hello";
};

// 암묵적인 any 타입 진화
let d;
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "str"];
