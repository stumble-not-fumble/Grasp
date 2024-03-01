import GraspImage from '../img/grasp.png'

const HomePage = () => {
    return (
        <div className='home_content'>
            <img className='grasp_home' src={GraspImage} alt={"graspicon"} />
            <div className='search_bar'>
            </div>
        </div>

    )
}

export default HomePage