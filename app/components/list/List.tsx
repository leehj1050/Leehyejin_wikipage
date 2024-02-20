"use client";
import React, { useEffect, useState } from "react";
import styles from "./List.module.scss";
import LocalPagination from "./components/LocalPagination";
import Link from "next/link";
import { DataType } from "@/types/type";
import Loading from "../loading/Loading";

export default function List() {
  const [data, setData] = useState<DataType[]>([]);
  const [currentPost, setCurrentPost] = useState<DataType[]>(data); // 5개씩 보여주게 될 데이터
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getList")
      .then((res) => res.json())
      .then((res) => {
        setData(res), setLoading(false);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.list_wrap}>
        <div className={styles.btn_wrap}>
          <Link href={"/write/new"}>글쓰기</Link>
        </div>
        <ul>
          {loading ? (
            <Loading />
          ) : (
            currentPost.map((list, idx) => {
              const id = list.id;
              return (
                <Link href={`/detail/${id}`} key={idx}>
                  <li>
                    <h3>{list.title}</h3>
                    <p>{list.content}</p>
                  </li>
                </Link>
              );
            })
          )}
        </ul>
      </div>
      <div>
        <LocalPagination data={data} setCurrentPost={setCurrentPost} />
      </div>
    </main>
  );
}
