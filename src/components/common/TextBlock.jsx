import { useTranslation } from "react-i18next";

export default function TextBlock({ tKey }) {
  const { t } = useTranslation();
  const paragraphs = t(tKey, { returnObjects: true });

  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}
