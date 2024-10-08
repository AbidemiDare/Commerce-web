import { FaCaretDown, FaMoon, FaSun } from "react-icons/fa6";
import style from "./navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Aside from "../aside/aside";

export const Navbar: React.FC = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const [show, setShow] = useState(false);

  const showMenu = (): void => {
    setShow((prevState) => !prevState);
  };

  const handleBackgroundChange = () => {
    setChangeTheme(!changeTheme);
  };

  useEffect(() => {
    if (changeTheme) {
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }

    return () => {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    };
  });

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

          <div className={style.others}>
            <button className={style.btnMode} onClick={handleBackgroundChange}>
              {changeTheme ? (
                <FaSun className={style.faSun} />
              ) : (
                <FaMoon className={style.faMoon} />
              )}
              <span className={style.toolTip}>dark mode</span>
            </button>
            <div className={style.cart}>
              <FaShoppingCart />
              <span className={style.toolTip}>add to cart</span>
            </div>
          </div>

          <div className={style.navBtnContainer}>
            <button className={style.logBtn}>Log in</button>
          </div>
        </div>
      </nav>

      <Aside show={show} />
    </>
  );
};
