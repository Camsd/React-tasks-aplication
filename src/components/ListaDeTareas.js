import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../stylesheet/ListaDeTareas.css'
import Task from './Task';

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.text.trim()){
      tarea.text =tarea.text.trim();
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completed = !tarea.completed;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

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
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;