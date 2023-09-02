import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Index(props) {
  const { id, title, poster_path } = props;
  return (
    <div className={styles.card} key={id}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={200}
        height={200}
        style={{ borderRadius: 8 }}
      />
      <div className={styles.cardTitle}>
        <p>{title}</p>
      </div>
    </div>
  );
}
