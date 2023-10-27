import React, { useState, useEffect } from 'react';
import PlayButton from "../components/PlayButton";
import Audiofile from "../components/Audiofile";

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

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <section className="page-content">
      <h1 className='titel spacing-top'> Forest sounds </h1>
      <p className="bodytext spacing-bottom">
        Explore the diverse and soothing soundscape of the forest. 
        Immerse yourself in the sound of the wind whispering through 
        the trees or listen to the gentle stream flowing by.
      </p>

      <section className="spacing-bottom">
        <p className="heading">Rainforest</p>

        <div className="flex">
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
      </section>

      <section className='favourites spacing-top relative'>
          <p className="heading spacing-bottom"> Your favourites </p>
          <img className="favourite-heart absolute" src="src/assets/heart-bg.svg" alt="heart icon favourites" ></img>
        {favorites.length === 0 ? (
          <p className='heading heading-small bodytext spacing-bottom'> # Like your favorite sounds to display them here.</p>
        ) : (
          favorites.map((favorite, index) => (
            <div key={index}>
              <Audiofile
                textarea={favorite.title}
                height={30}
                waveColor="rgba(96, 92, 110)"
                progressColor="rgba(240, 238, 230)"
                url={favorite.audioUrl}
                barHeight={1.5}
                barWidth={3}
                barGap={4}
                barRadius={10}
                dragToSeek={true}
                cursorColor={'transparent'}
              />
            </div>
          ))
        )}
      </section>

      <section>
        <p className="heading">Forest</p>

        <div className="flex spacing-bottom">
          <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/forest-sound1.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound1.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound1.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound1.mp3', "Nature's Lullaby")}></i>
            <p className='absolute heading heading-small forest-sound-title'> Nature's Lullaby </p>
          </div>
          <div className="brickcontainer brick-bg opacity relative" id="brick-bg-forest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/forest-sound2.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound2.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound2.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound2.mp3', 'Tranquil Woods')}></i>
            <p className='absolute heading heading-small forest-sound-title'> Tranquil Woods </p>
          </div>
        </div>
        <div className="flex">
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
        </div>
      </section>
    </section>
  );
}
