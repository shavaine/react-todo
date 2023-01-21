const SidebarContainer = () => {
  return (
    <div>
        <h3 className="text-center">React-Todo</h3>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
        <li><a href="#" class="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">All Todos</a></li>
        <li><a href="#" className="nav-link">Completed</a></li>
        <li><a href="#" className="nav-link">Create List</a></li>
        <li><a href="#" className="nav-link">List</a></li>
        </ul>
    </div>  
  )
}

export default SidebarContainer