import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './showIncrement';


    export const CallbackHook = () => {
        
    const [counter, setCounter] = useState(10);

    // regresa una memoria en cache de la funcion
    const increment = useCallback( (num) => {
        setCounter(c => c + num);
    },  [setCounter] );

    return (
        <div>
            <h1>useCallback hooks {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}