import './styles.css';
import React, {useEffect, useReducer} from 'react';
import {todoReducer} from './todoReducer';
import { TodoList } from './TodoList';
import { AddToDo } from './AddToDo';

export const TodoApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];

        // return [{
        //     id: new Date().getTime(),
        //     desc: 'Aprender React',
        //     done: false
        // }];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (newToDo) => {
        dispatch({ 
            type: 'add',
            payload: newToDo
        });
    }

    const handleDelete = (deleteId) => {
        
        const action = {
            type:'delete',
            payload: deleteId
        }

        dispatch(action);
    }

    const handleToggle = (updateId) => {
        dispatch({
            type:'toggle',
            payload: updateId
        });
    }

    return (
        <div>
            <h1>TodoApp <small>{todos.length} </small></h1>
            <hr/>
            <div className="row">
                <div className="col-md-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>


                <div className="col-md-5">
                    <AddToDo handleAdd={handleAdd} />
                </div>
            </div>
        </div>
    ); 
}