const Todo = ({todo, removeTodo}) => {
    const handleInputChange = ({target}) => {
        target.checked && removeTodo(todo)
    };


  return (
    <div className="input-group mb-3">
        <div className="input-group-text">
            <input className="form-check-input mt-0" checked={false} type="checkbox" onChange={handleInputChange} />
        </div>
        <p className="form-control mb-0">{todo}</p>
    </div>
  )
}

export default Todo