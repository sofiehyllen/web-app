import Audiofile from "../components/Audiofile";
import { Link } from "react-router-dom";

export default function Meditation() {
    return (
      <section className="page-content">
        <h1 className='titel spacing-top'> Meditation </h1>
        <p className="bodytext spacing-bottom">
        Try meditation, for a good night sleep. 
        It calms the mind and body, promoting deep, restful sleep. 
        By focusing on breathing and mindfulness, meditation fosters inner peace. 
        </p>
  
        <section>
          <p className="heading">Meditation podcast</p>
{/* MEDITATION PODCAST SECTION */}
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

{/* MEDITATION EXERCISES SECTION */}
        <section>
            <p className="heading">Meditation Exersices</p>
            <div className="flex spacing-top">
                <div className="brickcontainer brick-bg" id="brick-bg-meditation-1" >
                    <p className="heading">Relaxation</p>
                </div>
                <div className="brickcontainer brick-bg" id="brick-bg-meditation-2" >
                    <p className="heading">Mindfulness</p>
                </div>
            </div>
            <div className="rightalign-bottom">
                
            <p className="bodytext spacing-bottom spacing-top">
                To enhance your meditation practice, enjoy your favorite meditation music or dive into our natural calming sounds. 
                Let the melodies guide you into a state of deep tranquility, leading you to a place of inner peace and relaxation.
            </p>
            <Link to="/soundpage" className="spacing-top button btn-small btn-purple">Calming sounds<i className="fi fi-sr-triangle rotate"></i></Link>
            </div>
            
        </section>
      </section>
    );
  }