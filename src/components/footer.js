
import GraspImage from '../img/grasp_title.png'
import '../css/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="centered">
                    <img className='footer_logo' src={GraspImage} alt={"graspicon"} />
                </div>
                <div className="footer_copyright">
                    <p>Copyright © 2024 Stumble Not Fumble | Designed by Stumble Not Fumble</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer