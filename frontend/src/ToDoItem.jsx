import Trash from "./assets/trash.jsx";

function ToDoItem({ todo, deleteTodo }) {
  return (
    <div className="tasks">
      <input className="check" type="checkbox" />
      <div className="integer-urna">{todo.title}</div>
      <button onClick={() => deleteTodo(todo._id)} className="trash">
        <Trash />
      </button>
    </div>
  );
};

export default ToDoItem;
