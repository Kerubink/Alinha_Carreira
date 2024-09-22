import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.homeTextContent}>
          <div className={styles.homeTextHeader}>
            <div className={styles.homeIcon}>
              <span class="material-symbols-outlined">arrow_back_ios_new</span>
            </div>
            <div className={styles.homeIcon}>
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <div className={styles.homeTextUrl}>
              <h4>LevelUp</h4>
            </div>
            <div className={styles.homeIcon}>
              <span class="material-symbols-outlined">refresh</span>
            </div>
          </div>
          <div className={styles.homeTextBody}>
            <h1>level<span>Up</span></h1>
            <h3>
              Desafie-se, evolua e conquiste seus objetivos de forma divertida!
            </h3>

            <div className={styles.bodyCard}>
              <div className={styles.bodyCardHeader}>
                <h4>notificação</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
