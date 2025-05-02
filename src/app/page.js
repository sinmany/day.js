
import styles from "./page.module.css";
import GetCurrentDateTime from "@/components/GetCurrentDateTime";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <GetCurrentDateTime />
      </main>
    </div>
  );
}
