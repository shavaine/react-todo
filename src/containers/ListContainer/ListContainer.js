import TodoList from "../../components/TodoList/TodoList"

const ListContainer = ({list, inView}) => {
  return (
    <div className=" p-4 vh-100 d-flex flex-column">
      <h3 className="text-center">{!list === [] ? list[0].list : inView}</h3>
      <hr />
      { !list === [] ? <TodoList todos={list} /> : null}
    </div>
  )
}

export default ListContainer