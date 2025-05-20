import styles from "./Key.module.css";
import { useTranslation } from "react-i18next"; 
import TextBlock from "../../common/TextBlock";

export default function KeySections() {

  const { t, i18n } = useTranslation()
  
  return (
    <section className={styles.keySections}>
      <ul>
        <li className={styles.keySText}>
          <TextBlock tKey="keySection.key1" />
        </li>
        <li className={styles.keySText}>
          <TextBlock tKey="keySection.key2" />
        </li>
      </ul>
    </section>
  );
}
