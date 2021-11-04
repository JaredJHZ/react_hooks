import { useRef } from "react"
import { useEffect, useState } from "react/cjs/react.development"

export const useFetch = (url) => {

    const [state, setState] = useState({data:null, loading: true, error: null})

    const isMounted = useRef(true);

    useEffect(() => {
        return () =>{
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setState({data:null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current === true ) {
                    setState({
                        loading:false,
                        error: null,
                        data
                    })
                } else {
                    console.log("Component not mounted");
                }
            });
    },[url]);

    return state;

}