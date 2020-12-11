import { queryField, arg, nonNull, list } from '@nexus/schema'

export const CommentFindCountQuery = queryField('findManyCommentCount', {
  type: nonNull('Int'),
  args: {
    where: 'CommentWhereInput',
    orderBy: list(arg({ type: 'CommentOrderByInput' })),
    cursor: 'CommentWhereUniqueInput',
    distinct: 'CommentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.count(args as any)
  },
})
