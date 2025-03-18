import React from 'react';
import { useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';
import home from './home.png';
import pushup from './push-up.jpg';
import situp from './sit-up.jpg';
import jumpingjack from './jumping-jack.jpg';
import './App.css';

function App() {
  let defaultContent = (
    <div className='content'>
      <h1>Exercises</h1>
      <button className='ex-button' onClick={() => repContent('Push Ups', pushup)}>Push Ups</button><br></br>
      <button className='ex-button' onClick={() => repContent('Sit Ups', situp)}>Sit Ups</button><br></br>
      <button className='ex-button' onClick={() => repContent('Jumping Jacks', jumpingjack)}>Jumping Jacks</button><br></br>
      <button className='ex-button' onClick={() => duraContent('Bicycling')}>Bicycling</button><br></br>
      <button className='ex-button' onClick={() => runContent('Lap Running')}>Lap Running</button>
    </div>
  );

  let [content, setContent] = useState(defaultContent);

  function defContent() {
    setContent(defaultContent);
  };

  function repContent(name, pic) {
    setContent(<RepetitionExercise name={name} func={defContent} img={home} img2={pic}/>);
  };

  function duraContent(name) {
    setContent(<DurationExercise name={name} func={defContent} img={home}/>)
  };

  function runContent(name) {
    setContent(<RunningExercise name={name} func={defContent} img={home}/>)
  };

  return (
    <div className='exer'>
      {content}
      <p className='footer-text'>made with reactJS by karissa ☻</p>
    </div>
  );
};

export default App;