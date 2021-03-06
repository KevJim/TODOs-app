import React from 'react'
import '../assets/css/TodoCounter.css'
import { TodoContext } from '../utils/TodoContext'

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)

  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

export {TodoCounter}
