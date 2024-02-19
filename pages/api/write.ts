import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore/lite";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function WriteApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  if (req.method === "POST") {
    await addDoc(collection(db, "list"), {
      title: body.title,
      content: body.content,
      timestamp: new Date(),
    });
  }

  return res.status(200).json("등록 전송완료");
}
