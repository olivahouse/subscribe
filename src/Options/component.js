import React from 'react';
import { parse } from 'query-string';

import styles from './styles.module.css';

const { plan } = parse(window.location.search);

export const Component = ({ onSelect }) => (
  <div className={styles.container}>
    {[
      {
        id: 4,
        name: '4 sessions per month',
        description: 'Break patterns, build new skills & overcome challenges.',
        pricePerMonth: '440',
        pricePerSession: '110',
        discount: '9',
      },
      {
        id: 3,
        name: '3 sessions per month',
        description:
          'Strenghten skills, practise new habits & increase confidence',
        pricePerMonth: '345',
        pricePerSession: '115',
        discount: '4',
      },
      {
        id: 2,
        name: '2 sessions per month',
        description:
          'Maintain a strong sense of self & be prepared for life’s challenges.',
        pricePerMonth: '240',
        pricePerSession: '120',
      },
    ].map(
      ({ id, name, description, pricePerMonth, pricePerSession, discount }) => {
        const isRecommended = Number(plan) === id;

        return (
          <div
            className={`${styles.option} ${
              isRecommended && styles.isRecommended
            }`}
            key={id}
          >
            {isRecommended && (
              <h5 className={styles.tag}>
                Ginnette recommends this plan for you
              </h5>
            )}
            <h4>{name}</h4>
            <p>{description}</p>
            <h2>£{pricePerMonth} / month</h2>
            <h6>
              £{pricePerSession} / session{' '}
              {discount && <span>+{discount}% discount</span>}
            </h6>
            <button onClick={() => onSelect(id)}>Select</button>
          </div>
        );
      }
    )}
  </div>
);

Component.displayName = 'Options';
