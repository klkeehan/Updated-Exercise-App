import React from 'react';
import { useState, useEffect } from 'react';
import run from './run.jpg';
import ButtonLayout from './ButtonLayout';

let id = 1;

const RunningExercise = ({name, func, img}) => {
    let [isActive, setIsActive] = useState(false);
    let [isPaused, setIsPaused] = useState(true);
    let [timer, setTimer] = useState(0);
    let [lapContent, setLapContent] = useState([]);

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

    const lapAdd = () => {
        setLapContent([
            ...lapContent,
            { id: id++, time: timer }
        ]);
        timerReset();
        timerStart();
    };

    const fullReset = () => {
        timerReset();
        setLapContent([]);
        id = 1;
    };

    return (
        <div className='exer'>
            <h2>{name}</h2>
            <img src={run} width='300px' height='auto'></img>
            <p>{('0' + Math.floor((timer/60000) % 60)).slice(-2)}:{('0' + Math.floor((timer/1000) % 60)).slice(-2)}.{('0' + ((timer/10) % 100)).slice(-2)}</p>
            <ButtonLayout func1={timerStart} func2={lapAdd} func3={fullReset} />
            <ul>
                {lapContent.map(lapCont => (
                    <li key={lapCont.id}>lap {lapCont.id}: {('0' + Math.floor((lapCont.time/60000) % 60)).slice(-2)}:{('0' + Math.floor((lapCont.time/1000) % 60)).slice(-2)}.{('0' + ((lapCont.time/10) % 100)).slice(-2)}</li>
                ))}
            </ul>
            <button className='home-button' onClick={func}><img src={img} width='40px' height='40px'/></button>
        </div>
    );
};

export default RunningExercise;