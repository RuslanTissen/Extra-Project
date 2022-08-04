import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "./components/Logo.png";

export default function Header() {
  const userProfile = {
    name : "Ruslan",
    age: 48,
    hasSignedAgreement: true
  }

//   const {name, age} = userProfile
// const {hasSignedAgreement} = userProfile

console.log(userProfile.name);

  return (
    <header>
      <nav>
        <NavLink to="*">
          {/* <span className="logoNav">Ruslan's LOGO</span> */}
          <img src={Logo} id="logo" />
        </NavLink>
        <NavLink to="Videos">Videos</NavLink>
        <NavLink to="Forum">Forums</NavLink>
        <NavLink to="Project">Project</NavLink>
      </nav>
    </header>
  );
}
