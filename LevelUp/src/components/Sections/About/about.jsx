import stytes from "./about.module.css";
import lua from "../../../assets/lua.svg";
import lua2 from "../../../assets/lua2.png"
 
export const About = () => {
  return (
    <section className={stytes.about}>
      <div className={stytes.aboutContent}>
        <h1>Desafie-se, evolua e alcance novos níveis com o LevelUp.</h1>
      </div>
    </section>
  );
};
