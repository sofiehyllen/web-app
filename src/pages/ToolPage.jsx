export default function ToolPage(){
    return(
        <section className="page-content">
            
{/* TIPS & TOOLS HEADER */}            
            <p className="titel">Tips & tools</p>
            <p className="heading heading-small"> 
                Getting a good night's sleep is essential for overall 
                well-being. Here are some tips and tools to help you sleep better
            </p>


{/* MEDITATION & EXERCISES SECTION */}
            <section>
                <p className="heading" > In the evening </p>
                <div className="flex">
                    <div className="brickcontainer">
                        <p className="heading">Meditation</p>
                    </div>
                    <div className="brickcontainer">
                        <p className="heading">Exercises</p>
                    </div>
                </div>
            </section>

{/* "TIP OF THE DAY" SECTION */}
            <section>
                <p className="heading"> Tip of the day </p>
                    <p className="heading heading-small center"> 
                        Create a calming bedtime routine to signal your body 
                        that it's time to wind down. This can include activities 
                        like reading or gentle stretching. A consistent routine 
                        can improve your sleep quality.
                    </p>
                <button className="button btn-small button-purple"> Explore more </button>
            </section>

{/* 10 STEPS SECTION */}
            <section>
                <p className="heading"> During the day</p>
                <div className="brickcontainer medium">
                    <p className="heading">10 steps to better sleep</p>
                </div>
            </section>
            
            
        </section>
    )
}