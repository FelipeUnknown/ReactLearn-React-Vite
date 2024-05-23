import style from "../Footer/footer.module.css";
import Meta from "../../assets/img/logo-meta.svg";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div id={style.footer_content}>
        <div id={style.footer_content}>
          <div className={style.achei}>
            <img src={Meta} />
            <p className={style.pezinho}>
              React também é uma arquitetura. Os frameworks<br></br> que o
              implementam permitem buscar dados em<br></br> componentes
              assíncronos que são executados<br></br> no servidor ou mesmo
              durante a construção.
            </p>
          </div>
          <ul className={style.footer_list}>
            <li>
              <h3>Aprenda React</h3>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Começo rápido
              </a>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Instalação
              </a>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Descrevendo a IU
              </a>
            </li>
          </ul>

          <ul className={style.footer_list}>
            <li>
              <h3>Referência de API</h3>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                APIs de reação
              </a>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Reagir APIs DOM
              </a>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Descrevendo a IU
              </a>
            </li>
          </ul>
          <ul className={style.footer_list}>
            <li>
              <h3>Comunidade</h3>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Código de Conduta
              </a>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Colaboradores do Documentos
              </a>
            </li>
            <li>
              <a href="#" className={style.footer_link}>
                Conheça o time
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id={style.footer_social_media}>
        <a href="#" className={style.footer_link} id={style.instagram}>
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="#" className={style.footer_link} id={style.facebook}>
          <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a href="#" className={style.footer_link} id={style.whatsapp}>
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <div className={style.finalFooter}>
        <div className={style.politica}>
          <p className={style.p1}>
            © 2023 Ninesevem. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
