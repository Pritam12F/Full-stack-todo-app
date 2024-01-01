const express = require("express");
const app = express();
const { createSchema, updateSchema } = require("./types");
const { todos } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const todo = await todos.find({});
  res.json({
    todo,
  });
});

app.post("/", async (req, res) => {
  const todoBody = req.body;
  const parsedBody = createSchema.safeParse(todoBody);

  if (!parsedBody.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todos.create({
    title: todoBody.title,
    description: todoBody.description,
    completed: false,
  });

  res.json({
    msg: "Todo was created",
  });
});

app.put("/", async (req, res) => {
  const updateBody = req.body;
  const parsedBody = updateSchema.safeParse(updateBody);

  if (!parsedBody.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todos.updateOne(
    {
      _id: updateBody.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo updated",
  });
});

app.listen(3000);
