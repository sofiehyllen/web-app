
import { useState } from "react";
import PostForm from "../components/PostForm";
import Timer from "../components/Timer";
import ModalRating from "../components/ModalRating";


export default function SleepingPage(){
    const startTime = new Date()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <section id="background-dark">
            <section className="page-content" >
                <h1 className=" titel titel-big">Sleep tight <span className="titel-tab">name</span></h1>
                <div className="center">
                    <h2 className="bodytext-normal">You have been sleeping for</h2>
                    <Timer startTime={startTime} />
    
                    <button onClick={openModal} className="button btn-big">stop tracking</button>
                    <ModalRating isOpen={isModalOpen} onClose={closeModal} content={<PostForm/>}></ModalRating>
                </div>
            </section>
        </section>
    )
}