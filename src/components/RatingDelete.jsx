import { useEffect, useState } from "react";
import {  Navigate, useParams } from "react-router-dom";
import RatingForm from "./RatingForm";


export default function RatingDelete() {
  //const navigate = useNavigate();
  const [post, setPost] = useState({});
 

  // The url contains a parameter which is equal
  // to the id (key) of the translation to be
  // updated.
  const params = useParams();

   console.log(`params ${params.postId}`);

  // The url must reflect the fact, that only one translation
  // is to be updated. This translation is identified by its
  // id (key).
  const url = `https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep/${params.postId}.json`;

  // Fetch (GET) this single translation
  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
    }
    getPost();
  }, [url]);

  // This function deletes the current translation.
  // It asks the user for permission before the
  // deletion is completed.
  async function deletePost() {
    const confirmDelete = window.confirm(`Do you want to delete translation of?`)
    
    if (confirmDelete) {
        const response = await fetch(url, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);
        Navigate("/");
      }

  }

  // PostForm.js is implemented and 
  // callback "savePost" holds the 
  // name of the method that updates
  // the new translation.
    return (
        <div className="modal">
            <div className="gradient-wrapper">
                <div className="modal-content">
                    <h1>Update Post</h1>
                    <RatingForm post={post}/>
                    <button className="btn-delete" onClick={deletePost}>Delete Post</button>
                </div>
            </div>
        </div>
    );
}
