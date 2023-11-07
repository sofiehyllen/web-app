import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function UserModal() { // Ellen

    const [brugernavn, setBrugernavn] = useState("");// bruges til at gemme brugerens navn
    const [showModal, setShowModal] = useState(true);//bruges til at styre om dialogb oks skal vises
    const navigate = useNavigate(); //bruges til at skifte mellem sider
    

  useEffect(() => {
    const favDialog = document.getElementById("favDialog");
    const inputEl = favDialog.querySelector("input");
    const confirmBtn = favDialog.querySelector("#confirmBtn");

    const temp = localStorage.getItem("brugernavn");//henter brugernavn fra localstorrage, hvis brugeren tidligere har brugt siden på samme browser. 

    if (temp) {
      setBrugernavn(temp);
      inputEl.value = temp;
      navigate("/homepage")
    } else {
      inputEl.value = "";
      favDialog.showModal();
    }

    function closeDialog() {
        const username = inputEl.value;
        if (favDialog.returnValue !== "cancel" && username) {// tjekker at returnvalue ikke er Cancel og username er udfyldt
          const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1);//stort forbogstav
          localStorage.setItem("brugernavn", formattedUsername);
          setBrugernavn(formattedUsername);
          setShowModal(false);
          navigate("/homepage"); //til homepage
        } else if (!username) {
          alert("Please enter a username"); //Melder fejl hvis ikke der er indtastet et navn
        }
      }
      favDialog.addEventListener("close", closeDialog);
  
      function okDialog(event) {
        event.preventDefault();
        const username = inputEl.value;
        if (username) {
          const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1); //stort forbogstav
          favDialog.close(formattedUsername); 
          setShowModal(false);
        } else {
          alert("Please enter a username"); //Melder fejl hvis ikke der er indtastet et navn
        }
      }
      
    confirmBtn.addEventListener("click", okDialog);

    return () => {
      document.removeEventListener("click", okDialog);
      document.removeEventListener("click", closeDialog);
    };
  }, [navigate]);

  const [user, setUser] = useState({
    Firstname: '',
    Hoursofsleep: ''
});

const userdata = (e) => { // Funktion til at opdatere brugerens data, når der sker ændringer i inputfelterne
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
};

const getdata = (e) => { // Funktion til at gemme brugerens data i localStorage ved at håndtere formens indsendelse
  e.preventDefault();
  const { Firstname, Hoursofsleep } = user;

  const userData = JSON.parse(localStorage.getItem("userData")) || {}; // Hent eksisterende data eller opret et tomt objekt
  userData.Firstname = Firstname;
  userData.Hoursofsleep = Hoursofsleep;

  localStorage.setItem("userData", JSON.stringify(userData));  // Gemmer brugerdata i localStorage som JSON-data
};

  return (
    <section>
        <div id="welcome-background">
            <dialog id="favDialog" className="dialog">
                <h2 className="titel spacing-bottom"> Welcome to Sleeper!</h2>
                <form>
                    <div className="spacing-bottom">
                        <label className="heading heading-small">
                            <h3> What is your name?</h3>
                        </label>  
                        <input 
                          type="text"
                          value={user.Firstname}
                          name="Firstname"
                          onChange={userdata}
                          className="form-input heading heading-small"/> {/* bruges til at udfylde firstname */} 
                    </div>

                    <div className="spacing-bottom">
                        <label htmlFor="hoursofsleep" className='heading heading-small'>
                            <h3>How many hours do you wish to sleep at night?</h3>
                        </label>
                        <input type="number" className='form-input heading heading-small spacing-bottom' id="hoursofsleep" name="Hoursofsleep" value={user.Hoursofsleep} autoComplete="off" onChange={userdata} required /> {/* bruges til at udfylde Hoursofsleep */} 
                    </div>

                    <div id="modal-buttons" className="flex center">
                        <button id="confirmBtn" value="default" className="button btn-big" onClick={getdata}>
                        Confirm <span className="btn-shine"></span>
                        </button> {/* udløser funktionen "getdata" */} 
                    </div>
                </form>
            </dialog>
        </div>
    </section>
  );
}