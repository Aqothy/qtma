import { Router } from "express";
import { Todo } from "../models/todoModel.js";

const todoRouter = Router();

todoRouter.post("/", async (req, res) => {
  try {
    // Validate the req body
    const {title} = req.body;

    if (!title) {
      return res.status(400).send({
        message: "send all rq fields: title",
      });
    }

    // Save the new todo to the database
    const todo = await Todo.create({
      title,
    });
    // Return status 201 and send the saved todo to the client
    return res.status(201).json({todo});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

todoRouter.get("/", async (req, res) => {
  try {
    const todo = await Todo.find({}).lean();
    return res.status(200).json({
      toDos: todo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

todoRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndDelete(id).lean();;

        if (!todo) {
            return res.status(404).json({ message: 'Book not found' })
        }

        return res.status(200).send({ message: 'successfully deleted book' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});


export default todoRouter;