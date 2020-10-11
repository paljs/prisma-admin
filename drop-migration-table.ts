import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$executeRaw('DROP TABLE "public"."_Migration" CASCADE;');
  } catch (e) {
    console.log(e);
  }
  process.exit();
}

main();
