function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
