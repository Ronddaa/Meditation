import CountdownTimer from '../../Timer/Timer';
import styles from './BtwBuy.module.css'

export default function BtwBuy() {
    return (
      <section className={styles.sectionBtwBuy}>
        <div className="container">
                <p className={styles.btwText}>
            Этот курс — не просто набор медитаций. Это глубокая работа с собой,
            которая поможет тебе понять себя, освободиться от ненужного <br /> и начать
            жить проще и легче
          </p>
          <div className={styles.wrapperHeroBtn}>
            <p className={styles.discout}>-75%</p>
            <button className="buyBtn">купить курс</button>
            <p className={styles.timingText}>предложение действует:</p>
            <CountdownTimer />
          </div>
        </div>
      </section>
    );
}