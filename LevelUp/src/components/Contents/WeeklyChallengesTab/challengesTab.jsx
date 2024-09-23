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
        const response = await fetch("https://gameficacao-api-2.onrender.com/realChallenges");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();

        const storedId = localStorage.getItem("selectedChallengeId");

        if (storedId) {
          const selectedChallenge = data.find(
            (challenge) => challenge.id === parseInt(storedId)
          );
          setChallengeData(selectedChallenge);
        } else {
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
          label="Ajuda"
          isActive={activeTab === 2}
          onClick={() => handleTabChange(2)}
        />
      </div>

      <TabPanel isActive={activeTab === 0}>
        <h2>Início</h2>
        <div className={styles.terminalContent}>
          <div className={styles.terminalHeader}>
            <Tools />
            <h4>LevelUp@admin: ~</h4>
          </div>

          <div className={styles.terminal_body}>
            <div className={styles.terminal_prompt}>
              <span className={styles.terminal_user}>LevelUp@admin:</span>
              <span className={styles.terminal_location}>~</span>
              <span className={styles.terminal_bling}>$</span>
              <span className={styles.terminal_cursor}></span>
            </div>
            <h3>Como Participar:</h3>
            <ol>
              <li>
                <strong>Escolha do Desafio:</strong> A cada semana, um desafio é
                selecionado aleatoriamente de nossa lista de desafios. Este
                desafio será o foco da sua prática durante toda a semana.
              </li>
              <li>
                <strong>Descrição do Desafio:</strong> Cada desafio vem com uma
                descrição detalhada que contextualiza o problema. Isso inclui um
                cenário prático que pode ocorrer no dia a dia de um programador,
                ajudando você a entender a importância de encontrar soluções
                eficazes.
              </li>
              <li>
                <strong>Resolução do Desafio:</strong> Você terá a semana
                inteira para trabalhar na solução do desafio. A ideia é que você
                explore diferentes abordagens e técnicas, aprimorando suas
                habilidades de codificação.
              </li>
              <li>
                <strong>Dicas e Soluções:</strong> Ao longo da semana, você terá
                acesso a dicas e sugestões que podem ajudá-lo a resolver o
                desafio. Além disso, após o período do desafio, uma solução
                exemplo será disponibilizada para comparação e aprendizado.
              </li>
              <li>
                <strong>Feedback e Interação:</strong> Após completar o desafio,
                você é incentivado a compartilhar sua solução e feedback na
                seção de comentários. Isso promove uma comunidade de aprendizado
                colaborativo, onde todos podem se ajudar e aprender uns com os
                outros.
              </li>
            </ol>
          </div>
        </div>

        <div className={styles.terminalContent2}>
          <div className={styles.terminalHeader}>
            <Tools />
            <h4>LevelUp@admin: ~</h4>
          </div>

          <div className={styles.terminal_body}>
            <div className={styles.terminal_prompt}>
              <span className={styles.terminal_user}>LevelUp@admin:</span>
              <span className={styles.terminal_location}>~</span>
              <span className={styles.terminal_bling}>$</span>
              <span className={styles.terminal_cursor}></span>
            </div>
            <h3>Objetivos do Desafio Semanal:</h3>
            <ul>
              <li>
                <strong>Aprendizado Prático:</strong> Aumentar sua experiência
                prática em programação.
              </li>
              <li>
                <strong>Resolução de Problemas:</strong> Desenvolver habilidades
                de resolução de problemas em cenários reais.
              </li>
              <li>
                <strong>Comunidade:</strong> Construir uma rede de apoio entre
                programadores, promovendo a troca de conhecimento.
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>

      <TabPanel isActive={activeTab === 1}>
        <h2>Desafio</h2>
        <div className={styles.notebook}>
          <h2 className={styles.title}>{`{${challengeData.title}}`}</h2>
          <p>
            <strong>Dificuldade:</strong> {challengeData.difficulty}
          </p>
          <p>
            <strong>Tempo Estimado:</strong> {challengeData.estimatedTime}
          </p>
          <p>
            <strong>Tecnologias:</strong>{" "}
            <span className={styles.efeito}>
              {" "}
              {challengeData.technologies.join(", ")}
            </span>
          </p>
          <p>
            <strong>Tipo:</strong> {challengeData.type}
          </p>
          <p>
            <strong>Descrição:</strong> {challengeData.description}
          </p>
          {challengeData.resources && (
            <div>
              <p>
                <strong>Recursos:</strong>
              </p>
              <pre>{JSON.stringify(challengeData.resources, null, 2)}</pre>
            </div>
          )}
        </div>
      </TabPanel>
      <TabPanel isActive={activeTab === 2}>
        <h2>Dica</h2>
        <div className={styles.challengeHelp}>
          <div className={styles.challengeHelpHeader}>
            <Tools />
            <h4>Dica@admin: ~</h4>
          </div>
          <div className={styles.challengeHelpBody}>
            <div className={styles.terminal_prompt}>
              <span className={styles.terminal_user}>Dica@admin:</span>
              <span className={styles.terminal_location}>~</span>
              <span className={styles.terminal_bling}>$</span>
              <span className={styles.terminal_cursor}></span>
            </div>
            <p>{challengeData.solution || "Solução não disponível."}</p>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};
