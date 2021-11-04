import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr/>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" className="form-control" 
                 placeholder="Name" autoComplete="off" value={name}
                 onChange={(e) => handleInputChange(e)}
                 />
                <input type="text" name="email" className="form-control" 
                 placeholder="email" autoComplete="off" value={email}
                 onChange={(e) => handleInputChange(e)}
                 />

                <input type="password" name="password" className="form-control" 
                 placeholder="password"  value={password}
                 onChange={(e) => handleInputChange(e)}
                 />

                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>

            </form>
        </>
    )

}