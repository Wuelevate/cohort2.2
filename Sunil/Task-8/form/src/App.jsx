import { useState } from 'react'
import './App.css'
import FirstStep from './componets/firstStep'
import SecondStep from './componets/SecondStep'
import ReviewStep from './componets/ReviewStep'


function App() {
  const [step, setStep] = useState(1);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    gender: "",
    file: null,
  });

  const nextStep = () => {
    setStep(step + 1);
  }

  const preStep = () => {
    setStep(step - 1);
  }

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    console.log(id);
    setFormData(prevStep => ({
      ...prevStep,
      [id]: files ? files[0] : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Submitted:', FormData);
    alert("Form submitted successfully");
  }


  return (
    <>
      <div className='app'>
        {step === 1 && (
          <FirstStep
            FormData={FormData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <SecondStep
            FormData={FormData}
            handleChange={handleChange}
            nextStep={nextStep}
            preStep={preStep}
          />
        )}
        {step === 3 && (
          <ReviewStep
            FormData={FormData}
            preStep={preStep}
            handleSubmit={handleSubmit}
          />
        )}

      </div>

    </>
  )
}

export default App
