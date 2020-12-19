import { mutationField, arg, nonNull } from 'nexus'

export const PostUpdateManyMutation = mutationField('updateManyPost', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'PostWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'PostUpdateManyMutationInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.post.updateMany(args as any)
  },
})
