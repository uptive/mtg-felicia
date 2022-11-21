import axios from 'axios';

const base_URL = 'https://api.scryfall.com/cards';

export async function GetCardsAsync(search) {
  return new Promise(() => {
    axios.get(base_URL + `/search?q=${search}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        return data;
      })
  })
}
