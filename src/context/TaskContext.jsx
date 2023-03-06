/* cuando dentro de un componente hay otro componente se llaman elementos hijos */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";


export const TaskContext = createContext(); /* esto almacena los datos */
export function TaskContextProvider(props) {
  /* este es el componente que engloba a todos */
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    ); /* por cada tarea que se recorra se confirma si es igual al id que esta pasando */
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

/* TaskContext es el nombre del contexto, contiene a app, taskform, y tasklist */
