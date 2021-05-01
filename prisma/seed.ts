import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import namor from 'namor';

const prisma = new PrismaClient();

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const getIdRange = (len: number) => Math.floor(Math.random() * len) || 1;

const newPerson = () => {
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    email: namor.generate({ words: 1, numbers: 0 }) + '@' + namor.generate({ words: 1, numbers: 0 }) + '.com',
    password: hashSync(namor.generate({ words: 1, numbers: 0 }), 10),
    groupId: getIdRange(15),
  };
};

const newPost = () => {
  return {
    title: namor.generate({ words: 3, numbers: 0 }),
    published: true,
    authorId: getIdRange(50),
  };
};

const newComment = () => {
  return {
    contain: namor.generate({ words: 4, numbers: 0 }),
    authorId: getIdRange(50),
    postId: getIdRange(50),
  };
};

async function main() {
  await prisma.group.createMany({
    data: range(15).map(() => ({
      name: namor.generate({ words: 1, numbers: 0 }),
    })),
  });

  await prisma.user.createMany({
    data: range(50).map(() => newPerson()),
  });

  await prisma.post.createMany({
    data: range(50).map(() => newPost()),
  });

  await prisma.comment.createMany({
    data: range(50).map(() => newComment()),
  });

  await prisma.list.create({
    data: {
      string: range(5).map(() => namor.generate({ words: 1, numbers: 0 })),
      integer: range(5).map(() => Math.floor(Math.random() * 100)),
      float: range(5).map(() => parseFloat((Math.random() * 100).toFixed(2))),
      enums: ['ADMIN', 'USER'],
      boolean: [true, false, true],
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
