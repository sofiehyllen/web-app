// Denne side er kodet af: Ellen Bager

import { containerAnimation, itemAnimation } from "../components/Animationer";
import Audiofile from "../components/Audiofile";
import GoBackButton from "../components/GoBackButton";
import { motion } from "framer-motion";

export default function MeditationPage() { 
    return (
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <motion.div variants={itemAnimation}><GoBackButton /></motion.div>

            <motion.div variants={itemAnimation}>
                <h1 className='titel'> Meditation </h1>
                <p className="bodytext spacing-bottom">
                Try meditation for a good night sleep. 
                It calms the mind and body, promoting deep, restful sleep. 
                </p>
            </motion.div>

            {/* MEDITATION EXERCISES SECTION */}
            <motion.div className="spacing-bottom" variants={itemAnimation}>
                <h2 className="heading">Meditation Exersices</h2>
                <div className="flex spacing-top">
                    <div className="brickcontainer brick-bg shake" id="brick-bg-meditation-1" >
                        <p className="heading">Relaxation</p>
                    </div>{/* Henter baggrundsbillede fra css */} 
                    <div className="brickcontainer brick-bg shake" id="brick-bg-meditation-2" >
                        <p className="heading">Mindfull</p>
                    </div>{/* Henter baggrundsbillede fra css */} 
                </div>
            </motion.div>


            {/* AMBIENT MEDITATION SECTION */}
            <section>
                <motion.h2 className="heading" variants={itemAnimation}>Ambient meditation</motion.h2>
                <motion.div variants={itemAnimation}>
                    <p className="bodytext spacing-top">
                        Enjoy the variety of ambient sounds and let the melodies guide you into a state of deep tranquility, 
                        leading you to a place of inner peace and relaxation.
                    </p>
                </motion.div>
                
                <div className="spacing-top"> {/* Lydfiler til meditation */} 
                    
                    <motion.div variants={itemAnimation}>
                    <Audiofile
                    textarea={"Session No. 1"}
                    height={30}
                    waveColor="rgba(96, 92, 110)"
                    progressColor="rgba(240, 238, 230)"
                    url={'src/assets/session1.mp3'}
                    barHeight={1.5}
                    barWidth={3}
                    barGap={4}
                    barRadius={10}
                    dragToSeek={true}
                    cursorColor={'transparent'}
                    /></motion.div>

                    <motion.div variants={itemAnimation}>
                    <Audiofile
                    textarea={"Session No. 2"}
                    height={30}
                    waveColor="rgba(96, 92, 110)"
                    progressColor="rgba(240, 238, 230, 1)"
                    url={'src/assets/session2.mp3'}
                    barHeight={2}
                    barWidth={3}
                    barGap={4}
                    barRadius={10}
                    dragToSeek={true}
                    cursorColor={'transparent'}
                    /></motion.div>

                    <motion.div variants={itemAnimation}>
                    <Audiofile
                    textarea={"Session No. 3"}
                    height={30}
                    waveColor="rgba(96, 92, 110)"
                    progressColor="rgba(240, 238, 230)"
                    url={'src/assets/session3.mp3'}
                    barHeight={1.5}
                    barWidth={3}
                    barGap={4}
                    barRadius={10}
                    dragToSeek={true}
                    cursorColor={'transparent'}
                    /></motion.div>

                    <motion.div variants={itemAnimation}>
                    <Audiofile
                    textarea={"Session No. 4"}
                    height={30}
                    waveColor="rgba(96, 92, 110)"
                    progressColor="rgba(240, 238, 230, 1)"
                    url={'src/assets/session4.mp3'}
                    barHeight={2}
                    barWidth={3}
                    barGap={4}
                    barRadius={10}
                    dragToSeek={true}
                    cursorColor={'transparent'}
                    /></motion.div>
                </div>
            </section>
      </motion.section>
    );
  }