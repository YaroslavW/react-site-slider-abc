import React from 'react';
import './resources/style.css';
import Header from './Compomemts/Header_Footer/Header';
import Slider from './Compomemts/Slider';
import Info from './Compomemts/Info';
import Highlights from './Compomemts/Highlights';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Info />
      <Highlights />
    </div>
  );
}

export default App;
