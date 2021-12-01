import React, {useReducer} from 'react';
import {todoReducer} from './todoReducer';
import './styles.css';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc:'Nueva tarea',
            done:false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);


    }

    return (
        <div>
            <h1>TodoApp <small>{todos.length} </small></h1>
            <hr/>
            <div className="row">
                <div className="col-md-7">
                <ul className="list-group list-group-flush">
                {
                    todos.map(
                        (todo, index) => <li className="list-group-item" key={todo.id}>
                            <p className="text-center">{index+1}. {todo.desc}</p>
                            <button className="btn btn-danger">
                                Borrar
                            </button>
                        </li>
                    )
                }
            </ul>
                </div>
                <div className="col-md-5">
                    <h4>Agregar Todo</h4>
                    <hr></hr>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        name="description"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        className="form-control"
                        />
                        <button
                        type="submit"
                        style={{display:'block', width:'100%'}} className="btn btn-outline-primary mt-1 btn-block"> 
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}