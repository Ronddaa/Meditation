import { useState } from "react";
import styles from "./Questions.module.css";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const [activeItem, setActiveItem] = useState(null);

  const { t } = useTranslation()
    
    // Извлекаем все данные секции
  const questionsSection = t("questionsSection", { returnObjects: true });
  const items = questionsSection.questionsitems || [];

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  

  return (
    <section className={styles.qSection}>
      <div className="container">
        <h2 className={styles.titleQ}>{t("questionsSection.title")}</h2>
        <ul className={styles.wrapperQList}>
          {items.map((item) => {
            const isActive = activeItem === Number(item.id);
            // const itemClass = isActive ? styles.active : "";
            return (
              <li
                key={item.id}
                onClick={() => handleItemClick(Number(item.id))}
                className={`${styles[item.classLi] || ""} ${
                  isActive ? styles.active : ""
                }`}
              >
                <h3 className={styles.titleQList}>
                  <span>{item.title}</span>
                  <svg className={styles.arrowList} width={24} height={24}>
                    <use xlinkHref={`${sprite}#icon-arrow`}></use>
                  </svg>
                </h3>

                <div
                  className={`${styles.content} ${isActive ? styles.show : ""}`}
                >
                  <p className={styles.contentText}>{item.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
