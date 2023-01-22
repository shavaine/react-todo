import { useState } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import Home from './components/Home/Home';

function App() {
  const allTodos = ['take out the trash', 'vaccum the stairs', 'go for a walk'];
  // const list

  const [todos, setTodos] = useState(allTodos);
  const [UI, setUI] = useState('home')

  const AddTodo = (todo) => {
      setTodos([todo,...todos])
  }

  const RemoveTodo = (todo) => {
      const newTodos = todos.filter((currentTodo) => currentTodo !== todo);
      setTodos(newTodos);
  }

  const ChangeUI = (newUI) => {
    setUI(newUI)
  }

  const CurrentUI = () => {
    if (UI === "home") {
      return <Home />
    } else if (UI === "all todos"){
      return <TodoContainer todos={todos} AddTodo={AddTodo} RemoveTodo={RemoveTodo} />
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

          {/* <TodoContainer todos={todos} AddTodo={AddTodo} RemoveTodo={RemoveTodo} /> */}
        </div>
      </div>    
    </div>
  );
}

export default App;
