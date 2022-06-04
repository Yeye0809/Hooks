import React, { useCallback, useState } from 'react'
import '../02-useEfects/efectes.css'
import { ShowIncrement } from './ShowIncrement'

export const UseCallback = () => {

    const [counter, setCounter] = useState( 10 )

    // const increment = () => {
    //     setCounter( counter +1)
    // }

    const increment = useCallback(
      (num) => {
        setCounter( c => c + num);
      },
      [ setCounter ],
    )
    

  return (
    <>
    <h1>UseCallback Hooks: { counter }</h1>

    <ShowIncrement increment={ increment } />
    </>
  )
}
