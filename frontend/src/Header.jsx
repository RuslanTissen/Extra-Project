import {NavLink} from "react-router-dom"
import "./Header.scss"

export default function Header(){



    return(
        <nav>
            <NavLink to="*"><span className="logoNav">Ruslan's LOGO</span><img src="./components/Logo.png" id="logo" /></NavLink>

        </nav>
    )
}