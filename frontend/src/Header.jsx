import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "./components/Logo.png";
// import Videos from "./Routes/Videos.jsx";

const setActive = ({isActive}) => isActive ?'active-link' : ''

export default function Header() {
  const userProfile = {
    name : "Ruslan",
    age: 48,
    hasSignedAgreement: true
  }

  const {name, age} = userProfile
const {hasSignedAgreement} = userProfile

console.log(name, age);

  return (
    <header>
      <nav>
        <NavLink to="*" className={setActive}><img src={Logo} id="logo" /></NavLink>
        <NavLink to="Videos" className={setActive}>Videos</NavLink>
        <NavLink to="Forum" className={setActive}>Forums</NavLink>
        <NavLink to="Project" className={setActive}>Project</NavLink>
      </nav>
    </header>
  );
}
