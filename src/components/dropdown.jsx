/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/course.css";

const CustomSelect = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="custom-select" onClick={toggleSelect}>
      <div className="select-selected">
        {selectedOption ? selectedOption.label : "Select an option"}
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map((option) => (
            <div
              key={option.value}
              className={`${
                selectedOption && selectedOption.value === option.value
                  ? "same-as-selected"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
