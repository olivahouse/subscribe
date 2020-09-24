import React, { useEffect } from 'react';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

export const Component = ({ onSubmit, planId }) => {
  const handleMessage = (event) => {
    if (!event || !event.data || !event.origin.includes('acuity')) return;

    if (!event.data.includes('acuity-appointment-scheduled')) return;

    const [, email] = event.data.split(' ');

    onSubmit(email);
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={styles.container}>
      {planId && <iframe src={getSrc(planId)} />}
    </div>
  );
};

Component.displayName = 'Acuity';
