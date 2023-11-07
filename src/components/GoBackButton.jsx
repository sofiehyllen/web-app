import { useNavigate } from "react-router-dom";

export default function GoBackButton() { // Ellen
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1); // Dette vil tage dig tilbage til den forrige side i browserhistorikken.
  };

  return (
    <button onClick={handleGoBack} className="back"><i className="fi fi-br-angle-small-left"></i>{/* tilbage knappen stylet i css */} </button>  
  );
}
