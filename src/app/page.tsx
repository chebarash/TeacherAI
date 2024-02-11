"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Courses</h1>
      <section>
        <button
          className={styles.course}
          onClick={() => router.push("/course")}
        >
          <p>Default</p>
          <h2>Precalculus</h2>
          <p>Progress 5/12</p>
          <Image
            priority
            alt="background"
            src={`/pre.png`}
            width={300}
            height={300}
          />
        </button>
        <button disabled className={styles.add}>
          <h2>Add your own</h2>
          <p>+</p>
          <Image
            priority
            alt="background"
            src={`/add.png`}
            width={528}
            height={528}
          />
        </button>
      </section>
    </main>
  );
}
