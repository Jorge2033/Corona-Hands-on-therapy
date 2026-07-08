"use client";

import { useState } from "react";
import styles from "./faqs.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen && <div className={styles.answer}>{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}