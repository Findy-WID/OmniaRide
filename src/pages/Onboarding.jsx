import { useState } from 'react'
import Step1 from '../components/onboarding/Step1';
import Step2 from '../components/onboarding/Step2';
import Step3 from '../components/onboarding/Step3';
import Step4 from '../components/onboarding/Step4';
import Step5 from '../components/onboarding/Step5';

function Onboarding() {
    const [stepCounter, setStepCounter] = useState(1)
    const [formData, setFormData] = useState({});

    const nextStep = (data) => {
        setFormData((prev) => ({...prev, ...data}));
        setStepCounter((prev) => prev + 1);
    };

    const prevStep = () => {
        setStepCounter((prev) => prev - 1);
    }
    
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-2xl w-full">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 mb-8 rounded-full overflow-hidden">
                <div 
                    className="bg-blue-600 h-full transition-all duration-500" 
                    style={{ width: `${(stepCounter / 5) * 100}%` }}
                />
            </div>

            <div>
                {stepCounter === 1 && <Step1 onNext={nextStep}/>}
                {stepCounter === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
                {stepCounter === 3 && <Step3 onNext={nextStep} onBack={prevStep} />}
                {stepCounter === 4 && <Step4 onNext={nextStep} onBack={prevStep} />}
                {stepCounter === 5 && <Step5 onBack={prevStep} />}
            </div>
        </div>
    </div>
  )
}

export default Onboarding