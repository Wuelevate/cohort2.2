import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step3 = ({ prevStep, formData }) => {
  const formik = useFormik({
    initialValues: {
      terms: false, // Checkbox default value
    },
    validationSchema: Yup.object({
      terms: Yup.boolean().oneOf([true], "Please accept T&C to proceed"), // Validation rule
    }),
    onSubmit: () => {
      alert("Form submitted successfully!");
      window.location.reload(); // Reset form for next user
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-container">
      <h2>Confirm Details</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>

      {/* ✅ Terms & Conditions Checkbox */}
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="terms"
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        I agree to the Terms & Conditions
      </label>

      {/* ✅ Show error message if checkbox is not checked */}
      {formik.touched.terms && formik.errors.terms ? (
        <p className="error">{formik.errors.terms}</p>
      ) : null}

      <div className="button-group">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Step3;
