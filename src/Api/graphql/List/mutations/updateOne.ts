import { mutationField, arg, nonNull } from '@nexus/schema'

export const ListUpdateOneMutation = mutationField('updateOneList', {
  type: nonNull('List'),
  args: {
    where: nonNull(
      arg({
        type: 'ListWhereUniqueInput',
      }),
    ),
    data: nonNull(
      arg({
        type: 'ListUpdateInput',
      }),
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.list.update({
      where,
      data,
      ...select,
    })
  },
})
