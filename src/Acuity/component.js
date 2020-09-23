import React from 'react';
// import { parse } from 'query-string';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

// const { provider } = parse(window.location.search);

export const Component = ({ planId }) => (
  <div className={styles.container}>
    {planId && <iframe src={getSrc(planId)} />}
  </div>
);

Component.displayName = 'Acuity';
