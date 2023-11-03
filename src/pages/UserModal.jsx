import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function UserModal() {

    const navigate = useNavigate();
    

  useEffect(() => {
    const favDialog = document.getElementById("favDialog");
    const inputEl = favDialog.querySelector("input");
    const confirmBtn = favDialog.querySelector("#confirmBtn");

    const temp = localStorage.getItem("brugernavn");

    if (temp) {
      setBrugernavn(temp);
      inputEl.value = temp;
      navigate("/homepage")
    } else {
      inputEl.value = "";
      favDialog.showModal();
    }

    function closeDialog() {
        const Firstname = inputEl.value;
        if (favDialog.returnValue !== "cancel" && Firstname) {
          const formattedFirstname = Firstname.charAt(0).toUpperCase() + Firstname.slice(1);//stort forbogstav
          localStorage.setItem("brugernavn", formattedFirstname);
          setBrugernavn(formattedFirstname);
          setShowModal(false);
          navigate("/homepage"); //til homepage
        } else if (!Firstname) {
          alert("Please enter a Firstname");
        }
      }
      favDialog.addEventListener("close", closeDialog);
  
      function okDialog(event) {
        event.preventDefault();
        const Firstname = inputEl.value;
        if (Firstname) {
          const formattedFirstname = Firstname.charAt(0).toUpperCase() + Firstname.slice(1); //stort forbogstav
          favDialog.close(formattedFirstname);
          setShowModal(false);
        } else {
          alert("Please enter your first name");
        }
      }
      
    confirmBtn.addEventListener("click", okDialog);

    return () => {
      document.removeEventListener("click", okDialog);
      document.removeEventListener("click", closeDialog);
    };
  }, [navigate]);

  const [user, setUser] = useState({
    Hoursofsleep: '',
    Firstname: '',
});

const userdata = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
};

const getdata = (e) => {
  e.preventDefault();
  const { Firstname, Hoursofsleep } = user;

  const userData = JSON.stringify({
    Firstname,
    Hoursofsleep
  });

  localStorage.setItem("userData", userData);
};

  return (
    <section>
        <div id="welcome-background">
            <dialog id="favDialog" className="dialog">
              <h2 className="titel spacing-bottom"> Welcome to Sleeper!</h2>
              <h2 className="titel titel-small spacing-bottom"> Please tell us your name</h2>
              <form>
                <div className="spacing-bottom">
                    <label className="heading heading-small">
                        <h3> What is your name?</h3>
                    </label>  
                    <input type="text" value={user.Firstname} name="Firstname" onChange={userdata} className="form-input heading heading-small"/>
                </div>
                <div className="spacing-bottom">
                  <label htmlFor="hoursofsleep" className='heading heading-small'><h3>How many hours do you wish to sleep at night?</h3></label>
                  <input type="number" className='form-input heading heading-small spacing-bottom' id="hoursofsleep" name="Hoursofsleep" value={user.Hoursofsleep} autoComplete="off" onChange={userdata} required />
                </div>
                <div id="modal-buttons" className="flex center">
                  <button id="confirmBtn" value="default" className="button btn-big" onClick={getdata}>
                    Confirm <span className="btn-shine"></span>
                  </button>
                </div>
              </form>
            </dialog>
        </div>
    </section>
  );
}