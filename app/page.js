import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Test Practice Sessions</h1>
        <Link href={"./challenges/challengeOne"}>Challenge One</Link>
        <br />
        <Link href={"./challenges/challengeTwo"}>Challenge Two</Link>
        <br />
        <Link href={"./challenges/challengeThree"}>Challenge Three</Link>
        <br />
        <Link href={"./challenges/challengeFour"}>Challenge Four</Link>
        <br />
        <Link href={"./challenges/challengeFive"}>Challenge Five</Link>
        <br />
        <Link href={"./challenges/challengeSix"}>Challenge Six</Link>
        <br />
        <Link href={"./challenges/challengeSeven"}>Challenge Seven</Link>
        <br />
        <Link href={"./challenges/challengeEight"}>Challenge Eight</Link>
        <br />
        <Link href={"./challenges/challengeNine"}>Challenge Nine</Link>
        <br />
        <Link href={"./challenges/challengeTen"}>Challenge Ten</Link>
        <br />
        <Link href={"./challenges/challengeEleven"}>Challenge Eleven</Link>
        <br />
        <Link href={"./challenges/challengeTwelve"}>Challenge Twelve</Link>
        <br />
        <Link href={"./challenges/challengeThirteen"}>Challenge Thirteen</Link>
         <br />
        <Link href={"./challenges/challengeFourteen"}>Challenge Fourteen</Link>
      </div>
    </div>
  );
}
