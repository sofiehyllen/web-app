import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import PropTypes from 'prop-types'; 

export default function ModalRating({ isOpen, onClose}) {
    const navigate = useNavigate();

    async function createPost(newPost) {
        const url = "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
        
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPost) 
        });
        const data = await response.json();
        console.log(data);
        navigate("/");
    }


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
  
  ModalRating.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

  return (
    //Dette er selve overlay elementet. Med onClick={onClose} sørger jeg for at modalvinduet lukkes, 
    //når der trykkes alle andre steder end selve vinduet.
    <div className="modal" onClick={onClose}>
        <div className="gradient-wrapper">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <PostForm savePost={createPost} />
            </div>    
        </div>
    </div>
  );
}
