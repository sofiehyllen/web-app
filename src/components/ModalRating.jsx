import PostForm from "./PostForm";
import PropTypes from 'prop-types'; 

export default function ModalRating({ isOpen, onClose}) {
    ModalRating.propTypes = {
        isOpen: PropTypes.bool,
        onClose: PropTypes.func,
    };

  // Funktion til at forhindre sidegennemgang
  function preventScroll(event) {
    event.preventDefault();
  }

  // Når modalen åbnes, tilføjes en eventlistener til body for at forhindre sidegennemgang
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
  } else {
    // Når modalen lukkes, fjernes eventlisteneren og gendanner sidegennemgangen
    document.body.style.overflow = 'auto';
    document.body.removeEventListener('touchmove', preventScroll, { passive: false });
  }

  //Hvis isOpen er falsk (modalvinduet er lukket), returnerer komponenten null, hvilket betyder, at intet vil blive renderet. 
  //Dette er en måde at skjule modalvinduet, når det ikke er åbent.
  if (!isOpen) return null;
  
  return (
    //Dette er selve overlay elementet. Med onClick={onClose} sørger jeg for at modalvinduet lukkes, 
    //når der trykkes alle andre steder end selve vinduet.
    <div className="modal" onClick={onClose}>
        <div className="gradient-wrapper">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <PostForm/>
            </div>    
        </div>
    </div>
  );
}
