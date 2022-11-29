import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CharacterOne } from '../redux/features/coinSlice';
import '../styles/details.css';
import Country from '../img/Country.jpg';

const Details = () => {
  const [crypto, setCrypto] = useState(null);

  const params = useParams();
  useEffect(() => {
    CharacterOne(params.id, setCrypto);
  }, []);

  return (
    <>
      {crypto !== null ? (
        <div className="main-container">
          <div className="home-container">
            <Link className="back-button" to="/">
              BACK
            </Link>
            <div className="body-container">
              <div className="container-one">
                <h1>
                  Crypto
                  {' '}
                  {params.id}
                </h1>
                <img src={crypto.coin.icon} alt="Img" />
                <h2>
                  {crypto.coin.symbol}
                </h2>
                <h3>
                  Rank :
                  {crypto.coin.rank}
                </h3>
              </div>
              <div className="container-two">
                <h4>
                  Price :
                  {crypto.coin.price}
                </h4>
                <h4>
                  Price Change 1h :
                  {crypto.coin.priceChange1h}
                </h4>
                <h4>
                  Price Change 1w :
                  {crypto.coin.priceChange1w}
                </h4>
              </div>
              <div className="container-three">
                <h4>
                  Total Supply :
                  {crypto.coin.totalSupply}
                </h4>
                <h4>
                  MarketCap :
                  {crypto.coin.marketCap}
                </h4>
                <h4>
                  Available Supply :
                  {crypto.coin.availableSupply}
                </h4>
                <h4>
                  WebSite URL :
                  {crypto.coin.websiteUrl}
                </h4>
              </div>
            </div>

          </div>
          <div className="image-country">
            <img className="country" src={Country} alt="Country" />
          </div>
        </div>
      )
        : ('no hay cryptos')}
    </>
  );
};

export default Details;
