import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Timer({ startTime }) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isTimerRunning) {
            intervalId = setInterval(() => {
            const currentTime = new Date();
            const elapsed = (currentTime - startTime) / 1000; // Convert milliseconds to seconds
            setElapsedTime(elapsed);
            }, 1000); // Update every 1 second
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [startTime, isTimerRunning]);

    const handleToggleTimer = () => {
        setIsTimerRunning(!isTimerRunning);
      };

    const duration = moment.duration(elapsedTime, 'seconds');
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const formatTimeUnit = (value, unit) => {
    return value > 0 ? `${value} ${unit}${value === 1 ? '' : 's'}` : '';
    };

    const formattedTime = [formatTimeUnit(hours, 'hour'), formatTimeUnit(minutes, 'minute'), formatTimeUnit(seconds, 'second')]
    .filter(Boolean) // Remove empty strings
    .join(' ');

    Timer.propTypes = {
        startTime: PropTypes.instanceOf(Date).isRequired,
        };
        
    return (
        <div>
            <p className='heading heading-small'>{formattedTime}</p>
            <button onClick={handleToggleTimer}>
                {isTimerRunning ? 'stop timer' : 'start timer'}
            </button>
        </div>
    );
}








