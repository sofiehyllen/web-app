import Audiofile from "../components/Audiofile";

import { useState } from 'react'
import SleepTracker from '../components/Sleeptracker'


export default function SleeptrackPage(){
    const [count, setCount] = useState(0)

    return(
        <section className="page-content">
 
            <h1 className="titel">Ready to go <br /> <span className="titel-tab">to sleep?</span></h1>
            <div className="SleepTracker">
                <SleepTracker />
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