import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { itemAnimation } from "./Animationer";

export default function GoBackButton() {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1); // Dette vil tage dig tilbage til den forrige side i browserhistorikken.
  };

  return (
    <motion.div variants={itemAnimation}>
        <button onClick={handleGoBack} className="back"><i className="fi fi-br-angle-small-left"></i></button>
    </motion.div>    
  );
}
