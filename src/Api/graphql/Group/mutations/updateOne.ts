import { mutationField, arg, nonNull } from '@nexus/schema'

export const GroupUpdateOneMutation = mutationField('updateOneGroup', {
  type: nonNull('Group'),
  args: {
    where: nonNull(
      arg({
        type: 'GroupWhereUniqueInput',
      }),
    ),
    data: nonNull(
      arg({
        type: 'GroupUpdateInput',
      }),
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.group.update({
      where,
      data,
      ...select,
    })
  },
})
