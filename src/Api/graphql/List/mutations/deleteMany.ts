import { mutationField, arg } from '@nexus/schema'

export const ListDeleteManyMutation = mutationField('deleteManyList', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ListWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'List', where })
    return prisma.list.deleteMany({ where } as any)
  },
})
