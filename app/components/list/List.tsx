"use client";
import React, { useState } from "react";
import styles from "./list.module.scss";
import LocalPagination from "./components/LocalPagination";
import Link from "next/link";
import { DataType } from "@/types/type";
import { useAppContext } from "@/app/context";

export default function List() {
  const data: DataType[] = useAppContext();
  const [currentPost, setCurrentPost] = useState<DataType[]>(data); // 5개씩 보여주게 될 데이터

  return (
    <main className={styles.main}>
      <div className={styles.list_wrap}>
        <div className={styles.btn_wrap}>
          <Link href={"/write/new"}>글쓰기</Link>
        </div>
        <ul>
          {currentPost.map((list, idx) => {
            const id = list.id;
            return (
              <Link href={`/detail/${id}`} key={idx}>
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
        <LocalPagination data={data} setCurrentPost={setCurrentPost} />
      </div>
    </main>
  );
}
