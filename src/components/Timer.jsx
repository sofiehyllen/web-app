import { useState, useEffect } from 'react';
import ModalRating from './ModalRating';
import moment from 'moment';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState(moment()); // Opdater startTime ved indlæsning

  const closeModal = () => {
    setIsModalOpen(false);
    setStartTime(moment()); // Opdater startTime, når modalen lukkes
  };

  const stopTimer = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!isModalOpen) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
}, [isModalOpen]);

  const calculateElapsedTime = () => {
    const duration = moment.duration(seconds, 'seconds');
    const formattedTime = moment.utc(duration.asMilliseconds()).format('HH:mm:ss');
    return formattedTime;
  };

  return (
    <div>
        <div className='flex center'>
            <h3 className='heading time spacing-bottom' >{calculateElapsedTime()}</h3>
        </div>    
      <button className="button btn-big" onClick={stopTimer}>stop tracking</button>

      {isModalOpen && (
        <div>
          <ModalRating isOpen={isModalOpen} onClose={closeModal} elapsedTime={calculateElapsedTime()} />
        </div>
      )}
    </div>
  );
};

export default Timer;