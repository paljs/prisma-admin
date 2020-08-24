import { mutationField, arg } from '@nexus/schema'

export const GroupDeleteOneMutation = mutationField('deleteOneGroup', {
  type: 'Group',
  nullable: true,
  args: {
    where: arg({
      type: 'GroupWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Group', where })
    return prisma.group.delete({
      where,
      ...select,
    }) as any
  },
})
