import { Link } from "react-router-dom";


export default function HomePage(){
    return(
        <section className="page-content">
            <h6 id="home-date" className="heading heading-small">October 11</h6>
            <h1 className="titel">Good evening <br /><span className="titel-tab">Sarah</span></h1>
            
            <div className="brickcontainer large">
                <h2 className="heading">Ready to go to sleep?</h2>
                <p className="bodytext">Start the sleeptracker right before you go to sleep to keep track of the hours you sleep</p>
                <div className="button btn-small"><Link to="/sleeptrackpage">go to sleep</Link></div>
            </div>


            <div className="flex">
                <div className="brickcontainer">
                    <h2 className="heading">Sounds</h2>
                    <p className="bodytext">Fall asleep to one of many calmning sleeping sounds</p>
                </div>

                <div className="brickcontainer">
                    <h2 className="heading">Statistics</h2>
                    <p className="bodytext">Keep track of your sleep with the statistics of your latest sleepcycle</p>
                </div>
            </div>
        </section>
    )
}