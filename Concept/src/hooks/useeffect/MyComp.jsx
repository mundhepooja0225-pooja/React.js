import React, { useState, useEffect } from 'react';

const MyComp = () => {

    const [count, setCount] = useState(0);

    //useeffect(function, dependency array);
    //case 1 --> No dependency array --> 
    // useEffect(() => {
    //     console.log('Component rendered');
    // })

    //case 2 --> Empty dependency array -->
    // useEffect(() => {
    //      console.log('Component Mounted');
    //  }, [])

    //case 3 --> With dependency array -->
    const [ct1, setCt1] = useState(0);
    const [ct2, setCt2] = useState(100);
    
    useEffect(() => {
        console.log("Counter updated");
    }, [ct1, ct2])

    return (
        <div>
            <h3>Counter 1: {ct1}</h3>
            <button onClick={() => setCt1(ct1 + 1)}>+</button>
            <h3>Counter 2: {ct2}</h3>
            <button onClick={() => setCt2(ct2 + 1)}>+</button>
        </div>
    )
}

export default MyComp;