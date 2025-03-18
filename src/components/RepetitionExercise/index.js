import React from 'react';
import { useState } from 'react';
import RepCounter from './RepCounter';

const RepetitionExercise = ({name, func, img, img2}) => {
    let [counter, setCounter] = useState(0);

    function addRep() {
        setCounter(counter+1);
    };

    function subRep() {
        if (counter > 0) {
            setCounter(counter-1);
        }
    };

    function reset() {
        setCounter(0);
    };

    return (
        <div className='exer'>
            <h2>{name}</h2>
            <img src={img2} width='250px' height='auto'></img>
            <RepCounter func1={subRep} func2={addRep} counter={counter}></RepCounter>
            <button className='set-button' onClick={reset}>reset</button>
            <button className='home-button' onClick={func}><img src={img} width='40px' height='40px'/></button>
        </div>
    );
};

export default RepetitionExercise;