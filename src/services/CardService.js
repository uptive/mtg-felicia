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

export async function GetRandomCard() {
  try {
    const { data: response } = await axios.get(base_URL + '/random')
    return response;
  }
  catch (error) {
    console.log(error);
  }
}