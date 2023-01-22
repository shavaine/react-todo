import { useState } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import Home from './components/Home/Home';
import Completed from './components/Completed/Completed';

const starterTodos = [
  {id: 1, task: "example to-do 1", checked: false},
  {id: 2, task: "example to-do 2", checked: false},
  {id: 3, task: "example to-do 3", checked: false},
]

const starterList = [
  {id: 1, listName: "Example List 1", todos: []},
  {id: 2, listName: "Example List 2", todos: []},
  {id: 3, listName: "Example List 3", todos: []},
]

function App() {
  const [UI, setUI] = useState('home')
  const [todos, setTodos] = useState(starterTodos);
  const [completedTodos, setCompletedTodo] = useState([])
  const [list, setList] = useState(starterList)
  const [IDCounter, setIDCounter] = useState(3)
  

  const AddTodo = (todo) => {
      const newId = IDCounter + 1
      setIDCounter(newId)
      const newTodo = {id: [newId], task: [todo], checked: false}
      setTodos([newTodo,...todos])
  }

  const RemoveTodo = (todoId, type) => {
    if (type === "check") {
      const newTodos = todos.filter((currentTodo) => currentTodo.id !== todoId);
      setTodos(newTodos);
    } else if (type === "un-check") {
      const newTodos = completedTodos.filter((currentTodo) => currentTodo.id !== todoId);
      setCompletedTodo(newTodos);
    } else {
      const newTodos = completedTodos.filter((currentTodo) => currentTodo.id !== todoId);
      setCompletedTodo(newTodos);
    }
  }

  const ChangeUI = (newUI) => {
    setUI(newUI)
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
    }
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-2 bg-secondary'>
          <SidebarContainer changeUI={ChangeUI} />
        </div>
        <div className='col-10'>
          {CurrentUI()}
        </div>
      </div>    
    </div>
  );
}

export default App;
