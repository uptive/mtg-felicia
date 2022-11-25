import axios from 'axios';

const base_URL = 'https://api.scryfall.com/cards';

export async function GetCardsMatch(query) {
  const url = [];
  if (query.type !== '') url.push('t%3A' + query.type);
  if (query.cost !== '') url.push('cmc%3D' + query.cost);
  if (query.desc !== '') url.push('o%3A' + query.desc.replace(' ', '%20'));
  if (query.power !== '') url.push('pow%3D' + query.power);
  if (query.toughness !== '') url.push('tou%3D' + query.toughness);
  const newUrl = url.join('+');

  try {
    const { data: response } = await axios.get(base_URL + `/search?order=cmc&q=${newUrl}`)
    return response;
  }
  catch (error) {
    console.log(error.response);
    return error.response;
  }
}

export async function GetRandomCard() {
  try {
    const { data: response } = await axios.get(base_URL + '/random')
    return response;
  }
  catch (error) {
    console.log(error);
  }
}