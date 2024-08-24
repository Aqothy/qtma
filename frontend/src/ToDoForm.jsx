import Plus from "./assets/plus.jsx";

function ToDoForm({ newItem, setNewItem, addTodo }) {
  return (
    <div className="todo">
      <form className="new-task" onSubmit={addTodo}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="input"
          placeholder="toodoo"
        />
        <button className="button">
          <Plus />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
