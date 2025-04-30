import styles from './Header.module.css'
import sprite from '../icons.svg'
import BurgerMenu from '../Modals/BurgerMenu';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [modalBurgerMenuIsOpen, setModalBurgerMenu] = useState(false);

  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

    return (
      <header className={styles.header}>
        <ul>
          <li>
            <button
              className={`${styles.langBtn} ${
                i18n.language === "ua" ? styles.active : ""
              }`}
              onClick={() => changeLang("ua")}
            >
              УКР
            </button>
          </li>
          <li>
            <button
              className={`${styles.langBtn} ${
                i18n.language === "ru" ? styles.active : ""
              }`}
              onClick={() => changeLang("ru")}
            >
              РУС
            </button>
          </li>
        </ul>
        <div
          onClick={() => setModalBurgerMenu(true)}
          className={styles.wrapperBurgerMenu}
        >
          <svg className={styles.burgerMenu} width={22} height={15}>
            <use xlinkHref={`${sprite}#icon-burger-menu`}></use>
          </svg>
        </div>
        <BurgerMenu
          isOpen={modalBurgerMenuIsOpen}
          onClose={() => setModalBurgerMenu(false)}
        ></BurgerMenu>
      </header>
    );
}