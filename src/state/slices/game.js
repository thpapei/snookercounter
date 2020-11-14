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
  isColorStage: false,
  currentFrame: 1,
  numberOfReds: 15,
  pointsRemaining: 15 + 15 * 7 + 2 + 3 + 4 + 5 + 6 + 7,
  currentBreak: [],
  initialFrameState: {}
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
    startGame: (state, { payload: { 1: player1Name, 2: player2Name, numberOfReds, totalFrames } }) => {
      state['1'].name = player1Name;
      state['2'].name = player2Name;
      state.numberOfReds = numberOfReds;
      state.totalFrames = totalFrames;
      state.pointsRemaining = numberOfReds * 8 + 27;
      state.gameStarted = true;

      state.initialFrameState.numberOfReds = numberOfReds;
      state.initialFrameState.totalFrames = totalFrames;
      state.initialFrameState.pointsRemaining = numberOfReds * 8 + 27;
    },
    setActivePlayerId: (state, action) => {
      state.activePlayerId = action.payload;
      state.currentBreak = [];
    },
    removeRed: (state) => {
      if (state.numberOfReds > 0) {
        state.numberOfReds--
        state.pointsRemaining -= 8;
      };
    },
    setPlayerName: (state, action) => { state[`${action.payload.id}`].name = action.payload.name },
    pocketRed: state => {
      if (state.numberOfReds > 0) {
        state.numberOfReds--;
        state[state.activePlayerId].score += 1;
        state.pointsRemaining -= 8;
        state.isColorStage = true;
        state.currentBreak.push('red');
      }
    },
    pocketColoredBall: (state, action) => {
      state[state.activePlayerId].score += ballWorth[action.payload];
      if (!state.isColorStage) {
        state.pointsRemaining -= ballWorth[action.payload];
      }
      state.isColorStage = false;
      state.currentBreak.push(action.payload)
    },
    commitFoul: (state, action) => {
      const otherPlayerId = state.activePlayerId === 1 ? 2 : 1;

      state[otherPlayerId].score += ballWorth[action.payload];
    },
    resetGame: state => state = initialState,
    restartFrame: state => {
      state['1'].score = 0;
      state['2'].score = 0;
      state.pointsRemaining = state.initialFrameState.pointsRemaining;
      state.numberOfReds = state.initialFrameState.numberOfReds;
      state.isColorStage = false;
      state.currentBreak = [];
    },
    nextFrame: state => {
      state['1'].score > state['2'].score ? state['1'].framesWon++ : state['2'].framesWon++;
      state['1'].score = 0;
      state['2'].score = 0;
      state.pointsRemaining = state.initialFrameState.pointsRemaining;
      state.numberOfReds = state.initialFrameState.numberOfReds;
      state.isColorStage = false;
      state.currentBreak = [];

      state.currentFrame++;

    }
  }
});

export const {
  setActivePlayerId,
  setPlayerName,
  startGame,
  pocketColoredBall,
  pocketRed,
  commitFoul,
  removeRed,
  resetGame,
  restartFrame,
  nextFrame
} = gameSlice.actions;
export const { undo } = { type: 'game/undo' }
export const { redo } = { type: 'game/redo' }
export default undoable(gameSlice.reducer);