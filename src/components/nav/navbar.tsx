import { FaCaretDown } from "react-icons/fa6";
import style from "./navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Aside from "../aside/aside";
import Login from "../../auth/login/login";

export const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);

  const showLogin = () => {
    setLogin(!login);
  };

  const showMenu = (): void => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <nav className={style.nav}>
        <div className={style.navWrapper}>
          <h4>tfs</h4>

          <ul className={style.navLinks}>
            <li>
              <a className={`${style.navLink} ${style.navLinkOne}`} href="#">
                home
                <span className={style.toolTip}>home</span>
              </a>
            </li>
            <li>
              <a className={`${style.navLink} ${style.navLinkTwo}`} href="#">
                features
                <span className={style.toolTip}>features</span>
              </a>
            </li>
            <li>
              <a className={`${style.navLink} ${style.navLinkThree}`} href="#">
                products
                <span className={style.toolTip}>products</span>
              </a>
            </li>
            <li>
              <a className={`${style.navLink} ${style.navLinkFour}`} href-="#">
                services
                <span className={style.toolTip}>services</span>
              </a>
            </li>
            <li>
              <a className={`${style.navLink} ${style.navLinkFive}`} href="#">
                contact
                <span className={style.toolTip}>contact</span>
              </a>
            </li>
          </ul>

          <button className={style.menu} onClick={showMenu}>
            <h3>
              menu{" "}
              <span className={style.menuBtn}>
                <FaCaretDown />
              </span>
            </h3>
          </button>

          <div className={style.cart}>
            <FaShoppingCart />
            <span className={style.toolTip}>add to cart</span>
          </div>

          <div className={style.navBtnContainer}>
            <button className={style.logBtn} onClick={showLogin}>
              Log in
            </button>
          </div>
        </div>
      </nav>

      <Aside show={show} showMenu={showMenu} />
      <Login login={login} showLogin={showLogin} />
    </>
  );
};
