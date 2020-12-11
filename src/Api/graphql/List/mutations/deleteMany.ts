import { mutationField, arg, nonNull } from '@nexus/schema'

export const ListDeleteManyMutation = mutationField('deleteManyList', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ListWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'List', where })
    return prisma.list.deleteMany({ where } as any)
  },
})
