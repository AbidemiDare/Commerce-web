import { FaCode, FaFolder } from "react-icons/fa6";
import style from "./feature.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Feature() {
  return (
    <div>
      <section className={style.features} id="features">
        <div className={`${style.featuresTitle} ${style.sectionTitle}`}>
          <h3>features</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            qui.
          </p>
        </div>

        <div className={style.featuresCenter}>
          <article className={style.feature}>
            <img src="/Images/checkout.jpg" className={style.img} alt="" />
            <div className={style.featureInfo}>
              <h4>
                <span>
                  <FaShoppingCart />
                </span>
                An easy-to-use Checkout
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                tempore magnam distinctio, quae consequatur corporis a fuga amet
                quod, aliquid enim ipsa? Reiciendis, architecto reprehenderit
                recusandae error tempore amet itaque?
              </p>
            </div>
          </article>

          <article className={style.feature}>
            <div className={style.featureInfo}>
              <h4>
                <span>
                  <FaFolder />
                </span>
                Content management
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, at sed quis, laudantium quos facere et natus
                dolores rerum vel ipsam omnis amet molestiae temporibus
                reprehenderit voluptate ducimus. Libero, laboriosam.
              </p>
            </div>
            <img src="/Images/content.jpg" className={style.img} alt="" />
          </article>

          <article className={style.feature}>
            <img src="/Images/seo.jpg" className={style.img} alt="" />
            <div className={style.featureInfo}>
              <h4>
                <span>
                  <FaCode />
                </span>
                Search engine optimization
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, reprehenderit aliquid! Reiciendis consectetur beatae
                itaque veritatis officiis cumque aliquam, eius nostrum accusamus
                atque vero iure quas obcaecati id ad fugit.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
