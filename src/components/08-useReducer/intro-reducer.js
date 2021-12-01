const initialState = [{
    id:1,
    todo:'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    console.log(action);

    if (action?.type === 'addItem' ) {
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo  = {
    id:1,
    todo:'Comprar Leche',
    done: false
}

const agregarTodoAction = {
    type: "addItem",
    payload: newTodo
}

todos = todoReducer(todos,agregarTodoAction);



console.log(todos);