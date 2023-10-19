// SleepSummaryCard.js
import React from 'react';

function SleepSummaryCard({ sleepDate, sleepDuration, sleepRating }) {
  return (
    <div className="sleep-summary-card">
      <h3>Date:</h3>
      <p>{sleepDate}</p>
      <h3>Sleep Duration:</h3>
      <p>{sleepDuration} minutes</p>
      <h3>Sleep Rating:</h3>
      <p>{sleepRating} stars</p>
    </div>
  );
}

export default SleepSummaryCard;
