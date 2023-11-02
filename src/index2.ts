import { Prisma, PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post(`/url`, async(req, res) => {
  const { longUrl } = req.body;
  // const result = await prisma.shortUrl.create({
  //   data: {
  //     key,
  //     longUrl,
  //     shortUrl,
  //   },
  // });
  // res.json(result);
})
