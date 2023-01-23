import TodoList from "../../components/TodoList/TodoList";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const TodoContainer = ({todos, AddTodo, removeTodo, toggleTodoStatus}) => {
    const [results, setResults] = useState([]);

    return (
        <div className=" p-4 vh-100 d-flex flex-column">
            <SearchBar todos={todos} setResults={setResults} />
            <h3 className="text-center">To-do List</h3>
            <hr />
            <TodoList todos={results} removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus} /> 
            <hr />
            <AddTodoForm addTodo={AddTodo} />
        </div>
    )
}

export default TodoContainer