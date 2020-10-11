import { mutationField, arg } from '@nexus/schema'

export const ListDeleteOneMutation = mutationField('deleteOneList', {
  type: 'List',
  nullable: true,
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'List', where })
    return prisma.list.delete({
      where,
      ...select,
    })
  },
})
