import { mutationField, arg, nonNull } from '@nexus/schema'

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'PostWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Post', where })
    return prisma.post.deleteMany({ where } as any)
  },
})
