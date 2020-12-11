import { mutationField, arg, nonNull } from '@nexus/schema'

export const CommentUpdateManyMutation = mutationField('updateManyComment', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'CommentWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'CommentUpdateManyMutationInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.updateMany(args as any)
  },
})
