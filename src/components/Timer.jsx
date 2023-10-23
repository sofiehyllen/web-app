import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Timer({ startTime }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  Timer.propTypes = {
    startTime: PropTypes.number.isRequired,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      
      const elapsed = (currentTime - startTime) / 1000; // Convert milliseconds to seconds
      setElapsedTime(elapsed);
    }, 1000); // Update every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  return (
    <div>
      <p className='heading heading-small'> {elapsedTime.toFixed(0)} seconds</p>
    </div>
  );
}

export default Timer;
