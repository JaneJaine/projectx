import React, { useState, useEffect } from 'react';

import FormLocation from './FormLocation';
import PersonalForm from './FormPersonal';
import DetailForm from './FormDetails';
import Review from './FormReview';

import { Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography, StepContent } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

import Background from '../media/wallpaperFrankfurt.jpg';
import Confirmation from '../pages/Confirmation';

//sets the steps for the progress bar
const steps = ['Ortsangabe', 'Details', 'Person', 'Bestätigung'];
const zipFrank = ["60306", "60308", "60310", "60311", "60312", "60313", "60314", "60316", "60318", "60320", "60322", "60323", "60325", "60326", "60327", "60329", "60385", "60386", "60388", "60389", "60431", "60433", "60435", "60437", "60438", "60439", "60486", "60487", "60488", "60489", "60528", "60529", "60549", "60594", "60596", "60598", "60599", "65929", "65931", "65933", "65934", "65936", "61352"]

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}
));

export default function Report() {
  //this part handles the steps and data sharing between them
  //handle steps 
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FormLocation data={data} setData={setData} validationError={validationError} checkInput={checkInput} />;
      case 1:
        return <DetailForm data={data} setData={setData} validationError={validationError} checkInput={checkInput} files={files} setFiles={setFiles} />;
      case 2:
        return <PersonalForm data={data} setData={setData} validationError={validationError} checkInput={checkInput} />
      case 3:
        return <Review data={data} submitData={submitData} setSubmitData={setSubmitData} />;
      default:
        throw new Error('Unknown step');
    }
  }
  //sets the active step for navigation through components
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    /* var hasError = false;
    for(const [key, value] of Object.entries(validationError)){
      if(value == true || value == null){
        hasError = true;
      }
    }
    if(hasError){
      alert("Bitte überprüfen Sie Ihre Eingabe und füllen Sie alle mit Stern markierten Felder aus");
      hasError=false;
    }else{ */
    setActiveStep(activeStep + 1);
    //hasError=false;
    //}
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //handles the data sharing between the steps
  const [data, setData] = useState({
    coordinates: '',
    street: '',
    strNr: '',
    zip: '',
    type: 'Defekt',
    description: '',
    email: '',
    firstname: '',
    lastname: '',
    image: '',
  });
  //this part handles the submit of the data to the backend server
  //handle final submit
  const handleSubmit = e => {
    e.preventDefault();
    //Proccess Form Backend
    sendData();
    setActiveStep(activeStep + 1);
  }
  //sets the success variable to indicate success of post request to backend
  const [success, setSuccess] = useState(null);
  //handles the sending of post request to backend and response validation
  const requestData = new FormData();
  const [files, setFiles] = useState([]);
  const sendData = () => {
    console.log("Files send" + files)
    files.forEach((file, i) => {
      requestData.append("file", file);
    });
    const jsonData = {
      location: submitData.location,
      type: submitData.type,
      description: submitData.description,
      usermail: submitData.userMail,
      username: submitData.userName,
    };

    requestData.append("damagereport", new Blob([JSON.stringify(jsonData)], {
      type: 'application/json'
    }));
    console.log(requestData.get("file"))

    fetch('http://localhost:8080/api/v1/damageReport/addDamageReport', {
      method: 'POST',
      body: requestData,
    }).then(res => {
      if (res.status === 200) {
        setSuccess(true);
        return res;
      }
      else {
        setSuccess(false);
        return res;
      }
    })
      .then(data => console.log(data))
      .catch(error => console.log('ERROR' + error))
  }
  //handles the data processing to fit for the final post request
  const [submitData, setSubmitData] = useState({
    location: '',
    type: '',
    description: '',
    userMail: '',
    userName: '',
  });
  //this part handles resposive design of the page
  //handle device width settings -> mobile or desktop view for stepper
  const [width, setWidth] = useState(window.innerWidth);
  //handles the resize of window by setting width
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  //event listener to detect window rezising to make design responsive
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  //this part handles validation of user input inside the steps
  const checkInput = (origin, value) => {
    switch (origin) {
      case "description":
        if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
          setValidationError({ ...validationError, descriptionError: true });
        } else { setValidationError({ ...validationError, descriptionError: false }) }
        break;
      case "street":
        if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
          setValidationError({ ...validationError, streetError: true });
        } else { setValidationError({ ...validationError, streetError: false }) }
        break;
      case "strNr":
        if (!(RegExp(".*[0-9].*", "g").test(value))) {
          setValidationError({ ...validationError, strNrError: true });
        } else { setValidationError({ ...validationError, strNrError: false }) }
        break;
      case "zip":
        if ((!zipFrank.includes(value)) || (!value.length === 5)) {
          setValidationError({ ...validationError, zipError: true });
        } else { setValidationError({ ...validationError, zipError: false }) }
        break;
      case "firstName":
        if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
          setValidationError({ ...validationError, firstNameError: true });
        } else { setValidationError({ ...validationError, firstNameError: false }) }
        break;
      case "lastName":
        if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
          setValidationError({ ...validationError, lastNameError: true });
        } else { setValidationError({ ...validationError, lastNameError: false }) }
        break;
      case "mail":
        if (!(RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$", "g").test(value))) {
          setValidationError({ ...validationError, userMailError: true });
        } else { setValidationError({ ...validationError, userMailError: false }) }
        break;
    }
  }
  const [validationError, setValidationError] = useState({
    streetError: null,
    strNrError: null,
    zipError: null,
    descriptionError: null,
    firstNameError: null,
    lastNameError: null,
    userMailError: null,
  });
  return (
    <Box sx={{ backgroundImage: "url(" + Background + ")", minHeight: "80vh" }}>
      <CustomBox>
        <CssBaseline />
        <Container component="main" maxWidth="md" sx={{ opacity: 0.9 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Mangelmelder
            </Typography>
            {(activeStep === steps.length) ? (
              <React.Fragment>
                <Confirmation success={success} data={data} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {width <= 768 ? (
                  <React.Fragment>
                    <Stepper activeStep={activeStep} orientation="vertical" sx={{ pt: 3, pb: 5 }}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                          <StepContent>{getStepContent(activeStep)}</StepContent>
                        </Step>
                      ))}
                    </Stepper>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    {getStepContent(activeStep)}
                  </React.Fragment>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >Absenden</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >Weiter</Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </CustomBox>
    </Box>
  );
}