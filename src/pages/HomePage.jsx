import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function HomePage(){

    const [currentDate, setCurrentDate] = useState('');

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    useEffect(() => {
        var date = new Date().getDate() // current date
        let month = new Date().getMonth() +1 // curren month
        setCurrentDate(
            date + ' ' + month 
        )
    }, [])

    const [brugernavn, setBrugernavn] = useState("");
    const [showModal, setShowModal] = useState(true);

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


    // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
    function closeDialog() {
      if (favDialog.returnValue !== "cancel") {
        localStorage.setItem("brugernavn", favDialog.returnValue);
        setBrugernavn(favDialog.returnValue);
        setShowModal(false);
      }

    }
    favDialog.addEventListener("close", closeDialog);

    // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
    function okDialog(event) {
      event.preventDefault(); // We don't want to submit this fake form
      favDialog.close(inputEl.value); // Have to send the select box value here.
      setShowModal(false);
    }
    confirmBtn.addEventListener("click", okDialog);

    //Afmonterer eventlisteners når siden ikke vises
    return () => {
      document.removeEventListener("click", okDialog);
      document.removeEventListener("click", closeDialog);
    };
  }, []);

 

    return(
        <section className="page-content">
            {showModal && (
            <div className="modal">
                <div className='gradient-wrapper'>
                    <dialog id="favDialog" className="dialog">
                        <h2 className='titel spacing-bottom'> Welcome!</h2>
                        <h2 className='titel titel-small spacing-bottom'> Please tell us your name</h2>
                        <form>
                            <p>
                                <label className='bodytext-normal'>
                                    First name:
                                        <input
                                        type="text"
                                        value={brugernavn}
                                        onChange={(e) => setBrugernavn(e.target.value)}
                                        className="text"
                                        />
                                </label>
                            </p>
                            <div id="modal-buttons">
                                <button id="confirmBtn" value="default" className="button btn-small align">
                                    Confirm
                                </button>
                                <button value="cancel" formMethod="dialog" className="button btn-purple align">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
            )}

            <h6 id="homedate" className="heading heading-small">{currentDate}</h6>
                <h1 className='titel' > Good evening <span className="titel titel-tab">{brugernavn || "you"}</span></h1>
            
            <div id="illustration-home"><img className="img-max" src="src/assets/illustration-home.svg" alt="moon illustration home" /></div>

            <div className="brickcontainer large rightalign-bottom brick-bg" id="brick-bg-home-1">
                <div>
                    <h2 className="heading">Ready to go to sleep?</h2>
                    <p className="bodytext">Start the sleeptracker right before you go to sleep to keep track of the hours you sleep</p>
                </div>
                <Link className="button btn-small" to="/sleeptrackpage">go to sleep</Link>
            </div>


            <div className="flex">
                <Link to="/soundpage">
                    <div className="brickcontainer small brick-bg" id="brick-bg-home-2">
                        <h2 className="heading">Sounds</h2>
                        <p className="bodytext">Fall asleep to one of many calmning sleeping sounds</p>
                    </div>
                </Link>

                <Link to="/statisticspage">
                    <div className="brickcontainer small brick-bg" id="brick-bg-home-3">
                        <h2 className="heading">Statistics</h2>
                        <p className="bodytext">Keep track of your sleep with the statistics of your latest sleepcycle</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}