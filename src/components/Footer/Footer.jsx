import styles from "./Footer.module.css";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const {t} = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.elipseTop}></div>
      <div className="container">
        <h2 className={styles.titleFooter}>{t("footer.titleName")}</h2>
        <ul className={styles.wrapperSocialLinks}>
          <li>
            <a href="#">
              <svg className={styles.arrowList} width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-inst`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={styles.arrowList} width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-tt`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={styles.arrowList} width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-teleg`}></use>
              </svg>
            </a>
          </li>
        </ul>
        <ul className={styles.wrapperLinks}>
          <li>
            <a href="mailto:tviy.treners.supp@gmail.com">
              tviy.treners.supp@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+380954417376">+380954417376</a>
          </li>
        </ul>
        <ul className={styles.offer}>
          <li>
            <p>{t("footer.offer")}</p>
          </li>
          <li>
            <p>{t("footer.policy")}и</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
