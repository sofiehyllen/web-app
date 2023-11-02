import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function UserModal() {

    const [brugernavn, setBrugernavn] = useState("");
    const [showModal, setShowModal] = useState(true);
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
        const username = inputEl.value;
        if (favDialog.returnValue !== "cancel" && username) {
          const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1);//stort forbogstav
          localStorage.setItem("brugernavn", formattedUsername);
          setBrugernavn(formattedUsername);
          setShowModal(false);
          navigate("/homepage"); //til homepage
        } else if (!username) {
          alert("Please enter a username");
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
          alert("Please enter a username");
        }
      }
      
    confirmBtn.addEventListener("click", okDialog);

    return () => {
      document.removeEventListener("click", okDialog);
      document.removeEventListener("click", closeDialog);
    };
  }, [navigate]);

  const [user, setUser] = useState({
    Hoursofsleep: ''
});

const userdata = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
};

const getdata = (e) => {
  e.preventDefault();
  const {Hoursofsleep } = user;

  const userData = JSON.stringify({
      Hoursofsleep
  });

  localStorage.setItem("userData", userData);
  alert("Information saved");
};

  return (
    <section className="page-content">
        <div >
          <div>
            <dialog id="favDialog" className="dialog">
              <h2 className="titel spacing-bottom"> Welcome!</h2>
              <h2 className="titel titel-small spacing-bottom"> Please tell us your name</h2>
              <form>
                <p>

                  <label className="heading heading-small">
                    First name: <br/>
                    <input
                      type="text"
                      value={brugernavn}
                      onChange={(e) => setBrugernavn(e.target.value)}
                      className="form-input heading heading-small"
                    />
                  </label>
                </p>
                <div className="spacing-bottom">
                  <label htmlFor="hoursofsleep"><h4 className='heading heading-small'>Hours of sleep</h4></label>

                  <input type="number" className='form-input heading heading-small' id="hoursofsleep" name="Hoursofsleep" value={user.Hoursofsleep} autoComplete="off" onChange={userdata} required />
                </div>
                <div id="modal-buttons">

                  <button id="confirmBtn" value="default" className="button btn-small align" onClick={getdata}>
                    Confirm <span className="btn-shine"></span>
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
    </section>
  );
}