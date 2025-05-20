import styles from './Effect.module.css'
import keyIMG from './key.webp'
import { useTranslation } from "react-i18next";


export default function Effects() {

  const {t, i18n} = useTranslation()
    return (
      <section className={styles.effectsSection}>
        <img className={styles.keyTop} src={keyIMG} alt="key" />
        <div className="container">
          <h2
            className={`${styles.titleEffects} ${
              i18n.language === "ua" ? styles.titleEffectsUA : ""
            }`}
          >
            {t("effectSection.title")}
          </h2>
          <ul className={styles.wrapperEffects}>
            <li>
              <p>{t("effectSection.grid1")}</p>
            </li>
            <li>
              <p>{t("effectSection.grid2")}</p>
            </li>
            <li>
              <p>{t("effectSection.grid3")}</p>
            </li>
            <li>
              <p>{t("effectSection.grid4")}</p>
            </li>
            <li>
              <p>{t("effectSection.grid5")}</p>
            </li>
            <li>
              <p>{t("effectSection.grid6")}</p>
            </li>
          </ul>
        </div>
        <img className={styles.keyBottom} src={keyIMG} alt="key" />
      </section>
    );
}