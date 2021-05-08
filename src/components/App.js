import React, { useState } from "react";

const App = (props) => {
  const [task, setTask] = useState({
    title: "Mi primera tarea",
    done: true,
  });

  const changeHandler = (event) => {
    setTask({ title: event.target.value, done: task.done });
  };

  const clickHandler = () => {
    console.log(task);
    setTask({ title: task.title, done: !task.done });
    alert("Tarea Modificada: " + JSON.stringify(task));
    console.log("Tarea Modificada: " + task);
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
