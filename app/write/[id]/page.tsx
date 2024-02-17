"use client";
import React, { useState } from "react";
import styles from "../style/Write.module.scss";
import { useRouter } from "next/navigation";

export default function Write() {
  const router = useRouter();
  const [userTitle, setUserTitle] = useState("");
  const [userContent, setUserContent] = useState("");

  /**제목,내용 onChange*/
  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      console.log(e.target.value);
      setUserTitle(e.target.value);
    } else {
      console.log(e.target.value);
      setUserContent(e.target.value);
    }
  };

  /**취소버튼*/
  const handleCancel = () => {
    if (confirm("작성중인 페이지를 나가시겠습니까?")) {
      router.push("/");
    }
  };

  /**등록버튼*/
  const handleClick = () => {
    if (!userTitle) {
      alert("제목을 입력해주세요");
    } else if (!userContent) {
      alert("내용을 입력해주세요");
    } else {
      fetch("/api/write", {
        method: "POST",
        body: JSON.stringify({
          title: userTitle,
          content: userContent,
        }),
      });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.form_wrap}>
        <div className={styles.title_input}>
          <input
            name="title"
            onChange={(e) => handleChanges(e)}
            value={userTitle}
          />
        </div>
        <div className={styles.content_input}>
          <textarea
            name="content"
            onChange={(e) => handleChanges(e)}
            value={userContent}
          />
        </div>
        <div className={styles.btn_wrap}>
          <button onClick={handleCancel}>취소</button>
          <button onClick={() => handleClick()}>등록</button>
        </div>
      </div>
    </main>
  );
}
