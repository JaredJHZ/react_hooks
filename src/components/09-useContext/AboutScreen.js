import React, { useEffect, useState } from 'react';

export const AboutScreen = () => {

    const [plan, setPlan] = useState({
        meses:1
    });

    const [valor,setValor] = useState(1000);

    const cambiarValor = (meses, valor) => {
       return  meses * valor;
    }

    useEffect(() => {
        const {meses} = plan;
        const valorPorDefecto = 1000;
        const nuevoValor = cambiarValor(meses, valorPorDefecto);
        setValor(nuevoValor);
    }, [plan])

    console.log(plan);

    return (
        <div>
            <input type="number" value={plan["meses"]} onChange={({target}) => {
                setPlan({
                    meses: Number(target.value)
                })
            }} />
            <h1>pago :{valor}</h1>
        </div>
    );
}