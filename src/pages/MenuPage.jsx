import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MenuPage(){
    return(
        <section className="page-content">


            <Link to ="/userpage">
                <div id="usericon">
                    <i className="fi fi-ss-user"></i>
                </div>
            </Link>

            <div className="spacing-bottom">
                <h1 className="titel">Menu</h1>
                <p className="bodytext">Try our calming sounds, soothing tools, or check up on your latest sleep trackings. </p>
            </div>

            <Link to ="/soundpage">
                <motion.div 
                initial={{ x: 80 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
                className="brickcontainer medium brick-bg relative" 
                id="brick-bg-menu-1">
                    <h2 className="heading">Calming Sounds</h2>
                    <p className="bodytext">Fall asleep to one of many <br />peaceful sleeping sounds</p>
                    <img className="img-max absolute menu-icons" src="src/assets/menu-icon3.svg" alt="menu icon 1" />
                </motion.div>
            </Link>

            <Link to="/statisticspage">
                <motion.div 
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
                className="brickcontainer medium brick-bg relative" 
                id="brick-bg-menu-2">
                    <h2 className="heading">Your Statistics</h2>
                    <p className="bodytext">Explore the world of your <br />personal sleep trackings</p>
                    <img className="img-max absolute menu-icons" src="src/assets/menu-icon2.svg" alt="menu icon 1" />
                </motion.div>
            </Link>

            <Link to="/toolpage">
                <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className="brickcontainer medium brick-bg relative"
                id="brick-bg-menu-3">
                    <h2 className="heading">Tips & Tools</h2>
                    <p className="bodytext">Elevate your sleep experience <br /> with our soothing tools</p>
                    <img className="img-max absolute menu-icons" src="src/assets/menu-icon1.svg" alt="menu icon 1" />
                </motion.div>
            </Link>
        </section>
    )
}