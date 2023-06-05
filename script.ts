import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  //   const user = await prisma.user.create({ data: { name: "Sally" } });
  //   console.log(user);
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
