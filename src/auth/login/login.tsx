import { FaEnvelope, FaUser, FaXmark } from "react-icons/fa6";
import style from "./logn.module.css";

export default function Login() {
  return (
    <div>
      <div className={style.formData}>
        <form action="" className={style.form}>
          <button className={style.removeForm}>
            <FaXmark />
          </button>

          <span>
            <FaUser />
          </span>

          <h3 id="form-header">welcome</h3>

          <div className="form-column">
            <label htmlFor="email" className="form-label">
              <FaEnvelope /> email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="form-column">
            <label htmlFor="pword" className="form-label">
              <i className="fa-solid fa-lock"></i> password:
            </label>
            <input
              type="password"
              name="password"
              id="pword"
              placeholder="password"
            />
          </div>

          <button className="form-btn">Log in</button>

          <div className="sign-up">
            <h4>Want to create an account?</h4>
            <h3>
              <a href="#">sign up</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}
