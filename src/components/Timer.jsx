// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import { useState, useEffect } from 'react';
import moment from 'moment';
import RatingModal from './RatingModal';

// Timer er en funktionskomponent, der styrer nedtællingen af tid og åbner en modal, når nedtællingen stopper
const Timer = () => {
  const [seconds, setSeconds] = useState(0); // State til at holde styr på antal sekunder
  const [isModalOpen, setIsModalOpen] = useState(false); // State til at styre, om modalen er åben eller lukket
  const [mortenstid, setMortenstid] = useState(""); // State til at holde den beregnede forløbne tid

  // Funktion til at lukke modalen
  const closeModal = () => {
    setIsModalOpen(false); // Sætter isModalOpen til false for at lukke modalen
  };

  // Funktion til at stoppe nedtællingen
  const stopTimer = () => {
    setIsModalOpen(true); // Åbner modalen
    setMortenstid(calculateElapsedTime()); // Beregner og sætter den forløbne tid, når nedtællingen stopper
  };

  // Effekt til at håndtere nedtællingen af tid
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!isModalOpen) {
        setSeconds((prevSeconds) => prevSeconds + 1); // Opdaterer antal sekunder hvert sekund, hvis modalen ikke er åben
      }
    }, 1000);

    return () => clearInterval(timerInterval); // Rydder op ved at rydde timeren, når komponenten bliver afmonteret
  }, [isModalOpen]);

  // Funktion til at beregne den forløbne tid
  const calculateElapsedTime = () => {
    const duration = moment.duration(seconds, 'seconds'); // Omdanner antal sekunder til en moment duration
    const formattedTime = moment.utc(duration.asMilliseconds()).format('HH:mm:ss'); // Formaterer tiden til timer:minutter:sekunder-format
    return formattedTime; // Returnerer den formaterede tid
  };

  // Returnerer JSX-elementer til visning af nedtællingen og stop-knappen
  return (
    <div>
        <div className='flex center'>
        <h3 className='time-wrapper heading' >{calculateElapsedTime()}</h3> {/* Viser den formaterede tid */}
        </div>
        <button className="button btn-big btn-spacing" onClick={stopTimer}>
            stop tracking <span className='btn-shine'/> {/* Knappen til at stoppe nedtællingen */}
        </button>

        {/* Viser RatingModal, hvis isModalOpen er sand */}
        {isModalOpen && (
            <div>
                <RatingModal isOpen={isModalOpen} onClose={closeModal} elapsedTime={mortenstid} /> {/* Viser RatingModal med den forløbne tid */}
            </div>
        )}
    </div>
  );
};

export default Timer;