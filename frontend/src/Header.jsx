 import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "./components/Logo.png";

const setActive = ({isActive}) => isActive ?'active-link' : ''

export default function Header() {
const myString = "Hey"

for(const letter of myString){
  console.log(letter);
}
 
  return (
    <header>
      <nav>
        <NavLink to="/" className={setActive}><img src={Logo} id="logo" /></NavLink>
        <NavLink to="Videos" className={setActive}>Videos</NavLink>
        <NavLink to="Forum" className={setActive}>Forums</NavLink>
        <NavLink to="Project" className={setActive}>Project</NavLink>
      </nav>
    </header>
  );
}
