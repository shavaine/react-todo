import { useState } from "react"
import TodoList from "../../components/TodoList/TodoList";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import SearchBar from "../../components/SearchBar/SearchBar";

const listOfTodos = ['take out the trash', 'vaccum the stairs', 'go for a walk'];

const TodoContainer = () => {
    const [todos, setTodos] = useState(listOfTodos);

    const AddTodo = (todo) => {
        setTodos([todo,...todos])
    }

    const RemoveTodo = (todo) => {
        const newTodos = todos.filter((currentTodo) => currentTodo !== todo);
        setTodos(newTodos);
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-8 border p-4">
                    <h3 className="text-center">To-do List</h3>
                    <SearchBar />
                    <AddTodoForm addTodo={AddTodo} />
                    <TodoList todos={todos} removeTodo={RemoveTodo} />
                </div>
            </div>
        </div>
    )
}

export default TodoContainer