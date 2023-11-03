import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";
import { motion } from "framer-motion";
import { itemAnimation } from "./Animationer";

export default function RatingHistory() {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  
  useEffect(() => {
    async function getPosts() {
        const url = "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
        const response = await fetch(url);
      const data = await response.json();
      if (data !== null) {
        // This code makes a new array (postsArray) with all the 
        // data (translations) from the database. "id" becomes equal to
        // the unique database key, each post have - like "-NDxg_qx1eWfdkNlZ6oj"
        // and the rest of the data is kept as they are: eng = english, dk = danish,
        // tid = transaction id.
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));      

        setPosts(postsArray.reverse()); // Update "posts" object array list. Set posts equal to postsArray
      } else {
        setIsPosts(false); // If no data is found, set isPosts to "false". "Noting to show" message is shown.
      }
    }
    getPosts();
  }, []);

  // PostCard is implemented. It receives the data (translations)
  // retrieved above.
  return (
    <article className="page">
      {isPosts ? (
        <motion.div variants={itemAnimation} className="flexbox">
          {posts.map((post) => (
            <RatingCard key={post.id} post={post} />
          ))}
        </motion.div>
      ) : (
        <p className="bodytext">You have no recorded sleep history. <br />
        Start your first sleeptracking to see the statistics of your sleep here. </p>
      )}
    </article>
  );
}