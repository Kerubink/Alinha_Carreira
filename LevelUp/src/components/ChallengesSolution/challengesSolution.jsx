import React from "react";
import styles from "./challengesSolution.module.css";

export const ChallengesSolution = ({ selectedChallenge, handleCloseSolution }) => {
  if (!selectedChallenge) return null; 
  return (
    <div className={styles.challengeSolution}>
      <div className={styles.solutionHeader}>
        <h3>Solução do desafio</h3>
        <div className={styles.tools}>
          <div onClick={handleCloseSolution} className={styles.circle}>
            <span className={`${styles.red} ${styles.box}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.yellow} ${styles.box}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.green} ${styles.box}`}></span>
          </div>
        </div>
      </div>
      <div className={styles.solutionBody}>
        <pre>
          <code>{selectedChallenge.solution || "Solução não disponível"}</code>
        </pre>
      </div>
    </div>
  );
};
