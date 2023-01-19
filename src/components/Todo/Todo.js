import { useState } from "react";

const Todo = ({todo, removeTodo}) => {
    const [checked, setChecked] = useState(false);

    const checkedStyle = "form-control mb-0 text-decoration-line-through"
    const unCheckedStyle = "form-control mb-0"

    const handleInputChange = ({target}) => {
        setChecked(target.checked)
    };

    const handleClick = () => {
        removeTodo(todo)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <input className="form-check-input mt-0" checked={checked} type="checkbox" onChange={handleInputChange} />
            </div>
            <p className={checked ? checkedStyle : unCheckedStyle}>{todo}</p>
            <button onClick={handleClick} className="btn btn-danger"><i className="bi bi-x-circle"></i></button>
        </div>
    )
}

export default Todo