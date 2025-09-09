import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{ textAlign: "center" }}>
        <h1>Test Practice Sessions</h1>
        <Link href={"./challenges/challengeOne"}>Challenge One</Link>
        <br />
        <Link href={"./challenges/challengeTwo"}>Challenge Two</Link>
        <br />
        <Link href={"./challenges/challengeThree"}>Challenge Three</Link>
        <br />
        <Link href={"./challenges/challengeFour"}>Challenge Four</Link>
      </div>
    </div>
  );
}
