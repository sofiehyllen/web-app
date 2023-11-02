// FavouritesSection.js
import Audiofile from "../components/Audiofile";

export default function Favourites({ favorites, handleHeartClick }) {

  return (
    <section className='favourites spacing-top relative'>
      <h2 className="heading"> Your favourites </h2>
      <img className="favourite-heart absolute" src="src/assets/heart-bg.svg" alt="heart icon favourites" ></img>
      {favorites.length === 0 ? (
        <p className='heading heading-small bodytext spacing-bottom'> # Like your favorite sounds to display them here.</p>
      ) : (
        favorites.map((favorite, index) => (

        <div key={index} className="audiofile-container" style={{ position: 'relative'}}>
              <Audiofile
                textarea={favorite.title}
                height={20}
                waveColor="rgba(96, 92, 110)"
                progressColor="rgba(240, 238, 230)"
                url={favorite.audioUrl}
                barHeight={1}
                barWidth={3}
                barGap={4}
                barRadius={10}
                dragToSeek={true}
                cursorColor={'transparent'}
                style={{ paddingRight: '50px' }}
              />
              <i className="fi fi-sr-heart" style={{ position: 'absolute', top: '56%', transform: 'translateY(-50%)', right: '12px', color:'rgb(223, 59, 59)' }}></i>
          </div>
        ))
      )}
    </section>
  );
}
