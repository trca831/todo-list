import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

const todos = [
  { id: 1, title: "Review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
