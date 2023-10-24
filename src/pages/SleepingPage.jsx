
import Sleeptimer from "../components/Sleeptimer"

export default function SleepingPage(){

    return(
        <section className="page-content" id="background-dark">
            <h1 className=" titel titel-big">Sleep tight Sarah</h1>
            <Sleeptimer startTime={sleepStartTime} />
        </section>
    )
}