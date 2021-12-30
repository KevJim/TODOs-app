import React from 'react'
import "../assets/css/CreateTodoButton.css"

const CreateTodoButton = (props) => {

  const onClickButton = () => {
    props.setVisible(prevState => !prevState)
  }

  return (
    <button className='CreateTodoButton' onClick={onClickButton} >+</button>
  )
}

export {CreateTodoButton}
