import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className='title'>
        Task Aplication
      </div>
      <div className='main-tasks-list'>
        <h1>My Tasks</h1>
        <Task text="Aprender React" />
      </div>
    </div>
  );
}

export default App;
