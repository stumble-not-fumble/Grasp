import { NavLink } from "react-router-dom";
import GraspIcon from "../img/icon.png";
import search_icon from "../img/search_icon.png";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar_container">
        <div className="grasp_icon_centered">
          <NavLink to="/">
            <img className="grasp_icon" src={GraspIcon} alt="grasp logo" />
          </NavLink>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/browse">Browse Courses</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Upload Syllabus</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            {/* <li>
              <img className="search_icon" src={search_icon} alt="search" />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
