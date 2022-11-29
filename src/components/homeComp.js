import React, { useEffect, useState } from 'react';
import Coins from '../redux/features/coinSlice';
import '../styles/home.css';

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    Coins(setCharacters);
  }, []);

  return (
    <>
      <div className="container">
        {characters ? (
          characters.map((character) => (
            <div className="character" key={character.id}>
              <img className="image-crypto" src={character.icon} alt="icon" />
              <a className="character-name" href={`/Details/${character.id}`}>{character.name}</a>
            </div>
          ))
        )
          : ('Loading...')}
      </div>

    </>
  );
};
export default Home;
