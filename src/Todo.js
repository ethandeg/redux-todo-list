import {useDispatch} from "react-redux"
const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const remove = () => dispatch({type: "REMOVE", payload: todo})
    return (
            <li className="list-group-item" style={{fontSize: 35}}>{todo.todo} <button className="btn btn-sm btn-danger"style={{float: "right"}}onClick={remove}>X</button></li>
            
    )
}

export default Todo