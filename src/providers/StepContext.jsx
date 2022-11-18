import React, { useState } from "react";
import Report from '../components/Report';

export const multiStepContext = React.createContext();

function StepContext() {
    const [currentStep, setStep] = useState(0);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    
    return(
        <React.Fragment>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData}}>
               <Report /> 
            </multiStepContext.Provider>
        </React.Fragment>
    );
}
export default StepContext;