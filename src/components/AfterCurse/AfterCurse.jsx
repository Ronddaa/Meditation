import styles from './AfterCurse.module.css'
import { useTranslation } from 'react-i18next';

export default function AfterCurse() {

  const {t} = useTranslation()
    return (
      <section className={styles.sectionAfterC}>
        <div className="container">
          <h2 className={styles.titleAfter}>{t("afterCourses.title")}</h2>
          <ul className={styles.wrapperAfterText}>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[1]</p>
              <p className={styles.textList}>{t("afterCourses.l1")}</p>
            </li>
            <li className={styles.oddList}>
              <p className={styles.numberList}>[2]</p>
              <p className={styles.textList}>{t("afterCourses.l2")}</p>
            </li>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[3]</p>
              <p className={styles.textList}>{t("afterCourses.l3")}</p>
            </li>
            <li className={styles.oddList}>
              <p className={styles.numberList}>[4]</p>
              <p className={styles.textList}>{t("afterCourses.l4")}</p>
            </li>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[5]</p>
              <p className={styles.textList}>{t("afterCourses.l5")}</p>
            </li>
            <li className={styles.oddList}>
              <p className={styles.numberList}>[6]</p>
              <p className={styles.textList}>{t("afterCourses.l6")}</p>
            </li>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[7]</p>
              <p className={styles.textList}>{t("afterCourses.l7")}</p>
            </li>
          </ul>
        </div>
      </section>
    );
}