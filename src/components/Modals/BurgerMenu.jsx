import styles from "./BurgerMenu.module.css";
import Modal from "react-modal";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";

export default function BurgerMenu({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modalBurgerMenu}
      className={styles.modalContentBurgerMenu}
      closeTimeoutMS={100}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <div onClick={onClose} className={styles.wrapperBurgerMenu}>
        <svg className={styles.burgerMenuClose} width={22} height={22}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </div>
      <ul className={styles.wrapperNavigationBurgerMenu}>
        <li>
          <a className={`${styles.navigationLink}`} href="#" onClick={onClose}>
            {t("burgerMenu.main")}
          </a>
        </li>
        <li>
          <a
            className={styles.navigationLink}
            href="#aboutSection"
            onClick={onClose}
          >
            {t("burgerMenu.about")}
          </a>
        </li>
        <li>
          <a
            className={styles.navigationLink}
            href="#programSection"
            onClick={onClose}
          >
            {t("burgerMenu.programm")}
          </a>
        </li>
        <li>
          <a
            className={styles.navigationLink}
            href="#meSection"
            onClick={onClose}
          >
            {t("burgerMenu.aboutAuthor")}
          </a>
        </li>
        <li>
          <a
            className={styles.navigationLink}
            href="#reviewsSection"
            onClick={onClose}
          >
            {t("burgerMenu.reviews")}
          </a>
        </li>
        <li>
          <a
            className={styles.navigationLink}
            href="#questionsSection"
            onClick={onClose}
          >
            {t("burgerMenu.questions")}
          </a>
        </li>
      </ul>
      <article className={styles.articleBurger}>
        <h2 className={styles.burgerName}>{t("burgerMenu.name")}</h2>
        <ul className={styles.wrapperSocialLinks}>
          <li>
            <a
              href="https://www.instagram.com/tviy.treners?igsh=MTc1ZHVpZnJlb3Jpcg=="
              target="_blank"
            >
              <svg className={styles.arrowList} width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-inst`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@tviy.treners?_t=ZN-8wcbivFlely&_r=1"
              target="_blank"
            >
              <svg className={styles.arrowList} width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-tt`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://t.me/maltsevaluba" target="_blank">
              <svg className={styles.arrowList} width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-teleg`}></use>
              </svg>
            </a>
          </li>
        </ul>
        <ul className={styles.wrapperLinks}>
          <li>
            <a
              className={styles.contactLink}
              href="mailto:tviy.treners.supp@gmail.com"
            >
              tviy.treners.supp@gmail.com
            </a>
          </li>
          <li>
            <a className={styles.contactLink} href="tel:+380954417376">
              +380954417376
            </a>
          </li>
        </ul>
        <ul className={styles.offer}>
          <li>
            <p>{t("footer.offer")}</p>
          </li>
          <li>
            <p>{t("footer.policy")}</p>
          </li>
        </ul>
      </article>
    </Modal>
  );
}
