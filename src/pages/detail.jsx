import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();  //뒤로가기 페이지 이동
    const param = useParams();
    const todo = useSelector((state) => state.todo);    //card정보 불러오기 
  
    const tododetail = todo.filter((card) => {
      return card.id === parseInt(param.id);  //parseInt() : 문자열을 숫자로 변경
    });
    // console.log(tododetail)   //{} -> 0 -> id,title... 순으로 찍힘 그래서 [0]으로 들어가줘야 내용들이 나옴
   
   
    
//html--------------------------------------------------------------------------------------------------

    return (
        
        <div>
            <button onClick={() => {navigate(-1);}}>뒤로가기</button>
            <div>
                <p>id : {tododetail[0].id}</p>    
                <h2>{tododetail[0].title}</h2>
                <p>{tododetail[0].todoDesc}</p>
               
            </div>
        </div>


    )
}

export default Detail;