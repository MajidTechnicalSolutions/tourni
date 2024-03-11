import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Current Match&nbsp;
          <code className={styles.code}>
            {" "}
            Jamal <span className={styles.vs}>VS</span> Matt{" "}
          </code>
        </p>
        <div>
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
        <a href="" className={styles.card}>
          <h2>
            Score <span>-&gt;</span>
          </h2>
          <p>Keep track of your matches scores.</p>
        </a>

        <a href="" className={styles.card}>
          <h2>
            Brackets <span>-&gt;</span>
          </h2>
          <p>See current brackets.</p>
        </a>

        <a href="" className={styles.card}>
          <h2>
            Prizes <span>-&gt;</span>
          </h2>
          <p> Put up grand prizes for for first, second, & third place!</p>
        </a>

        <a href="https://muhaaryb.com/" className={styles.card} target="_blank">
          <h2>
            Shop <span>-&gt;</span>
          </h2>
          <p>Shop everything you need for the next match.</p>
        </a>
      </div>
    </main>
  );
}
