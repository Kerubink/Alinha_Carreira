import React, { useState, useEffect } from "react";
import styles from "./challengesTab.module.css";
import { Tools } from "../../Tool/tools";

const Tab = ({ label, isActive, onClick }) => (
  <button
    className={`${styles.tabButton} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const TabPanel = ({ children, isActive }) => (
  <div className={`${styles.tabPanel} ${isActive ? styles.active : ""}`}>
    {children}
  </div>
);

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [challengeData, setChallengeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallengeData = async () => {
      try {
        const response = await fetch("http://localhost:3000/realChallenges");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();
        
        // Verifica se já existe um desafio escolhido no localStorage
        const storedId = localStorage.getItem("selectedChallengeId");

        if (storedId) {
          // Se já existe um ID armazenado, busca o desafio correspondente
          const selectedChallenge = data.find(challenge => challenge.id === parseInt(storedId));
          setChallengeData(selectedChallenge);
        } else {
          // Se não existe, escolhe um desafio aleatório
          const randomChallenge = data[Math.floor(Math.random() * data.length)];
          setChallengeData(randomChallenge);
          localStorage.setItem("selectedChallengeId", randomChallenge.id); // Armazena o ID no localStorage
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeData();
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsContainer}>
        <Tools />
        <Tab
          label="Início"
          isActive={activeTab === 0}
          onClick={() => handleTabChange(0)}
        />
        <Tab
          label="Desafio"
          isActive={activeTab === 1}
          onClick={() => handleTabChange(1)}
        />
        <Tab
          label="Solução"
          isActive={activeTab === 2}
          onClick={() => handleTabChange(2)}
        />
      </div>

      <TabPanel isActive={activeTab === 0}>
        <h2>Início</h2>
        <p>Explica como o desafio semanal funciona</p>
      </TabPanel>
      <TabPanel isActive={activeTab === 1}>
        <h2>Desafio</h2>
        <p>{challengeData?.description || "Descrição não disponível."}</p>
      </TabPanel>
      <TabPanel isActive={activeTab === 2}>
        <h2>Dica</h2>
        <p>{challengeData?.solution || "Solução não disponível."}</p>
      </TabPanel>
    </div>
  );
};
