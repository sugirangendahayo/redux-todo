import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Review pull request from Marcus", completed: true },
    { id: 2, text: "Fix login page redirect bug", completed: false },
    { id: 3, text: "Write unit tests for cart module", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Todos</h1>
          <p className="subtitle">Stay on track</p>
        </header>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-num">{total}</span>
            <span className="stat-text">Total</span>
          </div>
          <div className="stat">
            <span className="stat-num pending">{pending}</span>
            <span className="stat-text">Pending</span>
          </div>
          <div className="stat">
            <span className="stat-num done">{completed}</span>
            <span className="stat-text">Done</span>
          </div>
        </div>

        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
