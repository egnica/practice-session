import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Test Practice Sessions</h1>
        <Link href={"./challenges-two/001"}>Challenge 001</Link>
        <br />
        <Link href={"./challenges-two/002"}>Challenge 002</Link>
        <br />
        <Link href={"./challenges-two/003"}>Challenge 003</Link>
        <br />
        <Link href={"./challenges-two/004"}>Challenge 004</Link>
         <br />
        <Link href={"./challenges-two/005"}>Challenge 005</Link>
          <br />
        <Link href={"./challenges-two/006"}>Challenge 006</Link>
      </div>
    </div>
  );
}
