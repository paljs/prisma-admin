import { mutationField, arg, nonNull } from 'nexus'

export const GroupDeleteManyMutation = mutationField('deleteManyGroup', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'GroupWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Group', where })
    return prisma.group.deleteMany({ where } as any)
  },
})
