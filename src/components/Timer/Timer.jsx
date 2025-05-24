import { useEffect, useState } from "react";
import styles from './Timer.module.css'

// Генерируем общее случайное время (в секундах) от 4 до 8 часов
const getRandomTime = () => {
  const hours = Math.floor(Math.random() * (6 - 4 + 1) + 4);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  return hours * 3600 + minutes * 60 + seconds;
};

const sharedTime = getRandomTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(sharedTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Преобразуем секунды в часы, минуты и секунды
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className={styles.countdownTimer} style={{ color: "#E1A230" }}>
      [ {timeLeft > 0 ? formatTime(timeLeft) : "Время вышло!"} ]
    </div>
  );
};

export default CountdownTimer;
