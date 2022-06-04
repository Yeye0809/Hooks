
const inicialState = [{
    id: 1,
    todo: 'Compar pan',
    done: false
}];

const todoReducer = (state = inicialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state
}

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Compar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, action)


console.log(todos);