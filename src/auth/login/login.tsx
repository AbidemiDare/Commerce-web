import { FaEnvelope, FaLock, FaXmark } from "react-icons/fa6";
import style from "./logn.module.css";
import { useEffect } from "react";

interface Login {
  login: boolean;
  showLogin?: VoidFunction;
}

export default function Login({ login, showLogin }: Login) {
  useEffect(() => {
    if (login) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div>
      <div className={`${style.overlay} ${login ? style.showOverlay : " "}`}>
        <div className={style.formData}>
          <form
            action=""
            className={`${style.form} ${login ? style.showModal : " "}`}
          >
            <button className={style.removeForm} onClick={showLogin}>
              <FaXmark />
            </button>

            <h3 className={style.formHeader}>welcome</h3>

            <div className={style.formColumn}>
              <label htmlFor="email" className={style.formLabel}>
                <FaEnvelope className={style.formIcon} /> email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className={style.formColumn}>
              <label htmlFor="pword" className={style.formLabel}>
                <FaLock className={style.formIcon} />
                password:
              </label>
              <input
                type="password"
                name="password"
                id="pword"
                placeholder="password"
              />
            </div>

            <button className={style.formBtn}>Log in</button>

            <div className={style.signUp}>
              <h4>Want to create an account?</h4>
              <h3>
                <a href="#">sign up</a>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
