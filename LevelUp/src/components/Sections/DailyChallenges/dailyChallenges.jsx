import React, { useEffect, useState } from "react";
import styles from "./dailyChallenges.module.css";

export const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("http://localhost:3000/challenges");
        const data = await response.json(); 
        setChallenges(data); 
      } catch (error) {
        console.error("Erro ao buscar desafios:", error);
      }
    };

    fetchChallenges(); 
  }, []); 
  return (
    <section id="dailyChallenges" className={styles.dailyChallenges}>
      <h2>Daily Challenges</h2>
      <div className={styles.challengesContainer}>
        <div className={styles.challengesContainerHeader}>
          <h3>Lista de tasks</h3>
        </div>
        <div className={styles.challengesContainerBody}>
          <div className={styles.challenges}>
            {challenges.length > 0 ? (
              challenges.map((challenge) => (
                <div key={challenge.id} className={styles.challenge}>
                  <h4>{challenge.title}</h4>
                </div>
              ))
            ) : (
              <p>Carregando desafios...</p> 
            )}
          </div>
        </div>
      </div>
      <div className={styles.challengesInfo}></div>
    </section>
  );
};
