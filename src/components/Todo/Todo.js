const Todo = ({todo, toggleTodoStatus, checked, id}) => {
    const handleInputChange = ({target}) => {
        toggleTodoStatus(id, target.checked)
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <input className="form-check-input mt-0" checked={checked} type="checkbox" onChange={handleInputChange} />
            </div>
            <p className="form-control mb-0 overflow-x-scroll">{todo}</p>
        </div>
    )
}

export default Todo