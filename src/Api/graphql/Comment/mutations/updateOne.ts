import { mutationField, arg, nonNull } from 'nexus'

export const CommentUpdateOneMutation = mutationField('updateOneComment', {
  type: nonNull('Comment'),
  args: {
    where: nonNull(
      arg({
        type: 'CommentWhereUniqueInput',
      }),
    ),
    data: nonNull(
      arg({
        type: 'CommentUpdateInput',
      }),
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.comment.update({
      where,
      data,
      ...select,
    })
  },
})
