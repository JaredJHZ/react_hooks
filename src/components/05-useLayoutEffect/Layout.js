import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import './Layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1)

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0];

    const pTag = useRef(null);

    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect());
    }, [quote]);


    return (
        <div>
        <h1>Layout effect</h1>

                <blockquote className="blockquote text-right">
                    <p ref={pTag} className="mb-0">{quote}</p>
                    <footer className="Blockquote-footer">{author}</footer>
                </blockquote>
   

        <button onClick={increment} className="btn btn-primary1">
            Next Quote
        </button>

        </div>
    );   
}