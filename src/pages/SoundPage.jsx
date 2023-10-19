export default function SoundPage(){
    return(
        <section className="page-content">
            
{/* SOUNDPAGE HEADER */}     
            <p className="titel">Have trouble sleeping?</p>
            <p className="heading heading-small"> 
                Explore the variety of calming and relaxing sleeping sounds. 
                Fall asleep to the sound of waves in the ocean or listen to 
                quiet rainfall while you meditate.
            </p>

{/* SOUND CATEGORIES SECTION */}
            <section>
                <p> Categories </p>
                <div className="brickcontainer large">
                    <p className="heading">Forest</p>
                </div>
                
                <div className="flex">
                    <div className="brickcontainer">
                        <p className="heading">Rain</p>
                    </div>
                    <div className="brickcontainer">
                        <p className="heading">Ocean</p>
                    </div>
                </div>
            </section>
{/* LIKED SOUNDS SECTION */}
            
        </section>
    )
}