import React, { useEffect, useState } from 'react'


export const Messaje = () => {

    const [coords, setCoords] = useState( {x:0, y:0} );
    const { x, y } = coords

    const mouseMove = (e) => {
        const coords = { x: e.x, y: e.y }
       setCoords( coords )
    }

    window.addEventListener('mousemove', mouseMove);


    useEffect(() => {
      
        console.log('componente montado');
    
      return () => {
        console.log('componente desmontadp');
        window.removeEventListener('mousemove', mouseMove);
      }
    }, []);
    

  return (
    <div>
        <h1>Ere genial</h1>
        <p>
            X = {x}, Y:{y}
        </p>
    </div>
  )
}
