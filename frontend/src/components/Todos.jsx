import axios from "axios";

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            style={{
              border: "2px solid black",
              marginTop: "1rem",
              paddingLeft: "5rem",
              width: "30rem",
              paddingBottom: "2rem",
            }}
          >
            <h1
              style={{
                backgroundColor: "lightblue",
                width: "300px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              {todo.title}
            </h1>
            <h3
              style={{
                backgroundColor: "grey",
                padding: "1rem",
                textAlign: "center",
                width: "10rem",
              }}
            >
              {todo.description}
            </h3>
            <button
              style={{
                fontStyle: "oblique",
              }}
              onClick={function () {
                console.log(isCompleted);
                const payload = {
                  id: todo._id,
                };
                axios.put("http://localhost:3000/", payload).then((res) => {
                  console.log(res.data);
                });
              }}
            >
              Mark as completed
            </button>
          </div>
        );
      })}
    </div>
  );
}
