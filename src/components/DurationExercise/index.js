// referenced https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/?ref=header_outind for help

import React from 'react';
import { useState, useEffect } from 'react';

const DurationExercise = ({name, func}) => {
    let [isActive, setIsActive] = useState(false);
    let [isPaused, setIsPaused] = useState(true);
    let [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTimer((timer) => timer+10);
            }, 10);
        }
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const timerStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
    
    const timerReset = () => {
        setIsActive(false);
        setTimer(0);
    };

    return (
        <div className='exercise'>
            <h2>{name}</h2>
            <p>timer: {('0' + Math.floor((timer/60000) % 60)).slice(-2)}:{('0' + Math.floor((timer/1000) % 60)).slice(-2)}.{('0' + ((timer/1) % 1000)).slice(-3)}</p>
            <button onClick={timerStart}>start</button>
            <button onClick={timerReset}>reset</button>
            <button onClick={func}>return</button>
        </div>
    );
};

export default DurationExercise;