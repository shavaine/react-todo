import { useState } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import Home from './components/Home/Home';
import Completed from './components/Completed/Completed';

function App() {
  const allTodos = ['take out the trash', 'vaccum the stairs', 'go for a walk'];
  const [UI, setUI] = useState('home')
  const [todos, setTodos] = useState(allTodos);
  const [completedTodos, setCompletedTodo] = useState([])
  

  const AddTodo = (todo) => {
      setTodos([todo,...todos])
  }

  const RemoveTodoAll = (todo) => {
      const newTodos = todos.filter((currentTodo) => currentTodo !== todo);
      setTodos(newTodos);
  }

  const RemoveTodoCompleted = (todo) => {
    const newTodos = completedTodos.filter((currentTodo) => currentTodo !== todo);
    setCompletedTodo(newTodos);
  }

  const ChangeUI = (newUI) => {
    setUI(newUI)
  }

  const ToggleComplete = (todo) => {
    RemoveTodoAll(todo);
    setCompletedTodo([todo,...completedTodos]);
  }

  const ToggleUnComplete = (todo) => {
    RemoveTodoCompleted(todo);
    setTodos([todo,...todos])
  }

  const CurrentUI = () => {
    if (UI === "home") {
      return <Home />
    } else if (UI === "all todos"){
      return <TodoContainer todos={todos} AddTodo={AddTodo} removeTodo={RemoveTodoAll} toggleComplete={ToggleComplete} ui={UI} />
    } else if (UI === "completed"){
      return <Completed todos={completedTodos} removeTodo={RemoveTodoCompleted} toggleUnComplete={ToggleUnComplete} ui={UI}/>
    }
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-2'>
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
