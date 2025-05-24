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
      closeTimeoutMS={400}
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
          <a className={`${styles.navigationLink}`} href="#">
            {t("burgerMenu.main")}
          </a>
        </li>
        <li>
          <a className={styles.navigationLink} href="#">
            {t("burgerMenu.about")}
          </a>
        </li>
        <li>
          <a className={styles.navigationLink} href="#">
            {t("burgerMenu.programm")}
          </a>
        </li>
        <li>
          <a className={styles.navigationLink} href="#">
            {t("burgerMenu.aboutAuthor")}
          </a>
        </li>
        <li>
          <a className={styles.navigationLink} href="#">
            {t("burgerMenu.reviews")}
          </a>
        </li>
        <li>
          <a className={styles.navigationLink} href="#">
            {t("burgerMenu.questions")}
          </a>
        </li>
      </ul>
      <article className={styles.articleBurger}>
        <h2 className={styles.burgerName}>{t("burgerMenu.name")}</h2>
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
            <a className={styles.contactLink} href="mailto:tviy.treners.supp@gmail.com">
              tviy.treners.supp@gmail.com
            </a>
          </li>
          <li>
            <a className={styles.contactLink} href="tel:+380954417376">+380954417376</a>
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
