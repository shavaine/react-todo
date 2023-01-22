import { useState } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';

function App() {
  const listOfTodos = ['take out the trash', 'vaccum the stairs', 'go for a walk'];
  const [todos, setTodos] = useState(listOfTodos);

  const AddTodo = (todo) => {
      setTodos([todo,...todos])
  }

  const RemoveTodo = (todo) => {
      const newTodos = todos.filter((currentTodo) => currentTodo !== todo);
      setTodos(newTodos);
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-2'>
          <SidebarContainer />
        </div>
        <div className='col-10'>
          <TodoContainer todos={todos} AddTodo={AddTodo} RemoveTodo={RemoveTodo} />
        </div>
      </div>    
    </div>
  );
}

export default App;
