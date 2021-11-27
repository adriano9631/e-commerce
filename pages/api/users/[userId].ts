import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    try {
      await prisma.user.update({
        where: {
          id: req.query.userId as string,
        },
        data: {
          image: req.body.url,
        },
      });
      res.status(200).end();
    } catch (error) {
      console.log(error);

      res.status(400).end();
    }
  }
  if (req.method === "POST") {
  }
};

export default handler;
