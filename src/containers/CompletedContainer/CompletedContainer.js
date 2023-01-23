import TodoList from "../../components/TodoList/TodoList"

const Completed = ({todos, removeTodo, toggleTodoStatus}) => {
  return (
    <div className="border p-4">
        <h3 className="text-center">Completed To-dos</h3>
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus}/>
    </div>
  )
}

export default Completed