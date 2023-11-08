// Denne side er kodet af: Karoline Lerche

import { useState } from 'react';
import PlayButton from "../components/PlayButton";
import GoBackButton from '../components/GoBackButton';
import { containerAnimation, itemAnimation } from '../components/Animationer';
import { motion } from 'framer-motion';
import forestSound1 from '../assets/forest-sound1.mp3'
import forestSound2 from '../assets/forest-sound2.mp3'
import forestSound3 from '../assets/forest-sound3.mp3'
import forestSound4 from '../assets/forest-sound4.mp3'
import rainforestSound1 from '../assets/rainforest-sound1.mp3'
import rainforestSound2 from '../assets/rainforest-sound2.mp3'
import Favourites from '../components/Favourites';

// Funktionen ForestPage er en React-komponent, der viser en side med skovlyde.
export default function ForestPage() {

// Håndtering af favoritter fra localStorage
const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

// Oprettelse af en state til favoritter og initialisering med de gemte favoritter, hvis de findes
const [favorites, setFavorites] = useState(storedFavorites || []);

// Funktion til håndtering af klik på hjerteikon
  const handleHeartClick = (audioUrl, title) => {
    let updatedFavorites = [...favorites]; // Opretter en kopi af favoritterne
    const index = updatedFavorites.findIndex(fav => fav.audioUrl === audioUrl); // Finder indekset for lyden i favoritterne
    if (index > -1) { // Hvis lyden allerede er en favorit, fjernes den fra favoritterne
      updatedFavorites.splice(index, 1);
    } else { // Hvis lyden ikke er en favorit, tilføjes den til favoritterne
      updatedFavorites.push({ audioUrl, title, isFavorite: true });
    }
    setFavorites(updatedFavorites); // Opdaterer favoritterne
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Gemmer favoritterne i localStorage
  };

  // Returnerer JSX-elementer med skovlyde
  return (
    <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
        
        {/* Tilbageknap til navigation */}
        <motion.div variants={itemAnimation}><GoBackButton /></motion.div>

        {/* Overskrift og beskrivelse af skovlyde */}
        <motion.div variants={itemAnimation}>
            <h1 className='titel spacing-top'> Forest sounds </h1>
            <p className="bodytext spacing-bottom">
            Explore the diverse and soothing soundscape of the forest. 
            Immerse yourself in the sound of the wind whispering through 
            the trees or listen to the gentle stream flowing by.
            </p>
        </motion.div>

        {/* Sektion med regnskovlyde */}
        <motion.div className="spacing-bottom" variants={itemAnimation}>
            <h2 className="heading">Rainforest</h2>
            <div className="flex spacing-top">
                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-rainforest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={rainforestSound1} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === rainforestSound1 && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon  ${favorites.some(fav => fav.audioUrl === rainforestSound1 && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick(rainforestSound1, 'Jungle Chorus')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Jungle Chorus </p>
                </div>

                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-rainforest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={rainforestSound2} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === rainforestSound2 && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === rainforestSound2 && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick(rainforestSound2, 'Waterfall Melodies')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Waterfall Melodies </p>
                </div>
            </div>
        </motion.div>

        {/* Sektion med favoritter */}
        <Favourites favorites={favorites}/>

        {/* Sektion med regnskovlyde */}
        <div>
            <motion.div variants={itemAnimation}><h2 className="heading">Forest</h2></motion.div>
            <motion.div className="flex spacing-bottom spacing-top" variants={itemAnimation}>
                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={forestSound1} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === forestSound1 && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === forestSound1 && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick(forestSound1, "Nature's Lullaby")}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Nature&apos;s Lullaby </p>
                </div>

                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={forestSound2} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === forestSound2 && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === forestSound2 && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick(forestSound2, 'Tranquil Woods')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Tranquil Woods </p>
                </div>
            </motion.div>

            <motion.div className="flex" variants={itemAnimation}>
                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={forestSound3} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === forestSound3 && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === forestSound3 && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick(forestSound3, 'Misty Breeze')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Misty Breeze </p>
                </div>

                <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PlayButton audioUrl={forestSound4} />
                    <i className={`fi ${favorites.some(fav => fav.audioUrl === forestSound4 && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === forestSound4 && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick(forestSound4, 'Moon Chasm')}></i>
                    <p className='absolute heading heading-small forest-sound-title'> Moon Chasm </p>
                </div>
            </motion.div>
        </div>
    </motion.section>
    );
}
