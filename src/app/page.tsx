import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Current&nbsp;
          <code className={styles.code}>
            {" "}
            Jamal <span className={styles.vs}>VS</span> Matt{" "}
          </code>
        </p>
        <div>
          <div className={styles.score}>
            {" "}
            <span className={styles.scoreRed}>4</span>
            <span> - </span>
            <span className={styles.scoreBlue}>7</span>{" "}
          </div>
        </div>
        <div>
          <p>
            <a href="https://muhaaryb.com/" target="_blank">
              By{" "}
              <Image
                src="/Muhaaryb.png"
                alt="Muhaaryb Logo"
                className={styles.muhaarybLogo}
                width={50}
                height={25}
                priority
              />
            </a>
          </p>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Bjj-fighters-gi.svg"
          alt="Next.js Logo"
          width={280}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/score" className={styles.card}>
          <h2>
            Score <span>-&gt;</span>
          </h2>
          <p>Keep track of your matches scores.</p>
        </Link>

        <Link href="" className={styles.card}>
          <h2>
            Brackets <span>-&gt;</span>
          </h2>
          <p>See current brackets.</p>
        </Link>

        <Link href="" className={styles.card}>
          <h2>
            Prizes <span>-&gt;</span>
          </h2>
          <p> Put up grand prizes for for first, second, & third place!</p>
        </Link>

        <Link href="https://muhaaryb.com/" className={styles.card} target="_blank">
          <h2>
            Shop <span>-&gt;</span>
          </h2>
          <p>Shop everything you need for the next match.</p>
        </Link>
      </div>
    </main>
  );
}
