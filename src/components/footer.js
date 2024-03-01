
import GraspImage from '../img/grasp.png'
import '../css/app.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="centered">
                    <img className='grasp_footer' src={GraspImage} alt={"graspicon"} />
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <p>Copyright © 2024 Stumble Not Fumble | Designed by Stumble Not Fumble</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer