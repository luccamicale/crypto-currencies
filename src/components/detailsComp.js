import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterOne } from '../redux/features/coinSlice';

const Details = () => {
  const [crypto, setCrypto] = useState(null);

  const params = useParams();
  useEffect(() => {
    CharacterOne(params.id, setCrypto);
  }, []);

  return (
    <>
      {crypto !== null ? (
        <div className="home-container">
          <h2>
            Crypto
            {' '}
            {params.id}
          </h2>
          <img src={crypto.coin.icon} alt="Img" />
          <h3>
            {crypto.coin.symbol}
          </h3>
          <p>{crypto.coin.price}</p>
          <p>{crypto.coin.rank}</p>
          <p>{crypto.coin.totalSupply}</p>
          <p>{crypto.coin.websiteUrl}</p>
        </div>
      )
        : ('no hay cryptos')}
    </>
  );
};

export default Details;
