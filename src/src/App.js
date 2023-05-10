import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='title'>
        Task Aplication
      </div>
      <div className='main-tasks-list'>
        <h1>My Tasks</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
