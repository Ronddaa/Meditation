import styles from "./Who.module.css";
import sprite from '../icons.svg'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Who() {
  return (
    <section className={styles.sectionWho}>
      <div className="container">
        <h2 className={styles.titleWho}>кому подойдет?</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Кто чувствует, что застрял в своих переживаниях и не может с ними
              справиться – если тревога, страхи, обиды, низкая самооценка или
              одиночество мешают тебе жить спокойно и свободно.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Постоянно анализирует и прокручивает мысли, но не находит решения
              – если ты устал(а) от бесконечных размышлений и хочешь не просто
              «думать», а реально почувствовать, что внутри становится легче.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>
              Хочет лучше понять себя, быть независимым и научиться слушать свои
              желания – если тебе сложно сказать «нет», ты зависишь от чужого
              мнения, не знаешь, куда двигаться, или забываешь заботиться о
              себе.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
