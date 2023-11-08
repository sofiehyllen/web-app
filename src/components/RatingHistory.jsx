// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import { motion } from "framer-motion";
import { itemAnimation } from "./Animationer";
import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";

//Denne funktion henter søvnmålingerne og viser dem i RatingCard komponenten 
export default function RatingHistory() {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true);
  
  useEffect(() => { //Denne funktion henter dataene fra vores firebase-database
    async function getPosts() {
        const url = "https://sleep-aa77c-default-rtdb.europe-west1.firebasedatabase.app/sleep.json";
        const response = await fetch(url);
        const data = await response.json();

      if (data !== null) {
        //Hvis der er data i firebase oprettes et nyt array ved at tilføje hvert datasæt (udfra id'et) til arrayet
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));      

        setPosts(postsArray.reverse()); //Vi bruger reverse for at sortere dataene fra nyest til ældst
      } else {
        setIsPosts(false); //Hvis ikke der er data i firebase, oprettes postet ikke
      }
    }
    getPosts();
  }, []);

  return ( //Her implementeres vores RatingCard
    <article className="page">
      {isPosts ? ( //Her vises brugerens tidligere trackings. 
        <motion.div variants={itemAnimation} className="flexbox">
          {posts.map((post) => (
            <RatingCard key={post.id} post={post} />
          ))}
        </motion.div>
      ) : ( //Er der ikke nogen trackings at vises, vises i stedet beskeden nedenfor
        <p className="bodytext">You have no recorded sleep history. <br />
        Start your first sleeptracking to see the statistics of your sleep here. </p>
      )}
    </article>
  );
}