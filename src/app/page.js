
import CustomParseFormat from "@/components/CustomParseFormat";
import styles from "./page.module.css";
import GetCurrentDateTime from "@/components/GetCurrentDateTime";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <GetCurrentDateTime />
        <p>--------------------------</p>
        <CustomParseFormat />
      </main>
    </div>
  );
}
