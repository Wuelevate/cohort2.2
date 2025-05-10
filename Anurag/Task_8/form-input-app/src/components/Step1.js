import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step1 = ({ nextStep, updateFormData, formData }) => {
  const formik = useFormik({
    initialValues: { name: formData.name, email: formData.email, password: formData.password },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "At least 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      updateFormData(values);
      nextStep();
    },
  });
console.log(formik.getFieldProps("password"))
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Step 1: Basic Info</h2>
    
      <input type="text" name="name" placeholder="Name" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}

      <input type="email" name="email" placeholder="Email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}

      <input type="password" name="password" placeholder="Password" {...formik.getFieldProps("password")} />
      {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
