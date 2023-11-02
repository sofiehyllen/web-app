import GoBackButton from "../components/GoBackButton";
import logoer from "../assets/logoer.svg"
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../components/Animationer";

export default function ExercisesPage() {
    return (
      <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
        <motion.div variants={itemAnimation}><GoBackButton /></motion.div>

        <motion.h1 className='titel spacing-top' variants={itemAnimation}> Exercises </motion.h1>
        <motion.div variants={itemAnimation}>
            <p className="bodytext">
            Explore diverse methods and exercises to enhance your sleep rhythm. 
            Below, you will discover daily practices, including breathing exercises, 
            designed to facilitate a more restful and consistent sleep pattern.
            </p>
        </motion.div>
        
        <motion.div className="center" variants={itemAnimation}><img src={logoer} alt="Logoer" className="logoer" /></motion.div>

        <motion.h2 className="heading" variants={itemAnimation}>Breahting exercises</motion.h2>
        <motion.div variants={itemAnimation}>
            <p className="bodytext spacing-bottom">
            Discover the transformative effects of mindful breathing techniques, designed to reduce stress and promote relaxation.
            </p>
        </motion.div>

        <motion.div className="flex spacing-top" variants={itemAnimation}>
            <div className="brickcontainer brick-bg shake" id="brick-bg-breathing-1" >
                <p className="heading">No. 1</p>
            </div>
            <div className="brickcontainer brick-bg shake" id="brick-bg-breathing-2">
                <p className="heading">No. 2</p>
            </div>
        </motion.div>
      </motion.section>
    );
  }
  