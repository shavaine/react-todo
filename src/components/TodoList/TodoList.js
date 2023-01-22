import Todo from '../Todo/Todo'
import './styles.css';


const TodoList = ({todos, removeTodo, toggleTodoStatus, ui}) => {
  return (
    <div className='h-100 overflow' >
      {todos.map((todo) => <Todo key={todo.id} id={todo.id} todo={todo.task} checked={todo.checked} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus} ui={ui} /> )}
    </div>        
  )
}

export default TodoList