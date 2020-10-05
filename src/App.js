import React from 'react';
import './App.css';
import Bigthree from './components/Big Three/Bigthree';
import HeadCarousel from './components/Head Carousel/HeadCarousel';
import Appbar from './components/Navbar/Navbar';
import Partvid from './components/Videos/Partvid';

function App() {
  return (
    <div className="App">

      <Appbar />
      <HeadCarousel />
      <Partvid />
      <Bigthree />
    </div>
  );
}

export default App;
