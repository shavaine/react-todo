import TodoList from "../TodoList/TodoList"

const Completed = ({todos, removeTodo, toggleUnComplete, ui}) => {
  return (
    <div className="border p-4">
    <h3 className="text-center">Completed To-dos</h3>
    <TodoList todos={todos} removeTodo={removeTodo} toggleUnComplete={toggleUnComplete} ui={ui}/>
</div>
  )
}

export default Completed