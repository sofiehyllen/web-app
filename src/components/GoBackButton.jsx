import React from "react";
import { useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack(); // Dette vil tage dig tilbage til den forrige side i browserhistorikken.
  };

  return (
    <button onClick={handleGoBack}>Go Back</button>
  );
}
