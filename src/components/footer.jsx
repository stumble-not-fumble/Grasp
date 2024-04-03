import { NavLink } from "react-router-dom";
import GraspImage from "../img/grasp_title.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="centered">
          <NavLink to="/">
            <img className="footer_logo" src={GraspImage} alt={"graspicon"} />
          </NavLink>
        </div>
        <div className="footer_copyright">
          <p>
            Copyright © 2024 Stumble Not Fumble | Designed by Stumble Not
            Fumble
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
