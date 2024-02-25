import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  remainingCoins: 21,
  history: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setRemainingCoins: (state, action) => {
      state.remainingCoins = action.payload;
    },
    setHistory: (state, action) => {
      state.history = [...state.history, action.payload];
    },
  },
});
export const {setRemainingCoins, setHistory} = gameSlice.actions;
export const getRemainingCoins = state => state.game?.remainingCoins;
export const getHistory = state => state.game?.history;
export default gameSlice.reducer;
