import { Link } from "react-router-dom";
import Favourites from "../components/Favourites";
import { useState, useEffect, useRef } from "react";

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
    <section className="page-content">
      <h1 className="titel">Ready to go <br /> <span className="titel-tab">to sleep?</span></h1>

      <div id="illustration-startsleep">
        <img className="img-max" src="src/assets/illustration-start-sleep.svg" alt="moon illustration sleep" />
      </div>

      <div className="center flex spacing-bottom">
        <Link className="button btn-big" to="/sleepingpage">
          start tracking <span className="btn-shine" />
        </Link>
      </div>

      <div> 
        <Favourites
          favorites={favorites}
          handleHeartClick={handleHeartClick}
        />
        <div className="rightalign-bottom">
            <Link to="/soundpage" className=" button btn-small btn-purple">explore more<i className="fi fi-sr-triangle rotate"></i></Link>
        </div>
      </div>
    </section>
  )
}
