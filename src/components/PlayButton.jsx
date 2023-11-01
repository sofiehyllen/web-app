import { useState } from 'react';
import play from '../assets/afspiller-play.svg'
import pause from '../assets/afspiller-pause.svg'

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
        {isPlaying ? <img className='img-max' src={pause} alt="pause-button" /> : <img className='img-max' src={play} alt='play-button'/> }
    </button>
  );
  
};

export default PlayButton;
