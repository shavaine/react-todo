const SidebarContainer = ({changeUI}) => {
  return (
    <div className="d-flex flex-column vh-100 pb-4 pt-3">
        <h3 className="text-center">React-Todo</h3>
        <hr />
        <ul className="nav flex-column mb-auto h-100">
          <li onClick={() => changeUI("home")} className="text-start btn btn-outline-dark border-0 active" data-bs-toggle="pill">Home</li>
          <li onClick={() => changeUI("all todos")} className="text-start btn btn-outline-dark border-0" data-bs-toggle="pill">All To-do's</li>
          <li onClick={() => changeUI("completed")} className="text-start btn btn-outline-dark border-0" data-bs-toggle="pill">Completed</li>
          <li className="text-start btn btn-outline-dark border-0" data-bs-toggle="pill">Create List</li>
          <li className="text-start btn btn-outline-dark border-0" data-bs-toggle="pill">List</li>
        </ul>
        <hr />
        <div className="input-group">
          <input className="form-control" type="text" name=""/>
          <button className="btn btn-warning">Add List</button> 
        </div>
        
    </div>  
  )
}

export default SidebarContainer