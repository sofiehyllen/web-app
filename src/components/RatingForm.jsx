import { useEffect, useState } from 'react';
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const ratingIcons = {
    1: verysadIcon,
    2: sadIcon,
    3: betweenIcon,
    4: happyIcon,
    5: veryhappyIcon,
};

export default function RatingForm({ savePost, elapsedTime }) {
    const [rating, setRating] = useState("");
    const [hoursSlept, setHoursSlept] = useState("");
    const [date, setDate] = useState(""); // date = benyttes som transaction id
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
        setHoursSlept(elapsedTime);
    }, [elapsedTime]);

    //const formatDate = (inputDate) => {
    //    const options = { day: 'numeric', month: 'long' };
    //    return new Date(inputDate).toLocaleDateString('en-US', options);
    //};

    const formattedTime = () => {
        const duration = moment.duration(elapsedTime, 'minutes');
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
    
        if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        }
    };

    const handleRatingClick = (selectedOption) => {
        setRating(selectedOption)
    };

    // Når vores form er udfyldt og submitted, laves der et object (formData)
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            rt: rating,
            hs: hoursSlept,
            date: date
        }

        // Vi tjekker her om der er valgt en rating, hvis ikke
        // vises der en error message
        const validForm = formData.rt
        if (validForm) {
            savePost(formData);
            navigate("/statisticspage")
            return;
        } else {
            setErrorMessage("You forgot to rate your sleep!");
        }
    }

    // Vi definerer her værdien af funktionens props
    RatingForm.propTypes = {
        savePost: PropTypes.func,
        elapsedTime: PropTypes.string,
    };

    return (

        <form onSubmit={handleSubmit}>
            <h1 className="titel">Goodmorning <span className="titel-tab">name</span></h1>

            <label>
               {/* <h3 className='heading heading-small small-italic spacing-bottom'>Todays date is <span id='ratingmodal-date'>{formatDate(date)}</span></h3>*/}
            </label>

            <label>
                <h2 className='bodytext-normal'>You have slept for</h2>
                <div className='flex center'>
                    <h3 className='spacing-bottom time-wrapper' id='time-modalrating'>{formattedTime()}</h3>
                </div>
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
            <div id='rating-errormessage'>
                <p className="heading heading-small">{errorMessage}</p>
            </div>
            <button type="submit" className='button btn-big'>
                rate sleep <span className='btn-shine'/>
            </button>
        </form>
    );
}
