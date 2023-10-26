import { useEffect, useState } from 'react';

//isOpen, onClose, onPublish, sleepDuration
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';

const ratingIcons = {
    1: verysadIcon,
    2: sadIcon,
    3: betweenIcon,
    4: happyIcon,
    5: veryhappyIcon,
  };

// Component receives callback method "savepost" and translation
// information (post) if any.
export default function PostForm({ savePost, post }){
    // Defines initial states of data values
    const [hours, setHour] = useState("");
    const [rating, setRating] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
    // If translation information is present, change states
    // of variables to the values from post (translation information).
    // This will update the form.
    if (post) {
        setHour(post.hs);
        setRating(post.rt);
    } 
}, [post]);

const handleRatingClick = (selectedOption) => {
    setRating(selectedOption)};

// When the form is submitted, an object is created (formData)...
async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        hs: hours,
        rt: rating,
    }

// Check to see if all fields were filled. If not, show an 
// error message. If everything is ok - call callback method 
// defined by "savePost"
   const validForm = formData.hs && formData.rt;
   if (validForm) {
    savePost(formData);
   } else {
    setErrorMessage("You forgot to rate your sleep!");
   }
}


// The html form. The form fields have values that is equal to
// their variabel counterparts values. When the user types in
// values, the relevant states are updated.
// If the form is used for updating an existing translation, 
// the date (transaction id) field is hidden: it cannot be updated.
// Mortens decision. 
return (
    <form onSubmit={handleSubmit}>
        <h1 className="titel">Goodmorning <span className="titel-tab">name</span></h1>

        <label>
            <h2 className='bodytext-normal'>You have slept for</h2><input type="text" name="hours" value={hours} onChange={e => setHour(e.target.value)} />
        </label>

        <label>
            <h2 className='heading'>How did you sleep?</h2>
            <div className="icon-container" >
            {[1, 2, 3, 4, 5].map((option) => (
                <span
                key={option}
                onClick={() => handleRatingClick(option)}
                className={`icon ${parseInt(rating) === option ? "selected" : ""}`}>
                <img src={ratingIcons[option]} alt={`rating-icon-${option}`} className="img-max" />
            </span>
            ))}
            </div>
        </label>
        <p className="heading heading-small">{errorMessage}</p>
        <button type="submit" className='button btn-big'>rate sleep</button>
     </form>
    );
}