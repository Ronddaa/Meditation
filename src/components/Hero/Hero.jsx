import CountdownTimer from '../Timer/Timer';
import styles from './Hero.module.css'
import sprite from '../icons.svg'

export default function Hero() {
    return (
      <section className={styles.heroSection}>
        <div className="container">
          <ul className={styles.aboutCourseHero}>
            <li>
              <p className={styles.aboutCoursesQuestion}>длительность:</p>
              <p className={styles.aboutHeroAnswer}>24 дня</p>
            </li>
            <li>
              <p className={styles.aboutCoursesQuestion}>формат:</p>
              <p className={styles.aboutHeroAnswer}>онлайн</p>
            </li>
          </ul>
          <h1 className={styles.mainTitle}>
            <span className={styles.mainTitleWhite}>12 ключей</span>{" "}
            <span className={styles.mainTitleYellow}>к себе</span>{" "}
            <span className={styles.mainTitleLow}>
              онлайн-курс медитаций от психолога
            </span>
          </h1>
          <ul className={styles.heroWrapperPrice}>
            <li>
              <p className={styles.priceBefore}>53$</p>
            </li>
            <li>
              <p className={styles.priceNow}>13$</p>
            </li>
          </ul>
        </div>
        <article className={styles.wrapperInfoBtn}>
          <ul className={styles.wrapperAboutCourse}>
            <li className={styles.aboutCourse}>
              <svg className={styles.iconStar} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
                        видео «растяжка для успокоения ума»
            </li>
            <li className={styles.aboutCourse}>
              <svg className={styles.iconStar} width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              авторский чек-лист «Тревога ХВАТИТ! <br />6 рабочих техник от
              постоянной тревоги»
            </li>
          </ul>
          <div className={styles.wrapperHeroBtn}>
            <p className={styles.discout}>-75%</p>
            <button className="buyBtn">купить курс</button>
            <p className={styles.timingText}>предложение действует:</p>
            <CountdownTimer />
          </div>
        </article>
      </section>
    );
}