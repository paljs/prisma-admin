import { mutationField, arg } from '@nexus/schema'

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PostWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Post', where })
    return prisma.post.deleteMany({ where } as any)
  },
})
