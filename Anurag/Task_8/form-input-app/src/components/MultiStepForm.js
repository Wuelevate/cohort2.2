import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "../index.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
    termsAccepted: false,
  });

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }
    if (step === 2 && (!formData.password || !formData.age)) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);
  const updateFormData = (newData) => setFormData({ ...formData, ...newData });

  return (
    <div className="container">
      <div className="form-card">
        {step === 1 && <Step1 nextStep={nextStep} updateFormData={updateFormData} formData={formData} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} formData={formData} />}
        {step === 3 && <Step3 prevStep={prevStep} formData={formData} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
