const Todo = ({todo, removeTodo, toggleComplete, toggleUnComplete, ui}) => {
    const checkedStyle = "form-control mb-0 text-decoration-line-through overflow-x-scroll"
    const unCheckedStyle = "form-control mb-0 overflow-x-scroll"

    const handleInputChange = ({target}) => {
        if (ui === "completed") {
            toggleUnComplete(todo);
        } else {
            toggleComplete(todo)
        }
    };

    const handleClick = () => {
        removeTodo(todo)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <input className="form-check-input mt-0" checked={ui === "completed" ? true : false} type="checkbox" onChange={handleInputChange} />
            </div>
            <p className={ui === "completed" ? checkedStyle : unCheckedStyle}>{todo}</p>
            {ui === "completed" && <button onClick={handleClick} className="btn btn-danger"><i className="bi bi-x-circle"></i></button>}
            {/* <button onClick={handleClick} className="btn btn-danger"><i className="bi bi-x-circle"></i></button> */}
        </div>
    )
}

export default Todo