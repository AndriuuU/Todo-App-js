//import { useState } from "react"
import Swal from "sweetalert2"

const Formulario = ({addTodo, editionMode, editTodo, todo, setTodo}) => {

const {title, description, priority, state} = todo

  const handleSubmit = e => {     
     e.preventDefault()
     if (title.trim() === "" || description.trim() === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo va mal...!",
      });
     } 

     addTodo({
      ...todo,
      id:Date.now(),
      state: state == "completada"
     })
    console.log(`Enviando ${todo.title}, ${todo.description} y ${todo.state} al servidor...`)
  }

  const handleEdit = e => {
    e.preventDefault()
    editTodo()
  }

  const handlechange = e => {
    const {name, type, checked, value } = e.target
    setTodo({
      ...todo,
    [name]:type === "checkbox"? checked:value
    })
  }

  return (
      <div className='col-4'>
        <h3 className='text-center'>{editionMode ? 'Editar Tarea' : 'Agregar tareas'}</h3>
        <form onSubmit={editionMode ? handleEdit : handleSubmit}>
            <input 
                name="title" 
                placeholder="Introduce nombre de la tarea"
                type="text" 
                className="form-control mb-2" 
                value = {title}
                onChange={handlechange}
            />
            <textarea
                name="description"
                placeholder="Introduce la descripcion"
                className="form-control mb-2" 
                value = {description}
                onChange={handlechange}
            />
            <select 
                name="state" 
                className="form-control mb-2" 
                value = {state} 
                onChange={handlechange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-checked mb-2">
              <input 
                className="form-checked-input"
                type="checkbox"
                name="priority"
                id = "inputchecked"
                checked = {priority}
                onChange={handlechange}
              />
              <label 
                htmlFor="inputchecked"
                className="form-checked-label"
              >
                Prioridad
              </label>
            </div>
            {editionMode ? (
              <button className='btn btn-warning w-100 mt-2'>
                Guardar Cambios
              </button>
            ) : (
              <button className='btn btn-dark w-100 mt-2'>Agregar</button>
            )}
        </form>
    </div>
  )
}

export default Formulario