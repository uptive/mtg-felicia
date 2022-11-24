import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/combine';

export const store = configureStore({ reducer: reducers });


