import {Task} from './Tasklist'
import { useState } from 'react';
console.log(task);

function Tasklist() {

    const [Task, setTask] = useState([]);

    return (
       <div>
        {Task.map((task) => (
            <div>tarea<div/>
        ))}
       </div>
    ) 
        };

export default Tasklist;