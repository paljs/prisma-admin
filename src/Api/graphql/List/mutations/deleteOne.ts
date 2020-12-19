import { mutationField, arg, nonNull } from 'nexus'

export const ListDeleteOneMutation = mutationField('deleteOneList', {
  type: 'List',
  args: {
    where: nonNull(
      arg({
        type: 'ListWhereUniqueInput',
      }),
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'List', where })
    return prisma.list.delete({
      where,
      ...select,
    })
  },
})
