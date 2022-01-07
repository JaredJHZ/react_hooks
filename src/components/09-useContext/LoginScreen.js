import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);


    return (
        <div>
            <h1>LoginScreen</h1>
            <button 
            
            onClick={() => {
                const user = {
                    name:"jaredjhz",
                    id:1
                }
                setUser(user);
            }}
            
            >Iniciar sesion</button>
        </div>
    )
}