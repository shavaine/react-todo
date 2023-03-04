import { useState, useEffect } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import Home from './components/Home/Home';
import Completed from './containers/CompletedContainer/CompletedContainer';
import ListContainer from './containers/ListContainer/ListContainer';
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.REACT_APP_URL);
  // const[changes, setChanges] = useState([])
  //   useEffect(() => {
  //     const track = async () => {
  //       const change = pb.collection('todos').subscribe('*', function (e) {
  //           setChanges(change);
  //       });
  //     }
  //     track();
  //   }, [changes]);

function App() {
  const [UI, setUI] = useState('home');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [uncompletedTodos, setUncompletedTodos] = useState([]);
  const [listInView, setListInView] = useState('')
  
  const [todos, setTodos] = useState([]);
    useEffect(() => {
      const getTodos = async () => {
          const records = await pb.collection('todos').getFullList({
              sort: '-created',
          });
          console.log("ran")
          setTodos(records);
          setCompletedTodos(records.filter(todo => todo.checked === true));
          setUncompletedTodos(records.filter(todo => todo.checked === false));
      }
      getTodos()
    }, [todos.length, completedTodos.length, uncompletedTodos.length]);
  const [list, setList] = useState([]);
      useEffect(() => {
      const getList = () => {
        const notUniqueList = todos.map((todo) => todo.list);
        const uniqueList = [...new Set(notUniqueList)]
        setList(uniqueList)
      }
      getList()
    }, [todos]);

  const AddTodo = async (todo) => {
      const newTodo = {task: todo, checked: false, list: listInView}
      try {
        const record = await pb.collection('todos').create(newTodo);
        setTodos([record,...todos]);
      } catch(error) {
        console.log('An error as occured.', error)
      }
  }

  const RemoveTodo = async (todoId) => {
    const toRemove = todos.filter(todo => todo.id !== todoId)
    try {
      await pb.collection('todos').delete(`${todoId}`);
      setTodos(toRemove);
    } catch(error) {
      console.log('An error as occured.', error);
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
      setListInView('')
      setUI(newUI)
    }
  }

  const ToggleTodoStatus = async (todoId, checked) => {
    try {
      const data = {checked: checked}
      const record = await pb.collection('todos').update(`${todoId}`, data);
      if (checked === true) {
        setUncompletedTodos(uncompletedTodos.filter(todo => todo.id !== todoId));
        setCompletedTodos([record,...completedTodos]);
      } else {
        setCompletedTodos(completedTodos.filter(todo => todo.id !== todoId));
        setUncompletedTodos([record,...uncompletedTodos]);
      }
    } catch(error) {
      console.log('An error as occured.', error);
    }
  }

  const CurrentUI = () => {
    if (UI === "home") {
      return <Home />
    } else if (UI === "all todos"){
      return <TodoContainer todos={uncompletedTodos} AddTodo={AddTodo} toggleTodoStatus={ToggleTodoStatus} ui={UI} removeTodo={RemoveTodo} />
    } else if (UI === "completed"){
      return <Completed todos={completedTodos} removeTodo={RemoveTodo} toggleTodoStatus={ToggleTodoStatus} ui={UI}/>
    } else if (UI === "list") {
      return <ListContainer list={todos.filter(todo => todo.list === listInView)} inView={listInView} removeTodo={RemoveTodo} toggleTodoStatus={ToggleTodoStatus} addTodo={AddTodo} />
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
