import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";
import _ from "lodash";

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

  const onClickDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} onClickDelete={onClickDelete} />
        );
      })}
    </div>
  );
}

export default App;
