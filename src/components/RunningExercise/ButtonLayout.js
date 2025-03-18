const ButtonLayout = ({func1, func2, func3}) => {
    return (
        <div className='button-layout'>
            <button className='set-button' onClick={func1}>start</button>
            <button className='set-button' onClick={func2}>lap</button>
            <button className='set-button' onClick={func3}>reset</button>
        </div>
    );
};

export default ButtonLayout;