import axios from 'axios';

const Coins = async (state) => {
  const peticion = await axios.get('https://api.coinstats.app/public/v1/coins');
  state(peticion.data.coins);
};

export const CharacterOne = async (id, state) => {
  const peticion = await axios.get(`https://api.coinstats.app/public/v1/coins/${id}`);
  state(peticion.data);
};

export default Coins;
