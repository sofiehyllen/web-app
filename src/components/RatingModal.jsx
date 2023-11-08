// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import PropTypes from 'prop-types'; 
import RatingForm from './RatingForm';
import { motion } from 'framer-motion';
import { containerAnimation } from './Animationer';


// Prop type validering for RatingModal-komponenten
    RatingModal.propTypes = {
        isOpen: PropTypes.bool, // Angiver om modalen er åben eller lukket
        onClose: PropTypes.func, // Funktion til at lukke modalen
        elapsedTime: PropTypes.string, // Streng der angiver den forløbne tid
    };

// RatingModal-komponenten viser en modal til bedømmelse af søvn og gemmer data i en database
export default function RatingModal({ isOpen, onClose, elapsedTime}) {
    
    // Funktion til at oprette et nyt indlæg i databasen
    async function createPost(newPost) {
        const url = "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
        
        const response = await fetch(url, {
            method: "POST",  // Metode til at sende data til serveren
            body: JSON.stringify(newPost) // Konverterer data til en JSON-streng og sender det
        });
        const data = await response.json(); // Venter på at modtage og parse data fra serveren
        console.log(data); // Udskriver data til konsollen
    }

  //Hvis isOpen er falsk (modalvinduet er lukket), returnerer komponenten null, hvilket betyder, at intet vil blive renderet. 
  //Dette er en måde at skjule modalvinduet, når det ikke er åbent.
  if (!isOpen) return null;

  return (
    //Dette er selve overlay elementet. Med onClick={onClose} sørger jeg for at modalvinduet lukkes, 
    //når der trykkes alle andre steder end selve vinduet.
    <motion.div variants={containerAnimation} className="modal" onClick={onClose}>
        <div className="gradient-wrapper">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <RatingForm savePost={createPost} elapsedTime={elapsedTime}/>
                <div className='flex center spacing-bottom' >
                    <button className='button btn-purple' onClick={onClose}>cancel</button>
                </div>
            </div>    
        </div>
    </motion.div>
  );
}