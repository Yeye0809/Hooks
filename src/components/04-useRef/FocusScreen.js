import React, { useRef } from 'react'
import '../02-useEfects/efectes.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    

    const handleFocus = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

  return (
    <>
        <h1>
        FocusScreen
        </h1>

        <input
             ref={ inputRef }
            className="form-control"
            placeholder="tu nombre"
        />

        <button 
        className="btn btn-outline-primary"
        onClick={ handleFocus }
        >Focus</button>
    </>


  )
}
