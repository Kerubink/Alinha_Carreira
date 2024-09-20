import stytes from "./about.module.css";

export const About = () => {
  return (
    <section className={stytes.about}>
        <div className={stytes.aboutContent}>
          <h2>Conheça o LevelUp</h2>
          <p>
            LevelUp é um jogo de estratégia online onde os jogadores se enfrentam
            contra outros jogadores para conquistar e expandir o seu território.
            Utilize habilidades, itens, e recursos para vencer seus adversários e
            expandir seu jogo.
          </p>
        </div>
    </section>
  );
};
