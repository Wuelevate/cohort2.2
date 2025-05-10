import React from "react";

const Step2 = ({ nextStep, prevStep, updateFormData, formData }) => {
  const handleChange = (e) => updateFormData({ [e.target.name]: e.target.value });

  return (
    <div>
      <h2>Step 2: Additional Info</h2>
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />

      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>

      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
