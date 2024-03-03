import { Todo } from "../types";

interface Props {
  todo: Todo;
  onClickDelete: (id: number) => void;
}

const TodoItem = ({ todo, onClickDelete }: Props) => {
  const onClickBtn = () => {
    onClickDelete(todo.id);
  };

  return (
    <div>
      {todo.id}번 : {todo.content}
      <button onClick={onClickBtn}>삭제</button>
    </div>
  );
};

export default TodoItem;
