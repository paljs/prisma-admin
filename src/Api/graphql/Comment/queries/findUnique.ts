import { queryField, arg } from '@nexus/schema'

export const CommentFindUniqueQuery = queryField('findUniqueComment', {
  type: 'Comment',
  nullable: true,
  args: {
    where: arg({
      type: 'CommentWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.comment.findUnique({
      where,
      ...select,
    })
  },
})
