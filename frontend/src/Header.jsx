import {NavLink} from "react-router-dom"
import "./Header.scss"
import Logo from "./components/Logo.png"


export default function Header(){
    function myFn(a,b){return a+b}
    // const a = myFn(2,3)
    console.log(myFn(2,3));

    return(
        <header>
            <nav>
            <NavLink to="*">
                {/* <span className="logoNav">Ruslan's LOGO</span> */}
                <img src={Logo} id="logo" /></NavLink>
            <NavLink to="Videos">Videos</NavLink>
            <NavLink to="Forum">Forums</NavLink>
            <NavLink to="Project">Project</NavLink>
        </nav>
        </header>
        
    )
}