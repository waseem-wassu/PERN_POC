import React, { useState, useEffect } from 'react';

const Box = () => {
    const [circles, setCircles] = useState([]);
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(0);

    const addCircle = () => {
        // const newCircle = [...circles, { id: counter, color: '' }]
        // setCounter(counter + 1)
        // setCircles(newCircle)
        setCircles(prevCircles => [...prevCircles, { id: counter, color: '' }]);
        setCounter(prevCount => prevCount + 1);
    }

    // const changeColor = (id) =>{
    //     const updatedCircle = circles.map(circle => circle.id === id ? {...circle, color: circle.color === '' ? 'grey' : '' }: circle);
    //     setCircles(updatedCircle)
    // }

    const changeColor = (id) => {
        setCircles(prevCircles =>
          prevCircles.map(circle => {
            if (circle.id === id) {
              const newCount = circle.color === '' ? count + 1 : count - 1;
              setCount(newCount < 0 ? 0 : newCount); 
              return { ...circle, color: circle.color === '' ? 'grey' : '' };
            } else {
              return circle;
            }
          })
        );
      };
      


console.log(circles,'circlescirclescircles');
console.log(counter,'countercounter');

    return (
        <div>
            <button onClick={addCircle}>Add circle</button>
            <p>count:{count}</p>
            <div>
                {circles.map((circle => (
                    <div
                        key={circle.id}
                        style={{
                            width: '50px',
                            height: '50px',                           
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            backgroundColor: circle.color,
                            margin: '10px',
                            display: 'inline-block',
                            cursor: 'pointer'
                        }} onClick={() => changeColor(circle.id)}>
                    </div>
                )))}
            </div>
        </div>
    );
};

export default Box;
