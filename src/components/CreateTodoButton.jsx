import React from 'react'
import "../assets/css/CreateTodoButton.css"

const CreateTodoButton = () => {

  const onClickButton = (msg) => {
    alert(msg)
  }

  return (
    <button onClick={() => onClickButton('Aqui deberia abrir el modal')} >+</button>
  )
}

export {CreateTodoButton}
