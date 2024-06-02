import React, { useEffect, useState } from 'react'

function LocalStore() {
    const [count, setcCount] = useState(()=>{
        const storedCount = localStorage.getItem('count')
        return storedCount ? parseInt(storedCount) : 0
    })
    const handleAdd = () => {
        setcCount(prev => prev + 1)
    }
    const handleSub = () => {
        setcCount(prev => prev - 1)
    }
    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])
    return (
        <div>
            <h2><span>Count:</span>{count}</h2>
            <div>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSub}>-</button>
            </div>
        </div>
    )
}

export default LocalStore