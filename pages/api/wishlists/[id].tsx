import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/api/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    // const { id } = req.query;
    const id = req.query.id as string;

    try {
      await prisma.wishlist.delete({
        where: {
          id,
        },
      });
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(400).end();
    }
  }
};

export default handler;
