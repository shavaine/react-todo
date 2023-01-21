import './App.css';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import SidebarContainer from './containers/SidebarContainer/SidebarContainer';

function App() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-2'>
          <SidebarContainer />
        </div>
        <div className='col-10'>
          <TodoContainer />
        </div>
      </div>    
    </div>
  );
}

export default App;
