const Todo = ({ todo, deleteTodo, updateTodoState, handleEditionMode }) => {
  const { id, title, description, priority, state } = todo

  return (
    <li className='list-group-item'>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={state ? 'completada' : undefined}> 
            {title}
          </h5>
          <p className={state ? 'completada' : undefined}> 
            {description}
          </p>
          <div className='d-flex'>
            <button onClick={() => deleteTodo(id)} className='btn btn-sm btn-danger mr-2'>Eliminar</button>
            <button onClick={() => handleEditionMode(todo)} className='btn btn-sm btn-warning mr-2'>Editar</button>
            <button onClick={() => updateTodoState(id)} className='btn btn-sm btn-primary'>Actualizar Estado</button>
          </div>
        </div>
        {priority && <span className="badge badge-primary">Prioridad</span>}
      </div>
    </li>
  )
}

export default Todo
