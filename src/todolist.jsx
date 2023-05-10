import ToDoItem from './todoitem'

export default function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
     <ul>
        {toDos.length === 0 ? "Nothing here":null}
        {toDos.map( toDo => {
          console.log("mapping to do ", toDo)
          return (
            <ToDoItem 
              {...toDo}
              key={toDo.id}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </ul>
  )
}
