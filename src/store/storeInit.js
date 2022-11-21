import { GetCardsAsync } from '../services/CardService';
import { ActionType } from './actionTypes';

async function StoreInit(dispatch, state) {
  if (state.cards.cards.length === 0) {
    await GetCardsAsync()
      .then((cards) => {
        dispatch({
          type: ActionType.GET_CARDS,
          payload: cards,
        });
      })
      .catch(() => {
        console.log('error');
      });
  }
}

export default StoreInit;
