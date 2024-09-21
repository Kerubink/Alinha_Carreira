import styles from "./navbar.module.css";
import logo from "../../assets/icon.png"

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="logo"
        />
        <h1>
          Level<span>Up</span>
        </h1>
      </div>

      <nav>
        <ul className={styles.links}>
          <li>
            <a href="/">
              <button className={styles.button}>
                <div className={styles.icone}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3356/3356068.png"
                    alt="icone"
                  />
                </div>
                <span className={styles.lable}>Sobre</span>
              </button>
            </a>
          </li>
          <li>
            <a href="#dailyChallenges">
              <button className={styles.button}>
                <div className={styles.icone}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1197/1197495.png"
                    alt="icone"
                  />
                </div>
                <span className={styles.lable}>Desafios</span>
              </button>
            </a>
          </li>
          <li>
            <a href="/contact">
              <button className={styles.button}>
                <div className={styles.icone}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/14820/14820458.png"
                    alt="icone"
                  />
                </div>
                <span className={styles.lable}>Missão</span>
              </button>
            </a>
          </li>
          <li>
            <a href="/blog">
              <button className={styles.button}>
                <div className={styles.icone}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1628/1628629.png"
                    alt="icone"
                  />
                </div>
                <span className={styles.lable}>Comentarios</span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <a href="/github">
        <button className={styles.gitButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
            alt="GitHub"
          />
          <span>Ver no Github</span>
        </button>
      </a>
    </header>
  );
};
