import styles from "./page.module.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";

const API_KEY = process.env.API_KEY;

if (!API_KEY) throw Error();

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default async function Course() {
  const result = await model.generateContent(
    `Explain in detail the topics in the first chapter of Precalculus book by Earl W. Swokowski and Jeffery A.Cole.`
  );
  const response = await result.response;
  const text = response.text();
  return (
    <main className={styles.main}>
      <h1>Precalculus</h1>
      <section>
        <Markdown>{text}</Markdown>
      </section>
    </main>
  );
}
