import { useState } from "react"
import "./styles.css"
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  // declare new state var
  const [newItem, setNewItem] = useState("")
  const [toDos, setToDos] = useState([])
  
  // event handler on form submit
  function handleSubmit(e) {
    // prevent default response of the form to submit
    e.preventDefault()
    // function to add item into list base on previous array
    setToDos((currentToDos) => {
      return [...currentToDos, { id: uuidv4(), title: newItem, completed: false }]
    })
   
  setNewItem("")
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div>
          <label htmlFor="item">New Item</label>
	  <input 
            value={newItem}
            onChange={ e => setNewItem(e.target.value) } 
            type="text"
            id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
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

