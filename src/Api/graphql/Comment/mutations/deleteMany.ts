import { mutationField, arg, nonNull } from 'nexus'

export const CommentDeleteManyMutation = mutationField('deleteManyComment', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'CommentWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Comment', where })
    return prisma.comment.deleteMany({ where } as any)
  },
})
