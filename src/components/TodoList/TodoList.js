import Todo from '../Todo/Todo'


const TodoList = ({todos, removeTodo}) => {
  return (
    <div>
        {todos.map((todo, index) => <Todo key={index} todo={todo} removeTodo={removeTodo} /> )}
    </div>        
  )
}

export default TodoList