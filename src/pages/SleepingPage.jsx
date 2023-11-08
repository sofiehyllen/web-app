// Denne side er kodet af: Sofie Hyllen

import { useEffect, useState } from "react";
import moment from "moment";
import Timer from "../components/Timer";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../components/Animationer";

export default function SleepingPage(){
    const [brugernavn, setBrugernavn] = useState("");
    const [startTime, setStartTime] = useState(moment());

    useEffect(() => {
        const temp = localStorage.getItem("brugernavn");
        if (temp) {
            setBrugernavn(temp)
        }
    },[])

    useEffect(() => {
      const interval = setInterval(() => {
        setStartTime(moment());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return(
        <motion.section className="page-content" id="background-dark" variants={containerAnimation} initial="hidden" animate="visible">
            <motion.h1 variants={containerAnimation} className=" titel titel-big">Sleep tight <motion.span variants={itemAnimation} className="titel-tab">{brugernavn}</motion.span></motion.h1>
            
            <motion.div variants={containerAnimation} id="illustration-stopsleep" className="center">
                <motion.h2 variants={itemAnimation} className="bodytext-normal">You have slept for</motion.h2>
                <motion.div variants={itemAnimation} ><Timer startTime={startTime} /></motion.div>
            </motion.div>
        </motion.section>
    )
}