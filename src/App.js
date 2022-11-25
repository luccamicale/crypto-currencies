import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
