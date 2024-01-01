import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  axios.get("http://localhost:3000/").then(function (res) {
    setTodos(res.data.todo);
  });
  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
