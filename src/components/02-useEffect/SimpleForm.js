import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {Message} from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    useEffect( () => {
    //   console.log("Hey!")  
    }, []);

    useEffect(() => {
        // console.log("Form cambio")
    }, [formState])

    useEffect(() => {
        // console.log("Email cambio")
    }, [email])

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target['name']]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input type="text" name="name" className="form-control" 
                 placeholder="Name" autoComplete="off" value={name}
                 onChange={(e) => handleInputChange(e)}
                 />
                <input type="text" name="email" className="form-control" 
                 placeholder="email" autoComplete="off" value={email}
                 onChange={(e) => handleInputChange(e)}
                 />

                 <hr/>

                 {(name === '123' && <Message />)}
            </div>
        </>
    )

}