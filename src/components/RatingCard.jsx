// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import { useNavigate } from 'react-router-dom';
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';

// Objekt, der mapper ratings til deres tilsvarende ikoner
const ratingIcons = {
    1: verysadIcon,
    2: sadIcon,
    3: betweenIcon,
    4: happyIcon,
    5: veryhappyIcon,
};

// Prop type validering for RatingCard-komponenten
RatingCard.propTypes = {
    post: PropTypes.object, // Objektet, der indeholder information om indlægget
    userHoursOfSleep: PropTypes.number, // Antal timer brugeren har sovet
}

// RatingCard-komponenten viser et kort med brugerens søvnvurdering og søvntid
export default function RatingCard({ post }) {
    const navigate = useNavigate(); // Til navigation til forskellige sider i appen
    const [textColor, setTextColor] = useState(''); // State til at holde tekstfarven

    // Funktion til formatering af tiden
    const formattedTime = useCallback(() => {
        const duration = moment.duration(post.hs, 'minutes'); // Omdanner søvntiden til en moment duration
        const hours = duration.hours(); // Antal timer
        const minutes = duration.minutes(); // Antal minutter
        const seconds = duration.seconds(); // Antal sekunder

        // Betingelser for at vise tid i korrekt format
        if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        }
    }, [post.hs]); // Lytter efter ændringer i post.hs, der indeholder søvntiden i minutter

     // Effekt til at ændre tekstfarven baseret på brugerens søvnmål
    useEffect(() => {
        const userData = localStorage.getItem("userData"); // Henter brugerens indtastede søvnmål fra localStorage

        if (userData) {
            const parsedUserData = JSON.parse(userData); // Parser dataen til et objekt
            const hoursofsleep = parsedUserData.Hoursofsleep; // Gemmer objektet som en variabel 

            if (hoursofsleep >= formattedTime()) {   
                setTextColor('rgba(233, 97, 97, 1)'); // Farven ændres til rød, når brugerens søvnmål er lig med, eller større end søvnmålingen (formattedTime)
            } else {
                setTextColor('rgba(102, 203, 100, 1)'); // Farven ændres til grøn, når brugerens søvnmål er mindre end søvnmålingen
            }
        }
    }, [formattedTime]); // Lytter efter ændringer i formattedTime
    
    // Funktion til at håndtere klik på kortet, der navigerer til indlægget
    function handleClick() {
        navigate(`posts/${post.id}`); // Navigerer til det specifikke indlæg
    }

    return ( // Her returneres ratingkortet
        <div  className="brickcontainer medium" onClick={handleClick}>
            <div  className="flex">
                {/* Elementer til visning af datoen og sovetid */}
                <div className='rating-text'>
                    <span className="ident heading heading-small">{post.date}</span> {/* Viser datoen for indlægget */}
                    <div>
                        <h3 className='heading heading-small small-italic'>You slept for</h3> {/* Overskrift for søvntid */}
                        <p className='heading' style={{ color: textColor }} >{formattedTime()}</p> {/* Viser formateret tid med farve afhængigt af vurderingen */}
                    </div>
                </div>

                {/* Element til visning af ikonet relateret til vurderingen */}
                <div className="icon-container card-icon">
                    <img src={ratingIcons[post.rt]} alt={`rating-icon-${post.rt}`} className="img-max" /> {/* Viser det korrekte ikon baseret på vurderingen */}
                </div>
            </div>
        </div>
    );
}
