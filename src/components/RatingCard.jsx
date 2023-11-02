import { useNavigate } from 'react-router-dom';
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';

const ratingIcons = {
    1: verysadIcon,
    2: sadIcon,
    3: betweenIcon,
    4: happyIcon,
    5: veryhappyIcon,
};

RatingCard.propTypes = {
    post: PropTypes.object,
    userHoursOfSleep: PropTypes.number,
}

export default function RatingCard({ post }) {
    const navigate = useNavigate();
    const [textColor, setTextColor] = useState('');

    const formattedTime = useCallback(() => {
        const duration = moment.duration(post.hs, 'minutes');
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
    }, [post.hs]);

    useEffect(() => {
        const userData = localStorage.getItem("userData");

        if (userData) {
            const parsedUserData = JSON.parse(userData);
            const hoursofsleep = parsedUserData.Hoursofsleep;
            console.log("Hoursofsleep fra localstorage:", hoursofsleep);

            if (hoursofsleep >= formattedTime()) {
                setTextColor('rgba(233, 97, 97, 1)'); // Ændrer farven til rød, når brugerens søvnmål er lig med eller større end formattedTime
            } else {
                setTextColor('rgba(102, 203, 100, 1)'); // Ændrer farven til grøn, når brugerens søvnmål er mindre end formattedTime
            }
        }
    }, [formattedTime]);
    

    function handleClick() {
        navigate(`posts/${post.id}`);
    }

    return (
        <div className="brickcontainer medium" onClick={handleClick}>
            <section className="flex">
                <div className='rating-text'>
                    <span className="ident heading heading-small">{post.date}</span>
                    <div>
                        <h3 className='heading heading-small small-italic'>You slept for</h3>
                        <p className='heading' style={{ color: textColor }} >{formattedTime()}</p>
                    </div>
                </div>

                <div className="icon-container card-icon">
                    <img src={ratingIcons[post.rt]} alt={`rating-icon-${post.rt}`} className="img-max" />
                </div>
            </section>
        </div>
    );
}
