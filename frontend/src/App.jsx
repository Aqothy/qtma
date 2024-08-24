import "./index.css";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      setTodos(response.data.toDos);
    });
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    const data = { title: newItem };
    axios
      .post("http://localhost:3000/todos", data)
      .then((response) => {
        setTodos([...todos, response.data.todo]);
        setNewItem("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="frame">
      <h1 className="text-wrapper">todo list</h1>
      <ToDoForm newItem={newItem} setNewItem={setNewItem} addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
