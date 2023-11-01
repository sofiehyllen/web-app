import GoBackButton from "../components/GoBackButton";
import logoer from "../assets/logoer.svg"

export default function ExercisesPage() {
    return (
      <section className="page-content">
        <GoBackButton/>
        <h1 className='titel spacing-top'> Exercises </h1>
        <p className="bodytext">
        Explore diverse methods and exercises to enhance your sleep rhythm. 
        Below, you will discover daily practices, including breathing exercises, 
        designed to facilitate a more restful and consistent sleep pattern.
        </p>
  
        <section className="spacing-bottom">
            <div className="center"><img src={logoer} alt="Logoer" className="logoer" /></div>

          <h2 className="heading">Breahting exercises</h2>
          <p className="bodytext spacing-bottom">
            Discover the transformative effects of mindful breathing techniques, designed to reduce stress and promote relaxation.
          </p>
          <div className="flex spacing-top">
                <div className="brickcontainer brick-bg" id="brick-bg-breathing-1" >
                    <p className="heading">No. 1</p>
                </div>
                <div className="brickcontainer brick-bg" id="brick-bg-breathing-2">
                    <p className="heading">No. 2</p>
                </div>
            </div>
        </section>
      </section>
    );
  }
  