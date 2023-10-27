import { useState, useEffect } from 'react';
import PlayButton from "../components/PlayButton";
import Audiofile from "../components/Audiofile"; // Make sure to import the Audiofile component

export default function ForestPage() {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(storedFavorites);

  const handleHeartClick = (audioUrl) => {
    let updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex(fav => fav.audioUrl === audioUrl);
    if (index > -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push({ audioUrl, isFavorite: true });
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save updated favorites to localStorage
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
          <div className="brickcontainer brick-bg opacity" id="brick-bg-rainforest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/audio-forest.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/audio-forest.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/audio-forest.mp3')}></i>
          </div>
          <div className="brickcontainer brick-bg opacity" id="brick-bg-rainforest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-rainforest.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/audio-rainforest.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/audio-rainforest.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/audio-rainforest.mp3')}></i>
          </div>
        </div>
      </section>

      <section className='favourites'>
        <p className="heading spacing-bottom"> Your favourites </p>
        {favorites.map((favorite, index) => (
            <div key={index}>
              <Audiofile
                textarea={"Quiet rain"}
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
        ))}
      </section>

      <section>
        <p className="heading">Forest</p>

        <div className="flex spacing-bottom">
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/forest-sound1.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound1.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound1.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound1.mp3')}></i>
          </div>
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/forest-sound2.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound2.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound2.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound2.mp3')}></i>
          </div>
        </div>
        <div className="flex">
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/forest-sound3.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound3.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound3.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound3.mp3')}></i>
          </div>
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/forest-sound4.mp3'} />
            <i className={`fi ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound4.mp3' && fav.isFavorite) ? 'fi-sr-heart' : 'fi-rr-heart'} hearticon ${favorites.some(fav => fav.audioUrl === 'src/assets/forest-sound4.mp3' && fav.isFavorite) ? 'filled' : ''}`} onClick={() => handleHeartClick('src/assets/forest-sound4.mp3')}></i>
          </div>
        </div>
      </section>

      

    </section>
  );
}
