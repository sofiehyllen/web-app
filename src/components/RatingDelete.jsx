import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import DeleteModal from "./DeleteModal";


export default function RatingDelete() {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams(); //URL indeholder parameters som er det samme som dataets ID (key)
    const url = `https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep/${params.postId}.json`;

    useEffect(() => { //Her hentes det aktuelle "kort" med dataen for den givne dag
    async function getPost() {
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
    }
    getPost();
    }, [url]);

  async function deletePost() { //Her slettes den aktuelle tracking. Brugeren spørges igen før den slettes endeligt.
    const confirmDelete = window.confirm(`Do you want to delete this sleeptracking?`)
    
    if (confirmDelete) {
        const response = await fetch(url, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);
        navigate("/statisticspage");
      }
  }

    return (

        <section className="modal">
            <div className="modal-content">
                <DeleteModal post={post} />
                <button className="button btn-purple" onClick={deletePost}>Delete Post</button>
            </div>
        </section>
    );
}
