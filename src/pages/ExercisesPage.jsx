import GoBackButton from "../components/GoBackButton";
import logoer from "../assets/logoer.svg"

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
          <img src={logoer} alt="Logoer" className="logoer" />

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
  