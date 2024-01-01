import axios from "axios";
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  function postTodo() {
    const obj = {
      title: title,
      description: desc,
    };
    axios.post("http://localhost:3000/", obj).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={function (event) {
          setTitle(event.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={function (event) {
          setDesc(event.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={postTodo}>Add Todo</button>
    </div>
  );
}
