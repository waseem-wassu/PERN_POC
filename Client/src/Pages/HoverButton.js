import React, { useState } from 'react'

function HoverButton() {
    const [count, setCount] = useState(0)
    const handleOnHower = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div className='hovercontainer'>
            <button className='hover_button' onMouseEnter={handleOnHower} >Hover me...</button>
            <h1>{count}</h1>
        </div>
    )
}
export default HoverButton