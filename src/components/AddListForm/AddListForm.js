import { useState } from "react";

const AddListForm = ({addList}) => {
    const[newList, setNewList] = useState('');

    const handleChange = ({target}) => {
        setNewList(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addList(newList)
        setNewList('')
    }

  return (
    <div className="">
        <form onSubmit={handleSubmit} className="input-group">
            <input className="form-control" type="text" name="" value={newList} onChange={handleChange}></ input>
            <button onSubmit={handleSubmit} className="btn btn-warning">Add List</button>
        </form>
    </div>
  )
}

export default AddListForm