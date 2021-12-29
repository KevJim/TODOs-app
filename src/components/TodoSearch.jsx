import React from 'react'
import "../assets/css/TodoSearch.css"
import { TodoContext } from '../utils/TodoContext'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input className='TodoSearch' placeholder="Busca un TODO" value={searchValue} onChange={onSearchValueChange} />
  )
}

export  {TodoSearch}
