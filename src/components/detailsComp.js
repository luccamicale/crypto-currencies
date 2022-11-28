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
          <h3> hh{crypto.name}</h3>
        </div>
      )
        : ('no hay cryptos')}
    </>
  );
};

export default Details;
