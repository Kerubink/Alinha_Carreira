import { useEffect } from "react";
import styles from "./parallax.module.css";

export const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      const layers = document.querySelectorAll(`.${styles.parallaxLayer}`);
      layers.forEach((layer, index) => {
        const depth = (index + 1) * -0.5; // Controla a velocidade de cada camada
        const movement = scrollPosition * depth;
        layer.style.transform = `translateY(${movement}px)`;
      });

      // Sincronizar o conteúdo com a camada 7
      const content = document.querySelector(`.${styles.content}`);
      const layer7Movement = scrollPosition * -3.5; // Velocidade da camada 7
      content.style.transform = `translateY(${layer7Movement}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        

      <div className={styles.parallaxContainer}>
        <div className={`${styles.parallaxLayer} ${styles.layer1}`}></div>
        <div className={`${styles.parallaxLayer} ${styles.layer2}`}></div>
        <div className={`${styles.parallaxLayer} ${styles.layer3}`}></div>
        <div className={`${styles.parallaxLayer} ${styles.layer4}`}></div>
        <div className={`${styles.parallaxLayer} ${styles.layer5}`}></div>
        <div className={`${styles.parallaxLayer} ${styles.layer6}`}></div>
        <div className={`${styles.parallaxLayer} ${styles.layer7}`}></div>
      </div>

      {/* Conteúdo logo abaixo do parallax */}
      <div className={styles.content}>
        <h1>Welcome to the Parallax Experience</h1>
        <p>This content rises with the last layer for a smooth transition.</p>
      </div>
    </>
  );
};
