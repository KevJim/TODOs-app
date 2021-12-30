import React from 'react'
import { TodoContext } from '../utils/TodoContext'
import "../assets/css/TodoForm.css"

const TodoForm = () => {
  const [value, setValue] = React.useState('');
  const {
    addTodo,
    setVisible
  } = React.useContext(TodoContext)

  const onCancel = () => {
    setVisible(false)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setVisible(false);
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit} className='TodoForm'>
      <label className='FormTitlte'>Nuevo TODO</label>
      <textarea className='TodoTextArea' placeholder='Escribe tu TODO...' value={value} onChange={onChange}/>
      <div className='ButtonsContainer'>
        <button className='formbuttonCancel' type='button' onClick={onCancel}>Cancelar</button>
        <button className='formbuttonAdd' type='submit'>Añadir</button>
      </div>
    </form>
  )
}

export {TodoForm}
