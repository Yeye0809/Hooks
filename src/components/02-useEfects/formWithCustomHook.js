import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';




import './efectes.css'



export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const [name, email,password ]  = formValues;

    useEffect( () => {
        console.log("el email cambio");
    }, [email])
    
    const handleSutmid = ( e ) =>{
        
        console.log( formValues );
    }


    return(

        <form onSubmit={ handleSutmid }>
            <h1>formWithCustomHook</h1>
            <hr/>
            <div>
                <input
                    type="text"
                    name="name"
                    className="formControl"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value= { name }
                    onChange=  { handleInputChange }
                    
                />
            </div>
            
            <div>
                <input
                    type="email"
                    name="email"
                    className="formControl"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value= { email }
                    onChange=  { handleInputChange }
                    
                />
            </div>
            
            <div>
                <input
                    type="password"
                    name="password"
                    className="formControl"
                    placeholder="*****"
                    value= { password }
                    onChange=  { handleInputChange }
                    
                />
            </div>

                <button type='sutmid' className='btn btn-primary'>
                    guardar
                </button>

        
        </form >

    )
}
