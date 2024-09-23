import styles from "./weeklyChallenges.module.css";
import { Tabs } from "../../Contents/WeeklyChallengesTab/challengesTab.jsx";

export const WeeklyChallenges = () => {
  return (
    <section id="weeklyChallenges" className={styles.weeklyChallenges}>
      <h2>Desafio da semana</h2>
      <p>
        Bem-vindo ao Desafio Semanal! Este é um espaço projetado para estimular
        seu aprendizado e prática de programação, oferecendo desafios que
        refletem problemas do mundo real enfrentados por desenvolvedores
        diariamente.
      </p>
      <Tabs />
      <p>
              Prepare-se para aprender, crescer e se divertir enquanto enfrenta
              novos desafios a cada semana!
            </p>
    </section>
  );
};
