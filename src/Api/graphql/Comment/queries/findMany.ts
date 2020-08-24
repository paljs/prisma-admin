import { queryField, arg } from '@nexus/schema'

export const CommentFindManyQuery = queryField('findManyComment', {
  type: 'Comment',
  nullable: true,
  list: true,
  args: {
    where: 'CommentWhereInput',
    orderBy: arg({ type: 'CommentOrderByInput', list: true }),
    cursor: 'CommentWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.comment.findMany({
      ...args,
      ...select,
    }) as any
  },
})
