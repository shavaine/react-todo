import TodoList from "../../components/TodoList/TodoList"

const ListContainer = ({list}) => {
  return (
    <div className=" p-4 vh-100 d-flex flex-column">
      <h3 className="text-center">{list[0].list}</h3>
      <hr />
      <TodoList todos={list} />
    </div>
  )
}

export default ListContainer