import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}>
        <div>child</div>
      </Editor>
    </div>
  );
}

export default App;
