import styles from './AfterCurse.module.css'

export default function AfterCurse() {
    return (
      <section className={styles.sectionAfterC}>
        <div className="container">
          <h2 className={styles.titleAfter}>после курса ты:</h2>
          <ul className={styles.wrapperAfterText}>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[1]</p>
              <p className={styles.textList}>
                Перестанешь жить в тревоге и страхах – научишься замечать и
                отпускать беспокойные мысли, не застревая в них. Тревога
                перестанет управлять твоей жизнью, и ты почувствуешь больше
                спокойствия.
              </p>
            </li>
            <li className={styles.oddList}>
              <p className={styles.numberList}>[2]</p>
              <p className={styles.textList}>
                Сможешь поддерживать себя, а не критиковать – внутренний критик
                больше не будет разрушать тебя изнутри, а ты научишься говорить
                с собой так, как говорил(а) бы с самым близким человеком.
              </p>
            </li>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[3]</p>
              <p className={styles.textList}>
                Станешь более уверенным и независимым – перестанешь зависеть от
                чужого мнения, научишься слышать свои желания и не бояться
                делать то, что важно для тебя.
              </p>
            </li>
            <li className={styles.oddList}>
              <p className={styles.numberList}>[4]</p>
              <p className={styles.textList}>
                Научишься заботиться о себе без чувства вины – ты поймёшь что
                можно ставить себя на первое место, не жертвуя собой ради
                других, и при этом не чувствовать себя эгоистом.
              </p>
            </li>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[5]</p>
              <p className={styles.textList}>
                Отпустишь обиды и прошлые переживания – больше не будешь таскать
                с собой старую боль, а научишься осознанно проживать и завершать
                сложные эмоции.
              </p>
            </li>
            <li className={styles.oddList}>
              <p className={styles.numberList}>[6]</p>
              <p className={styles.textList}>
                Почувствуешь, что ты не один(а) в этом мире – даже если раньше
                ощущение одиночества было сильным, ты научишься находить
                внутреннюю опору и ощущать связь с собой <br /> и окружающими.
              </p>
            </li>
            <li className={styles.evenList}>
              <p className={styles.numberList}>[7]</p>
              <p className={styles.textList}>
                Начнёшь двигаться вперёд – если раньше страх перемен или
                отсутствие мотивации мешали тебе что-то менять, теперь ты будешь
                чувствовать больше уверенности и сил, чтобы действовать.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
}