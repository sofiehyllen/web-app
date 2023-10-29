import { Link } from "react-router-dom";

export default function ToolPage(){
    return(
        <section className="page-content">
            
{/* TIPS & TOOLS HEADER */}            
            <div className="spacing-bottom">
                <h1 className="titel">Tips & tools</h1>
                <p className="bodytext"> 
                    Getting a good night&apos;s sleep is essential for overall 
                    well-being. Here are some tips and tools to help you sleep better
                </p>
            </div>


{/* MEDITATION & EXERCISES SECTION */}
            <section className="spacing-bottom">
                <p className="heading">In the evening </p>
                <div className="flex spacing-top">
                    <Link className="brickcontainer brick-bg" id="brick-bg-tools-1" to="/Meditation">
                        <div>
                            <p className="heading">Meditation</p>
                        </div>
                    </Link>
                    <Link className="brickcontainer brick-bg" id="brick-bg-tools-2" to="/Exercises">
                        <div>
                            <p className="heading">Exercises</p>
                        </div>
                    </Link>
                </div>
            </section>

{/* "TIP OF THE DAY" SECTION */}
            <section className="spacing-bottom center-bg" >
                <p className="heading"> Tip of the day </p>
                <div className="rightalign-bottom" >
                    <div className="spacing-top center" id="tip-bg">
                        <p className="bodytext titelcolor" id="tipoftheday"> 
                            Create a calming bedtime routine to signal your body 
                            that it&apos;s time to wind down. This can include activities 
                            like reading or gentle stretching. A consistent routine 
                            can improve your sleep quality.
                        </p>
                    </div>
                    <Link to="" className="spacing-top button btn-small btn-purple">explore more<i className="fi fi-sr-triangle rotate"></i></Link>
                </div>
            </section>

{/* 10 STEPS SECTION */}
            <section>
                <p className="heading"> During the day</p>
                <div className="spacing-top brickcontainer medium leftalign-bottom brick-bg" id="brick-bg-tools-3">
                    <p className="heading">10 steps to better sleep</p>
                </div>
            </section>
            
            
        </section>
    )
}