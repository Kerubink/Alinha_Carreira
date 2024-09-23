import React, { useState, useRef } from "react";
import styles from "./challengesInfo.module.css";

export const ChallengesInfo = ({ selectedChallenge, handleCloseInfo, handleShowSolution }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const ref = useRef(null);
  const initialMousePosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
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

  return (
    <div
      className={`${styles.challengesInfo} ${selectedChallenge ? styles.visible : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      ref={ref}
    >
      <div
        className={styles.challengesInfoHeader}
        onMouseDown={handleMouseDown}
      >
        <h4>Informações do desafio</h4>
        <button onClick={handleCloseInfo}>Fechar</button>
      </div>
      <div className={styles.challengesInfoBody}>
        <p>Título: {selectedChallenge.title}</p>
        <p>Descrição: {selectedChallenge.description}</p>
        <p>Dificuldade: {selectedChallenge.difficulty}</p>
        <p>Pontuação: {selectedChallenge.score}</p>
      </div>
      <button onClick={handleShowSolution}>
        Mostrar solução
      </button>
    </div>
  );
};
