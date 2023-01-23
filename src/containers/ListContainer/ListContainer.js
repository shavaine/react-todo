import TodoList from "../../components/TodoList/TodoList"
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useState } from "react"

const ListContainer = ({list, inView, removeTodo, toggleTodoStatus, addTodo}) => {
  const [results, setResults] = useState([]);

  return (
    <div className=" p-4 vh-100 d-flex flex-column">
      <SearchBar todos={list} setResults={setResults} />
      <h3 className="text-center">{!list === [] ? list[0].list : inView}</h3>
      <hr />
      { list === [] ? null : <TodoList todos={results} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus} />}
      <hr />
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default ListContainer