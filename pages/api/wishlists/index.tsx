import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/api/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    productId,
    userId,
    price,
    productSlug,
    stock,
    name,
    description,
    details,
    images,
  } = req.body;
  if (req.method === "POST") {
    try {
      await prisma.wishlist.create({
        data: {
          id: productId,
          first_image: images[0].url,
          first_image_alt: images[0].alt,
          second_image: images[1]?.url,
          second_image_alt: images[1]?.alt,
          name,
          price,
          productSlug,
          details,
          description,
          userId,
          stock,
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
