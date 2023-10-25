
import PlayButton from "../components/PlayButton";

export default function ForestPage() {
  return (
    <section className="page-content">
      <h1 className='titel spacing-top'> Forest sounds </h1>
      <p className="bodytext spacing-bottom">
        Explore the diverse and soothing soundscape of the forest. 
        Immerse yourself in the sound of the wind whispering through 
        the trees or listen to the gentle stream flowing by.
      </p>

      <section className="spacing-bottom">
        <p className="heading">Rainforest</p>

        <div className="flex">
          <div className="brickcontainer brick-bg opacity" id="brick-bg-rainforest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className="fi fi-sr-heart hearticon"></i>
          </div>
          <div className="brickcontainer brick-bg opacity" id="brick-bg-rainforest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className="fi fi-sr-heart hearticon"></i>
          </div>
        </div>
      </section>

      <section>
        <p className="heading">Forest</p>

        <div className="flex spacing-bottom">
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className="fi fi-sr-heart hearticon"></i>
          </div>
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className="fi fi-sr-heart hearticon"></i>
          </div>
        </div>
        <div className="flex">
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className="fi fi-sr-heart hearticon"></i> 
          </div>
          <div className="brickcontainer brick-bg opacity" id="brick-bg-forest-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayButton audioUrl={'src/assets/audio-forest.mp3'} />
            <i className="fi fi-sr-heart hearticon"></i>
          </div>
        </div>
      </section>
    </section>
  );
}
