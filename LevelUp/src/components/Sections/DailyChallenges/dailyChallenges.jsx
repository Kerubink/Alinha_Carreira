import React, { useEffect, useState } from "react";
import styles from "./dailyChallenges.module.css";
import iconeArquivo from "../../../assets/icons/arquivoIcon.png";
import { ChallengesInfo } from "../../Contents/ChallengesInfo/challengesInfo.jsx";
import { ChallengesSolution } from "../../Contents/ChallengesSolution/challengesSolution.jsx";
import { Tools } from "../../Tool/tools.jsx";

export const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("https://gameficacao-api-2.onrender.com/challenges");
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
    setShowSolution(false);
  };

  const handleCloseInfo = () => {
    setSelectedChallenge(null);
    setShowSolution(false);
  };

  const handleShowSolution = () => {
    setShowSolution((prev) => !prev); 
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
                  <img
                    className={styles.icone}
                    src={iconeArquivo}
                    alt="icone"
                  />
                  <p>{challenge.title}</p>
                </div>
              ))
            ) : (
              <p>Carregando desafios...</p>
            )}
          </div>
        </div>

        {selectedChallenge && (
          <ChallengesInfo
            selectedChallenge={selectedChallenge}
            handleCloseInfo={handleCloseInfo}
            handleShowSolution={handleShowSolution} 
          />
        )}

        {selectedChallenge && showSolution && (
          <ChallengesSolution
            selectedChallenge={selectedChallenge}
            handleCloseSolution={handleCloseInfo} 
          />
        )}
      </div>
    </section>
  );
};
