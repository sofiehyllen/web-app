import { Link } from "react-router-dom";
import Favourites from "../components/Favourites";
import { useState, useEffect, useRef } from "react";
import illustrationSleeptrack from "../assets/illustration-start-sleep.svg"
import {motion} from 'framer-motion'
import { containerAnimation, itemAnimation} from "../components/Animationer";

export default function SleeptrackPage() {
  // const [count, setCount] = useState(0)

  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(storedFavorites);

  const handleHeartClick = (audioUrl, title) => {
    let updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex(fav => fav.audioUrl === audioUrl);
    if (index > -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push({ audioUrl, title, isFavorite: true });
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const audioContextRef = useRef(null);

  const initializeAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
  };

  useEffect(() => {
    const handleClick = () => {
      if (!audioContextRef.current) {
        initializeAudioContext();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

    return (
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <motion.div variants={itemAnimation}>
                 <h1 className="titel">Ready to go <br /> <span className="titel-tab">to sleep?</span></h1>
            </motion.div>

            <motion.div id="illustration-startsleep" variants={itemAnimation}>
                <img className="img-max" src={illustrationSleeptrack} alt="moon illustration sleep" />
            </motion.div>

            <motion.div className="center flex spacing-bottom" variants={itemAnimation}>
                <Link className="button btn-big" to="/sleepingpage">
                    start tracking <span className="btn-shine" />
                </Link>
            </motion.div>

           
                <Favourites favorites={favorites} handleHeartClick={handleHeartClick}/>
                <motion.div variants={itemAnimation} className="rightalign-bottom">
                    <Link to="/soundpage" className=" button btn-small btn-purple">explore more<i className="fi fi-sr-triangle rotate"></i></Link>
                </motion.div>
            
        </motion.section>
    )
}
