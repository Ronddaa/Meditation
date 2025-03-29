import styles from "./Me.module.css";
import MeIMG from "./Me.webp";
import sprite from "../icons.svg";

export default function Me() {
  return (
    <>
      <section className={styles.sectionMe}>
        <div className="container">
          <h2 className={styles.titleMe}>про автора</h2>
        </div>
        <div className={styles.wrapperMeIMG}>
          <img className={styles.meING} src={MeIMG} alt="Me" />
        </div>
        <div className="container">
          <h3 className={styles.titleMyName}>Любовь Мальцева</h3>
          <p className={styles.underTitle}>
            автор первых в Украине психологических медитаций
          </p>
          <ul className={styles.meInfoList}>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>
                Создатель медитаций, которые работают не через буддизм, а через
                психологию
              </p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              Дипломированный психолог, будущий психоаналитик
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>
                15 лет в балете: жесткая дисциплина, буллинг, высокие требования
              </p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>
                Знаю, как справляться с кризисами, когда помощи ждать неоткуда
              </p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>
                5+ лет личной терапии, выход из жесткого абьюза и 3 года РПП
              </p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>Практикую медитации и гвоздестояние 2+ года</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <p className={styles.btwText}>
          Этот курс – инструмент глубокой работы с собой. Попробуй – и ты
          увидишь разницу и начнешь жить проще и легче
        </p>
      </section>
    </>
  );
}
