import style from "../../components/feature/feature.module.css";
import SuporteImg from "../../assets/img/suporte.svg";
import DesenpenhoImg from "../../assets/img/desempenho.svg";
import OnbordingImg from "../../assets/img/onbording.svg";
import Product from "../../assets/img/product.svg"
import Quality from "../../assets/img/quality.svg"
import Resulty from "../../assets/img/resulty.svg"
const Feature = () => {
  return (
    <section className={style.Feature}>
      <div className={style.featureWrapper}>
        <div className={style.featureWrapperContent}>
          <div className={style.featureContent}>
            <div className={style.featureCardDiv}>
              {/* imagem V */}
              <div className={style.featureCards}>
                <a>
                  <img src={SuporteImg} className={style.icons} />
                </a>
              </div>
              <div className={style.featureText}>
                <h2>Suporte</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
            <div className={style.featureCardDiv}>
              {/* imagem V */}
              <div className={style.featureCards}>
                <a href="/">
                  <img src={DesenpenhoImg}  className={style.icons}/>
                </a>
              </div>
              <div className={style.featureText}>
                <h2>Alto Desenpenho</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
            <div className={style.featureCardDiv}>
              {/* imagem V */}
              <div className={style.featureCards}>
                <a href="/">
                  <img src={OnbordingImg}  className={style.icons}/>
                </a>
              </div>
              <div className={style.featureText}>
                <h2>Onboarding</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
          </div>
          <div className={style.featureContent}>
            <div className={style.featureCardDiv}>
              {/* imagem V */}
              <div className={style.featureCards}>
                <a>
                  <img src={Product} className={style.icons} />
                </a>
              </div>
              <div className={style.featureText}>
                <h2>Produto</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
            <div className={style.featureCardDiv}>
              {/* imagem V */}
              <div className={style.featureCards}>
                <a href="/">
                  <img src={Quality}  className={style.icons}/>
                </a>
              </div>
              <div className={style.featureText}>
                <h2>Qualidade</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
            <div className={style.featureCardDiv}>
              {/* imagem V */}
              <div className={style.featureCards}>
                <a href="/">
                  <img src={Resulty}  className={style.icons}/>
                </a>
              </div>
              <div className={style.featureText}>
                <h2>Resultado</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                  nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.featureContent}></div>
      </div>
    </section>
  );
};

export default Feature;
