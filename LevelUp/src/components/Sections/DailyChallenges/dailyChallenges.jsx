import React, { useEffect, useState } from "react";
import styles from "./dailyChallenges.module.css";
import iconeArquivo from "../../../assets/icons/arquivoIcon.png";

export const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

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

  const handleChallengeClick = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleCloseInfo = () => {
    setSelectedChallenge(null);
  };

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
                <div
                  key={challenge.id}
                  className={styles.challenge}
                  onClick={() => handleChallengeClick(challenge)}
                >
                  <img className={styles.icone} src={iconeArquivo} alt="icone" />
                  <p>{challenge.title}</p>
                </div>
              ))
            ) : (
              <p>Carregando desafios...</p>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.challengesInfo}
        style={{ zIndex: selectedChallenge ? 2 : -1 }}
      >
        <div className={styles.challengesInfoHeader}>
          <h4>Informações do desafio</h4>
          {selectedChallenge && (
            <button onClick={handleCloseInfo}>Fechar</button>
          )}
        </div>
        {selectedChallenge && (
          <div className={styles.challengesInfoBody}>
            <p>Título: {selectedChallenge.title}</p>
            <p>Descrição: {selectedChallenge.description}</p>
            <p>Dificuldade: {selectedChallenge.difficulty}</p>
            <p>Pontuação: {selectedChallenge.score}</p>
          </div>
        )}
      </div>
    </section>
  );
};
