import TaskCard from "./TaskCard";

function TaskList({ task }) {
  if (task.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div>
      {task.map((task) => (
        <TaskCard task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
