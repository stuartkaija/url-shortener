import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors';

import { generateHash, generateShortUrl, validateUrl } from './helperFunctions'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors());

app.post(`/url`, async(req, res) => {
  console.log('post endpoint')
  const { longUrl } = req.body;

  if (!validateUrl(longUrl)) {
    res.status(422).json({ error: 'Invalid url! Please ensure the url you have submitted is valid' });
    return;
  };

  // create hash for long url
  const hash = generateHash(longUrl);
    
  const hashExists = await prisma.url.findUnique({
    where: {
      key: hash
    }
  })

  if (hashExists) {
    if (hashExists.long_url === longUrl) {
      res.status(200).json(hashExists);
    } else {
    // collision
      console.log('COLLISION!');
      res.status(500).json({ error: 'Sorry, we are having trouble dealing with that url.'})
    }
    return;
  }

  const shortUrl = generateShortUrl(hash);

  const result = await prisma.url.create({
    data: {
      key: hash,
      long_url: longUrl,
      short_url: shortUrl
    }
  })
  res.status(201).json(result);
})

app.get(`/:key`, async(req, res) => {
  const { key } = req.params;

  const urlObject = await prisma.url.findUnique({
    where: {
      key: key
    }
  })

  if (!urlObject) {
    res.status(404).json({ error: 'Could not find that url...'})
  } else {
    res.status(302).redirect(urlObject.long_url)
  }
})

app.delete(`/:key`, async(req, res) => {
  const { key } = req.params;

  const result = await prisma.url.delete({
    where: {
      key: key
    }
  })

  // do I need if logic to send status depending on if thing was deleted or not
  res.status(204).json(result);
})

const server = app.listen(3001, () =>
  console.log(`
🚀 Server ready at: http://localhost:3001
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
