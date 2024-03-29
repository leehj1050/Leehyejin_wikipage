"use client";
import React from "react";
import CommonComp from "@/app/components/common/CommonComp";
import { PropIdType } from "@/types/type";

export default function Write(prop: PropIdType) {
  const { id } = prop.params;
  return <CommonComp id={id} />;
}
