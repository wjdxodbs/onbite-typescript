// unknown 타입
const unknownExam = () => {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num:number = unknownVar
  // let str:string = unknownVar
  // let bool:boolean = unknownVar
};

// never 타입
const neverExam = () => {
  const neverFunc = (): never => {
    while (true) {}
  };

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
};

// void 타입
const voidExam = () => {
  const voidFUnc = (): void => {
    console.log("hi");
  };

  let voidVar: void = undefined;
};

// any 타입
const anyExam = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  // unknownVar = anyVar
  undefinedVar = anyVar;
  // neverVar = anyVar
};
