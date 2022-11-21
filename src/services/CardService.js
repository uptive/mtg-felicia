import axios from 'axios';

export async function GetCardsAsync() {
  return new Promise(() => {
    axios.get('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3')
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        return data;
      })
  })
}
