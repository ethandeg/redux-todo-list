import {useDispatch} from "react-redux"
const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const remove = () => dispatch({type: "REMOVE", payload: todo})
    return (
            <li className="list-group-item">{todo.todo} <button style={{float: "right"}}onClick={remove}>X</button></li>
            
    )
}

export default Todo