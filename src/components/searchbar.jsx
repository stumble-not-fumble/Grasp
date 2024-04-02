import { useEffect, useState } from "react";
import search_icon from "../img/search_icon.png";

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    setShowDropdown(true);
  };

  const handleDropdownClick = (course) => {
    setSearchItem(
      `${course.course_major} ${course.course_number} ${course.course_title}`
    );
    setShowDropdown(false);
  };

  useEffect(() => {
    if (searchItem === "") {
      setFilteredCourses([]);
      setShowDropdown(false);
      return;
    }

    fetch(`https://grasp-api.fly.dev/search/${searchItem}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setFilteredCourses(data);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [searchItem]);

  return (
    <form className="mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          <img className="search_icon" src={search_icon} alt="Search Icon" />
        </div>
        <input
          type="search"
          className="block w-full p-4 ps-14"
          placeholder="Search for a course"
          required
          value={searchItem}
          onChange={handleInputChange}
        />
        {showDropdown && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-2">
            {filteredCourses.map((course, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleDropdownClick(course)}
              >
                {`${course.course_major} ${course.course_number} ${course.course_title}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default Searchbar;
