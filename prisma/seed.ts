import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  const test = await prisma.url.create({
    data: {
      key: '1w2w3w4',
      long_url: 'https://www.example.com',
      short_url: 'http://localhost:3000/1w2w3w4'
    }
  })

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
