import React, { useEffect, useState } from 'react';
import Coins from '../redux/features/coinSlice';

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    Coins(setCharacters);
  }, []);

  return (
    <>
      {characters ? (
        characters.map((character) => (
          <div key={character.id}>
            <a href={`/Details/${character.id}`}>{character.name}</a>
          </div>
        ))
      )
        : ('no hay personajes')}
    </>
  );
};
export default Home;
