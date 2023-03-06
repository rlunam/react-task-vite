import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState(" ");
  const [description, setdescription] = useState(" ");
  const {createTask} = useContext(TaskContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle(""); /* cada que se guarda el valor, pone un string vacio */
    setdescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-white text-4xl font-bold text-center">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title} 
        className="bg-slate-300 p-3 w-full mb-2 text-gray-700"/* el valor se inicializa en lo que tiene title */
        autoFocus /* el cursor se posiciona en el input */
      />
      <textarea
        placeholder="Escribe una descripcion"
        onChange={(e) => setdescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2 text-gray-700 "
        value={description}
      />

      {/* se obtiene el valor actual del campo, cada que el usuario escribe algo */}
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
