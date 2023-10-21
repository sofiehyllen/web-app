import Graph from "../components/Graph";

export default function StatisticsPage(){

    return(
        <section className="page-content">
            <h1 className="titel">Your statistics</h1>
            <p className="bodytext">Check out the statistics of your weekly sleepcycle to get a better feeling of the quality of your sleep.</p>

            <h2 className="heading">Weekly status</h2>
            <div>
                <Graph/>
            </div>

            

            
        </section>



    )
}