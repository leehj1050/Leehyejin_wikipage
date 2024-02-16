import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}> 로고</div>
      <div> 메뉴</div>
    </main>
  );
}
