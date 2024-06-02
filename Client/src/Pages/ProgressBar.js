import React, { useState } from 'react';
import styled from 'styled-components'
import './progress.css'

const ProgressBar = ({ percent = 12 }) => {
    const [progress, setProgress] = useState(0);
    const handleProgress = () => {
        if(progress <100){
            setProgress(prev => prev + 20)
        }
    }
    const handleReset = () => {
        setProgress(0)
    }

    const getColor = () =>{
        if(progress <40){
            return "#ff0000"
        }
        else if(progress <70){
            return "#ffa500"
        }
        else{
            return "#2ecc71"
        }
    }

    return (

        <div className='progresscontainer'>
            <div className='progress-bar'>
                <div className='progress-bar-fill' style={{ width: `${progress}%`, backgroundColor: getColor()}}></div>
            </div>
            <div className='progress-label'>{progress}%</div>
            <button onClick={handleProgress}>Progress</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default ProgressBar;

