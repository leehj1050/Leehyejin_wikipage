"use client";
import React, { useEffect, useState } from "react";
import { DataType, PropIdType } from "@/types/type";
import CommonComp from "@/app/components/common/CommonComp";

export default function Edit(prop: PropIdType) {
  const [detailData, setDetailData] = useState<DataType>();

  useEffect(() => {
    fetch(`/api/detail?id=${id}`)
      .then((res) => res.json())
      .then((res) => setDetailData(res));
  }, []);

  const { id } = prop.params;
  return <CommonComp id={id} detailData={detailData} />;
}
