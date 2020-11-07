import { createSlice } from '@reduxjs/toolkit';

const undoable = (reducer) => {
  // Call the reducer with empty action to populate the initial state
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  // Return a reducer that handles undo and redo
  return function (state = initialState, action) {
    const { past, present, future } = state

    switch (action.type) {
      case 'game/undo':
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      case 'game/redo':
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action)
        if (present === newPresent) {
          return state
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }
}

const initialState = {
  player1: {
    name: '',
    id: 1
  },
  player2: {
    name: '',
    id: 2
  },
  activePlayerId: 1,
  totalFrames: 3,
  gameStarted: false,
  currentFrame: 0,
  numberOfReds: 15,
  currentBreak: [],
  frames: []
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setActivePlayerId: (state, action) => { state.activePlayerId = action.payload; },
    setReds: (state, action) => { state.numberOfReds = action.payload },
    pocketRed: (state, action) => {
      if (numberOfReds > 0) {
        state.numberOfReds--;
        frames[currentFrame][playerId].score += 1;
      }
    },
    setPlayer1Name: (state, action) => { state.player1Name = action.payload },
    setPlayer2Name: (state, action) => { state.player2Name = action.payload },
    addFrame: (state, action) => { state.frames.push(action.payload) }
  }
});

export const { setActivePlayerId, setReds, setPlayer1Name, setPlayer2Name } = gameSlice.actions;
export const { undo } = { type: 'game/undo' }
export const { redo } = { type: 'game/redo' }
export default undoable(gameSlice.reducer);