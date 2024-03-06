import React, { useEffect, useState } from 'react'


const courses = [
    {
        "name": "Database Design",
        "course_number": "INFO 330"
    },
    {
        "name": "Client side Development",
        "course_number": "INFO 340"
    },
    {
        "name": "Design Method",
        "course_number": "INFO 360"
    },
    {
        "name": "Introduction to Data Science",
        "course_number": "INFO 370"
    },
    {
        "name": "Information Architecture",
        "course_number": "INFO 380"
    }
]

const Searchbar = () => {
    const [searchItem, setSearchItem] = useState('')
    const [filteredCourses, setFilteredCourses] = useState(courses)

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)


        const filteredItems = courses.filter((course) =>
            `${course.course_number} ${course.name}`.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredCourses(filteredItems);
    }

    return (
        <div className="searchArea">
            <input
                className="searchInput"
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Search a Course'
            />

            <ul className="searchContent">
                {filteredCourses.map(course => <li>{course.course_number + " " + course.name}</li>)}
            </ul>


        </div>
    )
}

export default Searchbar


