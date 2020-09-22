import React from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.viewport}>
      <div className={styles.container}>
      {[{
        name: '4 sessions per month',
        description: 'Break patterns, build new skills & overcome challenges.',
        pricePerMonth: '440',
        pricePerSession: '110',
        discount: '9',
      },{
        name: '3 sessions per month',
        description: 'Strenghten skills, practise new habits & increase confidence',
        pricePerMonth: '345',
        pricePerSession: '115',
        discount: '4',
      },{
        name: '2 sessions per month',
        description: 'Maintain a strong sense of self & be prepared for life’s challenges.',
        pricePerMonth: '240',
        pricePerSession: '1120',
      }].map(({
        name,
        description,
        pricePerMonth,
        pricePerSession,
        discount,
      }) => (
          <div className={styles.option}>
            <h4>{name}</h4>
            <p>{description}</p>
            <h2>£{pricePerMonth} / month</h2>
            <h6>£{pricePerSession} / session</h6>
          </div>
      ))}
      </div>
    </div>
  );
}

export default App;
