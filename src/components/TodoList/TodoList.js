import Todo from '../Todo/Todo'
import './styles.css';


const TodoList = ({todos, toggleTodoStatus}) => {
  return (
    <div className='h-100 overflow' >
      {todos.map((todo) => 
      <Todo 
        key={todo.id} 
        id={todo.id} 
        todo={todo.task} 
        checked={todo.checked}  
        toggleTodoStatus={toggleTodoStatus} 
      /> 
        )}
    </div>        
  )
}

export default TodoList