import GraspImage from "../img/grasp_title.png";
import Searchbar from "./searchbar";
import "../css/home.css";

const HomePage = () => {
  return (
    <div className="home_content">
      <img className="home_grasp_logo" src={GraspImage} alt={"graspicon"} />
      <Searchbar />
    </div>
  );
};

export default HomePage;
