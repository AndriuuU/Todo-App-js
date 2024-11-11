import { useEffect, useState } from 'react'
import Formulario from './componets/controlado.jsx'
import TodoList from './componets/TodoList'

const todosInitialState = JSON.parse(localStorage.getItem("todos")) || [ ]

const todoInitialState = {
  title: '',
  description: '',
  state: '',
  priority: false
}

const App = () => {

  const [todos, setTodos] = useState(todosInitialState)
  const [editionMode, setEditionMode] = useState(false)
  const [todo, setTodo] = useState(todoInitialState)

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  })

  const addTodo = todo => {
    setTodos([...todos,todo])
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }
  
  const editTodo = () => {
    const newArray = todos.map(item => 
      item.id === todo.id ? todo : item
    );
    setTodos(newArray);
    setEditionMode(false);
    setTodo(todoInitialState);
  }

  const updateTodoState = id => {
    const newArray = todos.map(todo => {
      if (todo.id == id) {
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(newArray)
  }

  const handleEditionMode = todo => {
    setEditionMode(true)
    setTodo(todo)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <div className='container mt-4'>
      <h1 className='text-center'>Todo App</h1>
      <hr />
      <div className='row mt-2'>
        < Formulario 
            todo={todo}
            setTodo={setTodo}
            addTodo = {addTodo} 
            editionMode={editionMode} 
            editTodo = {editTodo} />
        < TodoList 
            todos={todos} 
            deleteTodo={deleteTodo} 
            updateTodoState={updateTodoState}
            handleEditionMode={handleEditionMode}
          />
      </div>
    </div>
  )
}

export default App