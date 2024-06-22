// src/JobApplicationForm.js
import React from 'react';
import useValidation from './hooks/useValidation';
import validate from './utils/validate';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioUrl: '',
    managementExperience: '',
    skills: [],
    preferredInterviewTime: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useValidation(initialState, validate);

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className={`form-group ${errors.fullName ? 'error' : ''}`}>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
        {errors.fullName && <p className="error-message">{errors.fullName}</p>}
      </div>
      <div className={`form-group ${errors.email ? 'error' : ''}`}>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className={`form-group ${errors.phoneNumber ? 'error' : ''}`}>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
      </div>
      <div className="form-group">
        <label>Applying for Position:</label>
        <select name="position" value={values.position} onChange={handleChange}>
          <option value="">Select Position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      {(values.position === 'Developer' || values.position === 'Designer') && (
        <div className={`form-group ${errors.relevantExperience ? 'error' : ''}`}>
          <label>Relevant Experience (years):</label>
          <input type="number" name="relevantExperience" value={values.relevantExperience} onChange={handleChange} />
          {errors.relevantExperience && <p className="error-message">{errors.relevantExperience}</p>}
        </div>
      )}
      {values.position === 'Designer' && (
        <div className={`form-group ${errors.portfolioUrl ? 'error' : ''}`}>
          <label>Portfolio URL:</label>
          <input type="text" name="portfolioUrl" value={values.portfolioUrl} onChange={handleChange} />
          {errors.portfolioUrl && <p className="error-message">{errors.portfolioUrl}</p>}
        </div>
      )}
      {values.position === 'Manager' && (
        <div className={`form-group ${errors.managementExperience ? 'error' : ''}`}>
          <label>Management Experience:</label>
          <input type="text" name="managementExperience" value={values.managementExperience} onChange={handleChange} />
          {errors.managementExperience && <p className="error-message">{errors.managementExperience}</p>}
        </div>
      )}
      <div className={`form-group ${errors.skills ? 'error' : ''}`}>
        <label>Additional Skills:</label>
        <label>
          <input type="checkbox" name="skills" value="JavaScript" onChange={handleChange} /> JavaScript
        </label>
        <label>
          <input type="checkbox" name="skills" value="CSS" onChange={handleChange} /> CSS
        </label>
        <label>
          <input type="checkbox" name="skills" value="Python" onChange={handleChange} /> Python
        </label>
        {errors.skills && <p className="error-message">{errors.skills}</p>}
      </div>
      <div className={`form-group ${errors.preferredInterviewTime ? 'error' : ''}`}>
        <label>Preferred Interview Time:</label>
        <input type="datetime-local" name="preferredInterviewTime" value={values.preferredInterviewTime} onChange={handleChange} />
        {errors.preferredInterviewTime && <p className="error-message">{errors.preferredInterviewTime}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
