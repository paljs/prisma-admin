import { mutationField, nonNull } from 'nexus'

export const ListUpdateOneMutation = mutationField('updateOneList', {
  type: nonNull('List'),
  args: {
    data: nonNull('ListUpdateInput'),
    where: nonNull('ListWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.list.update({
      where,
      data,
      ...select,
    })
  },
})
