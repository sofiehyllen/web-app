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

export default function RatingCard({ post }) {
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

    function handleClick() {
        navigate(`posts/${post.id}`); // -> "posts/-NDxg_qx1eWfdkNlZ6oj"
    }

    RatingCard.propTypes = {
        post: PropTypes.object,
    }

    return (
        <div className="brickcontainer medium" onClick={handleClick}>
            <span className="ident heading heading-small">{post.date}</span>
            <section className="flex">
                <div className="spacing-top">
                    <h3 className='bodytext-normal'>You have slept</h3>
                    <p className='heading heading'>{formattedTime()}</p>
                </div>

                <div className="icon-container">
                    <img src={ratingIcons[post.rt]} alt={`rating-icon-${post.rt}`} className="img-max" />
                </div>
            </section>
        </div>
    );
}