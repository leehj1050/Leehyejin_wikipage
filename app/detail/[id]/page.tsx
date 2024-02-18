"use client";
import { DataType, PropIdType } from "@/types/type";
import React, { useEffect, useState } from "react";
import styles from "../style/Detail.module.scss";
import Link from "next/link";
import { useAppContext } from "@/app/context";

export default function Detail(prop: PropIdType) {
  const { id } = prop.params;

  const data: DataType[] = useAppContext();
  const [detailData, setDetailData] = useState<DataType>();

  useEffect(() => {
    fetch(`/api/detail?id=${id}`)
      .then((res) => res.json())
      .then((res) => setDetailData(res));
  }, []);

  /** 본문 내용에 다른본문의 제목이 포함 되면 링크 걸리게.. */
  let desc = detailData?.content;
  data?.forEach((doc) => {
    const regex = new RegExp(`${doc.title}(?!\\d)`, "g");
    if (desc?.match(regex) !== null) {
      desc = desc?.replace(
        regex,
        `<a href='/detail/${doc.id}' class='link_tag'>${doc.title}</a>`
      );
    }
  });

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <div>{detailData?.title}</div>
      </div>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: desc ?? "" }}></div>
      </div>
      <div className={styles.btn_box}>
        <Link href={`/edit/${id}`}>수정</Link>
        <Link href={"/"}>목록</Link>
        <Link href={"/"}>삭제</Link>
      </div>
    </main>
  );
}
