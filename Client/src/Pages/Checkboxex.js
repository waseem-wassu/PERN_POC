import React, { useState } from 'react';
import './progress.css'

const Checkboxex = ({ percent = 12 }) => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Dogs', checked: false },
        { id: 2, label: 'Cats', checked: true },
        { id: 3, label: 'Cows', checked: false },
        { id: 4, label: 'Deers', checked: true },
    ]);
    const handleChange = (e, id) => {
        const updatedCheckboxes = checkboxes.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCheckboxes(updatedCheckboxes);
    }
    const handleCheckAll = (e) =>{
        e.preventDefault()
        setCheckboxes(checkboxes.map(item => ({ ...item, checked: true })))
    }
    return (

        <div className='checkbox_container'>
            <div className='checkbox_div'>
                {checkboxes && checkboxes.map((item, i) => (
                    <div key={item.id} >
                        <label className='checkbox_label'>
                            <input type="checkbox" onChange={(e) => handleChange(e, item.id)} checked={item.checked} />
                            {item.label}
                        </label>
                    </div>
                ))}
            </div>
            <button className='checkbox_button' onClick={(e)=>handleCheckAll(e)}>select all</button>
        </div>
    );
};

export default Checkboxex;