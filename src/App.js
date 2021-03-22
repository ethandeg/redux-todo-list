import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
function App() {
  return (
    <div className="container">
        <AddTodoForm />
        <TodoList />
    </div>
  );
}

export default App;
