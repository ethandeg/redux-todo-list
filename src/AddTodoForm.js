import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux"
const AddTodoForm = () => {
    const INITIAL_STATE = {todo: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const dispatch = useDispatch()
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        formData.id = uuidv4()
        formData.completed = false
        dispatch({type: "ADD", payload: formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="card col-6">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-control" htmlFor='todo'>Todo:</label>
                        <input type="text" className="form-control" id="todo" name="todo" onChange={handleChange} value={formData.todo} />
                    </div>
                    <button className="btn btn-md btn-outline-success">Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodoForm