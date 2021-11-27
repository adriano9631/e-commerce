import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productId, image, alt, userId, price, productSlug } = req.body;
  if (req.method === "POST") {
    try {
      await prisma.wishlist.create({
        data: {
          id: productId,
          productSlug,
          image,
          alt,
          userId,
          price,
        },
      });
      res.status(200).end();
    } catch (error) {
      res.status(400).end();
    }
  }
};

export default handler;
