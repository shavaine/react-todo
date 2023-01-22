import TodoList from "../../components/TodoList/TodoList";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import SearchBar from "../../components/SearchBar/SearchBar";

const TodoContainer = ({todos, AddTodo, RemoveTodo}) => {

    return (
        <div className="border p-4">
            <h3 className="text-center">To-do List</h3>
            <SearchBar todos={todos} />
            <AddTodoForm addTodo={AddTodo} />
            <TodoList todos={todos} removeTodo={RemoveTodo} />
        </div>
    )
}

export default TodoContainer