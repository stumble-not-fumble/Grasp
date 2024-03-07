import { NavLink } from 'react-router-dom'
import GraspIcon from '../img/icon.png'
import "../css/navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="navbar_container">
                <div className="grasp_icon_centered">
                    <img className="grasp_icon" src={GraspIcon} alt="grasp logo" />
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload">Upload</NavLink>
                        </li>
                        <li>
                            <NavLink to="/browse">Browse</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
