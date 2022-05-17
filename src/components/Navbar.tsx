import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export const Navbar = () => {
  return (
    <>
      <HamburgerMenu>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </HamburgerMenu>
    </>
  );
};
