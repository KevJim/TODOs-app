import React from 'react'
import { TodoContext } from './utils/TodoContext';
import { TodoProvider } from './utils/TodoContext';
import {TodoCounter} from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Footer } from './components/Footer';
import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Curso react', completed: false},
//   { text: 'Llorar', completed: false},
// ]



function App() {

  return (
    <TodoProvider>
      <TodoCounter/>
      <TodoSearch/> 

      <TodoContext.Consumer>
       {({error, loading, searchedTodos, toggleCompleteTodo, deleteTodo}) => (
          <TodoList> 
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleCompleteTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
            ))} 
          </TodoList>
       )}
      </TodoContext.Consumer>

      <CreateTodoButton />
      <Footer />
    </TodoProvider>
  );
}

export default App;
