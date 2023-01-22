const SidebarContainer = ({changeUI}) => {
  return (
    <div>
        <h3 className="text-center">React-Todo</h3>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
        <li onClick={() => changeUI("home")} className="nav-link">Home</li>
        <li onClick={() => changeUI("all todos")} className="nav-link">All Todos</li>
        <li className="nav-link">Completed</li>
        <li className="nav-link">Create List</li>
        <li className="nav-link">List</li>
        </ul>
    </div>  
  )
}

export default SidebarContainer