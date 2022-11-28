import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params = useParams();

  return (
    <div className="home-container">
      character
      {' '}
      {params.id}
    </div>
  );
};

export default Home;
