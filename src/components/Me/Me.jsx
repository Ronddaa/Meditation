import styles from "./Me.module.css";
import MeIMG from "./Me.webp";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";

export default function Me() {

  const {t} = useTranslation()

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
          <h3 className={styles.titleMyName}>{t("burgerMenu.name")}</h3>
          <p className={styles.underTitle}>{t("meSection.underName")}</p>
          <ul className={styles.meInfoList}>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>{t("meSection.li1")}</p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>{t("meSection.li2")}</p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>{t("meSection.li3")}</p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>{t("meSection.li4")}</p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>{t("meSection.li5")}</p>
            </li>
            <li>
              <svg className={styles.listStyleMe} width={13} height={13}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>{t("meSection.li6")}</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <p className={styles.btwText}>{t("meSection.btwText")}</p>
      </section>
    </>
  );
}
