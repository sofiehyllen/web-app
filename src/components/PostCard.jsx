import { useNavigate } from 'react-router-dom';
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

  export default function PostCard({post}) {


    const navigate = useNavigate();
  
    function handleClick() {
      // Look at the app.js page to understand this
      navigate(`posts/${post.id}`); // -> like "posts/-NDxg_qx1eWfdkNlZ6oj" 
    }
  
    // CSS class card_container styles the card
    // with translation information.
    // CSS card is a flexbox that separates the
    // english and danish terms.
  
    return (
        <div className="brickcontainer medium" onClick={handleClick}>
            <span className="ident heading heading-small">{post.date}</span>
            <section className="flex">
                <div className="spacing-top">
                    <h3 className='bodytext-normal'>You have slept</h3>
                    <p className='heading heading'>{post.hs} hours</p>
                </div>
                
                <div className="icon-container">
                    <img src={ratingIcons[post.rt]} alt={`rating-icon-${post.rt}`} className="img-max" />
                </div>
                
            </section>
        </div>
    );
  }