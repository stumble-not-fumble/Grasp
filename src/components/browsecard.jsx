import "../css/browse.css";
import PropTypes from "prop-types";
const Browsecard = ({
  courseMajor,
  courseNumber,
  courseTitle,
  courseDescription,
  courseCredits,
}) => {
  return (
    <div className="cardContainer">
      <div className="header">
        {courseMajor.toUpperCase()} {courseNumber}
      </div>
      <div className="header">{courseTitle.toUpperCase()}</div>
      <div className="info">{courseDescription}</div>
      <div className="credits">{courseCredits} credits</div>
    </div>
  );
};

Browsecard.propTypes = {
  courseMajor: PropTypes.string.isRequired,
  courseNumber: PropTypes.string.isRequired,
  courseTitle: PropTypes.string.isRequired,
  courseDescription: PropTypes.string.isRequired,
  courseCredits: PropTypes.number.isRequired,
};
export default Browsecard;
