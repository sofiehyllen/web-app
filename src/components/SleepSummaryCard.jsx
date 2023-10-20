// SleepSummaryCard.js
import React from 'react';

function SleepSummaryCard({ sleepDate, sleepDuration, sleepRating }) {
  return (
    <div className="sleep-summary-card flex brickcontainer medium">
      <div>
        <h2 className='heading'>{sleepDate}</h2>
        <h2 className='heading heading-small' >You slept for:</h2>
        <p className='heading'>{sleepDuration} minutes</p>
      </div>
      <div> 
        <p>{sleepRating} stars</p>
      </div>
    </div>
  );
}

export default SleepSummaryCard;
