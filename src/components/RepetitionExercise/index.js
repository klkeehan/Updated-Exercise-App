// referenced https://www.geeksforgeeks.org/how-to-create-a-simple-counter-using-reactjs/ for help

import React from 'react';
import { useState } from 'react';

const RepetitionExercise = ({name, func}) => {
    let [counter, setCounter] = useState(0);

    function addRep() {
        setCounter(counter+1);
    };

    function reset() {
        setCounter(0);
    };

    return (
        <div className='exercise'>
            <h2>{name}</h2>
            <p>reps: {counter}</p>
            <button onClick={addRep}>complete rep</button>
            <button onClick={reset}>reset</button>
            <button onClick={func}>return</button>
        </div>
    );
};

export default RepetitionExercise;