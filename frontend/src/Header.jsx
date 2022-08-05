import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "./components/Logo.png";
// import Videos from "./Routes/Videos.jsx";

const setActive = ({isActive}) => isActive ?'active-link' : ''

export default function Header() {
  const fruits = ['apple', 'Banana'] 
  const [fruitOne, fruitTwo] = fruits
  
  console.log(fruitOne);
  console.log(fruitTwo);


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
