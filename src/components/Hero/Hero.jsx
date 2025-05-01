import CountdownTimer from '../Timer/Timer';
import styles from './Hero.module.css'
import sprite from '../icons.svg'
import { useTranslation } from 'react-i18next';
import TextBlock from '../common/TextBlock';

export default function Hero() {

  const { t, i18n } = useTranslation();

    return (
      <section className={styles.heroSection}>
        <div className="container">
          <ul className={styles.aboutCourseHero}>
            <li>
              <p className={styles.aboutCoursesQuestion}>
                {t("hero.duration")}
              </p>
              <p className={styles.aboutHeroAnswer}>{t("hero.durationTime")}</p>
            </li>
            <li>
              <p className={styles.aboutCoursesQuestion}>{t("hero.format")}</p>
              <p className={styles.aboutHeroAnswer}>{t("hero.formatType")}</p>
            </li>
          </ul>
          <h1 className={styles.mainTitle}>
            <span className={styles.mainTitleWhite}>
              {t("hero.titleWhite")}
            </span>{" "}
            <span
              className={`${styles.mainTitleYellow} ${
                i18n.language === "ua" ? styles.mainTitleYellowUA : ""
              }`}
            >
              {t("hero.titleYellow")}
            </span>{" "}
            <span className={styles.mainTitleLow}>{t("hero.titleLow")}</span>
          </h1>
          <ul className={styles.heroWrapperPrice}>
            <li>
              <p className={styles.priceBefore}>53$</p>
            </li>
            <li>
              <p className={styles.priceNow}>33$</p>
            </li>
          </ul>
        </div>
        <article className={styles.wrapperInfoBtn}>
          <ul className={styles.wrapperAboutCourse}>
            <li className={styles.aboutCourse}>
              <TextBlock tKey="hero.aboutCourses1" />
            </li>
            <li className={styles.aboutCourse}>
              <TextBlock tKey="hero.aboutCourses2" />
            </li>
          </ul>
          <div className={styles.wrapperHeroBtn}>
            <p className={styles.discout}>-75%</p>
            <button className="buyBtn">я готова!</button>
            <p className={styles.timingText}>{t("hero.timing")}</p>
            <CountdownTimer />
          </div>
        </article>
      </section>
    );
}