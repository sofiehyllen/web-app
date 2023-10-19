import { Link } from "react-router-dom";
import Audiofile from "../components/Audiofile";


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
            <h2 className="heading">Your favourite sounds</h2>
            <Audiofile
            textarea={"Quiet rain"}
            height={30}
            waveColor="rgba(96, 92, 110)"
            progressColor="rgba(240, 238, 230)"
            url={'src/assets/audio-rain.mp3'}
            barHeight={1.5}
            barWidth={3}
            barGap={4}
            barRadius={10}
            dragToSeek={true}
            cursorColor={'transparent'}
            />

            <Audiofile
            textarea={"Ocean waves"}
            height={30}
            waveColor="rgba(96, 92, 110)"
            progressColor="rgba(240, 238, 230, 1)"
            url={'src/assets/audio-ocean-waves.mp3'}
            barHeight={2}
            barWidth={3}
            barGap={4}
            barRadius={10}
            dragToSeek={true}
            cursorColor={'transparent'}
            />
        </section>
    )
}