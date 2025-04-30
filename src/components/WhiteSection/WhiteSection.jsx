import CountdownTimer from "../Timer/Timer";
import styles from "./WhiteSection.module.css";

export default function WhiteSection() {
  return (
    <section className={styles.whiteSection}>
      <div className={styles.elipseTop}></div>
      <div className="container">
        <h2 className={styles.titleWhiteSection}>
          не упусти шанс купить по самой низкой цене
        </h2>
        <div className={styles.wrapperPrice}>
          <p className={styles.priceBefore}>53$</p>
          <p className={styles.priceNow}>13$</p>
        </div>
        <div className={styles.wrapperHeroBtn}>
          <p className={styles.discout}>-75%</p>
          <button className="buyBtn">купить курс</button>
          <p className={styles.timingText}>предложение действует:</p>
          <CountdownTimer />
        </div>
      </div>
      <div className={styles.elipseBottom}></div>
    </section>
  );
}
