import React from "react";
import styles from "@/styles/button.module.css";
export default function Index(props) {
  const { type, onClick, children } = props;
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
