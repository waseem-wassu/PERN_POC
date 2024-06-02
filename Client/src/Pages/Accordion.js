import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {
    const items = [
        { title: 'Section 1 ', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { title: 'Section 2 ', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { title: 'Section 3 ', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleChangeAccordion = (e, i) => {
        setActiveIndex(activeIndex === i ? null : i)
    }

    return (
        <div className='accordion_container'>
            {items && items.map((data, i) => (
                <div className='accordion_item'>
                    <div className='accordion_title' onClick={(e)=>handleChangeAccordion(e, i)}>{data.title}
                    {activeIndex == i ? <span className='accordion'>&#128897;</span> : <span className='accordion'>&#128899;</span>}</div>
                    {activeIndex == i && <div className='accordion_content'>{data.content} </div>}
                </div>
            ))}
        </div>

        // <div className="accordion">
        //     {items.map((item, index) => (
        //         <div key={index} className="accordion-item">
        //             <div className={`accordion-title ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
        //                 {item.title}
        //                 <span className="accordion-icon">&#9660;</span>
        //             </div>
        //             {activeIndex === index && (
        //                 <div className="accordion-content">
        //                     {item.content}
        //                 </div>
        //             )}
        //         </div>
        //     ))}
        // </div>
    );
}

export default Accordion;
