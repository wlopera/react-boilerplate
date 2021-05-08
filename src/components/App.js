import React, { useState } from "react";

const App = (props) => {
  const [task, setTask] = useState({
    title: "Mi primera tarea",
    done: true,
  });

  const changeHandler = (event) => {
    setTask({ title: event.value, done: task.done });
  };

  const clickHandler = () => {
    setTask({ title: task.title, done: !task.done });
    alert("Tarea Modificada: " + JSON.stringify(task));
  };

  return (
    <div>
      <input type="text" value={task.title} onChange={changeHandler} />

      <h1>{task.done.toString()}</h1>

      <button onClick={clickHandler}>Modificar</button>
    </div>
  );
};

export default App;
