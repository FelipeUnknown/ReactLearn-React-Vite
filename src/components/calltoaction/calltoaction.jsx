import style from "../calltoaction/calltoaction.module.css";
import ReactImg from "../../assets/img/imagem girando.png";

const CalltoAction = () => {
  return (
    <section className={style.CallTo}>
      <div className={style.ctaWrapper}>
        <div className={style.reactImg}>
          <img src={ReactImg} alt="Símbolo React" />
        </div>
        <h2 className={style.welcomeCta}>Bem-vindo à comunidade React</h2>
        <div className={style.btnApreendaOut}>
          <a className={style.btnApreendaIn} href="#">
            Apreenda
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
