import { queryField, arg } from '@nexus/schema'

export const CommentFindCountQuery = queryField('findManyCommentCount', {
  type: 'Int',
  args: {
    where: 'CommentWhereInput',
    orderBy: arg({ type: 'CommentOrderByInput', list: true }),
    cursor: 'CommentWhereUniqueInput',
    distinct: 'CommentDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.count(args as any)
  },
})
