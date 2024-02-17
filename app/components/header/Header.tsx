import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.logo_box}>
        <Logo />
      </div>
      <div className={styles.menu_box}>
        <ul>
          <Link href={"/"}>
            <li>홈</li>
          </Link>
          <Link href="#">
            <li>contents</li>
          </Link>
          <Link href="#">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </main>
  );
}
