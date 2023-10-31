import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import RatingCard from "./RatingCard";


export default function RatingDelete() {
    const navigate = useNavigate();
  const [post, setPost] = useState({});
  const params = useParams(); //URL indeholder parameters som er det samme som dataets ID (key)
        // console.log(`params ${params.postId}`);
  const url = `https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep/${params.postId}.json`;

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
    const confirmDelete = window.confirm(`Do you want to delete this sleeptracking?`)
    
    if (confirmDelete) {
        const response = await fetch(url, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);
        navigate("/");
      }
  }

  // PostForm.js is implemented and 
  // callback "savePost" holds the 
  // name of the method that updates
  // the new translation.
    return (
        <section>
            <h1>Delete Post</h1>
            <RatingCard post={post} />
            <button className="btn-delete" onClick={deletePost}>Delete Post</button>
        </section>
    );
}
