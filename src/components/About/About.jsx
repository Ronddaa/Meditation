import styles from './About.module.css'
import AboutIMG from './AboutIMG.webp'

export default function About() {
    return (
      <section className={styles.aboutSection}>
        <div className="container">
          <h2 className={styles.titleAbout}>про курс</h2>
          <article className={styles.aboutInfo}>
            <ul className={styles.wrapperAbout}>
              <li>
                <p>
                  <span>12 уникальных авторских медитаций, </span> основанных{" "}
                  <br /> на научно доказанных методах, которые глубоко
                  воздействуют <br /> на психоэмоциональное состояние.
                </p>
              </li>
              <li>
                <img className={styles.AboutIMG} src={AboutIMG} alt="Me" />
              </li>
              <li>
                <p>
                  <span>Это первые в Украине</span> медитации, объединяющие
                  психологию и осознанность, <span>аналогов нет.</span>
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
}