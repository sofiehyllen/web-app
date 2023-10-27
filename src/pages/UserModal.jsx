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
          navigate("/"); //til homepage
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
                <div id="modal-buttons">
                  <button id="confirmBtn" value="default" className="button btn-small align">
                    Confirm
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
    </section>
  );
}