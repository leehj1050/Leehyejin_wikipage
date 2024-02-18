import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function DtailApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const getDetail = (await getDoc(doc(db, "list", id))).data();

  return res.status(200).json(getDetail);
}
