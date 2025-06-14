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
  alert(`Form submitted!\nLevel: ${formData.educationLevel}\nStream: ${formData.courseName}\nSpecialization: ${formData.specialization}\nStudent: ${formData.studentName}\nCity: ${formData.city}`);
};


  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>VidyarthiMitra Non-Cet Collegey</h1>
      </div>

      <div className="container">

      
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
   
        {/* Course Selection */}
        <div className="course-selection">
          <label className="label">
            Select Stream { /*Admission Process*/}:
          </label>
          <select 
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            className="select-dropdown course-select"
          >
            <option value="">Select Stream</option>
            <option value="Sports Management">Bachelors in Sports Management</option>
            <option value="Fine Arts">Bachelors in Fine Arts</option>
            <option value="Performing Arts">Bachelors in Performing Arts</option>
            <option value="Management">Bachelors in Management Studies</option>
            <option value="Science">Bachelors in Science</option>
            <option value="Commerce">Bachelors in Commerce</option>
            <option value="Arts">Bachelors in Arts</option>
            <option value="Vocational">Bachelors in Vocational</option>
            <option value="Accounting">Bachelors in International Accounting</option>
          </select>
        </div>

     {/* Specialization Dropdown */}
<div className="specialization-group">
  <label className="label">Select Specialization:</label>
  <select
    name="specialization"
    value={formData.specialization || ''}
    onChange={handleInputChange}
    className="select-dropdown"
  >
    <option value="">Select Specialization</option>
    <option value="IT">Information Technology</option>
    <option value="Mechanical">Mechanical Engineering</option>
    <option value="Civil">Civil Engineering</option>
    <option value="Finance">Finance</option>
    <option value="Marketing">Marketing</option>
    <option value="Physics">Physics</option>
    <option value="Psychology">Psychology</option>
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

          {/* City Selection */}
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
</div> {/* ✅ this closes form-row correctly */}

            
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