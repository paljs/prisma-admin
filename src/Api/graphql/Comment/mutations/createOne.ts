import { mutationField, arg, nonNull } from 'nexus'

export const CommentCreateOneMutation = mutationField('createOneComment', {
  type: nonNull('Comment'),
  args: {
    data: nonNull(
      arg({
        type: 'CommentCreateInput',
      }),
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.comment.create({
      data,
      ...select,
    })
  },
})
