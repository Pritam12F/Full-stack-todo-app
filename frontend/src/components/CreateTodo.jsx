import axios from "axios";

export function CreateTodo({ todos, setTodos }) {
  function postTodo() {
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#description").value;
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
      <input type="text" placeholder="title" id="title"></input>
      <br></br>
      <input type="text" placeholder="description" id="description"></input>
      <br></br>
      <button onClick={postTodo}>Add Todo</button>
    </div>
  );
}
