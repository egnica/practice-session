import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Test Practice Sessions</h1>
      <Link href={"./challenges/challengeOne"}>Challenge One</Link>
    </div>
  );
}
