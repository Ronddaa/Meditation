import { useState } from "react";
import styles from "./Program.module.css";
import { useTranslation } from "react-i18next";
import sprite from "../icons.svg";

export default function Program() {
  const { t, i18n } = useTranslation();
  const [activeItem, setActiveItem] = useState(null);

  // Извлекаем все данные секции
  const programSection = t("programSection", { returnObjects: true });
  const items = programSection.prorgamItems || [];

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className={styles.programSection} id="programSection">
      <div className="container">
        <h2 className={styles.titleProgram}>
          {programSection.titleProgram || "программа курса:"}
        </h2>
        <ul className={styles.wrapperProgramList}>
          {items.map((item) => {
            const isActive = activeItem === Number(item.id); // item.id — строка
            const itemClass = isActive ? styles.active : "";

            return (
              <li
                key={item.id}
                onClick={() => handleItemClick(Number(item.id))}
                className={`${styles[item.classLi]} ${itemClass}`}
              >
                <h3 className={styles.titleProgramList}>
                  {item.programTitle}
                  <svg className={`${item.id % 2 === 0 ? styles.whiteArrow : styles.goldArrow}`} width={24} height={24}>
                    <use xlinkHref={`${sprite}#icon-arrow`}></use>
                  </svg>
                </h3>
                <div
                  className={`${styles.content} ${isActive ? styles.show : ""}`}
                >
                  <p className={styles.contentText}>{item.content}</p>
                  <p className={styles.contentText}>
                    <span>{t("programSection.whatBlocks")} </span>
                    {item.contents}
                  </p>
                  <p className={styles.contentText}>
                    <span>{t("programSection.howSolves")} </span>
                    {item.contentt}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
