import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import RatingCard from "./RatingCard";



export default function RatingDelete() {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams(); //URL indeholder parameters som er det samme som dataets ID (key)
    const url = `https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep/${params.postId}.json`;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => { //Her hentes det aktuelle "kort" med dataen for den givne dag
    async function getPost() {
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
    }
    getPost();
    }, [url]);

    const handleConfirm = async () => {
        const response = await fetch(url, {
            method: 'DELETE',
            });

        const data = await response.json();
            console.log(data);

            setShowModal(false);
            navigate('/statisticspage'); // Du skal måske importere navigate fra dit routingbibliotek
    };

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
       // setShowModal(false);
        navigate('/statisticspage')
    };

    return (
        <section className="">
            <div className="page-content">
                <RatingCard post={post} />
                <div className="center">
                    <button className="button btn-small" onClick={handleClick}>Delete Post  <span className='btn-shine'/></button>
                </div>

                {showModal && (
                    <div className="delete-modal">
                        <div className="delete-content">
                            <h1 className="titel">Delete?</h1>
                            <h2 className="heading heading-small spacing-bottom">Are you sure you want to delete the sleeptracking of this day?</h2>
                            <div className="center">
                                <button className="button btn-small btn-delete" onClick={handleConfirm}>Delete <span className='btn-shine'/></button>
                                <button className="button btn-small" onClick={handleCancel}>Cancel <span className='btn-shine'/></button>
                            </div>
                        </div>
                    </div>
                )}ß
            </div>
        </section>
    );
}
