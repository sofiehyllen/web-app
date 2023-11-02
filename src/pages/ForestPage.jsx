import { useState } from 'react';
import PlayButton from "../components/PlayButton";
import GoBackButton from '../components/GoBackButton';
import Favourites from '../components/Favourites';
import { containerAnimation, itemAnimation } from '../components/Animationer';
import { motion } from 'framer-motion';

export default function ForestPage() {
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

  return (
    <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
        <motion.div variants={itemAnimation}><GoBackButton /></motion.div>

        <motion.div variants={itemAnimation}>
            <h1 className='titel spacing-top'> Forest sounds </h1>
            <p className="bodytext spacing-bottom">
            Explore the diverse and soothing soundscape of the forest. 
            Immerse yourself in the sound of the wind whispering through 
            the trees or listen to the gentle stream flowing by.
            </p>
        </motion.div>

        <motion.div className="spacing-bottom" variants={itemAnimation}>
            <h2 className="heading">Rainforest</h2>
            <div className="flex spacing-top">
                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-rainforest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={'src/assets/rainforest-sound1.mp3'} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/rainforest-sound1.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon  ${favorites.some(fav => fav.audioUrl === 'src/assets/rainforest-sound1.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/rainforest-sound1.mp3', 'Jungle Chorus')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Jungle Chorus </p>
                </div>

                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-rainforest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={'src/assets/rainforest-sound2.mp3'} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/rainforest-sound2.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/rainforest-sound2.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/rainforest-sound2.mp3', 'Waterfall Melodies')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Waterfall Melodies </p>
                </div>
            </div>
        </motion.div>

        <motion.div variants={itemAnimation}>
            <Favourites favorites={favorites} handleHeartClick={handleHeartClick}/>
        </motion.div>

        <div>
            <motion.div variants={itemAnimation}><h2 className="heading">Forest</h2></motion.div>
            <motion.div className="flex spacing-bottom spacing-top" variants={itemAnimation}>
                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={'src/assets/forest-sound1.mp3'} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound1.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound1.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound1.mp3', "Nature's Lullaby")}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Nature&apos;s Lullaby </p>
                </div>

                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={'src/assets/forest-sound2.mp3'} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound2.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound2.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound2.mp3', 'Tranquil Woods')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Tranquil Woods </p>
                </div>
            </motion.div>

            <motion.div className="flex" variants={itemAnimation}>
                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={'src/assets/forest-sound3.mp3'} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound3.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound3.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound3.mp3', 'Misty Breeze')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Misty Breeze </p>
                </div>

                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={'src/assets/forest-sound4.mp3'} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound4.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound4.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound4.mp3', 'Moon Chasm')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Moon Chasm </p>
                </div>
            </motion.div>
        </div>
    </motion.section>
    );
}
