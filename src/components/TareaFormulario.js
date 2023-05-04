import React from 'react';
import '../stylesheet/TareaFormulario.css'

function TareaFormulario(props) {
    return (
        <form className='tarea-formulario'>
            <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            />
            <button className='tarea-boton'>Add task</button>
        </form>
    )
}

export default TareaFormulario;