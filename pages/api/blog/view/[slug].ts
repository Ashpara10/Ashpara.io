import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const slugparam = req.query.slug.toString();
  return res.status(200).json({ slug: slugparam });
};

export default handler;
