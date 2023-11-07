import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import RatingCard from "./RatingCard";
import GoBackButton from "./GoBackButton";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "./Animationer";



export default function RatingDelete() {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams();                                                                                         //URL indeholder parameters som er det samme som dataets ID (key)
    const url = `https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep/${params.postId}.json`;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getPost();
    }, [url]);

    const handleConfirm = async () => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                setShowModal(false);
                navigate('/statisticspage');
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <motion.section  variants={containerAnimation} initial="hidden" animate="visible" className="page-content">
            <motion.div variants={itemAnimation}><GoBackButton /></motion.div>
            <div id="deletecardpage">
                <motion.div variants={itemAnimation} ><RatingCard post={post} /></motion.div>
                <motion.div variants={itemAnimation} className="center">
                    <button className="button btn-small" onClick={handleClick}>Delete Post  <span className='btn-shine'/></button>
                </motion.div>
            </div>
            {showModal && (
                <motion.div variants={containerAnimation} initial="hidden" animate="visible" className="delete-modal">
                    <div className="delete-content">
                        <h1 className="titel">Delete?</h1>
                        <h2 className="heading heading-small spacing-bottom">Are you sure you want to delete the sleeptracking of this day?</h2>
                        <div className="center">
                            <button className="button btn-small btn-delete" onClick={handleConfirm}>Delete <span className='btn-shine'/></button>
                            <button className="button btn-small" onClick={handleCancel}>Cancel <span className='btn-shine'/></button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.section>
    );
}
