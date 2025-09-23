import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Test Practice Sessions</h1>
        <Link href={"./challenges-two/001"}>Challenge 001</Link>
      </div>
    </div>
  );
}
