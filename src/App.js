import React from "react";
import TodoList from "./pages/TodoList";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";


function App() {
  return (
    <div>
    <Routes>
      <Route path={"/"} element={
        <TodoList></TodoList>}/>
      
      <Route path={"/detail/:id"} element={<Detail/>}/>
      
    </Routes>
  </div>
)}

export default App;
