
export default function HomePage(){
    return(
        <section className="page-content">
            <p id="home-date" className="heading heading-small">October 11</p>
         <p className="titel">Homepage content</p>
         <div className="brickcontainer large">
            <p className="heading">Ready to go to sleep?</p>
            <p className="bodytext">Start the sleeptracker right before you go to sleep to keep track of the hours you sleep</p>
         </div>

         <div className="brickcontainer medium">
            <p className="heading">Your statistics</p>
            <p className="bodytext">Explore the world of your personal sleep trackings</p>
         </div>

         <div className="brickcontainer">
            <p className="heading">Sounds</p>
            <p className="bodytext">Fall asleep to one of many calmning sleeping sounds</p>
         </div>
        </section>
    )
}