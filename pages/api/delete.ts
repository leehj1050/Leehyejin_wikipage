import { db } from "@/utils/firebase";
import { deleteDoc, doc } from "firebase/firestore/lite";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function DetailApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  await deleteDoc(doc(db, "list", id));
  return res.status(200).json("삭제완료");
}
