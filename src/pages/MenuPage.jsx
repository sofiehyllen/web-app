import { Link } from "react-router-dom";

export default function MenuPage(){
    return(
        <section className="page-content">
            <div className="spacing-bottom">
                <h1 className="titel">Menu</h1>
                <p className="bodytext">Try our calming sounds, soothing tools, or check up on your latest sleep trackings. </p>
            </div>
            <Link to ="/soundpage">
                <div className="brickcontainer medium">
                    <h2 className="heading">Calming Sounds</h2>
                    <p className="bodytext">Fall asleep to one of many <br />peaceful sleeping sounds</p>
                </div>
            </Link>


            <Link to="/statisticspage">
                <div className="brickcontainer medium">
                    <h2 className="heading">Your Statistics</h2>
                    <p className="bodytext">Explore the world of your <br />personal sleep trackings</p>
                </div>
            </Link>


            <Link to="/toolpage">
                <div className="brickcontainer medium">
                    <h2 className="heading">Tips & Tools</h2>
                    <p className="bodytext">Elevate your sleep experience <br /> with our soothing tools</p>
                </div>
            </Link>
        </section>
    )
}