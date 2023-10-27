import { useState, useEffect } from 'react';
import ModalRating from './ModalRating';
import moment from 'moment';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mortenstid, setMortenstid] = useState(""); 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const stopTimer = () => {
    setIsModalOpen(true);
    setMortenstid(calculateElapsedTime()); // Morten har indsat dette
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
          <ModalRating isOpen={isModalOpen} onClose={closeModal} elapsedTime={mortenstid} />
        </div>
      )}
    </div>
  );
};

export default Timer;