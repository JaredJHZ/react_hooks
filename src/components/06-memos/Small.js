import React from 'react';
export const Small = React.memo(({value}) => {

    console.log("oa")

    return (
        <small>  {value} </small>
    )
})