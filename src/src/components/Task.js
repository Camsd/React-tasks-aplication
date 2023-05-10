import React from "react";
import '../stylesheet/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({text, completed, id, completarTarea, eliminarTarea }){
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className="task-text">
                {text}
            </div>
            <div className="task-icon-container">
                <AiOutlineCloseCircle className="task-icon" />
            </div>
        </div>
    );
}

export default Task;