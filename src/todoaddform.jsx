import { useState } from 'react'

export default function ToDoAddForm(props) {
  // declare new state var
  const [newItem, setNewItem] = useState("")

  // todoaddform
  // event handler on form submit
  function handleSubmit(e) {
    // prevent default response of the form to submit
    e.preventDefault()
    // function to add item into list base on previous array
    if(newItem === "") return
    props.addToDo(newItem)

  setNewItem("")
  }
  
  return (
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
)}
