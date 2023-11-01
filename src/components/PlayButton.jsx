import { useState } from 'react';

const PlayButton = ( {audioUrl} ) => {
  const [audio, setAudio] = useState(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className='playbutton-big' onClick={handlePlay}>
        {isPlaying ? <img className='img-max' src="src/assets/afspiller-pause.svg" alt="pause-button" /> : <img className='img-max' src='src/assets/afspiller-play.svg' alt='play-button'/> }
    </button>
  );
  
};

export default PlayButton;
