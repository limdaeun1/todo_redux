const CREATE = "todo/CREATE";
const UPDATE = "todo/UPDATE";
const DELETE = "todo/DELETE";


//초기값-------------------------------------------------------------------------
const initinalState = [
  {
    id: 1,
    Done: true,
    title: "리액트 과제",
    todoDesc: "리액트 과제를 완료하기",
  },
  {
    id: 2,
    Done: false,
    title: "리액트 복습",
    todoDesc: "리액트 입문주차를 복습하기",
  },
  {
    id: 3,
    Done: false,
    title: "강의듣기",
    todoDesc: "코딩애플 강의듣기",
  },
];



// Action Creator-----------------------------------------------------------
export function createTodo(todolist) {  //id, title 등등 card정보가 들어옴
  return { type: CREATE, todolist };
}
export function updateTodo(todo_id) {   //todo.id로 들어옴
  return { type: UPDATE, todo_id };     
}

export function deleteTodo(todo_id) {
  return { type: DELETE, todo_id };    

}
// return 값에서 todo_id : todo_id 인데 생략된것  (key : value ) 같으면 생략가능



// 리듀서-----------------------------------------------------------------------
export default function reducer(state = initinalState, action = {}) {
  switch (action.type) {
    //액션은 명령
    
    case "todo/CREATE": {   //콘솔에 action찍어보면 action={type:"todo/CREATE" , todolist :{...} } 이런식으로 나옴.
         // console.log(action) 항상 콘솔 찍어보고 필요한정보 action 이용해서 꺼내주기
      
         const new_todolist = [...state, action.todolist];
         return new_todolist;
    }


    case "todo/UPDATE": { //card는 각 todo
      const new_todolist = state.map((card => {
        if (card.id === parseInt(action.todo_id)) {
          return { ...card, Done: !card.Done };
        } else {
          return card;
        }
      }));
      return new_todolist;
    }


    case "todo/DELETE": {
      const new_todolist = state.filter((card) => {
        return card.id !== parseInt(action.todo_id);
      });
      return new_todolist;
    }

    default:
      return state;
  }
}