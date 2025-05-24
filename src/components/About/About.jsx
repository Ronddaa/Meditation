import styles from "./About.module.css";
import AboutIMG from "./AboutIMG.webp";
import { useTranslation } from "react-i18next";
import TextBlock from "../common/TextBlock";

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.aboutSection} id="aboutSection">
      <div className="container">
        <h2 className={styles.titleAbout}>про курс</h2>
        <article className={styles.aboutInfo}>
          <ul className={styles.wrapperAbout}>
            <li
              className={`${styles.liRU} ${
                i18n.language === "ua" ? styles.liUA : ""
              }`}
            >
              <p>
                <span>{t("aboutSection.topYellow")} </span>{" "}
                {t("aboutSection.topWhite")}
              </p>
            </li>
            <li>
              <img className={styles.AboutIMG} src={AboutIMG} alt="Me" />
            </li>
            <li>
              <p>
                <span>{t("aboutSection.botTitleYellow")}</span> <br />{" "}
                {t("aboutSection.botWhite")} <br />{" "}
                <span>{t("aboutSection.botYellow")}</span>
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
