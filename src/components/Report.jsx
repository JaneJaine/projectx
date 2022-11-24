import  React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import FormLocation from './FromLocation';
import PersonalForm from './FormPersonal';
import DetailForm from './FormDetails';
import Review from './FormReview';

import { Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography, StepContent } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

import Background from '../media/wallpaperFrankfurt.jpg';

const steps = ['Ortsangabe', 'Details', 'Person', 'Bestätigung'];

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundImage: "url(" + Background + ")",
  minHeight: "80vh",
}
));

export default function Report() {
  const history = useHistory();
  //handle steps and final submit of data
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FormLocation data={data} setData={setData} />;
      case 1:
        return <DetailForm data={data} setData={setData} />;
      case 2:
        return <PersonalForm data={data} setData={setData} />
      case 3:
        return <Review data={data} submitData={submitData} setSubmitData={setSubmitData} />;
      default:
        throw new Error('Unknown step');
    }
  }
  const [data, setData] = useState({
    coordinates: '',
    street: '',
    strNr: '',
    zip: '',
    typeS: 'Defekt',
    description: '',
    email: '',
    firstname: '',
    lastname: '',
  });
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //handle final submit
  const handleSubmit = e => {
    e.preventDefault();
    //Proccess Form Backend
    sendData();
  }
  const sendData = () => {
    fetch('http://localhost:8080/api/v1/damageReport/addDamageReport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: submitData.location,
        type: submitData.type,
        description: submitData.description,
        image: '',
        /* userMail: '',
        userName: '', */
        status: 'in work',
      })
    }).then(res => {
      return res
    })
      .then(data => console.log(data))
      .catch(error => console.log('ERROR' + error))
      if (true){
        submitNavToHome()
      }
  }
  const submitNavToHome = () => {
    //to-do success page
    history.push("/")
  }
  const [submitData, setSubmitData] = useState({
    location: '',
    type: '',
    description: '',
    userMail: '',
    userName: '',
    status: 'in work',
  });

  //handle device width settings -> mobile or desktop view for stepper
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <CustomBox>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4, opacity: 0.9 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Mangelmelder
          </Typography>
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
        </Paper>
      </Container>
    </CustomBox>

  );
}