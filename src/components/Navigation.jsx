// Denne side er kodet af: Sofie Hyllen

import { NavLink } from "react-router-dom";

export default function Navigation(){
    return(
        //Vi benytter NavLink til navigation mellem vores menupunkter
            <nav>
                <NavLink to="/homepage" activeclassname="active" className="nav-item">
                    <i className="fi fi-br-house-blank"></i>
                </NavLink>
                
                <NavLink to="/sleeptrackpage" activeclassname="active" className="nav-item">
                    <i className="fi fi-br-moon-stars"></i>
                </NavLink>

                <NavLink to="/menupage" activeclassname="active" className="nav-item">
                    <i className="fi fi-br-menu-burger"></i>
                </NavLink>
            </nav>
    )
}