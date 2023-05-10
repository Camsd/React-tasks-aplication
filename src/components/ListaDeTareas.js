import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../stylesheet/ListaDeTareas.css'
import Task from './Task';

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);
    if (tarea.text.trim()){
      tarea.text =tarea.text.trim();
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas);
    }
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
          <Task
            key={tarea.id}
            id={tarea.id}
            text={tarea.text}
            completed={tarea.completed}
          />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;