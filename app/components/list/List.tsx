import React from "react";
import styles from "./list.module.scss";
import Pagination from "./components/PageNumber";
import Link from "next/link";

export default function List() {
  return (
    <main className={styles.main}>
      <div className={styles.list_wrap}>
        <div className={styles.btn_wrap}>
          <Link href={"/write"}>글쓰기</Link>
        </div>
        <ul>
          <Link href={"/"}>
            <li>
              <h3>클라우드 기본 이해</h3>
              <p>
                클라우드의 주요 인프라 개념을 이해하며. 협업을 위한 DevOps개념과
                개발환경에 대해 학습할 수 있습니다. 클라우드에서 제공하는
                서비스를...
              </p>
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              <h3>클라우드 인프라 구성</h3>
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              <h3>쿠버네티스 환경 구축 및 운영</h3>
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              <h3>클라우드 인프라 자동화</h3>
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              <h3>데이터 전처리</h3>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <Pagination />
      </div>
    </main>
  );
}
