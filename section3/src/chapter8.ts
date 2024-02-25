// 서로서 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> name님 현재까지 kickCount명 강퇴했습니다.
// Member -> name님 현재까지 point 모았습니다.
// Guest -> name님 현재까지 visitCount번 오셨습니다.
const login = (user: User) => {
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
};

// 복습겸 한가지 더 사례
// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  err: {
    msg: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  res: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공 : 데이터를 출력
const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING":
      console.log("로딩 중");
      break;
    case "FAILED":
      console.log(`에러 발생 : ${task.err.msg}`);
      break;
    case "SUCCESS":
      console.log(`성공 : ${task.res.data}`);
      break;
  }
};

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  err: {
    msg: "오류 발생원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  res: {
    data: "데이터 ~~",
  },
};
