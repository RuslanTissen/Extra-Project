import {NavLink} from "react-router-dom"
import "./Header.scss"
import Logo from "./components/Logo.png"


export default function Header(){
    const fnWithError = ()=> {
        throw new Error('Some Error')            
    }
    try {
        fnWithError()        
    } catch (error) {
        console.error(error)
        console.log(error.message);
    }

    console.log('Continue...');

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