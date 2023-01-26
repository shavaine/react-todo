import CompletedTodo from '../Todo/CompletedTodo';
import './styles.css';


const CompletedTodoList = ({todos, removeTodo, toggleTodoStatus}) => {
  return (
    <div className='h-100 overflow' >
      {todos.map((todo) => 
      <CompletedTodo 
        key={todo.id} 
        id={todo.id} 
        todo={todo.task} 
        checked={todo.checked} 
        removeTodo={removeTodo} 
        toggleTodoStatus={toggleTodoStatus} 
      /> 
        )}
    </div>        
  )
}

export default CompletedTodoList;