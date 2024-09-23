import React from 'react';
import styles from './tools.module.css'; // Importando o CSS

export const Tools = () => {
  return (
    <div className={styles.tools}>
      <div className={styles.circle}>
        <span className={`${styles.red} ${styles.box}`}></span>
      </div>
      <div className={styles.circle}>
        <span className={`${styles.yellow} ${styles.box}`}></span>
      </div>
      <div className={styles.circle}>
        <span className={`${styles.green} ${styles.box}`}></span>
      </div>
    </div>
  );
};

