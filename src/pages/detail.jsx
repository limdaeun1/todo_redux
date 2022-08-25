import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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
       <Bigbox> 
        <DetailBox >
            <But onClick={() => {navigate(-1);}}>뒤로가기</But>
            <SmallBox>
                <p>id : {tododetail[0].id}</p>    
                <h2>{tododetail[0].title}</h2>
                <p>{tododetail[0].todoDesc}</p>
               
            </SmallBox>
        </DetailBox >
        </Bigbox>


    )
}

const DetailBox = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
const Bigbox = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;`

const SmallBox = styled.div`
 
 height: 100vh;
 margin: 0 auto;`

const But = styled.button`
border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`


export default Detail;