import React, { useEffect, useState, useRef } from "react";
import styles from "./dailyChallenges.module.css";
import iconeArquivo from "../../../assets/icons/arquivoIcon.png";

export const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const ref = useRef(null);
  const initialMousePosition = useRef({ x: 0, y: 0 });

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
    setPosition({ x: 0, y: 0 });
  };

  const handleCloseInfo = () => {
    setSelectedChallenge(null);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;

    const rect = ref.current.getBoundingClientRect();
    initialMousePosition.current = { x: e.clientX, y: e.clientY };

    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const dx = e.clientX - initialMousePosition.current.x;
        const dy = e.clientY - initialMousePosition.current.y;
        setPosition((prevPosition) => ({
          x: prevPosition.x + dx,
          y: prevPosition.y + dy,
        }));
        initialMousePosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    isDragging.current = true;

    const touch = e.touches[0];
    initialMousePosition.current = { x: touch.clientX, y: touch.clientY };

    const handleTouchMove = (e) => {
      if (isDragging.current) {
        const touch = e.touches[0];
        const dx = touch.clientX - initialMousePosition.current.x;
        const dy = touch.clientY - initialMousePosition.current.y;
        setPosition((prevPosition) => ({
          x: prevPosition.x + dx,
          y: prevPosition.y + dy,
        }));
        initialMousePosition.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
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
        <div
          className={`${styles.challengesInfo} ${
            selectedChallenge ? styles.visible : ""
          }`}
          style={{
            zIndex: selectedChallenge ? 2 : -1,
            transform: `translate(${position.x}px, ${position.y}px)`,
            position: "absolute",
            pointerEvents: selectedChallenge ? "auto" : "none",
          }}
          ref={ref}
        >
          <div
            className={styles.challengesInfoHeader}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <h4>Informações do desafio</h4>
            <div className={styles.tools}>
              <div onClick={handleCloseInfo} className={styles.circle}>
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
          {selectedChallenge && (
            <div className={styles.challengesInfoBody}>
              <p>Título: {selectedChallenge.title}</p>
              <p>Descrição: {selectedChallenge.description}</p>
              <p>Dificuldade: {selectedChallenge.difficulty}</p>
              <p>Pontuação: {selectedChallenge.score}</p>
            </div>
          )}
          <button>Mostrar solução</button>
        </div>
      </div>
    </section>
  );
};
