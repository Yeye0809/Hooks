import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {


    const [ { descrip }, handleInputChange, reset ] = useForm({
        descrip: ''
    });

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(descrip.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descrip,
            done: false
        }

        
        handleAddTodo( newTodo );
        reset();
        

        console.log('nueva tarea');
    }
    
  return (
    <>
           <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit } >
                        <input 
                        type="text"
                        name="descrip"
                        className='form-control'
                        placeholder="Agregar..."
                        autoComplete="off"
                        value={ descrip }
                        onChange={ handleInputChange }
                        />


                        <div className='d-grid gap-2 mt-1' >
                            <button
                            type="submit"
                            className="btn btn-primary  "
                            >
                                Agregar
                            </button>
                        </div>
                        
                    </form>
    </>
  ) 
}
