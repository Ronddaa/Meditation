import styles from "./Who.module.css";
import sprite from '../icons.svg'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function Who() {
  const {t, i18n} = useTranslation()
  return (
    <section className={styles.sectionWho}>
      <div className="container">
        <h2 className={`${styles.titleWho} ${i18n.language === "ua" ? styles.titleWhoUA : ""} `}>{t("whoSection.title")}</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <p>{t("whoSection.slide1")}</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p>{t("whoSection.slide2")}</p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <p className={styles.widthUA}>{t("whoSection.slide3")}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
