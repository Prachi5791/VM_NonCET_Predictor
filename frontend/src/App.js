import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    courseName: '',
    studentName: '',
    city: '',
    instituteName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted with data:', formData);
    alert(`Form submitted!\nCourse: ${formData.courseName}\nStudent: ${formData.studentName}\nCity: ${formData.city}\nInstitute: ${formData.instituteName}`);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>VidyarthiMitra Non-Cet Collegey</h1>
      </div>

      <div className="container">
        {/* Course Selection */}
        <div className="course-selection">
          <label className="label">
            Select Admission Process:
          </label>
          <select 
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            className="select-dropdown course-select"
          >
            <option value="">Select Course</option>
            <option value="BDesign">BDesign</option>
            <option value="Engineering">Engineering</option>
            <option value="Medical">Medical</option>
            <option value="Management">Management</option>
            <option value="Architecture">Architecture</option>
            <option value="Pharmacy">Pharmacy</option>
          </select>
        </div>

        {/* Filter Colleges Section */}
        <div className="filter-section">
          <h2 className="section-title">Filter Colleges</h2>
          
          {/* Student Name */}
          <div className="form-group">
            <label className="label">
              Student Name:
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="text-input"
            />
          </div>

          {/* City and Institute Name in a row */}
          <div className="form-row">
            <div className="form-group">
              <label className="label">
                City:
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="select-dropdown"
              >
                <option value="">All</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Solapur">Solapur</option>
                <option value="Amravati">Amravati</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label">
                Institute Name:
              </label>
              <select
                name="instituteName"
                value={formData.instituteName}
                onChange={handleInputChange}
                className="select-dropdown"
              >
                <option value="">All</option>
                <option value="IIT Bombay">IIT Bombay</option>
                <option value="COEP">COEP</option>
                <option value="VJTI">VJTI</option>
                <option value="SPPU">SPPU</option>
                <option value="Mumbai University">Mumbai University</option>
                <option value="NIT Nagpur">NIT Nagpur</option>
                <option value="YCCE">YCCE</option>
                <option value="Symbiosis">Symbiosis</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button
              onClick={handleSubmit}
              className="submit-btn"
            >
              Submit
            </button>
          </div>
        </div>

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