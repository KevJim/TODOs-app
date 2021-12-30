import React from 'react'
import { TodoContext } from './utils/TodoContext';
import { TodoProvider } from './utils/TodoContext';
import {TodoCounter} from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoLoading } from './components/TodoLoadings';
import { Empty } from './components/Empty';
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
            {loading && <TodoLoading />}
            {(!loading && !searchedTodos.length) && <Empty />}
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleCompleteTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
            ))} 
          </TodoList>
       )}
      </TodoContext.Consumer>
      <TodoContext.Consumer>
        {({visible, setVisible}) => (
          <>
            {!!visible && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
            <CreateTodoButton setVisible={setVisible} />
          </>
        )}
      </TodoContext.Consumer>
      <Footer />
    </TodoProvider>
  );
}

export default App;
