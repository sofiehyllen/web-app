import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function HomePage(){

    const [currentDate, setCurrentDate] = useState('');

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    useEffect(() => {
        var date = new Date().getDate() // current date
        let month = new Date().getMonth() +1 // curren month
        setCurrentDate(
            date + ' ' + month 
        )
    }, [])

    const [brugernavn, setBrugernavn] = useState("");

    useEffect(() => {
        const temp = localStorage.getItem("brugernavn");

        if (temp) {
            setBrugernavn(temp)
        }

    },[])
 

    return(
        <section className="page-content">
            <h6 id="homedate" className="heading heading-small">{currentDate}</h6>
                <h1 className='titel' > Good evening <span className="titel titel-tab">{brugernavn}</span></h1>
            
            <div id="illustration-home"><img className="img-max" src="src/assets/illustration-home.svg" alt="moon illustration home" /></div>

            <div className="brickcontainer large rightalign-bottom brick-bg" id="brick-bg-home-1">
                <div>
                    <h2 className="heading">Ready to go to sleep?</h2>
                    <p className="bodytext">Start the sleeptracker right before you go to sleep to keep track of the hours you sleep</p>
                </div>
                <Link className="button btn-small" to="/sleeptrackpage">go to sleep</Link>
            </div>


            <div className="flex">
                <Link to="/soundpage">
                    <div className="brickcontainer small brick-bg" id="brick-bg-home-2">
                        <h2 className="heading">Sounds</h2>
                        <p className="bodytext">Fall asleep to one of many calmning sleeping sounds</p>
                    </div>
                </Link>

                <Link to="/statisticspage">
                    <div className="brickcontainer small brick-bg" id="brick-bg-home-3">
                        <h2 className="heading">Statistics</h2>
                        <p className="bodytext">Keep track of your sleep with the statistics of your latest sleepcycle</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}