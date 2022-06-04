import React, { useEffect, useState } from 'react'
import { Messaje } from './Messaje';



import './efectes.css'



export const UseEfectes = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const { name, email } = formState;

    useEffect( () => { 
       // console.log('Hey!')
    },[]);


    useEffect( () => {
      //  console.log('algo cambio en el formState')
    },[ formState ]);

    useEffect( () => {
     //   console.log('email cambio!')
    }, [email ]);


    const handleInputChange = ({target})=>{
            
            setFormState({
                ...formState,
                [target.name]: target.value
             })
             
    }


    return(

        <>
            <h1>UseEfectes</h1>
            <hr/>

            <input
                type="text"
                name="name"
                className="formControl"
                placeholder="Tu nombre"
                autoComplete="off"
                value= { name }
                onChange=  { handleInputChange }
                
            />
            <hr/>
            <input
                type="email"
                name="email"
                className="formControl"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= { email }
                onChange=  { handleInputChange }
                
            />

            { (name === '123' && <Messaje />)}
        
        </>

    )
}
