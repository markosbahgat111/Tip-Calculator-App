import { configureStore } from '@reduxjs/toolkit';
import { TipReducer } from '../slices/tipCalc.slice';

const store = configureStore({
    reducer: {
    tip:TipReducer
} })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
