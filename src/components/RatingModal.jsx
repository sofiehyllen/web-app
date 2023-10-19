import React, { useState } from 'react';

// Import your SVG icons here
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';

const RatingModal = ({ isOpen, onClose, onPublish, sleepDuration }) => {
  const [selectedSmiley, setSelectedSmiley] = useState(null);

  const handleRating = (value) => {
    onPublish(value); // Call the onPublish function with the selected rating
  };

  const handleContainerClick = (event) => {
    event.stopPropagation(); // Prevent the modal from closing when clicking inside the modal
  };

  // New function to handle smiley click
  const handleSmileyClick = (value) => {
    setSelectedSmiley(value); // Set the selected smiley value
    handleRating(value); // Call the handleRating function with the selected value
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleContainerClick}>
        <h2>You have slept for {sleepDuration.toFixed(2)} minutes.</h2>
        <label>Rate Your Sleep:</label>
        <div className='icon-container'>
          
          <img src={verysadIcon} alt="VerySad" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <img src={sadIcon} alt="Sad" style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
          <img src={betweenIcon} alt="Between" style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
          <img src={happyIcon} alt="Happy" style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
          <img src={veryhappyIcon} alt="VeryHappy" style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
          
        </div>
        <div> 
          <button onClick={() => handleRating(1)}>Publish</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
