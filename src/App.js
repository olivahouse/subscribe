import React, { useState } from 'react';

import { Options } from './Options';
import { Acuity } from './Acuity';
import './App.css';
import styles from './styles.module.css';

const App = () => {
  const [step, setStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    setStep(1);
  };

  return (
    <div className={styles.viewport}>
      <div className={styles.container}>
        <h3 className={styles.heading}>
          {
            [
              'First, choose a subscription plan:',
              'Next, confirm your details and pay:',
            ][step]
          }
        </h3>
        <div className={styles.content}>
          {step === 0 && <Options onSelect={handleSelectPlan} />}
          {step === 1 && <Acuity planId={selectedPlan} />}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
