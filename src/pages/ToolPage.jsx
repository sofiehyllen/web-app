import { Link } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../components/Animationer";

export default function ToolPage(){
    return(
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <motion.div variants={itemAnimation}><GoBackButton /></motion.div>

            {/* TIPS & TOOLS HEADER */}            
            <motion.div className="spacing-bottom" variants={itemAnimation}>
                <h1 className="titel">Tips & tools</h1>
                <p className="bodytext spacing-top"> 
                    Getting a good night&apos;s sleep is essential for overall 
                    well-being. Here are some tips and tools to help you sleep better
                </p>
            </motion.div>


            {/* MEDITATION & EXERCISES SECTION */}
            <motion.div className="spacing-bottom" variants={itemAnimation}>
                <h2 className="heading">In the evening </h2>
                <div className="flex spacing-top">
                    <Link className="brickcontainer brick-bg" id="brick-bg-tools-1" to="/Meditation">
                        <div>
                            <p className="heading">Meditation</p>
                        </div>
                    </Link>
                    <Link className="brickcontainer brick-bg" id="brick-bg-tools-2" to="/Exercises">
                        <div>
                            <p className="heading">Exercises</p>
                        </div>
                    </Link>
                </div>
            </motion.div>

            {/* "TIP OF THE DAY" SECTION */}
            <motion.div className="center-bg" variants={itemAnimation}>
                <h2 className="heading"> Tip of the day </h2>
                <div className="rightalign-bottom" >
                    <div className="spacing-top center" id="tip-bg">
                        <p className="bodytext titelcolor" id="tipoftheday"> 
                            Create a calming bedtime routine to signal your body 
                            that it&apos;s time to wind down. This can include activities 
                            like reading or gentle stretching. A consistent routine 
                            can improve your sleep quality.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 10 STEPS SECTION */}
            <motion.div className="spacing-top" variants={itemAnimation}>
                <h2 className="heading"> During the day</h2>
                <div className="spacing-top brickcontainer medium leftalign-bottom brick-bg shake" id="brick-bg-tools-3">
                    <p className="heading">10 steps to better sleep</p>
                </div>
            </motion.div>
        </motion.section>
    )
}