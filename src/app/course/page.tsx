"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";

const API_KEY = process.env.API_KEY;

if (!API_KEY) throw Error();

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default function Course() {
  const [res, setRes] = useState<Array<string>>([]);
  useEffect(() => {
    (async () => {
      const result = await model.generateContent(
        `Explain first chapter of Precalculus book by Earl W. Swokowski and Jeffery A.Cole.`
      );
      const response = await result.response;
      const text = response.text();
      setRes([...res, text]);
    })();
  });
  return (
    <main className={styles.main}>
      <h1>Precalculus</h1>
      <section>
        {res.map((r) => (
          <Markdown>{r}</Markdown>
        ))}
      </section>
    </main>
  );
}
