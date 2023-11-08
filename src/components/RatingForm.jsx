// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';

// Objekt, der mapper ratings til deres tilsvarende ikoner
const ratingIcons = {
    1: verysadIcon,
    2: sadIcon,
    3: betweenIcon,
    4: happyIcon,
    5: veryhappyIcon,
};

// Vi definerer værdien af funktionens props
RatingForm.propTypes = {
    savePost: PropTypes.func,
    elapsedTime: PropTypes.string,
};

export default function RatingForm({ savePost, elapsedTime }) {
    const navigate = useNavigate();
    const [rating, setRating] = useState(""); //Vi opretter statevariabler til håndtering af rating, sovetimer, dato, fejlbeskeder og brugernavn
    const [hoursSlept, setHoursSlept] = useState("");
    const [date, setDate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [brugernavn, setBrugernavn] = useState("");

    useEffect(() => { //Her hentes brugerens fornavn fra localStorage 
        const temp = localStorage.getItem("brugernavn");
        if (temp) {
            setBrugernavn(temp)
        }
    },[])

    useEffect(() => { 
        //Her opdateres dato og de timer brugeren har sovet når elapsedTime ændrer sig
        //Datoen vises ikke i denne komponent, men vises i RatingCard komponenten
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
        setHoursSlept(elapsedTime);
    }, [elapsedTime]);

    // Funktion til formatering af tiden
    const formattedTime = () => {
        const duration = moment.duration(elapsedTime, 'minutes'); // Omdanner tiden til en moment duration
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
    
        // Betingelser for at vise tid i korrekt format
        if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        }
    };

    //Denne funktion som opdaterer rating når der klikkes på en bestemt rating 
    const handleRatingClick = (selectedOption) => {
        setRating(selectedOption)
    };

    // Når vores form er udfyldt og submitted, laves der et object
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            rt: rating,
            hs: hoursSlept,
            date: date
        }

        // Vi tjekker her om der er valgt en rating, hvis ikke vises der en error message
        const validForm = formData.rt
        if (validForm) {
            savePost(formData);
            navigate("/statisticspage")
            return;
        } else {
            setErrorMessage("You forgot to rate your sleep!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="titel">Goodmorning <span className="titel-tab">{brugernavn}</span></h1>
            <label>
                <h2 className='bodytext-normal'>You have slept for</h2>
                <div className='flex center'>
                    <h3 className='spacing-bottom time-wrapper' id='time-modalrating'>{formattedTime()}</h3>
                </div>
            </label>

            <label>
                <h2 className='heading'>How did you sleep?</h2>
                <div className="icon-container" >
                    {/*Her ses vores smileys, repræsenteret som værdier fra 1-5*/}
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
