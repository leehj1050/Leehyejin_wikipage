"use client";
import React, { useEffect, useState } from "react";
import styles from "./list.module.scss";
import Pagination from "./components/PageNumber";
import Link from "next/link";
import { DataType } from "@/types/type";

export default function List() {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch("/api/getList")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.list_wrap}>
        <div className={styles.btn_wrap}>
          <Link href={"/write/new"}>글쓰기</Link>
        </div>
        <ul>
          {data.map((list, idx) => {
            return (
              <Link href={"/"} key={idx}>
                <li>
                  <h3>{list.title}</h3>
                  <p>{list.content}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <Pagination />
      </div>
    </main>
  );
}
