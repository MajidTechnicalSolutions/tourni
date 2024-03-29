import Image from "next/image";
import Link from "next/link";
import styles from "./profile.module.css";

const ProfilePage = () => {
  return (
    <main className={styles.mainTest}>
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
        <div className={styles.grid}>
          <Link href="" className={styles.card}>
            <h2>
              Bracket Setup <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="" className={styles.card}>
            <h2>
              Prize Setup <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="https://muhaaryb.com/" className={styles.card} target="_blank">
            <h2>
              Stream Setup <span>-&gt;</span>
            </h2>
          </Link>
          <Link href="" className={styles.card}>
            <h2>
              Intermission Content <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="https://muhaaryb.com/" className={styles.card} target="_blank">
            <h2>
              Times <span>-&gt;</span>
            </h2>
          </Link>
          <Link href="https://muhaaryb.com/" className={styles.card} target="_blank">
            <h2>
              Announcements <span>-&gt;</span>
            </h2>
          </Link>
          <Link href="https://muhaaryb.com/" className={styles.card} target="_blank">
            <h2>
              Settings <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
