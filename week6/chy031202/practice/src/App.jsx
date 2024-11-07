import { TodoProvider } from './components/todocontext';
import TodoList from './components/Todolist';
import './App.css'

function App() {
  return (
    <>
      <TodoProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoProvider>
    </>
  );
}

export default App;
