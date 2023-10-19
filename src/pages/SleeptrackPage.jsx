
import { useState } from 'react'
import SleepTracker from '../components/Sleeptracker'


export default function SleeptrackPage(){
    const [count, setCount] = useState(0)

    return(
        <section className="page-content">
            <p className="titel">Ready to go to sleep?</p>
            
            <div className="SleepTracker">
                <SleepTracker />
            </div>

        </section>
    )
}