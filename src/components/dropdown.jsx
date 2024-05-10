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
        <svg
          className="arrow ml-auto rotate-180"
          id="drp-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 14.5l5-5 5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
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
