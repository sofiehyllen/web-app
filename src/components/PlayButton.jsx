// Denne side er kodet af: Karoline Lerche

import { useState } from 'react';
import play from '../assets/afspiller-play.svg'
import pause from '../assets/afspiller-pause.svg'

// PlayButton er en funktionskomponent, der tager imod audioUrl som en prop.
const PlayButton = ( {audioUrl} ) => {

  // Oprettelse af en state til lydobjektet og en state til afspilningens status
  const [audio, setAudio] = useState(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);

  // Funktion til afspilning og pause af lyden
  const handlePlay = () => {
    if (isPlaying) { // Hvis der allerede afspilles, så pause og nulstil tiden
      audio.pause();
      audio.currentTime = 0;
    } else { // Hvis der ikke afspilles, så afspil
      audio.play();
    }
    setIsPlaying(!isPlaying); // Opdaterer afspilningens status
  };

  // Returnerer en knap, der skifter mellem afspil og pause, afhængigt af afspilningens status
  return (
    <button className='playbutton-big' onClick={handlePlay}>
        {isPlaying ? <img className='img-max' src={pause} alt="pause-button" /> : <img className='img-max' src={play} alt='play-button'/> }
    </button>
  );
  
};

export default PlayButton;
