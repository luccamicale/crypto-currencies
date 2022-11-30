import React, { useEffect, useState } from 'react';
import Coins from '../redux/features/coinSlice';
import '../styles/home.css';

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState('');

  const filtrar = (terminoBusqueda) => {
    const resultSearch = characters.filter((character) => {
      if (character.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || character.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return character;
      }
    });
    setCharacters(resultSearch);
  };

  const handleClick = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  useEffect(() => {
    Coins(setCharacters);
  }, []);

  return (
    <>
      <div>
        <div className="container-search">
          <input
            placeholder="Search"
            onChange={handleClick}
            value={search}
            className="input-search"
          />
          <button type="button" className="button-input">
            Search
          </button>
        </div>
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
      </div>

    </>
  );
};
export default Home;
