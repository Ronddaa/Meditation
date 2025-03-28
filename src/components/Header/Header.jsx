import styles from './Header.module.css'
import sprite from '../icons.svg'

export default function Header() {
    return (
      <header className={styles.header}>
        <svg className={styles.burgerMenu} width={22} height={15}>
          <use xlinkHref={`${sprite}#icon-burger-menu`}></use>
        </svg>
      </header>
    );
}