import style from "./news.module.css";

export default function News() {
  return (
    <div>
      <section className={style.newsletter} id="contact">
        <div className={style.newsCenter}>
          <div className={style.newsTitle}>
            <h2>subscribe to our newsletter to get the latest update</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, a.
            </p>
          </div>

          <div className={style.newsForm}>
            <input type="text" name="text" id="" />
            <button className={style.newsBtn}>subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
