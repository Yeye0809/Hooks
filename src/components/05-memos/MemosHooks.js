import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'


import '../02-useEfects/efectes.css'
 

export const MemosHooks = () => {
    
    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true)

    const memoProcesado =  useMemo(() => procesoPesado(counter), [counter])



  return (
    <>
        <h1>MemosHooks</h1>
        <h3> counter :{ counter }</h3>
        <hr/>

        <p> { memoProcesado }</p>

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
 