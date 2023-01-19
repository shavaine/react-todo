import { useState } from "react"
import TodoList from "../../components/TodoList/TodoList";

const listOfTodos = ['take out the trash', 'vaccum the stairs', 'go for a walk'];

const TodoContainer = () => {
    const [todos, TodosList] = useState(listOfTodos);


    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center">To-do List</h3>
                <TodoList todos={todos} />
            </div>
        </div>
    )
}

export default TodoContainer