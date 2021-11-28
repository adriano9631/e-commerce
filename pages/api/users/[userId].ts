import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT" && req.body.url) {
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
      res.status(400).end();
    }
  }
  if (req.method === "PUT" && req.body.name) {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: req.query.userId as string,
        },
        data: {
          name: req.body.name,
        },
      });
      res.json(updatedUser.name);
      res.status(200).end();
    } catch (error) {
      res.status(400).end();
    }
  }
};

export default handler;
