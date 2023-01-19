import { useState } from "react";

const AddTodoForm = ({addTodo}) => {
    const[newTodo, setNewTodo] = useState('');

    const handleChange = ({target}) => {
        setNewTodo(target.value)
    }

  return (
    <div>
        <input type="text" name="" value={newTodo} onChange={handleChange}></ input>
        <button onClick={() => addTodo(newTodo)} className="btn btn-success"><i className="bi bi-plus-circle"></i> Add</button>
    </div>
  )
}

export default AddTodoForm