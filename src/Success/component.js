import React from 'react';

import styles from './styles.module.css';

export const Component = ({ email }) => (
  <div className={styles.container}>
    <p>We sent a receipt and confirmation to {email}</p>
    <p>
      You can book sessions any time you like by clicking the button in that
      email.
    </p>
    <p>See you soon.</p>
  </div>
);

Component.displayName = 'Success';
