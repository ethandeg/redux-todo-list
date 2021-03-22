import {useSelector} from "react-redux"
import Todo from "./Todo"
const TodoList = () => {
    const todos = useSelector(store => store.todos)
    return (
        <div className="col-8">
        <h1 className="text-center text-success">Todo List:</h1>
            <ul className="list-group-flush">
            {todos.map(todo=> (
                <Todo todo={todo} key={todo.id}/>
            ))}
            </ul>


        </div>
    )
}

export default TodoList