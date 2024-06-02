import React, { useState } from 'react'

function AddTwoNumber() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(0);
    const addNumber = () =>{
        const num1 = parseInt(number1);
        const num2 = parseInt(number2);
        setTotal(num1 + num2)
    }
    return (
        <div className='addcontainer'>
            <h1>Adding Two Numbers</h1>
            <input type='number' value={number1} onChange={(e)=>setNumber1(e.target.value)}></input>
            <input type='number' value={number2} onChange={(e)=>setNumber2(e.target.value)}></input>
            <button onClick={addNumber}>ADD</button>
            <h1>Total:{total}</h1>            
        </div>
    )
}

export default AddTwoNumber