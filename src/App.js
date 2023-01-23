import { useState } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import Home from './components/Home/Home';
import Completed from './containers/CompletedContainer/CompletedContainer';
import ListContainer from './containers/ListContainer/ListContainer';

const starterTodos = [
  {id: 1, task: "example to-do 1", checked: false, list: 'Example List 1'},
  {id: 2, task: "example to-do 2", checked: false, list: 'Example List 1'},
  {id: 3, task: "example to-do 3", checked: false, list: 'Example List 2'},
  {id: 4, task: "example to-do 4", checked: false, list: 'Example List 3'},
  {id: 5, task: "example to-do 5", checked: false, list: 'Example List 3'},
]

function App() {
  const [UI, setUI] = useState('home')
  const [todos, setTodos] = useState(starterTodos);
  const [listInView, setListInView] = useState('')
  const getList = () => {
    const notUniqueList = todos.map((todo) => todo.list);
    const uniqueList = [...new Set(notUniqueList)]
    return uniqueList
  }
  const [list, setList] = useState(getList())
  const [completedTodos, setCompletedTodo] = useState([]);
  const [IDCounter, setIDCounter] = useState(5);

  const AddTodo = (todo) => {
      const newId = IDCounter + 1
      setIDCounter(newId)
      const newTodo = {id: [newId], task: [todo], checked: false, list: ''}
      setTodos([newTodo,...todos])
  }

  const RemoveTodo = (todoId, type, listId) => {
    if (type === "check") {
      const newTodos = todos.filter((currentTodo) => currentTodo.id !== todoId);
      setTodos(newTodos);
    } else if (type === "un-check") {
      const newTodos = completedTodos.filter((currentTodo) => currentTodo.id !== todoId);
      setCompletedTodo(newTodos);
    } 
  }

  const AddList = (listName) => {
    if (listName === '') {
      alert('Sorry, list must contain a value');
    } else if (list.includes(listName)) {
      alert('Sorry that list already exist.');
    } else {
      setList([listName,...list])
    }
  }

  const ChangeUI = (newUI, currentList) => {
    if (newUI === "list") {
      setListInView(currentList)
      setUI(newUI);
    } else{
      setUI(newUI)
    }
  }

  const ToggleTodoStatus = (todoId, checked) => {
    if (!checked) {
      const toggledTodo = todos.find(todo => todo.id === todoId);
      toggledTodo.checked = true;
      setCompletedTodo([toggledTodo,...completedTodos]);
      RemoveTodo(todoId, "check");
    } else if (checked) {
        const toggledTodo = completedTodos.find(todo => todo.id === todoId);
        toggledTodo.checked = false;
        setTodos([toggledTodo,...todos])
        RemoveTodo(todoId, "un-check");
    }
  }

  const CurrentUI = () => {
    if (UI === "home") {
      return <Home />
    } else if (UI === "all todos"){
      return <TodoContainer todos={todos} AddTodo={AddTodo} toggleTodoStatus={ToggleTodoStatus} ui={UI} />
    } else if (UI === "completed"){
      return <Completed todos={completedTodos} removeTodo={RemoveTodo} toggleTodoStatus={ToggleTodoStatus} ui={UI}/>
    } else if (UI === "list") {
      return <ListContainer list={todos.filter((todo) => todo.list === listInView)} inView={listInView} removeTodo={RemoveTodo} toggleTodoStatus={ToggleTodoStatus} />
    }
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-2 bg-secondary'>
          <SidebarContainer changeUI={ChangeUI} addList={AddList} list={list} />
        </div>
        <div className='col-10'>
          {CurrentUI()}
        </div>
      </div>    
    </div>
  );
}

export default App;
