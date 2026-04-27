import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

//delete the todos array
// const todos = [
//   { id: 1, title: "Review resources" },
//   { id: 2, title: "take notes" },
//   { id: 3, title: "code out app" },
// ];

function App() {
  // const [todoList, setTodoList] = useState(todos);
  //change the initial value
  // from the hardcoded array to an empty array
  const [todoList, setTod