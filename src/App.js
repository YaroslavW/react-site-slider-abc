import React from 'react';
import './resources/style.css';
import Header from './Compomemts/Header_Footer/Header';
import Slider from './Compomemts/Slider';
function App() {
  return (
    <div className="App" style={{ height: "2000px", background: "#BEE0FF" }}>
      <Header />
      <Slider />
    </div>
  );
}

export default App;
