import { mutationField, arg, nonNull } from 'nexus'

export const CommentUpsertOneMutation = mutationField('upsertOneComment', {
  type: nonNull('Comment'),
  args: {
    where: nonNull(
      arg({
        type: 'CommentWhereUniqueInput',
      }),
    ),
    create: nonNull(
      arg({
        type: 'CommentCreateInput',
      }),
    ),
    update: nonNull(
      arg({
        type: 'CommentUpdateInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.comment.upsert({
      ...args,
      ...select,
    })
  },
})
