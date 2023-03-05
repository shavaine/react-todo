const CompletedTodo = ({todo, removeTodo, toggleTodoStatus, checked, id}) => {
    const handleInputChange = ({target}) => {
        toggleTodoStatus(id, target.checked)
    };

    const handleClick = () => {
        removeTodo(id)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <input className="form-check-input mt-0" checked={checked} type="checkbox" onChange={handleInputChange} />
            </div>
            <p className="form-control mb-0 text-decoration-line-through overflow-x-scroll">{todo}</p>
            <button onClick={handleClick} className="btn btn-danger"><i className="bi bi-x-circle"></i></button>
        </div>
    )
}

export default CompletedTodo