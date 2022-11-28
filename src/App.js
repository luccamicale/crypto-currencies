import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/homeComp';
import NavBar from './components/Navbar';
import Details from './components/detailsComp';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
