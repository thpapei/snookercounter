import { createSlice } from '@reduxjs/toolkit';

const initialGameState = {
  activePlayerId: 1,
  totalFrames: 3,
  gameStarted: false,
  currentFrame: 1,
  numberOfReds: 15,
  currentBreak: [],
  frames: []
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    setActivePlayerId: (state, action) => { state.activePlayerId = action.payload; }


  }
});

export const { setActivePlayerId } = gameSlice.actions;
export default gameSlice.reducer;