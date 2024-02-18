import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./CommonComp.module.scss";
import { CommonType, DataType } from "@/types/type";

export default function CommonComp({ id }: CommonType) {
  const router = useRouter();
  const [userTitle, setUserTitle] = useState<string>("");
  const [userContent, setUserContent] = useState<string>("");

  const [detailData, setDetailData] = useState<DataType>();

  if (id !== "new") {
    useEffect(() => {
      fetch(`/api/detail?id=${id}`)
        .then((res) => res.json())
        .then((res) => setDetailData(res));
    }, [id]);
  }

  /**제목,내용 onChange*/
  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      setUserTitle(e.target.value);
      console.log(e.target.value);
    } else {
      setUserContent(e.target.value);
      console.log(e.target.value);
    }
  };

  /**취소버튼*/
  const handleCancel = () => {
    if (confirm("작성중인 페이지를 나가시겠습니까?")) {
      router.push("/");
    }
  };

  /** 수정완료 버튼 */
  const handleClick = () => {
    if (!userTitle) {
      alert("제목을 입력해주세요");
    } else if (!userContent) {
      alert("내용을 입력해주세요");
    } else {
      fetch("/api/edit", {
        method: "PUT",
        body: JSON.stringify({
          title: userTitle,
          content: userContent,
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
            defaultValue={detailData?.title ? detailData.title : userTitle}
          />
        </div>
        <div className={styles.content_input}>
          <textarea
            name="content"
            onChange={(e) => handleChanges(e)}
            defaultValue={
              detailData?.content ? detailData.content : userContent
            }
          />
        </div>
        <div className={styles.btn_wrap}>
          <button onClick={handleCancel}>취소</button>
          <button onClick={() => handleClick()}>
            {id === "new" ? "등록" : "수정완료"}
          </button>
        </div>
      </div>
    </main>
  );
}
