// Denne side er kodet af: Sofie Hyllen

import { useEffect, useState } from "react";
import GoBackButton from "../components/GoBackButton";
import Graph from "../components/Graph";
import RatingHistory from "../components/RatingHistory";
import SleepCalculator from "../components/SleepCalculator";
import { containerAnimation, itemAnimation } from "../components/Animationer";
import { motion } from "framer-motion";

export default function StatisticsPage(){
    const [brugernavn, setBrugernavn] = useState("");

    useEffect(() => { //Her hentes brugernavnet fra localStorage
        const temp = localStorage.getItem("brugernavn");
        if (temp) {
            setBrugernavn(temp)
        }
    },[])
    return(
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <GoBackButton/>

            <motion.div className="spacing-bottom" variants={itemAnimation}>                 
                <h1 className="titel">Your statistics</h1>
                <p className="bodytext">Check out the statistics of your weekly sleepcycle to get a better feeling of the quality of your sleep.</p>
            </motion.div>

            {/*Her vises grafen*/}
            <div className="spacing-bottom"> 
                <motion.h2 variants={itemAnimation} className="heading">Weekly status</motion.h2>
                <Graph/>
            </div>

            {/*Her vises det ugentlige gennemsnit for hvor mange timer brugeren har sovet*/}
            <motion.div className="heading heading-small" variants={itemAnimation}>              
                <div className="center">
                    <p id="statistictext">On average, you have slept for  
                    <span className="time-wrapper titelcolor" id="sleepcalculator"><SleepCalculator/></span>
                    hours every night this week. 
                    </p>
                </div>    
                <p className="heavy-text center spacing-bottom" id="statisticgoodjob">Good job {brugernavn}!</p>
            </motion.div>

            {/*Her vises de tidligere sleeptrackings*/}
            <motion.h2 variants={itemAnimation} className="heading">History</motion.h2>
            <div className="spacing-top">
                <RatingHistory/>
            </div>
        </motion.section>
    )
}