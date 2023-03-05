import { useEffect, useState } from "react";
import Tasklist from "./Tasklist";
import { task as data } from "./task";
import TaskForm from "./TaskForm";


function App() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(taskTitle) {
   setTask([...task, {
    title: taskTitle,
    id: task.length,
    description: "nueva tarea"
   }])
   }
  return (
    <div>
      <TaskForm createTask={createTask} />
      <Tasklist task={task}/>
    </div>
  );
}

export default App; 
