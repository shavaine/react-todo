import { useState } from "react";

const AddTodoForm = ({addTodo}) => {
    const[newTodo, setNewTodo] = useState('');

    const handleChange = ({target}) => {
        setNewTodo(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="input-group mb-3">
            <input className="form-control" type="text" name="" value={newTodo} onChange={handleChange}></ input>
            <button onSubmit={handleSubmit} className="btn btn-success"><i className="bi bi-plus-circle"></i> Add Todo</button>
        </form>
        <hr />
    </div>
  )
}

export default AddTodoForm