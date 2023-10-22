import { useState } from 'react';
import Timer from './Timer';
import SleepSummaryCard from './SleepSummaryCard';
import RatingModal from './RatingModal';

function SleepTracker() {
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepStartTime, setSleepStartTime] = useState(null);
  const [sleepRating, setSleepRating] = useState(0);
  const [sleepDuration, setSleepDuration] = useState(0);
  const [sleepSessions, setSleepSessions] = useState([]);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const startSleep = () => {
    setIsSleeping(true);
    setSleepStartTime(new Date());
  };

  const stopSleep = () => {
    setIsSleeping(false);
    const sleepEndTime = new Date();
    const durationInMinutes = (sleepEndTime - sleepStartTime) / (1000 * 60);
    setSleepDuration(durationInMinutes);

    // Open the rating modal
    setIsRatingModalOpen(true);
  };

  const handleRatingChange = (event) => {
    setSleepRating(parseInt(event.target.value, 10));
  };

  const handleModalClose = () => {
    setIsRatingModalOpen(false);
  };

  const handlePublish = () => {
    const stopTime = new Date();
    const formattedStopTime = `${stopTime.toLocaleDateString()} ${stopTime.toLocaleTimeString()}`;
    const newSleepSession = {
      date: formattedStopTime,
      duration: sleepDuration.toFixed(2),
      rating: sleepRating,
    };
    setSleepSessions([...sleepSessions, newSleepSession]);
    setIsRatingModalOpen(false);
  };

  return (
    <div>
      {isSleeping ? (
        <div>
          <h2 className='heading'>You are currently sleeping...</h2>
          <Timer startTime={sleepStartTime} />
          <button className="button btn-big" onClick={stopSleep}>stop tracking</button>
        </div>
      ) : (
        <div>
          <button className="button btn-big" onClick={startSleep}> Start tracking</button>
        </div>
      )}

      <RatingModal
        isOpen={isRatingModalOpen}
        onClose={handleModalClose}
        onRatingChange={handleRatingChange}
        onPublish={handlePublish}
        sleepDuration={sleepDuration}
      />

      {sleepSessions.length > 0 && (
        <div>
          <h2 className='heading'> Latest trackings</h2>
          {sleepSessions.map((session, index) => (
            <SleepSummaryCard
              key={index}
              sleepDate={session.date}
              sleepDuration={session.duration}
              sleepRating={session.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SleepTracker;
