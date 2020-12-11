import { mutationField, arg, nonNull } from '@nexus/schema'

export const CommentDeleteOneMutation = mutationField('deleteOneComment', {
  type: 'Comment',
  args: {
    where: nonNull(
      arg({
        type: 'CommentWhereUniqueInput',
      }),
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Comment', where })
    return prisma.comment.delete({
      where,
      ...select,
    })
  },
})
