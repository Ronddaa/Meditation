import CountdownTimer from '../../Timer/Timer';
import styles from './BtwBuy.module.css'
import { useTranslation } from 'react-i18next';

export default function BtwBuy() {

  const { t } = useTranslation()
  
    return (
      <section className={styles.sectionBtwBuy}>
        <div className="container">
          <p className={styles.btwText}>{t("btwBuy.text")}</p>
          <div className={styles.wrapperHeroBtn}>
            <p className={styles.discout}>-75%</p>
            <a
              target="_blank"
              href="https://secure.wayforpay.com/button/b84f43cf984f7"
              className="buyBtn"
            >
              я готова!
            </a>
            <p className={styles.timingText}>{t("btwBuy.proposal")}</p>
            <CountdownTimer />
          </div>
        </div>
      </section>
    );
}