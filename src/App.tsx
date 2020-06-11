import React, { useState } from 'react';
import './App.css';

//import Header from './Header';
//import Home from './pages/Home';

import Routes from './routes';

function App() {
  const [counter, setCounter] = useState(1);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    
    <Routes />

    /*<div>
      <Header title="Teste" />
      <Header title={`Contador: ${counter}`} />
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>*/
  );
}

export default App;