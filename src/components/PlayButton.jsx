import { useState } from 'react';
import PropTypes from 'prop-types';



const PlayButton = ({ audioUrl }) => {
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
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Hvid farve med 80% gennemsigtighed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'white',
        fontSize: '25px',
      }}
      onClick={handlePlay}
    >
      {isPlaying ? '⏸' : '▶'}
    </div>
  );
  
};

export default PlayButton;
