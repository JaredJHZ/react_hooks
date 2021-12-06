import React from 'react';
import {useForm} from '../../hooks/useForm';
export const AddToDo = ({handleAdd}) => {

    const [{description}, handleInputChange , reset] = useForm({
        description:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.length <= 1) {
            return ;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        };

        handleAdd(newTodo);
        reset();
    }


    return (
        <>
            <h4>Agregar Todo</h4>
                    <hr></hr>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        name="description"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        className="form-control"
                        onChange={handleInputChange}
                        value={description}
                        />
                        <button
                        type="submit"
                        style={{display:'block', width:'100%'}} className="btn btn-outline-primary mt-1 btn-block"
                        > 
                            Agregar
                        </button>
                    </form>
        </>
    );
}