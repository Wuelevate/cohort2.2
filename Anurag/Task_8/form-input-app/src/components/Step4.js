import React from "react";

const Step4 = ({ formData, prevStep }) => {
  return (
    <div>
      <h2>Step 4: Review & Confirm</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Username:</strong> {formData.username}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert("Registration Successful!")}>Submit</button>
    </div>
  );
};

export default Step4;
