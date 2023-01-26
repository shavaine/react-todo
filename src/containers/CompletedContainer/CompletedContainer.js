import CompletedTodoList from "../../components/TodoList/CompletedTodoList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const Completed = ({todos, removeTodo, toggleTodoStatus}) => {
  const [results, setResults] = useState([]);

  return (
    <div className="p-4 vh-100 d-flex flex-column">
        <SearchBar todos={todos} setResults={setResults} />
        <h3 className="text-center">Completed To-dos</h3>
        <hr />
        <CompletedTodoList todos={results} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus}/>
    </div>
  )
}

export default Completed