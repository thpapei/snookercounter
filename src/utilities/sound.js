const useConfirmAudio = () => {
  const audioUrl = require('../assets/sounds/confirm.mp3');
  const audio = new Audio(audioUrl);
  return audio;
}

const useCancelAudio = () => {
  const audioUrl = require('../assets/sounds/cancel.mp3');
  const audio = new Audio(audioUrl);
  return audio;
}

const useStartGameAudio = () => {
  const audioUrl = require('../assets/sounds/startgame.mp3');
  const audio = new Audio(audioUrl);
  return audio;
}

export { useConfirmAudio, useCancelAudio, useStartGameAudio };