import Audiofile from "../components/Audiofile";

export default function SleeptrackPage(){

    return(
        <section className="page-content">
            <p className="titel1">Sleeptrack content</p>

            <Audiofile
            height={40}
            waveColor="rgba(96, 92, 110)"
            progressColor="rgba(240, 238, 230)"
            url={'src/assets/audio-rain.mp3'}
            barHeight={1.5}
            barWidth={3}
            barGap={3}
            barRadius={10}
            dragToSeek={true}
            />


            <Audiofile
            height={40}
            waveColor="rgba(96, 92, 110)"
            progressColor="rgba(240, 238, 230, 1)"
            url={'src/assets/audio-ocean-waves.mp3'}
            barHeight={2}
            barWidth={3}
            barGap={3}
            barRadius={10}
            dragToSeek={true}
            />
        </section>
    )
}