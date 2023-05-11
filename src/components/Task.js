import React from "react";
import '../stylesheet/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({text, completed, id, completarTarea, eliminarTarea }){
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className="task-text" onClick={() => completarTarea(id)}>
                {text}
            </div>
            <div className="task-icon-container" onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="task-icon" />
            </div>
        </div>
    );
}

export default Task;