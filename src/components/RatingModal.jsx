import { useState } from 'react';

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
        <div className='gradient-wrapper'>
        <div className="modal-content" onClick={handleContainerClick}>
            <h1 className='titel titel-small spacing-bottom'>  Goodmorning <br /> <span className='titel-tab'>name</span></h1>
            <div>
                <h5 className='bodytext-normal' >You have slept for</h5>
                <p className='heading spacing-bottom'>{sleepDuration.toFixed(2)}</p>
            </div>
            <h2 className='heading'>How did you sleep? </h2>
            <div className='icon-container flex'>
                <img src={verysadIcon} alt="VerySad"/>
                <img src={sadIcon} alt="Sad"/>
                <img src={betweenIcon} alt="Between" />
                <img src={happyIcon} alt="Happy" />
                <img src={veryhappyIcon} alt="VeryHappy" />
            </div>
            <div id='modal-buttons'> 
                <button className="button btn-big" onClick={() => handleRating(1)}>rate sleep</button>
                <button className="button btn-purple" onClick={onClose}>cancel</button>
            </div>
        </div>
        </div>
    </div>
);
};

export default RatingModal;
