import GoBackButton from "../components/GoBackButton";


export default function ExercisesPage() {
    return (
      <section className="page-content">
        <GoBackButton/>
        <h1 className='titel spacing-top'> Exercises </h1>
        <p className="bodytext spacing-bottom">
        Explore diverse methods and exercises to enhance your sleep rhythm. 
        Below, you will discover daily practices, including breathing exercises, 
        designed to facilitate a more restful and consistent sleep pattern.
        </p>
  
        <section className="spacing-bottom">
          <p className="heading">During the day</p>
          <div className="exercises-icon">
            <i className="fi fi-br-physics icon icon1"></i>
            <i className="fi fi-br-user icon icon2"></i>
            <i className="fi fi-rr-gym icon icon3"></i> 
            <i className="fi fi-sr-heart icon icon4"></i>
            <i className="fi fi-rr-users icon icon5"></i>
            <i className="fi fi-br-running icon icon6"></i>
            <i className="fi fi-rr-user-visor icon icon7"></i> 
            <i className="fi fi-ss-brain icon icon8"></i>
            <i className="fi fi-br-person-praying icon icon9"></i>
            <i className="fi fi-br-skating icon icon10"></i>
            <i className="fi fi-br-walking"></i>
          </div>

          <p className="heading">Breahting exercises</p>
          <p className="bodytext spacing-bottom">
            Discover the transformative effects of mindful breathing techniques, designed to reduce stress and promote relaxation.
          </p>
          <div className="flex spacing-top">
                <div className="brickcontainer brick-bg" id="brick-bg-breathing-1" >
                    <p className="heading">#1</p>
                </div>
                <div className="brickcontainer brick-bg" id="brick-bg-breathing-2">
                    <p className="heading">#2</p>
                </div>
            </div>
        </section>
      </section>
    );
  }
  