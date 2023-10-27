import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import moment from "moment";

export default function SleepingPage(){
    const [startTime, setStartTime] = useState(moment());

    useEffect(() => {
      const interval = setInterval(() => {
        setStartTime(moment());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return(
        <section >
            <section className="page-content" id="background-dark">
                <h1 className=" titel titel-big">Sleep tight <span className="titel-tab">name</span></h1>
                <div id="illustration-stopsleep" className="center">
                    <h2 className="bodytext-normal">You have slept for</h2>
                    <Timer startTime={startTime} />
                </div>
            </section>
        </section>
    )
}