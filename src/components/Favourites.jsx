// Denne side er kodet af: Karoline Lerche

import Audiofile from "../components/Audiofile";
import { motion } from "framer-motion";
import { itemAnimation } from "./Animationer";

// Funktionen Favourites er en React-komponent, der tager imod et favorites-objekt som props.
export default function Favourites({ favorites }) {
  return (
    // En sektion til visning af favoritter
    <section className='favourites spacing-top relative'>
      <motion.h2 variants={itemAnimation} className="heading"> Your favourites </motion.h2>

      {/* Ternær operator til at vise besked, hvis der ikke er nogen favoritter */}
      {favorites.length === 0 ? (
        <motion.p variants={itemAnimation} className='heading heading-small bodytext spacing-bottom'> # Like your favorite sounds to display them here.</motion.p>
      ) : (

        // Hvis der er favoritter, vil de blive kortlagt og vist her
        favorites.map((favorite, index) => (

        <motion.div variants={itemAnimation} key={index} className="audiofile-container" style={{ position: 'relative'}}>
              {/* Audiofile-komponenten, der viser lydafspilleren for hver favorit */}
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
              {/* Hjerteikon for favorit, der vises ved siden af lydafspilleren */}
              <i className="fi fi-sr-heart" style={{ position: 'absolute', top: '56%', transform: 'translateY(-50%)', right: '12px', color:'rgb(223, 70, 70)' }}></i>
          </motion.div>
        ))
      )}
    </section>
  );
}
