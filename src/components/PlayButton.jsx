import React, { useState } from 'react';
import oceanWavesAudio from '../assets/audio-ocean-waves.mp3'; // Update with the correct path to your audio file

const PlayButton = () => {
  const [audio, setAudio] = useState(new Audio(oceanWavesAudio));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=''
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
