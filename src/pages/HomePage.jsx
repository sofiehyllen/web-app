// Denne side er kodet af: Ellen Bager & Sofie Hyllen

import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { containerAnimation, itemAnimation } from "../components/Animationer";
import moment from "moment/moment";
import illustrationHome from "../assets/illustration-home.svg"

export default function HomePage(){
    const currentDate = moment(); //Vi henter dags dato vha moment.js
    const homepageDate = currentDate.format('MMMM DD') //Datoen formateres
    
    const [brugernavn, setBrugernavn] = useState("");

    useEffect(() => { //Vi henter brugernavnet fra localStorage
        const temp = localStorage.getItem("brugernavn");

        if (temp) {
            setBrugernavn(temp)
        }
    },[])
 
    return(
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible"> 
            <motion.div variants={itemAnimation}>
            <h6 id="homedate" className="heading heading-small">{homepageDate}</h6>
            <h1 className='titel' > Good evening <span className="titel titel-tab">{brugernavn}</span></h1>
            </motion.div>
            
            <motion.div id="illustration-home" variants={itemAnimation}>
                <img className="img-max" src={illustrationHome} alt="moon illustration home" />
            </motion.div>

            <motion.div className="brickcontainer large rightalign-bottom brick-bg" id="brick-bg-home-1" variants={itemAnimation}>
                <div>
                    <h2 className="heading">Ready to go to sleep?</h2>
                    <p className="bodytext">Start the sleeptracker right before you go to sleep to keep track of the hours you sleep</p>
                </div>
                <Link className="button btn-small " to="/sleeptrackpage">
                    go to sleep <span className="btn-shine"/>
                </Link>
            </motion.div>


            <motion.div variants={itemAnimation} className="flex">
                <Link className="brickcontainer small brick-bg" id="brick-bg-home-2" to="/soundpage">
                    <div >
                        <h2 className="heading">Sounds</h2>
                        <p className="bodytext">Fall asleep to one of many calmning sleeping sounds</p>
                    </div>
                </Link>
                <Link className="brickcontainer small brick-bg" id="brick-bg-home-3" to="/statisticspage">
                    <div>
                        <h2 className="heading">Statistics</h2>
                        <p className="bodytext">Keep track of your sleep with the statistics of your latest sleepcycle</p>
                    </div>
                </Link>
            </motion.div>
        </motion.section>
    )
}