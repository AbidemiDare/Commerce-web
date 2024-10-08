import style from "./hero.module.css";

export function Hero() {
  return (
    <>
      <div className={style.hero}>
        <div className={style.heroCenter}>
          <div className={style.heroInfo}>
            <h1>
              shop with us at <span className={style.xtra}>tfs</span>
            </h1>
            <p>
              be <span className={style.style}>fashionable</span>, stay{" "}
              <span className={style.style}>fashionable</span>
            </p>
            <button className={`${style.btn} ${style.heroBtn}`}>explore</button>
          </div>

          <div className={style.heroImgContainer}>
            <img src="/Images/hero.png" className={style.img} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}
