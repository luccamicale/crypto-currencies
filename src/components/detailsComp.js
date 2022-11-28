import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
          <Link className="back-button" to="/">
            BACK
          </Link>
          <table className="table table-striped bordered hover" size="sm">
            <thead>
              <th>
                <tr>
                  Crypto
                  {' '}
                  {params.id}
                </tr>
                <img src={crypto.coin.icon} alt="Img" />
                <tr>
                  {crypto.coin.symbol}
                </tr>
                <tr>
                  Price :
                  {crypto.coin.price}
                </tr>
                <tr>
                  Rank :
                  {crypto.coin.rank}
                </tr>
                <tr>
                  Total Supply :
                  {crypto.coin.totalSupply}
                </tr>
                <tr>
                  WebSite URL :
                  {crypto.coin.websiteUrl}
                </tr>
                <tr>
                  MarketCap :
                  {crypto.coin.marketCap}
                </tr>
                <tr>
                  Available Supply :
                  {crypto.coin.availableSupply}
                </tr>
                <tr>
                  Price Change 1h :
                  {crypto.coin.priceChange1h}
                </tr>
                <tr>
                  Price Change 1w :
                  {crypto.coin.priceChange1w}
                </tr>
              </th>
            </thead>
          </table>
        </div>
      )
        : ('no hay cryptos')}
    </>
  );
};

export default Details;
