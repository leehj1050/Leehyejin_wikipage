"use client";
import React from "react";
import { PropIdType } from "@/types/type";
import CommonComp from "@/app/components/common/CommonComp";

export default function Edit(prop: PropIdType) {
  const { id } = prop.params;
  return <CommonComp id={id} />;
}
