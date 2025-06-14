import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const undergraduateCourses = [
    { value: "BSM", label: "Bachelors in Sports Management" },
    { value: "BFA", label: "Bachelors in Fine Arts" },
    { value: "BPA", label: "Bachelors in Performing Arts" },
    { value: "BMS", label: "Bachelors in Management Studies" },
    { value: "BSC", label: "Bachelors in Science" },
    { value: "BCOM", label: "Bachelors in Commerce" },
    { value: "BA", label: "Bachelors in Arts" },
    { value: "BVOC", label: "Bachelors in Vocational" },
    { value: "BIA", label: "Bachelors in International Accounting" },
  ];

  const postgraduateCourses = [
    { value: "MSC", label: "Master of Science" },
    { value: "MCOM", label: "Master of Commerce" },
    { value: "MA", label: "Master of Arts" },
    { value: "MP", label: "Masters of Psychology" },
  ];

  const [Education, setEducation] = useState("");
  const [studentName, setStudentName] = useState("");
  const [stream, setStream] = useState("All");
  const [course, setCourse] = useState("All");
  const [city, setCity] = useState("All");

  // Dropdown
  const [courseOptions, setCourseOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const Options =
    Education === "Undergraduate"
      ? undergraduateCourses
      : Education === "Postgraduate"
      ? postgraduateCourses
      : [];

  console.log(stream);

  const fetchOptions = async () => {
    const params = {};
    if (stream != "All") params.stream = stream;
    console.log(stream);

    try {
      const { data } = await axios.get("http://localhost:9001/api/options", {
        params,
      });

      console.log(data);

      setCourseOptions(["All", ...data.courses]);
      setCityOptions(["All", ...data.cities]);

      console.log("Fetched Options:");
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, [stream]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>VidyarthiMitra Non-Cet College</h1>
      </div>

      <div className="container">
        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="text-input"
            name="searchQuery"
            // value={formData.searchQuery || ""}
            // onChange={handleInputChange}
          />
        </div>

        {/* Education Level */}
        <form onSubmit={handleSubmit}>
          <div className="education-level-group">
            <label className="label">Select Education Level:</label>
            <div className="education-level-options">
              <label>
                <input
                  type="radio"
                  name="educationLevel"
                  value="Undergraduate"
                  checked={Education === "Undergraduate"}
                  // onChange={(e) => setEducation(e.target.value)}
                  onChange={(e) => {
                    setEducation(e.target.value);
                    setStream(""); // reset stream on education change
                  }}
                />
                Undergraduate
              </label>
              <label>
                <input
                  type="radio"
                  name="educationLevel"
                  value="Postgraduate"
                  checked={Education === "Postgraduate"}
                  // onChange={(e) => setEducation(e.target.value)}
                  onChange={(e) => {
                    setEducation(e.target.value);
                    setStream(""); // reset stream on education change
                  }}
                />
                Postgraduate
              </label>
            </div>
          </div>

          {/* Course (Stream) Selection */}
          {/* <div className="course-selection">
          <label className="label">Select Stream:</label>
          <select
            name="Stream"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className="select-dropdown course-select"
          >
            <option value="">Select Stream</option>
            <option value="BSM">Bachelors in Sports Management</option>
            <option value="BFA">Bachelors in Fine Arts</option>
            <option value="BPA">Bachelors in Performing Arts</option>
            <option value="BMS">Bachelors in Management Studies</option>
            <option value="BSC">Bachelors in Science</option>
            <option value="BCOM">Bachelors in Commerce</option>
            <option value="BA">Bachelors in Arts</option>
            <option value="BVOC">Bachelors in Vocational</option>
            <option value="BIA">Bachelors in International Accounting</option>
          </select>
        </div> */}

          {Education && (
            <div className="course-selection">
              <label className="label">Select Stream:</label>
              <select
                name="Stream"
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="select-dropdown course-select"
              >
                <option value="">Select Stream</option>
                {Options.map((course) => (
                  <option key={course.value} value={course.value}>
                    {course.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Specialization Dropdown (Placeholder only) */}
          <div className="course">
            <label className="label">Select Specialization Course:</label>
            <select
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="select-dropdown"
            >
              {courseOptions.map((co, idx) => (
                <option key={idx} value={co}>
                  {co}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Colleges Section */}
          <div className="filter-section">
            <h2 className="section-title">Filter Colleges</h2>

            {/* Student Name */}
            <div className="form-group">
              <label className="label">Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your name"
                className="text-input"
              />
            </div>

            {/* City Dropdown (Placeholder only) */}
            <div className="form-row">
              <div className="form-group">
                <label className="label">City:</label>
                <select
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="select-dropdown"
                >
                  {cityOptions.map((city, idx) => (
                    <option key={idx} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-section">
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </form>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-btn">Previous</button>
          <span className="page-info">Page 1 of 1</span>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
