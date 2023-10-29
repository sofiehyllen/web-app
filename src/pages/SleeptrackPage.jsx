import Audiofile from "../components/Audiofile";
import { Link } from "react-router-dom";

export default function SleeptrackPage(){
   // const [count, setCount] = useState(0)

    return(
        <section className="page-content">

            <h1 className="titel">Ready to go <br /> <span className="titel-tab">to sleep?</span></h1>
            
            <div id="illustration-startsleep"><img className="img-max" src="src/assets/illustration-start-sleep.svg" alt="moon illustration sleep" /></div>

                <div className="center flex">
                    <Link className="button btn-big" to="/sleepingpage">
                            start tracking <span className="btn-shine"/>
                    </Link>
                </div>

                <div id="sleeptrackpage-sounds">
                    <h2 className="heading">Your favourite sounds</h2>
                    <div className="rightalign-bottom spacing-top">
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

                        <Link to="/soundpage" className=" button btn-small btn-purple">explore more<i className="fi fi-sr-triangle rotate"></i></Link>
                    </div>
                </div>
        </section>
    )
}