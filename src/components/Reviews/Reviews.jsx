import styles from "./Reviews.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { useTranslation } from "react-i18next";

export default function Reviews() {

  const {t} = useTranslation()
  return (
    <section className={styles.sectionReviews} id="reviewsSection">
      <div className="container">
        <h2 className={styles.titleReviews}>{t("reviewsTitle")}</h2>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              У меня было ощущение постоянной тревоги, а после твоей медитации я
              впервые за долгое время почувствовала, как внутри всё
              успокаивается. Ты так чётко и спокойно ведёшь, что мысли перестают
              метаться, и появляется ясность. Теперь, когда начинаю нервничать,
              просто вспоминаю это состояние — и снова становится легче.
              Спасибо, что помогла дать почувствовать как было раньше в моей
              жизни, до тревоги..😔
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Люба, спасибо за медитацию! После неё я перестала переживать из-за
              работы и наконец смогла нормально выспаться. Голос и твои слова
              так успокаивают, что тревога просто ушла. Теперь чувствую себя
              намного легче!
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Люба, твоя медитация просто шок! С первых минут я почувствовала,
              как напряжение уходит, а голос будто обнимает и успокаивает. Ты
              так мягко и ненавязчиво ведёшь, что я легко настроилась на волну
              покоя. К концу медитации было ощущение, что я побывала где-то в
              своём уютном месте, где спокойно и безопасно. Стало легче на душе,
              будто внутри всё встало на свои места. Спасибо тебе!
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              спасибо за медитацию! У меня долго болела голова из-за стресса, а
              после твоих слов я смогла расслабиться, и боль ушла. Ещё впервые
              за долгое время почувствовала спокойствие, хотя до этого всё время
              крутила тревожные мысли. Ты реально помогла!💔
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Люба, твоя медитация - спасение!😭😭😭 После неё у меня прошла
              тяжесть в груди, которую я носила несколько дней после
              расставания... Стало легче дышать и наконец смогла расслабиться.
              Спасибо большое, как можно её скачать?🙏
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Люб, твоя медитация попала прямо мне в сердце. Когда ты говорила
              про разговор с маленькой собой, я почувствовала столько всего, что
              рыдала всю медитацию. Это было как вернуться в прошлое и обнять
              себя там, где всегда было больно. Такое ощущение, что я наконец
              отпустила что-то. Буду наблюдать, благодарю!
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Как я уже сказала выше, что эта медитация нужна мне была здесь и
              сейчас❤️‍🩹 я полностью абстрагировалась от внешнего и погрузилась в
              свою голову и твои слова. У меня было ощущение, как будто знаешь,
              настоящий мир и настоящая Я, были только в этом воображении. Я
              начала плакать, потому что встретила себя маленькую и плакала даже
              в своих мыслях представляя эту картину, я так крепко обнимала себя
              и старалась пообещать, что я найду этот свет внутри себя, который
              всегда раньше излучала. Мне не хотелось возвращаться в реальность,
              я хотела остаться там и часами говорить с той маленькой Дашулей, у
              которой светятся глазки. Я бы никогда не подумала, что за каких-то
              7 минут медитации, в моем сердце приоткроются давным-давно
              закрытые наглухо двери и я честно, без розовых очков, взгляну в
              темноту за ними и без страха пойду искать то, что когда-то
              потеряла💔
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              медитация про осуждение людей понравилась мне больше всех. Она
              прямо задела за мое живое место.. Ты так точно говоришь и
              подводишь к осознанию, что я впервые!!! смогла посмотреть на свои
              осуждения со стороны. После неё стало легче дышать, будто
              отпустила огромный груз. Спасибо огромное, какие ещё темы есть?
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              @maltsevaluba у тебя такой классный голос! Я аж заслушалась Ти як
              науковець крутий, що кожного дня виступає на конференціях!
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Мне понравилась медитация. Слезки слегка были, но это были даже
              больше слезки радости, приятные такие. Очень трогательно. Ты
              супер🥹❤️🙏
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
