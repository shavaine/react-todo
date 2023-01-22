import TodoList from "../../components/TodoList/TodoList";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import SearchBar from "../../components/SearchBar/SearchBar";

const TodoContainer = ({todos, AddTodo, removeTodo, toggleComplete, ui}) => {

    return (
        <div className=" p-4 vh-100 d-flex flex-column">
            <SearchBar todos={todos} />
            <h3 className="text-center">To-do List</h3>
            <hr />
            <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} ui={ui} /> 
            <hr />
            <AddTodoForm addTodo={AddTodo} />
        </div>
    )
}

export default TodoContainer