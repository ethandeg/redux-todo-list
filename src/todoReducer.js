const INITIAL_STATE = {todos: [{id:1, todo: "clean the garage", completed: false}, {id: 2, todo: "walk cody", completed: true}]}
function todoReducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case "ADD":
            return {...state, todos: [...state.todos, action.payload]}
        case "REMOVE":
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}
        case "COMPLETE":
            const todos = state.todos.map(todo => {
                if(todo.id === action.payload.id){
                    const completed = todo.completed ? false : true
                    return {...todo, completed: completed}
                }
                return todo
            })

            return {...state, todos}
        default:
            return state
    }
}

export default todoReducer