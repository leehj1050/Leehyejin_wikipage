import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./CommonComp.module.scss";
import { DataType } from "@/types/type";

interface CommonPropType {
  id: string;
  detailData?: DataType;
}

export default function CommonComp({ id, detailData }: CommonPropType) {
  const router = useRouter();

  /**변경된값저장 */
  const [userTitle, setUserTitle] = useState<string>("");
  const [userContent, setUserContent] = useState<string>("");

  /**제목,내용 onChange*/
  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      setUserTitle(e.target.value);
    } else {
      setUserContent(e.target.value);
    }
  };

  /**취소버튼*/
  const handleCancel = () => {
    if (confirm("작성중인 페이지를 나가시겠습니까?")) {
      router.push("/");
    }
  };

  /** 등록 & 수정완료 버튼 */
  const handleClick = () => {
    if (!userTitle) {
      alert("제목을 입력해주세요");
    } else if (!userContent) {
      alert("내용을 입력해주세요");
    } else {
      fetch(id === "new" ? "/api/write" : "/api/edit", {
        method: id === "new" ? "POST" : "PUT",
        body: JSON.stringify({
          title: userTitle,
          content: userContent,
          id: id,
        }),
      }).then((res) => {
        if (res.status === 200) router.push("/");
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
            defaultValue={detailData ? detailData.title : ""}
          />
        </div>
        <div className={styles.content_input}>
          <textarea
            name="content"
            onChange={(e) => handleChanges(e)}
            defaultValue={detailData ? detailData.content : ""}
          />
        </div>
        <div className={styles.btn_wrap}>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleClick}>
            {id === "new" ? "등록" : "수정완료"}
          </button>
        </div>
      </div>
    </main>
  );
}
