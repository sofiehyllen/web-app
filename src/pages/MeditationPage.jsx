import Audiofile from "../components/Audiofile";
import GoBackButton from "../components/GoBackButton";

export default function MeditationPage() {
    return (
      <section className="page-content">
        <GoBackButton/> 
        <h1 className='titel'> Meditation </h1>
        <p className="bodytext spacing-bottom">
        Try meditation for a good night sleep. 
        It calms the mind and body, promoting deep, restful sleep. 
        </p>
  
  {/* MEDITATION EXERCISES SECTION */}
        <section className="spacing-bottom">
            <h2 className="heading">Meditation Exersices</h2>
                <div className="flex spacing-top">
                    <div className="brickcontainer brick-bg" id="brick-bg-meditation-1" >
                        <p className="heading">Relaxation</p>
                    </div>
                    <div className="brickcontainer brick-bg" id="brick-bg-meditation-2" >
                        <p className="heading">Mindfull</p>
                    </div>
                </div>
            <div className="rightalign-bottom spacing-top">    
                {/*<Link to="/soundpage" className="spacing-top button btn-small btn-purple">Calming sounds<i className="fi fi-sr-triangle rotate"></i></Link>*/}
            </div>
        </section>


{/* AMBIENT MEDITATION SECTION */}
        <section>
          <h2 className="heading">Ambient meditation</h2>
                <p className="bodytext spacing-top">
                    Enjoy the variety of ambient sounds and let the melodies guide you into a state of deep tranquility, 
                    leading you to a place of inner peace and relaxation.
                 </p>

                <div className="spacing-top">
                <Audiofile
                textarea={"Session #1"}
                height={30}
                waveColor="rgba(96, 92, 110)"
                progressColor="rgba(240, 238, 230)"
                url={'src/assets/session1.mp3'}
                barHeight={1.5}
                barWidth={3}
                barGap={4}
                barRadius={10}
                dragToSeek={true}
                cursorColor={'transparent'}
                />

                <Audiofile
                textarea={"Session #2"}
                height={30}
                waveColor="rgba(96, 92, 110)"
                progressColor="rgba(240, 238, 230, 1)"
                url={'src/assets/session2.mp3'}
                barHeight={2}
                barWidth={3}
                barGap={4}
                barRadius={10}
                dragToSeek={true}
                cursorColor={'transparent'}
                />

                <Audiofile
                textarea={"Session #3"}
                height={30}
                waveColor="rgba(96, 92, 110)"
                progressColor="rgba(240, 238, 230)"
                url={'src/assets/session3.mp3'}
                barHeight={1.5}
                barWidth={3}
                barGap={4}
                barRadius={10}
                dragToSeek={true}
                cursorColor={'transparent'}
                />

                <Audiofile
                textarea={"Session #4"}
                height={30}
                waveColor="rgba(96, 92, 110)"
                progressColor="rgba(240, 238, 230, 1)"
                url={'src/assets/session4.mp3'}
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
    );
  }