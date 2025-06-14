import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    courseName: '',
    studentName: '',
    city: '',
    searchQuery: '',
    educationLevel: '',
    specialization: ''
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
    alert(
      `Form submitted!\nLevel: ${formData.educationLevel}\nStream: ${formData.courseName}\nSpecialization: ${formData.specialization}\nStudent: ${formData.studentName}\nCity: ${formData.city}`
    );
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>VidyarthiMitra Non-Cet Collegey</h1>
      </div>

      <div className="container">
        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="text-input"
            name="searchQuery"
            value={formData.searchQuery || ''}
            onChange={handleInputChange}
          />
        </div>

        {/* Education Level */}
        <div className="education-level-group">
          <label className="label">Select Education Level:</label>
          <div className="education-level-options">
            <label>
              <input
                type="radio"
                name="educationLevel"
                value="Undergraduate"
                checked={formData.educationLevel === 'Undergraduate'}
                onChange={handleInputChange}
              />
              Undergraduate
            </label>
            <label>
              <input
                type="radio"
                name="educationLevel"
                value="Postgraduate"
                checked={formData.educationLevel === 'Postgraduate'}
                onChange={handleInputChange}
              />
              Postgraduate
            </label>
          </div>
        </div>

        {/* Course (Stream) Selection */}
        <div className="course-selection">
          <label className="label">Select Stream:</label>
          <select
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
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
        </div>

        {/* Specialization Dropdown (Placeholder only) */}
        <div className="specialization-group">
          <label className="label">Select Specialization:</label>
          <select
            name="specialization"
            value={formData.specialization || ''}
            onChange={handleInputChange}
            className="select-dropdown"
          >
            <option value="">Select Specialization</option>
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
              value={formData.studentName}
              onChange={handleInputChange}
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
                value={formData.city}
                onChange={handleInputChange}
                className="select-dropdown"
              >
                <option value="">All</option>
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
