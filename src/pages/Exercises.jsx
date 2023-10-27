

export default function Exercises() {
    return (
      <section className="page-content">
        <h1 className='titel spacing-top'> Exercises </h1>
        <p className="bodytext spacing-bottom">
        Explore diverse methods and exercises to enhance your sleep rhythm. 
        Below, you will discover daily practices, including breathing exercises, 
        designed to facilitate a more restful and consistent sleep pattern.
        </p>
  
        <section className="spacing-bottom">
          <p className="heading">During the day</p>
          <div className="exercises-icon">
            <div className="cirkel">
            <i class="fi fi-br-physics icon"></i>
            <i class="fi fi-br-user icon"></i>
            <i class="fi fi-rr-gym icon"></i> {/* ? */}
            <i class="fi fi-sr-heart icon"></i>
            <i class="fi fi-rr-users icon"></i>{/* ? */}
            <i class="fi fi-br-running icon"></i>
            <i class="fi fi-rr-user-visor icon"></i> {/* ? */}
            <i class="fi fi-ss-brain icon"></i>
            <i class="fi fi-br-person-praying icon"></i>
            <i class="fi fi-br-skating icon"></i>
            <i class="fi fi-br-walking icon"></i>{/* ? */}
            </div>
          </div>

          <p className="heading">Breahting exercises</p>
          <p className="bodytext spacing-bottom">
            Discover the transformative effects of mindful breathing techniques, designed to reduce stress and promote relaxation.
          </p>
          <div className="flex spacing-top">
                <div className="brickcontainer brick-bg" >
                    <p className="heading">#1</p>
                </div>
                <div className="brickcontainer brick-bg" >
                    <p className="heading">#2</p>
                </div>
            </div>
        </section>
      </section>
    );
  }
  