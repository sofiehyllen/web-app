import Audiofile from "../components/Audiofile";

export default function SoundPage(){

    return(
        <section className="page-content">
            
{/* SOUNDPAGE HEADER */}     
            <div className="spacing-bottom">
                <h1 className="titel">Have trouble <br /><span className="titel-tab">sleeping?</span></h1>
                <p className="bodytext spacing-top"> 
                    Explore the variety of calming and relaxing sleeping sounds. 
                    Fall asleep to the sound of waves in the ocean or listen to 
                    quiet rainfall while you meditate.</p>
            </div>

{/* SOUND CATEGORIES SECTION */}
            <section className="spacing-bottom">
                <h2 className="heading">Categories</h2>
                <div className="brickcontainer medium leftalign-bottom spacing-top">
                    <p className="heading">Forest</p>
                </div>
                
                <div className="flex">
                    <div className="brickcontainer leftalign-bottom">
                        <p className="heading">Rain</p>
                    </div>
                    <div className="brickcontainer leftalign-bottom">
                        <p className="heading">Ocean</p>
                    </div>
                </div>
            </section>
{/* LIKED SOUNDS SECTION */}
            <section>
                
                <h2 className="heading">Your favourite sounds</h2>
                <div className="spacing-top">
                    
                    
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
                </div>
            </section>




            
        </section>
    )
}