import React from "react";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";
import "./style.css";

function List() {
  const todolist = useSelector((state) => state.todo);  // todo는 config파일안의  combineReducers({todo}) 의 파라미터를 뜻함
                                              


  
 //html--------------------------------------------------------------------------------------------------------

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todolist.map((card) => {     //todolist안의 각 card 돌리기
          if (!card.Done) {
            return (
              <Todo
                todo={card}         //card정보를 Todo.jsx에 todo라는 이름의 props로 보내주기
                key={card.id}      //key는 받는쪽 props에 안써도 보내면 받아진다고함 
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todolist.map((card) => {
          if (card.Done) {
            return (
              <Todo
                todo={card}
                key={card.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
