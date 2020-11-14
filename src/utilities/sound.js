import options from '../options.json';
const soundsEnabled = options['sounds-enabled']

const noSoundUrl = require('../assets/sounds/nosound.mp3');

const useConfirmAudio = () => {
  const audioUrl = require('../assets/sounds/confirm.mp3');
  const audio = new Audio(soundsEnabled ? audioUrl : noSoundUrl);
  return audio;
}

const useCancelAudio = () => {
  const audioUrl = require('../assets/sounds/cancel.mp3');
  const audio = new Audio(soundsEnabled ? audioUrl : noSoundUrl);
  return audio;
}

const useStartGameAudio = () => {
  const audioUrl = require('../assets/sounds/startgame.mp3');
  const audio = new Audio(soundsEnabled ? audioUrl : noSoundUrl);
  return audio;
}

export { useConfirmAudio, useCancelAudio, useStartGameAudio };