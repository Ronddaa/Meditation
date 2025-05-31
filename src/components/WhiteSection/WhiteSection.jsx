import CountdownTimer from "../Timer/Timer";
import styles from "./WhiteSection.module.css";
import { useTranslation } from "react-i18next";

export default function WhiteSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.whiteSection}>
      <div className={styles.elipseTop}></div>
      <div className="container">
        <p className={styles.titleWhiteSection}>{t("whiteSection.text1")}</p>
        <p className={styles.titleWhiteSection}>{t("whiteSection.text2")}</p>
        <div className={styles.wrapperPrice}>
          <p className={styles.priceBefore}>53$</p>
          <p className={styles.priceNow}>33$</p>
        </div>
        <div className={styles.wrapperHeroBtn}>
          <p className={styles.discout}>-75%</p>
          <a
            target="_blank"
            href="https://secure.wayforpay.com/button/b84f43cf984f7"
            className="buyBtn"
          >
            я готова!
          </a>
          <p className={styles.timingText}>{t("hero.timing")}</p>
          <CountdownTimer />
        </div>
      </div>
      <div className={styles.elipseBottom}></div>
    </section>
  );
}
