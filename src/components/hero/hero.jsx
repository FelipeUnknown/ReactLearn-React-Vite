import style from "../hero/hero.module.css";
import imgg from "../../assets/img/imagem girando.png";

const Hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.HeroWrapper}>
        <div className={style.imggg}>
          <img src={imgg} alt="imagem doa logo do react girando em 360" />
        </div>
        <div className={style.HeroTxt}>
          <h1>
            <span>Crie diversas interfaces </span> rápidas e incríveis usando
            componentes
          </h1>
          <p>
            O React permite construir interfaces de usuário a partir de peças
            individuais chamadas componentes. Apreenda Documentação
          </p>
        </div>
        <div className={style.buttonPai}>
          <button className={style.buttonA}>Apreenda React</button>
          <button className={style.buttonD}>Documentação</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
