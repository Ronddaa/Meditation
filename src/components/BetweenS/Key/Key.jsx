import styles from "./Key.module.css";
import { useTranslation } from "react-i18next"; 

export default function KeySections() {

  const { t, i18n } = useTranslation()
  
  return (
    <section className={styles.keySections}>
      <p className={styles.keySText}>{t("keySection.key1")}</p>
      <p className={styles.keySText}>{t("keySection.key2")}</p>
    </section>
  );
}
