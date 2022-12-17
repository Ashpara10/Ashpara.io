import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import supabase from "../../../../Components/lib/supabase";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const slugparam = req.query.slug.toString();

  if (req.method === "GET") {
    const { data } = await supabase.from("metrics").select(``);
    res.status(200).json({ total: data });
  }

  if (req.method === "POST") {
    // res.status(200).json({ total: view });
  }
};

export default handler;
