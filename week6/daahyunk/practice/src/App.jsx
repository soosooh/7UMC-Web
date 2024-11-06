import { TodoProvider } from './context/TodoContext';
import TodoList from './pages/TodoList';

function App() {
  return (
    <TodoProvider>
        <TodoList />
    </TodoProvider>
  );
}

export default App;
