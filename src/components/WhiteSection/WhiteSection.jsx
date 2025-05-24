import CountdownTimer from "../Timer/Timer";
import styles from "./WhiteSection.module.css";
import { useTranslation } from "react-i18next";

export default function WhiteSection() {

  const { t } = useTranslation()
  
  return (
    <section className={styles.whiteSection}>
      <div className={styles.elipseTop}></div>
      <div className="container">
        <h2 className={styles.titleWhiteSection}>{t("whiteSection.text1")}</h2>
        <h2 className={styles.titleWhiteSection}>{t("whiteSection.text2")}</h2>
        <div className={styles.wrapperPrice}>
          <p className={styles.priceBefore}>53$</p>
          <p className={styles.priceNow}>13$</p>
        </div>
        <div className={styles.wrapperHeroBtn}>
          <p className={styles.discout}>-75%</p>
          <button className="buyBtn">Я ГОТОВА!</button>
          <p className={styles.timingText}>{t("hero.timing")}</p>
          <CountdownTimer />
        </div>
      </div>
      <div className={styles.elipseBottom}></div>
    </section>
  );
}
