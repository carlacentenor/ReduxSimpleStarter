import React from 'react';
import Header from './Header';
import Section from './Section';

const hobbies =['bailar','manualidades' ,'escuchar música'];

const App = () => (
  <div>
    <Header/>
    <Section hobbies={hobbies}/>
  </div>
)

export default App
