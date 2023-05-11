import React, { useState } from 'react';
import '../stylesheet/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(tareaNueva);
    };



    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='Add a task'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>Add task</button>
        </form>
    );
}

export default TareaFormulario;