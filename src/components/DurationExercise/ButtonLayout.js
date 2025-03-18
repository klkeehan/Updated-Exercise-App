const ButtonLayout = ({func1, func2}) => {
    return (
        <div className='button-layout'>
            <button className='set-button' onClick={func1}>start</button>
            <button className='set-button' onClick={func2}>reset</button>
        </div>
    );
};

export default ButtonLayout;