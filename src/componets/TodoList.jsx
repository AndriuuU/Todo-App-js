//import React from 'react'
import  Todo  from './Todo.jsx'

const TodoList = ({todos, deleteTodo, updateTodoState, handleEditionMode}) => {
  return (
    <div className='col-8'>
    <h3 className='text-center'>Lista de tareas</h3>
      <ul>
        {
          todos.sort((a,b) => {
            return (b.priority - a.priority) - (b.state - a.state)*2
          })
          .map(todo=> (
            < Todo 
              key={todo.id} 
              todo={todo} 
              deleteTodo={deleteTodo} 
              updateTodoState={updateTodoState} 
              handleEditionMode={handleEditionMode} 
            />
          ))
        }
        {
          todos.length === 0 && (
            <li className='list-group-item text-center'>No hay tareas pendientes</li>
          )
        }
      </ul>
    </div>

  )
}

export default TodoList