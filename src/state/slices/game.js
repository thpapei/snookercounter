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
    const { past, present, future } = state;

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
  '1': {
    name: '',
    framesWon: 0,
    score: 0
  },
  '2': {
    name: '',
    framesWon: 0,
    score: 0
  },
  activePlayerId: 1,
  totalFrames: 1,
  gameStarted: false,
  activeFrame: 0,
  numberOfReds: 15,
  pointsRemaining: 15 + 15 * 7 + 2 + 3 + 4 + 5 + 6 + 7,
  currentBreak: [],
}

const ballWorth = {
  'red': 1,
  'yellow': 2,
  'green': 3,
  'brown': 4,
  'blue': 5,
  'pink': 6,
  'black': 7,
  'white': 4
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setActivePlayerId: (state, action) => { state.activePlayerId = action.payload; },
    setReds: (state, action) => {
      if (action.payload === 6 || action.payload === 10 || action.payload === 15) {
        state.numberOfReds = action.payloadl;
      }
    },
    removeRed: (state) => {
      if (state.numberOfReds > 0) {
        state.numberOfReds--
      };
      state.pointsRemaining = state.pointsRemaining - 1;
    },
    setPlayerName: (state, action) => { state[`${action.payload.id}`].name = action.payload.name },
    startGame: (state, { payload }) => {
      state['1'].name = payload['1'];
      state['2'].name = payload['2'];
      state.numberOfReds = payload.numberOfReds;
      state.totalFrames = payload.totalFrames;
      state.gameStarted = true;
    },
    pocketRed: state => {
      if (state.numberOfReds > 0) {
        state.numberOfReds--;
        state[state.activePlayerId].score += 1;
        state.pointsRemaining--;
      }
    },
    pocketColoredBall: (state, action) => {
      state[state.activePlayerId].score += ballWorth[action.payload];
    },
    commitFoul: (state, action) => {
      const otherPlayerId = state.activePlayerId === 1 ? 2 : 1;

      state[otherPlayerId].score += ballWorth[action.payload];
    }
  }
});

export const {
  setActivePlayerId,
  setReds,
  setPlayerName,
  startGame,
  pocketColoredBall,
  pocketRed,
  commitFoul,
  removeRed
} = gameSlice.actions;
export const { undo } = { type: 'game/undo' }
export const { redo } = { type: 'game/redo' }
export default undoable(gameSlice.reducer);