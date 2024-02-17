import React from "react";
import Link from "next/link";
import styles from "./pagination.module.scss";

export default function Pagination() {
  return (
    <div className={styles.page_wrap}>
      <ul>
        <Link href={"/"}>
          <li>1</li>
        </Link>
        <Link href={"/"}>
          <li>2</li>
        </Link>
        <Link href={"/"}>
          <li>3</li>
        </Link>
        <Link href={"/"}>
          <li>4</li>
        </Link>
        <Link href={"/"}>
          <li>5</li>
        </Link>
      </ul>
    </div>
  );
}
