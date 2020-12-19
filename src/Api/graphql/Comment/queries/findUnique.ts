import { queryField, arg, nonNull } from 'nexus'

export const CommentFindUniqueQuery = queryField('findUniqueComment', {
  type: 'Comment',
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
