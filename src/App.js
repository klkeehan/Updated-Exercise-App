import React from 'react';
import { useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import './App.css';

function App() {
  let defaultContent = (
    <div className='content'>
      <h1>Go Do Something!</h1>
      <h2>Select an exercise:</h2>
      <button onClick={() => repContent('push ups')}>Push Ups</button><br></br>
      <button onClick={() => duraContent('bicycling')}>Bicycling</button><br></br>
      <button onClick={() => repContent('jumping jacks')}>Jumping Jacks</button><br></br>
      <button onClick={() => duraContent('running')}>Running</button><br></br>
      <button onClick={() => repContent('sit ups')}>Sit Ups</button><br></br>
    </div>
  );

  let [content, setContent] = useState(defaultContent);

  function defContent() {
    setContent(defaultContent);
  };

  function repContent(name, func) {
    setContent(<RepetitionExercise name={name} func={defContent}/>);
  };

  function duraContent(name, func) {
    setContent(<DurationExercise name={name} func={defContent}/>)
  };

  return (
    <div className='App'>
      {content}
    </div>
  );
};

export default App;