import Graph from "../components/Graph";

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

            <div className="center">
                <p className="heading heading-small">On average, you have slept for <span id="statistics-time">7:43 </span>hours every night this week.
                That is <span>34% </span>better than last week. <br /> <span>Good job Sarah!</span></p>
            </div>
        </section>



    )
}