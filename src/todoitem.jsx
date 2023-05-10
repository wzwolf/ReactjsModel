export default function ToDoItem({id, title, completed, toggleToDo,deleteToDo}) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={e => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button 
        className="btn btn-danger"
        onClick={() => deleteToDo(id)}>Delete</button>
    </li>
  )
} 
