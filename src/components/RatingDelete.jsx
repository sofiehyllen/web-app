// Denne side er kodet af: Sofie Hyllen

import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "./Animationer";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import RatingCard from "./RatingCard";
import GoBackButton from "./GoBackButton";

//Denne funktion benyttes til at slette et ratingkort fra history
export default function RatingDelete() {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams(); //Params benyttes til at hente specifikke parametre fra Firebase URL’en
    const url = `https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep/${params.postId}.json`; //URL'en konstrueres på baggrund af det modtagne postId
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(url); //Henter data fra url vha. fetch
                const data = await response.json(); //Konverterer til JSON
                setPost(data); //Komponentens tilstand opdateres med det hentede data
            } catch (error) { //Kan dataen ikke hentes, vises denne fejlmelding i konsollen
                console.error('Error fetching data:', error);
            }
        }
        getPost();
    }, [url]); //Uafhængighedsarray: Funktionen udløses kun hvis værdien af url ændrer sig

    //handleConfirm funktionen udføres, ved bekræftelse af sletning
    const handleConfirm = async () => {
        try {
            const response = await fetch(url, {
                method: 'DELETE', //Her sendes en DELETE anmodning til firebase url'en, hvorved det bestemte postId slettes
            });
    
            if (response.ok) { //Hvis sletningen lykkes, lukkes modalvinduet og brugeren bliver navigeret til statistiksiden
                setShowModal(false);
                navigate('/statisticspage');
            }
        } catch (error) { //Hvis sletningen mislykkes, vises denne fejlbesked i konsollen
            console.error('Error deleting data:', error);
        }
    };

    //Arrow-funktionerne handleClick og handleCancel hhv. viser og skjuler modalvinduet med sletningsbekræftelsen, ved at opdatere showModal.
    const handleClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

return ( 
    //Her beskrives hvad der som udgangspunkt vises på siden
    <motion.section  variants={containerAnimation} initial="hidden" animate="visible" className="page-content">
        <GoBackButton/>
        <div id="deletecardpage">
            <motion.div variants={itemAnimation} ><RatingCard post={post}/></motion.div>
            <motion.div variants={itemAnimation} className="center">
                <button className="button btn-small" onClick={handleClick}>Delete Post<span className='btn-shine'/></button>
            </motion.div>
        </div>
        
        {showModal && ( //Denne del vises kun hvis showModal er sand, og giver brugeren mulighed for at bekræfte eller annullere sletningen. 
            <motion.div variants={containerAnimation} initial="hidden" animate="visible" className="delete-modal">
                <div className="delete-content">
                    <h1 className="titel">Delete?</h1>
                    <h2 className="heading heading-small spacing-bottom">Are you sure you want to delete the sleeptracking of this day?</h2>
                    <div className="center">
                        {/*Vælger brugeren at bekræfte sletningen, udløses handleConfirm, og søvnmålingen slettes.*/}
                        <button className="button btn-small btn-delete" onClick={handleConfirm}>Delete <span className='btn-shine'/></button>
                        <button className="button btn-small" onClick={handleCancel}>Cancel <span className='btn-shine'/></button>
                    </div>
                </div>
            </motion.div>
        )}
    </motion.section>
    );
}
