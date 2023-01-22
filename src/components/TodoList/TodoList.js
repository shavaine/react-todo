import Todo from '../Todo/Todo'


const TodoList = ({todos, removeTodo, toggleComplete, toggleUnComplete, ui}) => {
  return (
    <div>
        {todos.map((todo, index) => <Todo key={index} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} toggleUnComplete={toggleUnComplete} ui={ui} /> )}
    </div>        
  )
}

export default TodoList