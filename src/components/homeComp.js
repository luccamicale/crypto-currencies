import React, { useEffect, useState } from 'react';
import Coins from '../redux/features/coinSlice';
import '../styles/home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = () => characters.filter((character) => (
    character.name.toString().toLowerCase().includes(search)
  ));

  useEffect(() => {
    Coins(setCharacters);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="container-search">
          <input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="input-search"
          />
          <button className="btn" type="button">
            Search
          </button>
        </div>
        <div className="container">
          {characters ? (
            handleSearch().map((character) => (
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
