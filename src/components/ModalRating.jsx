
import PostForm from "./PostForm";
import PropTypes from 'prop-types'; 

export default function ModalRating({ isOpen, onClose, elapsedTime}) {
   
    async function createPost(newPost) {
        const url = "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
        
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPost) 
        });
        const data = await response.json();
        console.log(data);
    }

  //Hvis isOpen er falsk (modalvinduet er lukket), returnerer komponenten null, hvilket betyder, at intet vil blive renderet. 
  //Dette er en måde at skjule modalvinduet, når det ikke er åbent.
  if (!isOpen) return null;
  
  ModalRating.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    elapsedTime: PropTypes.string,
};
  return (
    //Dette er selve overlay elementet. Med onClick={onClose} sørger jeg for at modalvinduet lukkes, 
    //når der trykkes alle andre steder end selve vinduet.
    <div className="modal" onClick={onClose}>
        <div className="gradient-wrapper">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <PostForm savePost={createPost} elapsedTime={elapsedTime}/>
            </div>    
        </div>
    </div>
  );
}
