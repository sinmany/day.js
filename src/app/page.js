import CustomParseFormat from "@/components/CustomParseFormat";
import styles from "./page.module.css";
import GetCurrentDateTime from "@/components/GetCurrentDateTime";
import CustomParseformatWithLang from "@/components/CustomParseformatWithLang";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <GetCurrentDateTime />
        <p>--------------------------</p>
        <CustomParseFormat />
        <p>--------------------------</p>
        <CustomParseformatWithLang />
      </main>
    </div>
  );
}
