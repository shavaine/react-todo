import Todo from '../Todo/Todo'
import './styles.css';


const TodoList = ({todos, removeTodo, toggleComplete, toggleUnComplete, ui}) => {
  return (
    <div className='h-100 overflow' >
      {todos.map((todo, index) => <Todo key={index} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} toggleUnComplete={toggleUnComplete} ui={ui} /> )}
    </div>        
  )
}

export default TodoList