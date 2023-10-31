import { useNavigate } from 'react-router-dom';
import verysadIcon from '../assets/smiley1.svg';
import sadIcon from '../assets/smiley2.svg';
import betweenIcon from '../assets/smiley3.svg';
import happyIcon from '../assets/smiley4.svg';
import veryhappyIcon from '../assets/smiley5.svg';
import PropTypes from 'prop-types';
import moment from 'moment';

const ratingIcons = {
    1: verysadIcon,
    2: sadIcon,
    3: betweenIcon,
    4: happyIcon,
    5: veryhappyIcon,
};

export default function RatingCard({ post, userHoursOfSleep }) {
    const navigate = useNavigate();

    const formattedTime = () => {
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
    };

    const getTimeColor = () => {
        const duration = moment.duration(post.hs, 'minutes');
        const totalMinutes = duration.asMinutes();
        const userSleepMinutes = userHoursOfSleep * 60;

        console.log('Total Minutes:', totalMinutes);
        console.log('User Sleep Minutes:', userSleepMinutes);

        if (totalMinutes < userSleepMinutes) {
            console.log('Color is red');
            return '#c95050';
        } else {
            console.log('Color is green');
            return '#87d192';
        }
    };

    function handleClick() {
        navigate(`posts/${post.id}`);
    }

    RatingCard.propTypes = {
        post: PropTypes.object,
        userHoursOfSleep: PropTypes.number,
    };

    return (
        <div className="brickcontainer medium" onClick={handleClick}>
            <section className="flex">
                <div className='rating-text'>
                    <span className="ident heading heading-small">{post.date}</span>
                    <div>
                        <h3 className='heading heading-small small-italic'>You slept for</h3>
                        <p className='heading' style={{ color: getTimeColor() }}>{formattedTime()}</p>
                    </div>
                </div>

                <div className="icon-container card-icon">
                    <img src={ratingIcons[post.rt]} alt={`rating-icon-${post.rt}`} className="img-max" />
                </div>
            </section>
        </div>
    );
}
