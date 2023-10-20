import { Link } from "react-router-dom";

export default function ToolPage(){
    return(
        <section className="page-content">
            
{/* TIPS & TOOLS HEADER */}            
            <h1 className="titel">Tips & <br /><span className="titel-tab">tools</span></h1>
            <p className="bodytext"> 
                Getting a good night&apos;s sleep is essential for overall 
                well-being. Here are some tips and tools to help you sleep better
            </p>


{/* MEDITATION & EXERCISES SECTION */}
            <section>
                <p className="heading" > In the evening </p>
                <div className="flex">
                    <div className="brickcontainer leftalign-bottom">
                        <p className="heading">Meditation</p>
                    </div>
                    <div className="brickcontainer leftalign-bottom">
                        <p className="heading">Exercises</p>
                    </div>
                </div>
            </section>

{/* "TIP OF THE DAY" SECTION */}
            <section>
                <p className="heading"> Tip of the day </p>
                <div className="rightalign-bottom">
                    <p className="bodytext center"> 
                        Create a calming bedtime routine to signal your body 
                        that it&apos;s time to wind down. This can include activities 
                        like reading or gentle stretching. A consistent routine 
                        can improve your sleep quality.
                    </p>
                    <Link to="/homepage" className=" button btn-small btn-purple">explore more<i className="fi fi-sr-triangle rotate"></i></Link>
                </div>
            </section>

{/* 10 STEPS SECTION */}
            <section>
                <p className="heading"> During the day</p>
                <div className="brickcontainer medium leftalign-bottom">
                    <p className="heading">10 steps to better sleep</p>
                </div>
            </section>
            
            
        </section>
    )
}