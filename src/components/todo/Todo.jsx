import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/modules/todo";
import {useNavigate } from "react-router-dom";


function Todo({ todo }) {   //card가 todo로 list.jsx에서 props로 받아와짐 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();  //페이지 이동
  
  

  //html--------------------------------------------------------------------------------------------------

  return (
    <div className="todo-container">
      <p  onClick={() => {navigate("/detail/" + todo.id);}}>상세보기</p>
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.todoDesc}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => dispatch(deleteTodo(todo.id))}    //store에서 가져온함수들 버튼누르면 작동하게 하기 (state변화 - dispatch) 
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => dispatch(updateTodo(todo.id))}
        >
          {todo.Done ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
