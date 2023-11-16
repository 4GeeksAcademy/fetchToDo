import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = (task) => {
    if (!task) return;
    const newTodoList = [
      ...toDos,
      { id: toDos.length + 1, task: task, done: false },
    ];
    setToDos(newTodoList);
  };
  const deleteTodo = (id) => {
    const newTodoList = toDos.filter((item) => item.id != id);
    setToDos(newTodoList);
  };

  const updateTask = (id, task) => {
    const newToDos = toDos.map((item) => {
      if (item.id === id) {
        console.log(task);
        return { ...item, done: task };
      }
      return item;
    });

    setToDos(newToDos);
  };

  const changeTodoState = (id, state) => {
    const newTodoList = toDos.map((item) => {
      if (toDos.id == id) {
        return { ...item, done: state };
      }
      return item;
    });
    setToDos(newTodoList);
  };

  return (
    <div className="first">
      <h1>
        {"📃"} Weekly To Do {"✔️"}
      </h1>
      <form
        id="toDoInput"
        className="new-todo-cont"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="inputTodo"
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add New ToDo"
        />
        <button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          ➕
        </button>
      </form>
      <ul className="todo-list">
        {toDos.map((item) => {
          return (
            <li
              className={`todo-item ${item.done ? "done" : "not"} `}
              key={item.id}
            >
              <input
                type="checkbox"
                value={item.done}
                onChange={(e) => changeTodoState(item.id, e.target.checked)}
              />
              <input
                className="todo-item-text "
                type="text"
                value={item.task}
                onChange={(e) => updateTask(item.id, e.target.value)}
              />

              <button onClick={() => deleteTodo(item.id)} className="delete">
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
