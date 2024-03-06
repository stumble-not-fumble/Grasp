import GraspImage from '../img/grasp.png'
import Searchbar from './searchbar'

const HomePage = () => {
    return (
        <div className='home_content'>
            <img className='grasp_home' src={GraspImage} alt={"graspicon"} />
            <div>
                <Searchbar />
            </div>
        </div>

    )
}

export default HomePage