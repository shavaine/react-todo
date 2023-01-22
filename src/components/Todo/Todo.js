const Todo = ({todo, removeTodo, toggleTodoStatus, ui, checked, id}) => {
    const checkedStyle = "form-control mb-0 text-decoration-line-through overflow-x-scroll"
    const unCheckedStyle = "form-control mb-0 overflow-x-scroll"

    const handleInputChange = ({target}) => {
        toggleTodoStatus(id, checked)
    };

    const handleClick = () => {
        removeTodo(id)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <input className="form-check-input mt-0" checked={checked} type="checkbox" onChange={handleInputChange} />
            </div>
            <p className={ui === "completed" ? checkedStyle : unCheckedStyle}>{id}{todo}</p>
            {ui === "completed" && <button onClick={handleClick} className="btn btn-danger"><i className="bi bi-x-circle"></i></button>}
            {/* <button onClick={handleClick} className="btn btn-danger"><i className="bi bi-x-circle"></i></button> */}
        </div>
    )
}

export default Todo