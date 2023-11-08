// Denne side er kodet af: Karoline Lerche & Sofie Hyllen

import { Link } from "react-router-dom";
import { useState } from "react";
import {motion} from 'framer-motion'
import { containerAnimation, itemAnimation} from "../components/Animationer";
import Favourites from "../components/Favourites";
import illustrationSleeptrack from "../assets/illustration-start-sleep.svg"

export default function SleeptrackPage() {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []; //Her hentes brugerens farvoritter fra localStorage
  const [favorites, setFavorites] = useState(storedFavorites);

    return (
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <motion.div variants={itemAnimation}>
                 <h1 className="titel">Ready to go <br /> <span className="titel-tab">to sleep?</span></h1>
            </motion.div>

            <motion.div id="illustration-startsleep" variants={itemAnimation}>
                <img className="img-max" src={illustrationSleeptrack} alt="moon illustration sleep" />
            </motion.div>

            {/*Button til at starte tracking*/}
            <motion.div className="center flex spacing-bottom" variants={itemAnimation}>
                <Link className="button btn-big" to="/sleepingpage">
                    start tracking <span className="btn-shine" />
                </Link>
            </motion.div>

            {/*Sektion med favoritter*/}
            <Favourites favorites={favorites} />

            <motion.div variants={itemAnimation} className="rightalign-bottom">
                <Link to="/soundpage" className=" button btn-small btn-purple">explore more<i className="fi fi-sr-triangle rotate"></i></Link>
            </motion.div>
        </motion.section>
    )
}
