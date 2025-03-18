const RepCounter = ({func1, func2, counter}) => {
    return (
        <div className='rep-counter'>
            <button className='rep-button' onClick={func1}>-</button>
            <p className='rep-value'>{counter}</p>
            <button className='rep-button' onClick={func2}>+</button>
        </div>
    );
}

export default RepCounter;