import React, { useState } from "react";
import "./style.css";
import { createTodo } from "../../redux/modules/todo";
import { useDispatch } from "react-redux";

let number = 3;
function Form() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const dispatch = useDispatch();
  
  const onSubmit = (event) => {
    event.preventDefault();   // preventDefault: 추가하기 버튼을 눌렀어도 새로 실행하지 않게 하고싶어서 사용(새로고침x)
    
    dispatch(
      createTodo({        //state(todolist)에 새로운 card 정보 넣어서 저장 
        id: number + 1,
        Done: false,
        title: todoTitle,
        todoDesc: todoDesc,
      })
    );
    number++;          //기존number에서 +1되서 새로운 카드가 state에 저장된후 카드말고 기본number에도 +1
    setTodoTitle("");  // 입력후 input값이 빈칸이 되게 하기 위함
    setTodoDesc("");
  };

  //html--------------------------------------------------------------------------------------------------
  
  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          value={todoTitle}
          className="add-input input-body"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          value={todoDesc}
          className="add-input"
          onChange={(e) => setTodoDesc(e.target.value)}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
