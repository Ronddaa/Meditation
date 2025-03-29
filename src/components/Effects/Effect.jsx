import styles from './Effect.module.css'
import keyIMG from './key.webp'

export default function Effects() {
    return (
      <section className={styles.effectsSection}>
        <img className={styles.keyTop} src={keyIMG} alt="key" />
        <div className="container">
          <h2 className={styles.titleEffects}>Возможные побочные эффекты:</h2>
          <ul className={styles.wrapperEffects}>
            <li>
              <p>Потеря людей, которые не уважают твои границы</p>
            </li>
            <li>
              <p>Увольнение с работы, которая делала тебя несчастной</p>
            </li>
            <li>
              <p>
                Смелость говорить «нет» и перестать тащить на себе чужие
                проблемы
              </p>
            </li>
            <li>
              <p>
                Расставание с партнёром, который разрушал твоё эмоциональное
                состояние
              </p>
            </li>
            <li>
              <p>Осознание, что ты больше никому ничего не должен</p>
            </li>
            <li>
              <p>
                Прекращение общения с токсичными родственниками <br /> без
                чувства вины
              </p>
            </li>
          </ul>
        </div>
        <img className={styles.keyBottom} src={keyIMG} alt="key" />
      </section>
    );
}