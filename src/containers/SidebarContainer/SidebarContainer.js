import AddListForm from "../../components/AddListForm/AddListForm"

const SidebarContainer = ({changeUI, list, addList, loading}) => {
  return (
    <div className="d-flex flex-column vh-100 pb-4 pt-3">
        <h3 className="text-center">React-Todo</h3>
        { loading === true ? <h5 className="text-center">...Loading</h5> : null }
        <hr />
        <ul className="nav flex-column mb-auto h-100">
          <li onClick={() => changeUI("home")} className="text-start btn btn-outline-dark border-0 active" data-bs-toggle="pill">Home</li>
          <li onClick={() => changeUI("all todos")} className="text-start btn btn-outline-dark border-0" data-bs-toggle="pill">All To-do's</li>
          <li onClick={() => changeUI("completed")} className="text-start btn btn-outline-dark border-0" data-bs-toggle="pill">Completed</li>
          <li className="text-start btn btn-outline-dark border-0 dropdown-toggle" data-bs-toggle="dropdown">List</li>
          <ul className="dropdown-menu">
            {list.map((singleList, index) => {
              return <li key={index} onClick={() => { return changeUI("list", singleList) }} className=" dropdown-item text-start btn btn-outline-dark border-0" data-bs-toggle="pill">{singleList}</li>
            })}
          </ul>
        </ul>
        <hr />
        <AddListForm addList={addList} />
        
    </div>  
  )
}

export default SidebarContainer