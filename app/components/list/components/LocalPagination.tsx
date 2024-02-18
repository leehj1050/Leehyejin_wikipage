import React, { useEffect, useState } from "react";
import styles from "./LocalPagination.module.scss";
import Pagination from "react-js-pagination";
import { DataType } from "@/types/type";

interface PropType {
  data: DataType[];
  setCurrentPost: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export default function LocalPagination({ data, setCurrentPost }: PropType) {
  const [currentPage, setCurrentPage] = useState<number>(1); //현재페이지
  const postPerPage: number = 5; //페이지당 게시글 수
  const indexOfLastPost: number = currentPage * postPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postPerPage;

  useEffect(() => {
    setCurrentPost(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [data, currentPage]);

  return (
    <div className={styles.page_wrap}>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={postPerPage}
        totalItemsCount={data.length}
        pageRangeDisplayed={5}
        onChange={(e) => {
          setCurrentPage(e);
        }}
        prevPageText={"‹"}
        nextPageText={"›"}
      />
    </div>
  );
}
