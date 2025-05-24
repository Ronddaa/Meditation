import styles from "./Proposal.module.css";
// import sprite from "../icons.svg";
import CountdownTimer from "../Timer/Timer";
import { useTranslation } from "react-i18next";

export default function Proposal() {

  const {t, i18n} = useTranslation()
  return (
    <section className={styles.proposalSection}>
      <div className="container">
        <h2 className={styles.titleProposal}>{t("proposalSection.title")}</h2>
        <ul className={styles.wrapperProposal}>
          <li>
            
            <p className={styles.bigText}>{t("proposalSection.list1")}</p>
          </li>
          <li>
            
            <p className={styles.lowText}>{t("proposalSection.list2")}</p>
          </li>
          <li>
            
            <p className={styles.bigText}>{t("proposalSection.list3")}</p>
          </li>
          <li>
            
            <p className={styles.lowText}>{t("proposalSection.list4")}</p>
          </li>
          <li>
            
            <p className={styles.bigText}>{t("proposalSection.list5")}</p>
          </li>
        </ul>
        <div className={styles.wrapperHeroBtn}>
          <p className={styles.discout}>-75%</p>
          <a
            target="_blank"
            href="https://secure.wayforpay.com/button/b84f43cf984f7"
            className="buyBtn"
          >
            я готова!
          </a>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
