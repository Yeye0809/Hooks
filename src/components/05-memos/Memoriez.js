import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import '../02-useEfects/efectes.css'
 

export const Memoriez = () => {
    
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true)

  return (
    <>
        <h1> counter : <Small value={ counter }/> </h1>
        <hr/>

        <button 
        className="btn btn-primary"
        onClick={ increment }
        >
            +1
        </button>

        <button 
        className="btn btn-outline-primary ml-3"
        onClick={ () => {
          setShow(!show)
        }}
        >
          Show/Hiden { JSON.stringify( show ) }
        </button>
    </>
  )
}
 