import "../css/browse.css";
import PropTypes from "prop-types";

const Browsecard = ({
  courseMajor,
  courseNumber,
  courseTitle,
  courseDescription,
  // courseCredits,
}) => {
  return (
    <div className="card-container">
      <div>
        <p>
          {courseMajor.toUpperCase()} {courseNumber}
        </p>
      </div>
      <div className="my-4">
        <h3>{courseTitle.toUpperCase()}</h3>
      </div>
      <div>
        <p>{courseDescription} </p>
      </div>
      {/* <div className="credits">{courseCredits} credits</div> */}
    </div>
  );
};

Browsecard.propTypes = {
  courseMajor: PropTypes.string.isRequired,
  courseNumber: PropTypes.string.isRequired,
  courseTitle: PropTypes.string.isRequired,
  courseDescription: PropTypes.string.isRequired,
  // courseCredits: PropTypes.number.isRequired,
};
export default Browsecard;
