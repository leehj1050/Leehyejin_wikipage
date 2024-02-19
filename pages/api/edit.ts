import { db } from "@/utils/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function EditApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);

  await updateDoc(doc(db, "list", body.id), {
    ...body,
    timestamp: new Date(), //시간순 정렬을 위한
  });
  return res.status(200).json("수정 전송완료");
}
