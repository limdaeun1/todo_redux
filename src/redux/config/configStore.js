import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo";

//rootReducer는 모든리듀서를 묶어준것이라고 생각하기
const rootReducer = combineReducers({todo}); //combinreducers 리듀서들을 합쳐주는 함수라고 생각하기(로그인생기면 todo.js login.js 등등)
const store = createStore(rootReducer);  

export default store;



//모듈의 todo.js의 export default function reducer 의 reducer 과
// import의 todo 
// combineReducers({todo})의 todo는 같음  => 리듀서의 함수 정보 자체를 뜻한다고 생각하기 (단지 이름을 직관적으로 보이게 todo로 쓴것일뿐임)
