// FavouritesSection.js
import Audiofile from "../components/Audiofile";

export default function Favourites({ favorites, handleHeartClick }) {

    
  return (
    <section className='favourites spacing-top relative'>
      <p className="heading"> Your favourites </p>
      {/*<img className="favourite-heart absolute" src="src/assets/heart-bg.svg" alt="heart icon favourites" ></img>*/}
      {favorites.length === 0 ? (
        <p className='heading heading-small bodytext spacing-bottom'> # Like your favorite sounds to display them here.</p>
      ) : (
        favorites.map((favorite, index) => (
          <div className="spacing-top" key={index}>
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
            />
          </div>
        ))
      )}
    </section>
  );
}
