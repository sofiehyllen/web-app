import { Link } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import Favourites from "../components/Favourites";
import { useState } from "react";

export default function SoundPage(){
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


    return(
        <section className="page-content">
            <GoBackButton />
            
{/* SOUNDPAGE HEADER */}     
            <div className="spacing-bottom">
                <h1 className="titel">Have trouble <br /><span className="titel-tab">sleeping?</span></h1>
                <p className="bodytext spacing-top"> 
                    Explore the variety of calming and relaxing sleeping sounds. 
                    Fall asleep to the sound of waves in the ocean or listen to 
                    quiet rainfall while you meditate.</p>
            </div>

{/* SOUND CATEGORIES SECTION */}
            <section className="spacing-bottom">
                <h2 className="heading">Categories</h2>
                <Link to="/forestpage">
                    <div className="brickcontainer medium leftalign-bottom spacing-top brick-bg" id="brick-bg-sounds-1">
                        <p className="heading">Forest</p>
                    </div>
                </Link>

                <div className="flex">
                    <div className="brickcontainer leftalign-bottom" id="brick-bg-sounds-2">
                        <p className="heading">Rain</p>
                    </div>
                    <div className="brickcontainer leftalign-bottom" id="brick-bg-sounds-3">
                        <p className="heading">Ocean</p>
                    </div>
                </div>
            </section>
{/* FAVOURITE SOUNDS SECTION */}

            <Favourites
                favorites={favorites}
                handleHeartClick={handleHeartClick}
            />
        </section>
    )
}