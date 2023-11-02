import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

import { generateHash, generateShortUrl, validateUrl, findUrl } from './hashing/hashing'

const prisma = new PrismaClient()
const app = express()


const dataBase = [
  {
    "key": "1w2w3w4",
    "longUrl": "http://www.example.com",
    "shortUrl": "http://localhost:3000/1w2w3w4"
  }
]

app.use(express.json())

app.post(`/url`, async(req, res) => {
  const { longUrl } = req.body;

  // validateUrl
  if (!validateUrl(longUrl)) {
    res.status(422).json({ error: 'Invalid url! Please ensure the url you have submitted is valid'});
    return;
  };

  // create hash for long url
  const hash = generateHash(longUrl);
  console.log(hash);

  const shortUrl = generateShortUrl(hash);
  console.log(shortUrl);

  // const result = await prisma.shortUrl.create({
  //   data: {
  //     key,
  //     longUrl,
  //     shortUrl,
  //   },
  // });
  // res.json(result);
  return 'hallelujah'
})

app.get(`/:key`, async(req, res) => {
  const { key } = req.params;
  // look up the correct piece of data from data array (or database) - data object? not array? i.e. for speed of hash tables?
  const url = findUrl(key, dataBase);
  console.log(url);

  if (!url) {
    res.status(404).json({ error: 'Could not find that url...'})
  } else {
    res.status(302).redirect(url.longUrl)
  }

})

// ----------------------------------------------------------------

app.post(`/signup`, async (req, res) => {
  const { name, email, posts } = req.body

  const postData = posts?.map((post: Prisma.PostCreateInput) => {
    return { title: post?.title, content: post?.content }
  })

  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: postData,
      },
    },
  })
  res.json(result)
})

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

app.put('/post/:id/views', async (req, res) => {
  const { id } = req.params

  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    })

    res.json(post)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params

  try {
    const postData = await prisma.post.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      },
    })

    const updatedPost = await prisma.post.update({
      where: { id: Number(id) || undefined },
      data: { published: !postData?.published },
    })
    res.json(updatedPost)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/user/:id/drafts', async (req, res) => {
  const { id } = req.params

  const drafts = await prisma.user
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .posts({
      where: { published: false },
    })

  res.json(drafts)
})

app.get(`/post/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
})

app.get('/feed', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query

  const or: Prisma.PostWhereInput = searchString
    ? {
        OR: [
          { title: { contains: searchString as string } },
          { content: { contains: searchString as string } },
        ],
      }
    : {}

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      ...or,
    },
    include: { author: true },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      updatedAt: orderBy as Prisma.SortOrder,
    },
  })

  res.json(posts)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
