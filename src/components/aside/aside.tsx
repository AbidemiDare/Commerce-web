import { FaXmark } from "react-icons/fa6";
import style from "./aside.module.css";

interface navProps {
  show?: boolean;
  showMenu?: VoidFunction;
}

export default function Aside({ show, showMenu }: navProps) {
  return (
    <div>
      <aside className={`${style.aside} ${show ? style.showAside : " "}`}>
        <button className={style.removeToggle}>
          <span onClick={showMenu}>
            <FaXmark />
          </span>
        </button>

        <div className={style.asideCenter}>
          <ul className={style.asideLinks}>
            <li>
              <a href="#home" className={style.sidBarLink}>
                home
              </a>
            </li>
            <li>
              <a className={style.sideBarLink} href="#features">
                features
              </a>
            </li>
            <li>
              <a className={style.sideBarLink} href="#products">
                products
              </a>
            </li>
            <li>
              <a className={style.sideBarLink} href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>

        <button className={`${style.logBtn} ${style.asideLogBtn}`}>
          Log in
        </button>
      </aside>
    </div>
  );
}
