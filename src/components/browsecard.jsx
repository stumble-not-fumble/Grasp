import { useNavigate } from "react-router-dom";
import "../css/browse.css";
import PropTypes from "prop-types";

const Browsecard = ({
  course_major,
  course_number,
  course_title,
  course_description,
}) => {
  const navigate = useNavigate();
  const course = {
    course_major,
    course_number: Number(course_number),
    course_title,
  };

  const handleCardClick = () => {
    navigate("/course-page", { state: { course } });
  };
  return (
    <div className="card-container" onClick={handleCardClick}>
      <div>
        <p>
          {course_major.toUpperCase()} {course_number}
        </p>
      </div>
      <div className="my-4">
        <h3>{course_title.toUpperCase()}</h3>
      </div>
      <div>
        <p>{course_description} </p>
      </div>
    </div>
  );
};

Browsecard.propTypes = {
  course_major: PropTypes.string.isRequired,
  course_number: PropTypes.string.isRequired,
  course_title: PropTypes.string.isRequired,
  course_description: PropTypes.string.isRequired,
};
export default Browsecard;
