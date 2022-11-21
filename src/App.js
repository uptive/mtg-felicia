import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import { GetCardsAsync } from './services/CardService';

function App() {

  const state = useSelector((state) => state);
  console.log(state);

  // useEffect(() => {
  //   GetCardsAsync();
  // }, []);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
