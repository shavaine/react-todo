import { useState, useEffect } from 'react';
import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';
import Home from './components/Home/Home';
import Completed from './containers/CompletedContainer/CompletedContainer';
import ListContainer from './containers/ListContainer/ListContainer';
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.REACT_APP_URL);

// const starterTodos = [
//   {id: 1, task: "example to-do 1", checked: false, list: 'Example List 1'},
//   {id: 2, task: "example to-do 2", checked: false, list: 'Example List 1'},
//   {id: 3, task: "example to-do 3", checked: false, list: 'Example List 2'},
//   {id: 4, task: "example to-do 4", checked: false, list: 'Example List 3'},
//   {id: 5, task: "example to-do 5", checked: false, list: 'Example List 3'},
// ]

function App() {
  const [UI, setUI] = useState('home')
  const[changes, setChanges] = useState([])
    useEffect(() => {
      const track = async () => {
        const change = pb.collection('todos').subscribe('*', function (e) {
            setChanges(change);
        });
      }
      track();
    }, [changes]);
  const [todos, setTodos] = useState([]);
    useEffect(() => {
      const getTodos = async () => {
          const records = await pb.collection('todos').getFullList({
              sort: '-created',
          });
          setTodos(records);
      }
      getTodos()
    }, [changes]);

  const [listInView, setListInView] = useState('')
  const getList = () => {
    const notUniqueList = todos.map((todo) => todo.list);
    const uniqueList = [...new Set(notUniqueList)]
    return uniqueList
  }
  const [list, setList] = useState(getList())

  const [completedTodos, setCompletedTodos] = useState([]);
    useEffect(() => {
      const checked = todos.filter(todo => todo.checked === true);
      setCompletedTodos(checked)
    }, [todos]);

  const [uncheckedTodos, setUncheckedTodos] = useState([]);
    useEffect(() => {
      const unchecked = todos.filter(todo => todo.checked === false);
      setUncheckedTodos(unchecked)
    }, [todos]);

  const AddTodo = async (todo) => {
      const newTodo = {task: todo, checked: false, list: listInView}
      const record = await pb.collection('todos').create(newTodo);
  }

  const RemoveTodo = async (todoId) => {
    await pb.collection('todos').delete(`${todoId}`);
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
    // if (checked) {
    //   const toggledTodo = todos.find(todo => todo.id === todoId);
    //   toggledTodo.checked = checked;
    //   RemoveTodo(todoId, "check");
    //   setCompletedTodo([toggledTodo,...completedTodos]);
    // } else if (!checked) {
    //     const toggledTodo = completedTodos.find(todo => todo.id === todoId);
    //     toggledTodo.checked = checked;
    //     RemoveTodo(todoId, "un-check");
    //     setTodos([toggledTodo,...todos])
    // }
    const data = {checked: checked}
    const record = await pb.collection('todos').update(`${todoId}`, data);
  }

  const CurrentUI = () => {
    if (UI === "home") {
      return <Home />
    } else if (UI === "all todos"){
      return <TodoContainer todos={uncheckedTodos} AddTodo={AddTodo} toggleTodoStatus={ToggleTodoStatus} ui={UI} removeTodo={RemoveTodo} />
    } else if (UI === "completed"){
      return <Completed todos={completedTodos} removeTodo={RemoveTodo} toggleTodoStatus={ToggleTodoStatus} ui={UI}/>
    } else if (UI === "list") {
      return <ListContainer list={uncheckedTodos.filter((todo) => todo.list === listInView)} inView={listInView} removeTodo={RemoveTodo} toggleTodoStatus={ToggleTodoStatus} addTodo={AddTodo} />
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
