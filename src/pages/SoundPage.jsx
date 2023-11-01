import { Link } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import Favourites from "../components/Favourites";
import { useState } from "react";
import { containerAnimation, itemAnimation } from "../components/Animationer";
import { motion } from "framer-motion";

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
        <motion.div className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <motion.div variants={itemAnimation}><GoBackButton /></motion.div>
            
            {/* SOUNDPAGE HEADER */}     
            <motion.div className="spacing-bottom" variants={itemAnimation}> 
                <h1 className="titel">Have trouble <br /><span className="titel-tab">sleeping?</span></h1>
                <p className="bodytext spacing-top"> 
                    Explore the variety of calming and relaxing sleeping sounds. 
                    Fall asleep to the sound of waves in the ocean or listen to 
                    quiet rainfall while you meditate.</p>
            </motion.div>

            {/* SOUND CATEGORIES SECTION */}
            <motion.div className="spacing-bottom" variants={itemAnimation}> 
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
            </motion.div>

            {/* FAVOURITE SOUNDS SECTION */}
            <motion.div variants={itemAnimation}><Favourites favorites={favorites} handleHeartClick={handleHeartClick}/></motion.div>
        </motion.div>
    )
}