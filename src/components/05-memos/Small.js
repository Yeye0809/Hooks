import React from 'react'


export const Small = React.memo(({value}) => {
    
    console.log('Me volvi a mostrar :c')
   
  return (
    <small>{value }</small>
  )
});
// el "memo" ayuda a memorizar el componente, para que se renderize si sus propiedades cambian

