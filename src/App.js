import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    {id: 1, title: 'study algos', completed: false },
    {id: 2, title: 'network', completed: true },
    {id: 3, title: 'work on projects', completed: true }
  ]
  return (
    <div className="App">
      {todos.map((todo) => {
        return (<Todo todo = {todo}/>)
      })}
    </div>
  );
}

export default App;
