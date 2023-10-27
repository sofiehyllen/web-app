import Graph from "../components/Graph";
import RatingHistory from "../components/RatingHistory";


export default function StatisticsPage(){

    return(
        <section className="page-content">
            <div className="spacing-bottom">
                <h1 className="titel">Your statistics</h1>
                <p className="bodytext">Check out the statistics of your weekly sleepcycle to get a better feeling of the quality of your sleep.</p>
            </div>
            <h2 className="heading">Weekly status</h2>

            <div className="spacing-bottom">
                <Graph/>
            </div>

            <div className="heading heading-small">
                <div className="center">
                    <p  id="statistictext">On average, you have slept for <span className="heavy-text">7:43 </span>hours every night this week.
                    That is <span className="heavy-text">34% </span>better than last week.</p> 
                </div>    
                
                <p className="heavy-text center spacing-bottom" id="statisticgoodjob">Good job Sarah!</p>
            </div>

            <div>
                <h2 className="heading">History</h2>
                <div className="spacing-top">
                    <RatingHistory/>
                </div>
            </div>
        </section>
    )
}