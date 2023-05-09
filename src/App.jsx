import { useState } from "react"
import "./styles.css"
import { v4 as uuidv4 } from 'uuid'
import ToDoAddForm from "./todoaddform"

export default function App() {
  // declare new state var
  const [toDos, setToDos] = useState([])

  function addToDo(title){
    setToDos((currentToDos) => {
      return [...currentToDos, { id: uuidv4(), title: title, completed: false }]
    })
  }

  function toggleToDo(id,completed) {
    setToDos(currentToDos => {
      return currentToDos.map(toDo => {
        if(toDo.id == id) {
          return {...toDo, completed }
        }
        return toDo
      })
    })
  }
  
  function deleteToDo(id){
    setToDos(currentToDos => {
      return currentToDos.filter(toDo => toDo.id !== id)
    })
  }

  
  return (
    <>
      <ToDoAddForm addToDo={addToDo} /> 
      <h1></h1>
      <ul>
        {toDos.length === 0 && "Nothing here"}
        {toDos.map( toDo => {
          return (
            <li  key={toDo.id} >
              <label>
                <input type="checkbox" checked={toDo.completed} onChange={e => toggleToDo(toDo.id, e.target.checked)} />
                {toDo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteToDo(toDo.id)}>Delete</button>
            </li>            
          )
        })}
      </ul>
    </>
  )
}

