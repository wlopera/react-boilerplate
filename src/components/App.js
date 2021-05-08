import React, { useState } from "react";

const App = (props) => {
  const [task, setTask] = useState({
    title: "Mi primera tarea",
    done: true,
  });

  const clickHandler = () => {
    setTask({ title: task.title, done: !task.done });
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <h1>{task.done.toString()}</h1>

      <button onClick={clickHandler}>Procesar</button>
    </div>
  );
};

export default App;
