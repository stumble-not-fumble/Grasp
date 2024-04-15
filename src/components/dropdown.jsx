import React from "react";
import "../css/course.css";

const Dropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    onChange(selected);
  };

  return (
    <div className="select-container">
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
