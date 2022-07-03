import React, { useState } from 'react';
import Off from './favicon/Off.jpg';
import On from './favicon/On.jpg';
import { Container } from './styles';

function App() {

  const[state, setState] = useState(false);
 
 return (
  <Container>
    <img src={state ? On : Off} alt="Lampada" id="lamp" />
    <button 
      style={{ background: state ? 'green' : 'red' } }
      onClick={() => setState(!state)}>
      {state ? 'ON' : 'OFF'}
    </button>
  </Container>
  )
}

export default App;
