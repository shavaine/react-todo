import TodoList from "../TodoList/TodoList"

const Completed = ({todos, removeTodo, toggleTodoStatus, ui}) => {
  return (
    <div className="border p-4">
        <h3 className="text-center">Completed To-dos</h3>
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus} ui={ui}/>
    </div>
  )
}

export default Completed