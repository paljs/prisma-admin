import { mutationField, nonNull } from 'nexus'

export const ListDeleteOneMutation = mutationField('deleteOneList', {
  type: 'List',
  args: {
    where: nonNull('ListWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.list.delete({
      where,
      ...select,
    })
  },
})
