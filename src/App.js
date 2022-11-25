import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Details from './components/detailsComp';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
