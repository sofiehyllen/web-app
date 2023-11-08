// Denne side er kodet af: Karoline Lerche

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "../components/Animationer";
import menuIcon1 from "../assets/menu-icon1.svg"
import menuIcon2 from "../assets/menu-icon2.svg"
import menuIcon3 from "../assets/menu-icon3.svg"

export default function MenuPage(){
    return(
        // Userpage ikonet
        <motion.section className="page-content" variants={containerAnimation} initial="hidden" animate="visible">
            <Link to ="/userpage">
                <motion.div id="usericon" variants={itemAnimation}>
                    <i className="fi fi-ss-user"></i>
                </motion.div>
            </Link>

            {/* Calming sounds */}
            <motion.div className="spacing-bottom" variants={itemAnimation}>
                <h1 className="titel">Menu</h1>
                <p className="bodytext">Try our calming sounds, soothing tools, or check up on your latest sleep trackings. </p>
            </motion.div>

            <Link to ="/soundpage">
                <motion.div className="brickcontainer medium brick-bg relative" id="brick-bg-menu-1" variants={itemAnimation}>
                    <h2 className="heading">Calming Sounds</h2>
                    <p className="bodytext">Fall asleep to one of many <br />peaceful sleeping sounds</p>
                    <img className="img-max absolute menu-icons" src={menuIcon1} alt="menu icon 1" />
                </motion.div>
            </Link>

            {/* Statistics */}
            <Link to="/statisticspage">
                <motion.div className="brickcontainer medium brick-bg relative" id="brick-bg-menu-2" variants={itemAnimation}>
                    <h2 className="heading">Your Statistics</h2>
                    <p className="bodytext">Explore the world of your <br />personal sleep trackings</p>
                    <img className="img-max absolute menu-icons" src={menuIcon2} alt="menu icon 1" />
                </motion.div>
            </Link>

            {/* Tips & tools */}
            <Link to="/toolpage">
                <motion.div className="brickcontainer medium brick-bg relative" id="brick-bg-menu-3" variants={itemAnimation}>
                    <h2 className="heading">Tips & Tools</h2>
                    <p className="bodytext">Elevate your sleep experience <br /> with our soothing tools</p>
                    <img className="img-max absolute menu-icons" src={menuIcon3} alt="menu icon 1" />
                </motion.div>
            </Link>
        </motion.section>
    )
}