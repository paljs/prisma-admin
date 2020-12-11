import { queryField, arg, nonNull } from '@nexus/schema'

export const CommentFindUniqueQuery = queryField('findUniqueComment', {
  type: nonNull('Comment'),
  args: {
    where: arg({
      type: 'CommentWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.comment.findUnique({
      where,
      ...select,
    })
  },
})
