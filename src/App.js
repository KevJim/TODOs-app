import React from 'react'
import {TodoCounter} from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Footer } from './components/Footer';
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Curso react', completed: false},
  { text: 'Llorar', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch /> 

      <TodoList> 
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))} 
      </TodoList>

      <CreateTodoButton />
      <Footer />
    </>
  );
}

export default App;
