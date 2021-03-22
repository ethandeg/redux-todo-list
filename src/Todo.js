import {useDispatch} from "react-redux"
const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const remove = () => dispatch({type: "REMOVE", payload: todo})
    const complete = () => dispatch({type: 'COMPLETE', payload: todo})
    
    return (
        <>
        {todo.completed ? 
        <li onClick={complete} className="list-group-item" style={{cursor: "pointer", fontSize: 35, textDecoration: "line-through", color: "gray"}}>{todo.todo} <button className="btn btn-sm btn-danger"style={{float: "right"}}onClick={remove}>X</button></li>
        :

        <li onClick={complete} className="list-group-item" style={{cursor: "pointer",fontSize: 35}}>{todo.todo} <button className="btn btn-sm btn-danger"style={{float: "right"}}onClick={remove}>X</button></li>
        }
            
        </>    
    )
}

export default Todo