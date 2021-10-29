import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state : counter, increment, decrement , reset} = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr/>
            <button onClick={() => increment(10)} className="btn">+1</button>
            <button onClick={() => decrement(10)} className="btn">-1</button>
            <hr/>
            <button onClick={() => reset()} className="btn btn-danger">Reset</button>
        </>

    );
}