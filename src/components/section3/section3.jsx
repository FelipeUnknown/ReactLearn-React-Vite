import style from "../../components/section3/section3.module.css";
import imagemSection3 from "../../assets/img/img-section3.png";
import imagem1 from "../../assets/img/section3 img1.png"
import imagem2 from "../../assets/img/section3 img2.png"
import imagem3 from "../../assets/img/section3 img3.png"

const Section3 = () => {
  return (
    <section className={style.section3}>
      <div className={style.section3Wrapper}>
        <div className={style.imagemS3}>
          <img src={imagemSection3} alt="" />
        </div>
        <div className={style.TextS3}>
          <h2>Uma comunidade de milhões</h2>
          <p>
            Você não está sozinho. Dois milhões de desenvolvedores de todo o
            mundo visitam a documentação do React todos os meses. React é algo
            com o qual as pessoas e as equipes podem concordar, venham fazer
            parte da nossa comunidade. Comunidade
          </p>
          <div className={style.buttonPaiS3}>
            <button className={style.buttonC}>Comunidade</button>
          </div>
        </div>
      </div>
      <div className={style.imagensGrid}>
        <img src={imagem1} alt="" />
        <img src={imagem2} alt="" />
        <img src={imagem3} alt="" />
      </div>
    </section>
  );
};

export default Section3;
