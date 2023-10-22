import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <section className="page-content">
            <h6 id="homedate" className="heading heading-small">October 11</h6>
            <h1 className="titel">Good evening <br /><span className="titel-tab">Sarah</span></h1>
            
            <div id="illustration-home"><img className="img-max" src="src/assets/illustration-home.svg" alt="moon illustration home" /></div>

            <div className="brickcontainer large rightalign-bottom">
                <div>
                    <h2 className="heading">Ready to go to sleep?</h2>
                    <p className="bodytext">Start the sleeptracker right before you go to sleep to keep track of the hours you sleep</p>
                </div>
                <Link className="button btn-small" to="/sleeptrackpage">go to sleep</Link>
            </div>


            <div className="flex">
                <div className="brickcontainer">
                    <Link to="/soundpage">
                        <h2 className="heading">Sounds</h2>
                        <p className="bodytext">Fall asleep to one of many calmning sleeping sounds</p>
                    </Link>
                </div>

                <div className="brickcontainer">
                    <Link to="/statisticspage">
                        <h2 className="heading">Statistics</h2>
                        <p className="bodytext">Keep track of your sleep with the statistics of your latest sleepcycle</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}