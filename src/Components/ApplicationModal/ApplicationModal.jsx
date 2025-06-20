import React, { useState } from 'react';
import './Application.css';

const ApplicationModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
    alert("Application submitted successfully!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>

        {step === 1 && (
          <div>
            <h3>Step 1: Personal Information</h3>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} />
            <div className="modal-buttons">
              <button onClick={() => setStep(2)}>Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Step 2: Skills</h3>
            <textarea name="skills" placeholder="List your skills..." onChange={handleChange}></textarea>
            <div className="modal-buttons">
              <button onClick={() => setStep(1)}>Back</button>
              <button onClick={() => setStep(3)}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Step 3: Upload CV</h3>
            <input type="file" name="cv" onChange={handleChange} />
            <div className="modal-buttons">
              <button onClick={() => setStep(2)}>Back</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
