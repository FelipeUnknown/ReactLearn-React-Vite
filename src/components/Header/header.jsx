import style from "../Header/header.module.css";
import Logo from "../../assets/img/logo.svg";
import Logo2 from "../../assets/img/github.svg";

const Header = () => {
  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}>
          <img src={Logo}></img>
        </div>
        <nav>
          <ul>
            <li className={style.headerPalavras}>
              <a href="#">Início</a>
              <a href="#">Apreender</a>
              <a href="#">Referência</a>
              <a href="#">Comunidade</a>
            </li>
          </ul>
          <div className={style.headerParte2}>
            <ul className={style.headerBtn}>
              <li>
                <button className={style.unicoBtn}>Documentação</button>
              </li>
            </ul>
          </div>
          <div className={style.headerLogo}>
            <img src={Logo2}></img>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
