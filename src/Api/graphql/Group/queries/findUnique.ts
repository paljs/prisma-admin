import { queryField, arg, nonNull } from 'nexus'

export const GroupFindUniqueQuery = queryField('findUniqueGroup', {
  type: 'Group',
  args: {
    where: arg({
      type: 'GroupWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.group.findUnique({
      where,
      ...select,
    })
  },
})
