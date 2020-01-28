import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography,
} from '@material-ui/core';

import { getStepContent } from './utils';

import { STEPS_NAMES } from './config';

import useStyles from './styles';

const Steps = () => {
  const classes = useStyles();

  const [ID, setID] = useState(0);
  const [UUID, setUUID] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {STEPS_NAMES.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === STEPS_NAMES.length ? (
          <div>
            <Typography className={classes.instructions}>
              Finish
            </Typography>
            <Button onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, ID, setID, UUID, setUUID, handleBack, handleNext, handleReset)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Steps;
