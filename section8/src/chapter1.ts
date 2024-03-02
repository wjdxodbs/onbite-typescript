// 인덱스드 엑세스 타입
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const printAuthorInfo = (author: Post["author"]): void => {
  console.log(`${author.name}-${author.id}`);
};

const printAuthorInfo1 = (author: PostList[number]["author"]): void => {
  console.log(`${author.name}-${author.id}`);
};

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 10,
  },
};

const postList: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 10,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]
type TupNum = Tup[number];
