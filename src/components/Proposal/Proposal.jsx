import styles from "./Proposal.module.css";
import sprite from "../icons.svg";
import CountdownTimer from "../Timer/Timer";

export default function Proposal() {
  return (
    <section className={styles.proposalSection}>
      <div className="container">
        <h2 className={styles.titleProposal}>что ты получишь?</h2>
        <ul className={styles.wrapperProposal}>
          <li>
            <svg className={styles.iconStar} width={13} height={13}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={styles.bigText}>
              12 медитаций, доступных для скачивания или прослушивания онлайн в
              удобное время
            </p>
          </li>
          <li>
            <svg className={styles.iconStar} width={13} height={13}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={styles.lowText}>
              Дополнительные задания в процессе прохождения курса
            </p>
          </li>
          <li>
            <svg className={styles.iconStar} width={13} height={13}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={styles.bigText}>
              ответы на вопросы, обратная связь от автора курса Любовь Мальцевой
            </p>
          </li>
          <li>
            <svg className={styles.iconStar} width={13} height={13}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={styles.lowText}>
              бесплатное видео «растяжка для успокоения ума»
            </p>
          </li>
          <li>
            <svg className={styles.iconStar} width={13} height={13}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p className={styles.bigText}>
              чек-лист «Тревога ХВАТИТ! 6 рабочих техник <br /> от постоянной
              тревоги»
            </p>
          </li>
        </ul>
        <div className={styles.wrapperHeroBtn}>
          <p className={styles.discout}>-75%</p>
          <button className="buyBtn">купить курс</button>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
