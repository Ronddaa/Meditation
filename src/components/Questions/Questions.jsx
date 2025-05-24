import { useState } from "react";
import styles from "./Questions.module.css";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const [activeItem, setActiveItem] = useState(null);

  

  const items = [
    {
      id: 1,
      classLi: "titleLi",
      title: "[1] Как долго у меня будет доступ к курсу?",
      content:
        "Доступ остаётся у тебя навсегда, ты можешь возвращаться к медитациям в любое время.",
    },
    {
      id: 2,
      classLi: "titleLi",
      title:
        "[2] Подходит ли курс, если у меня никогда не получалось медитировать?",
      content:
        "Да! Этот курс создан специально для тех, кто не умеет «очищать разум» или «сидеть в тишине». Здесь нет сложных техник – только понятные и работающие методы.",
    },
    {
      id: 3,
      classLi: "titleLi",
      title: "[3] Можно ли совмещать курс с работой с психологом?",
      content:
        "Да, курс не заменяет терапию, но отлично её дополняет, помогая глубже понимать себя и работать с эмоциями между сессиями.",
    },
    {
      id: 4,
      classLi: "titleLi",
      title:
        "[4] Я тревожный человек, мне сложно расслабиться. Подойдёт ли мне?",
      content:
        "Конечно! В медитациях есть чёткие инструкции, они помогают не «зависать» в мыслях, а мягко приводить себя в ресурсное состояние.",
    },
    {
      id: 5,
      classLi: "titleLi",
      title: "[5] Нужно ли что-то особенное для занятий?",
      content:
        "Нет, тебе нужно только удобное место и 5-10 минут времени. Всё остальное я уже подготовила для тебя.",
    },
  ];

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className={styles.qSection}>
      <div className="container">
        <h2 className={styles.titleQ}>частые вопросы:</h2>
        <ul className={styles.wrapperQList}>
          {items.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.id)}
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
