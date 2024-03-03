import { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  children: ReactElement;
}

const Editor = ({ onClickAdd, children }: Props) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickBtn = () => {
    onClickAdd(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickBtn}>추가</button>
      {children}
    </>
  );
};

export default Editor;
