import { mutationField, arg } from '@nexus/schema'

export const GroupDeleteManyMutation = mutationField('deleteManyGroup', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'GroupWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Group', where })
    return prisma.group.deleteMany({ where })
  },
})
