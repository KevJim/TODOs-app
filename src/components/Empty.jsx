import React from 'react'
import picture from "../assets/img/todoPicture.png"
import "../assets/css/Empty.css"

const Empty = () => {
  return (
    <div className='Empty'>
      <img src={picture} alt="Todos Vacios" />
      <h2>Empieza por agregar un TODO!</h2>
    </div>
  )
}

export {Empty}
