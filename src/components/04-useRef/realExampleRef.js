import React, {  useState } from 'react'

import '../02-useEfects/efectes.css'
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks'

export const RealExampleRef = () => {

   
    const [show, setShow] = useState(false)

    

  return (
    <>
        <h1>RealExampleRef</h1>

        <div>
           { show && <MultipleCustomHooks /> }
        </div>
        
        <button 
        className='btn btn-primary mt-5'
        onClick={ () => { setShow (!show)}}
        >
            Show/Hide </button>
    </>

   
  )
}
