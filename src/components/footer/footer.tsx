import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.footerCenter}>
          <div className={style.footerLinks}>
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#products">products</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
            </ul>
          </div>

          <div className={style.footerIcons}>
            <ul>
              <li>
                <a className="footer-icon footer-icon-1" href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a className="footer-icon footer-icon-2" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="footer-icon footer-icon-3" href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="footer-icon footer-icon-4" href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className={style.footerForm}>
            <h4>contact us</h4>
            <div className={style.underline}></div>

            <div className={style.footerFormRow}>
              <div className={style.formRow}>
                <label htmlFor="email">email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="tfs@email.com"
                />
              </div>
              <div className={style.formRow}>
                <label htmlFor="telephone">Telephone:</label>
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="+234 707 000 999"
                />
              </div>
            </div>

            <button className={style.footerBtn}>Log in</button>
          </div>
        </div>

        <div className={style.footerFooter}>
          <p>
            <span className={style.copy}>&copy;</span>{" "}
            <span className={style.fName}>tfs</span>
            <span className={style.date}></span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
