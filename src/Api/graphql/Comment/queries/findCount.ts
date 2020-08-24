import { queryField, arg } from '@nexus/schema'

export const CommentFindManyCountQuery = queryField('findManyCommentCount', {
  type: 'Int',
  args: {
    where: 'CommentWhereInput',
    orderBy: arg({ type: 'CommentOrderByInput', list: true }),
    cursor: 'CommentWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.count(args)
  },
})
